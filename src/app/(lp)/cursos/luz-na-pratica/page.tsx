import type { Metadata } from 'next';
import { getFase } from '@/config/fases';
import { OFERTAS } from '@/config/ofertas';
import { ROTAS, SITE } from '@/config/site';
import { Pagina } from '@/paginas/luz-na-pratica/Pagina';

export const metadata: Metadata = {
  title: 'Luz na Prática · curso de iluminação',
  description: '27 aulas práticas e análises pra entender a luz de verdade e criar qualquer efeito de iluminação na fotografia de gastronomia e produtos, com o equipamento que você tem.',
  alternates: { canonical: ROTAS['luz-na-pratica'] },
};

export default function PaginaCurso() {
  const fase = getFase('luz-na-pratica');
  const bf = fase === 'abertura' || fase === 'ultima';
  const o = OFERTAS['luz-na-pratica'];
  const dados = {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: 'Luz na Prática',
    description: '27 aulas práticas e análises pra entender a luz de verdade e criar qualquer efeito de iluminação na fotografia de gastronomia e produtos, com o equipamento que você tem.',
    provider: { '@type': 'Person', name: 'Débora Gabrich', sameAs: 'https://www.instagram.com/deboragabrich' },
    inLanguage: 'pt-BR',
    offers: { '@type': 'Offer', price: bf ? o.bf.avista : o.normal.avista, priceCurrency: 'BRL', category: 'Paid', url: `${SITE.url}${ROTAS['luz-na-pratica']}` },
    hasCourseInstance: { '@type': 'CourseInstance', courseMode: 'online', courseWorkload: 'P1Y' },
  };
  return (
    <main id="conteudo">
      <Pagina fase={fase} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(dados) }} />
    </main>
  );
}
