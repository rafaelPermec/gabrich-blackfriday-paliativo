'use client';
/* eslint-disable @typescript-eslint/no-explicit-any */
// Gerado a partir de "AdF Folheador.dc.html" (manual) pelo conversor em _conversor/. Edite à vontade: este arquivo agora é código do site.
import { Fragment } from 'react';
import Image from 'next/image';
import { Destino } from '@/components/Destino';
import { ImagemReservada } from '@/components/ImagemReservada';
import './FolheadorCorpo.hover.css';

export function FolheadorCorpo({ v }: { v: any }) {
  return (
    <>
      <div style={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center", gap: "14px" }}>
        <div ref={v.boxRef} style={{ width: "100%", maxWidth: "480px", perspective: "2000px" }}>
          {v.wide ? (
            <>
              <div style={{ position: "relative", display: "grid", gridTemplateColumns: "1fr 1fr", transform: `translateX(${v.shift ?? ""}%)`, transition: "transform .8s cubic-bezier(.45,.05,.25,1)" }}>
                {v.showLeft ? (
                  <>
                    <img src={v.leftSrc} alt="" onClick={v.prev} style={{ width: "100%", aspectRatio: "794/1123", display: "block", background: "#FFFFFF", cursor: "w-resize", boxShadow: "inset -1px 0 0 #D3CABB" }} />
                  </>
                ) : null}
                {v.noLeft ? (
                  <>
                    <div />
                  </>
                ) : null}
                <img src={v.rightSrc} alt="" onClick={v.next} style={{ width: "100%", aspectRatio: "794/1123", display: "block", background: "#FFFFFF", cursor: "e-resize" }} />
                {v.flipping ? (
                  <>
                    <div style={{ position: "absolute", top: "0", bottom: "0", left: v.lLeft, width: "50%", transformStyle: "preserve-3d", transformOrigin: v.lOrigin, transform: `rotateY(${v.ang ?? ""}deg)`, transition: v.trans, pointerEvents: "none" }}>
                      <img src={v.frontSrc} alt="" style={{ position: "absolute", inset: "0", width: "100%", height: "100%", display: "block", background: "#FFFFFF", backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden" }} />
                      <img src={v.backSrc} alt="" style={{ position: "absolute", inset: "0", width: "100%", height: "100%", display: "block", background: "#FFFFFF", transform: "rotateY(180deg)", backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden" }} />
                    </div>
                  </>
                ) : null}
              </div>
            </>
          ) : null}
          {v.narrow ? (
            <>
              <div style={{ position: "relative", maxWidth: "260px", margin: "0 auto" }}>
                <img src={v.singleSrc} alt="" onClick={v.next} style={{ width: "100%", aspectRatio: "794/1123", display: "block", background: "#FFFFFF" }} />
                {v.flipping ? (
                  <>
                    <div style={{ position: "absolute", inset: "0", transformStyle: "preserve-3d", transformOrigin: "left center", transform: `rotateY(${v.ang ?? ""}deg)`, transition: v.trans, pointerEvents: "none" }}>
                      <img src={v.frontSrc} alt="" style={{ position: "absolute", inset: "0", width: "100%", height: "100%", display: "block", background: "#FFFFFF", backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden" }} />
                      <div style={{ position: "absolute", inset: "0", background: "#F3EDE5", transform: "rotateY(180deg)", backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden" }} />
                    </div>
                  </>
                ) : null}
              </div>
            </>
          ) : null}
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <button onClick={v.prev} style={{ width: "44px", height: "44px", border: "0", cursor: "pointer", background: "transparent", boxShadow: "inset 0 0 0 1px #6F482C", color: "#DDCBBA", font: "700 17px var(--fonte-corpo)" }} className="dc-antes-da-foto-folheadorcorpo-1">
            ←
          </button>
          <span style={{ font: "400 10px var(--fonte-mono)", letterSpacing: ".14em", color: "#DDCBBA", minWidth: "130px", textAlign: "center" }}>
            {v.label}
          </span>
          <button onClick={v.next} style={{ width: "44px", height: "44px", border: "0", cursor: "pointer", background: "#D39858", color: "#0B0B0B", font: "700 17px var(--fonte-corpo)" }} className="dc-antes-da-foto-folheadorcorpo-2">
            →
          </button>
        </div>
      </div>
    </>
  );
}
