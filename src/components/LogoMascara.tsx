import type { CSSProperties } from 'react';

interface Props { src: string; alt: string; largura: number; altura: number; cor: string; className?: string; style?: CSSProperties }

// Logo recolorida por máscara (a cor vem do layout, o desenho vem do SVG).
export function LogoMascara({ src, alt, largura, altura, cor, className, style }: Props) {
  const url = `url("${src}")`;
  return (
    <span
      role="img"
      aria-label={alt}
      className={className}
      style={{
        display: 'block', flexShrink: 0, width: largura, height: altura, background: cor,
        WebkitMaskImage: url, maskImage: url,
        WebkitMaskSize: 'contain', maskSize: 'contain',
        WebkitMaskRepeat: 'no-repeat', maskRepeat: 'no-repeat',
        WebkitMaskPosition: 'left center', maskPosition: 'left center',
        ...style,
      }}
    />
  );
}

// Proporções dos SVGs em /public/marca (viewBox)
export const LOGO = {
  lnp: { src: '/marca/luz-na-pratica.svg', alt: 'Luz na Prática', r: 1874 / 170 },
  mqc: { src: '/marca/mais-que-um-click.svg', alt: 'Mais que um Click', r: 1548 / 201 },
  adf: { src: '/marca/antes-da-foto.svg', alt: 'Antes da Foto', r: 655.5 / 79.04 },
  ne: { src: '/marca/no-estudio.svg', alt: 'No Estúdio', r: 755 / 123 },
  dg: { src: '/marca/debora-gabrich.svg', alt: 'Débora Gabrich', r: 916.8 / 98.4 },
} as const;
