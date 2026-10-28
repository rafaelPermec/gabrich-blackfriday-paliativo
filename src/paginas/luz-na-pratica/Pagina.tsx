'use client';
import { Corpo } from './Corpo';
import { ALUNOS, FAQ, MODULOS, P } from './dados';
import { usePaginaCurso, type ConfigCurso } from '../curso/usePaginaCurso';

// Página Luz na Prática: dados em ./dados.ts, estado em ../curso/usePaginaCurso.ts, layout em ./Corpo.tsx.
export function Pagina({ fase }: { fase: ConfigCurso['fase'] }) {
  const v = usePaginaCurso({
    fase, modulos: MODULOS, alunos: ALUNOS, faq: FAQ, P,
    precos: { pN: 'R$ 447', pN12: 'R$ 46,23', pB: 'R$ 217', pB12: 'R$ 22,44' },
    checkout: ['#checkout-luz-na-pratica', '#checkout-bf26-luz-na-pratica'],
    cores: { numCor: ['#1E1A17', '#6B4F3A'], numCorD: ['#D9A648', '#B7A793'], alunoBg: '#F4F0E8', alunoFg: '#1E1A17' },
  });
  return <Corpo v={v} />;
}
