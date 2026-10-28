import Image from 'next/image';
import Link from 'next/link';
import { LogoMascara, LOGO } from '@/components/LogoMascara';
import { LISTA_ESPERA } from '@/config/links';
import { BF26 } from '@/config/black-friday';
import { ROTAS } from '@/config/site';
import sorriso from '@/imagens/hero/lnp-poster.jpg';
import maos from '@/imagens/hero/mqc-poster.jpg';
import alto from '@/imagens/lista/camera-alto.jpg';
import { ContadorAbertura } from './ContadorAbertura';
import { FaixaRolante } from './FaixaRolante';
import { FormularioLista } from './FormularioLista';
import s from './ListaEsperaBF.module.css';

export const FAQ_LISTA = [
  { q: 'Quando começa?', a: '01 de novembro.' },
  { q: 'A lista garante o desconto?', a: 'A lista garante o aviso. O desconto vale para todos de 01 a 27.11.' },
  { q: 'Preciso pagar para entrar na lista?', a: 'Não.' },
];

const CARDS = [
  { href: ROTAS['luz-na-pratica'], img: sorriso, fundo: '#1E1A17', acento: '#D9A648', rotulo: 'curso online', logo: { ...LOGO.lnp, largura: 114, altura: 15, cor: '#F4F0E8' }, desc: '27 aulas práticas e análises pra entender a luz de verdade e criar qualquer efeito de iluminação na fotografia de gastronomia e produtos, com o equipamento que você tem.' },
  { href: ROTAS['mais-que-um-click'], img: maos, fundo: '#201F1D', acento: '#F5C242', rotulo: 'curso online', logo: { ...LOGO.mqc, largura: 115, altura: 15, cor: '#F6F3EC' }, desc: 'aprenda sobre fotografia de gastronomia, do briefing à foto final, com prática no estúdio e fotografia como negócio. 14 módulos, 67 conteúdos.' },
  { href: ROTAS['antes-da-foto'], img: alto, fundo: '#0b0b0b', acento: '#D39858', rotulo: 'e-book', logo: { ...LOGO.adf, largura: 120, altura: 14.4, cor: '#DDCBBA' }, desc: 'o manual de direção criativa: briefing, referências, narrativa, cores e composição. tudo o que você decide antes do clique.' },
];

// Manual · 5 · C04 · página de lista de espera da Black Friday (fase "lista" de /cursos).
export function ListaEsperaBF() {
  return (
    <>
      <section className={s.hero} id="lista">
        <div className={s.grade}>
          <div className={s.esquerda}>
            <span className={s.tag}>lista de espera</span>
            <div className={s.marca}>
              <h1 className={s.h1}>
                <img src="/marca/black-friday-empilhado.svg" alt="Black Friday" width={323} height={136} className={s.titulo} />
              </h1>
              <div className={s.chips}>
                <span style={{ background: '#CCAA66', color: '#0b0b0b' }}>luz na prática</span>
                <span style={{ background: '#F4F0E8', color: '#0b0b0b' }}>mais que um click</span>
                <span style={{ boxShadow: 'inset 0 0 0 1px #F4F0E8', color: '#F4F0E8' }}>antes da foto</span>
              </div>
            </div>
            <ContadorAbertura ate={BF26.abertura.inicio} titulo="a black friday começa em" />
            <p className={s.texto}>50% em todos os cursos, de 01 a 27 de novembro. Entre na lista e receba o aviso assim que abrir.</p>
          </div>
          <FormularioLista
            form={LISTA_ESPERA.cursos}
            origem="cursos"
            opcoes={[
              { valor: 'luz-na-pratica', rotulo: <LogoMascara src={LOGO.lnp.src} alt={LOGO.lnp.alt} largura={106} altura={14} cor="#F4F0E8" /> },
              { valor: 'mais-que-um-click', rotulo: <LogoMascara src={LOGO.mqc.src} alt={LOGO.mqc.alt} largura={107} altura={14} cor="#F4F0E8" /> },
              { valor: 'antes-da-foto', rotulo: <LogoMascara src={LOGO.adf.src} alt={LOGO.adf.alt} largura={88} altura={10.6} cor="#F4F0E8" /> },
              { valor: 'ainda-nao-sei', rotulo: 'ainda não sei' },
            ]}
          />
        </div>
      </section>

      <FaixaRolante />

      <section className={s.secao} aria-labelledby="entra">
        <h2 id="entra" className={s.h2}>o que entra na black friday</h2>
        <div className={s.fileira}>
          {CARDS.map((c) => (
            <div key={c.href} className={s.item}>
              <Link href={c.href} className={s.card} style={{ background: c.fundo }}>
                <Image src={c.img} alt="" fill sizes="220px" className={s.foto} />
                <div className={s.veu} style={{ background: `linear-gradient(180deg, transparent 35%, ${c.fundo} 92%)` }} />
                <span className={s.etiqueta}>50% na black friday</span>
                <div className={s.rodapeCard}>
                  <span className={s.rotulo} style={{ color: c.acento }}>{c.rotulo}</span>
                  <LogoMascara src={c.logo.src} alt={c.logo.alt} largura={c.logo.largura} altura={c.logo.altura} cor={c.logo.cor} />
                </div>
              </Link>
              <p className={s.desc}>{c.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className={s.faq} aria-labelledby="faq">
        <h2 id="faq" className={s.h2}>perguntas frequentes</h2>
        <div className={s.faqLista}>
          {FAQ_LISTA.map((f) => (
            <div key={f.q} className={s.faqItem}>
              <h3 className={s.pergunta}>{f.q}</h3>
              <p className={s.resposta}>{f.a}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
