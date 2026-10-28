import type { Metadata } from 'next';
import Link from 'next/link';
import { CONTATO } from '@/config/links';
import { ROTAS } from '@/config/site';
import { OBRIGADO } from '@/conteudo/obrigado';
import { Cabecalho } from '@/components/Cabecalho';
import { Rodape } from '@/components/Rodape';
import { ContadorAbertura } from '@/components/lista/ContadorAbertura';
import { DispararLead } from '@/components/analytics/DispararLead';
import b from '@/components/Botao.module.css';
import s from './obrigado.module.css';

type Params = { searchParams: Promise<{ curso?: string }> };
const textos = (curso?: string) => OBRIGADO[curso ?? ''] ?? OBRIGADO.cursos!;

export async function generateMetadata({ searchParams }: Params): Promise<Metadata> {
  const { curso } = await searchParams;
  return { title: textos(curso).titulo, robots: { index: false, follow: false } };
}

// Textos em src/conteudo/obrigado.ts. Destino configurado no Hotmart Send: /obrigado?curso=<chave>
export default async function Obrigado({ searchParams }: Params) {
  const { curso } = await searchParams;
  const t = textos(curso);
  return (
    <>
      <Cabecalho
        marca="debora-gabrich"
        alturaLogo={14}
        hrefLogo={ROTAS.cursos}
        acao={<Link className={`${b.botao} ${b.pequeno}`} href={ROTAS.cursos}>{t.cabecalho}</Link>}
      />
      <main id="conteudo" className={s.main}>
        <span className={s.tag}>{t.etiqueta}</span>
        <h1 className={s.h1}>{t.h1}</h1>
        <p className={s.texto}>{t.texto}</p>
        {t.contador && <ContadorAbertura ate={t.contador.ate} titulo={t.contador.titulo} />}
        <div className={s.acoes}>
          <a className={`${b.botao} ${b.grande}`} href={CONTATO.instagram.url} target="_blank" rel="noopener noreferrer">{t.botaoPrincipal}</a>
          <Link className={s.secundario} href={ROTAS.cursos}>{t.botaoSecundario}</Link>
        </div>
      </main>
      <Rodape marca="debora-gabrich" alturaLogo={14} assinatura={false} />
      <DispararLead nome={`lista-${curso && OBRIGADO[curso] ? curso : 'cursos'}`} />
    </>
  );
}
