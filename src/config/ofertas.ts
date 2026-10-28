// Tabela oficial de preços (manual · 2 · 05.05c, revisão 12.10.2026). Parcelas calculadas pela Hotmart.
export type CursoId = 'antes-da-foto' | 'luz-na-pratica' | 'mais-que-um-click';
export type OfertaId = CursoId | 'luz-antes-da-foto' | 'click-antes-da-foto' | 'click-luz' | 'completo';

interface Preco { avista: number; parcela12: number }
export interface Oferta {
  id: OfertaId;
  nome: string;
  cursos: CursoId[];
  separado: number;
  descontoComboPct: number | null;
  normal: Preco;
  bf: Preco & { descontoPct: number };
}

export const ORDEM_CURSOS: CursoId[] = ['antes-da-foto', 'luz-na-pratica', 'mais-que-um-click'];

export const OFERTAS: Record<OfertaId, Oferta> = {
  'antes-da-foto': { id: 'antes-da-foto', nome: 'Antes da Foto', cursos: ['antes-da-foto'], separado: 197, descontoComboPct: null, normal: { avista: 197, parcela12: 20.37 }, bf: { avista: 97, parcela12: 10.03, descontoPct: 51 } },
  'luz-na-pratica': { id: 'luz-na-pratica', nome: 'Luz na Prática', cursos: ['luz-na-pratica'], separado: 447, descontoComboPct: null, normal: { avista: 447, parcela12: 46.23 }, bf: { avista: 217, parcela12: 22.44, descontoPct: 51 } },
  'mais-que-um-click': { id: 'mais-que-um-click', nome: 'Mais que um Click', cursos: ['mais-que-um-click'], separado: 997, descontoComboPct: null, normal: { avista: 997, parcela12: 103.11 }, bf: { avista: 497, parcela12: 51.4, descontoPct: 50 } },
  'luz-antes-da-foto': { id: 'luz-antes-da-foto', nome: 'Luz na Prática + Antes da Foto', cursos: ['antes-da-foto', 'luz-na-pratica'], separado: 644, descontoComboPct: 10, normal: { avista: 577, parcela12: 59.68 }, bf: { avista: 287, parcela12: 29.68, descontoPct: 55 } },
  'click-antes-da-foto': { id: 'click-antes-da-foto', nome: 'Mais que um Click + Antes da Foto', cursos: ['antes-da-foto', 'mais-que-um-click'], separado: 1194, descontoComboPct: 10, normal: { avista: 1077, parcela12: 111.39 }, bf: { avista: 537, parcela12: 55.54, descontoPct: 55 } },
  'click-luz': { id: 'click-luz', nome: 'Mais que um Click + Luz na Prática', cursos: ['luz-na-pratica', 'mais-que-um-click'], separado: 1444, descontoComboPct: 10, normal: { avista: 1297, parcela12: 134.14 }, bf: { avista: 647, parcela12: 66.91, descontoPct: 55 } },
  completo: { id: 'completo', nome: 'Completo (os três)', cursos: ['antes-da-foto', 'luz-na-pratica', 'mais-que-um-click'], separado: 1641, descontoComboPct: 15, normal: { avista: 1397, parcela12: 144.48 }, bf: { avista: 697, parcela12: 72.09, descontoPct: 57 } },
};

export function ofertaPorCursos(selecionados: CursoId[]): Oferta | null {
  const chave = ORDEM_CURSOS.filter((c) => selecionados.includes(c)).join('+');
  return Object.values(OFERTAS).find((o) => o.cursos.join('+') === chave) ?? null;
}

export function economia(o: Oferta, bf: boolean): number {
  if (bf) return o.separado - o.bf.avista;
  return o.cursos.length > 1 ? o.separado - o.normal.avista : 0;
}

const fmt0 = new Intl.NumberFormat('pt-BR', { minimumFractionDigits: 0, maximumFractionDigits: 0 });
const fmt2 = new Intl.NumberFormat('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
// "1.397" · "20,37" (o "R$" fica no layout, como no manual)
export const valor = (v: number) => (Number.isInteger(v) ? fmt0 : fmt2).format(v);
