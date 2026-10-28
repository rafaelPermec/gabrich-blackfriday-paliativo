// Logos sempre como imagem. Proporção tirada do viewBox de cada SVG.
export interface Logo { src: string; alt: string; proporcao: number }

export const LOGOS = {
  'debora-gabrich': { src: '/marca/debora-gabrich.svg', alt: 'Débora Gabrich', proporcao: 916.8 / 98.4 },
  'antes-da-foto': { src: '/marca/antes-da-foto.svg', alt: 'Antes da Foto', proporcao: 655.5 / 79.04 },
  'luz-na-pratica': { src: '/marca/luz-na-pratica.svg', alt: 'Luz na Prática', proporcao: 1874 / 170 },
  'mais-que-um-click': { src: '/marca/mais-que-um-click.svg', alt: 'Mais que um Click', proporcao: 1548 / 201 },
  'no-estudio': { src: '/marca/no-estudio.svg', alt: 'No Estúdio', proporcao: 755 / 123 },
} satisfies Record<string, Logo>;

export type Marca = keyof typeof LOGOS;

export type Tema =
  | 'dg' | 'dg-claro' | 'lp' | 'lp-claro' | 'mqc' | 'mqc-claro'
  | 'adf' | 'adf-claro' | 'ne' | 'ne-claro';
