import type { Metadata } from 'next';
import Link from 'next/link';
import { ROTAS } from '@/config/site';
import { ATUALIZADA_EM, SECOES } from '@/conteudo/privacidade';
import { Cabecalho } from '@/components/Cabecalho';
import { Rodape } from '@/components/Rodape';
import b from '@/components/Botao.module.css';
import s from './privacidade.module.css';

export const metadata: Metadata = {
  title: 'Política de privacidade',
  alternates: { canonical: ROTAS.privacidade },
};

export default function Privacidade() {
  return (
    <>
      <Cabecalho
        marca="debora-gabrich"
        alturaLogo={14}
        hrefLogo={ROTAS.cursos}
        acao={<Link className={`${b.botao} ${b.pequeno}`} href={ROTAS.cursos}>ver produtos</Link>}
      />
      <main id="conteudo" className={s.main}>
        <span className={s.tag}>política de privacidade</span>
        <h1 className={s.h1}>como cuidamos dos seus dados.</h1>
        <p className={s.data}>atualizada em {ATUALIZADA_EM}</p>
        {SECOES.map((sec) => (
          <section key={sec.titulo} className={s.secao}>
            <h2 className={s.h2}>{sec.titulo}</h2>
            {sec.paragrafos.map((p) => <p key={p} className={s.p}>{p}</p>)}
          </section>
        ))}
      </main>
      <Rodape marca="debora-gabrich" alturaLogo={14} assinatura={false} />
    </>
  );
}
