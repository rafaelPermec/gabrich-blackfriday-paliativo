'use client';
/* eslint-disable @typescript-eslint/no-explicit-any */
// Gerado a partir de "AdF Faixa Fase.dc.html" (manual) pelo conversor em _conversor/. Edite à vontade: este arquivo agora é código do site.
import { Fragment } from 'react';
import Image from 'next/image';
import { Destino } from '@/components/Destino';
import { ImagemReservada } from '@/components/ImagemReservada';
import './FaixaFaseCorpo.hover.css';

export function FaixaFaseCorpo({ v }: { v: any }) {
  return (
    <>
      <div ref={v.wRef} style={{ width: "100%" }}>
        {v.isLista ? (
          <>
            <Destino href="#lista-espera-bf" style={{ display: "flex", alignItems: "center", justifyContent: "center", background: v.bf, color: "#0B0B0B", padding: "11px 20px", textAlign: "center", font: "700 12px var(--fonte-mono)", letterSpacing: ".14em", textDecoration: "none" }} pagina="antes-da-foto">
              {v.listaTxt}
            </Destino>
          </>
        ) : null}
        {v.isAbertura ? (
          <>
            <div style={{ background: v.bf, color: "#0B0B0B", padding: "11px 0", overflow: "hidden", whiteSpace: "nowrap", font: "700 12px var(--fonte-mono)", letterSpacing: ".14em" }}>
              BLACK FRIDAY · 50% DE DESCONTO · ATÉ 27.11 · BLACK FRIDAY · 50% DE DESCONTO · ATÉ 27.11 · BLACK FRIDAY · 50% DE DESCONTO · ATÉ 27.11 · BLACK FRIDAY · 50% DE DESCONTO · ATÉ 27.11 ·
            </div>
          </>
        ) : null}
        {v.showCounter ? (
          <>
            <div style={{ background: "#2A1F18", padding: "14px 20px", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "center", gap: "12px 28px", boxShadow: "inset 0 -1px 0 #4A423A" }}>
              <span style={{ font: "900 14px var(--fonte-urbanist)", letterSpacing: ".03em", textTransform: "uppercase", color: "#F4F0E8", whiteSpace: "nowrap" }}>
                {v.frase}
              </span>
              <div style={{ display: "flex", gap: "14px", alignItems: "baseline" }}>
                {(v.digitos ?? []).map((d: any, dI: number) => (
                  <Fragment key={dI}>
                    <div style={{ display: "flex", alignItems: "baseline", gap: "3px" }}>
                      <span style={{ font: "600 26px/1 var(--fonte-urbanist)", letterSpacing: "-.02em", color: v.bf }}>
                        {d?.n}
                      </span>
                      <span style={{ font: "400 9px var(--fonte-mono)", letterSpacing: ".1em", color: "#DDCBBA" }}>
                        {d?.u}
                      </span>
                    </div>
                  </Fragment>
                ))}
              </div>
              <a style={{ height: "44px", display: "flex", alignItems: "center", padding: "0 16px", background: v.bf, color: "#0B0B0B", font: "700 13px var(--fonte-corpo)", textDecoration: "none", whiteSpace: "nowrap" }} className="dc-antes-da-foto-faixafasecorpo-1" href="#oferta">
                {v.cta}
              </a>
            </div>
          </>
        ) : null}
        {v.isEncerrado ? (
          <>
            <div style={{ background: "#2A1F18", color: "#DDCBBA", padding: "12px 20px", textAlign: "center", font: "400 11px var(--fonte-mono)", letterSpacing: ".14em", boxShadow: "inset 0 -1px 0 #4A423A" }}>
              A BLACK FRIDAY ACABOU. O E-BOOK CONTINUA DISPONÍVEL.
            </div>
          </>
        ) : null}
      </div>
    </>
  );
}
