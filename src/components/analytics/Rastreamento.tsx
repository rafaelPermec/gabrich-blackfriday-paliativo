'use client';
import Script from 'next/script';
import { usePathname } from 'next/navigation';
import { useEffect, useRef } from 'react';
import { useConsentimento } from '@/lib/analytics/consentimento';
import { idSeguro, rastrear } from '@/lib/analytics/eventos';
import { apagarAtribuicao, capturarDaUrl, gravarPrimeiroToque } from '@/lib/atribuicao';
import { BannerConsentimento } from './BannerConsentimento';

const CLARITY = idSeguro(process.env.NEXT_PUBLIC_CLARITY_ID);
const META = idSeguro(process.env.NEXT_PUBLIC_META_PIXEL_ID);
const HOTMART = idSeguro(process.env.NEXT_PUBLIC_HOTMART_PIXEL_ID);

function PageViewEntreRotas() {
  const caminho = usePathname();
  const primeira = useRef(true);
  useEffect(() => {
    if (primeira.current) { primeira.current = false; return; } // o snippet já conta a primeira
    rastrear('PageView');
  }, [caminho]);
  return null;
}

export function Rastreamento() {
  const c = useConsentimento();
  // Captura a UTM da chegada em memória; grava o cookie só com aceite de marketing.
  useEffect(() => { capturarDaUrl(); }, []);
  useEffect(() => {
    if (c?.marketing) gravarPrimeiroToque();
    else if (c) apagarAtribuicao();
  }, [c]);
  return (
    <>
      {c?.analise && CLARITY && (
        <Script id="clarity" strategy="lazyOnload">
          {`(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);})(window,document,"clarity","script","${CLARITY}");`}
        </Script>
      )}
      {c?.marketing && META && (
        <Script id="meta-pixel" strategy="afterInteractive">
          {`!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init','${META}');fbq('track','PageView');`}
        </Script>
      )}
      {c?.marketing && HOTMART && (
        // Marcador: substituir pelo script fornecido pela conta Hotmart (PLANO.md · 7).
        <Script id="hotmart-pixel" strategy="lazyOnload">{`/* hotmart pixel ${HOTMART} */`}</Script>
      )}
      {c && <PageViewEntreRotas />}
      {c === null && <BannerConsentimento />}
    </>
  );
}
