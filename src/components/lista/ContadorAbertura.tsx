'use client';
import { useEffect, useState } from 'react';
import s from './ContadorAbertura.module.css';

const dois = (n: number) => String(n).padStart(2, '0');

// "a black friday começa em" · dias, horas, min (manual · 5 · C04)
export function ContadorAbertura({ ate, titulo }: { ate: string; titulo: string }) {
  const alvo = Date.parse(ate);
  const [t, setT] = useState<number | null>(null);
  useEffect(() => {
    const tick = () => setT(Math.max(0, alvo - Date.now()));
    tick();
    const id = window.setInterval(tick, 15000);
    return () => window.clearInterval(id);
  }, [alvo]);
  const partes = t === null ? ['--', '--', '--'] : [Math.floor(t / 864e5), Math.floor(t / 36e5) % 24, Math.floor(t / 6e4) % 60].map(dois);
  return (
    <div className={s.bloco}>
      <div className={s.titulo}>{titulo}</div>
      <div className={s.celulas} role="timer">
        {(['dias', 'horas', 'min'] as const).map((r, i) => (
          <div key={r} className={s.celula}>
            <span className={s.numero}>{partes[i]}</span>
            <span className={s.rotulo}>{r}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
