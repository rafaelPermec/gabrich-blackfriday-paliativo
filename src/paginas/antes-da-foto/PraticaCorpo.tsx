'use client';
/* eslint-disable @typescript-eslint/no-explicit-any */
// Gerado a partir de "AdF Pratica Animada.dc.html" (manual) pelo conversor em _conversor/. Edite à vontade: este arquivo agora é código do site.
import { Fragment } from 'react';
import Image from 'next/image';
import { Destino } from '@/components/Destino';
import { ImagemReservada } from '@/components/ImagemReservada';

export function PraticaCorpo({ v }: { v: any }) {
  return (
    <>
      <div style={{ width: "100%", maxWidth: "720px", display: "flex", flexDirection: "column", gap: "10px" }}>
        <div style={{ display: "flex", gap: "4px", flexWrap: "wrap" }}>
          {(v.abas ?? []).map((a: any, aI: number) => (
            <Fragment key={aI}>
              <button onClick={a?.set} style={{ height: "40px", padding: "0 14px", border: "0", cursor: "pointer", font: "700 12px var(--fonte-corpo)", background: a?.bg, color: a?.fg, boxShadow: "inset 0 0 0 1px #6F482C" }}>
                {a?.label}
              </button>
            </Fragment>
          ))}
        </div>
        <div style={{ background: "#2A1F18", boxShadow: "inset 0 0 0 1px #4A423A", display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "12px", padding: "10px 14px", boxShadow: "inset 0 -1px 0 #4A423A", font: "400 10px var(--fonte-mono)", letterSpacing: ".12em", color: "#DDCBBA" }}>
            <span>
              ANTES-DA-FOTO.PDF
            </span>
            <span>
              {v.pag}
            </span>
          </div>
          <div style={{ containerType: "inline-size", position: "relative", width: "100%", aspectRatio: "794/600", overflow: "hidden", background: "#FFFFFF" }}>
            <img src={v.img} alt="" style={{ position: "absolute", left: "0", top: `${v.imgTop ?? ""}cqw`, width: "100cqw", display: "block" }} />
            {(v.campos ?? []).map((c: any, cI: number) => (
              <Fragment key={cI}>
                <div style={{ position: "absolute", left: `${c?.x ?? ""}cqw`, top: `${c?.y ?? ""}cqw`, width: `${c?.w ?? ""}cqw`, height: `${c?.h ?? ""}cqw`, borderRadius: c?.r, boxShadow: c?.ring, background: c?.bg, display: "flex", alignItems: "center", justifyContent: c?.jc, padding: "0 1.4cqw", boxSizing: "border-box", font: "400 1.76cqw/1.2 var(--fonte-corpo)", color: c?.fg, whiteSpace: "nowrap", overflow: "hidden" }}>
                  {c?.txt}
                </div>
              </Fragment>
            ))}
            {v.pop ? (
              <>
                <div style={{ position: "absolute", left: `${v.popX ?? ""}cqw`, top: `${v.popY ?? ""}cqw`, display: "flex", gap: "1cqw", padding: "1.2cqw", background: "#FFFFFF", borderRadius: "1.3cqw", boxShadow: "0 0 0 1px #DDCBBA" }}>
                  {(v.popCores ?? []).map((p: any, pI: number) => (
                    <Fragment key={pI}>
                      <span style={{ width: "2.6cqw", height: "2.6cqw", borderRadius: "50%", background: p?.c, boxShadow: p?.ring }} />
                    </Fragment>
                  ))}
                </div>
              </>
            ) : null}
            <div style={{ position: "absolute", left: `${v.cx ?? ""}cqw`, top: `${v.cy ?? ""}cqw`, width: "2.6cqw", transition: "left .55s cubic-bezier(.4,0,.2,1),top .55s cubic-bezier(.4,0,.2,1)", pointerEvents: "none" }}>
              <svg viewBox="0 0 16 22" style={{ width: "100%", display: "block" }}>
                <path d="M1 1 L1 17 L5 13 L8 20 L11 19 L8 12 L14 12 Z" fill="#0B0B0B" stroke="#FFFFFF" strokeWidth="1.2" strokeLinejoin="round" />
              </svg>
            </div>
            {v.saved ? (
              <>
                <div style={{ position: "absolute", right: "3cqw", bottom: "3cqw", background: "#0B0B0B", color: "#DDCBBA", padding: "1.2cqw 2cqw", font: "700 max(9px,1.5cqw) var(--fonte-mono)", letterSpacing: ".12em" }}>
                  SALVO NO SEU PDF
                </div>
              </>
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
}
