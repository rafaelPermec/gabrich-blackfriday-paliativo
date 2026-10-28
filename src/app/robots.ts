import type { MetadataRoute } from 'next';
import { SITE } from '@/config/site';

export default function robots(): MetadataRoute.Robots {
  if (!SITE.indexar) return { rules: { userAgent: '*', disallow: '/' } };
  return {
    rules: { userAgent: '*', allow: '/', disallow: ['/obrigado', '/amostras/'] },
    sitemap: `${SITE.url}/sitemap.xml`,
  };
}
