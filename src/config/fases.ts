import 'server-only';

// Feature flags de fase, uma por página. Lidas no build (server components).
export const FASES = {
  cursos: ['normal', 'lista', 'bf'],
  'antes-da-foto': ['normal', 'abertura', 'ultima', 'encerrado'],
  'luz-na-pratica': ['normal', 'abertura', 'ultima', 'encerrado'],
  'mais-que-um-click': ['normal', 'abertura', 'ultima', 'encerrado'],
  'no-estudio': ['lista', 'vagas'],
  mentoria: ['unica'],
} as const;

export type PaginaComFase = keyof typeof FASES;
export type FaseDe<P extends PaginaComFase> = (typeof FASES)[P][number];

const VARIAVEL: Record<PaginaComFase, string> = {
  cursos: 'FASE_CURSOS',
  'antes-da-foto': 'FASE_ANTES_DA_FOTO',
  'luz-na-pratica': 'FASE_LUZ_NA_PRATICA',
  'mais-que-um-click': 'FASE_MAIS_QUE_UM_CLICK',
  'no-estudio': 'FASE_NO_ESTUDIO',
  mentoria: 'FASE_MENTORIA',
};

// Acesso estático: necessário para o bundler enxergar cada variável.
const VALORES: Record<PaginaComFase, string | undefined> = {
  cursos: process.env.FASE_CURSOS,
  'antes-da-foto': process.env.FASE_ANTES_DA_FOTO,
  'luz-na-pratica': process.env.FASE_LUZ_NA_PRATICA,
  'mais-que-um-click': process.env.FASE_MAIS_QUE_UM_CLICK,
  'no-estudio': process.env.FASE_NO_ESTUDIO,
  mentoria: process.env.FASE_MENTORIA,
};

export function getFase<P extends PaginaComFase>(pagina: P): FaseDe<P> {
  const permitidas = FASES[pagina] as readonly string[];
  const bruto = VALORES[pagina]?.trim().toLowerCase();
  if (!bruto) return permitidas[0] as FaseDe<P>;
  if (permitidas.includes(bruto)) return bruto as FaseDe<P>;
  // Falha o build: melhor não publicar do que publicar a fase errada.
  throw new Error(`[fases] ${VARIAVEL[pagina]}="${bruto}" inválido. Use: ${permitidas.join(' | ')}`);
}

export const emBlackFriday = (fase: string) => fase === 'bf' || fase === 'abertura' || fase === 'ultima';
export const emListaDeEspera = (fase: string) => fase === 'lista';
