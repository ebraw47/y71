import { NextResponse } from 'next/server';

const baseUrl = 'https://y71.net.pk';

const blogSlugs = [
  'y71-app-review-2026',
  'how-to-download-install-y71-apk-pakistan',
  'create-y71-account-and-login',
  'y71-deposit-jazzcash-easypaisa-guide',
  'y71-withdraw-money-guide',
  'is-y71-safe-legal-pakistan',
  'how-to-use-y71-app-pakistan-guide',
];

export async function GET() {
  type PageType = {
    url: string;
    lastMod: string;
    changeFreq: string;
    priority: number;
    images?: Array<{ loc: string; title: string; caption: string }>;
  };

  const now = new Date().toISOString();

  const mainPages: PageType[] = [
    {
      url: '/',
      lastMod: now,
      changeFreq: 'daily',
      priority: 1.0,
      images: [
        { loc: '/y71-hero-logo.webp', title: 'Y71 Game Logo', caption: 'Y71 Game Pakistan official logo' },
        { loc: '/y71-home.webp', title: 'Y71 Lobby', caption: 'Y71 invitation challenge lobby' },
        { loc: '/y71-deposit.webp', title: 'Y71 Deposit', caption: 'JazzCash and EasyPaisa deposit' },
        { loc: '/y71-withdraw.webp', title: 'Y71 Withdraw', caption: 'Withdraw with EasyPaisa JazzCash Bank' },
      ],
    },
    {
      url: '/download-y71',
      lastMod: now,
      changeFreq: 'weekly',
      priority: 0.95,
      images: [
        { loc: '/y71-logo.webp', title: 'Download Y71 APK', caption: 'Download Y71 Game APK v1.1.1' },
      ],
    },
    {
      url: '/deposit-money-in-y71',
      lastMod: now,
      changeFreq: 'weekly',
      priority: 0.9,
      images: [
        { loc: '/y71-deposit.webp', title: 'Y71 Deposit Guide', caption: 'Deposit with JazzCash EasyPaisa QR' },
      ],
    },
    { url: '/withdraw-money-from-y71', lastMod: now, changeFreq: 'weekly', priority: 0.9 },
    { url: '/y71-for-pc', lastMod: now, changeFreq: 'weekly', priority: 0.85 },
    { url: '/about-us', lastMod: now, changeFreq: 'monthly', priority: 0.7 },
    { url: '/blog', lastMod: now, changeFreq: 'weekly', priority: 0.8 },
    { url: '/contact-us', lastMod: now, changeFreq: 'monthly', priority: 0.7 },
    { url: '/privacy', lastMod: now, changeFreq: 'yearly', priority: 0.6 },
    { url: '/disclaimer', lastMod: now, changeFreq: 'yearly', priority: 0.6 },
  ];

  const blogPosts: PageType[] = blogSlugs.map((slug) => ({
    url: `/blog/${slug}`,
    lastMod: now,
    changeFreq: 'monthly',
    priority: 0.8,
  }));

  const allPages = [...mainPages, ...blogPosts];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
  ${allPages
    .map(
      (page) => `
  <url>
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${page.lastMod}</lastmod>
    <changefreq>${page.changeFreq}</changefreq>
    <priority>${page.priority}</priority>
    <mobile:mobile/>
    ${
      page.images
        ?.map(
          (img) => `
    <image:image>
      <image:loc>${baseUrl}${img.loc}</image:loc>
      <image:title>${img.title}</image:title>
      <image:caption>${img.caption}</image:caption>
    </image:image>`
        )
        .join('') || ''
    }
  </url>`
    )
    .join('')}
</urlset>`;

  return new NextResponse(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, s-maxage=86400',
    },
  });
}
