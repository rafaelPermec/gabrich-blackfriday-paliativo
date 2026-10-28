import localFont from 'next/font/local';

// Licença própria da Débora. Converter para .woff2 antes do deploy (PLANO.md · 9).
export const blackMango = localFont({
  src: '../../fontes/BlackMango-Regular.otf',
  weight: '400',
  variable: '--f-black-mango',
  display: 'swap',
});
