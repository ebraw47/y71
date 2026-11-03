import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import DownloadButton from '@/components/DownloadButton';
import BlogPostSchema from '@/components/BlogPostSchema';
import RelatedGuides from '@/components/RelatedGuides';
import { SITE_URL } from '@/lib/constants';

export const metadata: Metadata = {
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  title: 'Y71 Bonus & Promotions Guide 2026',
  description: 'Y71 first deposit bonus up to 30%, daily check-in, lucky wheel, VIP rebates and how to claim offers safely in Pakistan.',
  keywords: [
    'Y71 bonus',
    'Y71 first deposit bonus',
    'Y71 promotions',
    'Y71 daily check-in',
    'Y71 welcome bonus'
  ],
  alternates: { canonical: `${SITE_URL}/blog/y71-bonus-promotions-guide` },
  openGraph: {
    title: 'Y71 Bonus & Promotions Guide 2026',
    description: 'Y71 first deposit bonus up to 30%, daily check-in, lucky wheel, VIP rebates and how to claim offers safely in Pakistan.',
    url: `${SITE_URL}/blog/y71-bonus-promotions-guide`,
    siteName: 'Y71',
    type: 'article',
    images: [{ url: `${SITE_URL}/y71-home.webp`, width: 1200, height: 630, alt: 'Y71 Bonus & Promotions Guide 2026' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Y71 Bonus & Promotions Guide 2026',
    description: 'Y71 first deposit bonus up to 30%, daily check-in, lucky wheel, VIP rebates and how to claim offers safely in Pakistan.',
  },
};

export default function Page() {
  return (
    <article className="container mx-auto px-4 py-12 max-w-3xl">
      <BlogPostSchema
        title='Y71 Bonus & Promotions Guide 2026'
        description='Y71 first deposit bonus up to 30%, daily check-in, lucky wheel, VIP rebates and how to claim offers safely in Pakistan.'
        slug="y71-bonus-promotions-guide"
        datePublished="2026-11-03"
        image={`${SITE_URL}/y71-home.webp`}
      />
      <nav className="text-sm text-gray-400 mb-6">
        <Link href="/" className="hover:text-accent">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/blog" className="hover:text-accent">Blog</Link>
        <span className="mx-2">/</span>
        <span className="text-gray-300">Y71 Bonus & Promotions Guide 2026</span>
      </nav>
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Y71 Bonus & Promotions Guide 2026</h1>
      <p className="text-gray-400 text-sm mb-8">Updated November 2026 · Y71 Pakistan guide</p>
      <div className="relative w-full max-w-md mx-auto mb-10 rounded-xl overflow-hidden border border-gray-800">
        <Image src="/y71-home.webp" alt="Y71 Bonus & Promotions Guide 2026" width={720} height={1280} className="w-full h-auto object-contain" priority />
      </div>
      <div className="prose prose-invert max-w-none space-y-5 text-gray-300 leading-relaxed text-lg">
        <p>Searches for <strong>Y71 bonus</strong> and <strong>Y71 first deposit bonus</strong> are among the most common in Pakistan. Offers live under Promo / Earn and change often — always read the in-app terms before you deposit.</p>
        <h2 className="text-2xl font-bold text-white mt-8">First deposit bonus (up to ~30%)</h2>
        <p>New accounts often see a tiered first-deposit reward marketed up to about 30%. Smaller deposits may keep a higher percent; larger tiers can show a lower effective rate even if the rupee reward looks bigger. Confirm the live deposit screen before paying.</p>
        <ol className="list-decimal pl-6 space-y-2">
          <li>Finish registration with your +92 number.</li>
          <li>Open Promo / Earn and check active first-deposit banners.</li>
          <li>Deposit via JazzCash, EasyPaisa or QR for the exact amount shown.</li>
          <li>Wait for Cash Balance and bonus credit before playing.</li>
        </ol>
        <h2 className="text-2xl font-bold text-white mt-8">Other common Y71 promotions</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Daily check-in</strong> — marketing often cites small daily rewards when the campaign is on.</li>
          <li><strong>Lucky wheel &amp; treasure boxes</strong> — spins and invite boxes when events are active.</li>
          <li><strong>VIP &amp; rebates</strong> — bet rebate, deposit rebate, cashback or loss relief may appear under Earn.</li>
          <li><strong>Invitation challenge</strong> — rewards tied to inviting friends (see the referral guide).</li>
        </ul>
        <h2 className="text-2xl font-bold text-white mt-8">Wagering &amp; withdrawal tips</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Bonus balances may need turnover before you can withdraw.</li>
          <li>Do not chase a missing promo — check Earn history, then contact 24/7 support with screenshots.</li>
          <li>Treat every bonus as entertainment marketing, not guaranteed income.</li>
        </ul>
        <p>Next: <Link href="/blog/y71-deposit-jazzcash-easypaisa-guide" className="text-accent hover:underline">deposit guide</Link> · <Link href="/blog/y71-referral-invite-code-guide" className="text-accent hover:underline">referral guide</Link>.</p>
      </div>
      <RelatedGuides slug="y71-bonus-promotions-guide" />
      <div className="mt-12 text-center">
        <DownloadButton size="lg" label="DOWNLOAD Y71 APK" />
        <p className="text-sm text-gray-500 mt-4">
          Official Pakistan site · Play responsibly · 18+ only
        </p>
      </div>
    </article>
  );
}
