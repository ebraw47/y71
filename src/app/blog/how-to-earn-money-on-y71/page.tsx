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
  title: 'How to Earn Money on Y71 App (Pakistan)',
  description: 'Realistic guide to earning on Y71: play mini-games, claim check-ins, referrals, deposits, withdrawals and responsible limits for Pakistan.',
  keywords: [
    'how to earn money on Y71',
    'Y71 earn money',
    'Y71 real money',
    'Y71 earning app',
    'Y71 Pakistan earn'
  ],
  alternates: { canonical: `${SITE_URL}/blog/how-to-earn-money-on-y71` },
  openGraph: {
    title: 'How to Earn Money on Y71 App (Pakistan)',
    description: 'Realistic guide to earning on Y71: play mini-games, claim check-ins, referrals, deposits, withdrawals and responsible limits for Pakistan.',
    url: `${SITE_URL}/blog/how-to-earn-money-on-y71`,
    siteName: 'Y71',
    type: 'article',
    images: [{ url: `${SITE_URL}/y71-home.webp`, width: 1200, height: 630, alt: 'How to Earn Money on Y71 App (Pakistan)' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Earn Money on Y71 App (Pakistan)',
    description: 'Realistic guide to earning on Y71: play mini-games, claim check-ins, referrals, deposits, withdrawals and responsible limits for Pakistan.',
  },
};

export default function Page() {
  return (
    <article className="container mx-auto px-4 py-12 max-w-3xl">
      <BlogPostSchema
        title='How to Earn Money on Y71 App (Pakistan)'
        description='Realistic guide to earning on Y71: play mini-games, claim check-ins, referrals, deposits, withdrawals and responsible limits for Pakistan.'
        slug="how-to-earn-money-on-y71"
        datePublished="2026-11-03"
        image={`${SITE_URL}/y71-home.webp`}
      />
      <nav className="text-sm text-gray-400 mb-6">
        <Link href="/" className="hover:text-accent">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/blog" className="hover:text-accent">Blog</Link>
        <span className="mx-2">/</span>
        <span className="text-gray-300">How to Earn Money on Y71 App (Pakistan)</span>
      </nav>
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">How to Earn Money on Y71 App (Pakistan)</h1>
      <p className="text-gray-400 text-sm mb-8">Updated November 2026 · Y71 Pakistan guide</p>
      <div className="relative w-full max-w-md mx-auto mb-10 rounded-xl overflow-hidden border border-gray-800">
        <Image src="/y71-home.webp" alt="How to Earn Money on Y71 App (Pakistan)" width={720} height={1280} className="w-full h-auto object-contain" priority />
      </div>
      <div className="prose prose-invert max-w-none space-y-5 text-gray-300 leading-relaxed text-lg">
        <p>People searching <strong>how to earn money on Y71</strong> want a step-by-step path — not hype. Y71 is a play-and-earn lobby: results are never guaranteed, and you can lose deposits. Use this as a practical workflow only.</p>
        <h2 className="text-2xl font-bold text-white mt-8">Realistic earning paths</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Gameplay balance</strong> — win/loss from slots, fishing, cards, crash and tables after you deposit.</li>
          <li><strong>Promo credits</strong> — first deposit, daily check-in, lucky wheel and event boxes when active.</li>
          <li><strong>Referral / invite</strong> — rewards after friends join under Earn rules.</li>
          <li><strong>VIP / rebate</strong> — small cashback-style returns if listed in your account.</li>
        </ul>
        <h2 className="text-2xl font-bold text-white mt-8">Step-by-step for beginners</h2>
        <ol className="list-decimal pl-6 space-y-2">
          <li><Link href="/blog/how-to-download-install-y71-apk-pakistan" className="text-accent hover:underline">Install</Link> the official APK and register with +92.</li>
          <li>Claim any free check-in or download bonuses under Promo / Earn.</li>
          <li>If you deposit, start small via <Link href="/blog/y71-deposit-jazzcash-easypaisa-guide" className="text-accent hover:underline">JazzCash / EasyPaisa</Link>.</li>
          <li>Play short sessions with a fixed budget; stop when the limit hits.</li>
          <li>Meet bonus turnover, then <Link href="/blog/y71-withdraw-money-guide" className="text-accent hover:underline">withdraw</Link> to your own wallet.</li>
        </ol>
        <h2 className="text-2xl font-bold text-white mt-8">What does not work</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Mod / hack APKs promising unlimited balance</li>
          <li>Paying strangers to “unlock” withdrawals</li>
          <li>Treating Y71 like a salary or guaranteed side income</li>
        </ul>
        <p>18+ only. Set a loss limit before every session.</p>
      </div>
      <RelatedGuides slug="how-to-earn-money-on-y71" />
      <div className="mt-12 text-center">
        <DownloadButton size="lg" label="DOWNLOAD Y71 APK" />
        <p className="text-sm text-gray-500 mt-4">
          Official Pakistan site · Play responsibly · 18+ only
        </p>
      </div>
    </article>
  );
}
