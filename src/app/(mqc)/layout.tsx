import type { ReactNode } from 'react';
import { montserrat } from '@/lib/fontes/montserrat';
import { urbanist } from '@/lib/fontes/urbanist';
import { parkinsans } from '@/lib/fontes/parkinsans';

// Grupo Mais que um Click: Montserrat (títulos e preço), Urbanist e Parkinsans (combo).
export default function Layout({ children }: { children: ReactNode }) {
  return <div data-tema="mqc" className={`${montserrat.variable} ${urbanist.variable} ${parkinsans.variable}`}>{children}</div>;
}
