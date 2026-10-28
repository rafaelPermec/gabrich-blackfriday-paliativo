'use client';
import { useEffect, useState, type AnchorHTMLAttributes } from 'react';
import type { Link } from '@/config/links';
import { lerAtribuicaoDoNavegador, montarUrlCheckout } from '@/lib/atribuicao';
import { rastrear, type Evento } from '@/lib/analytics/eventos';

interface Props extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> {
  link: Link;
  pagina: string; // ex.: "cursos", "antes-da-foto"
  posicao: string; // ex.: "hero", "box-preco", "cabecalho"
  evento?: Evento;
  valor?: number;
}

/**
 * Todo botão que sai do site para converter (checkout, inscrição, e-mail).
 * No HTML do servidor o href é o link puro (bom para robôs e sem JS);
 * no navegador ganha UTM + sck + src antes do clique.
 */
export function LinkConversao({ link, pagina, posicao, evento = 'InitiateCheckout', valor, onClick, children, ...resto }: Props) {
  const [href, setHref] = useState(link.url);

  useEffect(() => {
    setHref(montarUrlCheckout(link.url, lerAtribuicaoDoNavegador(), { pagina, posicao }));
  }, [link.url, pagina, posicao]);

  return (
    <a
      {...resto}
      href={href}
      rel="noopener"
      data-link={link.name}
      onClick={(e) => {
        rastrear(evento, { content_name: link.name, ...(valor ? { value: valor, currency: 'BRL' } : {}) });
        onClick?.(e);
      }}
    >
      {children}
    </a>
  );
}
