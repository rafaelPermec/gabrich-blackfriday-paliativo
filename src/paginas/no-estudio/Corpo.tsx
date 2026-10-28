'use client';
/* eslint-disable @typescript-eslint/no-explicit-any */
// Gerado a partir de "NE Pagina - Manual v2.dc.html" (manual) pelo conversor em _conversor/. Edite à vontade: este arquivo agora é código do site.
import { Fragment } from 'react';
import Image from 'next/image';
import { Destino } from '@/components/Destino';
import { ImagemReservada } from '@/components/ImagemReservada';
import { DepoimentosPagina } from '@/components/DepoimentosPagina';
import { FormEnvio } from '@/components/lista/FormEnvio';
import { LISTA_ESPERA } from '@/config/links';
import './hover.css';

export function Corpo({ v }: { v: any }) {
  return (
    <>
      <div style={{ containerType: "inline-size", width: "100%", overflowX: "clip", background: "#302F2D", color: "#EEEAE3", font: "400 16px/1.7 var(--fonte-corpo)" }}>
        <header style={{ position: "sticky", top: "0", zIndex: "60", background: "#302F2D", boxShadow: "inset 0 -1px 0 #847C74" }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto", height: "64px", padding: "0 clamp(20px,5.5cqw,80px)", boxSizing: "content-box", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "clamp(12px,2cqw,24px)" }}>
            <img src="/m/exportacoes-2026/no-estudio/logos/svg/no-estudio_logo_horizontal_creme.svg" alt="no estúdio" style={{ height: "clamp(20px,(100cqw - 520px) * 999,28px)", width: "auto", maxWidth: "46%", minWidth: "0", flexShrink: "1", objectFit: "contain", objectPosition: "left center", display: "block" }} />
            <Destino href={v.ctaHref} style={{ flexShrink: "0", height: "44px", padding: "0 clamp(12px,2cqw,16px)", display: "flex", alignItems: "center", background: "#D57D3D", color: "#202020", font: "600 12px var(--fonte-corpo)", letterSpacing: ".16em", textTransform: "uppercase", textDecoration: "none", whiteSpace: "nowrap" }} className="dc-no-estudio-1" pagina="no-estudio">
              {v.ctaCurto}
            </Destino>
          </div>
        </header>
        <section data-screen-label="01 Hero" style={{ position: "relative", display: "grid", minHeight: "clamp(min(72svh,620px),(760px - 100cqw) * 999,min(90svh,760px))", overflow: "hidden", background: "#302F2D" }}>
          <Image src="/m/assets/ne/hero.jpg" alt="Débora Gabrich" style={{ gridArea: "1/1", position: "absolute", top: "0", right: "0", height: "clamp(52%,(100cqw - 760px) * 999,100%)", width: "clamp(min(62%,760px),(760px - 100cqw) * 999,100%)", objectFit: "cover", objectPosition: "60% 25%", display: "block" }} width={597} height={790} sizes="(max-width: 768px) 100vw, 50vw" priority />
          <div style={{ gridArea: "1/1", position: "absolute", inset: "0", background: "linear-gradient(90deg,#302F2D 0%,#302F2D clamp(0%,(100cqw - 760px) * 999,38%),rgba(48,47,45,.75) clamp(0%,(100cqw - 760px) * 999,55%),rgba(48,47,45,0) clamp(0%,(100cqw - 760px) * 999,78%)),linear-gradient(0deg,#302F2D 0%,#302F2D clamp(35%,(760px - 100cqw) * 999,0%),rgba(48,47,45,0) clamp(35%,(760px - 100cqw) * 999,58%))" }} />
          <div style={{ gridArea: "1/1", position: "relative", display: "flex", flexDirection: "column", justifyContent: "center", gap: "clamp(20px,2.4cqw,28px)", padding: "clamp(40px,5cqw,72px) clamp(20px,5.5cqw,80px)", paddingTop: "clamp(40px,(760px - 100cqw) * 999,min(60cqw,420px))", maxWidth: "640px" }}>
            <div style={{ font: "400 11px var(--fonte-mono)", letterSpacing: ".2em", color: "#D57D3D" }}>
              WORKSHOP PRESENCIAL · FOTOGRAFIA DE PRODUTOS
            </div>
            <img src="/m/exportacoes-2026/no-estudio/logos/svg/no-estudio_logo_horizontal_creme.svg" alt="no estúdio" style={{ width: "min(440px,100%)", height: "auto", display: "block" }} />
            <p style={{ margin: "0", maxWidth: "460px", font: "400 clamp(18px,1.8cqw,22px)/1.5 var(--fonte-tenor)", color: "#EEEAE3", textWrap: "pretty" }}>
              Dois dias no estúdio da Débora, em Belo Horizonte, com prática. Vagas limitadas.
            </p>
            <Destino href={v.ctaHref} style={{ alignSelf: "flex-start", display: "inline-flex", alignItems: "center", justifyContent: "center", height: "64px", padding: "0 clamp(20px,2.4cqw,30px)", background: "#D57D3D", color: "#202020", font: "600 clamp(12px,1.2cqw,14px) var(--fonte-corpo)", letterSpacing: ".14em", textTransform: "uppercase", textDecoration: "none", whiteSpace: "nowrap" }} className="dc-no-estudio-2" pagina="no-estudio">
              {v.cta}
            </Destino>
          </div>
        </section>
        <section data-screen-label="02 Data" style={{ background: "#EEEAE3", color: "#876851", padding: "clamp(24px,3cqw,40px) clamp(20px,5.5cqw,80px)", textAlign: "center" }}>
          <p style={{ margin: "0", font: "400 clamp(22px,2.6cqw,34px)/1.3 var(--fonte-tenor)" }}>
            data à confirmar, em Belo Horizonte
          </p>
        </section>
        {v.comLista ? (
          <>
            <section id="lista" data-screen-label="02b Lista de espera" style={{ background: "#E9E1D8", color: "#202020", padding: "clamp(48px,6cqw,88px) clamp(20px,5.5cqw,80px)", boxShadow: "inset 0 1px 0 #A99583" }}>
              <div style={{ maxWidth: "1100px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,340px),1fr))", gap: "clamp(32px,5cqw,72px)", alignItems: "start" }}>
                <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                  <div style={{ font: "400 11px var(--fonte-mono)", letterSpacing: ".2em", color: "#876851" }}>
                    LISTA DE ESPERA · SEMPRE ABERTA
                  </div>
                  <h2 style={{ margin: "0", font: "400 clamp(40px,5cqw,64px)/.95 var(--fonte-black-mango)", color: "#202020" }}>
                    entre na lista
                  </h2>
                  <p style={{ margin: "0", maxWidth: "420px", font: "400 18px/1.5 var(--fonte-tenor)", color: "#302F2D" }}>
                    Quando abrir uma turma, quem está na lista fica sabendo primeiro.
                  </p>
                </div>
                <FormEnvio form={LISTA_ESPERA["no-estudio"]} origem="no-estudio" style={{ display: "flex", flexDirection: "column", gap: "14px", width: "100%" }}>
                  <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                    <span style={{ font: "400 9px var(--fonte-mono)", letterSpacing: ".12em", textTransform: "uppercase", color: "#876851" }}>
                      nome
                    </span>
                    <input type="text" name={LISTA_ESPERA["no-estudio"].campos.nome} required autoComplete="name" placeholder="seu nome" style={{ height: "48px", boxSizing: "border-box", padding: "12px 16px", border: "0", boxShadow: "inset 0 0 0 1px #847C74", background: "transparent", font: "400 15px var(--fonte-corpo)", color: "#202020", outline: "none", borderRadius: "0" }} className="dc-no-estudio-3" />
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                    <span style={{ font: "400 9px var(--fonte-mono)", letterSpacing: ".12em", textTransform: "uppercase", color: "#876851" }}>
                      e-mail
                    </span>
                    <input type="email" name={LISTA_ESPERA["no-estudio"].campos.email} required autoComplete="email" placeholder="seu@email.com" style={{ height: "48px", boxSizing: "border-box", padding: "12px 16px", border: "0", boxShadow: "inset 0 0 0 1px #847C74", background: "transparent", font: "400 15px var(--fonte-corpo)", color: "#202020", outline: "none", borderRadius: "0" }} className="dc-no-estudio-4" />
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                    <span style={{ font: "400 9px var(--fonte-mono)", letterSpacing: ".12em", textTransform: "uppercase", color: "#876851" }}>
                      whatsapp · opcional
                    </span>
                    <input type="tel" name={LISTA_ESPERA["no-estudio"].campos.whatsapp} autoComplete="tel" placeholder="(00) 00000-0000" style={{ height: "48px", boxSizing: "border-box", padding: "12px 16px", border: "0", boxShadow: "inset 0 0 0 1px #847C74", background: "transparent", font: "400 15px var(--fonte-corpo)", color: "#202020", outline: "none", borderRadius: "0" }} className="dc-no-estudio-5" />
                  </div>
                  <button type="submit" style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "56px", background: "#202020", color: "#EEEAE3", font: "600 13px var(--fonte-corpo)", letterSpacing: ".16em", textTransform: "uppercase", textDecoration: "none" , border: "0", cursor: "pointer", width: "100%" }} className="dc-no-estudio-6">
                    entrar na lista de espera
                  </button>
                  <span style={{ font: "400 12px/1.5 var(--fonte-corpo)", color: "#876851" }}>
                    Ao entrar na lista, você concorda em receber e-mails da Débora Gabrich. Dá pra sair quando quiser.
                  </span>
                </FormEnvio>
              </div>
            </section>
          </>
        ) : null}
        <section data-screen-label="03 O que você vai aprender" style={{ background: "#EEEAE3", color: "#202020", padding: "clamp(48px,6cqw,88px) 0", boxShadow: "inset 0 1px 0 #A99583" }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 clamp(20px,5.5cqw,80px)", display: "flex", flexDirection: "column", gap: "14px" }}>
            <div style={{ font: "400 11px var(--fonte-mono)", letterSpacing: ".2em", color: "#876851" }}>
              O QUE VOCÊ VAI APRENDER
            </div>
            <h2 style={{ margin: "0", font: "400 clamp(36px,4.6cqw,60px)/1 var(--fonte-black-mango)" }}>
              os módulos do workshop
            </h2>
          </div>
          <div style={{ display: "flex", gap: "12px", overflowX: "auto", scrollSnapType: "x mandatory", scrollbarWidth: "none", padding: "28px clamp(20px,5.5cqw,80px) 8px" }}>
            {(v.modulos ?? []).map((m: any, mI: number) => (
              <Fragment key={mI}>
                <div style={{ flex: "0 0 clamp(220px,24cqw,300px)", scrollSnapAlign: "start", display: "flex", flexDirection: "column", gap: "12px" }}>
                  <div style={{ aspectRatio: "4/5", borderRadius: "16px", overflow: "hidden", background: "#E9E1D8" }}>
                    <img src={m?.img} alt={m?.t} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                    <span style={{ font: "400 10px var(--fonte-mono)", letterSpacing: ".16em", color: "#876851" }}>
                      {m?.n}
                    </span>
                    <span style={{ font: "400 20px/1.25 var(--fonte-tenor)", color: "#202020" }}>
                      {m?.t}
                    </span>
                  </div>
                </div>
              </Fragment>
            ))}
          </div>
          <div style={{ display: "flex", justifyContent: "center", paddingTop: "28px" }}>
            <Destino href={v.ctaHref} style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", height: "64px", padding: "0 clamp(20px,2.4cqw,30px)", background: "#D57D3D", color: "#202020", font: "600 clamp(12px,1.2cqw,14px) var(--fonte-corpo)", letterSpacing: ".14em", textTransform: "uppercase", textDecoration: "none", whiteSpace: "nowrap" }} className="dc-no-estudio-7" pagina="no-estudio">
              {v.cta}
            </Destino>
          </div>
        </section>
        <section data-screen-label="04 Cronograma" style={{ padding: "clamp(48px,6cqw,88px) clamp(20px,5.5cqw,80px)" }}>
          <div style={{ maxWidth: "1000px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "clamp(28px,4cqw,44px)" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              <div style={{ font: "400 11px var(--fonte-mono)", letterSpacing: ".2em", color: "#D57D3D" }}>
                CRONOGRAMA
              </div>
              <h2 style={{ margin: "0", font: "400 clamp(36px,4.6cqw,60px)/1 var(--fonte-black-mango)" }}>
                dois dias no estúdio
              </h2>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,320px),1fr))", gap: "clamp(28px,4cqw,56px)" }}>
              {(v.dias ?? []).map((d: any, dI: number) => (
                <Fragment key={dI}>
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <div style={{ font: "400 12px var(--fonte-mono)", letterSpacing: ".14em", color: "#A99583", paddingBottom: "12px" }}>
                      {d?.t}
                    </div>
                    {(d?.itens ?? []).map((it: any, itI: number) => (
                      <Fragment key={itI}>
                        <div style={{ display: "flex", gap: "12px", alignItems: "baseline", padding: "12px 0", boxShadow: "inset 0 1px 0 #847C74" }}>
                          <span style={{ width: "7px", height: "7px", borderRadius: "50%", background: "#D57D3D", flexShrink: "0", transform: "translateY(-2px)" }} />
                          <span style={{ font: "400 16px/1.45 var(--fonte-tenor)" }}>
                            {it}
                          </span>
                        </div>
                      </Fragment>
                    ))}
                  </div>
                </Fragment>
              ))}
            </div>
          </div>
        </section>
        <section data-screen-label="05 Bônus" style={{ background: "#EEEAE3", color: "#202020", padding: "clamp(48px,6cqw,88px) clamp(20px,5.5cqw,80px)" }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "clamp(28px,4cqw,44px)" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              <div style={{ font: "400 11px var(--fonte-mono)", letterSpacing: ".2em", color: "#876851" }}>
                BÔNUS PARA ALUNOS
              </div>
              <h2 style={{ margin: "0", font: "400 clamp(36px,4.6cqw,60px)/1 var(--fonte-black-mango)" }}>
                o que vem junto
              </h2>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,280px),1fr))", gap: "16px" }}>
              <div style={{ background: "#E9E1D8", borderRadius: "16px", overflow: "hidden", display: "flex", flexDirection: "column" }}>
                <div style={{ aspectRatio: "3/2", background: "#302F2D url(\"/m/assets/ne/b1.jpg\") center/cover" }} />
                <div style={{ padding: "24px", display: "flex", flexDirection: "column", gap: "8px" }}>
                  <span style={{ font: "400 10px var(--fonte-mono)", letterSpacing: ".16em", color: "#876851" }}>
                    LUZ NA PRÁTICA
                  </span>
                  <span style={{ font: "400 24px/1.15 var(--fonte-black-mango)" }}>
                    30 dias de acesso
                  </span>
                  <p style={{ margin: "0", fontSize: "15px", color: "#302F2D" }}>
                    Um mês de acesso gratuito ao curso Luz na Prática. Pra você continuar estudando as técnicas de iluminação e praticando a sua luz.
                  </p>
                </div>
              </div>
              <div style={{ background: "#E9E1D8", borderRadius: "16px", overflow: "hidden", display: "flex", flexDirection: "column" }}>
                <div style={{ aspectRatio: "3/2", background: "#A99583 url(\"/m/assets/ne/b2.jpg\") center/contain no-repeat" }} />
                <div style={{ padding: "24px", display: "flex", flexDirection: "column", gap: "8px" }}>
                  <span style={{ font: "400 10px var(--fonte-mono)", letterSpacing: ".16em", color: "#876851" }}>
                    FUNDOLAB
                  </span>
                  <span style={{ font: "400 24px/1.15 var(--fonte-black-mango)" }}>
                    voucher de R$150
                  </span>
                  <p style={{ margin: "0", fontSize: "15px", color: "#302F2D" }}>
                    Pra você investir em um fundo fotográfico de altíssima qualidade com a textura e na cor que você escolher.
                  </p>
                </div>
              </div>
              <div style={{ background: "#E9E1D8", borderRadius: "16px", overflow: "hidden", display: "flex", flexDirection: "column" }}>
                <div style={{ aspectRatio: "3/2", background: "#876851 url(\"/m/assets/ne/b3.jpg\") center/contain no-repeat" }} />
                <div style={{ padding: "24px", display: "flex", flexDirection: "column", gap: "8px" }}>
                  <span style={{ font: "400 10px var(--fonte-mono)", letterSpacing: ".16em", color: "#876851" }}>
                    NO ESTÚDIO
                  </span>
                  <span style={{ font: "400 24px/1.15 var(--fonte-black-mango)" }}>
                    material extra
                  </span>
                  <p style={{ margin: "0", fontSize: "15px", color: "#302F2D" }}>
                    Material desenvolvido exclusivamente para o workshop: apostila do curso, lista de indicações e outros conteúdos pra você continuar praticando, aprendendo e desenvolvendo o seu fluxo de trabalho.
                  </p>
                </div>
              </div>
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <Destino href={v.ctaHref} style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", height: "64px", padding: "0 clamp(20px,2.4cqw,30px)", background: "#D57D3D", color: "#202020", font: "600 clamp(12px,1.2cqw,14px) var(--fonte-corpo)", letterSpacing: ".14em", textTransform: "uppercase", textDecoration: "none", whiteSpace: "nowrap" }} className="dc-no-estudio-8" pagina="no-estudio">
                {v.cta}
              </Destino>
            </div>
          </div>
        </section>
        <section data-screen-label="06 Depoimentos" style={{ padding: "clamp(48px,6cqw,88px) clamp(20px,5.5cqw,80px)" }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "clamp(28px,4cqw,44px)" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              <div style={{ font: "400 11px var(--fonte-mono)", letterSpacing: ".2em", color: "#D57D3D" }}>
                QUEM JÁ PASSOU PELO ESTÚDIO
              </div>
              <h2 style={{ margin: "0", font: "400 clamp(36px,4.6cqw,60px)/1 var(--fonte-black-mango)" }}>
                o que os alunos dizem
              </h2>
            </div>
            <DepoimentosPagina set="ne" />
            <div style={{ display: "flex" }}>
              <Destino href={v.ctaHref} style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", minHeight: "56px", padding: "0 24px", background: "#D57D3D", color: "#202020", font: "600 13px var(--fonte-corpo)", letterSpacing: ".16em", textTransform: "uppercase", textDecoration: "none", textAlign: "center" }} className="dc-no-estudio-9" pagina="no-estudio">
                {v.cta}
              </Destino>
            </div>
          </div>
        </section>
        <section data-screen-label="07 Projetos no estúdio" style={{ padding: "clamp(48px,6cqw,88px) 0", display: "flex", flexDirection: "column", gap: "clamp(20px,2.4cqw,28px)", background: "#202020" }}>
          <div style={{ maxWidth: "1200px", width: "100%", margin: "0 auto", padding: "0 clamp(20px,5.5cqw,80px)", boxSizing: "border-box", display: "flex", flexDirection: "column", gap: "14px" }}>
            <div style={{ font: "400 11px var(--fonte-mono)", letterSpacing: ".2em", color: "#D57D3D" }}>
              PROJETOS QUE ACONTECERAM NO ESTÚDIO
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
            <div style={{ overflowX: "auto", scrollbarWidth: "none" }}>
              <Image src="/m/assets/ne/proj1.jpg" alt="" style={{ height: "clamp(180px,22cqw,300px)", width: "auto", display: "block" }} width={1977} height={392} sizes="(max-width: 768px) 100vw, 50vw" />
            </div>
            <div style={{ overflowX: "auto", scrollbarWidth: "none" }}>
              <Image src="/m/assets/ne/proj2.jpg" alt="" style={{ height: "clamp(180px,22cqw,300px)", width: "auto", display: "block" }} width={1977} height={378} sizes="(max-width: 768px) 100vw, 50vw" />
            </div>
            <div style={{ overflowX: "auto", scrollbarWidth: "none" }}>
              <Image src="/m/assets/ne/proj3.jpg" alt="" style={{ height: "clamp(180px,22cqw,300px)", width: "auto", display: "block" }} width={1977} height={382} sizes="(max-width: 768px) 100vw, 50vw" />
            </div>
          </div>
        </section>
        <section id="oferta" data-screen-label="08 Inscrição" style={{ padding: "clamp(48px,6cqw,88px) clamp(20px,5.5cqw,80px)" }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,360px),1fr))", gap: "clamp(40px,5cqw,72px)", alignItems: "center" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "20px", maxWidth: "520px" }}>
              <div style={{ font: "400 11px var(--fonte-mono)", letterSpacing: ".2em", color: "#D57D3D" }}>
                VAGAS LIMITADAS
              </div>
              <h2 style={{ margin: "0", font: "400 clamp(36px,4.6cqw,60px)/1 var(--fonte-black-mango)" }}>
                para a próxima turma do workshop presencial
              </h2>
              <p style={{ margin: "0", font: "400 18px/1.5 var(--fonte-tenor)", color: "#EEEAE3" }}>
                em Belo Horizonte.
              </p>
            </div>
            <div style={{ width: "100%", maxWidth: "460px", justifySelf: "center", display: "flex", flexDirection: "column" }}>
              <div style={{ width: "100%", maxWidth: "460px", boxSizing: "border-box", background: "#202020", boxShadow: "inset 0 0 0 1px #847C74", borderRadius: "16px", padding: "clamp(28px,3cqw,40px) clamp(22px,3cqw,40px) 32px", display: "flex", flexDirection: "column", gap: "0" }}>
                <img src="/m/exportacoes-2026/no-estudio/logos/svg/no-estudio_logo_horizontal_creme.svg" alt="No Estúdio" style={{ height: "32px", width: "auto", maxWidth: "100%", alignSelf: "flex-start", display: "block" }} />
                <div style={{ fontFamily: "var(--fonte-mono)", fontSize: "11px", letterSpacing: "0.24em", textTransform: "uppercase", color: "#EEEAE3", paddingTop: "14px" }}>
                  WORKSHOP FOTOGRAFIA DE PRODUTOS
                </div>
                <div style={{ fontFamily: "var(--fonte-mono)", fontSize: "12px", lineHeight: "1.6", letterSpacing: "0.18em", textTransform: "uppercase", color: "#D57D3D", paddingTop: "20px" }}>
                  VAGAS LIMITADAS
                  <br />
                  PARA O WORKSHOP PRESENCIAL
                </div>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", gap: "6px", paddingTop: "24px" }}>
                  <div style={{ fontFamily: "var(--fonte-urbanist)", fontWeight: "700", fontSize: "clamp(34px,4.4cqw,52px)", textAlign: "center", alignSelf: "center", lineHeight: "1", letterSpacing: "-0.02em", color: "#EEEAE3", whiteSpace: "nowrap" }}>
                    <span style={{ fontSize: "0.42em", letterSpacing: "0.02em" }}>
                      12x 
                    </span>
                    R$ 160,00
                  </div>
                  <div style={{ fontFamily: "var(--fonte-urbanist)", fontWeight: "300", fontSize: "22px", textAlign: "center", alignSelf: "center", color: "#EEEAE3" }}>
                    ou R$ 1.547,00 à vista
                  </div>
                </div>
                <div style={{ height: "1px", background: "#847C74", margin: "28px 0 22px" }} />
                <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                  <div style={{ display: "flex", alignItems: "baseline", gap: "6px" }}>
                    <span aria-hidden="true" style={{ flex: "none", width: "0", height: "0", borderLeft: "7px solid #D57D3D", borderTop: "4.5px solid transparent", borderBottom: "4.5px solid transparent", transform: "translateY(-1px)", marginRight: "6px" }} />
                    <span style={{ fontFamily: "var(--fonte-corpo)", fontSize: "15px", lineHeight: "1.5", color: "#EEEAE3" }}>
                      02 dias de workshop presencial
                    </span>
                  </div>
                  <div style={{ display: "flex", alignItems: "baseline", gap: "6px" }}>
                    <span aria-hidden="true" style={{ flex: "none", width: "0", height: "0", borderLeft: "7px solid #D57D3D", borderTop: "4.5px solid transparent", borderBottom: "4.5px solid transparent", transform: "translateY(-1px)", marginRight: "6px" }} />
                    <span style={{ fontFamily: "var(--fonte-corpo)", fontSize: "15px", lineHeight: "1.5", color: "#EEEAE3" }}>
                      17 horas de conteúdo
                    </span>
                  </div>
                  <div style={{ display: "flex", alignItems: "baseline", gap: "6px" }}>
                    <span aria-hidden="true" style={{ flex: "none", width: "0", height: "0", borderLeft: "7px solid #D57D3D", borderTop: "4.5px solid transparent", borderBottom: "4.5px solid transparent", transform: "translateY(-1px)", marginRight: "6px" }} />
                    <span style={{ fontFamily: "var(--fonte-corpo)", fontSize: "15px", lineHeight: "1.5", color: "#EEEAE3" }}>
                      acesso a todos os bônus
                    </span>
                  </div>
                  <div style={{ display: "flex", alignItems: "baseline", gap: "6px" }}>
                    <span aria-hidden="true" style={{ flex: "none", width: "0", height: "0", borderLeft: "7px solid #D57D3D", borderTop: "4.5px solid transparent", borderBottom: "4.5px solid transparent", transform: "translateY(-1px)", marginRight: "6px" }} />
                    <span style={{ fontFamily: "var(--fonte-corpo)", fontSize: "15px", lineHeight: "1.5", color: "#EEEAE3" }}>
                      certificado de participação
                    </span>
                  </div>
                  <div style={{ display: "flex", alignItems: "baseline", gap: "6px" }}>
                    <span aria-hidden="true" style={{ flex: "none", width: "0", height: "0", borderLeft: "7px solid #D57D3D", borderTop: "4.5px solid transparent", borderBottom: "4.5px solid transparent", transform: "translateY(-1px)", marginRight: "6px" }} />
                    <span style={{ fontFamily: "var(--fonte-corpo)", fontSize: "15px", lineHeight: "1.5", color: "#EEEAE3" }}>
                      grupo de alunos no WhatsApp
                    </span>
                  </div>
                </div>
                <Destino href="#checkout-no-estudio" style={{ marginTop: "28px", display: "flex", alignItems: "center", justifyContent: "center", minHeight: "60px", padding: "0 20px", background: "#D57D3D", color: "#202020", fontFamily: "var(--fonte-corpo)", fontWeight: "600", textTransform: "uppercase", letterSpacing: "0.14em", fontSize: "13px", textDecoration: "none", textAlign: "center", borderRadius: "0" }} pagina="no-estudio">
                  quero me inscrever no workshop
                </Destino>
                <div style={{ fontFamily: "var(--fonte-mono)", fontSize: "11px", letterSpacing: "0.18em", textTransform: "uppercase", color: "#EEEAE3", textAlign: "center", paddingTop: "16px" }}>
                  PAGAMENTO SEGURO · GARANTIA DE 7 DIAS
                </div>
              </div>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "18px", paddingTop: "36px" }}>
                <div style={{ width: "72px", height: "72px", boxSizing: "border-box", boxShadow: "inset 0 0 0 1px #D57D3D", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "2px", flex: "none" }}>
                  <span style={{ fontFamily: "var(--fonte-black-mango)", fontWeight: "400", fontSize: "34px", lineHeight: "1", color: "#D57D3D" }}>
                    7
                  </span>
                  <span style={{ fontFamily: "var(--fonte-mono)", fontSize: "9px", letterSpacing: "0.2em", color: "#D57D3D" }}>
                    DIAS
                  </span>
                </div>
                <div style={{ fontFamily: "var(--fonte-corpo)", fontSize: "14px", lineHeight: "1.5", color: "#EEEAE3" }}>
                  <strong style={{ fontWeight: "700" }}>
                    Garantia de 7 dias.
                  </strong>
                  <br />
                  Se não for para você, devolvemos 100% do valor.
                </div>
              </div>
            </div>
          </div>
        </section>
        <section data-screen-label="09 Dúvidas" style={{ padding: "clamp(48px,6cqw,88px) clamp(20px,5.5cqw,80px)", boxShadow: "inset 0 1px 0 #847C74" }}>
          <div style={{ maxWidth: "880px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "28px" }}>
            <h2 style={{ margin: "0", font: "400 clamp(36px,4.6cqw,60px)/1 var(--fonte-black-mango)" }}>
              dúvidas?
            </h2>
            <div style={{ display: "flex", flexDirection: "column" }}>
              {(v.faq ?? []).map((q: any, qI: number) => (
                <Fragment key={qI}>
                  <div style={{ boxShadow: "inset 0 1px 0 #847C74" }}>
                    <div role="button" onClick={q?.toggle} style={{ display: "flex", justifyContent: "space-between", gap: "16px", alignItems: "center", padding: "20px 0", cursor: "pointer" }}>
                      <span style={{ font: "400 18px/1.4 var(--fonte-tenor)" }}>
                        {q?.p}
                      </span>
                      <span style={{ flex: "none", width: "32px", height: "32px", borderRadius: "50%", boxShadow: "inset 0 0 0 1px #A99583", display: "flex", alignItems: "center", justifyContent: "center", color: "#EEEAE3" }}>
                        {q?.sinal}
                      </span>
                    </div>
                    {q?.aberto ? (
                      <>
                        <p style={{ margin: "0", padding: "0 0 22px", fontSize: "15px", color: "#E9E1D8", textWrap: "pretty" }}>
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
        <section data-screen-label="10 Sobre" style={{ background: "#E9E1D8", color: "#202020", padding: "clamp(48px,6cqw,88px) clamp(20px,5.5cqw,80px)" }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,340px),1fr))", gap: "clamp(32px,5cqw,64px)", alignItems: "center" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
              <h2 style={{ margin: "0", font: "400 clamp(36px,4.6cqw,56px)/1.02 var(--fonte-black-mango)" }}>
                oie, eu sou a Débora Gabrich!
              </h2>
              <p style={{ margin: "0", fontSize: "17px", color: "#302F2D" }}>
                Fotógrafa publicitária, diretora criativa, creator e comunicóloga, formada em Publicidade e Propaganda.
              </p>
              <p style={{ margin: "0", fontSize: "17px", color: "#302F2D" }}>
                Essas seriam as primeiras coisas que eu diria sobre mim. Workaholic convicta, falar sobre o meu trabalho é quase como falar sobre quem eu sou.
              </p>
              <p style={{ margin: "0", fontSize: "17px", color: "#302F2D" }}>
                A fotografia sempre foi a minha forma preferida de enxergar a vida. Pra mim, uma foto não precisa apenas ser bonita: ela precisa contar uma história.
              </p>
              <p style={{ margin: "0", fontSize: "17px", color: "#302F2D" }}>
                Fotografo profissionalmente desde 2012 e, desde 2014, me dedico à fotografia de gastronomia e de produtos, com marcas como Nestlé, Granado, Outback, Catupiry, Vigor e Adobe. Do briefing à foto final, cada etapa é pensada para traduzir posicionamento e identidade visual em imagens que comunicam.
              </p>
              <p style={{ margin: "0", fontSize: "17px", color: "#302F2D" }}>
                No workshop, você passa dois dias aqui no estúdio comigo, aprendendo e praticando todo esse processo.
              </p>
            </div>
            <div style={{ aspectRatio: "4/5", maxWidth: "440px", justifySelf: "center", width: "100%", borderRadius: "16px", overflow: "hidden", background: "#302F2D url(\"/m/assets/ne/sobre.jpg\") center/cover" }} />
          </div>
        </section>
        <footer style={{ padding: "clamp(40px,5cqw,64px) clamp(20px,5.5cqw,80px)", boxShadow: "inset 0 1px 0 #847C74" }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: "32px 48px" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              <img src="/m/exportacoes-2026/no-estudio/logos/svg/no-estudio_logo_horizontal_creme.svg" alt="no estúdio" style={{ height: "22px", width: "auto", display: "block", alignSelf: "flex-start" }} />
              <span style={{ font: "400 12px var(--fonte-mono)", letterSpacing: ".14em", color: "#A99583" }}>
                UM CURSO DÉBORA GABRICH
              </span>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "16px 32px", fontSize: "15px" }}>
              <Destino href="mailto:contato@deboragabrich.com.br" style={{ color: "#EEEAE3", textDecoration: "none" }} pagina="no-estudio">
                contato
              </Destino>
              <a href="https://instagram.com/deboragabrich" style={{ color: "#EEEAE3", textDecoration: "none" }} target="_blank" rel="noopener noreferrer">
                @deboragabrich
              </a>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
