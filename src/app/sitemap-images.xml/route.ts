import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function GET() {
  const baseUrl = 'https://templata.org';

  // Key images for SEO
  const images = [
    {
      loc: `${baseUrl}/og-image.png`,
      title: 'Templata - Life Planning Platform',
      caption: 'Expert-crafted planning guides for life\'s biggest moments',
    },
    {
      loc: `${baseUrl}/favicon.svg`,
      title: 'Templata Logo',
      caption: 'Templata brand logo icon',
    },
    {
      loc: `${baseUrl}/geometric-monuments.webp`,
      title: 'Life Planning Milestones',
      caption: 'Visual representation of major life planning moments',
    },
    {
      loc: `${baseUrl}/logo.png`,
      title: 'Templata Full Logo',
      caption: 'Templata official brand logo',
    },
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
  ${images.map(img => `
  <url>
    <loc>${baseUrl}</loc>
    <image:image>
      <image:loc>${img.loc}</image:loc>
      <image:title>${img.title}</image:title>
      <image:caption>${img.caption}</image:caption>
    </image:image>
  </url>`).join('')}
</urlset>`;

  return new NextResponse(xml, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, s-maxage=86400, stale-while-revalidate',
    },
  });
}
