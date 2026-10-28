'use client';
/* eslint-disable @typescript-eslint/no-explicit-any */
// Gerado a partir de "MqC Pagina - Manual v2.dc.html" (manual) pelo conversor em _conversor/. Edite à vontade: este arquivo agora é código do site.
import { Fragment } from 'react';
import Image from 'next/image';
import { Destino } from '@/components/Destino';
import { ImagemReservada } from '@/components/ImagemReservada';
import { DepoimentosPagina } from '@/components/DepoimentosPagina';
import { CardPreco } from '@/components/CardPreco';
import { ComboPagina } from '@/components/ComboPagina';
import './hover.css';

export function Corpo({ v }: { v: any }) {
  return (
    <>
      <div style={{ containerType: "inline-size", width: "100%", overflowX: "clip", background: "#201F1D", color: "#F6F3EC", font: "400 16px/1.7 var(--fonte-corpo)" }}>
        <header style={{ position: "sticky", top: "0", zIndex: "60", background: "#201F1D", boxShadow: "inset 0 -1px 0 #2A2826" }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto", height: "64px", padding: "0 clamp(20px,5.5cqw,80px)", boxSizing: "content-box", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "24px" }}>
            <a style={{ display: "flex", flex: "none" }} href="#oferta">
              <img src="/m/exportacoes-2026/mais-que-um-click/logos/svg/mais-que-um-click_logo_horizontal_off-white-amarelo.svg" alt="mais que um click" style={{ height: "20px", width: "auto", display: "block" }} />
            </a>
            <div style={{ display: "flex", alignItems: "center", gap: "16px", flex: "none" }}>
              <a href="#oferta" style={{ height: "36px", padding: "0 16px", display: "flex", alignItems: "center", borderRadius: "0", background: "#F5C242", color: "#201F1D", font: "600 12px var(--fonte-corpo)", letterSpacing: ".12em", textTransform: "uppercase", textDecoration: "none", whiteSpace: "nowrap" }} className="dc-mais-que-um-click-1">
                quero entrar
              </a>
            </div>
          </div>
        </header>
        {v.isAbertura ? (
          <>
            <div style={{ background: "#CCAA66", color: "#201F1D", padding: "11px 0", overflow: "hidden", whiteSpace: "nowrap", font: "700 12px var(--fonte-mono)", letterSpacing: ".14em" }}>
              BLACK FRIDAY · 50% DE DESCONTO · ATÉ 27.11 · BLACK FRIDAY · 50% DE DESCONTO · ATÉ 27.11 · BLACK FRIDAY · 50% DE DESCONTO · ATÉ 27.11 · BLACK FRIDAY · 50% DE DESCONTO · ATÉ 27.11 ·
            </div>
          </>
        ) : null}
        {v.isUltima ? (
          <>
            <div style={{ background: "#2A2826", padding: "14px 20px", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "center", gap: "12px 28px", boxShadow: "inset 0 -1px 0 #3A3733" }}>
              <span style={{ font: "900 14px var(--fonte-urbanist)", letterSpacing: ".03em", textTransform: "uppercase", whiteSpace: "nowrap" }}>
                o desconto de black friday acaba em
              </span>
              <div style={{ display: "flex", gap: "14px", alignItems: "baseline" }}>
                <span style={{ display: "flex", alignItems: "baseline", gap: "3px" }}>
                  <span style={{ font: "600 26px/1 var(--fonte-urbanist)", color: "#CCAA66" }}>
                    02
                  </span>
                  <span style={{ font: "400 12px var(--fonte-mono)", color: "#D9D5CC" }}>
                    D
                  </span>
                </span>
                <span style={{ display: "flex", alignItems: "baseline", gap: "3px" }}>
                  <span style={{ font: "600 26px/1 var(--fonte-urbanist)", color: "#CCAA66" }}>
                    09
                  </span>
                  <span style={{ font: "400 12px var(--fonte-mono)", color: "#D9D5CC" }}>
                    H
                  </span>
                </span>
                <span style={{ display: "flex", alignItems: "baseline", gap: "3px" }}>
                  <span style={{ font: "600 26px/1 var(--fonte-urbanist)", color: "#CCAA66" }}>
                    41
                  </span>
                  <span style={{ font: "400 12px var(--fonte-mono)", color: "#D9D5CC" }}>
                    MIN
                  </span>
                </span>
              </div>
              <a href="#oferta" style={{ height: "44px", display: "flex", alignItems: "center", padding: "0 20px", borderRadius: "0", background: "#CCAA66", color: "#201F1D", font: "600 12px var(--fonte-corpo)", letterSpacing: ".16em", textTransform: "uppercase", textDecoration: "none", whiteSpace: "nowrap" }} className="dc-mais-que-um-click-2">
                garantir com 50%
              </a>
            </div>
          </>
        ) : null}
        <section data-screen-label="01 Hero" data-hero="1" style={{ position: "relative", display: "grid", minHeight: "clamp(min(78svh,680px),(760px - 100cqw) * 999,min(100svh,860px))", overflow: "hidden", background: "#201F1D" }}>
          <Image src="/m/assets/mqc/hero.jpg" alt="Débora Gabrich com a câmera" style={{ gridArea: "1/1", position: "absolute", inset: "0", width: "100%", height: "100%", objectFit: "cover", objectPosition: "68% 40%", display: "block" }} width={986} height={798} sizes="(max-width: 768px) 100vw, 50vw" priority />
          <div style={{ gridArea: "1/1", position: "absolute", inset: "0", background: "linear-gradient(0deg,#201F1D 0%,rgba(32,31,29,.82) 22%,rgba(32,31,29,.4) 44%,rgba(32,31,29,0) 64%),linear-gradient(180deg,rgba(32,31,29,.75) 0%,rgba(32,31,29,0) 24%),linear-gradient(90deg,#201F1D 0%,rgba(32,31,29,.85) 24%,rgba(32,31,29,.4) 46%,rgba(32,31,29,0) 62%)" }} />
          <div style={{ gridArea: "1/1", position: "relative", display: "flex", flexDirection: "column", justifyContent: "space-between", gap: "24px", padding: "clamp(20px,3.5cqw,40px) clamp(20px,5.5cqw,80px) clamp(24px,4.5cqw,56px)" }}>
            <span />
            <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "clamp(20px,2.4cqw,28px)", maxWidth: "720px" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: "clamp(14px,1.8cqw,20px)" }}>
                {v.isBF ? (
                  <>
                    <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
                      <span style={{ font: "700 12px var(--fonte-mono)", letterSpacing: ".08em", padding: "5px 9px", background: "#CCAA66", color: "#201F1D" }}>
                        BLACK FRIDAY
                      </span>
                      <span style={{ font: "700 12px var(--fonte-mono)", letterSpacing: ".08em", padding: "5px 9px", boxShadow: "inset 0 0 0 1px #CCAA66", color: "#CCAA66" }}>
                        {v.tagB}
                      </span>
                    </div>
                  </>
                ) : null}
                <div style={{ font: "400 12px var(--fonte-mono)", letterSpacing: ".2em", color: "#F5C242" }}>
                  CURSO ONLINE · FOTOGRAFIA DE GASTRONOMIA E PRODUTOS
                </div>
                <h1 style={{ margin: "0", font: "300 clamp(40px,6.8cqw,88px)/1.04 var(--fonte-montserrat)", letterSpacing: "-.04em", textWrap: "balance" }}>
                  do 
                  <strong style={{ fontWeight: "700" }}>
                    briefing
                  </strong>
                   à foto final
                </h1>
                <p style={{ margin: "0", maxWidth: "520px", font: "400 16px/1.6 var(--fonte-corpo)", color: "#F6F3EC", textWrap: "pretty" }}>
                  Tudo o que você precisa aprender sobre as técnicas e os 
                  <strong style={{ fontWeight: "700" }}>
                    processos criativos
                  </strong>
                   para trabalhar na fotografia de gastronomia e produtos.
                </p>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "12px", alignItems: "flex-start" }}>
                <a href="#oferta" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", gap: "16px", height: "64px", maxWidth: "100%", boxSizing: "border-box", padding: "0 clamp(20px,2.4cqw,30px)", borderRadius: "0", background: "#F5C242", color: "#201F1D", font: "600 clamp(12px,1.2cqw,14px) var(--fonte-corpo)", letterSpacing: ".14em", textTransform: "uppercase", textDecoration: "none", whiteSpace: "nowrap" }} className="dc-mais-que-um-click-3">
                  {v.cta}
                </a>
                <span style={{ font: "400 12px var(--fonte-mono)", letterSpacing: ".14em", color: "#D9D5CC", paddingLeft: "30px" }}>
                  {v.heroPreco}
                </span>
              </div>
            </div>
          </div>
        </section>
        <section id="aprender" data-screen-label="03 O que você vai aprender" style={{ position: "relative", zIndex: "1", color: "#F6F3EC", padding: "clamp(48px,(100cqw - 760px) * 999,64px) clamp(20px,5.5cqw,80px)" }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "clamp(28px,4cqw,48px)" }}>
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "flex-end", gap: "20px 40px" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                <div style={{ font: "400 12px var(--fonte-mono)", letterSpacing: ".2em", color: "#F5C242" }}>
                  O QUE VOCÊ VAI APRENDER
                </div>
                <h2 style={{ margin: "0", font: "300 clamp(32px,3.6cqw,48px)/1.06 var(--fonte-montserrat)", letterSpacing: "-.03em", textWrap: "balance" }}>
                  os 
                  <strong style={{ fontWeight: "700" }}>
                    módulos
                  </strong>
                   do curso
                </h2>
              </div>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,max(300px,calc((100% - 2px) / 3))),1fr))", gap: "1px", background: "#3A3733", boxShadow: "0 1px 0 #3A3733,0 -1px 0 #3A3733" }}>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "clamp(14px,1.8cqw,20px)", alignContent: "start", padding: "clamp(18px,2.2cqw,28px) clamp(0px,(100cqw - 760px) * 999,28px)", background: "#201F1D" }}>
                <div style={{ flex: "1 0 100%", display: "flex", justifyContent: "space-between", gap: "12px", alignItems: "baseline", font: "400 12px/1 var(--fonte-mono)", letterSpacing: ".14em", color: "#D9D5CC" }}>
                  <span style={{ color: "#F5C242" }}>
                    MÓDULO 02
                  </span>
                  <span>
                    BRIEFING
                  </span>
                </div>
                <div style={{ flex: "0 0 clamp(104px,(100cqw - 760px) * 999,100%)", position: "relative", aspectRatio: "3/2", overflow: "hidden", background: "#3A3733" }}>
                  <Image src="/m/assets/mqc/m02.jpg" alt="Briefing" style={{ position: "absolute", inset: "0", width: "100%", height: "100%", objectFit: "cover", objectPosition: "50% 40%", display: "block" }} width={224} height={334} sizes="(max-width: 768px) 100vw, 50vw" />
                </div>
                <p style={{ flex: "1 1 160px", margin: "0", font: "400 16px/1.5 var(--fonte-corpo)", color: "#F6F3EC", textWrap: "pretty" }}>
                  Briefing
                </p>
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "clamp(14px,1.8cqw,20px)", alignContent: "start", padding: "clamp(18px,2.2cqw,28px) clamp(0px,(100cqw - 760px) * 999,28px)", background: "#201F1D" }}>
                <div style={{ flex: "1 0 100%", display: "flex", justifyContent: "space-between", gap: "12px", alignItems: "baseline", font: "400 12px/1 var(--fonte-mono)", letterSpacing: ".14em", color: "#D9D5CC" }}>
                  <span style={{ color: "#F5C242" }}>
                    MÓDULO 03
                  </span>
                  <span>
                    O MERCADO
                  </span>
                </div>
                <div style={{ flex: "0 0 clamp(104px,(100cqw - 760px) * 999,100%)", position: "relative", aspectRatio: "3/2", overflow: "hidden", background: "#3A3733" }}>
                  <Image src="/m/assets/mqc/m03.jpg" alt="O mercado" style={{ position: "absolute", inset: "0", width: "100%", height: "100%", objectFit: "cover", objectPosition: "50% 40%", display: "block" }} width={397} height={334} sizes="(max-width: 768px) 100vw, 50vw" />
                </div>
                <p style={{ flex: "1 1 160px", margin: "0", font: "400 16px/1.5 var(--fonte-corpo)", color: "#F6F3EC", textWrap: "pretty" }}>
                  O mercado
                </p>
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "clamp(14px,1.8cqw,20px)", alignContent: "start", padding: "clamp(18px,2.2cqw,28px) clamp(0px,(100cqw - 760px) * 999,28px)", background: "#201F1D" }}>
                <div style={{ flex: "1 0 100%", display: "flex", justifyContent: "space-between", gap: "12px", alignItems: "baseline", font: "400 12px/1 var(--fonte-mono)", letterSpacing: ".14em", color: "#D9D5CC" }}>
                  <span style={{ color: "#F5C242" }}>
                    MÓDULO 04
                  </span>
                  <span>
                    PLANEJAMENTO
                  </span>
                </div>
                <div style={{ flex: "0 0 clamp(104px,(100cqw - 760px) * 999,100%)", position: "relative", aspectRatio: "3/2", overflow: "hidden", background: "#3A3733" }}>
                  <Image src="/m/assets/mqc/m04.jpg" alt="Planejamento criativo" style={{ position: "absolute", inset: "0", width: "100%", height: "100%", objectFit: "cover", objectPosition: "50% 40%", display: "block" }} width={397} height={334} sizes="(max-width: 768px) 100vw, 50vw" />
                </div>
                <p style={{ flex: "1 1 160px", margin: "0", font: "400 16px/1.5 var(--fonte-corpo)", color: "#F6F3EC", textWrap: "pretty" }}>
                  Planejamento criativo
                </p>
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "clamp(14px,1.8cqw,20px)", alignContent: "start", padding: "clamp(18px,2.2cqw,28px) clamp(0px,(100cqw - 760px) * 999,28px)", background: "#201F1D" }}>
                <div style={{ flex: "1 0 100%", display: "flex", justifyContent: "space-between", gap: "12px", alignItems: "baseline", font: "400 12px/1 var(--fonte-mono)", letterSpacing: ".14em", color: "#D9D5CC" }}>
                  <span style={{ color: "#F5C242" }}>
                    MÓDULO 04
                  </span>
                  <span>
                    PALETA
                  </span>
                </div>
                <div style={{ flex: "0 0 clamp(104px,(100cqw - 760px) * 999,100%)", position: "relative", aspectRatio: "3/2", overflow: "hidden", background: "#3A3733" }}>
                  <Image src="/m/assets/mqc/m04b.jpg" alt="Paleta de cores" style={{ position: "absolute", inset: "0", width: "100%", height: "100%", objectFit: "cover", objectPosition: "50% 40%", display: "block" }} width={397} height={334} sizes="(max-width: 768px) 100vw, 50vw" />
                </div>
                <p style={{ flex: "1 1 160px", margin: "0", font: "400 16px/1.5 var(--fonte-corpo)", color: "#F6F3EC", textWrap: "pretty" }}>
                  Paleta de cores
                </p>
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "clamp(14px,1.8cqw,20px)", alignContent: "start", padding: "clamp(18px,2.2cqw,28px) clamp(0px,(100cqw - 760px) * 999,28px)", background: "#201F1D" }}>
                <div style={{ flex: "1 0 100%", display: "flex", justifyContent: "space-between", gap: "12px", alignItems: "baseline", font: "400 12px/1 var(--fonte-mono)", letterSpacing: ".14em", color: "#D9D5CC" }}>
                  <span style={{ color: "#F5C242" }}>
                    MÓDULO 05
                  </span>
                  <span>
                    COMPOSIÇÃO
                  </span>
                </div>
                <div style={{ flex: "0 0 clamp(104px,(100cqw - 760px) * 999,100%)", position: "relative", aspectRatio: "3/2", overflow: "hidden", background: "#3A3733" }}>
                  <Image src="/m/assets/mqc/m05.jpg" alt="Composição de cena" style={{ position: "absolute", inset: "0", width: "100%", height: "100%", objectFit: "cover", objectPosition: "50% 40%", display: "block" }} width={397} height={334} sizes="(max-width: 768px) 100vw, 50vw" />
                </div>
                <p style={{ flex: "1 1 160px", margin: "0", font: "400 16px/1.5 var(--fonte-corpo)", color: "#F6F3EC", textWrap: "pretty" }}>
                  Composição de cena
                </p>
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "clamp(14px,1.8cqw,20px)", alignContent: "start", padding: "clamp(18px,2.2cqw,28px) clamp(0px,(100cqw - 760px) * 999,28px)", background: "#201F1D" }}>
                <div style={{ flex: "1 0 100%", display: "flex", justifyContent: "space-between", gap: "12px", alignItems: "baseline", font: "400 12px/1 var(--fonte-mono)", letterSpacing: ".14em", color: "#D9D5CC" }}>
                  <span style={{ color: "#F5C242" }}>
                    MÓDULO
                  </span>
                  <span>
                    APLICAÇÃO
                  </span>
                </div>
                <div style={{ flex: "0 0 clamp(104px,(100cqw - 760px) * 999,100%)", position: "relative", aspectRatio: "3/2", overflow: "hidden", background: "#3A3733" }}>
                  <Image src="/m/assets/mqc/m06.jpg" alt="Aplicação técnica" style={{ position: "absolute", inset: "0", width: "100%", height: "100%", objectFit: "cover", objectPosition: "50% 40%", display: "block" }} width={223} height={334} sizes="(max-width: 768px) 100vw, 50vw" />
                </div>
                <p style={{ flex: "1 1 160px", margin: "0", font: "400 16px/1.5 var(--fonte-corpo)", color: "#F6F3EC", textWrap: "pretty" }}>
                  Aplicação técnica
                </p>
              </div>
            </div>
          </div>
        </section>
        <div aria-hidden="true" style={{ position: "relative", height: "0", zIndex: "0", pointerEvents: "none" }}>
          <div style={{ position: "absolute", top: "clamp(-360px,-30cqw,-200px)", right: "clamp(-360px,-28cqw,-160px)", width: "clamp(420px,60cqw,900px)", height: "clamp(400px,50cqw,720px)", background: "radial-gradient(closest-side,rgba(245,194,66,.065),rgba(245,194,66,.025) 55%,rgba(245,194,66,0) 100%)" }} />
        </div>
        <section data-screen-label="04 Vídeo" style={{ position: "relative", zIndex: "1", color: "#F6F3EC", padding: "clamp(48px,(100cqw - 760px) * 999,64px) clamp(20px,5.5cqw,80px)" }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "clamp(24px,3cqw,36px)" }}>
            <h2 style={{ margin: "0", font: "300 clamp(32px,3.6cqw,48px)/1.06 var(--fonte-montserrat)", letterSpacing: "-.03em", textWrap: "balance" }}>
              Aprenda a criar fotos que são mais do que fotos bonitas, são fotos que 
              <strong style={{ fontWeight: "700" }}>
                vendem.
              </strong>
            </h2>
            <DepoimentosPagina set="mqcvideo" />
          </div>
        </section>
        <section id="resultados" data-screen-label="05 Antes e depois" style={{ position: "relative", zIndex: "1", color: "#F6F3EC", padding: "clamp(48px,(100cqw - 760px) * 999,64px) clamp(20px,5.5cqw,80px) 0" }}>
          <div style={{ maxHeight: "clamp(0px,(100cqw - 760px) * 999,4000px)", overflow: "hidden" }}>
            <div style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "clamp(32px,4cqw,48px)" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: "22px", maxWidth: "640px" }}>
                <div style={{ font: "400 11px var(--fonte-mono)", letterSpacing: ".2em", color: "#F5C242" }}>
                  RESULTADOS DOS MEUS ALUNOS
                </div>
                <h2 style={{ margin: "0", font: "300 clamp(32px,3.6cqw,48px)/1.06 var(--fonte-montserrat)", letterSpacing: "-.03em" }}>
                  antes e 
                  <strong style={{ fontWeight: "700" }}>
                    depois
                  </strong>
                </h2>
                <p style={{ margin: "0", maxWidth: "420px", fontSize: "16px", textWrap: "pretty" }}>
                  Fotos dos meus alunos antes e depois dos cursos. Arraste a linha sobre a foto para comparar.
                </p>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(4,minmax(0,1fr))", gap: "clamp(12px,1.6cqw,24px)" }}>
                {(v.tri ?? []).map((t: any, tI: number) => (
                  <Fragment key={tI}>
                    <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                      <div onPointerDown={t?.down} onPointerMove={t?.move} onPointerUp={t?.up} onPointerCancel={t?.up} style={{ position: "relative", width: "100%", aspectRatio: "2/3", overflow: "hidden", borderRadius: "16px", background: "#2A2826", cursor: "ew-resize", touchAction: "pan-y", userSelect: "none" }}>
                        <img src={t?.depois} alt="Foto depois do curso" draggable="false" style={{ position: "absolute", inset: "0", width: "100%", height: "100%", objectFit: "cover", display: "block", pointerEvents: "none" }} />
                        <img src={t?.antes} alt="Foto antes do curso" draggable="false" style={{ position: "absolute", inset: "0", width: "100%", height: "100%", objectFit: "cover", display: "block", pointerEvents: "none", clipPath: `inset(0 ${t?.clipR ?? ""}% 0 0)` }} />
                        <span style={{ position: "absolute", left: "12px", top: "12px", padding: "5px 9px", background: "#F6F3EC", color: "#201F1D", font: "400 12px var(--fonte-mono)", letterSpacing: ".14em", pointerEvents: "none" }}>
                          ANTES
                        </span>
                        <span style={{ position: "absolute", right: "12px", top: "12px", padding: "5px 9px", background: "#201F1D", color: "#F6F3EC", font: "700 12px var(--fonte-mono)", letterSpacing: ".14em", pointerEvents: "none" }}>
                          DEPOIS
                        </span>
                        <div style={{ position: "absolute", top: "0", bottom: "0", left: `${t?.pos ?? ""}%`, width: "2px", marginLeft: "-1px", background: "#F6F3EC", pointerEvents: "none" }} />
                        <div style={{ position: "absolute", top: "50%", left: `${t?.pos ?? ""}%`, width: "44px", height: "44px", margin: "-22px 0 0 -22px", borderRadius: "999px", background: "#F6F3EC", color: "#201F1D", display: "flex", alignItems: "center", justifyContent: "center", font: "400 14px/1 var(--fonte-corpo)", pointerEvents: "none" }}>
                          ←→
                        </div>
                      </div>
                      <span style={{ font: "400 12px var(--fonte-mono)", letterSpacing: ".14em", color: "#D9D5CC" }}>
                        {t?.label}
                      </span>
                    </div>
                  </Fragment>
                ))}
              </div>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <a href="#oferta" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", gap: "16px", height: "64px", maxWidth: "100%", boxSizing: "border-box", padding: "0 clamp(20px,2.4cqw,30px)", borderRadius: "0", background: "#F5C242", color: "#201F1D", font: "600 clamp(12px,1.2cqw,14px) var(--fonte-corpo)", letterSpacing: ".14em", textTransform: "uppercase", textDecoration: "none", whiteSpace: "nowrap" }} className="dc-mais-que-um-click-4">
                  {v.cta}
                </a>
              </div>
            </div>
          </div>
          <div style={{ maxHeight: "clamp(0px,(760px - 100cqw) * 999,4000px)", overflow: "hidden" }}>
            <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,360px),1fr))", gap: "clamp(28px,5cqw,80px)", alignItems: "center" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: "22px" }}>
                <div style={{ font: "400 11px var(--fonte-mono)", letterSpacing: ".2em", color: "#F5C242" }}>
                  RESULTADOS DOS MEUS ALUNOS
                </div>
                <h2 style={{ margin: "0", font: "300 clamp(32px,3.6cqw,48px)/1.06 var(--fonte-montserrat)", letterSpacing: "-.03em" }}>
                  antes e 
                  <strong style={{ fontWeight: "700" }}>
                    depois
                  </strong>
                </h2>
                <p style={{ margin: "0", maxWidth: "420px", fontSize: "16px", textWrap: "pretty" }}>
                  Fotos dos meus alunos antes e depois dos cursos. Arraste a linha sobre a foto para comparar.
                </p>
                <div style={{ display: "flex", alignItems: "center", gap: "16px", paddingTop: "18px", boxShadow: "inset 0 1px 0 #3A3733", maxWidth: "420px" }}>
                  <button onClick={v.prev} aria-label="Par anterior" style={{ width: "48px", height: "48px", border: "0", borderRadius: "999px", cursor: "pointer", background: "transparent", boxShadow: "inset 0 0 0 1px #F6F3EC", color: "#F6F3EC", font: "400 20px/1 var(--fonte-corpo)" }} className="dc-mais-que-um-click-5">
                    ←
                  </button>
                  <span style={{ font: "400 12px var(--fonte-mono)", letterSpacing: ".14em", minWidth: "120px", textAlign: "center" }}>
                    {v.parLabel}
                  </span>
                  <button onClick={v.next} aria-label="Próximo par" style={{ width: "48px", height: "48px", border: "0", borderRadius: "999px", cursor: "pointer", background: "transparent", boxShadow: "inset 0 0 0 1px #F6F3EC", color: "#F6F3EC", font: "400 20px/1 var(--fonte-corpo)" }} className="dc-mais-que-um-click-6">
                    →
                  </button>
                </div>
              </div>
              <div ref={v.sliderRef} onPointerDown={v.sDown} onPointerMove={v.sMove} onPointerUp={v.sUp} onPointerCancel={v.sUp} style={{ position: "relative", width: "100%", maxWidth: "440px", aspectRatio: "2/3", justifySelf: "center", overflow: "hidden", borderRadius: "16px", background: "#2A2826", cursor: "ew-resize", touchAction: "pan-y", userSelect: "none" }}>
                <img src={v.par?.depois} alt="Foto depois do curso" draggable="false" style={{ position: "absolute", inset: "0", width: "100%", height: "100%", objectFit: "cover", display: "block", pointerEvents: "none" }} />
                <img src={v.par?.antes} alt="Foto antes do curso" draggable="false" style={{ position: "absolute", inset: "0", width: "100%", height: "100%", objectFit: "cover", display: "block", pointerEvents: "none", clipPath: `inset(0 ${v.clipR ?? ""}% 0 0)` }} />
                <span style={{ position: "absolute", left: "14px", top: "14px", padding: "5px 9px", background: "#F6F3EC", color: "#201F1D", font: "400 12px var(--fonte-mono)", letterSpacing: ".14em", pointerEvents: "none" }}>
                  ANTES
                </span>
                <span style={{ position: "absolute", right: "14px", top: "14px", padding: "5px 9px", background: "#201F1D", color: "#F6F3EC", font: "700 12px var(--fonte-mono)", letterSpacing: ".14em", pointerEvents: "none" }}>
                  DEPOIS
                </span>
                <div style={{ position: "absolute", top: "0", bottom: "0", left: `${v.pos ?? ""}%`, width: "2px", marginLeft: "-1px", background: "#F6F3EC", pointerEvents: "none" }} />
                <div style={{ position: "absolute", top: "50%", left: `${v.pos ?? ""}%`, width: "52px", height: "52px", margin: "-26px 0 0 -26px", borderRadius: "999px", background: "#F6F3EC", color: "#201F1D", display: "flex", alignItems: "center", justifyContent: "center", gap: "6px", font: "400 15px/1 var(--fonte-corpo)", pointerEvents: "none" }}>
                  ←→
                </div>
              </div>
              <span style={{ justifySelf: "center", width: "100%", maxWidth: "440px", font: "400 12px var(--fonte-mono)", letterSpacing: ".14em", color: "#D9D5CC", marginTop: "calc(clamp(28px,5cqw,80px) * -1 + 12px)" }}>
                {v.legenda}
              </span>
              <div style={{ gridColumn: "1/-1", display: "flex", justifyContent: "center" }}>
                <a href="#oferta" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", gap: "16px", height: "64px", maxWidth: "100%", boxSizing: "border-box", padding: "0 clamp(20px,2.4cqw,30px)", borderRadius: "0", background: "#F5C242", color: "#201F1D", font: "600 clamp(12px,1.2cqw,14px) var(--fonte-corpo)", letterSpacing: ".14em", textTransform: "uppercase", textDecoration: "none", whiteSpace: "nowrap" }} className="dc-mais-que-um-click-7">
                  {v.cta}
                </a>
              </div>
            </div>
          </div>
        </section>
        <section data-screen-label="09 Depoimentos" style={{ position: "relative", zIndex: "1", color: "#F6F3EC", padding: "clamp(48px,6cqw,88px) clamp(20px,5.5cqw,80px)" }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "clamp(28px,4cqw,48px)" }}>
            <h2 style={{ margin: "0", font: "300 clamp(32px,3.6cqw,48px)/1.06 var(--fonte-montserrat)", letterSpacing: "-.03em", textWrap: "balance" }}>
              o que os meus alunos 
              <strong style={{ fontWeight: "700" }}>
                dizem
              </strong>
            </h2>
            <DepoimentosPagina set="mqc" />
            <div style={{ display: "flex" }}>
              <a href="#oferta" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", height: "64px", maxWidth: "100%", boxSizing: "border-box", padding: "0 clamp(20px,2.4cqw,30px)", background: "#F5C242", color: "#201F1D", font: "600 clamp(12px,1.2cqw,14px) var(--fonte-corpo)", letterSpacing: ".14em", textTransform: "uppercase", textDecoration: "none", whiteSpace: "nowrap" }} className="dc-mais-que-um-click-8">
                {v.ctaInscrever}
              </a>
            </div>
          </div>
        </section>
        <div aria-hidden="true" style={{ position: "relative", height: "0", zIndex: "0", pointerEvents: "none" }}>
          <div style={{ position: "absolute", top: "clamp(-360px,-30cqw,-200px)", right: "clamp(-360px,-28cqw,-160px)", width: "clamp(420px,60cqw,900px)", height: "clamp(400px,50cqw,720px)", background: "radial-gradient(closest-side,rgba(245,194,66,.065),rgba(245,194,66,.025) 55%,rgba(245,194,66,0) 100%)" }} />
        </div>
        <section data-screen-label="06 Pra você que" style={{ position: "relative", zIndex: "1", color: "#F6F3EC", display: "flex", flexWrap: "wrap", minHeight: "clamp(0px,(100cqw - 760px) * 999,680px)", overflow: "hidden" }}>
          <div style={{ position: "relative", overflow: "hidden", flex: "0 0 clamp(44%,(760px - 100cqw) * 999,100%)", minHeight: "300px" }}>
            <Image src="/m/assets/lnp/f/camera-frente.jpg" alt="Débora fotografando de frente para a câmera" style={{ position: "absolute", inset: "0", width: "100%", height: "100%", objectFit: "cover", objectPosition: "50% 45%", display: "block", filter: "grayscale(.15) brightness(.8) contrast(1.05)", WebkitMaskImage: "linear-gradient(90deg,#000 calc(100% - clamp(0%,(100cqw - 760px) * 999,52%)),transparent 100%),linear-gradient(180deg,#000 calc(100% - clamp(26%,(760px - 100cqw) * 999,55%)),transparent 100%)", maskImage: "linear-gradient(90deg,#000 calc(100% - clamp(0%,(100cqw - 760px) * 999,52%)),transparent 100%),linear-gradient(180deg,#000 calc(100% - clamp(26%,(760px - 100cqw) * 999,55%)),transparent 100%)", WebkitMaskComposite: "source-in", maskComposite: "intersect" }} width={1080} height={1920} sizes="(max-width: 768px) 100vw, 50vw" />
          </div>
          <div style={{ flex: "1 1 320px", minWidth: "0", position: "relative", boxSizing: "border-box", maxWidth: "780px", marginTop: "clamp(-48px,(760px - 100cqw) * -999,0px)", padding: "clamp(0px,(100cqw - 760px) * 999,64px) clamp(20px,(100cqw - 760px) * 999,64px) clamp(48px,(100cqw - 760px) * 999,64px) clamp(20px,(100cqw - 760px) * 999,24px)", display: "flex", flexDirection: "column", justifyContent: "center", gap: "24px" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              <span style={{ font: "400 12px var(--fonte-mono)", letterSpacing: ".2em", color: "#F5C242" }}>
                PRA QUEM É
              </span>
              <h2 style={{ margin: "0", font: "300 clamp(32px,3.6cqw,48px)/1.06 var(--fonte-montserrat)", letterSpacing: "-.03em", textWrap: "balance" }}>
                o Mais que um Click é pra 
                <strong style={{ fontWeight: "700" }}>
                  você
                </strong>
                 que:
              </h2>
            </div>
            <div style={{ display: "flex", flexDirection: "column", boxShadow: "inset 0 1px 0 #3A3733" }}>
              <div style={{ display: "flex", gap: "12px", alignItems: "baseline", padding: "16px 0", boxShadow: "inset 0 -1px 0 #3A3733" }}>
                <span style={{ flex: "none", width: "7px", height: "7px", borderRadius: "50%", background: "#F5C242", transform: "translateY(-2px)" }} />
                <h3 style={{ margin: "0", font: "600 clamp(17px,1.5cqw,19px)/1.4 var(--fonte-corpo)", color: "#F6F3EC", textWrap: "pretty" }}>
                  Sente insegurança sobre o resultado final das suas fotos.
                </h3>
              </div>
              <div style={{ display: "flex", gap: "12px", alignItems: "baseline", padding: "16px 0", boxShadow: "inset 0 -1px 0 #3A3733" }}>
                <span style={{ flex: "none", width: "7px", height: "7px", borderRadius: "50%", background: "#F5C242", transform: "translateY(-2px)" }} />
                <h3 style={{ margin: "0", font: "600 clamp(17px,1.5cqw,19px)/1.4 var(--fonte-corpo)", color: "#F6F3EC", textWrap: "pretty" }}>
                  Quer criar trabalhos mais profissionais, aprender a precificar o seu trabalho, se estruturar e se organizar como empresa.
                </h3>
              </div>
              <div style={{ display: "flex", gap: "12px", alignItems: "baseline", padding: "16px 0", boxShadow: "inset 0 -1px 0 #3A3733" }}>
                <span style={{ flex: "none", width: "7px", height: "7px", borderRadius: "50%", background: "#F5C242", transform: "translateY(-2px)" }} />
                <h3 style={{ margin: "0", font: "600 clamp(17px,1.5cqw,19px)/1.4 var(--fonte-corpo)", color: "#F6F3EC", textWrap: "pretty" }}>
                  Está começando e quer desenvolver um olhar autoral e criativo na fotografia.
                </h3>
              </div>
              <div style={{ display: "flex", gap: "12px", alignItems: "baseline", padding: "16px 0", boxShadow: "inset 0 -1px 0 #3A3733" }}>
                <span style={{ flex: "none", width: "7px", height: "7px", borderRadius: "50%", background: "#F5C242", transform: "translateY(-2px)" }} />
                <h3 style={{ margin: "0", font: "600 clamp(17px,1.5cqw,19px)/1.4 var(--fonte-corpo)", color: "#F6F3EC", textWrap: "pretty" }}>
                  Já fotografa, mas precisa criar briefings e processos criativos mais estruturados.
                </h3>
              </div>
              <div style={{ display: "flex", gap: "12px", alignItems: "baseline", padding: "16px 0", boxShadow: "inset 0 -1px 0 #3A3733" }}>
                <span style={{ flex: "none", width: "7px", height: "7px", borderRadius: "50%", background: "#F5C242", transform: "translateY(-2px)" }} />
                <h3 style={{ margin: "0", font: "600 clamp(17px,1.5cqw,19px)/1.4 var(--fonte-corpo)", color: "#F6F3EC", textWrap: "pretty" }}>
                  Sente falta de ter uma identidade visual nas próprias fotos.
                </h3>
              </div>
              <div style={{ display: "flex", gap: "12px", alignItems: "baseline", padding: "16px 0", boxShadow: "inset 0 -1px 0 #3A3733" }}>
                <span style={{ flex: "none", width: "7px", height: "7px", borderRadius: "50%", background: "#F5C242", transform: "translateY(-2px)" }} />
                <h3 style={{ margin: "0", font: "600 clamp(17px,1.5cqw,19px)/1.4 var(--fonte-corpo)", color: "#F6F3EC", textWrap: "pretty" }}>
                  Quer trabalhar com fotografia de gastronomia e produtos profissionalmente.
                </h3>
              </div>
            </div>
            <div style={{ display: "flex" }}>
              <a href="#oferta" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", height: "64px", maxWidth: "100%", boxSizing: "border-box", padding: "0 clamp(20px,2.4cqw,30px)", background: "#F5C242", color: "#201F1D", font: "600 clamp(12px,1.2cqw,14px) var(--fonte-corpo)", letterSpacing: ".14em", textTransform: "uppercase", textDecoration: "none", whiteSpace: "nowrap" }} className="dc-mais-que-um-click-9">
                {v.ctaMinha}
              </a>
            </div>
          </div>
        </section>
        <section id="modulos" data-screen-label="08 Módulos" style={{ position: "relative", zIndex: "1", color: "#F6F3EC", padding: "clamp(48px,(100cqw - 760px) * 999,64px) clamp(20px,5.5cqw,80px)" }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "32px" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              <div style={{ font: "400 12px var(--fonte-mono)", letterSpacing: ".2em", color: "#D9D5CC" }}>
                CONTEÚDO DO CURSO · 14 MÓDULOS · 67 CONTEÚDOS
              </div>
              <h2 style={{ margin: "0", font: "300 clamp(32px,3.6cqw,48px)/1.06 var(--fonte-montserrat)", letterSpacing: "-.03em", textWrap: "balance" }}>
                módulos e 
                <strong style={{ fontWeight: "700" }}>
                  conteúdos
                </strong>
              </h2>
            </div>
            <div ref={v.modRef} style={{ display: "flex", flexDirection: "column" }}>
              {v.modLargo ? (
                <>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "clamp(28px,4cqw,56px)", alignItems: "flex-start" }}>
                    <div style={{ flex: "1 1 380px", display: "flex", flexDirection: "column", minWidth: "0" }}>
                      {(v.modulos ?? []).map((m: any, mI: number) => (
                        <Fragment key={mI}>
                          <div style={{ boxShadow: "inset 0 1px 0 #3A3733" }}>
                            <button onClick={m?.set} onMouseEnter={m?.set} style={{ all: "unset", boxSizing: "border-box", cursor: "pointer", width: "100%", display: "grid", gridTemplateColumns: "44px minmax(0,1fr) auto", gap: "14px", alignItems: "center", minHeight: "56px", padding: "10px 0" }}>
                              <span style={{ font: "400 12px var(--fonte-mono)", letterSpacing: ".12em", color: m?.numCorD }}>
                                {m?.n}
                              </span>
                              <span style={{ font: `${m?.peso ?? ""} clamp(17px,1.6cqw,20px)/1.3 var(--fonte-montserrat)`, color: "#F6F3EC" }}>
                                {m?.titulo}
                              </span>
                              <span style={{ font: "400 12px var(--fonte-mono)", letterSpacing: ".12em", color: "#D9D5CC", whiteSpace: "nowrap" }}>
                                {m?.qtd}
                              </span>
                            </button>
                          </div>
                        </Fragment>
                      ))}
                    </div>
                    <div style={{ flex: "1 1 380px", minWidth: "0", position: "sticky", top: "24px" }}>
                      <div style={{ display: "flex", flexDirection: "column", gap: "18px", minWidth: "0", background: "#3A3733", color: "#F6F3EC", padding: "clamp(18px,2.4cqw,28px)", boxSizing: "border-box", borderRadius: "16px", overflow: "hidden" }}>
                        <div style={{ position: "relative", overflow: "hidden", aspectRatio: "16/9" }}>
                          {(v.selSlot ?? []).map((s: any, sI: number) => (
                            <Fragment key={sI}>
                              <ImagemReservada rotulo={s?.ph} proporcao="auto" />
                            </Fragment>
                          ))}
                        </div>
                        <div style={{ display: "flex", justifyContent: "space-between", gap: "12px", alignItems: "baseline" }}>
                          <span style={{ font: "400 12px var(--fonte-mono)", letterSpacing: ".14em", color: "#F5C242" }}>
                            {v.sel?.rotulo}
                          </span>
                          <span style={{ font: "400 12px var(--fonte-mono)", letterSpacing: ".12em", color: "#D9D5CC" }}>
                            {v.sel?.qtd}
                          </span>
                        </div>
                        <div style={{ display: "flex", flexDirection: "column" }}>
                          {(v.sel?.aulas ?? []).map((a: any, aI: number) => (
                            <Fragment key={aI}>
                              {a?.temG ? (
                                <>
                                  <div style={{ padding: "16px 0 8px", font: "400 12px var(--fonte-mono)", letterSpacing: ".14em", color: "#F5C242" }}>
                                    {a?.g}
                                  </div>
                                </>
                              ) : null}
                              <div style={{ display: "grid", gridTemplateColumns: "36px minmax(0,1fr)", gap: "10px", padding: "12px 0", boxShadow: "inset 0 1px 0 #8C857A" }}>
                                <span style={{ font: "400 12px/2 var(--fonte-mono)", color: "#D9D5CC" }}>
                                  {a?.n}
                                </span>
                                <span style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                                  <span style={{ font: "700 15px/1.45 var(--fonte-corpo)" }}>
                                    {a?.t}
                                  </span>
                                  <span style={{ font: "300 14px/1.6 var(--fonte-corpo)", color: "#D9D5CC", textWrap: "pretty" }}>
                                    {a?.d}
                                  </span>
                                </span>
                              </div>
                            </Fragment>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              ) : null}
              {v.modEstreito ? (
                <>
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    {(v.modulos ?? []).map((m: any, mI: number) => (
                      <Fragment key={mI}>
                        <div style={{ boxShadow: "inset 0 1px 0 #3A3733" }}>
                          <button onClick={m?.toggle} style={{ all: "unset", boxSizing: "border-box", cursor: "pointer", width: "100%", display: "grid", gridTemplateColumns: "32px minmax(0,1fr) 32px", gap: "12px", alignItems: "center", minHeight: "64px", padding: "12px 0" }}>
                            <span style={{ font: "400 12px var(--fonte-mono)", letterSpacing: ".12em", color: m?.numCorD }}>
                              {m?.n}
                            </span>
                            <span style={{ display: "flex", flexDirection: "column", gap: "4px", minWidth: "0" }}>
                              <span style={{ font: `${m?.peso ?? ""} 18px/1.3 var(--fonte-montserrat)`, color: "#F6F3EC" }}>
                                {m?.titulo}
                              </span>
                              <span style={{ font: "400 11px var(--fonte-mono)", letterSpacing: ".12em", color: "#D9D5CC" }}>
                                {m?.qtd}
                              </span>
                            </span>
                            <span style={{ width: "32px", height: "32px", borderRadius: "999px", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "inset 0 0 0 1px #3A3733", color: "#F5C242", font: "400 16px var(--fonte-corpo)" }}>
                              {m?.sinal}
                            </span>
                          </button>
                          {m?.aberto ? (
                            <>
                              <div style={{ marginBottom: "16px" }}>
                                <div style={{ display: "flex", flexDirection: "column", gap: "18px", minWidth: "0", background: "#3A3733", color: "#F6F3EC", padding: "clamp(18px,2.4cqw,28px)", boxSizing: "border-box", borderRadius: "16px", overflow: "hidden" }}>
                                  <div style={{ position: "relative", overflow: "hidden", aspectRatio: "16/9" }}>
                                    {(m?.slots ?? []).map((s: any, sI: number) => (
                                      <Fragment key={sI}>
                                        <ImagemReservada rotulo={s?.ph} proporcao="auto" />
                                      </Fragment>
                                    ))}
                                  </div>
                                  <div style={{ display: "flex", justifyContent: "space-between", gap: "12px", alignItems: "baseline" }}>
                                    <span style={{ font: "400 12px var(--fonte-mono)", letterSpacing: ".14em", color: "#F5C242" }}>
                                      {m?.rotulo}
                                    </span>
                                    <span style={{ font: "400 12px var(--fonte-mono)", letterSpacing: ".12em", color: "#D9D5CC" }}>
                                      {m?.qtd}
                                    </span>
                                  </div>
                                  <div style={{ display: "flex", flexDirection: "column" }}>
                                    {(m?.aulas ?? []).map((a: any, aI: number) => (
                                      <Fragment key={aI}>
                                        {a?.temG ? (
                                          <>
                                            <div style={{ padding: "16px 0 8px", font: "400 12px var(--fonte-mono)", letterSpacing: ".14em", color: "#F5C242" }}>
                                              {a?.g}
                                            </div>
                                          </>
                                        ) : null}
                                        <div style={{ display: "grid", gridTemplateColumns: "36px minmax(0,1fr)", gap: "10px", padding: "12px 0", boxShadow: "inset 0 1px 0 #8C857A" }}>
                                          <span style={{ font: "400 12px/2 var(--fonte-mono)", color: "#D9D5CC" }}>
                                            {a?.n}
                                          </span>
                                          <span style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                                            <span style={{ font: "700 15px/1.45 var(--fonte-corpo)" }}>
                                              {a?.t}
                                            </span>
                                            <span style={{ font: "300 14px/1.6 var(--fonte-corpo)", color: "#D9D5CC", textWrap: "pretty" }}>
                                              {a?.d}
                                            </span>
                                          </span>
                                        </div>
                                      </Fragment>
                                    ))}
                                  </div>
                                </div>
                              </div>
                            </>
                          ) : null}
                        </div>
                      </Fragment>
                    ))}
                  </div>
                </>
              ) : null}
            </div>
          </div>
        </section>
        <section data-screen-label="07 Bônus" style={{ position: "relative", zIndex: "1", color: "#F6F3EC", padding: "clamp(48px,6cqw,88px) clamp(20px,5.5cqw,80px)" }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "clamp(28px,4cqw,48px)" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              <div style={{ font: "400 11px var(--fonte-mono)", letterSpacing: ".2em", color: "#F5C242" }}>
                BÔNUS PARA ALUNOS
              </div>
              <h2 style={{ margin: "0", font: "300 clamp(32px,3.6cqw,48px)/1.06 var(--fonte-montserrat)", letterSpacing: "-.03em", textWrap: "balance" }}>
                o que vem 
                <strong style={{ fontWeight: "700" }}>
                  junto
                </strong>
              </h2>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,280px),1fr))", gap: "clamp(12px,1.4cqw,16px)" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                <div style={{ aspectRatio: "3/2", borderRadius: "16px", overflow: "hidden", background: "#2A2826 url(\"/m/assets/mqc/b1.jpg\") center/cover no-repeat" }} />
                <span style={{ font: "400 11px var(--fonte-mono)", letterSpacing: ".2em", color: "#F5C242" }}>
                  FOTOGRAFIA COMO NEGÓCIO
                </span>
                <h3 style={{ margin: "0", font: "300 clamp(26px,2.5cqw,30px)/1.1 var(--fonte-montserrat)", letterSpacing: "-.02em" }}>
                  módulo 
                  <strong style={{ fontWeight: "700" }}>
                    bônus
                  </strong>
                </h3>
                <p style={{ margin: "0", fontSize: "15px", lineHeight: "1.65", textWrap: "pretty" }}>
                  Pra você aprender como organizar o seu fluxo de trabalho, estruturar a sua empresa e precificar os seus trabalhos.
                </p>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                <div style={{ aspectRatio: "3/2", borderRadius: "16px", overflow: "hidden", background: "#2A2826 url(\"/m/assets/mqc/b2.jpg\") center/contain no-repeat" }} />
                <span style={{ font: "400 11px var(--fonte-mono)", letterSpacing: ".2em", color: "#F5C242" }}>
                  CRIE O SEU PORTFÓLIO
                </span>
                <h3 style={{ margin: "0", font: "300 clamp(26px,2.5cqw,30px)/1.1 var(--fonte-montserrat)", letterSpacing: "-.02em" }}>
                  exercícios 
                  <strong style={{ fontWeight: "700" }}>
                    práticos
                  </strong>
                </h3>
                <p style={{ margin: "0", fontSize: "15px", lineHeight: "1.65", textWrap: "pretty" }}>
                  Em todos os módulos você vai encontrar exercícios pra você praticar tudo que está aprendendo durante o curso! Use os exercícios para produzir fotos para o seu portfólio!
                </p>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                <div style={{ aspectRatio: "3/2", borderRadius: "16px", overflow: "hidden", background: "#2A2826 url(\"/m/assets/mqc/b3.jpg\") center/cover no-repeat" }} />
                <span style={{ font: "400 11px var(--fonte-mono)", letterSpacing: ".2em", color: "#F5C242" }}>
                  DÉBORA INDICA
                </span>
                <h3 style={{ margin: "0", font: "300 clamp(26px,2.5cqw,30px)/1.1 var(--fonte-montserrat)", letterSpacing: "-.02em" }}>
                  <strong style={{ fontWeight: "700" }}>
                    indicações
                  </strong>
                </h3>
                <p style={{ margin: "0", fontSize: "15px", lineHeight: "1.65", textWrap: "pretty" }}>
                  Uma lista de indicações de livros, sites, aplicativos e plataformas que eu uso no meu dia-a-dia para melhorar o meu fluxo de trabalho.
                </p>
              </div>
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <a href="#oferta" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", height: "64px", maxWidth: "100%", boxSizing: "border-box", padding: "0 clamp(20px,2.4cqw,30px)", background: "#F5C242", color: "#201F1D", font: "600 clamp(12px,1.2cqw,14px) var(--fonte-corpo)", letterSpacing: ".14em", textTransform: "uppercase", textDecoration: "none", whiteSpace: "nowrap" }} className="dc-mais-que-um-click-10">
                {v.cta}
              </a>
            </div>
          </div>
        </section>
        <section data-screen-label="10c Meu trabalho" style={{ color: "#F6F3EC", padding: "clamp(48px,6cqw,88px) 0", display: "flex", flexDirection: "column", gap: "clamp(20px,2.4cqw,28px)" }}>
          <div style={{ maxWidth: "1200px", width: "100%", margin: "0 auto", padding: "0 clamp(20px,5.5cqw,80px)", boxSizing: "border-box", display: "flex", flexDirection: "column", gap: "14px" }}>
            <div style={{ font: "400 11px var(--fonte-mono)", letterSpacing: ".2em", color: "#F5C242" }}>
              O MEU TRABALHO
            </div>
            <h2 style={{ margin: "0", font: "300 clamp(32px,3.6cqw,48px)/1.06 var(--fonte-montserrat)", letterSpacing: "-.03em", textWrap: "balance" }}>
              fotos para marcas e 
              <strong style={{ fontWeight: "700" }}>
                clientes
              </strong>
            </h2>
          </div>
          <div style={{ display: "flex", gap: "4px", overflowX: "auto", scrollbarWidth: "none", padding: "0 clamp(20px,5.5cqw,80px)" }}>
            <div style={{ flex: "0 0 min(220px,44cqw)", aspectRatio: "3/4", overflow: "hidden", background: "#3A3733" }}>
              <Image src="/m/assets/mqc/w1.jpg" alt="" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} width={259} height={345} sizes="(max-width: 768px) 100vw, 50vw" />
            </div>
            <div style={{ flex: "0 0 min(220px,44cqw)", aspectRatio: "3/4", overflow: "hidden", background: "#3A3733" }}>
              <Image src="/m/assets/mqc/w2.jpg" alt="" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} width={259} height={345} sizes="(max-width: 768px) 100vw, 50vw" />
            </div>
            <div style={{ flex: "0 0 min(220px,44cqw)", aspectRatio: "3/4", overflow: "hidden", background: "#3A3733" }}>
              <Image src="/m/assets/mqc/w3.jpg" alt="" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} width={259} height={345} sizes="(max-width: 768px) 100vw, 50vw" />
            </div>
            <div style={{ flex: "0 0 min(220px,44cqw)", aspectRatio: "3/4", overflow: "hidden", background: "#3A3733" }}>
              <Image src="/m/assets/mqc/w4.jpg" alt="" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} width={259} height={345} sizes="(max-width: 768px) 100vw, 50vw" />
            </div>
            <div style={{ flex: "0 0 min(220px,44cqw)", aspectRatio: "3/4", overflow: "hidden", background: "#3A3733" }}>
              <Image src="/m/assets/mqc/w5.jpg" alt="" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} width={259} height={345} sizes="(max-width: 768px) 100vw, 50vw" />
            </div>
            <div style={{ flex: "0 0 min(220px,44cqw)", aspectRatio: "3/4", overflow: "hidden", background: "#3A3733" }}>
              <Image src="/m/assets/mqc/w6.jpg" alt="" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} width={259} height={345} sizes="(max-width: 768px) 100vw, 50vw" />
            </div>
            <div style={{ flex: "0 0 min(220px,44cqw)", aspectRatio: "3/4", overflow: "hidden", background: "#3A3733" }}>
              <Image src="/m/assets/mqc/w7.jpg" alt="" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} width={259} height={345} sizes="(max-width: 768px) 100vw, 50vw" />
            </div>
          </div>
          <div style={{ display: "flex", gap: "4px", overflowX: "auto", scrollbarWidth: "none", padding: "0 clamp(20px,5.5cqw,80px)" }}>
            <div style={{ flex: "0 0 min(220px,44cqw)", aspectRatio: "3/4", overflow: "hidden", background: "#3A3733" }}>
              <Image src="/m/assets/mqc/w8.jpg" alt="" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} width={259} height={346} sizes="(max-width: 768px) 100vw, 50vw" />
            </div>
            <div style={{ flex: "0 0 min(220px,44cqw)", aspectRatio: "3/4", overflow: "hidden", background: "#3A3733" }}>
              <Image src="/m/assets/mqc/w9.jpg" alt="" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} width={259} height={346} sizes="(max-width: 768px) 100vw, 50vw" />
            </div>
            <div style={{ flex: "0 0 min(220px,44cqw)", aspectRatio: "3/4", overflow: "hidden", background: "#3A3733" }}>
              <Image src="/m/assets/mqc/w10.jpg" alt="" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} width={259} height={346} sizes="(max-width: 768px) 100vw, 50vw" />
            </div>
            <div style={{ flex: "0 0 min(220px,44cqw)", aspectRatio: "3/4", overflow: "hidden", background: "#3A3733" }}>
              <Image src="/m/assets/mqc/w11.jpg" alt="" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} width={259} height={346} sizes="(max-width: 768px) 100vw, 50vw" />
            </div>
            <div style={{ flex: "0 0 min(220px,44cqw)", aspectRatio: "3/4", overflow: "hidden", background: "#3A3733" }}>
              <Image src="/m/assets/mqc/w12.jpg" alt="" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} width={259} height={346} sizes="(max-width: 768px) 100vw, 50vw" />
            </div>
            <div style={{ flex: "0 0 min(220px,44cqw)", aspectRatio: "3/4", overflow: "hidden", background: "#3A3733" }}>
              <Image src="/m/assets/mqc/w13.jpg" alt="" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} width={259} height={346} sizes="(max-width: 768px) 100vw, 50vw" />
            </div>
            <div style={{ flex: "0 0 min(220px,44cqw)", aspectRatio: "3/4", overflow: "hidden", background: "#3A3733" }}>
              <Image src="/m/assets/mqc/w14.jpg" alt="" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} width={259} height={346} sizes="(max-width: 768px) 100vw, 50vw" />
            </div>
          </div>
        </section>
        <section data-screen-label="10 Sobre" style={{ position: "relative", zIndex: "1", color: "#F6F3EC", padding: "clamp(48px,(100cqw - 760px) * 999,64px) clamp(20px,5.5cqw,80px) clamp(40px,5cqw,64px)" }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,360px),1fr))", gap: "clamp(36px,5cqw,72px)", alignItems: "center" }}>
            <div style={{ position: "relative", overflow: "hidden", aspectRatio: "4/5", overflow: "hidden", maxWidth: "440px" }}>
              <Image src="/m/assets/mqc/retrato.jpg" alt="Débora Gabrich" style={{ position: "absolute", inset: "0", width: "100%", height: "100%", objectFit: "cover", display: "block" }} width={463} height={555} sizes="(max-width: 768px) 100vw, 50vw" />
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              <h2 style={{ margin: "0", font: "300 clamp(32px,3.6cqw,48px)/1.06 var(--fonte-montserrat)", letterSpacing: "-.03em", textWrap: "balance" }}>
                oie, eu sou a 
                <strong style={{ fontWeight: "700" }}>
                  Débora Gabrich!
                </strong>
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
                No Mais que um Click, eu te ensino todo esse processo na fotografia de gastronomia, do primeiro contato com o cliente à entrega das fotos.
              </p>
            </div>
          </div>
        </section>
        <section id="oferta" data-screen-label="11 Oferta" style={{ position: "relative", zIndex: "1", padding: "clamp(48px,(100cqw - 760px) * 999,64px) clamp(20px,5.5cqw,80px) clamp(16px,2cqw,24px)" }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "clamp(48px,6cqw,80px)" }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,360px),1fr))", gap: "clamp(40px,5cqw,72px)", alignItems: "center" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: "24px", maxWidth: "520px" }}>
                <h2 style={{ margin: "0", font: "300 clamp(32px,3.6cqw,48px)/1.06 var(--fonte-montserrat)", letterSpacing: "-.03em", textWrap: "balance" }}>
                  tudo o que você 
                  <strong style={{ fontWeight: "700" }}>
                    recebe
                  </strong>
                </h2>
                <p style={{ margin: "0", fontSize: "16px", textWrap: "pretty" }}>
                  Ao se inscrever no 
                  <strong style={{ fontWeight: "700" }}>
                    Mais que um Click
                  </strong>
                   você garante o seu acesso ao curso por 
                  <strong style={{ fontWeight: "700" }}>
                    um ano.
                  </strong>
                </p>
              </div>
              <div style={{ width: "100%", maxWidth: "460px", justifySelf: "center", display: "flex", flexDirection: "column" }}>
                <CardPreco curso="c" bf={v.isBF} garantia={true} />
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "24px", alignItems: "center" }}>
              <h2 style={{ margin: "0", font: "300 clamp(32px,3.6cqw,48px)/1.06 var(--fonte-montserrat)", letterSpacing: "-.03em", textAlign: "center" }}>
                monte seu 
                <strong style={{ fontWeight: "700" }}>
                  combo
                </strong>
              </h2>
              <ComboPagina curso="c" bf={v.isBF} />
            </div>
          </div>
        </section>
        <div aria-hidden="true" style={{ position: "relative", height: "0", zIndex: "0", pointerEvents: "none" }}>
          <div style={{ position: "absolute", top: "clamp(-360px,-30cqw,-200px)", right: "clamp(-360px,-28cqw,-160px)", width: "clamp(420px,60cqw,900px)", height: "clamp(400px,50cqw,720px)", background: "radial-gradient(closest-side,rgba(245,194,66,.065),rgba(245,194,66,.025) 55%,rgba(245,194,66,0) 100%)" }} />
        </div>
        <section id="faq" data-screen-label="12 FAQ" style={{ position: "relative", zIndex: "1", color: "#F6F3EC", padding: "clamp(48px,(100cqw - 760px) * 999,64px) clamp(20px,5.5cqw,80px)" }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "28px" }}>
            <h2 style={{ margin: "0", font: "300 clamp(32px,3.6cqw,48px)/1.06 var(--fonte-montserrat)", letterSpacing: "-.03em" }}>
              perguntas 
              <strong style={{ fontWeight: "700" }}>
                frequentes
              </strong>
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px", maxWidth: "880px" }}>
              {(v.faq ?? []).map((q: any, qI: number) => (
                <Fragment key={qI}>
                  <div style={{ background: "#2A2826", boxShadow: "inset 0 0 0 1px #3A3733", borderRadius: "16px", padding: "0 clamp(20px,2.4cqw,32px)" }}>
                    <button onClick={q?.toggle} style={{ all: "unset", boxSizing: "border-box", cursor: "pointer", width: "100%", display: "flex", justifyContent: "space-between", gap: "16px", alignItems: "center", padding: "20px 0", font: "600 18px/1.4 var(--fonte-corpo)", color: "#F6F3EC" }}>
                      <span>
                        {q?.p}
                      </span>
                      <span style={{ flex: "none", width: "32px", height: "32px", borderRadius: "999px", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "inset 0 0 0 1px #3A3733", color: "#F5C242", fontWeight: "400" }}>
                        {q?.sinal}
                      </span>
                    </button>
                    {q?.aberto ? (
                      <>
                        <p style={{ margin: "0", padding: "0 48px 22px 0", color: "#F6F3EC", fontSize: "16px", textWrap: "pretty" }}>
                          {q?.r}
                        </p>
                      </>
                    ) : null}
                  </div>
                </Fragment>
              ))}
            </div>
          </div>
        </section>
        <section data-screen-label="13 Final" style={{ position: "relative", zIndex: "1", marginTop: "clamp(48px,(100cqw - 760px) * 999,64px)", minHeight: "clamp(560px,52cqw,720px)", overflow: "hidden", display: "flex", flexDirection: "column", padding: "clamp(48px,6cqw,96px) clamp(20px,5.5cqw,80px)" }}>
          <div style={{ position: "absolute", inset: "0" }}>
            <Image src="/m/slots/lnp-final-resultado.webp" width={801} height={1200} alt="" sizes="(max-width: 768px) 100vw, 50vw" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
          </div>
          <div style={{ position: "relative", width: "100%", maxWidth: "1200px", margin: "0 auto", display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "32px", pointerEvents: "none" }}>
            <h2 style={{ margin: "0", color: "#201F1D", font: "300 clamp(32px,3.6cqw,48px)/1.06 var(--fonte-montserrat)", letterSpacing: "-.035em", textWrap: "balance", maxWidth: "560px" }}>
              do briefing à 
              <strong style={{ fontWeight: "700" }}>
                foto final
              </strong>
            </h2>
            <div style={{ pointerEvents: "auto" }}>
              <a href="#oferta" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", gap: "16px", height: "64px", maxWidth: "100%", boxSizing: "border-box", padding: "0 clamp(20px,2.4cqw,30px)", borderRadius: "0", background: "#201F1D", color: "#F6F3EC", font: "600 clamp(12px,1.2cqw,14px) var(--fonte-corpo)", letterSpacing: ".14em", textTransform: "uppercase", textDecoration: "none", whiteSpace: "nowrap", alignSelf: "flex-start" }} className="dc-mais-que-um-click-11">
                {v.cta}
              </a>
            </div>
          </div>
        </section>
        <footer style={{ padding: "clamp(48px,(100cqw - 760px) * 999,64px) clamp(20px,5.5cqw,80px) clamp(32px,(760px - 100cqw) * 999,48px)", boxShadow: "inset 0 1px 0 #2A2826" }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: "32px 48px" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              <img src="/m/exportacoes-2026/mais-que-um-click/logos/svg/mais-que-um-click_logo_horizontal_off-white-amarelo.svg" alt="mais que um click" style={{ height: "20px", width: "auto", display: "block", alignSelf: "flex-start" }} />
              <span style={{ font: "400 12px var(--fonte-mono)", letterSpacing: ".14em", color: "#D9D5CC" }}>
                UM CURSO DÉBORA GABRICH
              </span>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "16px 40px" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                <span style={{ font: "400 12px var(--fonte-mono)", letterSpacing: ".14em", color: "#F5C242" }}>
                  CONTATO
                </span>
                <Destino href="mailto:contato@deboragabrich.com.br" style={{ fontSize: "16px", color: "#F6F3EC", textDecoration: "none" }} pagina="mais-que-um-click">
                  contato@deboragabrich.com.br
                </Destino>
                <a href="https://instagram.com/deboragabrich" style={{ fontSize: "16px", color: "#F6F3EC", textDecoration: "none" }} target="_blank" rel="noopener noreferrer">
                  @deboragabrich
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
