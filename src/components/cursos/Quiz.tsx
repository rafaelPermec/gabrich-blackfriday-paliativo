'use client';
import Link from 'next/link';
import { useState } from 'react';
import { Capa, type ProdutoCapa } from '@/components/Capa';
import { LinkConversao } from '@/components/LinkConversao';
import { CONTATO, INSCRICAO, checkout } from '@/config/links';
import { OFERTAS, valor } from '@/config/ofertas';
import { ROTAS } from '@/config/site';
import { CURSO, OFERTA_DO_RESULTADO, PERGUNTAS, TEXTOS, resultadoQuiz, type Aluno } from '@/lib/quiz';
import s from './Quiz.module.css';

const CAPA: Record<'a' | 'l' | 'c', ProdutoCapa> = { a: 'adf', l: 'lnp', c: 'mqc' };
const CONHECA = { c: 'conheça o Mais que um Click', l: 'conheça o Luz na Prática', a: 'conheça o Antes da Foto' } as const;
const TOTAL = 5;

interface Props { bf: boolean; noEstudioAberto: boolean }

export function Quiz({ bf, noEstudioAberto }: Props) {
  const [passo, setPasso] = useState(0); // 0 = abertura · 1..5 = pergunta · 6 = resultado
  const [resp, setResp] = useState<number[]>([]);
  const [alunos, setAlunos] = useState<Partial<Record<Aluno, boolean>>>({});

  const reiniciar = () => { setPasso(0); setResp([]); setAlunos({}); };
  const progresso = passo === 0 ? '1 minuto' : passo <= TOTAL ? `${passo} de ${TOTAL}` : 'resultado';
  const ctaNE = noEstudioAberto ? 'quero me inscrever' : 'entrar na lista de espera';

  return (
    <div className={s.card}>
      {passo === 0 && <div className={s.listras} aria-hidden="true" />}
      <div className={s.corpo}>
        <div className={s.topo}>
          <span className={s.tag}>quiz</span>
          <span className={s.progresso} aria-live="polite">{progresso}</span>
        </div>

        {passo === 0 && (
          <div className={s.abertura}>
            <h2 className={s.tituloAbertura}>tá em dúvida<br />de qual curso<br />é pra você?</h2>
            <p className={s.lead}>Responde essas 5 perguntinhas rápidas que eu te conto!</p>
            <button type="button" className={s.comecar} onClick={() => setPasso(1)}>bora começar</button>
            <span className={s.legenda}>leva 1 minuto · sem cadastro</span>
          </div>
        )}

        {passo >= 1 && passo <= TOTAL && (() => {
          const P = PERGUNTAS[passo - 1]!;
          const algum = Object.values(alunos).some(Boolean);
          return (
            <div className={s.pergunta}>
              <div className={s.barras} aria-hidden="true">
                {PERGUNTAS.map((_, i) => <span key={i} style={{ background: i < passo ? '#CCAA66' : '#2a2724' }} />)}
              </div>
              <h2 className={s.q}>{P.q}</h2>
              {P.multi && <span className={s.dica}>pode marcar mais de um</span>}
              <div className={s.opcoes} role={P.multi ? 'group' : 'radiogroup'}>
                {P.multi
                  ? P.o.map(([t, k]) => {
                      const on = !!alunos[k];
                      return (
                        <button key={k} type="button" role="checkbox" aria-checked={on} className={`${s.opcao} ${on ? s.on : ''}`}
                          onClick={() => setAlunos((a) => (k === 'none' ? { none: !a.none } : { ...a, [k]: !a[k], none: false }))}>
                          <span className={s.marca} style={{ borderRadius: 4 }}><span style={{ borderRadius: 4 }} /></span>
                          <span>{t}</span>
                        </button>
                      );
                    })
                  : P.o.map(([t], j) => {
                      const on = resp[passo - 1] === j;
                      return (
                        <button key={j} type="button" role="radio" aria-checked={on} className={`${s.opcao} ${on ? s.on : ''}`}
                          onClick={() => { const r = resp.slice(); r[passo - 1] = j; setResp(r); setPasso(passo + 1); }}>
                          <span className={s.marca}><span /></span>
                          <span>{t}</span>
                        </button>
                      );
                    })}
              </div>
              {P.multi && (
                <button type="button" className={s.ver} disabled={!algum} onClick={() => {
                  setPasso(TOTAL + 1);
                  window.clarity?.('event', 'quiz_resultado');
                }}>
                  ver o meu resultado
                </button>
              )}
              <button type="button" className={s.voltar} onClick={() => setPasso(Math.max(0, passo - 1))}>← voltar</button>
            </div>
          );
        })()}

        {passo > TOTAL && <Resultado bf={bf} resp={resp} alunos={alunos} ctaNE={ctaNE} noEstudioAberto={noEstudioAberto} reiniciar={reiniciar} />}
      </div>
      <div className={s.rodape}>
        <img src="/marca/debora-gabrich.svg" alt="Débora Gabrich" height={10} width={93} />
        <span>cursos</span>
      </div>
    </div>
  );
}

function Resultado({ bf, resp, alunos, ctaNE, noEstudioAberto, reiniciar }: {
  bf: boolean; resp: number[]; alunos: Partial<Record<Aluno, boolean>>; ctaNE: string; noEstudioAberto: boolean; reiniciar: () => void;
}) {
  const { r, cursosNoResultado, alem } = resultadoQuiz(resp, alunos);
  const T = TEXTOS[r];
  const ofertaId = OFERTA_DO_RESULTADO[r];
  const oferta = ofertaId ? OFERTAS[ofertaId] : null;
  const preco = oferta ? (bf ? oferta.bf : oferta.normal) : null;
  const capas: ProdutoCapa[] = r === 'ne' ? ['ne'] : r === 'me' ? ['mentoria'] : cursosNoResultado.map((k) => CAPA[k]);
  const neDestino = noEstudioAberto ? INSCRICAO['no-estudio'] : null;

  let principal;
  if (r === 'me') principal = <LinkConversao link={CONTATO.mentoria} pagina="cursos" posicao="quiz" evento="Contact" className={s.principal}>{T.cta}</LinkConversao>;
  else if (r === 'ne') principal = neDestino
    ? <LinkConversao link={neDestino} pagina="cursos" posicao="quiz" className={s.principal} style={{ background: '#D57D3D' }}>{ctaNE}</LinkConversao>
    : <Link href={ROTAS['no-estudio']} className={s.principal} style={{ background: '#D57D3D' }}>{ctaNE}</Link>;
  else if (oferta && oferta.cursos.length === 1) principal = <Link href={ROTAS[oferta.cursos[0]!]} className={s.principal}>{T.cta}</Link>;
  else if (oferta) principal = <LinkConversao link={checkout(oferta.id, bf)} pagina="cursos" posicao="quiz" valor={preco!.avista} className={s.principal}>{T.cta}</LinkConversao>;

  return (
    <div className={s.resultado}>
      <span className={s.eyebrow}>o seu próximo passo</span>
      <div className={s.grade}>
        <div className={s.colTexto}>
          <div className={s.capas}>{capas.map((p) => <Capa key={p} produto={p} largura={136} />)}</div>
          <h2 className={s.tituloRes}>{T.t}</h2>
          <p className={s.textoRes}>{T.x}</p>
        </div>
        <div className={s.colPreco}>
          <div className={s.caixa}>
            {preco && (
              <>
                {bf && <div className={s.tagsBF}><span className={s.tagOcre}>-50%</span><span className={s.tagPreta}>BLACK FRIDAY</span></div>}
                <div className={s.preco}><span className={s.x12}>12x </span>R$ {valor(preco.parcela12)}</div>
                <div className={s.vista}>ou R$ {valor(preco.avista)} à vista</div>
              </>
            )}
            {principal}
            {cursosNoResultado.length > 1 && (
              <div className={s.secundarios}>
                {cursosNoResultado.map((k) => <Link key={k} href={ROTAS[CURSO[k]]} className={s.secundario}>{CONHECA[k]}</Link>)}
              </div>
            )}
          </div>

          {alem && (() => {
            const isNE = alem.k === 'ne', isME = alem.k === 'me';
            const o = !isNE && !isME ? OFERTAS[OFERTA_DO_RESULTADO[alem.k]!] : null;
            const combo = !!o && o.cursos.length > 1;
            const cta = isNE ? ctaNE : isME ? 'falar comigo' : o!.id === 'completo' ? 'quero o completo' : combo ? 'quero o combo' : 'quero o e-book';
            return (
              <div className={s.alem}>
                <span className={s.eyebrow}>{isME ? alem.ey : 'para ir além'}</span>
                <div className={s.alemLinha}>
                  <span className={s.alemTitulo}>{alem.t}</span>
                  {combo && <span className={s.tagContorno}>com desconto</span>}
                  {combo && bf && <><span className={s.tagOcre}>-50%</span><span className={s.tagPreta}>black friday</span></>}
                  {isNE && <span className={s.tagNE}>vagas limitadas</span>}
                </div>
                <span className={s.alemTexto}>{alem.x}</span>
                {o && <span className={s.alemPreco}>por 12x de R$ {valor((bf ? o.bf : o.normal).parcela12)}</span>}
                {isME ? (
                  <LinkConversao link={CONTATO.mentoria} pagina="cursos" posicao="quiz-alem" evento="Contact" className={s.alemBotao}>{cta}</LinkConversao>
                ) : isNE ? (
                  neDestino
                    ? <LinkConversao link={neDestino} pagina="cursos" posicao="quiz-alem" className={s.alemBotao}>{cta}</LinkConversao>
                    : <Link href={ROTAS['no-estudio']} className={s.alemBotao}>{cta}</Link>
                ) : (
                  <LinkConversao link={checkout(o!.id, bf)} pagina="cursos" posicao="quiz-alem" valor={(bf ? o!.bf : o!.normal).avista} className={s.alemBotao}>{cta}</LinkConversao>
                )}
              </div>
            );
          })()}
        </div>
      </div>
      <button type="button" className={s.refazer} onClick={reiniciar}>refazer o quiz</button>
    </div>
  );
}
