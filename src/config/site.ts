export const SITE = {
  nome: 'Débora Gabrich',
  url: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.deboragabrich.com',
  email: 'contato@deboragabrich.com.br',
  indexar: process.env.PERMITIR_INDEXACAO === 'true',
} as const;

export const ROTAS = {
  cursos: '/cursos',
  'antes-da-foto': '/cursos/antes-da-foto',
  'luz-na-pratica': '/cursos/luz-na-pratica',
  'mais-que-um-click': '/cursos/mais-que-um-click',
  'no-estudio': '/cursos/no-estudio',
  mentoria: '/cursos/mentoria',
  obrigado: '/obrigado',
  privacidade: '/privacidade',
} as const;

export type Rota = keyof typeof ROTAS;
