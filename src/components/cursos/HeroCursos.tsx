'use client';
import Image, { type StaticImageData } from 'next/image';
import Link from 'next/link';
import { useCallback, useEffect, useRef, useState } from 'react';
import { LogoMascara } from '@/components/LogoMascara';
import s from './HeroCursos.module.css';

export interface Slide {
  href: string;
  fundo: string;
  acento: string;
  textoBotao: string; // cor do texto do botão
  claro: string; // cor do texto e da logo
  rotulo: string;
  logo: { src: string; alt: string; largura: number; altura: number };
  texto: string;
  cta: string;
  imagem: StaticImageData;
  posicaoImagem?: string;
  video?: string;
  veu?: string;
  duracaoMs: number; // usada quando não há vídeo (ou o vídeo não carrega)
}

// Manual · 2 · 10 · 03: 4 slides; cada um troca quando o vídeo termina; barras clicáveis.
export function HeroCursos({ slides }: { slides: Slide[] }) {
  const [atual, setAtual] = useState(0);
  const [progresso, setProgresso] = useState(0);
  const [semMovimento, setSemMovimento] = useState(false);
  const video = useRef<HTMLVideoElement>(null);
  const inicio = useRef(0);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setSemMovimento(mq.matches);
  }, []);

  const ir = useCallback((i: number) => { setAtual(i); setProgresso(0); inicio.current = performance.now(); }, []);
  const proximo = useCallback(() => ir((atual + 1) % slides.length), [atual, ir, slides.length]);

  useEffect(() => {
    if (semMovimento) return;
    inicio.current = performance.now();
    let raf = 0;
    const tick = () => {
      const v = video.current;
      const slide = slides[atual]!;
      let p: number;
      if (v && slide.video && v.duration > 0 && !v.paused) p = v.currentTime / v.duration;
      else p = (performance.now() - inicio.current) / slide.duracaoMs;
      setProgresso(Math.min(1, p));
      // Sem vídeo (ou vídeo que não carregou): troca pelo tempo do slide. Com vídeo tocando: troca no onEnded.
      if (p >= 1 && (!slide.video || !v || v.error || v.paused)) { proximo(); return; }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [atual, proximo, semMovimento, slides]);

  return (
    <div className={s.banner} aria-roledescription="carrossel">
      {slides.map((sl, i) => {
        const ativo = i === atual;
        return (
          <Link
            key={sl.href + i}
            href={sl.href}
            className={s.slide}
            style={{ background: sl.fundo, opacity: ativo ? 1 : 0, visibility: ativo ? 'visible' : 'hidden' }}
            aria-hidden={!ativo}
            tabIndex={ativo ? 0 : -1}
          >
            <Image
              src={sl.imagem}
              alt=""
              fill
              priority={i === 0}
              sizes="(max-width: 1240px) 100vw, 1240px"
              className={s.midia}
              style={{ objectPosition: sl.posicaoImagem ?? 'center' }}
            />
            {ativo && sl.video && !semMovimento && (
              <video
                ref={video}
                className={s.midia}
                src={sl.video}
                autoPlay
                muted
                playsInline
                preload="auto"
                onEnded={proximo}
                onError={() => { inicio.current = performance.now(); }}
              />
            )}
            {sl.veu && <div className={s.veu} style={{ background: sl.veu }} />}
            <div className={s.conteudo}>
              <span className={s.rotulo} style={{ color: sl.acento }}>{sl.rotulo}</span>
              <LogoMascara {...sl.logo} cor={sl.claro} />
              <span className={s.texto} style={{ color: sl.claro }}>{sl.texto}</span>
              <span className={s.cta} style={{ background: sl.acento, color: sl.textoBotao }}>{sl.cta}</span>
            </div>
          </Link>
        );
      })}
      <div className={s.barras}>
        {slides.map((sl, j) => (
          <button key={j} type="button" className={s.barra} onClick={() => ir(j)} aria-label={`Ir para ${sl.logo.alt}`} aria-current={j === atual}>
            <span className={s.trilho}>
              <span className={s.cheio} style={{ width: `${(j < atual ? 1 : j === atual ? progresso : 0) * 100}%` }} />
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
