import type { CSSProperties } from 'react';
import s from './ImagemReservada.module.css';

// Espaço reservado para imagem que ainda não chegou. Mantém a proporção final (sem CLS).
export function ImagemReservada({ rotulo, proporcao, raio = true }: { rotulo: string; proporcao: string; raio?: boolean }) {
  return (
    <div
      className={s.reservada}
      style={{ aspectRatio: proporcao === 'auto' ? undefined : proporcao, height: proporcao === 'auto' ? '100%' : undefined, minHeight: 120, borderRadius: raio ? 'var(--raio-card)' : 0 } as CSSProperties}
      role="img"
      aria-label={`Imagem pendente: ${rotulo}`}
      data-imagem-pendente={rotulo}
    >
      <span>{rotulo}</span>
    </div>
  );
}
