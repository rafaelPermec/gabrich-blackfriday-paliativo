import type { ReactNode } from 'react';
import { manrope } from '@/lib/fontes/manrope';
import { tenorSans } from '@/lib/fontes/tenor-sans';
import { blackMango } from '@/lib/fontes/black-mango';
import { urbanist } from '@/lib/fontes/urbanist';

// Grupo No Estúdio: Black Mango (títulos), Tenor Sans (apoio), Manrope e Space Mono (raiz).
export default function LayoutNE({ children }: { children: ReactNode }) {
  return <div data-tema="ne" className={`${manrope.variable} ${tenorSans.variable} ${blackMango.variable} ${urbanist.variable}`}>{children}</div>;
}
