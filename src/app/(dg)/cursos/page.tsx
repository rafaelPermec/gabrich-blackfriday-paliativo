import type { Metadata } from 'next';
import Image from 'next/image';
import { getFase } from '@/config/fases';
import { DEPOIMENTOS } from '@/config/depoimentos';
import { ROTAS, SITE } from '@/config/site';
import { Cabecalho } from '@/components/Cabecalho';
import { Rodape } from '@/components/Rodape';
import { Capa, Etiqueta, classeBotaoCapa } from '@/components/Capa';
import { LinkConversao } from '@/components/LinkConversao';
import { CONTATO } from '@/config/links';
import { MonteCombo } from '@/components/MonteCombo';
import { SeloGarantia } from '@/components/SeloGarantia';
import { Depoimentos } from '@/components/Depoimentos';
import { HeroCursos, type Slide } from '@/components/cursos/HeroCursos';
import { Quiz } from '@/components/cursos/Quiz';
import { ListaEsperaBF, FAQ_LISTA } from '@/components/lista/ListaEsperaBF';
import { LOGO } from '@/components/LogoMascara';
import b from '@/components/Botao.module.css';
import lnpPoster from '@/imagens/hero/lnp-poster.jpg';
import mqcPoster from '@/imagens/hero/mqc-poster.jpg';
import adfFoto from '@/imagens/capas/adf-foto.jpg';
import silhueta from '@/imagens/capas/estudio-silhueta.jpg';
import s from './cursos.module.css';

const DESCRICAO = 'do e-book ao workshop presencial: tudo o que eu ensino sobre fotografia de gastronomia e produtos.';

export function generateMetadata(): Metadata {
  const lista = getFase('cursos') === 'lista';
  return {
    title: lista ? 'Black Friday · lista de espera' : 'Cursos',
    description: lista ? '50% em todos os cursos, de 01 a 27 de novembro. Entre na lista e receba o aviso assim que abrir.' : DESCRICAO,
    alternates: { canonical: ROTAS.cursos },
    openGraph: { url: ROTAS.cursos },
  };
}

export default function PaginaCursos() {
  const fase = getFase('cursos');
  const bf = fase === 'bf';
  const neAberto = getFase('no-estudio') === 'vagas';

  // Manual · 2 · 10 · 01 (faixa do topo) e 02 (cabeçalho)
  const faixa =
    fase === 'lista' ? (
      <a href="#lista" className={s.faixa}>BLACK FRIDAY · + DE 50% DE DESCONTO A PARTIR DE 01.11 · ENTRE NA LISTA DE ESPERA</a>
    ) : bf ? (
      <div className={s.faixa}>BLACK FRIDAY · + DE 50% DE DESCONTO · ATÉ 27.11</div>
    ) : undefined;

  const cabecalho = (
    <Cabecalho
      marca="debora-gabrich"
      alturaLogo={14}
      hrefLogo={ROTAS.cursos}
      faixa={faixa}
      acao={
        fase === 'lista'
          ? <a className={`${b.botao} ${b.pequeno}`} href="#lista">entrar na lista</a>
          : <a className={`${b.botao} ${b.pequeno}`} href="#produtos">ver produtos</a>
      }
    />
  );

  if (fase === 'lista') {
    const faq = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: FAQ_LISTA.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
    };
    return (
      <>
        {cabecalho}
        <main id="conteudo">
          <ListaEsperaBF />
        </main>
        <Rodape marca="debora-gabrich" alturaLogo={14} assinatura={false} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />
      </>
    );
  }

  const slides: Slide[] = [
    { href: ROTAS['luz-na-pratica'], fundo: '#1E1A17', acento: '#D9A648', textoBotao: '#1E1A17', claro: '#F4F0E8', rotulo: 'curso online',
      logo: { src: LOGO.lnp.src, alt: LOGO.lnp.alt, largura: 228, altura: 30 },
      texto: '27 aulas práticas e análises pra entender a luz de verdade.', cta: 'ver o curso', imagem: lnpPoster, video: '/videos/lnp-hero-horizontal.mp4', duracaoMs: 6000 },
    { href: ROTAS['mais-que-um-click'], fundo: '#201F1D', acento: '#F5C242', textoBotao: '#201F1D', claro: '#F6F3EC', rotulo: 'curso online',
      logo: { src: LOGO.mqc.src, alt: LOGO.mqc.alt, largura: 230, altura: 30 },
      texto: 'fotografia de gastronomia, do briefing à foto final, com fotografia como negócio.', cta: 'ver o curso', imagem: mqcPoster, video: '/videos/mqc-hero-horizontal.mp4', duracaoMs: 6500 },
    { href: ROTAS['antes-da-foto'], fundo: '#0b0b0b', acento: '#D39858', textoBotao: '#0b0b0b', claro: '#DDCBBA', rotulo: 'e-book',
      logo: { src: LOGO.adf.src, alt: LOGO.adf.alt, largura: 240, altura: 28.8 },
      texto: 'o manual de direção criativa: tudo o que você decide antes do clique.', cta: 'ver e-book', imagem: adfFoto, posicaoImagem: '50% 30%',
      veu: 'linear-gradient(90deg,rgba(11,11,11,.85) 0%,rgba(11,11,11,.35) 55%,rgba(11,11,11,0) 80%)', duracaoMs: 7000 },
    { href: ROTAS['no-estudio'], fundo: '#302F2D', acento: '#D57D3D', textoBotao: '#302F2D', claro: '#EEEAE3', rotulo: 'workshop presencial',
      logo: { src: LOGO.ne.src, alt: LOGO.ne.alt, largura: 221, altura: 36 },
      texto: 'workshop presencial de dois dias, no estúdio da Débora em Belo Horizonte.', cta: neAberto ? 'quero me inscrever' : 'entrar na lista de espera',
      imagem: silhueta, posicaoImagem: '50% 30%', video: '/videos/noestudio-hero-horizontal.mp4', duracaoMs: 10500 },
  ];

  const tagBF = (acento: string) => bf ? (
    <><Etiqueta fundo={acento} cor="#0b0b0b">-50%</Etiqueta><Etiqueta fundo="#0b0b0b" cor="#F4F0E8">BLACK FRIDAY</Etiqueta></>
  ) : undefined;

  return (
    <>
      {cabecalho}
      <main id="conteudo">
        {/* 03 Hero + 04 Fileira de capas + 05 Mentoria */}
        <section className={s.hero}>
          <div className={s.heroTopo}>
            <div className={s.heroTitulo}>
              <span className={s.eyebrow}>cursos</span>
              <h1 className={s.h1}>cursos</h1>
            </div>
            <p className={s.heroTexto}>{DESCRICAO}</p>
          </div>
          <HeroCursos slides={slides} />
          <span className={s.rotuloCinza} id="produtos">todos os produtos</span>
          <div className={s.fileira}>
            <Capa produto="adf" href={ROTAS['antes-da-foto']} rotulo="Antes da Foto · e-book" etiquetas={tagBF('#D39858')} />
            <Capa produto="lnp" href={ROTAS['luz-na-pratica']} rotulo="Luz na Prática · curso online" etiquetas={tagBF('#D9A648')} />
            <Capa produto="mqc" href={ROTAS['mais-que-um-click']} rotulo="Mais que um Click · curso online" etiquetas={tagBF('#F5C242')} />
            <Capa produto="ne" href={ROTAS['no-estudio']} rotulo="No Estúdio · workshop presencial"
              etiquetas={neAberto ? undefined : <Etiqueta fundo="#D57D3D" cor="#202020">LISTA DE ESPERA</Etiqueta>} />
            <Capa produto="mentoria" href={ROTAS.mentoria} rotulo="Mentoria individual"
              acao={<LinkConversao link={CONTATO.mentoria} pagina="cursos" posicao="capa-mentoria" evento="Contact" className={classeBotaoCapa}>falar comigo</LinkConversao>} />
          </div>
        </section>

        {/* 06 Quiz */}
        <section className={s.quiz} aria-label="Quiz: qual curso é pra você">
          <Quiz bf={bf} noEstudioAberto={neAberto} />
        </section>

        {/* 07 Monte seu combo · 08 Selo */}
        <section className={s.combo} aria-label={bf ? 'Monte sua Black Friday' : 'Monte seu combo'}>
          <div className={s.comboInterno}>
            <MonteCombo bf={bf} pagina="cursos" />
            <SeloGarantia />
          </div>
        </section>

        {/* 09 Depoimentos */}
        <section className={s.depoimentos} aria-labelledby="dep">
          <h2 id="dep" className={s.rotuloCinza}>depoimentos</h2>
          <Depoimentos conjunto={DEPOIMENTOS.cursos} />
        </section>

        {/* 10 Sobre */}
        <section className={s.sobre} aria-labelledby="sobre">
          <div className={s.sobreFoto}>
            <Image src={silhueta} alt="Débora Gabrich no estúdio" fill sizes="(max-width: 760px) 100vw, 560px" className={s.cobrir} />
          </div>
          <div className={s.sobreTexto}>
            <h2 id="sobre" className={s.eyebrow}>sobre a débora</h2>
            <img src="/marca/debora-gabrich-empilhada.svg" alt="Débora Gabrich" width={446} height={180} loading="lazy" className={s.sobreLogo} />
            <span className={s.sobreDesc}>fotografia de produtos e direção criativa</span>
            <div className={s.bio}>
              <p>Fotógrafa publicitária, diretora criativa, creator e comunicóloga, formada em Publicidade e Propaganda.</p>
              <p>Essas seriam as primeiras coisas que eu diria sobre mim. Workaholic convicta, falar sobre o meu trabalho é quase como falar sobre quem eu sou.</p>
              <p>A fotografia sempre foi a minha forma preferida de enxergar a vida. Pra mim, uma foto não precisa apenas ser bonita: ela precisa contar uma história.</p>
              <p>Fotografo profissionalmente desde 2012 e, desde 2014, me dedico à fotografia de gastronomia e de produtos, com marcas como Nestlé, Granado, Outback, Catupiry, Vigor e Adobe. Do briefing à foto final, cada etapa é pensada para traduzir posicionamento e identidade visual em imagens que comunicam.</p>
              <p>E é esse mesmo processo, o que eu uso todos os dias no estúdio, que eu ensino nos meus cursos.</p>
            </div>
            <blockquote className={s.citacao}>“eu planejo cada detalhe da foto antes de qualquer coisa”</blockquote>
          </div>
        </section>
      </main>
      <Rodape marca="debora-gabrich" alturaLogo={14} assinatura={false} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Person',
            name: 'Débora Gabrich',
            jobTitle: 'Fotógrafa publicitária e diretora criativa',
            url: SITE.url,
            sameAs: ['https://www.instagram.com/deboragabrich'],
          }),
        }}
      />
    </>
  );
}
