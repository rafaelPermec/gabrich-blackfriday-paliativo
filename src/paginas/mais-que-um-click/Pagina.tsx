'use client';
import { Corpo } from './Corpo';
import { ALUNOS, FAQ, MODULOS, P } from './dados';
import { usePaginaCurso, type ConfigCurso } from '../curso/usePaginaCurso';

// Página Mais que um Click: dados em ./dados.ts, estado em ../curso/usePaginaCurso.ts, layout em ./Corpo.tsx.
export function Pagina({ fase }: { fase: ConfigCurso['fase'] }) {
  const v = usePaginaCurso({
    fase, modulos: MODULOS, alunos: ALUNOS, faq: FAQ, P,
    precos: { pN: 'R$ 997', pN12: 'R$ 103,11', pB: 'R$ 497', pB12: 'R$ 51,40' },
    checkout: ['#checkout-mais-que-um-click', '#checkout-bf26-mais-que-um-click'],
    cores: { numCor: ['#201F1D', '#8C857A'], numCorD: ['#F5C242', '#D9D5CC'], alunoBg: '#F6F3EC', alunoFg: '#201F1D' },
    extras: (bf) => ({
      ctaInscrever: bf ? 'garantir com 50%' : 'quero me inscrever no mais que um click',
      ctaMinha: bf ? 'garantir com 50%' : 'quero garantir a minha vaga',
    }),
  });
  return <Corpo v={v} />;
}
