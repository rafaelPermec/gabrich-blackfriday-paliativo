import type { Metadata } from 'next';
import { getFase } from '@/config/fases';
import { OFERTAS } from '@/config/ofertas';
import { ROTAS, SITE } from '@/config/site';
import { Pagina } from '@/paginas/mais-que-um-click/Pagina';

export const metadata: Metadata = {
  title: 'Mais que um Click · fotografia de gastronomia',
  description: 'Fotografia de gastronomia do briefing à foto final, com prática no estúdio e fotografia como negócio. 14 módulos, 67 conteúdos.',
  alternates: { canonical: ROTAS['mais-que-um-click'] },
};

export default function PaginaCurso() {
  const fase = getFase('mais-que-um-click');
  const bf = fase === 'abertura' || fase === 'ultima';
  const o = OFERTAS['mais-que-um-click'];
  const dados = {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: 'Mais que um Click',
    description: 'Fotografia de gastronomia do briefing à foto final, com prática no estúdio e fotografia como negócio. 14 módulos, 67 conteúdos.',
    provider: { '@type': 'Person', name: 'Débora Gabrich', sameAs: 'https://www.instagram.com/deboragabrich' },
    inLanguage: 'pt-BR',
    offers: { '@type': 'Offer', price: bf ? o.bf.avista : o.normal.avista, priceCurrency: 'BRL', category: 'Paid', url: `${SITE.url}${ROTAS['mais-que-um-click']}` },
    hasCourseInstance: { '@type': 'CourseInstance', courseMode: 'online', courseWorkload: 'P1Y' },
  };
  return (
    <main id="conteudo">
      <Pagina fase={fase} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(dados) }} />
    </main>
  );
}
