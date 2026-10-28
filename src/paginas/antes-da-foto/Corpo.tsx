'use client';
/* eslint-disable @typescript-eslint/no-explicit-any */
// Gerado a partir de "AdF Pagina - Manual v2.dc.html" (manual) pelo conversor em _conversor/. Edite à vontade: este arquivo agora é código do site.
import { Fragment } from 'react';
import Image from 'next/image';
import { Destino } from '@/components/Destino';
import { ImagemReservada } from '@/components/ImagemReservada';
import { FaixaFase } from './FaixaFase';
import { Folheador } from './Folheador';
import { PraticaAnimada } from './PraticaAnimada';
import { DepoimentosPagina } from '@/components/DepoimentosPagina';
import { ComboPagina } from '@/components/ComboPagina';
import './hover.css';

export function Corpo({ v }: { v: any }) {
  return (
    <>
      <div style={{ containerType: "inline-size", width: "100%", background: "#0B0B0B", color: "#DDCBBA", font: "400 16px/1.65 var(--fonte-corpo)" }}>
        <FaixaFase fase={v.fase} selo={v.selo} />
        <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "16px", padding: "22px clamp(20px,5.5cqw,80px)" }}>
          <img src="/m/exportacoes-2026/antes-da-foto/logos/svg/antes-da-foto_logo_horizontal_ponto-whiskey.svg" alt="antes da foto" style={{ height: "22px", width: "auto", maxWidth: "40%", flex: "0 1 auto", display: "block" }} />
          <Destino href={v.ctaHref} style={{ minHeight: "44px", boxSizing: "border-box", display: "inline-flex", alignItems: "center", justifyContent: "center", textAlign: "center", padding: "8px clamp(10px,2cqw,16px)", background: "#D39858", color: "#0B0B0B", font: "600 clamp(10px,1.6cqw,12px)/1.25 var(--fonte-corpo)", letterSpacing: ".12em", textTransform: "uppercase", textDecoration: "none", flex: "0 1 auto", minWidth: "0", maxWidth: "60%" }} className="dc-antes-da-foto-1" pagina="antes-da-foto">
            {v.cta}
          </Destino>
        </nav>
        <section style={{ padding: "clamp(32px,5cqw,72px) clamp(20px,5.5cqw,80px) clamp(64px,8cqw,112px)" }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,460px),1fr))", gap: "clamp(48px,6cqw,88px)", alignItems: "center" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "26px" }}>
              {v.hasTags ? (
                <>
                  <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
                    <span style={{ font: "700 11px var(--fonte-mono)", letterSpacing: ".08em", padding: "5px 9px", background: v.bf, color: "#0B0B0B" }}>
                      {v.tagA}
                    </span>
                    <span style={{ font: "700 11px var(--fonte-mono)", letterSpacing: ".08em", padding: "5px 9px", boxShadow: `inset 0 0 0 1px ${v.bf ?? ""}`, color: v.bf }}>
                      {v.tagB}
                    </span>
                  </div>
                </>
              ) : null}
              <div style={{ font: "400 11px var(--fonte-mono)", letterSpacing: ".2em", color: "#D39858" }}>
                E-BOOK · DIREÇÃO CRIATIVA PARA FOTOGRAFIA DE PRODUTOS
              </div>
              <h1 style={{ margin: "0", font: "700 clamp(46px,6.8cqw,96px)/.9 var(--fonte-parkinsans)", letterSpacing: "-.05em", textWrap: "balance" }}>
                a foto começa antes da câmera
                <span style={{ color: "#D39858" }}>
                  .
                </span>
              </h1>
              <p style={{ margin: "0", maxWidth: "520px", fontSize: "clamp(17px,1.5cqw,20px)", textWrap: "pretty" }}>
                Tudo o que eu faço antes de fotografar, organizado em um e-book para consultar, anotar e praticar: do briefing ao planejamento de cada foto.
              </p>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(4,minmax(0,1fr))", boxShadow: "inset 0 1px 0 #4A423A,inset 0 -1px 0 #4A423A" }}>
                <div style={{ padding: "16px 8px 16px 0", display: "flex", flexDirection: "column", gap: "2px" }}>
                  <span style={{ font: "700 clamp(28px,3.4cqw,44px)/1 var(--fonte-parkinsans)", letterSpacing: "-.04em", color: "#D39858" }}>
                    284
                  </span>
                  <span style={{ font: "400 10px var(--fonte-mono)", letterSpacing: ".12em" }}>
                    PÁGINAS
                  </span>
                </div>
                <div style={{ padding: "16px 8px", display: "flex", flexDirection: "column", gap: "2px", boxShadow: "inset 1px 0 0 #4A423A" }}>
                  <span style={{ font: "700 clamp(28px,3.4cqw,44px)/1 var(--fonte-parkinsans)", letterSpacing: "-.04em", color: "#D39858" }}>
                    6
                  </span>
                  <span style={{ font: "400 10px var(--fonte-mono)", letterSpacing: ".12em" }}>
                    CAPÍTULOS
                  </span>
                </div>
                <div style={{ padding: "16px 8px", display: "flex", flexDirection: "column", gap: "2px", boxShadow: "inset 1px 0 0 #4A423A" }}>
                  <span style={{ font: "700 clamp(28px,3.4cqw,44px)/1 var(--fonte-parkinsans)", letterSpacing: "-.04em", color: "#D39858" }}>
                    12
                  </span>
                  <span style={{ font: "400 10px var(--fonte-mono)", letterSpacing: ".12em" }}>
                    PRÁTICAS
                  </span>
                </div>
                <div style={{ padding: "16px 0 16px 8px", display: "flex", flexDirection: "column", gap: "2px", boxShadow: "inset 1px 0 0 #4A423A" }}>
                  <span style={{ font: "700 clamp(28px,3.4cqw,44px)/1 var(--fonte-parkinsans)", letterSpacing: "-.04em", color: "#D39858" }}>
                    5
                  </span>
                  <span style={{ font: "400 10px var(--fonte-mono)", letterSpacing: ".12em" }}>
                    BRIEFINGS
                  </span>
                </div>
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "14px 22px", alignItems: "center" }}>
                <Destino href={v.ctaHref} style={{ height: "56px", display: "inline-flex", alignItems: "center", padding: "0 28px", background: "#D39858", color: "#0B0B0B", font: "700 16px var(--fonte-corpo)", textDecoration: "none" }} className="dc-antes-da-foto-2" pagina="antes-da-foto">
                  {v.cta}
                </Destino>
                {v.notLista ? (
                  <>
                    <a href="#folhear" style={{ font: "700 14px var(--fonte-corpo)", color: "#DDCBBA", textDecoration: "none", boxShadow: "inset 0 -1px 0 #6F482C", paddingBottom: "2px" }} className="dc-antes-da-foto-3">
                      folhear algumas páginas
                    </a>
                  </>
                ) : null}
                {v.isLista ? (
                  <>
                    <a href="#oferta" style={{ font: "700 14px var(--fonte-corpo)", color: "#DDCBBA", textDecoration: "none", boxShadow: "inset 0 -1px 0 #6F482C", paddingBottom: "2px" }} className="dc-antes-da-foto-4">
                      comprar agora por R$ 197
                    </a>
                  </>
                ) : null}
              </div>
            </div>
            <div style={{ position: "relative", display: "grid", gridTemplateColumns: "1fr", maxWidth: "520px", width: "100%", justifySelf: "center" }}>
              <Image src="/m/assets/paginas/04-pratica01.png" alt="" style={{ gridArea: "1/1", width: "72%", justifySelf: "end", marginTop: "12%", display: "block" }} width={794} height={1123} sizes="(max-width: 768px) 100vw, 50vw" priority />
              <Image src="/m/assets/paginas/01-capa.png" alt="Capa do e-book Antes da Foto" style={{ gridArea: "1/1", width: "72%", display: "block", boxShadow: "0 0 0 1px #2A2724" }} width={794} height={1123} sizes="(max-width: 768px) 100vw, 50vw" />
            </div>
          </div>
        </section>
        <section id="folhear" style={{ background: "#2A1F18", padding: "clamp(40px,5cqw,64px) clamp(20px,5.5cqw,80px)" }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,340px),1fr))", gap: "28px clamp(32px,5cqw,72px)", alignItems: "center" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              <div style={{ font: "400 11px var(--fonte-mono)", letterSpacing: ".2em", color: "#D39858" }}>
                POR DENTRO DO E-BOOK
              </div>
              <h2 style={{ margin: "0", font: "700 clamp(28px,3.4cqw,44px)/.95 var(--fonte-parkinsans)", letterSpacing: "-.045em", textWrap: "balance" }}>
                folheie algumas páginas
                <span style={{ color: "#D39858" }}>
                  .
                </span>
              </h2>
              <p style={{ margin: "0", fontSize: "15px" }}>
                Clique na página ou use as setas.
              </p>
            </div>
            <Folheador />
          </div>
        </section>
        <section style={{ padding: "clamp(48px,6cqw,80px) clamp(20px,5.5cqw,80px)" }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "clamp(28px,3cqw,40px)" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px", maxWidth: "720px", alignSelf: "center", textAlign: "center", alignItems: "center" }}>
              <div style={{ font: "400 11px var(--fonte-mono)", letterSpacing: ".2em", color: "#D39858" }}>
                FORMATO DE LEITURA
              </div>
              <h2 style={{ margin: "0", font: "700 clamp(28px,3.4cqw,44px)/.95 var(--fonte-parkinsans)", letterSpacing: "-.045em", textWrap: "balance" }}>
                um pdf para ler onde você estiver
                <span style={{ color: "#D39858" }}>
                  .
                </span>
              </h2>
              <p style={{ margin: "0", fontSize: "17px", textWrap: "pretty" }}>
                O e-book abre no celular, no tablet, no notebook e no Kindle.
              </p>
            </div>
            <div style={{ display: "flex", gap: "32px", alignItems: "flex-end", justifyContent: "safe center", overflowX: "auto", scrollSnapType: "x mandatory", scrollbarWidth: "none", margin: "0 calc(-1 * clamp(20px,5.5cqw,80px))", padding: "0 clamp(20px,5.5cqw,80px) 4px", scrollPadding: "0 clamp(20px,5.5cqw,80px)" }}>
              <div style={{ flex: "0 0 min(200px,52cqw)", scrollSnapAlign: "start", display: "flex", flexDirection: "column", gap: "16px" }}>
                <div style={{ height: "230px", display: "flex", alignItems: "flex-end", justifyContent: "center" }}>
                  <div style={{ height: "100%", aspectRatio: "9/19", background: "#1C1A18", borderRadius: "30px", padding: "9px", boxSizing: "border-box", boxShadow: "inset 0 0 0 1px #4A423A" }}>
                    <div style={{ width: "100%", height: "100%", borderRadius: "22px", overflow: "hidden", background: "#FFFFFF" }}>
                      <Image src="/m/assets/paginas/p001.png" alt="" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "left center", display: "block" }} width={794} height={1123} sizes="(max-width: 768px) 100vw, 50vw" />
                    </div>
                  </div>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "4px", boxShadow: "inset 0 1px 0 #4A423A", paddingTop: "14px" }}>
                  <span style={{ font: "700 11px var(--fonte-mono)", letterSpacing: ".14em", color: "#D39858" }}>
                    CELULAR
                  </span>
                  <span style={{ fontSize: "14px", lineHeight: "1.5" }}>
                    Para consultar no dia da sessão.
                  </span>
                </div>
              </div>
              <div style={{ flex: "0 0 min(200px,52cqw)", scrollSnapAlign: "start", display: "flex", flexDirection: "column", gap: "16px" }}>
                <div style={{ height: "230px", display: "flex", alignItems: "flex-end", justifyContent: "center" }}>
                  <div style={{ height: "100%", aspectRatio: "3/4", background: "#1C1A18", borderRadius: "22px", padding: "14px", boxSizing: "border-box", boxShadow: "inset 0 0 0 1px #4A423A" }}>
                    <div style={{ width: "100%", height: "100%", borderRadius: "8px", overflow: "hidden", background: "#FFFFFF", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <Image src="/m/assets/paginas/p026.png" alt="" style={{ height: "100%", width: "auto", display: "block" }} width={794} height={1123} sizes="(max-width: 768px) 100vw, 50vw" />
                    </div>
                  </div>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "4px", boxShadow: "inset 0 1px 0 #4A423A", paddingTop: "14px" }}>
                  <span style={{ font: "700 11px var(--fonte-mono)", letterSpacing: ".14em", color: "#D39858" }}>
                    TABLET
                  </span>
                  <span style={{ fontSize: "14px", lineHeight: "1.5" }}>
                    Para ler e preencher as práticas na tela.
                  </span>
                </div>
              </div>
              <div style={{ flex: "0 0 min(200px,52cqw)", scrollSnapAlign: "start", display: "flex", flexDirection: "column", gap: "16px" }}>
                <div style={{ height: "230px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "flex-end" }}>
                  <div style={{ position: "relative", width: "90%", aspectRatio: "16/10", minHeight: "0", overflow: "hidden", background: "#1C1A18", borderRadius: "12px 12px 0 0", boxShadow: "inset 0 0 0 1px #4A423A" }}>
                    <div style={{ position: "absolute", inset: "10px 10px 14px", overflow: "hidden", background: "#3A3733", display: "flex", alignItems: "center", justifyContent: "center", gap: "2px" }}>
                      <Image src="/m/assets/paginas/p178.png" alt="" style={{ height: "100%", width: "auto", maxWidth: "50%", objectFit: "contain", display: "block" }} width={794} height={1123} sizes="(max-width: 768px) 100vw, 50vw" />
                      <Image src="/m/assets/paginas/p179.png" alt="" style={{ height: "100%", width: "auto", maxWidth: "50%", objectFit: "contain", display: "block" }} width={794} height={1123} sizes="(max-width: 768px) 100vw, 50vw" />
                    </div>
                  </div>
                  <div style={{ width: "100%", height: "12px", background: "#2A2724", borderRadius: "0 0 10px 10px" }} />
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "4px", boxShadow: "inset 0 1px 0 #4A423A", paddingTop: "14px" }}>
                  <span style={{ font: "700 11px var(--fonte-mono)", letterSpacing: ".14em", color: "#D39858" }}>
                    NOTEBOOK
                  </span>
                  <span style={{ fontSize: "14px", lineHeight: "1.5" }}>
                    Para preencher as práticas e montar o seu planejamento.
                  </span>
                </div>
              </div>
              <div style={{ flex: "0 0 min(200px,52cqw)", scrollSnapAlign: "start", display: "flex", flexDirection: "column", gap: "16px" }}>
                <div style={{ height: "230px", display: "flex", alignItems: "flex-end", justifyContent: "center" }}>
                  <div style={{ height: "100%", aspectRatio: "3/4.3", background: "#2A2724", borderRadius: "14px", padding: "16px 14px 30px", boxSizing: "border-box", boxShadow: "inset 0 0 0 1px #4A423A" }}>
                    <div style={{ width: "100%", height: "100%", overflow: "hidden", background: "#E9E6DF", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <Image src="/m/assets/paginas/p027.png" alt="" style={{ height: "100%", width: "auto", display: "block", filter: "grayscale(1) contrast(1.1)", mixBlendMode: "multiply" }} width={794} height={1123} sizes="(max-width: 768px) 100vw, 50vw" />
                    </div>
                  </div>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "4px", boxShadow: "inset 0 1px 0 #4A423A", paddingTop: "14px" }}>
                  <span style={{ font: "700 11px var(--fonte-mono)", letterSpacing: ".14em", color: "#D39858" }}>
                    KINDLE
                  </span>
                  <span style={{ fontSize: "14px", lineHeight: "1.5" }}>
                    Para leitura. A tela é em preto e branco e não permite preencher as práticas.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section style={{ background: "#DDCBBA", color: "#0B0B0B", padding: "clamp(64px,8cqw,112px) clamp(20px,5.5cqw,80px)" }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,380px),1fr))", gap: "clamp(36px,5cqw,72px)" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
              <div style={{ font: "400 11px var(--fonte-mono)", letterSpacing: ".2em", color: "#6F482C" }}>
                POR QUE PLANEJAR
              </div>
              <h2 style={{ margin: "0", font: "700 clamp(32px,4.4cqw,60px)/.95 var(--fonte-parkinsans)", letterSpacing: "-.045em", textWrap: "balance" }}>
                nada se cria no set
                <span style={{ color: "#6F482C" }}>
                  .
                </span>
              </h2>
              <p style={{ margin: "0", fontSize: "17px", color: "#2A1F18", textWrap: "pretty" }}>
                Isso não limita a criatividade. É o que abre espaço para ela. Um planejamento criativo faz você:
              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div style={{ display: "grid", gridTemplateColumns: "44px 1fr", gap: "10px", padding: "16px 0", boxShadow: "inset 0 1px 0 #6F482C" }}>
                <span style={{ font: "700 13px var(--fonte-mono)", color: "#6F482C" }}>
                  01
                </span>
                <span style={{ font: "600 18px/1.4 var(--fonte-corpo)" }}>
                  ter a foto aprovada pelo cliente antes de pegar na câmera;
                </span>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "44px 1fr", gap: "10px", padding: "16px 0", boxShadow: "inset 0 1px 0 #6F482C" }}>
                <span style={{ font: "700 13px var(--fonte-mono)", color: "#6F482C" }}>
                  02
                </span>
                <span style={{ font: "600 18px/1.4 var(--fonte-corpo)" }}>
                  chegar à sessão com objetos, fundos e ingredientes já separados;
                </span>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "44px 1fr", gap: "10px", padding: "16px 0", boxShadow: "inset 0 1px 0 #6F482C" }}>
                <span style={{ font: "700 13px var(--fonte-mono)", color: "#6F482C" }}>
                  03
                </span>
                <span style={{ font: "600 18px/1.4 var(--fonte-corpo)" }}>
                  fotografar em menos tempo, porque tudo já está encaminhado;
                </span>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "44px 1fr", gap: "10px", padding: "16px 0", boxShadow: "inset 0 1px 0 #6F482C" }}>
                <span style={{ font: "700 13px var(--fonte-mono)", color: "#6F482C" }}>
                  04
                </span>
                <span style={{ font: "600 18px/1.4 var(--fonte-corpo)" }}>
                  não travar no “branco” na hora de montar a cena ou a luz;
                </span>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "44px 1fr", gap: "10px", padding: "16px 0", boxShadow: "inset 0 1px 0 #6F482C" }}>
                <span style={{ font: "700 13px var(--fonte-mono)", color: "#6F482C" }}>
                  05
                </span>
                <span style={{ font: "600 18px/1.4 var(--fonte-corpo)" }}>
                  tomar cada decisão estética com um porquê, a serviço da mesma história;
                </span>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "44px 1fr", gap: "10px", padding: "16px 0", boxShadow: "inset 0 1px 0 #6F482C" }}>
                <span style={{ font: "700 13px var(--fonte-mono)", color: "#6F482C" }}>
                  06
                </span>
                <span style={{ font: "600 18px/1.4 var(--fonte-corpo)" }}>
                  orçar sabendo exatamente o que vai ser entregue;
                </span>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "44px 1fr", gap: "10px", padding: "16px 0", boxShadow: "inset 0 1px 0 #6F482C,inset 0 -1px 0 #6F482C" }}>
                <span style={{ font: "700 13px var(--fonte-mono)", color: "#6F482C" }}>
                  07
                </span>
                <span style={{ font: "600 18px/1.4 var(--fonte-corpo)" }}>
                  ter mais liberdade para criar, e não menos.
                </span>
              </div>
            </div>
          </div>
        </section>
        <section style={{ padding: "clamp(64px,8cqw,112px) clamp(20px,5.5cqw,80px)" }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "32px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: "20px", flexWrap: "wrap" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                <div style={{ font: "400 11px var(--fonte-mono)", letterSpacing: ".2em", color: "#D39858" }}>
                  PLANEJAMENTO × FOTO FINAL
                </div>
                <h2 style={{ margin: "0", font: "700 clamp(32px,4.4cqw,60px)/.95 var(--fonte-parkinsans)", letterSpacing: "-.045em", textWrap: "balance" }}>
                  o planejamento nos permite fazer fotos mais criativas
                  <span style={{ color: "#D39858" }}>
                    .
                  </span>
                </h2>
              </div>
              <div style={{ display: "flex", gap: "4px", flexWrap: "wrap" }}>
                {(v.projetos ?? []).map((p: any, pI: number) => (
                  <Fragment key={pI}>
                    <button onClick={p?.set} style={{ height: "44px", padding: "0 16px", border: "0", cursor: "pointer", font: "700 13px var(--fonte-corpo)", background: p?.bg, color: p?.fg, boxShadow: "inset 0 0 0 1px #6F482C" }}>
                      {p?.label}
                    </button>
                  </Fragment>
                ))}
              </div>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "minmax(0,16fr) minmax(0,5.2fr)", gap: "12px", alignItems: "start" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                <img src={v.planSrc} alt="Planejamento" style={{ width: "100%", aspectRatio: "16/9", objectFit: "cover", display: "block" }} />
                <span style={{ font: "400 10px var(--fonte-mono)", letterSpacing: ".14em" }}>
                  PLANEJAMENTO
                </span>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                <img src={v.finalSrc} alt="Foto final" style={{ width: "100%", aspectRatio: "2/3", objectFit: "cover", display: "block" }} />
                <span style={{ font: "400 10px var(--fonte-mono)", letterSpacing: ".14em", color: "#D39858" }}>
                  FOTO FINAL
                </span>
              </div>
            </div>
            <p style={{ margin: "0", maxWidth: "640px", fontSize: "16px", textWrap: "pretty" }}>
              No capítulo 05 você aprende a montar o seu documento de planejamento e a apresentar a foto ao cliente antes de ela existir.
            </p>
          </div>
        </section>
        <section style={{ background: "#2A1F18", padding: "clamp(64px,8cqw,112px) clamp(20px,5.5cqw,80px)" }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "32px" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              <div style={{ font: "400 11px var(--fonte-mono)", letterSpacing: ".2em", color: "#D39858" }}>
                284 PÁGINAS · 6 CAPÍTULOS
              </div>
              <h2 style={{ margin: "0", font: "700 clamp(32px,4.4cqw,60px)/.95 var(--fonte-parkinsans)", letterSpacing: "-.045em", textWrap: "balance" }}>
                o que tem em cada capítulo
                <span style={{ color: "#D39858" }}>
                  .
                </span>
              </h2>
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              {(v.capitulos ?? []).map((c: any, cI: number) => (
                <Fragment key={cI}>
                  <div style={{ boxShadow: "inset 0 1px 0 #4A423A" }}>
                    <button onClick={c?.toggle} style={{ all: "unset", boxSizing: "border-box", cursor: "pointer", width: "100%", display: "grid", gridTemplateColumns: "minmax(56px,auto) minmax(0,1fr) 40px", gap: "clamp(12px,2cqw,28px)", alignItems: "center", padding: "22px 0" }}>
                      <span style={{ font: "700 clamp(34px,4cqw,56px)/.9 var(--fonte-parkinsans)", letterSpacing: "-.05em", color: "#D39858" }}>
                        {c?.n}
                      </span>
                      <span style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                        <span style={{ font: "700 clamp(20px,2.2cqw,28px)/1.1 var(--fonte-parkinsans)", letterSpacing: "-.03em", color: "#DDCBBA" }}>
                          {c?.titulo}
                        </span>
                        <span style={{ font: "400 10px var(--fonte-mono)", letterSpacing: ".12em", color: "#DDCBBA" }}>
                          {c?.meta}
                        </span>
                      </span>
                      <span style={{ width: "40px", height: "40px", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "inset 0 0 0 1px #6F482C", font: "700 18px var(--fonte-corpo)", color: "#D39858" }}>
                        {c?.sinal}
                      </span>
                    </button>
                    {c?.aberto ? (
                      <>
                        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,300px),1fr))", gap: "clamp(24px,4cqw,56px)", padding: "0 0 32px" }}>
                          <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
                            <p style={{ margin: "0", fontSize: "17px", textWrap: "pretty" }}>
                              {c?.desc}
                            </p>
                            <div style={{ display: "flex", flexDirection: "column" }}>
                              {(c?.subs ?? []).map((s: any, sI: number) => (
                                <Fragment key={sI}>
                                  <div style={{ display: "flex", gap: "12px", alignItems: "baseline", padding: "10px 0", boxShadow: "inset 0 1px 0 #4A423A", fontSize: "15px" }}>
                                    <span style={{ color: "#D39858" }}>
                                      —
                                    </span>
                                    <span>
                                      {s}
                                    </span>
                                  </div>
                                </Fragment>
                              ))}
                            </div>
                          </div>
                          <img src={c?.thumb} alt="" style={{ width: "100%", maxWidth: "300px", aspectRatio: "794/1123", objectFit: "cover", display: "block", justifySelf: "end", background: "#FFFFFF" }} />
                        </div>
                      </>
                    ) : null}
                  </div>
                </Fragment>
              ))}
            </div>
          </div>
        </section>
        <section style={{ padding: "clamp(64px,8cqw,112px) clamp(20px,5.5cqw,80px)" }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,400px),1fr))", gap: "clamp(40px,5cqw,72px)", alignItems: "center" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
              <div style={{ font: "400 11px var(--fonte-mono)", letterSpacing: ".2em", color: "#D39858" }}>
                12 PRÁTICAS
              </div>
              <h2 style={{ margin: "0", font: "700 clamp(32px,4.4cqw,60px)/.95 var(--fonte-parkinsans)", letterSpacing: "-.045em", textWrap: "balance" }}>
                você preenche no próprio arquivo
                <span style={{ color: "#D39858" }}>
                  .
                </span>
              </h2>
              <p style={{ margin: "0", fontSize: "17px", textWrap: "pretty" }}>
                Abra o PDF, clique no campo e escreva, marque as opções e escolha as cores da sua paleta. Se preferir, imprima as páginas e preencha à mão.
              </p>
              <p style={{ margin: "0", fontSize: "15px", textWrap: "pretty" }}>
                As seis primeiras práticas formam um único projeto, construído enquanto você lê. No fim, você tem um modelo de pré-briefing, um roteiro de briefing criativo e a apresentação completa do planejamento de um projeto.
              </p>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,220px),1fr))", columnGap: "24px", fontSize: "14px" }}>
                <span style={{ padding: "8px 0", boxShadow: "inset 0 1px 0 #4A423A" }}>
                  <strong style={{ color: "#D39858", fontWeight: "700" }}>
                    01
                  </strong>
                   o seu modelo de pré-briefing
                </span>
                <span style={{ padding: "8px 0", boxShadow: "inset 0 1px 0 #4A423A" }}>
                  <strong style={{ color: "#D39858", fontWeight: "700" }}>
                    02
                  </strong>
                   o seu roteiro de briefing
                </span>
                <span style={{ padding: "8px 0", boxShadow: "inset 0 1px 0 #4A423A" }}>
                  <strong style={{ color: "#D39858", fontWeight: "700" }}>
                    03
                  </strong>
                   do briefing ao moodboard
                </span>
                <span style={{ padding: "8px 0", boxShadow: "inset 0 1px 0 #4A423A" }}>
                  <strong style={{ color: "#D39858", fontWeight: "700" }}>
                    04
                  </strong>
                   a história de cada foto
                </span>
                <span style={{ padding: "8px 0", boxShadow: "inset 0 1px 0 #4A423A" }}>
                  <strong style={{ color: "#D39858", fontWeight: "700" }}>
                    05
                  </strong>
                   pensar antes de decidir
                </span>
                <span style={{ padding: "8px 0", boxShadow: "inset 0 1px 0 #4A423A" }}>
                  <strong style={{ color: "#D39858", fontWeight: "700" }}>
                    06
                  </strong>
                   a apresentação do planejamento
                </span>
                <span style={{ padding: "8px 0", boxShadow: "inset 0 1px 0 #4A423A" }}>
                  <strong style={{ color: "#D39858", fontWeight: "700" }}>
                    07
                  </strong>
                   criatividade
                </span>
                <span style={{ padding: "8px 0", boxShadow: "inset 0 1px 0 #4A423A" }}>
                  <strong style={{ color: "#D39858", fontWeight: "700" }}>
                    08
                  </strong>
                   um sentimento em uma imagem
                </span>
                <span style={{ padding: "8px 0", boxShadow: "inset 0 1px 0 #4A423A" }}>
                  <strong style={{ color: "#D39858", fontWeight: "700" }}>
                    09
                  </strong>
                   combinações cromáticas
                </span>
                <span style={{ padding: "8px 0", boxShadow: "inset 0 1px 0 #4A423A" }}>
                  <strong style={{ color: "#D39858", fontWeight: "700" }}>
                    10
                  </strong>
                   ângulos
                </span>
                <span style={{ padding: "8px 0", boxShadow: "inset 0 1px 0 #4A423A" }}>
                  <strong style={{ color: "#D39858", fontWeight: "700" }}>
                    11
                  </strong>
                   composição
                </span>
                <span style={{ padding: "8px 0", boxShadow: "inset 0 1px 0 #4A423A" }}>
                  <strong style={{ color: "#D39858", fontWeight: "700" }}>
                    12
                  </strong>
                   cinco briefings completos
                </span>
              </div>
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <PraticaAnimada />
            </div>
          </div>
        </section>
        <section style={{ background: "#DDCBBA", color: "#0B0B0B", padding: "clamp(64px,8cqw,112px) clamp(20px,5.5cqw,80px)" }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "40px" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              <div style={{ font: "400 11px var(--fonte-mono)", letterSpacing: ".2em", color: "#6F482C" }}>
                ALUNOS
              </div>
              <h2 style={{ margin: "0", font: "700 clamp(32px,4.4cqw,60px)/.95 var(--fonte-parkinsans)", letterSpacing: "-.045em", textWrap: "balance" }}>
                quem já aplicou o processo
                <span style={{ color: "#6F482C" }}>
                  .
                </span>
              </h2>
            </div>
            <DepoimentosPagina set="adf" />
          </div>
        </section>
        <section style={{ padding: "clamp(64px,8cqw,112px) clamp(20px,5.5cqw,80px)" }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,360px),1fr))", gap: "clamp(36px,5cqw,72px)", alignItems: "center" }}>
            <div style={{ aspectRatio: "4/5", overflow: "hidden", maxWidth: "480px" }}>
              <Image src="/m/assets/adf/retrato.jpg" alt="Débora Gabrich" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} width={932} height={1400} sizes="(max-width: 768px) 100vw, 50vw" />
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              <div style={{ font: "400 11px var(--fonte-mono)", letterSpacing: ".2em", color: "#D39858" }}>
                QUEM ESCREVEU
              </div>
              <h2 style={{ margin: "0", font: "700 clamp(32px,4.4cqw,60px)/.95 var(--fonte-parkinsans)", letterSpacing: "-.045em" }}>
                débora gabrich
                <span style={{ color: "#D39858" }}>
                  .
                </span>
              </h2>
              <p style={{ margin: "0", fontSize: "17px", textWrap: "pretty" }}>
                Fotógrafa publicitária, diretora criativa, creator e comunicóloga, formada em Publicidade e Propaganda.
              </p>
              <p style={{ margin: "0", fontSize: "17px", textWrap: "pretty" }}>
                Essas seriam as primeiras coisas que eu diria sobre mim. Workaholic convicta, falar sobre o meu trabalho é quase como falar sobre quem eu sou.
              </p>
              <p style={{ margin: "0", fontSize: "17px", textWrap: "pretty" }}>
                A fotografia sempre foi a minha forma preferida de enxergar a vida. Pra mim, uma foto não precisa apenas ser bonita: ela precisa contar uma história.
              </p>
              <p style={{ margin: "0", fontSize: "17px", textWrap: "pretty" }}>
                Fotografo profissionalmente desde 2012 e, desde 2014, me dedico à fotografia de gastronomia e de produtos, com marcas como Nestlé, Granado, Outback, Catupiry, Vigor e Adobe. Do briefing à foto final, cada etapa é pensada para traduzir posicionamento e identidade visual em imagens que comunicam.
              </p>
              <p style={{ margin: "0", fontSize: "17px", textWrap: "pretty" }}>
                No Antes da Foto, eu abro a parte que vem antes do clique e te ensino como eu penso cada projeto e como eu faço todos os meus planejamentos criativos.
              </p>
              <p style={{ margin: "0", font: "600 clamp(20px,2cqw,26px)/1.35 var(--fonte-corpo)", color: "#DDCBBA", textWrap: "pretty" }}>
                “O meu trabalho como fotógrafa e diretora criativa começa muito antes de eu pegar na câmera.”
              </p>
            </div>
          </div>
        </section>
        <section id="oferta" style={{ background: "#2A1F18", padding: "clamp(64px,8cqw,112px) clamp(20px,5.5cqw,80px)" }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "40px" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "14px", alignItems: "center", textAlign: "center" }}>
              <div style={{ font: "400 11px var(--fonte-mono)", letterSpacing: ".2em", color: "#D39858" }}>
                ESCOLHA COMO LEVAR
              </div>
              <h2 style={{ margin: "0", font: "700 clamp(32px,4.4cqw,60px)/.95 var(--fonte-parkinsans)", letterSpacing: "-.045em", textWrap: "balance" }}>
                o e-book antes da foto
                <span style={{ color: "#D39858" }}>
                  .
                </span>
              </h2>
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <div style={{ width: "100%", maxWidth: "460px", justifySelf: "center", display: "flex", flexDirection: "column" }}>
                {v.notBF ? (
                  <>
                    <div style={{ width: "100%", maxWidth: "460px", boxSizing: "border-box", background: "#2A1F18", boxShadow: "inset 0 0 0 1px #3A2C22", borderRadius: "16px", padding: "clamp(28px,3cqw,40px) clamp(22px,3cqw,40px) 32px", display: "flex", flexDirection: "column", gap: "0" }}>
                      <img src="/m/exportacoes-2026/antes-da-foto/logos/svg/antes-da-foto_logo_horizontal_ponto-whiskey.svg" alt="Antes da Foto" style={{ height: "30px", width: "auto", maxWidth: "100%", alignSelf: "flex-start", display: "block" }} />
                      <div style={{ fontFamily: "var(--fonte-mono)", fontSize: "11px", letterSpacing: "0.24em", textTransform: "uppercase", color: "#DDCBBA", paddingTop: "14px" }}>
                        E-BOOK
                      </div>
                      <div style={{ display: "flex", flexDirection: "column", gap: "6px", paddingTop: "24px" }}>
                        <div style={{ fontFamily: "var(--fonte-parkinsans)", fontWeight: "700", fontSize: "clamp(34px,4.4cqw,52px)", lineHeight: "1", letterSpacing: "-0.02em", color: "#F4F0E8", whiteSpace: "nowrap" }}>
                          <span style={{ fontSize: "0.42em", letterSpacing: "0.02em" }}>
                            12x 
                          </span>
                          R$ 20,37
                        </div>
                        <div style={{ fontFamily: "var(--fonte-parkinsans)", fontWeight: "700", fontSize: "22px", color: "#DDCBBA" }}>
                          ou R$ 197 à vista
                        </div>
                      </div>
                      <div style={{ height: "1px", background: "#3A2C22", margin: "28px 0 22px" }} />
                      <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                        <div style={{ display: "flex", alignItems: "baseline", gap: "6px" }}>
                          <span style={{ flex: "none", width: "22px", color: "#D39858", fontFamily: "var(--fonte-corpo)", fontSize: "15px", lineHeight: "1.5" }}>
                            —
                          </span>
                          <span style={{ fontFamily: "var(--fonte-corpo)", fontSize: "15px", lineHeight: "1.5", color: "#F4F0E8" }}>
                            e-book com 284 páginas
                          </span>
                        </div>
                        <div style={{ display: "flex", alignItems: "baseline", gap: "6px" }}>
                          <span style={{ flex: "none", width: "22px", color: "#D39858", fontFamily: "var(--fonte-corpo)", fontSize: "15px", lineHeight: "1.5" }}>
                            —
                          </span>
                          <span style={{ fontFamily: "var(--fonte-corpo)", fontSize: "15px", lineHeight: "1.5", color: "#F4F0E8" }}>
                            06 capítulos, do briefing à hora da foto
                          </span>
                        </div>
                        <div style={{ display: "flex", alignItems: "baseline", gap: "6px" }}>
                          <span style={{ flex: "none", width: "22px", color: "#D39858", fontFamily: "var(--fonte-corpo)", fontSize: "15px", lineHeight: "1.5" }}>
                            —
                          </span>
                          <span style={{ fontFamily: "var(--fonte-corpo)", fontSize: "15px", lineHeight: "1.5", color: "#F4F0E8" }}>
                            12 práticas para preencher na tela ou à mão
                          </span>
                        </div>
                        <div style={{ display: "flex", alignItems: "baseline", gap: "6px" }}>
                          <span style={{ flex: "none", width: "22px", color: "#D39858", fontFamily: "var(--fonte-corpo)", fontSize: "15px", lineHeight: "1.5" }}>
                            —
                          </span>
                          <span style={{ fontFamily: "var(--fonte-corpo)", fontSize: "15px", lineHeight: "1.5", color: "#F4F0E8" }}>
                            05 briefings completos de marcas fictícias pra você praticar e aumentar o seu portfólio
                          </span>
                        </div>
                        <div style={{ display: "flex", alignItems: "baseline", gap: "6px" }}>
                          <span style={{ flex: "none", width: "22px", color: "#D39858", fontFamily: "var(--fonte-corpo)", fontSize: "15px", lineHeight: "1.5" }}>
                            —
                          </span>
                          <span style={{ fontFamily: "var(--fonte-corpo)", fontSize: "15px", lineHeight: "1.5", color: "#F4F0E8" }}>
                            exercícios pra você criar o seu modelo de briefing e planejamento da sessão de fotos
                          </span>
                        </div>
                        <div style={{ display: "flex", alignItems: "baseline", gap: "6px" }}>
                          <span style={{ flex: "none", width: "22px", color: "#D39858", fontFamily: "var(--fonte-corpo)", fontSize: "15px", lineHeight: "1.5" }}>
                            —
                          </span>
                          <span style={{ fontFamily: "var(--fonte-corpo)", fontSize: "15px", lineHeight: "1.5", color: "#F4F0E8" }}>
                            suporte para alunos na plataforma da Hotmart
                          </span>
                        </div>
                      </div>
                      <Destino href="#checkout-antes-da-foto" style={{ marginTop: "28px", display: "flex", alignItems: "center", justifyContent: "center", minHeight: "60px", padding: "0 20px", background: "#D39858", color: "#0B0B0B", fontFamily: "var(--fonte-corpo)", fontWeight: "700", textTransform: "none", letterSpacing: "0", fontSize: "17px", textDecoration: "none", textAlign: "center", borderRadius: "0" }} pagina="antes-da-foto">
                        quero o e-book
                      </Destino>
                      <div style={{ fontFamily: "var(--fonte-mono)", fontSize: "11px", letterSpacing: "0.18em", textTransform: "uppercase", color: "#DDCBBA", textAlign: "center", paddingTop: "16px" }}>
                        PAGAMENTO SEGURO · GARANTIA DE 7 DIAS
                      </div>
                    </div>
                  </>
                ) : null}
                {v.isBF ? (
                  <>
                    <div style={{ width: "100%", maxWidth: "460px", boxSizing: "border-box", background: "#2A1F18", boxShadow: "inset 0 0 0 1px #3A2C22", borderRadius: "16px", padding: "clamp(28px,3cqw,40px) clamp(22px,3cqw,40px) 32px", display: "flex", flexDirection: "column", gap: "0" }}>
                      <img src="/m/exportacoes-2026/antes-da-foto/logos/svg/antes-da-foto_logo_horizontal_ponto-whiskey.svg" alt="Antes da Foto" style={{ height: "30px", width: "auto", maxWidth: "100%", alignSelf: "flex-start", display: "block" }} />
                      <div style={{ fontFamily: "var(--fonte-mono)", fontSize: "11px", letterSpacing: "0.24em", textTransform: "uppercase", color: "#DDCBBA", paddingTop: "14px" }}>
                        E-BOOK
                      </div>
                      <div style={{ paddingTop: "20px", display: "flex" }}>
                        <div style={{ display: "flex", gap: "6px", alignSelf: "flex-start" }}>
                          <span style={{ background: "#D39858", color: "#0B0B0B", fontFamily: "var(--fonte-mono)", fontSize: "11px", letterSpacing: "0.14em", textTransform: "uppercase", padding: "6px 10px", borderRadius: "0" }}>
                            -50%
                          </span>
                          <span style={{ background: "#0B0B0B", color: "#F4F0E8", fontFamily: "var(--fonte-mono)", fontSize: "11px", letterSpacing: "0.14em", textTransform: "uppercase", padding: "6px 10px", borderRadius: "0" }}>
                            BLACK FRIDAY
                          </span>
                        </div>
                      </div>
                      <div style={{ display: "flex", flexDirection: "column", gap: "6px", paddingTop: "24px" }}>
                        <div style={{ fontFamily: "var(--fonte-parkinsans)", fontWeight: "700", fontSize: "20px", color: "#DDCBBA" }}>
                          de R$ 
                          <span style={{ textDecoration: "line-through" }}>
                            197
                          </span>
                           por
                        </div>
                        <div style={{ fontFamily: "var(--fonte-parkinsans)", fontWeight: "700", fontSize: "clamp(34px,4.4cqw,52px)", lineHeight: "1", letterSpacing: "-0.02em", color: "#F4F0E8", whiteSpace: "nowrap" }}>
                          <span style={{ fontSize: "0.42em", letterSpacing: "0.02em" }}>
                            12x 
                          </span>
                          R$ 10,03
                        </div>
                        <div style={{ fontFamily: "var(--fonte-parkinsans)", fontWeight: "700", fontSize: "22px", color: "#DDCBBA" }}>
                          ou R$ 97 à vista
                        </div>
                      </div>
                      <div style={{ height: "1px", background: "#3A2C22", margin: "28px 0 22px" }} />
                      <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                        <div style={{ display: "flex", alignItems: "baseline", gap: "6px" }}>
                          <span style={{ flex: "none", width: "22px", color: "#D39858", fontFamily: "var(--fonte-corpo)", fontSize: "15px", lineHeight: "1.5" }}>
                            —
                          </span>
                          <span style={{ fontFamily: "var(--fonte-corpo)", fontSize: "15px", lineHeight: "1.5", color: "#F4F0E8" }}>
                            e-book com 284 páginas
                          </span>
                        </div>
                        <div style={{ display: "flex", alignItems: "baseline", gap: "6px" }}>
                          <span style={{ flex: "none", width: "22px", color: "#D39858", fontFamily: "var(--fonte-corpo)", fontSize: "15px", lineHeight: "1.5" }}>
                            —
                          </span>
                          <span style={{ fontFamily: "var(--fonte-corpo)", fontSize: "15px", lineHeight: "1.5", color: "#F4F0E8" }}>
                            06 capítulos, do briefing à hora da foto
                          </span>
                        </div>
                        <div style={{ display: "flex", alignItems: "baseline", gap: "6px" }}>
                          <span style={{ flex: "none", width: "22px", color: "#D39858", fontFamily: "var(--fonte-corpo)", fontSize: "15px", lineHeight: "1.5" }}>
                            —
                          </span>
                          <span style={{ fontFamily: "var(--fonte-corpo)", fontSize: "15px", lineHeight: "1.5", color: "#F4F0E8" }}>
                            12 práticas para preencher na tela ou à mão
                          </span>
                        </div>
                        <div style={{ display: "flex", alignItems: "baseline", gap: "6px" }}>
                          <span style={{ flex: "none", width: "22px", color: "#D39858", fontFamily: "var(--fonte-corpo)", fontSize: "15px", lineHeight: "1.5" }}>
                            —
                          </span>
                          <span style={{ fontFamily: "var(--fonte-corpo)", fontSize: "15px", lineHeight: "1.5", color: "#F4F0E8" }}>
                            05 briefings completos de marcas fictícias pra você praticar e aumentar o seu portfólio
                          </span>
                        </div>
                        <div style={{ display: "flex", alignItems: "baseline", gap: "6px" }}>
                          <span style={{ flex: "none", width: "22px", color: "#D39858", fontFamily: "var(--fonte-corpo)", fontSize: "15px", lineHeight: "1.5" }}>
                            —
                          </span>
                          <span style={{ fontFamily: "var(--fonte-corpo)", fontSize: "15px", lineHeight: "1.5", color: "#F4F0E8" }}>
                            exercícios pra você criar o seu modelo de briefing e planejamento da sessão de fotos
                          </span>
                        </div>
                        <div style={{ display: "flex", alignItems: "baseline", gap: "6px" }}>
                          <span style={{ flex: "none", width: "22px", color: "#D39858", fontFamily: "var(--fonte-corpo)", fontSize: "15px", lineHeight: "1.5" }}>
                            —
                          </span>
                          <span style={{ fontFamily: "var(--fonte-corpo)", fontSize: "15px", lineHeight: "1.5", color: "#F4F0E8" }}>
                            suporte para alunos na plataforma da Hotmart
                          </span>
                        </div>
                      </div>
                      {v.isUltima ? (
                        <>
                          <div style={{ marginTop: "24px", marginBottom: "-14px", fontFamily: "var(--fonte-mono)", fontSize: "11px", letterSpacing: "0.08em", color: "#DDCBBA", textAlign: "center" }}>
                            o desconto termina em 27.11, às 23h59
                          </div>
                        </>
                      ) : null}
                      <Destino href="#checkout-bf26-antes-da-foto" style={{ marginTop: "28px", display: "flex", alignItems: "center", justifyContent: "center", minHeight: "60px", padding: "0 20px", background: "#D39858", color: "#0B0B0B", fontFamily: "var(--fonte-corpo)", fontWeight: "700", textTransform: "none", letterSpacing: "0", fontSize: "17px", textDecoration: "none", textAlign: "center", borderRadius: "0" }} pagina="antes-da-foto">
                        garantir com 50%
                      </Destino>
                      <div style={{ fontFamily: "var(--fonte-mono)", fontSize: "11px", letterSpacing: "0.18em", textTransform: "uppercase", color: "#DDCBBA", textAlign: "center", paddingTop: "16px" }}>
                        PAGAMENTO SEGURO · GARANTIA DE 7 DIAS
                      </div>
                    </div>
                  </>
                ) : null}
                <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "18px", paddingTop: "36px" }}>
                  <div style={{ width: "72px", height: "72px", boxSizing: "border-box", boxShadow: "inset 0 0 0 1px #D39858", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "2px", flex: "none" }}>
                    <span style={{ fontFamily: "var(--fonte-parkinsans)", fontWeight: "700", fontSize: "34px", lineHeight: "1", color: "#D39858" }}>
                      7
                    </span>
                    <span style={{ fontFamily: "var(--fonte-mono)", fontSize: "9px", letterSpacing: "0.2em", color: "#D39858" }}>
                      DIAS
                    </span>
                  </div>
                  <div style={{ fontFamily: "var(--fonte-corpo)", fontSize: "14px", lineHeight: "1.5", color: "#F4F0E8" }}>
                    <strong style={{ fontWeight: "700" }}>
                      Garantia de 7 dias.
                    </strong>
                    <br />
                    Se não for para você, devolvemos 100% do valor.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section style={{ padding: "clamp(64px,8cqw,112px) clamp(20px,5.5cqw,80px)" }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "28px", alignItems: "center" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "14px", alignItems: "center", textAlign: "center" }}>
              {v.notBF ? (
                <>
                  <div style={{ font: "400 11px var(--fonte-mono)", letterSpacing: ".2em", color: "#D39858" }}>
                    MONTE SEU COMBO
                  </div>
                </>
              ) : null}
              {v.isBF ? (
                <>
                  <div style={{ font: "400 11px var(--fonte-mono)", letterSpacing: ".2em", color: "#D39858" }}>
                    MONTE SUA BLACK FRIDAY
                  </div>
                </>
              ) : null}
              <h2 style={{ margin: "0", font: "700 clamp(30px,3.6cqw,48px)/.95 var(--fonte-parkinsans)", letterSpacing: "-.045em", textWrap: "balance" }}>
                quer levar junto com outro curso
                <span style={{ color: "#D39858" }}>
                  ?
                </span>
              </h2>
            </div>
            <ComboPagina curso="a" bf={v.isBF} />
          </div>
        </section>
        <section style={{ padding: "0 clamp(20px,5.5cqw,80px) clamp(64px,8cqw,112px)" }}>
          <div style={{ maxWidth: "880px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "28px" }}>
            <div style={{ font: "400 11px var(--fonte-mono)", letterSpacing: ".2em", color: "#D39858" }}>
              PERGUNTAS FREQUENTES
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: "6px", padding: "20px 0", boxShadow: "inset 0 1px 0 #4A423A" }}>
                <span style={{ font: "700 18px var(--fonte-corpo)" }}>
                  Para quem é o e-book?
                </span>
                <span style={{ fontSize: "15px" }}>
                  Para quem fotografa produtos ou gastronomia e quer criar fotos com intenção, narrativa e identificação. Serve para quem está começando e para quem já fotografa há anos.
                </span>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "6px", padding: "20px 0", boxShadow: "inset 0 1px 0 #4A423A" }}>
                <span style={{ font: "700 18px var(--fonte-corpo)" }}>
                  Preciso de estúdio ou de equipamento profissional?
                </span>
                <span style={{ fontSize: "15px" }}>
                  Não. O e-book trata do processo criativo, que vale para quem fotografa em estúdio, em casa ou na locação do cliente.
                </span>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "6px", padding: "20px 0", boxShadow: "inset 0 1px 0 #4A423A" }}>
                <span style={{ font: "700 18px var(--fonte-corpo)" }}>
                  Eu não tenho cliente. Consigo fazer as práticas?
                </span>
                <span style={{ fontSize: "15px" }}>
                  Sim. Você pode usar um dos cinco briefings completos de marcas fictícias que estão no capítulo 06.
                </span>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "6px", padding: "20px 0", boxShadow: "inset 0 1px 0 #4A423A" }}>
                <span style={{ font: "700 18px var(--fonte-corpo)" }}>
                  Como eu recebo e por quanto tempo tenho acesso?
                </span>
                <span style={{ fontSize: "15px" }}>
                  Logo depois da compra, você recebe um e-mail da Hotmart com o acesso. O e-book fica na área de membros, com o arquivo para baixar e guardar no celular, no tablet ou no computador. O acesso é vitalício.
                </span>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "6px", padding: "20px 0", boxShadow: "inset 0 1px 0 #4A423A" }}>
                <span style={{ font: "700 18px var(--fonte-corpo)" }}>
                  Consigo ler no celular?
                </span>
                <span style={{ fontSize: "15px" }}>
                  Sim. O e-book abre no celular, no tablet, no notebook e no Kindle. Para preencher as práticas na tela, o ideal é usar o tablet ou o computador. No Kindle, ele serve só para leitura.
                </span>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "6px", padding: "20px 0", boxShadow: "inset 0 1px 0 #4A423A" }}>
                <span style={{ font: "700 18px var(--fonte-corpo)" }}>
                  Qual a diferença entre o Antes da Foto e os cursos?
                </span>
                <span style={{ fontSize: "15px" }}>
                  O Antes da Foto é sobre o que vem antes do clique: briefing, referências, narrativa e o planejamento de cada foto. O Luz na Prática ensina a construir a luz, e o Mais que um Click é o curso completo de fotografia de gastronomia, do briefing à foto final. Eles se completam.
                </span>
              </div>
              {v.notBF ? (
                <>
                  <div style={{ display: "flex", flexDirection: "column", gap: "6px", padding: "20px 0", boxShadow: "inset 0 1px 0 #4A423A,inset 0 -1px 0 #4A423A" }}>
                    <span style={{ font: "700 18px var(--fonte-corpo)" }}>
                      E se eu não gostar?
                    </span>
                    <span style={{ fontSize: "15px" }}>
                      Você tem 7 dias de garantia. Se não for para você, devolvemos 100% do valor.
                    </span>
                  </div>
                </>
              ) : null}
              {v.isBF ? (
                <>
                  <div style={{ display: "flex", flexDirection: "column", gap: "6px", padding: "20px 0", boxShadow: "inset 0 1px 0 #4A423A" }}>
                    <span style={{ font: "700 18px var(--fonte-corpo)" }}>
                      E se eu não gostar?
                    </span>
                    <span style={{ fontSize: "15px" }}>
                      Você tem 7 dias de garantia. Se não for para você, devolvemos 100% do valor.
                    </span>
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: "6px", padding: "20px 0", boxShadow: "inset 0 1px 0 #4A423A,inset 0 -1px 0 #4A423A" }}>
                    <span style={{ font: "700 18px var(--fonte-corpo)" }}>
                      Até quando vale o desconto da Black Friday?
                    </span>
                    <span style={{ fontSize: "15px" }}>
                      Até 27 de novembro, às 23h59. Depois disso, o e-book volta para o preço normal.
                    </span>
                  </div>
                </>
              ) : null}
            </div>
          </div>
        </section>
        <section style={{ background: "#DDCBBA", color: "#0B0B0B", padding: "clamp(64px,8cqw,112px) clamp(20px,5.5cqw,80px)" }}>
          <div style={{ maxWidth: "880px", margin: "0 auto", display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "24px" }}>
            <h2 style={{ margin: "0", font: "700 clamp(38px,5.6cqw,80px)/.92 var(--fonte-parkinsans)", letterSpacing: "-.05em", textWrap: "balance" }}>
              a sua próxima foto ainda está no rascunho
              <span style={{ color: "#6F482C" }}>
                .
              </span>
            </h2>
            <a href="#oferta" style={{ height: "56px", display: "inline-flex", alignItems: "center", padding: "0 28px", background: "#0B0B0B", color: "#DDCBBA", font: "700 16px var(--fonte-corpo)", textDecoration: "none" }} className="dc-antes-da-foto-5">
              {v.cta}
            </a>
          </div>
        </section>
        <footer style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "24px", padding: "32px clamp(20px,5.5cqw,80px)", boxShadow: "inset 0 1px 0 #3A2C22" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            <img src="/m/exportacoes-2026/antes-da-foto/logos/svg/antes-da-foto_logo_horizontal_ponto-whiskey.svg" alt="antes da foto" style={{ height: "18px", width: "auto", display: "block" }} />
            <span style={{ font: "400 10px var(--fonte-mono)", letterSpacing: ".14em", textTransform: "uppercase", color: "#A7865D" }}>
              um e-book Débora Gabrich
            </span>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "16px 24px", font: "400 13px var(--fonte-corpo)" }}>
            <Destino href="#contato" style={{ color: "#DDCBBA", textDecoration: "none" }} pagina="antes-da-foto">
              contato
            </Destino>
            <Destino href="#instagram" style={{ color: "#DDCBBA", textDecoration: "none" }} pagina="antes-da-foto">
              @deboragabrich
            </Destino>
          </div>
        </footer>
      </div>
    </>
  );
}
