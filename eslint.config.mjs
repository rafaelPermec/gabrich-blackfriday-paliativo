import nextVitals from 'eslint-config-next/core-web-vitals';
import nextTs from 'eslint-config-next/typescript';

const config = [
  ...nextVitals,
  ...nextTs,
  { ignores: ['.next/**', 'node_modules/**', 'scripts/**'] },
  // Logos são SVG com tamanho declarado; next/image não traz ganho aqui.
  { rules: { '@next/next/no-img-element': 'off' } },
];

export default config;
