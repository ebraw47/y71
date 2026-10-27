import { NextResponse } from 'next/server';

export async function GET() {
  const body = `User-agent: *
Allow: /

Sitemap: https://y71.net.pk/sitemap-index.xml
Sitemap: https://y71.net.pk/sitemap.xml
Sitemap: https://y71.net.pk/image-sitemap.xml
Sitemap: https://y71.net.pk/api/sitemap
`;
  return new NextResponse(body, {
    headers: { 'Content-Type': 'text/plain' },
  });
}
