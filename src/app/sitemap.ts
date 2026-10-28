import type { MetadataRoute } from 'next';
import { ROTAS, SITE } from '@/config/site';

export default function sitemap(): MetadataRoute.Sitemap {
  return Object.entries(ROTAS)
    .filter(([k]) => k !== 'obrigado')
    .map(([, caminho]) => ({ url: `${SITE.url}${caminho}`, changeFrequency: 'weekly', priority: caminho === ROTAS.cursos ? 1 : 0.8 }));
}
