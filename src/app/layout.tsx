import type { Metadata, Viewport } from 'next';
import type { ReactNode } from 'react';
import { SITE } from '@/config/site';
import { manrope } from '@/lib/fontes/manrope';
import { spaceMono } from '@/lib/fontes/space-mono';
import { Rastreamento } from '@/components/analytics/Rastreamento';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: { default: 'Cursos · Débora Gabrich', template: '%s · Débora Gabrich' },
  openGraph: { type: 'website', locale: 'pt_BR', siteName: SITE.nome },
  twitter: { card: 'summary_large_image' },
  robots: SITE.indexar ? { index: true, follow: true } : { index: false, follow: false },
};

export const viewport: Viewport = { themeColor: '#0B0B0B', width: 'device-width', initialScale: 1 };

// Fontes comuns a todas as marcas. As de cada marca entram no layout do grupo de rotas.
export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR" className={`${manrope.variable} ${spaceMono.variable}`}>
      <body>
        {children}
        <Rastreamento />
      </body>
    </html>
  );
}
