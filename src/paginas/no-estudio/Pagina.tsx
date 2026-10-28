'use client';
import { useState } from 'react';
import { Corpo } from './Corpo';
import { DIAS, FAQ_NE, MODS } from './dados';

// Estado da página (portado da lógica do arquivo "NE Pagina - Manual v2").
export function PaginaNE({ fase }: { fase: 'lista' | 'vagas' }) {
  const [faq, setFaq] = useState(-1);
  const lista = fase === 'lista';
  const v = {
    comLista: lista,
    cta: lista ? 'entrar na lista de espera' : 'quero me inscrever no workshop',
    ctaCurto: lista ? 'entrar na lista' : 'quero me inscrever',
    ctaHref: lista ? '#lista' : '#oferta',
    modulos: MODS.map(([n, t, i]) => ({ n, t, img: `/m/assets/ne/${i}.jpg` })),
    dias: DIAS,
    faq: FAQ_NE.map(([p, r], i) => ({ p, r, aberto: faq === i, sinal: faq === i ? '−' : '+', toggle: () => setFaq(faq === i ? -1 : i) })),
  };
  return <Corpo v={v} />;
}
