import type { Metadata } from 'next';
import { getFase } from '@/config/fases';
import { ROTAS } from '@/config/site';
import { Corpo } from '@/paginas/mentoria/Corpo';

export const metadata: Metadata = {
  title: 'Mentoria individual',
  description: 'Uma mentoria feita pra você: a gente monta o conteúdo juntos, a partir das suas dúvidas e dificuldades. Online ou no estúdio, em Belo Horizonte.',
  alternates: { canonical: ROTAS.mentoria },
};

export default function PaginaMentoria() {
  getFase('mentoria'); // fase única hoje; mantém a variável validada no build
  return <main id="conteudo"><Corpo v={{}} /></main>;
}
