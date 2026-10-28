'use client';
import { useEffect, useState } from 'react';
import { PraticaCorpo } from './PraticaCorpo';

// Animação das práticas preenchidas (portada do arquivo "AdF Pratica Animada").
const K = 100 / 794;
const POP = ['#F2DDB0', '#E6B566', '#D9824B', '#C8553D', '#7FA7C9', '#6F482C'];
interface Passo { k: 'type' | 'check' | 'color'; b: [number, number, number, number]; t?: string; c?: string; pop?: boolean; s: number; act: number }
interface Ex { label: string; img: string; pag: string; top: number; steps: Passo[]; done: number; total: number }
const EX: Ex[] = ([
  { label: 'prática 01', img: '/m/assets/paginas/p026.png', pag: 'PÁG. 26 / 284', top: 380, steps: [
    { k: 'type', b: [92, 714, 251, 48], t: 'tipo de cenário' },
    { k: 'type', b: [351, 714, 351, 48], t: 'muda a pré-produção e a montagem' },
    { k: 'type', b: [92, 770, 251, 48], t: 'prazo de entrega' },
    { k: 'type', b: [351, 770, 351, 48], t: 'urgência pede edição mais rápida' }] },
  { label: 'prática 09', img: '/m/assets/paginas/p221.png', pag: 'PÁG. 221 / 284', top: 340, steps: [
    { k: 'check', b: [233, 429, 17, 17] },
    { k: 'color', b: [92, 513, 30, 30], c: '#F2DDB0', pop: true },
    { k: 'type', b: [130, 511, 109, 34], t: '#F2DDB0' },
    { k: 'color', b: [247, 513, 30, 30], c: '#E6B566' },
    { k: 'type', b: [285, 511, 109, 34], t: '#E6B566' },
    { k: 'color', b: [401, 513, 30, 30], c: '#D9824B' },
    { k: 'type', b: [439, 511, 109, 34], t: '#D9824B' },
    { k: 'color', b: [556, 513, 30, 30], c: '#C8553D' },
    { k: 'type', b: [594, 511, 109, 34], t: '#C8553D' },
    { k: 'type', b: [92, 579, 197, 40], t: 'areia · fundo e base' },
    { k: 'type', b: [505, 579, 197, 40], t: 'terracota · o produto' }] },
] as Omit<Ex, 'done' | 'total'>[]).map((ex) => {
  const MOVE = 600, CH = 50, HOLD = 250, END = 2600;
  let acc = 500;
  const steps = (ex.steps as Passo[]).map((s) => {
    const act = s.k === 'type' ? s.t!.length * CH : s.k === 'color' ? (s.pop ? 1300 : 350) : 300;
    const p = { ...s, s: acc, act };
    acc += MOVE + act + HOLD;
    return p;
  });
  return { ...ex, steps, done: acc, total: acc + END };
});

export function PraticaAnimada() {
  const [ex, setEx] = useState(0);
  const [t, setT] = useState(0);
  const [ativo, setAtivo] = useState(true);
  useEffect(() => { setAtivo(!window.matchMedia('(prefers-reduced-motion: reduce)').matches); }, []);
  useEffect(() => {
    if (!ativo) return;
    const id = window.setInterval(() => {
      setT((tt) => {
        const n = tt + 50;
        if (n >= EX[ex]!.total) { setEx((e) => (e + 1) % EX.length); return 0; }
        return n;
      });
    }, 50);
    return () => window.clearInterval(id);
  }, [ex, ativo]);

  const E = EX[ex]!;
  const MOVE = 600, CH = 50;
  const Y = (v: number) => ((v - E.top) * K).toFixed(2), X = (v: number) => (v * K).toFixed(2);
  const tt = ativo ? t : E.done + 400;
  let cur = -1; E.steps.forEach((s, j) => { if (tt >= s.s) cur = j; });
  const blink = Math.floor(tt / 450) % 2 === 0;
  let picked = false, pop = false, popPick = -1, popX = '0', popY = '0', cursor: number[] | null = null;
  const campos = E.steps.map((s, j) => {
    const [x, y, w, h] = s.b; const a0 = s.s + MOVE; const active = j === cur && tt >= a0; const doneS = j < cur || (j === cur && tt >= a0 + s.act);
    const base = { x: X(x), y: Y(y), w: X(w), h: (h * K).toFixed(2), txt: '', ring: 'none', bg: 'transparent', fg: '#2A1F18', jc: 'flex-start', r: (10 * K).toFixed(2) + 'cqw' };
    if (s.k === 'type') {
      if (j < cur) base.txt = s.t!;
      if (j === cur) { const n = Math.max(0, Math.floor((tt - a0) / CH)); base.txt = s.t!.slice(0, n) + (active && blink ? '|' : ''); if (active) base.ring = 'inset 0 0 0 2px #D39858'; }
    } else if (s.k === 'check') {
      base.r = (3 * K).toFixed(2) + 'cqw'; base.jc = 'center';
      if (doneS) { base.bg = '#6F482C'; base.fg = '#FFFFFF'; base.txt = '✓'; }
    } else {
      base.r = '50%';
      if (doneS) base.bg = s.c!;
      if (s.pop && active && !doneS) {
        pop = true; popX = X(x); popY = Y(y + 38); popPick = POP.indexOf(s.c!);
        if (tt >= a0 + 450) { cursor = [x + 18 + popPick * 28.5, y + 54]; picked = true; }
      }
    }
    return base;
  });
  if (!cursor) { const tg = cur >= 0 ? E.steps[cur]!.b : [640, 900, 0, 0]; cursor = [tg[0]! + Math.min(tg[2]!, 40) * 0.6 + 4, tg[1]! + tg[3]! * 0.5]; }
  const v = {
    img: E.img, pag: E.pag, imgTop: (-E.top * K).toFixed(2), campos,
    pop, popX, popY, popCores: POP.map((c, i) => ({ c, ring: i === popPick && picked ? 'inset 0 0 0 2px #0B0B0B' : 'inset 0 0 0 1px #DDCBBA' })),
    cx: X(cursor[0]!), cy: Y(cursor[1]!), saved: tt >= E.done + 300,
    abas: EX.map((e, i) => ({ label: e.label, bg: i === ex ? '#D39858' : 'transparent', fg: i === ex ? '#0B0B0B' : '#DDCBBA', set: () => { setEx(i); setT(0); } })),
  };
  return <PraticaCorpo v={v} />;
}
