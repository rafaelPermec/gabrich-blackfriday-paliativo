import type { ReactNode } from 'react';
import { parkinsans } from '@/lib/fontes/parkinsans';
import { manuscrita } from '@/lib/fontes/nothing-you-could-do';
import { urbanist } from '@/lib/fontes/urbanist';
import { montserrat } from '@/lib/fontes/montserrat';

// Grupo Antes da Foto: Parkinsans (títulos), Nothing You Could Do (anotação), Urbanist (preços), Montserrat (capas no combo).
export default function LayoutAdf({ children }: { children: ReactNode }) {
  return <div data-tema="adf" className={`${parkinsans.variable} ${manuscrita.variable} ${urbanist.variable} ${montserrat.variable}`}>{children}</div>;
}
