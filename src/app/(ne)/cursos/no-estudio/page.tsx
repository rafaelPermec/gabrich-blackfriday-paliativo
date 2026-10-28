import type { Metadata } from 'next';
import { getFase } from '@/config/fases';
import { ROTAS } from '@/config/site';
import { PaginaNE } from '@/paginas/no-estudio/Pagina';
import { FAQ_NE } from '@/paginas/no-estudio/dados';

export const metadata: Metadata = {
  title: 'No Estúdio · workshop presencial',
  description: 'Workshop presencial de dois dias no estúdio da Débora Gabrich, em Belo Horizonte: do briefing ao planejamento, da produção à luz e à foto.',
  alternates: { canonical: ROTAS['no-estudio'] },
};

export default function PaginaNoEstudio() {
  const fase = getFase('no-estudio');
  const dados = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQ_NE.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })),
  };
  return (
    <main id="conteudo">
      <PaginaNE fase={fase} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(dados) }} />
    </main>
  );
}
