import type { APIRoute } from 'astro';

// Fora do Google até a troca de domínio (PUBLIC_SITE_LIVE=true no Cloudflare Pages).
export const GET: APIRoute = ({ site }) => {
  const live = import.meta.env.PUBLIC_SITE_LIVE === 'true';
  const body = live
    ? `User-agent: *\nAllow: /\n\nSitemap: ${new URL('sitemap.xml', site)}\n`
    : 'User-agent: *\nDisallow: /\n';
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
