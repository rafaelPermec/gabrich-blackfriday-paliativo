'use client';
import { useRef, useState, type ReactNode } from 'react';
import s from './Depoimentos.module.css';

/**
 * Capa + botão de play. No clique troca pelo iframe do YouTube (sem autoplay antes do clique).
 * referrerpolicy é obrigatório: sem ele o YouTube mostra o "Erro 153".
 * No celular o card é 16:9 até o clique; depois abre em tela cheia na vertical.
 */
export function PlayerYouTube({ id, titulo, className, children }: { id: string; titulo: string; className?: string; children: ReactNode }) {
  const [ativo, setAtivo] = useState(false);
  const caixa = useRef<HTMLDivElement>(null);

  const abrir = () => {
    setAtivo(true);
    window.clarity?.('event', 'depoimento_play');
    if (window.matchMedia('(max-width: 640px)').matches) {
      requestAnimationFrame(() => {
        const el = caixa.current;
        el?.requestFullscreen?.().then(() => {
          const o = screen.orientation as ScreenOrientation & { lock?: (o: string) => Promise<void> };
          o.lock?.('portrait').catch(() => {});
        }).catch(() => {});
      });
    }
  };

  if (ativo) {
    return (
      <div ref={caixa} className={`${className ?? ''} ${s.tocando}`}>
        <iframe
          className={s.iframe}
          src={`https://www.youtube.com/embed/${id}?rel=0&autoplay=1&playsinline=1`}
          title={titulo}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      </div>
    );
  }
  return (
    <button type="button" className={className} onClick={abrir} aria-label={`Assistir: ${titulo}`}>
      {children}
    </button>
  );
}
