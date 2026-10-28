import type { Metadata } from 'next';
import { getFase } from '@/config/fases';
import { OFERTAS } from '@/config/ofertas';
import { ROTAS, SITE } from '@/config/site';
import { PaginaAdf } from '@/paginas/antes-da-foto/Pagina';

export const metadata: Metadata = {
  title: 'Antes da Foto · e-book de direção criativa',
  description: 'O manual de direção criativa: briefing, referências, narrativa, cores e composição. Tudo o que você decide antes do clique.',
  alternates: { canonical: ROTAS['antes-da-foto'] },
};

export default function PaginaAntesDaFoto() {
  const fase = getFase('antes-da-foto');
  const bf = fase === 'abertura' || fase === 'ultima';
  const o = OFERTAS['antes-da-foto'];
  const dados = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'Antes da Foto',
    description: 'E-book de direção criativa para fotografia de produtos, por Débora Gabrich. 284 páginas, 12 práticas.',
    brand: { '@type': 'Person', name: 'Débora Gabrich' },
    offers: { '@type': 'Offer', price: bf ? o.bf.avista : o.normal.avista, priceCurrency: 'BRL', availability: 'https://schema.org/InStock', url: `${SITE.url}${ROTAS['antes-da-foto']}` },
  };
  return (
    <main id="conteudo">
      <PaginaAdf fase={fase} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(dados) }} />
    </main>
  );
}
