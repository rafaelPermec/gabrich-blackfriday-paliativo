'use client';
import { CardPrecoCorpo } from './CardPrecoCorpo';

// Ponte para as páginas geradas: <CardPreco curso="l" bf garantia />. Só as variantes escuras (as usadas no site).
export function CardPreco({ curso, bf, garantia }: { curso: 'a' | 'l' | 'c'; bf?: boolean; garantia?: boolean }) {
  const v: Record<string, boolean> = {};
  for (const x of ['l', 'c']) { const on = x === curso; v[`${x}_es_n`] = on && !bf; v[`${x}_es_b`] = on && !!bf; v[`${x}_es_g`] = on && !!garantia; }
  return <CardPrecoCorpo v={v} />;
}
