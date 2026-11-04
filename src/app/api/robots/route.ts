import { NextResponse } from 'next/server';

export async function GET() {
  const body = `User-agent: *
Allow: /

Sitemap: https://y71-apk.com.pk/sitemap-index.xml
Sitemap: https://y71-apk.com.pk/sitemap.xml
Sitemap: https://y71-apk.com.pk/image-sitemap.xml
Sitemap: https://y71-apk.com.pk/api/sitemap
`;
  return new NextResponse(body, {
    headers: { 'Content-Type': 'text/plain' },
  });
}
