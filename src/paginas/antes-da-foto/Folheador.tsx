'use client';
import { useEffect, useRef, useState } from 'react';
import { FolheadorCorpo } from './FolheadorCorpo';

// Folheador "folheie algumas páginas". Só imagens de amostra (o PDF nunca vai para o site).
// Páginas definidas no manual (arquivo "AdF Folheador").
const SRC = (n: number) => `/m/assets/paginas/p${String(n).padStart(3, '0')}.png`;
const CAPA = 1;
const SP = [8, 9, 26, 27, 53, 54, 100, 101, 156, 157, 178, 179, 234, 235];
const SINGLE = [CAPA, ...SP];

interface Folha { side?: 'l' | 'r'; front: number; back?: number; ang: number; shift?: number; anim?: boolean; under: { r?: number; l?: number; s?: number; noL?: boolean } }

export function Folheador() {
  const [i, setI] = useState(-1);
  const [leaf, setLeaf] = useState<Folha | null>(null);
  const wide = true; // o manual mantém a dupla em todas as larguras
  const t = useRef<number>(0);
  useEffect(() => () => window.clearTimeout(t.current), []);

  const run = (f: Folha, endAng: number, endShift: number, commit: () => void) => {
    setLeaf({ ...f, anim: false });
    requestAnimationFrame(() => requestAnimationFrame(() => setLeaf((st) => (st ? { ...st, ang: endAng, shift: endShift, anim: true } : st))));
    t.current = window.setTimeout(() => { setLeaf(null); commit(); }, 820);
  };
  const go = (dir: number) => {
    if (leaf) return;
    if (dir > 0) {
      if (i < 0) run({ side: 'r', front: CAPA, back: SP[0], ang: 0, shift: -25, under: { r: SP[1], noL: true } }, -180, 0, () => setI(0));
      else if (i + 2 < SP.length) run({ side: 'r', front: SP[i + 1]!, back: SP[i + 2], ang: 0, shift: 0, under: { r: SP[i + 3] } }, -180, 0, () => setI(i + 2));
    } else {
      if (i === 0) run({ side: 'l', front: SP[0]!, back: CAPA, ang: 0, shift: 0, under: { noL: true } }, 180, -25, () => setI(-1));
      else if (i > 0) run({ side: 'l', front: SP[i]!, back: SP[i - 1], ang: 0, shift: 0, under: { l: SP[i - 2] } }, 180, 0, () => setI(i - 2));
    }
  };

  const u = leaf?.under ?? {};
  const closed = i < 0;
  const noL = leaf ? !!u.noL : closed;
  const leftN = u.l ?? (closed ? CAPA : SP[i]!);
  const rightN = u.r ?? (closed ? CAPA : SP[i + 1]!);
  const v = {
    boxRef: undefined, wide, narrow: !wide, flipping: !!leaf,
    showLeft: !noL, noLeft: noL, leftSrc: SRC(leftN), rightSrc: SRC(rightN), singleSrc: SRC(u.s ?? SINGLE[0]!),
    shift: leaf ? leaf.shift : closed ? -25 : 0,
    lLeft: leaf?.side === 'l' ? '0%' : '50%', lOrigin: leaf?.side === 'l' ? 'right center' : 'left center',
    ang: leaf ? leaf.ang : 0, trans: leaf?.anim ? 'transform .8s cubic-bezier(.45,.05,.25,1)' : 'none',
    frontSrc: SRC(leaf ? leaf.front : CAPA), backSrc: SRC(leaf?.back ?? CAPA),
    label: closed ? 'CAPA · 284 PÁGINAS' : `PÁG. ${SP[i]} · ${SP[i + 1]}  /  284`,
    prev: () => go(-1), next: () => go(1),
  };
  // Dificulta salvar a imagem (não é proteção real; a proteção é só existir a amostra no site).
  return (
    <div onContextMenu={(e) => e.preventDefault()} onDragStart={(e) => e.preventDefault()} style={{ width: '100%', userSelect: 'none' }}>
      <FolheadorCorpo v={v} />
    </div>
  );
}
