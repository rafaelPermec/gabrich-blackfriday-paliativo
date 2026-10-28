import type { OfertaId } from './ofertas';
import { SITE } from './site';

// Todos os destinos externos do site num lugar só. Troque `url` quando a Hotmart entregar os links.
export interface Link { name: string; url: string }

const MARCADOR = 'https://pay.hotmart.com/PENDENTE';
const pendente = (id: string) => `${MARCADOR}?id=${id}`;
export const isPendente = (l: Link) => l.url.startsWith(MARCADOR);

export const CHECKOUT: Record<OfertaId, Link> = {
  'antes-da-foto': { name: 'Checkout · Antes da Foto', url: pendente('checkout-antes-da-foto') },
  'luz-na-pratica': { name: 'Checkout · Luz na Prática', url: pendente('checkout-luz-na-pratica') },
  'mais-que-um-click': { name: 'Checkout · Mais que um Click', url: pendente('checkout-mais-que-um-click') },
  'luz-antes-da-foto': { name: 'Checkout · Luz na Prática + Antes da Foto', url: pendente('checkout-luz-antes-da-foto') },
  'click-antes-da-foto': { name: 'Checkout · Mais que um Click + Antes da Foto', url: pendente('checkout-click-antes-da-foto') },
  'click-luz': { name: 'Checkout · Mais que um Click + Luz na Prática', url: pendente('checkout-click-luz') },
  completo: { name: 'Checkout · Completo', url: pendente('checkout-completo') },
};

export const CHECKOUT_BF: Record<OfertaId, Link> = {
  'antes-da-foto': { name: 'Black Friday 2026 · Antes da Foto', url: pendente('checkout-bf26-antes-da-foto') },
  'luz-na-pratica': { name: 'Black Friday 2026 · Luz na Prática', url: pendente('checkout-bf26-luz-na-pratica') },
  'mais-que-um-click': { name: 'Black Friday 2026 · Mais que um Click', url: pendente('checkout-bf26-mais-que-um-click') },
  'luz-antes-da-foto': { name: 'Black Friday 2026 · Luz na Prática + Antes da Foto', url: pendente('checkout-bf26-luz-antes-da-foto') },
  'click-antes-da-foto': { name: 'Black Friday 2026 · Mais que um Click + Antes da Foto', url: pendente('checkout-bf26-click-antes-da-foto') },
  'click-luz': { name: 'Black Friday 2026 · Mais que um Click + Luz na Prática', url: pendente('checkout-bf26-click-luz') },
  completo: { name: 'Black Friday 2026 · Completo', url: pendente('checkout-bf26-completo') },
};

export const INSCRICAO = {
  'no-estudio': { name: 'Inscrição · No Estúdio', url: pendente('inscricao-no-estudio') },
} satisfies Record<string, Link>;

// Formulários do Hotmart Send. Copie do código de incorporação: `acao` = action do <form>,
// `campos` = name de cada input. `ocultos` = inputs hidden que o Hotmart Send exigir.
// Com `acao` vazia (desenvolvimento) o formulário só simula o envio e vai para /obrigado.
export interface FormularioSend {
  name: string;
  acao: string;
  campos: { nome: string; email: string; whatsapp: string; interesse: string };
  ocultos: Record<string, string>;
}
const CAMPOS_PADRAO = { nome: 'name', email: 'email', whatsapp: 'phone', interesse: 'interesse' };

export const LISTA_ESPERA = {
  cursos: { name: 'Lista · Black Friday 2026', acao: '', campos: CAMPOS_PADRAO, ocultos: {} },
  'no-estudio': { name: 'Lista · No Estúdio', acao: '', campos: CAMPOS_PADRAO, ocultos: {} },
} satisfies Record<string, FormularioSend>;

export const CONTATO = {
  geral: { name: 'E-mail de contato', url: `mailto:${SITE.email}` },
  mentoria: { name: 'Mentoria · e-mail', url: `mailto:${SITE.email}?subject=Mentoria%20individual` },
  instagram: { name: '@deboragabrich', url: 'https://www.instagram.com/deboragabrich' },
} satisfies Record<string, Link>;

export const checkout = (oferta: OfertaId, bf: boolean): Link => (bf ? CHECKOUT_BF : CHECKOUT)[oferta];

// Ids usados nos botões do manual (2 · 07) -> link. Ex.: "checkout-bf26-completo".
export const LINK_POR_ID: Record<string, Link> = {
  ...Object.fromEntries(Object.entries(CHECKOUT).map(([k, l]) => [`checkout-${k}`, l])),
  ...Object.fromEntries(Object.entries(CHECKOUT_BF).map(([k, l]) => [`checkout-bf26-${k}`, l])),
  'checkout-no-estudio': INSCRICAO['no-estudio'],
  contato: CONTATO.geral,
  instagram: CONTATO.instagram,
};

const TODOS: Link[] = [
  ...Object.values(CHECKOUT),
  ...Object.values(CHECKOUT_BF),
  ...Object.values(INSCRICAO),
];

if (process.env.EXIGIR_LINKS_FINAIS === 'true') {
  const faltam = TODOS.filter(isPendente).map((l) => l.name);
  if (faltam.length) throw new Error(`[links] Ainda são marcadores: ${faltam.join(', ')}`);
}
