'use client';
import { useState } from 'react';
import { CAPS } from './dados';
import { Corpo } from './Corpo';

const PROJ: [string, string][] = [['granado', 'projeto granado'], ['adobe', 'projeto adobe']];

// Estado da página (portado da lógica do arquivo "AdF Pagina - Manual v2").
export function PaginaAdf({ fase, selo = 'ocre' }: { fase: 'normal' | 'abertura' | 'ultima' | 'encerrado'; selo?: 'ocre' | 'whiskey' }) {
  const [aberto, setAberto] = useState(1);
  const [proj, setProj] = useState('granado');
  const T = ({ abertura: ['-50%', 'BLACK FRIDAY'], ultima: ['-50%', 'ÚLTIMOS DIAS'] } as Record<string, string[]>)[fase];
  const isBF = fase === 'abertura' || fase === 'ultima';
  const v = {
    fase, selo, bf: selo === 'whiskey' ? '#D39858' : '#CCAA66',
    hasTags: !!T, tagA: T?.[0], tagB: T?.[1], isBF, notBF: !isBF,
    cta: isBF ? 'garantir com 50%' : 'quero o e-book', ctaHref: '#oferta',
    isLista: false, notLista: true, isUltima: fase === 'ultima',
    capitulos: CAPS.map((c, i) => ({ ...c, thumb: `/m/assets/paginas/${c.thumb}.png`, aberto: aberto === i, sinal: aberto === i ? '−' : '+', toggle: () => setAberto(aberto === i ? -1 : i) })),
    projetos: PROJ.map(([k, l]) => ({ label: l, bg: k === proj ? '#D39858' : 'transparent', fg: k === proj ? '#0B0B0B' : '#DDCBBA', set: () => setProj(k) })),
    planSrc: `/m/assets/plan/${proj}-plan.jpg`, finalSrc: `/m/assets/plan/${proj}-final.jpg`,
  };
  return <Corpo v={v} />;
}
