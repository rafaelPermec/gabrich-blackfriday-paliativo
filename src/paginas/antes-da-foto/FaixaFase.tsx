'use client';
import { useEffect, useState } from 'react';
import { BF26 } from '@/config/black-friday';
import { FaixaFaseCorpo } from './FaixaFaseCorpo';

const dois = (n: number) => String(n).padStart(2, '0');

// Faixa do topo do Antes da Foto por fase. Contador real até o fim do desconto (fase "ultima").
export function FaixaFase({ fase, selo = 'ocre' }: { fase: string; selo?: string }) {
  const [t, setT] = useState<number | null>(null);
  useEffect(() => {
    if (fase !== 'ultima') return;
    const alvo = Date.parse(BF26.fimDoDesconto);
    const tick = () => setT(Math.max(0, alvo - Date.now()));
    tick();
    const id = window.setInterval(tick, 1000);
    return () => window.clearInterval(id);
  }, [fase]);
  const d = t === null ? ['--', '--', '--', '--'] : [Math.floor(t / 864e5), Math.floor(t / 36e5) % 24, Math.floor(t / 6e4) % 60, Math.floor(t / 1e3) % 60].map(dois);
  const v = {
    bf: selo === 'whiskey' ? '#D39858' : '#CCAA66',
    isLista: false,
    isAbertura: fase === 'abertura' || fase === 'ultima',
    showCounter: fase === 'ultima',
    isEncerrado: fase === 'encerrado',
    frase: 'ÚLTIMOS DIAS · A BLACK FRIDAY TERMINA EM',
    cta: 'garantir com 50%',
    digitos: [{ n: d[0], u: 'D' }, { n: d[1], u: 'H' }, { n: d[2], u: 'MIN' }, { n: d[3], u: 'S' }],
  };
  return <FaixaFaseCorpo v={v} />;
}
