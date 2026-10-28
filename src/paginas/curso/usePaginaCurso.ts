'use client';
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useCallback, useEffect, useRef, useState, type PointerEvent } from 'react';

// Estado e efeitos das páginas de curso online (Luz na Prática e Mais que um Click),
// portados da lógica dos arquivos do manual.
export interface ConfigCurso {
  fase: 'normal' | 'abertura' | 'ultima' | 'encerrado';
  modulos: any[];
  alunos: any[];
  faq: [string, string][];
  P: (s: string) => string;
  precos: { pN: string; pN12: string; pB: string; pB12: string };
  checkout: [string, string]; // [normal, bf]
  cores: { numCor: [string, string]; numCorD: [string, string]; alunoBg: string; alunoFg: string };
  extras?: (bf: boolean) => Record<string, unknown>;
  modulosEscuro?: boolean;
}

export function usePaginaCurso(c: ConfigCurso) {
  const [mod, setMod] = useState(0);
  const [ab, setAb] = useState(0);
  const [estreito, setEstreito] = useState(false);
  const [faq, setFaq] = useState(-1);
  const [aluno, setAluno] = useState(0);
  const [par, setPar] = useState(0);
  const [pos, setPos] = useState(50);
  const [pos3, setPos3] = useState([50, 50, 50, 50, 50]);
  const [bar, setBar] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);
  const drag = useRef(false);
  const drag3 = useRef(-1);
  const ro = useRef<ResizeObserver | null>(null);

  // Módulos: layout estreito abaixo de 720 px de largura do bloco
  const modRef = useCallback((el: HTMLElement | null) => {
    ro.current?.disconnect();
    if (!el || typeof ResizeObserver === 'undefined') return;
    ro.current = new ResizeObserver(([e]) => setEstreito((e!.target as HTMLElement).offsetWidth < 720));
    ro.current.observe(el);
  }, []);

  useEffect(() => {
    // Barra fixa de compra no celular: aparece quando nem o hero nem a oferta estão na tela
    const vis = { hero: true, of: false };
    const upd = () => setBar(window.innerWidth < 760 && !vis.hero && !vis.of);
    const hero = document.querySelector('[data-hero]');
    const of = document.getElementById('oferta');
    const io = new IntersectionObserver((es) => { es.forEach((e) => { if (e.target === hero) vis.hero = e.isIntersecting; else vis.of = e.isIntersecting; }); upd(); });
    if (hero) io.observe(hero);
    if (of) io.observe(of);
    window.addEventListener('resize', upd);

    // Faixas que rolam sozinhas (pausam no toque/hover)
    const rm = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const strips = rm ? [] : Array.from(document.querySelectorAll<HTMLElement>('[data-auto-scroll]'));
    const st = strips.map((el) => {
      const o = { el, dir: Number(el.dataset.autoScroll), pause: false, pos: 0 };
      el.addEventListener('mouseenter', () => { o.pause = true; });
      el.addEventListener('mouseleave', () => { o.pause = false; o.pos = el.scrollLeft; });
      el.addEventListener('touchstart', () => { o.pause = true; }, { passive: true });
      el.addEventListener('touchend', () => setTimeout(() => { o.pause = false; o.pos = el.scrollLeft; }, 2500));
      if (o.dir < 0) requestAnimationFrame(() => { o.pos = el.scrollWidth; el.scrollLeft = o.pos; });
      return o;
    });
    let last = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const dt = Math.min(64, now - last); last = now;
      st.forEach((o) => {
        if (o.pause) return;
        const max = o.el.scrollWidth - o.el.clientWidth; if (max <= 0) return;
        o.pos += o.dir * dt * 0.035;
        if (o.pos >= max) { o.pos = max; o.dir = -1; } else if (o.pos <= 0) { o.pos = 0; o.dir = 1; }
        o.el.scrollLeft = o.pos;
      });
      raf = requestAnimationFrame(tick);
    };
    if (st.length) raf = requestAnimationFrame(tick);
    return () => { cancelAnimationFrame(raf); io.disconnect(); window.removeEventListener('resize', upd); ro.current?.disconnect(); };
  }, []);

  const xPct = (e: PointerEvent<HTMLElement>, el: Element) => { const r = el.getBoundingClientRect(); return Math.max(0, Math.min(100, ((e.clientX - r.left) / r.width) * 100)); };
  const bf = c.fase === 'abertura' || c.fase === 'ultima';
  const al = c.alunos[aluno];
  const pr = al.pares[par] ?? al.pares[0];
  const step = (d: number) => {
    let a = aluno, p = par + d;
    if (p >= al.pares.length) { a = (a + 1) % c.alunos.length; p = 0; }
    if (p < 0) { a = (a - 1 + c.alunos.length) % c.alunos.length; p = c.alunos[a].pares.length - 1; }
    setAluno(a); setPar(p); setPos(50);
  };
  const sel = c.modulos[mod];
  const escuro = c.modulosEscuro ?? true;

  return {
    modClaro: !escuro, modEscuro: escuro,
    isBF: bf, notBF: !bf, isAbertura: c.fase === 'abertura', isUltima: c.fase === 'ultima',
    tagB: c.fase === 'ultima' ? 'ÚLTIMOS DIAS' : '50% DE DESCONTO',
    cta: bf ? 'garantir com 50%' : 'quero o curso',
    ...c.precos, checkout: bf ? c.checkout[1] : c.checkout[0],
    heroPreco: bf ? `DE ${c.precos.pN} POR 12X ${c.precos.pB12} · OU ${c.precos.pB} À VISTA` : `12X ${c.precos.pN12} · OU ${c.precos.pN} À VISTA`,
    modulos: c.modulos.map((m, i) => ({
      ...m, numCor: c.cores.numCor[i === mod ? 0 : 1], numCorD: c.cores.numCorD[i === mod ? 0 : 1], peso: i === mod ? '600' : '300',
      aberto: ab === i, sinal: ab === i ? '−' : '+', slots: [{ id: m.slot, ph: m.ph }],
      set: () => setMod(i), toggle: () => { setAb(ab === i ? -1 : i); setMod(i); },
    })),
    modRef, modUid: 'modulos', modLargo: !estreito, modEstreito: estreito,
    sel, selSlot: [{ id: sel.slot, ph: sel.ph ?? `frame de aula · módulo ${sel.n}` }],
    alunos: c.alunos.map((a, i) => ({ label: a.label, bg: i === aluno ? c.cores.alunoBg : 'transparent', fg: i === aluno ? c.cores.alunoFg : c.cores.alunoBg, set: () => { setAluno(i); setPar(0); setPos(50); } })),
    par: { antes: c.P(pr[0]), depois: c.P(pr[1]) },
    pos, clipR: 100 - pos,
    tri: [0, 1, 2, 3].map((ai, i) => ({
      label: String(c.alunos[ai].label).toUpperCase(), antes: c.P(c.alunos[ai].pares[0][0]), depois: c.P(c.alunos[ai].pares[0][1]),
      pos: pos3[i], clipR: 100 - pos3[i]!,
      down: (e: PointerEvent<HTMLElement>) => { drag3.current = i; e.currentTarget.setPointerCapture?.(e.pointerId); const v = xPct(e, e.currentTarget); setPos3((p) => p.map((x, j) => (j === i ? v : x))); },
      move: (e: PointerEvent<HTMLElement>) => { if (drag3.current === i) { const v = xPct(e, e.currentTarget); setPos3((p) => p.map((x, j) => (j === i ? v : x))); } },
      up: () => { drag3.current = -1; },
    })),
    sliderRef,
    sDown: (e: PointerEvent<HTMLElement>) => { drag.current = true; e.currentTarget.setPointerCapture?.(e.pointerId); if (sliderRef.current) setPos(xPct(e, sliderRef.current)); },
    sMove: (e: PointerEvent<HTMLElement>) => { if (drag.current && sliderRef.current) setPos(xPct(e, sliderRef.current)); },
    sUp: () => { drag.current = false; },
    parLabel: `${String(aluno + 1).padStart(2, '0')} DE ${String(c.alunos.length).padStart(2, '0')}`, legenda: String(al.label).toUpperCase(),
    prev: () => step(-1), next: () => step(1),
    bar, precoCurto: bf ? `12x ${c.precos.pB12}` : `12x ${c.precos.pN12}`,
    faq: c.faq.map(([q, r], i) => ({ p: q, r, aberto: faq === i, sinal: faq === i ? '−' : '+', toggle: () => setFaq(faq === i ? -1 : i) })),
    ...(c.extras ? c.extras(bf) : {}),
  };
}
