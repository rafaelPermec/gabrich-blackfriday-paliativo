// Atribuição de campanha (primeiro toque). Código isomórfico: roda no proxy e no navegador.
export const COOKIE_ATRIBUICAO = 'dg_atrib';
export const VALIDADE_DIAS = 180;

export const PARAMS_UTM = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term'] as const;
export const IDS_CLIQUE = ['fbclid', 'gclid'] as const;
type Chave = (typeof PARAMS_UTM)[number] | (typeof IDS_CLIQUE)[number];

export type Atribuicao = Partial<Record<Chave, string>> & {
  landing?: string; // primeira página vista
  ref?: string; // domínio de origem
  ts: number;
};

const CHAVES: readonly string[] = [...PARAMS_UTM, ...IDS_CLIQUE];
const limpar = (v: string) => v.replace(/[\u0000-\u001f<>"'`\\]/g, '').trim().slice(0, 150);

export function lerDeParams(sp: URLSearchParams): Partial<Record<Chave, string>> | null {
  const out: Partial<Record<Chave, string>> = {};
  for (const k of CHAVES) {
    const v = sp.get(k);
    if (v) out[k as Chave] = limpar(v);
  }
  // Só conta como campanha se houver utm_source ou id de clique.
  return out.utm_source || out.fbclid || out.gclid ? out : null;
}

const paraB64 = (s: string) =>
  btoa(String.fromCharCode(...new TextEncoder().encode(s))).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
const deB64 = (s: string) =>
  new TextDecoder().decode(Uint8Array.from(atob(s.replace(/-/g, '+').replace(/_/g, '/')), (c) => c.charCodeAt(0)));

export const serializar = (a: Atribuicao) => paraB64(JSON.stringify(a));

export function desserializar(valor: string | undefined | null): Atribuicao | null {
  if (!valor) return null;
  try {
    const bruto = JSON.parse(deB64(valor)) as Record<string, unknown>;
    if (typeof bruto.ts !== 'number') return null;
    const a: Atribuicao = { ts: bruto.ts };
    for (const k of [...CHAVES, 'landing', 'ref']) {
      const v = bruto[k];
      if (typeof v === 'string') (a as Record<string, unknown>)[k] = limpar(v);
    }
    return a;
  } catch {
    return null;
  }
}

export interface Origem { pagina: string; posicao: string }

/**
 * Leva a atribuição para o checkout da Hotmart:
 * - utm_* repassados como vieram
 * - sck = source|medium|campaign|content|term (relatório de vendas da Hotmart)
 * - src = página_posição do botão clicado
 */
export function montarUrlCheckout(base: string, a: Atribuicao | null, origem: Origem): string {
  let u: URL;
  try { u = new URL(base); } catch { return base; }
  if (u.protocol !== 'https:' && u.protocol !== 'http:') return base;
  if (a) {
    for (const k of PARAMS_UTM) if (a[k] && !u.searchParams.has(k)) u.searchParams.set(k, a[k]!);
    if (a.utm_source && !u.searchParams.has('sck')) {
      u.searchParams.set('sck', PARAMS_UTM.map((k) => a[k] ?? '').join('|'));
    }
  }
  if (!u.searchParams.has('src')) u.searchParams.set('src', `${origem.pagina}_${origem.posicao}`.slice(0, 60));
  return u.toString();
}

// Campanha da visita atual, só em memória (some ao fechar a aba). Não grava nada no aparelho.
let daSessao: Atribuicao | null | undefined;

/** Chamar no primeiro carregamento. Guarda em memória a UTM com que a pessoa chegou. */
export function capturarDaUrl() {
  if (typeof window === 'undefined' || daSessao !== undefined) return;
  const atual = lerDeParams(new URLSearchParams(window.location.search));
  let ref: string | undefined;
  try { ref = document.referrer ? new URL(document.referrer).hostname : undefined; } catch { /* vazio */ }
  daSessao = atual ? { ...atual, landing: window.location.pathname, ref, ts: Date.now() } : null;
}

function lerCookie(): Atribuicao | null {
  const m = document.cookie.match(new RegExp(`(?:^|; )${COOKIE_ATRIBUICAO}=([^;]*)`));
  return desserializar(m?.[1] ? decodeURIComponent(m[1]) : null);
}

/**
 * Só depois do aceite de marketing: grava a primeira campanha (não sobrescreve).
 * Validade de 180 dias.
 */
export function gravarPrimeiroToque() {
  if (typeof document === 'undefined') return;
  capturarDaUrl();
  if (!daSessao || lerCookie()) return;
  const seguro = window.location.protocol === 'https:' ? '; Secure' : '';
  document.cookie = `${COOKIE_ATRIBUICAO}=${serializar(daSessao)}; Max-Age=${VALIDADE_DIAS * 86400}; Path=/; SameSite=Lax${seguro}`;
}

export function apagarAtribuicao() {
  if (typeof document === 'undefined') return;
  document.cookie = `${COOKIE_ATRIBUICAO}=; Max-Age=0; Path=/`;
}

/** Cookie (primeiro toque, se houve aceite) · senão a campanha desta visita, em memória. */
export function lerAtribuicaoDoNavegador(): Atribuicao | null {
  if (typeof document === 'undefined') return null;
  capturarDaUrl();
  return lerCookie() ?? daSessao ?? null;
}
