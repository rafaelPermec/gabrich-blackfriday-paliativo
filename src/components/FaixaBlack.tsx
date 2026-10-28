'use client';
import { useEffect, useState } from 'react';
import s from './FaixaBlack.module.css';

interface Props {
  etiqueta: string; // ex.: "última semana"
  frase?: string; // ex.: "o desconto de black friday acaba em"
  ate?: string; // ISO; sem ele a faixa mostra `datas` no lugar do contador
  datas?: string;
}

const dois = (n: number) => String(n).padStart(2, '0');
function restante(alvo: number) {
  const t = Math.max(0, alvo - Date.now());
  const d = Math.floor(t / 864e5), h = Math.floor(t / 36e5) % 24, m = Math.floor(t / 6e4) % 60, seg = Math.floor(t / 1e3) % 60;
  return `${dois(d)}d ${dois(h)}h ${dois(m)}m ${dois(seg)}s`;
}

// Manual · 2 · 05.10 · faixa da Black: 36–40 px, fundo preto, fio #6B6156.
export function FaixaBlack({ etiqueta, frase, ate, datas }: Props) {
  const alvo = ate ? Date.parse(ate) : NaN;
  // Servidor e primeiro render iguais (sem erro de hidratação); o tempo entra depois.
  const [texto, setTexto] = useState('--d --h --m --s');
  useEffect(() => {
    if (Number.isNaN(alvo)) return;
    const tick = () => setTexto(restante(alvo));
    tick();
    const id = window.setInterval(tick, 1000);
    return () => window.clearInterval(id);
  }, [alvo]);

  return (
    <div className={s.faixa}>
      <span className={s.etiqueta}>{etiqueta}</span>
      {frase && <span className={s.frase}>{frase}</span>}
      {Number.isNaN(alvo)
        ? datas && <span className={s.datas}>{datas}</span>
        : <span className={s.contador} aria-hidden="true">{texto}</span>}
    </div>
  );
}
