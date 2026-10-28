'use client';
/* eslint-disable @typescript-eslint/no-explicit-any */
// Gerado a partir de "LnP Pagina - Manual v2.dc.html" (manual) pelo conversor em _conversor/. Edite à vontade: este arquivo agora é código do site.
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
      <div style={{ containerType: "inline-size", width: "100%", overflowX: "clip", background: "#1E1A17", color: "#F4F0E8", font: "400 16px/1.7 var(--fonte-corpo)" }}>
        <header style={{ position: "sticky", top: "0", zIndex: "60", background: "#1E1A17", boxShadow: "inset 0 -1px 0 #2a241f" }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto", height: "64px", padding: "0 clamp(20px,5.5cqw,80px)", boxSizing: "content-box", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "24px" }}>
            <a style={{ display: "flex", flex: "none" }} href="#oferta">
              <Image src="/m/assets/lnp/logo-creme.png" alt="luz na prática" style={{ height: "20px", width: "auto", display: "block" }} width={2000} height={263} sizes="(max-width: 768px) 100vw, 50vw" priority />
            </a>
            <div style={{ display: "flex", alignItems: "center", gap: "16px", flex: "none" }}>
              <a href="#oferta" style={{ height: "36px", padding: "0 16px", display: "flex", alignItems: "center", borderRadius: "0", background: "#D9A648", color: "#1E1A17", font: "600 12px var(--fonte-corpo)", letterSpacing: ".12em", textTransform: "uppercase", textDecoration: "none", whiteSpace: "nowrap" }} className="dc-luz-na-pratica-1">
                quero entrar
              </a>
            </div>
          </div>
        </header>
        {v.isAbertura ? (
          <>
            <div style={{ background: "#CCAA66", color: "#1E1A17", padding: "11px 0", overflow: "hidden", whiteSpace: "nowrap", font: "700 12px var(--fonte-mono)", letterSpacing: ".14em" }}>
              BLACK FRIDAY · 50% DE DESCONTO · ATÉ 27.11 · BLACK FRIDAY · 50% DE DESCONTO · ATÉ 27.11 · BLACK FRIDAY · 50% DE DESCONTO · ATÉ 27.11 · BLACK FRIDAY · 50% DE DESCONTO · ATÉ 27.11 ·
            </div>
          </>
        ) : null}
        {v.isUltima ? (
          <>
            <div style={{ background: "#2a241f", padding: "14px 20px", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "center", gap: "12px 28px", boxShadow: "inset 0 -1px 0 #4A3F36" }}>
              <span style={{ font: "900 14px var(--fonte-urbanist)", letterSpacing: ".03em", textTransform: "uppercase", whiteSpace: "nowrap" }}>
                o desconto de black friday acaba em
              </span>
              <div style={{ display: "flex", gap: "14px", alignItems: "baseline" }}>
                <span style={{ display: "flex", alignItems: "baseline", gap: "3px" }}>
                  <span style={{ font: "600 26px/1 var(--fonte-urbanist)", color: "#CCAA66" }}>
                    02
                  </span>
                  <span style={{ font: "400 12px var(--fonte-mono)", color: "#B7A793" }}>
                    D
                  </span>
                </span>
                <span style={{ display: "flex", alignItems: "baseline", gap: "3px" }}>
                  <span style={{ font: "600 26px/1 var(--fonte-urbanist)", color: "#CCAA66" }}>
                    09
                  </span>
                  <span style={{ font: "400 12px var(--fonte-mono)", color: "#B7A793" }}>
                    H
                  </span>
                </span>
                <span style={{ display: "flex", alignItems: "baseline", gap: "3px" }}>
                  <span style={{ font: "600 26px/1 var(--fonte-urbanist)", color: "#CCAA66" }}>
                    41
                  </span>
                  <span style={{ font: "400 12px var(--fonte-mono)", color: "#B7A793" }}>
                    MIN
                  </span>
                </span>
              </div>
              <a href="#oferta" style={{ height: "44px", display: "flex", alignItems: "center", padding: "0 20px", borderRadius: "0", background: "#CCAA66", color: "#1E1A17", font: "600 12px var(--fonte-corpo)", letterSpacing: ".16em", textTransform: "uppercase", textDecoration: "none", whiteSpace: "nowrap" }} className="dc-luz-na-pratica-2">
                garantir com 50%
              </a>
            </div>
          </>
        ) : null}
        <section data-screen-label="01 Hero" data-hero="1" style={{ position: "relative", display: "grid", minHeight: "clamp(min(78svh,680px),(760px - 100cqw) * 999,min(100svh,860px))", overflow: "hidden", background: "#1E1A17" }}>
          <Image src="/m/assets/lnp/hero/h4.png" alt="Débora Gabrich ajustando o flash no estúdio" style={{ gridArea: "1/1", position: "absolute", inset: "0", width: "100%", height: "100%", objectFit: "cover", objectPosition: "68% 40%", display: "block" }} width={1920} height={1080} sizes="(max-width: 768px) 100vw, 50vw" />
          <div style={{ gridArea: "1/1", position: "absolute", inset: "0", background: "linear-gradient(0deg,#1E1A17 0%,rgba(30,26,23,.82) 22%,rgba(30,26,23,.4) 44%,rgba(30,26,23,0) 64%),linear-gradient(180deg,rgba(30,26,23,.75) 0%,rgba(30,26,23,0) 24%),linear-gradient(90deg,#1E1A17 0%,rgba(30,26,23,.85) 24%,rgba(30,26,23,.4) 46%,rgba(30,26,23,0) 62%)" }} />
          <div style={{ gridArea: "1/1", position: "relative", display: "flex", flexDirection: "column", justifyContent: "space-between", gap: "24px", padding: "clamp(20px,3.5cqw,40px) clamp(20px,5.5cqw,80px) clamp(24px,4.5cqw,56px)" }}>
            <span />
            <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "clamp(20px,2.4cqw,28px)", maxWidth: "720px" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: "clamp(14px,1.8cqw,20px)" }}>
                {v.isBF ? (
                  <>
                    <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
                      <span style={{ font: "700 12px var(--fonte-mono)", letterSpacing: ".08em", padding: "5px 9px", background: "#CCAA66", color: "#1E1A17" }}>
                        BLACK FRIDAY
                      </span>
                      <span style={{ font: "700 12px var(--fonte-mono)", letterSpacing: ".08em", padding: "5px 9px", boxShadow: "inset 0 0 0 1px #CCAA66", color: "#CCAA66" }}>
                        {v.tagB}
                      </span>
                    </div>
                  </>
                ) : null}
                <div style={{ font: "400 12px var(--fonte-mono)", letterSpacing: ".2em", color: "#D9A648" }}>
                  CURSO ONLINE DE ILUMINAÇÃO · GASTRONOMIA E PRODUTOS
                </div>
                <h1 style={{ margin: "0", font: "200 clamp(40px,6.8cqw,88px)/.98 var(--fonte-montserrat)", letterSpacing: "-.04em", textWrap: "balance" }}>
                  crie a 
                  <strong style={{ fontWeight: "700" }}>
                    luz
                  </strong>
                   que a sua foto precisa
                </h1>
                <p style={{ margin: "0", maxWidth: "520px", font: "400 16px/1.6 var(--fonte-corpo)", color: "#F4F0E8", textWrap: "pretty" }}>
                  Aprenda a técnica para controlar a sua iluminação para fotografia de gastronomia e produtos em um curso 
                  <strong style={{ fontWeight: "700" }}>
                    prático e descomplicado
                  </strong>
                </p>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "12px", alignItems: "flex-start" }}>
                <a href="#oferta" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", gap: "16px", height: "64px", maxWidth: "100%", boxSizing: "border-box", padding: "0 clamp(20px,2.4cqw,30px)", borderRadius: "0", background: "#D9A648", color: "#1E1A17", font: "600 clamp(12px,1.2cqw,14px) var(--fonte-corpo)", letterSpacing: ".14em", textTransform: "uppercase", textDecoration: "none", whiteSpace: "nowrap" }} className="dc-luz-na-pratica-3">
                  {v.cta}
                </a>
                <span style={{ font: "400 12px var(--fonte-mono)", letterSpacing: ".14em", color: "#B7A793", paddingLeft: "30px" }}>
                  {v.heroPreco}
                </span>
              </div>
            </div>
          </div>
        </section>
        <section id="aprender" data-screen-label="03 O que você vai aprender" style={{ position: "relative", zIndex: "1", color: "#F4F0E8", padding: "clamp(48px,(100cqw - 760px) * 999,64px) clamp(20px,5.5cqw,80px)" }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "clamp(28px,4cqw,48px)" }}>
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "flex-end", gap: "20px 40px" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                <div style={{ font: "400 12px var(--fonte-mono)", letterSpacing: ".2em", color: "#D9A648" }}>
                  O QUE VOCÊ VAI APRENDER
                </div>
                <h2 style={{ margin: "0", font: "200 clamp(32px,3.6cqw,48px)/1.06 var(--fonte-montserrat)", letterSpacing: "-.03em", textWrap: "balance" }}>
                  a técnica pra 
                  <strong style={{ fontWeight: "700" }}>
                    controlar
                  </strong>
                   a sua luz
                </h2>
              </div>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,max(300px,calc((100% - 2px) / 3))),1fr))", gap: "1px", background: "#4A3F36", boxShadow: "0 1px 0 #4A3F36,0 -1px 0 #4A3F36" }}>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "clamp(14px,1.8cqw,20px)", alignContent: "start", padding: "clamp(18px,2.2cqw,28px) clamp(0px,(100cqw - 760px) * 999,28px)", background: "#1E1A17" }}>
                <div style={{ flex: "1 0 100%", display: "flex", justifyContent: "space-between", gap: "12px", alignItems: "baseline", font: "400 12px/1 var(--fonte-mono)", letterSpacing: ".14em", color: "#B7A793" }}>
                  <span style={{ color: "#D9A648" }}>
                    01
                  </span>
                  <span>
                    LUZ DO ZERO
                  </span>
                </div>
                <div style={{ flex: "0 0 clamp(104px,(100cqw - 760px) * 999,100%)", position: "relative", aspectRatio: "3/2", overflow: "hidden", background: "#4A3F36" }}>
                  <Image src="/m/assets/lnp/f/ap1.png" alt="Débora montando a luz no estúdio" style={{ position: "absolute", inset: "0", width: "100%", height: "100%", objectFit: "cover", objectPosition: "50% 40%", display: "block" }} width={1750} height={1080} sizes="(max-width: 768px) 100vw, 50vw" />
                </div>
                <p style={{ flex: "1 1 160px", margin: "0", font: "400 16px/1.5 var(--fonte-corpo)", color: "#F4F0E8", textWrap: "pretty" }}>
                  Como criar a sua iluminação do zero, independente do equipamento que você tem
                </p>
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "clamp(14px,1.8cqw,20px)", alignContent: "start", padding: "clamp(18px,2.2cqw,28px) clamp(0px,(100cqw - 760px) * 999,28px)", background: "#1E1A17" }}>
                <div style={{ flex: "1 0 100%", display: "flex", justifyContent: "space-between", gap: "12px", alignItems: "baseline", font: "400 12px/1 var(--fonte-mono)", letterSpacing: ".14em", color: "#B7A793" }}>
                  <span style={{ color: "#D9A648" }}>
                    02
                  </span>
                  <span>
                    TEXTURA E PROFUNDIDADE
                  </span>
                </div>
                <div style={{ flex: "0 0 clamp(104px,(100cqw - 760px) * 999,100%)", position: "relative", aspectRatio: "3/2", overflow: "hidden", background: "#4A3F36" }}>
                  <Image src="/m/assets/lnp/f/ap2b.png" alt="Análise em aula de três fotos de cupcake" style={{ position: "absolute", inset: "0", width: "100%", height: "100%", objectFit: "cover", objectPosition: "50% 40%", display: "block" }} width={1750} height={1080} sizes="(max-width: 768px) 100vw, 50vw" />
                </div>
                <p style={{ flex: "1 1 160px", margin: "0", font: "400 16px/1.5 var(--fonte-corpo)", color: "#F4F0E8", textWrap: "pretty" }}>
                  Como criar textura e profundidade nas fotos através da iluminação
                </p>
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "clamp(14px,1.8cqw,20px)", alignContent: "start", padding: "clamp(18px,2.2cqw,28px) clamp(0px,(100cqw - 760px) * 999,28px)", background: "#1E1A17" }}>
                <div style={{ flex: "1 0 100%", display: "flex", justifyContent: "space-between", gap: "12px", alignItems: "baseline", font: "400 12px/1 var(--fonte-mono)", letterSpacing: ".14em", color: "#B7A793" }}>
                  <span style={{ color: "#D9A648" }}>
                    03
                  </span>
                  <span>
                    ESQUEMAS DE LUZ
                  </span>
                </div>
                <div style={{ flex: "0 0 clamp(104px,(100cqw - 760px) * 999,100%)", position: "relative", aspectRatio: "3/2", overflow: "hidden", background: "#4A3F36" }}>
                  <Image src="/m/assets/lnp/f/ap3.jpg" alt="Esquema de luz com octabox e azulejo rosa" style={{ position: "absolute", inset: "0", width: "100%", height: "100%", objectFit: "cover", objectPosition: "50% 40%", display: "block" }} width={2003} height={3000} sizes="(max-width: 768px) 100vw, 50vw" />
                </div>
                <p style={{ flex: "1 1 160px", margin: "0", font: "400 16px/1.5 var(--fonte-corpo)", color: "#F4F0E8", textWrap: "pretty" }}>
                  Como escolher e montar esquemas de luz para diferentes tipos de fotografia
                </p>
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "clamp(14px,1.8cqw,20px)", alignContent: "start", padding: "clamp(18px,2.2cqw,28px) clamp(0px,(100cqw - 760px) * 999,28px)", background: "#1E1A17" }}>
                <div style={{ flex: "1 0 100%", display: "flex", justifyContent: "space-between", gap: "12px", alignItems: "baseline", font: "400 12px/1 var(--fonte-mono)", letterSpacing: ".14em", color: "#B7A793" }}>
                  <span style={{ color: "#D9A648" }}>
                    04
                  </span>
                  <span>
                    MODIFICADORES
                  </span>
                </div>
                <div style={{ flex: "0 0 clamp(104px,(100cqw - 760px) * 999,100%)", position: "relative", aspectRatio: "3/2", overflow: "hidden", background: "#4A3F36" }}>
                  <Image src="/m/assets/lnp/f/ap4b.png" alt="Estúdio com softbox, octabox e flash" style={{ position: "absolute", inset: "0", width: "100%", height: "100%", objectFit: "cover", objectPosition: "50% 40%", display: "block" }} width={1080} height={1350} sizes="(max-width: 768px) 100vw, 50vw" />
                </div>
                <p style={{ flex: "1 1 160px", margin: "0", font: "400 16px/1.5 var(--fonte-corpo)", color: "#F4F0E8", textWrap: "pretty" }}>
                  Como usar modificadores de luz e acessórios para controlar a sua iluminação
                </p>
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "clamp(14px,1.8cqw,20px)", alignContent: "start", padding: "clamp(18px,2.2cqw,28px) clamp(0px,(100cqw - 760px) * 999,28px)", background: "#1E1A17" }}>
                <div style={{ flex: "1 0 100%", display: "flex", justifyContent: "space-between", gap: "12px", alignItems: "baseline", font: "400 12px/1 var(--fonte-mono)", letterSpacing: ".14em", color: "#B7A793" }}>
                  <span style={{ color: "#D9A648" }}>
                    05
                  </span>
                  <span>
                    EFEITOS DE LUZ
                  </span>
                </div>
                <div style={{ flex: "0 0 clamp(104px,(100cqw - 760px) * 999,100%)", position: "relative", aspectRatio: "3/2", overflow: "hidden", background: "#4A3F36" }}>
                  <Image src="/m/assets/lnp/f/ap5b.png" alt="Softbox com flash e câmera no tripé" style={{ position: "absolute", inset: "0", width: "100%", height: "100%", objectFit: "cover", objectPosition: "50% 40%", display: "block" }} width={1080} height={1350} sizes="(max-width: 768px) 100vw, 50vw" />
                </div>
                <p style={{ flex: "1 1 160px", margin: "0", font: "400 16px/1.5 var(--fonte-corpo)", color: "#F4F0E8", textWrap: "pretty" }}>
                  Como criar diferentes efeitos de luz para deixar suas fotos com mais impacto visual
                </p>
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "clamp(14px,1.8cqw,20px)", alignContent: "start", padding: "clamp(18px,2.2cqw,28px) clamp(0px,(100cqw - 760px) * 999,28px)", background: "#1E1A17" }}>
                <div style={{ flex: "1 0 100%", display: "flex", justifyContent: "space-between", gap: "12px", alignItems: "baseline", font: "400 12px/1 var(--fonte-mono)", letterSpacing: ".14em", color: "#B7A793" }}>
                  <span style={{ color: "#D9A648" }}>
                    06
                  </span>
                  <span>
                    FOTOMETRIA E COR
                  </span>
                </div>
                <div style={{ flex: "0 0 clamp(104px,(100cqw - 760px) * 999,100%)", position: "relative", aspectRatio: "3/2", overflow: "hidden", background: "#4A3F36" }}>
                  <Image src="/m/assets/lnp/f/ap6.png" alt="Débora fotometrando com cartão cinza" style={{ position: "absolute", inset: "0", width: "100%", height: "100%", objectFit: "cover", objectPosition: "50% 40%", display: "block" }} width={1750} height={1080} sizes="(max-width: 768px) 100vw, 50vw" />
                </div>
                <p style={{ flex: "1 1 160px", margin: "0", font: "400 16px/1.5 var(--fonte-corpo)", color: "#F4F0E8", textWrap: "pretty" }}>
                  Como fotometrar corretamente, configurar a sua câmera e fazer o equilíbrio de cores
                </p>
              </div>
            </div>
          </div>
        </section>
        <div aria-hidden="true" style={{ position: "relative", height: "0", zIndex: "0", pointerEvents: "none" }}>
          <div style={{ position: "absolute", top: "clamp(-360px,-30cqw,-200px)", right: "clamp(-360px,-28cqw,-160px)", width: "clamp(420px,60cqw,900px)", height: "clamp(400px,50cqw,720px)", background: "radial-gradient(closest-side,rgba(217,166,72,.065),rgba(217,166,72,.025) 55%,rgba(217,166,72,0) 100%)" }} />
        </div>
        <section data-screen-label="04 Manifesto" style={{ position: "relative", zIndex: "1", color: "#F4F0E8", padding: "clamp(48px,(100cqw - 760px) * 999,64px) 0" }}>
          <div style={{ position: "relative", minHeight: "clamp(360px,40cqw,520px)", overflow: "hidden" }}>
            <Image src="/m/assets/lnp/f/tjl-h.png" alt="Frasco The Joy Lab entre curvas de papel branco" style={{ position: "absolute", inset: "0", width: "100%", height: "100%", objectFit: "cover", objectPosition: "55% 40%", display: "block" }} width={1920} height={1080} sizes="(max-width: 768px) 100vw, 50vw" />
            <div style={{ position: "relative", maxWidth: "1200px", margin: "0 auto", minHeight: "inherit", boxSizing: "border-box", display: "flex", alignItems: "center", padding: "clamp(24px,4cqw,56px) clamp(20px,5.5cqw,80px)", pointerEvents: "none" }}>
              <h2 style={{ margin: "0", color: "#1E1A17", maxWidth: "min(40%,420px)", font: "200 clamp(32px,3.6cqw,48px)/1.06 var(--fonte-montserrat)", letterSpacing: "-.03em", textWrap: "balance" }}>
                a iluminação é a parte mais 
                <strong style={{ fontWeight: "700" }}>
                  importante
                </strong>
                 da sua fotografia
              </h2>
            </div>
          </div>
        </section>
        <section id="resultados" data-screen-label="05 Antes e depois" style={{ position: "relative", zIndex: "1", color: "#F4F0E8", padding: "clamp(48px,(100cqw - 760px) * 999,64px) clamp(20px,5.5cqw,80px) 0" }}>
          <div style={{ maxHeight: "clamp(0px,(100cqw - 760px) * 999,4000px)", overflow: "hidden" }}>
            <div style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "clamp(32px,4cqw,48px)" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: "22px", maxWidth: "640px" }}>
                <div style={{ font: "400 12px var(--fonte-mono)", letterSpacing: ".2em", color: "#D9A648" }}>
                  RESULTADOS DOS MEUS ALUNOS
                </div>
                <h2 style={{ margin: "0", font: "200 clamp(32px,3.6cqw,48px)/1.06 var(--fonte-montserrat)", letterSpacing: "-.03em" }}>
                  antes e 
                  <strong style={{ fontWeight: "700" }}>
                    depois
                  </strong>
                </h2>
                <p style={{ margin: "0", maxWidth: "420px", fontSize: "16px", textWrap: "pretty" }}>
                  Fotos dos meus alunos antes e depois do Luz na Prática. Arraste a linha sobre a foto para comparar.
                </p>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(4,minmax(0,1fr))", gap: "clamp(12px,1.6cqw,24px)" }}>
                {(v.tri ?? []).map((t: any, tI: number) => (
                  <Fragment key={tI}>
                    <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                      <div onPointerDown={t?.down} onPointerMove={t?.move} onPointerUp={t?.up} onPointerCancel={t?.up} style={{ position: "relative", width: "100%", aspectRatio: "2/3", overflow: "hidden", borderRadius: "16px", background: "#2a241f", cursor: "ew-resize", touchAction: "pan-y", userSelect: "none" }}>
                        <img src={t?.depois} alt="Foto depois do curso" draggable="false" style={{ position: "absolute", inset: "0", width: "100%", height: "100%", objectFit: "cover", display: "block", pointerEvents: "none" }} />
                        <img src={t?.antes} alt="Foto antes do curso" draggable="false" style={{ position: "absolute", inset: "0", width: "100%", height: "100%", objectFit: "cover", display: "block", pointerEvents: "none", clipPath: `inset(0 ${t?.clipR ?? ""}% 0 0)` }} />
                        <span style={{ position: "absolute", left: "12px", top: "12px", padding: "5px 9px", background: "#F4F0E8", color: "#1E1A17", font: "400 12px var(--fonte-mono)", letterSpacing: ".14em", pointerEvents: "none" }}>
                          ANTES
                        </span>
                        <span style={{ position: "absolute", right: "12px", top: "12px", padding: "5px 9px", background: "#1E1A17", color: "#F4F0E8", font: "700 12px var(--fonte-mono)", letterSpacing: ".14em", pointerEvents: "none" }}>
                          DEPOIS
                        </span>
                        <div style={{ position: "absolute", top: "0", bottom: "0", left: `${t?.pos ?? ""}%`, width: "2px", marginLeft: "-1px", background: "#F4F0E8", pointerEvents: "none" }} />
                        <div style={{ position: "absolute", top: "50%", left: `${t?.pos ?? ""}%`, width: "44px", height: "44px", margin: "-22px 0 0 -22px", borderRadius: "999px", background: "#F4F0E8", color: "#1E1A17", display: "flex", alignItems: "center", justifyContent: "center", font: "400 14px/1 var(--fonte-corpo)", pointerEvents: "none" }}>
                          ←→
                        </div>
                      </div>
                      <span style={{ font: "400 12px var(--fonte-mono)", letterSpacing: ".14em", color: "#B7A793" }}>
                        {t?.label}
                      </span>
                    </div>
                  </Fragment>
                ))}
              </div>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <a href="#oferta" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", gap: "16px", height: "64px", maxWidth: "100%", boxSizing: "border-box", padding: "0 clamp(20px,2.4cqw,30px)", borderRadius: "0", background: "#D9A648", color: "#1E1A17", font: "600 clamp(12px,1.2cqw,14px) var(--fonte-corpo)", letterSpacing: ".14em", textTransform: "uppercase", textDecoration: "none", whiteSpace: "nowrap" }} className="dc-luz-na-pratica-4">
                  {v.cta}
                </a>
              </div>
            </div>
          </div>
          <div style={{ maxHeight: "clamp(0px,(760px - 100cqw) * 999,4000px)", overflow: "hidden" }}>
            <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,360px),1fr))", gap: "clamp(28px,5cqw,80px)", alignItems: "center" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: "22px" }}>
                <div style={{ font: "400 12px var(--fonte-mono)", letterSpacing: ".2em", color: "#D9A648" }}>
                  RESULTADOS DOS MEUS ALUNOS
                </div>
                <h2 style={{ margin: "0", font: "200 clamp(32px,3.6cqw,48px)/1.06 var(--fonte-montserrat)", letterSpacing: "-.03em" }}>
                  antes e 
                  <strong style={{ fontWeight: "700" }}>
                    depois
                  </strong>
                </h2>
                <p style={{ margin: "0", maxWidth: "420px", fontSize: "16px", textWrap: "pretty" }}>
                  Fotos dos meus alunos antes e depois do Luz na Prática. Arraste a linha sobre a foto para comparar.
                </p>
                <div style={{ display: "flex", alignItems: "center", gap: "16px", paddingTop: "18px", boxShadow: "inset 0 1px 0 #4A3F36", maxWidth: "420px" }}>
                  <button onClick={v.prev} aria-label="Par anterior" style={{ width: "48px", height: "48px", border: "0", borderRadius: "999px", cursor: "pointer", background: "transparent", boxShadow: "inset 0 0 0 1px #F4F0E8", color: "#F4F0E8", font: "400 20px/1 var(--fonte-corpo)" }} className="dc-luz-na-pratica-5">
                    ←
                  </button>
                  <span style={{ font: "400 12px var(--fonte-mono)", letterSpacing: ".14em", minWidth: "120px", textAlign: "center" }}>
                    {v.parLabel}
                  </span>
                  <button onClick={v.next} aria-label="Próximo par" style={{ width: "48px", height: "48px", border: "0", borderRadius: "999px", cursor: "pointer", background: "transparent", boxShadow: "inset 0 0 0 1px #F4F0E8", color: "#F4F0E8", font: "400 20px/1 var(--fonte-corpo)" }} className="dc-luz-na-pratica-6">
                    →
                  </button>
                </div>
              </div>
              <div ref={v.sliderRef} onPointerDown={v.sDown} onPointerMove={v.sMove} onPointerUp={v.sUp} onPointerCancel={v.sUp} style={{ position: "relative", width: "100%", maxWidth: "440px", aspectRatio: "2/3", justifySelf: "center", overflow: "hidden", borderRadius: "16px", background: "#2a241f", cursor: "ew-resize", touchAction: "pan-y", userSelect: "none" }}>
                <img src={v.par?.depois} alt="Foto depois do curso" draggable="false" style={{ position: "absolute", inset: "0", width: "100%", height: "100%", objectFit: "cover", display: "block", pointerEvents: "none" }} />
                <img src={v.par?.antes} alt="Foto antes do curso" draggable="false" style={{ position: "absolute", inset: "0", width: "100%", height: "100%", objectFit: "cover", display: "block", pointerEvents: "none", clipPath: `inset(0 ${v.clipR ?? ""}% 0 0)` }} />
                <span style={{ position: "absolute", left: "14px", top: "14px", padding: "5px 9px", background: "#F4F0E8", color: "#1E1A17", font: "400 12px var(--fonte-mono)", letterSpacing: ".14em", pointerEvents: "none" }}>
                  ANTES
                </span>
                <span style={{ position: "absolute", right: "14px", top: "14px", padding: "5px 9px", background: "#1E1A17", color: "#F4F0E8", font: "700 12px var(--fonte-mono)", letterSpacing: ".14em", pointerEvents: "none" }}>
                  DEPOIS
                </span>
                <div style={{ position: "absolute", top: "0", bottom: "0", left: `${v.pos ?? ""}%`, width: "2px", marginLeft: "-1px", background: "#F4F0E8", pointerEvents: "none" }} />
                <div style={{ position: "absolute", top: "50%", left: `${v.pos ?? ""}%`, width: "52px", height: "52px", margin: "-26px 0 0 -26px", borderRadius: "999px", background: "#F4F0E8", color: "#1E1A17", display: "flex", alignItems: "center", justifyContent: "center", gap: "6px", font: "400 15px/1 var(--fonte-corpo)", pointerEvents: "none" }}>
                  ←→
                </div>
              </div>
              <span style={{ justifySelf: "center", width: "100%", maxWidth: "440px", font: "400 12px var(--fonte-mono)", letterSpacing: ".14em", color: "#B7A793", marginTop: "calc(clamp(28px,5cqw,80px) * -1 + 12px)" }}>
                {v.legenda}
              </span>
              <div style={{ gridColumn: "1/-1", display: "flex", justifyContent: "center" }}>
                <a href="#oferta" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", gap: "16px", height: "64px", maxWidth: "100%", boxSizing: "border-box", padding: "0 clamp(20px,2.4cqw,30px)", borderRadius: "0", background: "#D9A648", color: "#1E1A17", font: "600 clamp(12px,1.2cqw,14px) var(--fonte-corpo)", letterSpacing: ".14em", textTransform: "uppercase", textDecoration: "none", whiteSpace: "nowrap" }} className="dc-luz-na-pratica-7">
                  {v.cta}
                </a>
              </div>
            </div>
          </div>
        </section>
        <section data-screen-label="09 Depoimentos" style={{ position: "relative", zIndex: "1", padding: "clamp(48px,6cqw,64px) clamp(20px,5.5cqw,80px) clamp(48px,(100cqw - 760px) * 999,64px)" }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "clamp(32px,4cqw,48px)" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              <div style={{ font: "400 12px var(--fonte-mono)", letterSpacing: ".2em", color: "#D9A648" }}>
                QUEM JÁ FEZ O CURSO
              </div>
              <h2 style={{ margin: "0", font: "200 clamp(32px,3.6cqw,48px)/1.06 var(--fonte-montserrat)", letterSpacing: "-.03em", textWrap: "balance" }}>
                o que muda quando você entende a 
                <strong style={{ fontWeight: "700" }}>
                  luz
                </strong>
              </h2>
            </div>
            <DepoimentosPagina set="lnp" />
            <div style={{ display: "flex", justifyContent: "center" }}>
              <a href="#oferta" style={{ display: "flex", alignItems: "center", justifyContent: "center", minHeight: "60px", padding: "0 32px", background: "#D9A648", color: "#1E1A17", font: "600 14px var(--fonte-corpo)", letterSpacing: ".14em", textTransform: "uppercase", textDecoration: "none", textAlign: "center", borderRadius: "0" }} className="dc-luz-na-pratica-8">
                quero aprender
              </a>
            </div>
          </div>
        </section>
        <div aria-hidden="true" style={{ position: "relative", height: "0", zIndex: "0", pointerEvents: "none" }}>
          <div style={{ position: "absolute", top: "clamp(-360px,-30cqw,-200px)", right: "clamp(-360px,-28cqw,-160px)", width: "clamp(420px,60cqw,900px)", height: "clamp(400px,50cqw,720px)", background: "radial-gradient(closest-side,rgba(217,166,72,.065),rgba(217,166,72,.025) 55%,rgba(217,166,72,0) 100%)" }} />
        </div>
        <section data-screen-label="06 Pra você que" style={{ position: "relative", zIndex: "1", color: "#F4F0E8", display: "flex", flexWrap: "wrap", minHeight: "clamp(0px,(100cqw - 760px) * 999,680px)", overflow: "hidden" }}>
          <div style={{ position: "relative", overflow: "hidden", flex: "0 0 clamp(44%,(760px - 100cqw) * 999,100%)", minHeight: "300px" }}>
            <Image src="/m/assets/lnp/f/camera-frente.jpg" alt="Débora fotografando de frente para a câmera" style={{ position: "absolute", inset: "0", width: "100%", height: "100%", objectFit: "cover", objectPosition: "50% 45%", display: "block", filter: "grayscale(.15) brightness(.8) contrast(1.05)", WebkitMaskImage: "linear-gradient(90deg,#000 calc(100% - clamp(0%,(100cqw - 760px) * 999,52%)),transparent 100%),linear-gradient(180deg,#000 calc(100% - clamp(26%,(760px - 100cqw) * 999,55%)),transparent 100%)", maskImage: "linear-gradient(90deg,#000 calc(100% - clamp(0%,(100cqw - 760px) * 999,52%)),transparent 100%),linear-gradient(180deg,#000 calc(100% - clamp(26%,(760px - 100cqw) * 999,55%)),transparent 100%)", WebkitMaskComposite: "source-in", maskComposite: "intersect" }} width={1080} height={1920} sizes="(max-width: 768px) 100vw, 50vw" />
          </div>
          <div style={{ flex: "1 1 320px", minWidth: "0", position: "relative", boxSizing: "border-box", maxWidth: "780px", marginTop: "clamp(-48px,(760px - 100cqw) * -999,0px)", padding: "clamp(0px,(100cqw - 760px) * 999,64px) clamp(20px,(100cqw - 760px) * 999,64px) clamp(48px,(100cqw - 760px) * 999,64px) clamp(20px,(100cqw - 760px) * 999,24px)", display: "flex", flexDirection: "column", justifyContent: "center", gap: "24px" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              <span style={{ font: "400 12px var(--fonte-mono)", letterSpacing: ".2em", color: "#D9A648" }}>
                PRA QUEM É
              </span>
              <h2 style={{ margin: "0", font: "200 clamp(32px,3.6cqw,48px)/1.06 var(--fonte-montserrat)", letterSpacing: "-.03em", textWrap: "balance" }}>
                o Luz na Prática é pra 
                <strong style={{ fontWeight: "700" }}>
                  você
                </strong>
                 que
              </h2>
            </div>
            <div style={{ display: "flex", flexDirection: "column", boxShadow: "inset 0 1px 0 #4A3F36" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: "4px", padding: "16px 0", boxShadow: "inset 0 -1px 0 #4A3F36" }}>
                <h3 style={{ margin: "0", font: "700 clamp(20px,1.8cqw,22px)/1.2 var(--fonte-montserrat)", letterSpacing: "-.02em", color: "#F4F0E8", textWrap: "balance" }}>
                  repete o mesmo esquema de luz em todo trabalho
                </h3>
                <p style={{ margin: "0", font: "400 16px/1.5 var(--fonte-corpo)", color: "#F4F0E8", textWrap: "pretty" }}>
                  porque é o único em que você confia, e trava quando alguma coisa muda no set.
                </p>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "4px", padding: "16px 0", boxShadow: "inset 0 -1px 0 #4A3F36" }}>
                <h3 style={{ margin: "0", font: "700 clamp(20px,1.8cqw,22px)/1.2 var(--fonte-montserrat)", letterSpacing: "-.02em", color: "#F4F0E8", textWrap: "balance" }}>
                  não quer depender de equipamentos caros
                </h3>
                <p style={{ margin: "0", font: "400 16px/1.5 var(--fonte-corpo)", color: "#F4F0E8", textWrap: "pretty" }}>
                  para criar uma luz profissional.
                </p>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "4px", padding: "16px 0", boxShadow: "inset 0 -1px 0 #4A3F36" }}>
                <h3 style={{ margin: "0", font: "700 clamp(20px,1.8cqw,22px)/1.2 var(--fonte-montserrat)", letterSpacing: "-.02em", color: "#F4F0E8", textWrap: "balance" }}>
                  passa horas testando a iluminação
                </h3>
                <p style={{ margin: "0", font: "400 16px/1.5 var(--fonte-corpo)", color: "#F4F0E8", textWrap: "pretty" }}>
                  antes mesmo de começar a clicar.
                </p>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "4px", padding: "16px 0", boxShadow: "inset 0 -1px 0 #4A3F36" }}>
                <h3 style={{ margin: "0", font: "700 clamp(20px,1.8cqw,22px)/1.2 var(--fonte-montserrat)", letterSpacing: "-.02em", color: "#F4F0E8", textWrap: "balance" }}>
                  está começando na fotografia de produtos e gastronomia
                </h3>
                <p style={{ margin: "0", font: "400 16px/1.5 var(--fonte-corpo)", color: "#F4F0E8", textWrap: "pretty" }}>
                  e quer aprender iluminação desde a base.
                </p>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "4px", padding: "16px 0", boxShadow: "inset 0 -1px 0 #4A3F36" }}>
                <h3 style={{ margin: "0", font: "700 clamp(20px,1.8cqw,22px)/1.2 var(--fonte-montserrat)", letterSpacing: "-.02em", color: "#F4F0E8", textWrap: "balance" }}>
                  já tem experiência na fotografia
                </h3>
                <p style={{ margin: "0", font: "400 16px/1.5 var(--fonte-corpo)", color: "#F4F0E8", textWrap: "pretty" }}>
                  e quer sair do automático, com mais repertório e mais controle sobre cada luz que cria.
                </p>
              </div>
            </div>
            <p style={{ margin: "0", font: "400 14px/1.6 var(--fonte-corpo)", color: "#D2C7B7", textWrap: "pretty" }}>
              <strong style={{ fontWeight: "700", color: "#F4F0E8" }}>
                não é pra você se
              </strong>
               quer uma receita de bolo ou um esquema de luz pronto para reproduzir nas suas fotos. O Luz na Prática te ensina a entender e controlar a luz, para você ter liberdade criativa e criar a sua própria iluminação.
            </p>
          </div>
        </section>
        {v.modClaro ? (
          <>
            <section id="modulos" data-screen-label="08 Módulos" style={{ position: "relative", zIndex: "1", background: "#E6DECE", color: "#1E1A17", padding: "clamp(48px,(100cqw - 760px) * 999,64px) clamp(20px,5.5cqw,80px)" }}>
              <div style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "32px" }}>
                <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                  <div style={{ font: "400 12px var(--fonte-mono)", letterSpacing: ".2em", color: "#6B4F3A" }}>
                    CONTEÚDO DO CURSO · 27 AULAS
                  </div>
                  <h2 style={{ margin: "0", font: "200 clamp(32px,3.6cqw,48px)/1.06 var(--fonte-montserrat)", letterSpacing: "-.03em", textWrap: "balance" }}>
                    módulos e 
                    <strong style={{ fontWeight: "700" }}>
                      aulas
                    </strong>
                  </h2>
                </div>
                <div ref={v.modRef} data-mod-uid={v.modUid} style={{ display: "flex", flexDirection: "column" }}>
                  {v.modLargo ? (
                    <>
                      <div style={{ display: "flex", flexWrap: "wrap", gap: "clamp(28px,4cqw,56px)", alignItems: "flex-start" }}>
                        <div style={{ flex: "1 1 380px", display: "flex", flexDirection: "column", minWidth: "0" }}>
                          {(v.modulos ?? []).map((m: any, mI: number) => (
                            <Fragment key={mI}>
                              <div style={{ boxShadow: "inset 0 1px 0 #B7A793" }}>
                                <button onClick={m?.set} onMouseEnter={m?.set} style={{ all: "unset", boxSizing: "border-box", cursor: "pointer", width: "100%", display: "grid", gridTemplateColumns: "44px minmax(0,1fr) auto", gap: "14px", alignItems: "center", minHeight: "60px", padding: "12px 0" }}>
                                  <span style={{ font: "400 12px var(--fonte-mono)", letterSpacing: ".12em", color: m?.numCor }}>
                                    {m?.n}
                                  </span>
                                  <span style={{ font: `${m?.peso ?? ""} clamp(18px,1.8cqw,22px)/1.3 var(--fonte-montserrat)`, color: "#1E1A17" }}>
                                    {m?.titulo}
                                  </span>
                                  <span style={{ font: "400 12px var(--fonte-mono)", letterSpacing: ".12em", color: "#6B4F3A" }}>
                                    {m?.qtd}
                                  </span>
                                </button>
                              </div>
                            </Fragment>
                          ))}
                        </div>
                        <div style={{ flex: "1 1 380px", display: "flex", flexDirection: "column", gap: "18px", minWidth: "0", background: "#4A3F36", color: "#F4F0E8", padding: "clamp(18px,2.4cqw,28px)", boxSizing: "border-box" }}>
                          <div style={{ position: "relative", overflow: "hidden", aspectRatio: "16/9" }}>
                            <img src={v.sel?.img} alt="Frame de aula do módulo" style={{ position: "absolute", inset: "0", width: "100%", height: "100%", objectFit: "cover", objectPosition: "50% 30%", display: "block" }} />
                          </div>
                          <div style={{ display: "flex", justifyContent: "space-between", gap: "12px", alignItems: "baseline" }}>
                            <span style={{ font: "400 12px var(--fonte-mono)", letterSpacing: ".14em", color: "#D9A648" }}>
                              MÓDULO {v.sel?.n}
                            </span>
                            <span style={{ font: "400 12px var(--fonte-mono)", letterSpacing: ".12em", color: "#B7A793" }}>
                              {v.sel?.qtd}
                            </span>
                          </div>
                          <div style={{ display: "flex", flexDirection: "column" }}>
                            {(v.sel?.aulas ?? []).map((a: any, aI: number) => (
                              <Fragment key={aI}>
                                <div style={{ display: "grid", gridTemplateColumns: "36px minmax(0,1fr)", gap: "10px", padding: "12px 0", boxShadow: "inset 0 1px 0 #6B4F3A" }}>
                                  <span style={{ font: "400 12px/2 var(--fonte-mono)", color: "#B7A793" }}>
                                    {a?.n}
                                  </span>
                                  <span style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                                    <span style={{ font: "700 15px/1.45 var(--fonte-corpo)" }}>
                                      {a?.t}
                                    </span>
                                    <span style={{ fontSize: "14px", lineHeight: "1.6", textWrap: "pretty" }}>
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
                  {v.modEstreito ? (
                    <>
                      <div style={{ display: "flex", flexDirection: "column" }}>
                        {(v.modulos ?? []).map((m: any, mI: number) => (
                          <Fragment key={mI}>
                            <div style={{ boxShadow: "inset 0 1px 0 #B7A793" }}>
                              <button onClick={m?.toggle} style={{ all: "unset", boxSizing: "border-box", cursor: "pointer", width: "100%", display: "grid", gridTemplateColumns: "32px minmax(0,1fr) 32px", gap: "12px", alignItems: "center", minHeight: "64px", padding: "12px 0" }}>
                                <span style={{ font: "400 12px var(--fonte-mono)", letterSpacing: ".12em", color: m?.numCor }}>
                                  {m?.n}
                                </span>
                                <span style={{ display: "flex", flexDirection: "column", gap: "4px", minWidth: "0" }}>
                                  <span style={{ font: `${m?.peso ?? ""} 18px/1.3 var(--fonte-montserrat)`, color: "#1E1A17" }}>
                                    {m?.titulo}
                                  </span>
                                  <span style={{ font: "400 11px var(--fonte-mono)", letterSpacing: ".12em", color: "#6B4F3A" }}>
                                    {m?.qtd}
                                  </span>
                                </span>
                                <span style={{ width: "32px", height: "32px", borderRadius: "999px", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "inset 0 0 0 1px #B7A793", color: "#6B4F3A", font: "400 16px var(--fonte-corpo)" }}>
                                  {m?.sinal}
                                </span>
                              </button>
                              {m?.aberto ? (
                                <>
                                  <div style={{ display: "flex", flexDirection: "column", gap: "18px", minWidth: "0", background: "#4A3F36", color: "#F4F0E8", padding: "clamp(18px,2.4cqw,28px)", boxSizing: "border-box", marginBottom: "16px" }}>
                                    <div style={{ position: "relative", overflow: "hidden", aspectRatio: "16/9" }}>
                                      <img src={m?.img} alt="Frame de aula do módulo" style={{ position: "absolute", inset: "0", width: "100%", height: "100%", objectFit: "cover", objectPosition: "50% 30%", display: "block" }} />
                                    </div>
                                    <div style={{ display: "flex", justifyContent: "space-between", gap: "12px", alignItems: "baseline" }}>
                                      <span style={{ font: "400 12px var(--fonte-mono)", letterSpacing: ".14em", color: "#D9A648" }}>
                                        MÓDULO {m?.n}
                                      </span>
                                      <span style={{ font: "400 12px var(--fonte-mono)", letterSpacing: ".12em", color: "#B7A793" }}>
                                        {m?.qtd}
                                      </span>
                                    </div>
                                    <div style={{ display: "flex", flexDirection: "column" }}>
                                      {(m?.aulas ?? []).map((a: any, aI: number) => (
                                        <Fragment key={aI}>
                                          <div style={{ display: "grid", gridTemplateColumns: "36px minmax(0,1fr)", gap: "10px", padding: "12px 0", boxShadow: "inset 0 1px 0 #6B4F3A" }}>
                                            <span style={{ font: "400 12px/2 var(--fonte-mono)", color: "#B7A793" }}>
                                              {a?.n}
                                            </span>
                                            <span style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                                              <span style={{ font: "700 15px/1.45 var(--fonte-corpo)" }}>
                                                {a?.t}
                                              </span>
                                              <span style={{ fontSize: "14px", lineHeight: "1.6", textWrap: "pretty" }}>
                                                {a?.d}
                                              </span>
                                            </span>
                                          </div>
                                        </Fragment>
                                      ))}
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
            <section data-screen-label="07 Diferenciais" style={{ position: "relative", zIndex: "1", background: "#E6DECE", color: "#1E1A17", padding: "clamp(48px,(100cqw - 760px) * 999,64px) clamp(20px,5.5cqw,64px)" }}>
              <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
                <div style={{ overflowX: "auto", scrollSnapType: "x mandatory", scrollbarWidth: "none", margin: "0 calc(-1 * clamp(20px,5.5cqw,64px))", padding: "0 clamp(20px,5.5cqw,64px)", scrollPadding: "0 clamp(20px,5.5cqw,64px)" }}>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(3,minmax(min(280px,76cqw),1fr))", gridTemplateRows: "auto auto", columnGap: "clamp(12px,1.4cqw,16px)", rowGap: "clamp(18px,2.6cqw,32px)", minWidth: "min-content" }}>
                    <div style={{ gridColumn: "1 / -1", gridRow: "1", background: "#1E1A17", margin: "0 calc(-1 * clamp(8px,1.4cqw,16px))" }} />
                    <div style={{ gridRow: "1", gridColumn: "1", scrollSnapAlign: "start", padding: "clamp(10px,1.2cqw,14px) 0 clamp(12px,1.4cqw,18px)", display: "flex", flexDirection: "column", gap: "clamp(6px,.7cqw,8px)" }}>
                      <span style={{ font: "400 12px/1 var(--fonte-mono)", letterSpacing: ".14em", color: "#D9A648" }}>
                        01 ▸ 01A
                      </span>
                      <div style={{ position: "relative", aspectRatio: "3/2" }}>
                        <div style={{ position: "absolute", inset: "0", overflow: "hidden", background: "#4A3F36" }}>
                          <Image src="/m/assets/lnp/f/b10.jpg" alt="Set simples com rebatedor branco" style={{ position: "absolute", inset: "0", width: "100%", height: "100%", objectFit: "cover", objectPosition: "50% 50%", display: "block" }} width={3746} height={4994} sizes="(max-width: 768px) 100vw, 50vw" />
                        </div>
                      </div>
                    </div>
                    <div style={{ gridRow: "1", gridColumn: "2", scrollSnapAlign: "start", padding: "clamp(10px,1.2cqw,14px) 0 clamp(12px,1.4cqw,18px)", display: "flex", flexDirection: "column", gap: "clamp(6px,.7cqw,8px)" }}>
                      <span style={{ font: "400 12px/1 var(--fonte-mono)", letterSpacing: ".14em", color: "#D9A648" }}>
                        02 ▸ 02A
                      </span>
                      <div style={{ position: "relative", aspectRatio: "3/2" }}>
                        <div style={{ position: "absolute", inset: "0", overflow: "hidden", background: "#4A3F36" }}>
                          <Image src="/m/assets/lnp/f/card-analises.png" alt="Análise de luz de três fotos de cupcake" style={{ position: "absolute", inset: "0", width: "100%", height: "100%", objectFit: "cover", objectPosition: "50% 20%", display: "block" }} width={1750} height={1080} sizes="(max-width: 768px) 100vw, 50vw" />
                        </div>
                      </div>
                    </div>
                    <div style={{ gridRow: "1", gridColumn: "3", scrollSnapAlign: "start", padding: "clamp(10px,1.2cqw,14px) 0 clamp(12px,1.4cqw,18px)", display: "flex", flexDirection: "column", gap: "clamp(6px,.7cqw,8px)" }}>
                      <span style={{ font: "400 12px/1 var(--fonte-mono)", letterSpacing: ".14em", color: "#D9A648" }}>
                        03 ▸ 03A
                      </span>
                      <div style={{ position: "relative", aspectRatio: "3/2" }}>
                        <div style={{ position: "absolute", inset: "0", overflow: "hidden", background: "#4A3F36" }}>
                          <Image src="/m/assets/lnp/f/card-aulas.png" alt="Débora explicando um octabox em aula" style={{ position: "absolute", inset: "0", width: "100%", height: "100%", objectFit: "cover", objectPosition: "50% 30%", display: "block" }} width={1750} height={1080} sizes="(max-width: 768px) 100vw, 50vw" />
                        </div>
                      </div>
                    </div>
                    <div style={{ gridRow: "2", gridColumn: "1", display: "flex", flexDirection: "column", gap: "clamp(10px,1.1cqw,12px)", paddingRight: "clamp(0px,1.4cqw,16px)" }}>
                      <span style={{ font: "400 12px var(--fonte-mono)", letterSpacing: ".2em", color: "#6B4F3A" }}>
                        EQUIPAMENTO
                      </span>
                      <h3 style={{ margin: "0", font: "200 clamp(26px,2.5cqw,30px)/1.1 var(--fonte-montserrat)", letterSpacing: "-.02em", textWrap: "balance" }}>
                        comece com o que você 
                        <strong style={{ fontWeight: "700" }}>
                          tem
                        </strong>
                      </h3>
                      <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.65", textWrap: "pretty" }}>
                        Você não precisa ter nenhum equipamento específico para aprender sobre luz, todo o conteúdo pode ser aplicado imediatamente e com o que você já tem!
                      </p>
                    </div>
                    <div style={{ gridRow: "2", gridColumn: "2", display: "flex", flexDirection: "column", gap: "clamp(10px,1.1cqw,12px)", paddingRight: "clamp(0px,1.4cqw,16px)" }}>
                      <span style={{ font: "400 12px var(--fonte-mono)", letterSpacing: ".2em", color: "#6B4F3A" }}>
                        ANÁLISES
                      </span>
                      <h3 style={{ margin: "0", font: "200 clamp(26px,2.5cqw,30px)/1.1 var(--fonte-montserrat)", letterSpacing: "-.02em", textWrap: "balance" }}>
                        análises de 
                        <strong style={{ fontWeight: "700" }}>
                          sessão
                        </strong>
                      </h3>
                      <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.65", textWrap: "pretty" }}>
                        Além de todas as aulas você tem acesso às análises de esquemas de luz de trabalhos reais para que você possa aplicar os insights na prática.
                      </p>
                    </div>
                    <div style={{ gridRow: "2", gridColumn: "3", display: "flex", flexDirection: "column", gap: "clamp(10px,1.1cqw,12px)", paddingRight: "clamp(0px,1.4cqw,16px)" }}>
                      <span style={{ font: "400 12px var(--fonte-mono)", letterSpacing: ".2em", color: "#6B4F3A" }}>
                        AULAS PRÁTICAS
                      </span>
                      <h3 style={{ margin: "0", font: "200 clamp(26px,2.5cqw,30px)/1.1 var(--fonte-montserrat)", letterSpacing: "-.02em", textWrap: "balance" }}>
                        + de 25 aulas 
                        <strong style={{ fontWeight: "700" }}>
                          práticas
                        </strong>
                      </h3>
                      <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.65", textWrap: "pretty" }}>
                        Um curso completo para você aprender a controlar a sua iluminação e criar diferentes efeitos de luz de forma descomplicada e acessível.
                      </p>
                    </div>
                  </div>
                </div>
                <div style={{ display: "flex", justifyContent: "center", paddingTop: "clamp(32px,4cqw,48px)" }}>
                  <a href="#oferta" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", gap: "16px", height: "64px", maxWidth: "100%", boxSizing: "border-box", padding: "0 clamp(20px,2.4cqw,30px)", borderRadius: "0", background: "#1E1A17", color: "#F4F0E8", font: "600 clamp(12px,1.2cqw,14px) var(--fonte-corpo)", letterSpacing: ".14em", textTransform: "uppercase", textDecoration: "none", whiteSpace: "nowrap" }} className="dc-luz-na-pratica-9">
                    {v.cta}
                  </a>
                </div>
              </div>
            </section>
          </>
        ) : null}
        {v.modEscuro ? (
          <>
            <section id="modulos-escuro" data-screen-label="08 Módulos" style={{ position: "relative", zIndex: "1", color: "#F4F0E8", padding: "clamp(48px,(100cqw - 760px) * 999,64px) clamp(20px,5.5cqw,80px)" }}>
              <div style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "32px" }}>
                <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                  <div style={{ font: "400 12px var(--fonte-mono)", letterSpacing: ".2em", color: "#B7A793" }}>
                    CONTEÚDO DO CURSO · 27 AULAS
                  </div>
                  <h2 style={{ margin: "0", font: "200 clamp(32px,3.6cqw,48px)/1.06 var(--fonte-montserrat)", letterSpacing: "-.03em", textWrap: "balance" }}>
                    módulos e 
                    <strong style={{ fontWeight: "700" }}>
                      aulas
                    </strong>
                  </h2>
                </div>
                <div ref={v.modRef} data-mod-uid={v.modUid} style={{ display: "flex", flexDirection: "column" }}>
                  {v.modLargo ? (
                    <>
                      <div style={{ display: "flex", flexWrap: "wrap", gap: "clamp(28px,4cqw,56px)", alignItems: "flex-start" }}>
                        <div style={{ flex: "1 1 380px", display: "flex", flexDirection: "column", minWidth: "0" }}>
                          {(v.modulos ?? []).map((m: any, mI: number) => (
                            <Fragment key={mI}>
                              <div style={{ boxShadow: "inset 0 1px 0 #4A3F36" }}>
                                <button onClick={m?.set} onMouseEnter={m?.set} style={{ all: "unset", boxSizing: "border-box", cursor: "pointer", width: "100%", display: "grid", gridTemplateColumns: "44px minmax(0,1fr) auto", gap: "14px", alignItems: "center", minHeight: "60px", padding: "12px 0" }}>
                                  <span style={{ font: "400 12px var(--fonte-mono)", letterSpacing: ".12em", color: m?.numCorD }}>
                                    {m?.n}
                                  </span>
                                  <span style={{ font: `${m?.peso ?? ""} clamp(18px,1.8cqw,22px)/1.3 var(--fonte-montserrat)`, color: "#F4F0E8" }}>
                                    {m?.titulo}
                                  </span>
                                  <span style={{ font: "400 12px var(--fonte-mono)", letterSpacing: ".12em", color: "#B7A793" }}>
                                    {m?.qtd}
                                  </span>
                                </button>
                              </div>
                            </Fragment>
                          ))}
                        </div>
                        <div style={{ flex: "1 1 380px", display: "flex", flexDirection: "column", gap: "18px", minWidth: "0", background: "#4A3F36", color: "#F4F0E8", padding: "clamp(18px,2.4cqw,28px)", boxSizing: "border-box" }}>
                          <div style={{ position: "relative", overflow: "hidden", aspectRatio: "16/9" }}>
                            <img src={v.sel?.img} alt="Frame de aula do módulo" style={{ position: "absolute", inset: "0", width: "100%", height: "100%", objectFit: "cover", objectPosition: "50% 30%", display: "block" }} />
                          </div>
                          <div style={{ display: "flex", justifyContent: "space-between", gap: "12px", alignItems: "baseline" }}>
                            <span style={{ font: "400 12px var(--fonte-mono)", letterSpacing: ".14em", color: "#D9A648" }}>
                              MÓDULO {v.sel?.n}
                            </span>
                            <span style={{ font: "400 12px var(--fonte-mono)", letterSpacing: ".12em", color: "#B7A793" }}>
                              {v.sel?.qtd}
                            </span>
                          </div>
                          <div style={{ display: "flex", flexDirection: "column" }}>
                            {(v.sel?.aulas ?? []).map((a: any, aI: number) => (
                              <Fragment key={aI}>
                                <div style={{ display: "grid", gridTemplateColumns: "36px minmax(0,1fr)", gap: "10px", padding: "12px 0", boxShadow: "inset 0 1px 0 #6B4F3A" }}>
                                  <span style={{ font: "400 12px/2 var(--fonte-mono)", color: "#B7A793" }}>
                                    {a?.n}
                                  </span>
                                  <span style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                                    <span style={{ font: "700 15px/1.45 var(--fonte-corpo)" }}>
                                      {a?.t}
                                    </span>
                                    <span style={{ fontSize: "14px", lineHeight: "1.6", textWrap: "pretty" }}>
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
                  {v.modEstreito ? (
                    <>
                      <div style={{ display: "flex", flexDirection: "column" }}>
                        {(v.modulos ?? []).map((m: any, mI: number) => (
                          <Fragment key={mI}>
                            <div style={{ boxShadow: "inset 0 1px 0 #4A3F36" }}>
                              <button onClick={m?.toggle} style={{ all: "unset", boxSizing: "border-box", cursor: "pointer", width: "100%", display: "grid", gridTemplateColumns: "32px minmax(0,1fr) 32px", gap: "12px", alignItems: "center", minHeight: "64px", padding: "12px 0" }}>
                                <span style={{ font: "400 12px var(--fonte-mono)", letterSpacing: ".12em", color: m?.numCorD }}>
                                  {m?.n}
                                </span>
                                <span style={{ display: "flex", flexDirection: "column", gap: "4px", minWidth: "0" }}>
                                  <span style={{ font: `${m?.peso ?? ""} 18px/1.3 var(--fonte-montserrat)`, color: "#F4F0E8" }}>
                                    {m?.titulo}
                                  </span>
                                  <span style={{ font: "400 11px var(--fonte-mono)", letterSpacing: ".12em", color: "#B7A793" }}>
                                    {m?.qtd}
                                  </span>
                                </span>
                                <span style={{ width: "32px", height: "32px", borderRadius: "999px", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "inset 0 0 0 1px #4A3F36", color: "#D9A648", font: "400 16px var(--fonte-corpo)" }}>
                                  {m?.sinal}
                                </span>
                              </button>
                              {m?.aberto ? (
                                <>
                                  <div style={{ display: "flex", flexDirection: "column", gap: "18px", minWidth: "0", background: "#4A3F36", color: "#F4F0E8", padding: "clamp(18px,2.4cqw,28px)", boxSizing: "border-box", marginBottom: "16px" }}>
                                    <div style={{ position: "relative", overflow: "hidden", aspectRatio: "16/9" }}>
                                      <img src={m?.img} alt="Frame de aula do módulo" style={{ position: "absolute", inset: "0", width: "100%", height: "100%", objectFit: "cover", objectPosition: "50% 30%", display: "block" }} />
                                    </div>
                                    <div style={{ display: "flex", justifyContent: "space-between", gap: "12px", alignItems: "baseline" }}>
                                      <span style={{ font: "400 12px var(--fonte-mono)", letterSpacing: ".14em", color: "#D9A648" }}>
                                        MÓDULO {m?.n}
                                      </span>
                                      <span style={{ font: "400 12px var(--fonte-mono)", letterSpacing: ".12em", color: "#B7A793" }}>
                                        {m?.qtd}
                                      </span>
                                    </div>
                                    <div style={{ display: "flex", flexDirection: "column" }}>
                                      {(m?.aulas ?? []).map((a: any, aI: number) => (
                                        <Fragment key={aI}>
                                          <div style={{ display: "grid", gridTemplateColumns: "36px minmax(0,1fr)", gap: "10px", padding: "12px 0", boxShadow: "inset 0 1px 0 #6B4F3A" }}>
                                            <span style={{ font: "400 12px/2 var(--fonte-mono)", color: "#B7A793" }}>
                                              {a?.n}
                                            </span>
                                            <span style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                                              <span style={{ font: "700 15px/1.45 var(--fonte-corpo)" }}>
                                                {a?.t}
                                              </span>
                                              <span style={{ fontSize: "14px", lineHeight: "1.6", textWrap: "pretty" }}>
                                                {a?.d}
                                              </span>
                                            </span>
                                          </div>
                                        </Fragment>
                                      ))}
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
            <section data-screen-label="07 Diferenciais" style={{ position: "relative", zIndex: "1", color: "#F4F0E8", padding: "clamp(48px,(100cqw - 760px) * 999,64px) clamp(20px,5.5cqw,64px)" }}>
              <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
                <div style={{ overflowX: "auto", scrollSnapType: "x mandatory", scrollbarWidth: "none", margin: "0 calc(-1 * clamp(20px,5.5cqw,64px))", padding: "0 clamp(20px,5.5cqw,64px)", scrollPadding: "0 clamp(20px,5.5cqw,64px)" }}>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(3,minmax(min(280px,76cqw),1fr))", gridTemplateRows: "auto auto", columnGap: "clamp(12px,1.4cqw,16px)", rowGap: "clamp(18px,2.6cqw,32px)", minWidth: "min-content" }}>
                    <div style={{ gridColumn: "1 / -1", gridRow: "1", background: "#2a241f", boxShadow: "inset 0 0 0 1px #4A3F36", margin: "0 calc(-1 * clamp(8px,1.4cqw,16px))" }} />
                    <div style={{ gridRow: "1", gridColumn: "1", scrollSnapAlign: "start", padding: "clamp(10px,1.2cqw,14px) 0 clamp(12px,1.4cqw,18px)", display: "flex", flexDirection: "column", gap: "clamp(6px,.7cqw,8px)" }}>
                      <span style={{ font: "400 12px/1 var(--fonte-mono)", letterSpacing: ".14em", color: "#D9A648" }}>
                        01 ▸ 01A
                      </span>
                      <div style={{ position: "relative", aspectRatio: "3/2" }}>
                        <div style={{ position: "absolute", inset: "0", overflow: "hidden", background: "#4A3F36" }}>
                          <Image src="/m/assets/lnp/f/b10.jpg" alt="Set simples com rebatedor branco" style={{ position: "absolute", inset: "0", width: "100%", height: "100%", objectFit: "cover", objectPosition: "50% 50%", display: "block" }} width={3746} height={4994} sizes="(max-width: 768px) 100vw, 50vw" />
                        </div>
                      </div>
                    </div>
                    <div style={{ gridRow: "1", gridColumn: "2", scrollSnapAlign: "start", padding: "clamp(10px,1.2cqw,14px) 0 clamp(12px,1.4cqw,18px)", display: "flex", flexDirection: "column", gap: "clamp(6px,.7cqw,8px)" }}>
                      <span style={{ font: "400 12px/1 var(--fonte-mono)", letterSpacing: ".14em", color: "#D9A648" }}>
                        02 ▸ 02A
                      </span>
                      <div style={{ position: "relative", aspectRatio: "3/2" }}>
                        <div style={{ position: "absolute", inset: "0", overflow: "hidden", background: "#4A3F36" }}>
                          <Image src="/m/assets/lnp/f/card-analises.png" alt="Análise de luz de três fotos de cupcake" style={{ position: "absolute", inset: "0", width: "100%", height: "100%", objectFit: "cover", objectPosition: "50% 20%", display: "block" }} width={1750} height={1080} sizes="(max-width: 768px) 100vw, 50vw" />
                        </div>
                      </div>
                    </div>
                    <div style={{ gridRow: "1", gridColumn: "3", scrollSnapAlign: "start", padding: "clamp(10px,1.2cqw,14px) 0 clamp(12px,1.4cqw,18px)", display: "flex", flexDirection: "column", gap: "clamp(6px,.7cqw,8px)" }}>
                      <span style={{ font: "400 12px/1 var(--fonte-mono)", letterSpacing: ".14em", color: "#D9A648" }}>
                        03 ▸ 03A
                      </span>
                      <div style={{ position: "relative", aspectRatio: "3/2" }}>
                        <div style={{ position: "absolute", inset: "0", overflow: "hidden", background: "#4A3F36" }}>
                          <Image src="/m/assets/lnp/f/card-aulas.png" alt="Débora explicando um octabox em aula" style={{ position: "absolute", inset: "0", width: "100%", height: "100%", objectFit: "cover", objectPosition: "50% 30%", display: "block" }} width={1750} height={1080} sizes="(max-width: 768px) 100vw, 50vw" />
                        </div>
                      </div>
                    </div>
                    <div style={{ gridRow: "2", gridColumn: "1", display: "flex", flexDirection: "column", gap: "clamp(10px,1.1cqw,12px)", paddingRight: "clamp(0px,1.4cqw,16px)" }}>
                      <span style={{ font: "400 12px var(--fonte-mono)", letterSpacing: ".2em", color: "#B7A793" }}>
                        EQUIPAMENTO
                      </span>
                      <h3 style={{ margin: "0", font: "200 clamp(26px,2.5cqw,30px)/1.1 var(--fonte-montserrat)", letterSpacing: "-.02em", textWrap: "balance" }}>
                        comece com o que você 
                        <strong style={{ fontWeight: "700" }}>
                          tem
                        </strong>
                      </h3>
                      <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.65", textWrap: "pretty" }}>
                        Você não precisa ter nenhum equipamento específico para aprender sobre luz, todo o conteúdo pode ser aplicado imediatamente e com o que você já tem!
                      </p>
                    </div>
                    <div style={{ gridRow: "2", gridColumn: "2", display: "flex", flexDirection: "column", gap: "clamp(10px,1.1cqw,12px)", paddingRight: "clamp(0px,1.4cqw,16px)" }}>
                      <span style={{ font: "400 12px var(--fonte-mono)", letterSpacing: ".2em", color: "#B7A793" }}>
                        ANÁLISES
                      </span>
                      <h3 style={{ margin: "0", font: "200 clamp(26px,2.5cqw,30px)/1.1 var(--fonte-montserrat)", letterSpacing: "-.02em", textWrap: "balance" }}>
                        análises de 
                        <strong style={{ fontWeight: "700" }}>
                          sessão
                        </strong>
                      </h3>
                      <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.65", textWrap: "pretty" }}>
                        Além de todas as aulas você tem acesso às análises de esquemas de luz de trabalhos reais para que você possa aplicar os insights na prática.
                      </p>
                    </div>
                    <div style={{ gridRow: "2", gridColumn: "3", display: "flex", flexDirection: "column", gap: "clamp(10px,1.1cqw,12px)", paddingRight: "clamp(0px,1.4cqw,16px)" }}>
                      <span style={{ font: "400 12px var(--fonte-mono)", letterSpacing: ".2em", color: "#B7A793" }}>
                        AULAS PRÁTICAS
                      </span>
                      <h3 style={{ margin: "0", font: "200 clamp(26px,2.5cqw,30px)/1.1 var(--fonte-montserrat)", letterSpacing: "-.02em", textWrap: "balance" }}>
                        + de 25 aulas 
                        <strong style={{ fontWeight: "700" }}>
                          práticas
                        </strong>
                      </h3>
                      <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.65", textWrap: "pretty" }}>
                        Um curso completo para você aprender a controlar a sua iluminação e criar diferentes efeitos de luz de forma descomplicada e acessível.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </>
        ) : null}
        <section data-screen-label="10c Meu trabalho" style={{ position: "relative", zIndex: "1", color: "#F4F0E8", padding: "clamp(48px,(100cqw - 760px) * 999,64px) 0 clamp(48px,(100cqw - 760px) * 999,64px)", display: "flex", flexDirection: "column", gap: "clamp(28px,3cqw,40px)" }}>
          <div style={{ maxWidth: "1200px", width: "100%", margin: "0 auto", padding: "0 clamp(20px,5.5cqw,80px)", boxSizing: "border-box", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,380px),1fr))", gap: "16px clamp(32px,5cqw,72px)", alignItems: "end" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              <div style={{ font: "400 12px var(--fonte-mono)", letterSpacing: ".2em", color: "#B7A793" }}>
                O MEU TRABALHO
              </div>
              <h2 style={{ margin: "0", font: "200 clamp(32px,3.6cqw,48px)/1.06 var(--fonte-montserrat)", letterSpacing: "-.03em", textWrap: "balance" }}>
                do início da carreira até 
                <strong style={{ fontWeight: "700" }}>
                  hoje
                </strong>
              </h2>
            </div>
            <p style={{ margin: "0", fontSize: "16px", textWrap: "pretty" }}>
              Fotos minhas do começo e de agora, nos trabalhos para marcas e clientes.
            </p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <div style={{ maxWidth: "1200px", width: "100%", margin: "0 auto", padding: "0 clamp(20px,5.5cqw,80px)", boxSizing: "border-box", font: "400 12px var(--fonte-mono)", letterSpacing: ".2em", color: "#B7A793" }}>
              NO INÍCIO
            </div>
            <div data-auto-scroll="1" style={{ display: "flex", gap: "4px", overflowX: "auto", scrollbarWidth: "none", padding: "0 clamp(20px,5.5cqw,80px)", scrollPadding: "0 clamp(20px,5.5cqw,80px)" }}>
              <div style={{ flex: "0 0 min(220px,44cqw)", aspectRatio: "4/5" }}>
                <ImagemReservada rotulo="foto do início" proporcao="auto" />
              </div>
              <div style={{ flex: "0 0 min(220px,44cqw)", aspectRatio: "4/5" }}>
                <ImagemReservada rotulo="foto do início" proporcao="auto" />
              </div>
              <div style={{ flex: "0 0 min(220px,44cqw)", aspectRatio: "4/5" }}>
                <ImagemReservada rotulo="foto do início" proporcao="auto" />
              </div>
              <div style={{ flex: "0 0 min(220px,44cqw)", aspectRatio: "4/5" }}>
                <ImagemReservada rotulo="foto do início" proporcao="auto" />
              </div>
              <div style={{ flex: "0 0 min(220px,44cqw)", aspectRatio: "4/5" }}>
                <ImagemReservada rotulo="foto do início" proporcao="auto" />
              </div>
              <div style={{ flex: "0 0 min(220px,44cqw)", aspectRatio: "4/5" }}>
                <ImagemReservada rotulo="foto do início" proporcao="auto" />
              </div>
              <div style={{ flex: "0 0 min(220px,44cqw)", aspectRatio: "4/5" }}>
                <ImagemReservada rotulo="foto do início" proporcao="auto" />
              </div>
              <div style={{ flex: "0 0 min(220px,44cqw)", aspectRatio: "4/5" }}>
                <ImagemReservada rotulo="foto do início" proporcao="auto" />
              </div>
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <div style={{ maxWidth: "1200px", width: "100%", margin: "0 auto", padding: "0 clamp(20px,5.5cqw,80px)", boxSizing: "border-box", font: "700 12px var(--fonte-mono)", letterSpacing: ".2em", color: "#F4F0E8" }}>
              HOJE
            </div>
            <div data-auto-scroll="-1" style={{ display: "flex", gap: "4px", overflowX: "auto", scrollbarWidth: "none", padding: "0 clamp(20px,5.5cqw,80px)", scrollPadding: "0 clamp(20px,5.5cqw,80px)" }}>
              <div style={{ flex: "0 0 min(220px,44cqw)", aspectRatio: "4/5" }}>
                <ImagemReservada rotulo="foto de hoje" proporcao="auto" />
              </div>
              <div style={{ flex: "0 0 min(220px,44cqw)", aspectRatio: "4/5" }}>
                <ImagemReservada rotulo="foto de hoje" proporcao="auto" />
              </div>
              <div style={{ flex: "0 0 min(220px,44cqw)", aspectRatio: "4/5" }}>
                <ImagemReservada rotulo="foto de hoje" proporcao="auto" />
              </div>
              <div style={{ flex: "0 0 min(220px,44cqw)", aspectRatio: "4/5" }}>
                <ImagemReservada rotulo="foto de hoje" proporcao="auto" />
              </div>
              <div style={{ flex: "0 0 min(220px,44cqw)", aspectRatio: "4/5" }}>
                <ImagemReservada rotulo="foto de hoje" proporcao="auto" />
              </div>
              <div style={{ flex: "0 0 min(220px,44cqw)", aspectRatio: "4/5" }}>
                <ImagemReservada rotulo="foto de hoje" proporcao="auto" />
              </div>
              <div style={{ flex: "0 0 min(220px,44cqw)", aspectRatio: "4/5" }}>
                <ImagemReservada rotulo="foto de hoje" proporcao="auto" />
              </div>
              <div style={{ flex: "0 0 min(220px,44cqw)", aspectRatio: "4/5" }}>
                <ImagemReservada rotulo="foto de hoje" proporcao="auto" />
              </div>
              <div style={{ flex: "0 0 min(220px,44cqw)", aspectRatio: "4/5" }}>
                <ImagemReservada rotulo="foto de hoje" proporcao="auto" />
              </div>
              <div style={{ flex: "0 0 min(220px,44cqw)", aspectRatio: "4/5" }}>
                <ImagemReservada rotulo="foto de hoje" proporcao="auto" />
              </div>
              <div style={{ flex: "0 0 min(220px,44cqw)", aspectRatio: "4/5" }}>
                <ImagemReservada rotulo="foto de hoje" proporcao="auto" />
              </div>
              <div style={{ flex: "0 0 min(220px,44cqw)", aspectRatio: "4/5" }}>
                <ImagemReservada rotulo="foto de hoje" proporcao="auto" />
              </div>
              <div style={{ flex: "0 0 min(220px,44cqw)", aspectRatio: "4/5" }}>
                <ImagemReservada rotulo="foto de hoje" proporcao="auto" />
              </div>
              <div style={{ flex: "0 0 min(220px,44cqw)", aspectRatio: "4/5" }}>
                <ImagemReservada rotulo="foto de hoje" proporcao="auto" />
              </div>
              <div style={{ flex: "0 0 min(220px,44cqw)", aspectRatio: "4/5" }}>
                <ImagemReservada rotulo="foto de hoje" proporcao="auto" />
              </div>
              <div style={{ flex: "0 0 min(220px,44cqw)", aspectRatio: "4/5" }}>
                <ImagemReservada rotulo="foto de hoje" proporcao="auto" />
              </div>
              <div style={{ flex: "0 0 min(220px,44cqw)", aspectRatio: "4/5" }}>
                <ImagemReservada rotulo="foto de hoje" proporcao="auto" />
              </div>
              <div style={{ flex: "0 0 min(220px,44cqw)", aspectRatio: "4/5" }}>
                <ImagemReservada rotulo="foto de hoje" proporcao="auto" />
              </div>
              <div style={{ flex: "0 0 min(220px,44cqw)", aspectRatio: "4/5" }}>
                <ImagemReservada rotulo="foto de hoje" proporcao="auto" />
              </div>
              <div style={{ flex: "0 0 min(220px,44cqw)", aspectRatio: "4/5" }}>
                <ImagemReservada rotulo="foto de hoje" proporcao="auto" />
              </div>
            </div>
          </div>
        </section>
        <section data-screen-label="10 Sobre" style={{ position: "relative", zIndex: "1", color: "#F4F0E8", padding: "clamp(48px,(100cqw - 760px) * 999,64px) clamp(20px,5.5cqw,80px) clamp(40px,5cqw,64px)" }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,360px),1fr))", gap: "clamp(36px,5cqw,72px)", alignItems: "center" }}>
            <div style={{ position: "relative", overflow: "hidden", aspectRatio: "4/5", overflow: "hidden", maxWidth: "440px" }}>
              <Image src="/m/assets/lnp/f/retrato.png" alt="Débora Gabrich" style={{ position: "absolute", inset: "0", width: "100%", height: "100%", objectFit: "cover", display: "block" }} width={1000} height={1503} sizes="(max-width: 768px) 100vw, 50vw" />
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              <h2 style={{ margin: "0", font: "200 clamp(32px,3.6cqw,48px)/1.06 var(--fonte-montserrat)", letterSpacing: "-.03em" }}>
                oie, eu sou a 
                <strong style={{ fontWeight: "700" }}>
                  débora
                </strong>
              </h2>
              <p style={{ margin: "0", fontSize: "16px", textWrap: "pretty" }}>
                Fotógrafa publicitária, diretora criativa, creator e comunicóloga, formada em Publicidade e Propaganda.
              </p>
              <p style={{ margin: "0", fontSize: "16px", textWrap: "pretty" }}>
                Essas seriam as primeiras coisas que eu diria sobre mim. Workaholic convicta, falar sobre o meu trabalho é quase como falar sobre quem eu sou.
              </p>
              <p style={{ margin: "0", fontSize: "16px", textWrap: "pretty" }}>
                A fotografia sempre foi a minha forma preferida de enxergar a vida. Pra mim, uma foto não precisa apenas ser bonita: ela precisa contar uma história.
              </p>
              <p style={{ margin: "0", fontSize: "16px", textWrap: "pretty" }}>
                Fotografo profissionalmente desde 2012 e, desde 2014, me dedico à fotografia de gastronomia e de produtos, com marcas como Nestlé, Granado, Outback, Catupiry, Vigor e Adobe. Do briefing à foto final, cada etapa é pensada para traduzir posicionamento e identidade visual em imagens que comunicam.
              </p>
              <p style={{ margin: "0", fontSize: "16px", textWrap: "pretty" }}>
                No Luz na Prática, eu te mostro como eu penso e monto a luz em todos os meus trabalhos.
              </p>
              <p style={{ margin: "0", paddingLeft: "20px", boxShadow: "inset 2px 0 0 #D9A648", font: "300 clamp(19px,1.8cqw,22px)/1.45 var(--fonte-montserrat)", textWrap: "pretty" }}>
                “Aprender técnicas de iluminação foi o que mudou consideravelmente a qualidade do meu trabalho!”
              </p>
            </div>
          </div>
        </section>
        <section id="oferta" data-screen-label="11 Oferta" style={{ position: "relative", zIndex: "1", padding: "clamp(48px,(100cqw - 760px) * 999,64px) clamp(20px,5.5cqw,80px) clamp(16px,2cqw,24px)" }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "clamp(48px,6cqw,80px)" }}>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "40px" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: "14px", maxWidth: "640px", alignItems: "center", textAlign: "center" }}>
                <h2 style={{ margin: "0", font: "200 clamp(32px,3.6cqw,48px)/1.06 var(--fonte-montserrat)", letterSpacing: "-.03em", textWrap: "balance" }}>
                  tudo o que você 
                  <strong style={{ fontWeight: "700" }}>
                    recebe
                  </strong>
                </h2>
                <p style={{ margin: "0", fontSize: "16px", textWrap: "pretty" }}>
                  Você assiste no seu ritmo, revê as aulas quantas vezes quiser durante um ano e tira dúvidas comigo direto na plataforma.
                </p>
              </div>
              <div style={{ width: "100%", maxWidth: "460px", justifySelf: "center", display: "flex", flexDirection: "column" }}>
                <CardPreco curso="l" bf={v.isBF} garantia={true} />
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "24px", alignItems: "center" }}>
              <h2 style={{ margin: "0", font: "200 clamp(32px,3.6cqw,48px)/1.06 var(--fonte-montserrat)", letterSpacing: "-.03em", textAlign: "center" }}>
                monte seu 
                <strong style={{ fontWeight: "700" }}>
                  combo
                </strong>
              </h2>
              <ComboPagina curso="l" bf={v.isBF} />
            </div>
          </div>
        </section>
        <div aria-hidden="true" style={{ position: "relative", height: "0", zIndex: "0", pointerEvents: "none" }}>
          <div style={{ position: "absolute", top: "clamp(-360px,-30cqw,-200px)", right: "clamp(-360px,-28cqw,-160px)", width: "clamp(420px,60cqw,900px)", height: "clamp(400px,50cqw,720px)", background: "radial-gradient(closest-side,rgba(217,166,72,.065),rgba(217,166,72,.025) 55%,rgba(217,166,72,0) 100%)" }} />
        </div>
        <section id="faq" data-screen-label="12 FAQ" style={{ position: "relative", zIndex: "1", color: "#F4F0E8", padding: "clamp(48px,(100cqw - 760px) * 999,64px) clamp(20px,5.5cqw,80px)" }}>
          <div style={{ maxWidth: "880px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "28px" }}>
            <h2 style={{ margin: "0", font: "200 clamp(32px,3.6cqw,48px)/1.06 var(--fonte-montserrat)", letterSpacing: "-.03em", textAlign: "center" }}>
              perguntas 
              <strong style={{ fontWeight: "700" }}>
                frequentes
              </strong>
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px", width: "100%" }}>
              {(v.faq ?? []).map((q: any, qI: number) => (
                <Fragment key={qI}>
                  <div style={{ background: "#2a241f", boxShadow: "inset 0 0 0 1px #4A3F36", borderRadius: "16px", padding: "0 clamp(20px,2.4cqw,32px)" }}>
                    <button onClick={q?.toggle} style={{ all: "unset", boxSizing: "border-box", cursor: "pointer", width: "100%", display: "flex", justifyContent: "space-between", gap: "16px", alignItems: "center", padding: "20px 0", font: "600 18px/1.4 var(--fonte-corpo)", color: "#F4F0E8" }}>
                      <span>
                        {q?.p}
                      </span>
                      <span style={{ flex: "none", width: "32px", height: "32px", borderRadius: "999px", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "inset 0 0 0 1px #4A3F36", color: "#D9A648", fontWeight: "400" }}>
                        {q?.sinal}
                      </span>
                    </button>
                    {q?.aberto ? (
                      <>
                        <p style={{ margin: "0", padding: "0 48px 22px 0", color: "#F4F0E8", fontSize: "16px", textWrap: "pretty" }}>
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
        <section data-screen-label="13 Final" style={{ position: "relative", zIndex: "1", marginTop: "clamp(48px,(100cqw - 760px) * 999,64px)", minHeight: "max(clamp(360px,34cqw,480px),clamp(0px,(760px - 100cqw) * 999,150cqw))", overflow: "hidden", display: "flex", flexDirection: "column", justifyContent: "center", padding: "clamp(40px,5cqw,72px) clamp(20px,5.5cqw,80px)", background: "#A3C3D3" }}>
          <div style={{ position: "absolute", top: "0", right: "0", bottom: "0", width: "max(clamp(180px,38cqw,480px),clamp(0px,(760px - 100cqw) * 999,100%))" }}>
            <Image src="/m/slots/lnp-final-resultado.webp" width={801} height={1200} alt="" sizes="(max-width: 768px) 100vw, 50vw" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
            <div style={{ position: "absolute", top: "0", bottom: "0", left: "0", width: "clamp(0px,(100cqw - 760px) * 999,100%)", background: "linear-gradient(90deg,#A3C3D3 0%,rgba(163,195,211,.6) 22%,rgba(163,195,211,0) 50%)", pointerEvents: "none" }} />
          </div>
          <div style={{ position: "relative", width: "100%", maxWidth: "1200px", margin: "0 auto", display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "32px", pointerEvents: "none", marginBottom: "clamp(0px,(760px - 100cqw) * 999,70cqw)" }}>
            <h2 style={{ margin: "0", color: "#1E1A17", font: "200 clamp(32px,3.6cqw,48px)/1.06 var(--fonte-montserrat)", letterSpacing: "-.035em", textWrap: "balance", maxWidth: "min(560px,58%)" }}>
              aprenda a criar a sua 
              <strong style={{ fontWeight: "700" }}>
                própria luz
              </strong>
            </h2>
            <div style={{ pointerEvents: "auto" }}>
              <a href="#oferta" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", gap: "16px", height: "64px", maxWidth: "100%", boxSizing: "border-box", padding: "0 clamp(20px,2.4cqw,30px)", borderRadius: "0", background: "#1E1A17", color: "#F4F0E8", font: "600 clamp(12px,1.2cqw,14px) var(--fonte-corpo)", letterSpacing: ".14em", textTransform: "uppercase", textDecoration: "none", whiteSpace: "nowrap", alignSelf: "flex-start" }} className="dc-luz-na-pratica-10">
                {v.cta}
              </a>
            </div>
          </div>
        </section>
        <footer style={{ padding: "clamp(48px,(100cqw - 760px) * 999,64px) clamp(20px,5.5cqw,80px) clamp(32px,(760px - 100cqw) * 999,48px)", boxShadow: "inset 0 1px 0 #2a241f" }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: "32px 48px" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              <Image src="/m/assets/lnp/logo-areia.png" alt="luz na prática" style={{ height: "20px", width: "auto", display: "block", alignSelf: "flex-start" }} width={2000} height={263} sizes="(max-width: 768px) 100vw, 50vw" />
              <span style={{ font: "400 12px var(--fonte-mono)", letterSpacing: ".14em", color: "#B7A793" }}>
                UM CURSO DÉBORA GABRICH
              </span>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "16px 40px" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                <span style={{ font: "400 12px var(--fonte-mono)", letterSpacing: ".14em", color: "#D9A648" }}>
                  CONTATO
                </span>
                <Destino href="mailto:contato@deboragabrich.com.br" style={{ fontSize: "16px", color: "#F4F0E8", textDecoration: "none" }} pagina="luz-na-pratica">
                  contato@deboragabrich.com.br
                </Destino>
                <a href="https://instagram.com/deboragabrich" style={{ fontSize: "16px", color: "#F4F0E8", textDecoration: "none" }} target="_blank" rel="noopener noreferrer">
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
