import Link from 'next/link';
import type { ReactNode } from 'react';
import { LOGOS, type Marca } from '@/config/marcas';
import s from './Cabecalho.module.css';

interface Props {
  marca: Marca;
  hrefLogo: string;
  acao: ReactNode; // botão pequeno à direita (LinkConversao ou âncora)
  faixa?: ReactNode; // faixa do topo / FaixaBlack
  alturaLogo?: number;
}

// Manual · 2 · 05.10. Igual com e sem Black Friday; a faixa sobe junto com o cabeçalho.
export function Cabecalho({ marca, hrefLogo, acao, faixa, alturaLogo }: Props) {
  const logo = LOGOS[marca];
  const altura = alturaLogo ?? (marca === 'no-estudio' ? 20 : 18);
  return (
    <header className={s.topo}>
      {faixa}
      <div className={s.barra}>
        <Link href={hrefLogo} className={s.logo} aria-label={`${logo.alt} · início`}>
          {/* SVG direto: sem otimização de imagem e sem layout shift */}
          <img src={logo.src} alt={logo.alt} height={altura} width={Math.round(altura * logo.proporcao)} fetchPriority="high" />
        </Link>
        <div className={s.acao}>{acao}</div>
      </div>
    </header>
  );
}
