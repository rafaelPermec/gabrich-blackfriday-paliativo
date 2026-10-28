'use client';
import { useState } from 'react';
import { LinkConversao } from '@/components/LinkConversao';
import { LogoMascara, LOGO } from '@/components/LogoMascara';
import { checkout } from '@/config/links';
import { ORDEM_CURSOS, economia, ofertaPorCursos, valor, type CursoId, type OfertaId } from '@/config/ofertas';
import s from './MonteCombo.module.css';

// Manual · 2 · 05.12. Mesmo componente fora e dentro da Black.
const ITENS: Record<CursoId, { logo: { src: string; alt: string; largura: number; altura: number }; desc: string; inclui: string }> = {
  'antes-da-foto': { logo: { src: LOGO.adf.src, alt: LOGO.adf.alt, largura: 112, altura: 13.4 }, desc: 'o manual de direção criativa: tudo o que você decide antes do clique', inclui: 'antes da foto · e-book em PDF, 12 práticas' },
  'luz-na-pratica': { logo: { src: LOGO.lnp.src, alt: LOGO.lnp.alt, largura: 106, altura: 14 }, desc: '27 aulas práticas e análises pra entender a luz de verdade', inclui: 'luz na prática · 27 aulas em vídeo' },
  'mais-que-um-click': { logo: { src: LOGO.mqc.src, alt: LOGO.mqc.alt, largura: 107, altura: 14 }, desc: 'fotografia de gastronomia, do briefing à foto final, com fotografia como negócio', inclui: 'mais que um click · 14 módulos, 67 conteúdos' },
};

const CTA: Record<OfertaId, string> = {
  'antes-da-foto': 'quero o e-book', 'luz-na-pratica': 'quero garantir', 'mais-que-um-click': 'quero garantir',
  'luz-antes-da-foto': 'quero o combo', 'click-antes-da-foto': 'quero o combo', 'click-luz': 'quero o combo', completo: 'quero o completo',
};

// Ordem do resumo: c, l, a
const ORDEM_RESUMO: CursoId[] = ['mais-que-um-click', 'luz-na-pratica', 'antes-da-foto'];

interface Props {
  bf: boolean;
  pagina: string;
  cursoDaPagina?: CursoId; // vem primeiro e já marcado
}

export function MonteCombo({ bf, pagina, cursoDaPagina }: Props) {
  const ordem = cursoDaPagina ? [cursoDaPagina, ...ORDEM_CURSOS.filter((c) => c !== cursoDaPagina)] : ORDEM_CURSOS;
  const [marcados, setMarcados] = useState<CursoId[]>(cursoDaPagina ? [cursoDaPagina] : []);
  const alternar = (c: CursoId) => setMarcados((m) => (m.includes(c) ? m.filter((x) => x !== c) : [...m, c]));

  const oferta = ofertaPorCursos(marcados);
  const naOrdem = ORDEM_RESUMO.filter((c) => marcados.includes(c));
  const multi = (oferta?.cursos.length ?? 0) > 1;

  return (
    <div className={s.card}>
      <div className={s.lista}>
        <h2 className={s.titulo}>{bf ? 'monte sua black friday' : 'monte seu combo'}</h2>
        <p className={s.sub}>marque o que você quer levar.</p>
        {ordem.map((c) => {
          const on = marcados.includes(c);
          return (
            <button key={c} type="button" role="checkbox" aria-checked={on} className={s.item} onClick={() => alternar(c)}>
              <span className={s.anel}>{on && <span className={s.ponto} />}</span>
              <span className={s.itemTexto}>
                <LogoMascara {...ITENS[c].logo} cor="#F4F0E8" />
                <span className={s.desc}>{ITENS[c].desc}</span>
              </span>
            </button>
          );
        })}
      </div>

      <div className={s.resumo} aria-live="polite">
        <div className={s.rotulo}>sua escolha</div>
        {!oferta ? (
          <>
            <div className={s.vazio}>marque pelo menos um curso.</div>
            <span className={s.botaoOff} aria-disabled="true">quero o combo</span>
          </>
        ) : (
          <>
            <div className={s.logos}>
              {naOrdem.map((c, i) => (
                <span key={c} className={s.logoItem}>
                  {i > 0 && <span className={s.mais}>+</span>}
                  <LogoMascara {...ITENS[c].logo} cor="#F4F0E8" />
                </span>
              ))}
            </div>
            <div className={s.inclui}>
              {oferta.cursos.map((c) => <div key={c}>{ITENS[c].inclui}</div>)}
            </div>
            <div className={s.tabela}>
              <div className={s.linha}>
                <span>{bf || multi ? 'preço separado' : 'preço'}</span>
                <span className={s.valor}>{bf ? <s>R$ {valor(oferta.separado)}</s> : `R$ ${valor(multi ? oferta.separado : oferta.normal.avista)}`}</span>
              </div>
              {(bf || multi) && (
                <div className={s.linha}>
                  <span>{bf ? (multi ? 'desconto combo + black friday' : 'desconto black friday') : 'desconto combo'}</span>
                  <span className={s.valor}>{bf ? `−${oferta.bf.descontoPct}%` : `${oferta.descontoComboPct}%`}</span>
                </div>
              )}
            </div>
            <div className={s.preco}><span className={s.x12}>12x </span>R$ {valor((bf ? oferta.bf : oferta.normal).parcela12)}</div>
            <div className={s.vista}>ou R$ {valor((bf ? oferta.bf : oferta.normal).avista)} à vista</div>
            {(bf || multi) && <div className={s.economia}>você economiza R$ {valor(economia(oferta, bf))}</div>}
            <div className={s.espaco} />
            <LinkConversao
              link={checkout(oferta.id, bf)}
              pagina={pagina}
              posicao="monte-combo"
              valor={(bf ? oferta.bf : oferta.normal).avista}
              className={s.botao}
            >
              {bf && !multi && oferta.id !== 'antes-da-foto' ? 'garantir com 50%' : CTA[oferta.id]}
            </LinkConversao>
          </>
        )}
      </div>
    </div>
  );
}

