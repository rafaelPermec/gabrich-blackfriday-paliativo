'use client';
import NextLink from 'next/link';
import type { AnchorHTMLAttributes } from 'react';
import { LINK_POR_ID } from '@/config/links';
import { ROTAS } from '@/config/site';
import { LinkConversao } from './LinkConversao';

// Destinos usados no manual (âncoras de marcação) -> rotas reais do site.
const ROTA_POR_ANCORA: [RegExp, string][] = [
  [/^#a4-lp/, ROTAS['luz-na-pratica']],
  [/^#a4-mqc/, ROTAS['mais-que-um-click']],
  [/^#a4-adf/, ROTAS['antes-da-foto']],
  [/^#a4-ne/, ROTAS['no-estudio']],
  [/^#a4-mentoria/, ROTAS.mentoria],
  [/^#a4-cursos/, ROTAS.cursos],
  [/^#obrigado$/, `${ROTAS.obrigado}?curso=no-estudio`],
];

interface Props extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> {
  href?: string;
  pagina: string;
  posicao?: string;
}

/** Resolve qualquer href vindo do layout: checkout/inscrição/e-mail viram LinkConversao (UTM + evento). */
export function Destino({ href = '', pagina, posicao, children, ...resto }: Props) {
  const id = href.replace(/^#/, '');
  const pos = posicao ?? (resto['aria-label'] as string | undefined) ?? 'botao';
  if (LINK_POR_ID[id]) {
    const link = LINK_POR_ID[id]!;
    if (id === 'instagram') return <a {...resto} href={link.url} target="_blank" rel="noopener noreferrer">{children}</a>;
    return <LinkConversao {...resto} link={link} pagina={pagina} posicao={pos} evento={id === 'contato' ? 'Contact' : 'InitiateCheckout'}>{children}</LinkConversao>;
  }
  if (href.startsWith('mailto:')) {
    return <LinkConversao {...resto} link={{ name: 'E-mail', url: href }} pagina={pagina} posicao={pos} evento="Contact">{children}</LinkConversao>;
  }
  for (const [re, rota] of ROTA_POR_ANCORA) if (re.test(href)) return <NextLink {...resto} href={rota}>{children}</NextLink>;
  if (href.startsWith('/')) return <NextLink {...resto} href={href}>{children}</NextLink>;
  return <a {...resto} href={href || undefined}>{children}</a>;
}
