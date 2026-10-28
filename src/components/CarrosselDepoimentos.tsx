'use client';
import { useRef, useState, type ReactNode } from 'react';
import s from './Depoimentos.module.css';

export function CarrosselDepoimentos({ children, total, className }: { children: ReactNode; total: number; className?: string }) {
  const trilho = useRef<HTMLDivElement>(null);
  const [i, setI] = useState(0);
  return (
    <div className={className}>
      <div
        ref={trilho}
        className={s.trilho}
        onScroll={(e) => {
          const el = e.currentTarget;
          const n = Math.round(el.scrollLeft / Math.max(1, el.clientWidth));
          if (n !== i) setI(n);
        }}
      >
        {children}
      </div>
      <div className={s.pontos}>
        {Array.from({ length: total }, (_, j) => (
          <button
            key={j}
            type="button"
            aria-label={`Depoimento ${j + 1} de ${total}`}
            aria-current={j === i}
            className={s.pontoBotao}
            onClick={() => trilho.current?.scrollTo({ left: j * trilho.current.clientWidth, behavior: 'smooth' })}
          >
            <span className={s.ponto} style={{ width: j === i ? 18 : 6, background: j === i ? 'var(--dep-acento)' : 'rgba(128,120,110,.45)' }} />
          </button>
        ))}
      </div>
    </div>
  );
}
