import type { ReactNode } from 'react';
import { urbanist } from '@/lib/fontes/urbanist';
import { montserrat } from '@/lib/fontes/montserrat';
import { tenorSans } from '@/lib/fontes/tenor-sans';

// Grupo da marca mãe: /cursos e /cursos/mentoria. Cada grupo carrega só as fontes que usa.
// Montserrat e Tenor Sans entram pelas capas dos cursos e pela capa da Mentoria.
export default function LayoutDG({ children }: { children: ReactNode }) {
  return (
    <div data-tema="dg" className={`${urbanist.variable} ${montserrat.variable} ${tenorSans.variable}`}>
      {children}
    </div>
  );
}
