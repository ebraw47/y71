import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import DownloadButton from '@/components/DownloadButton';
import BlogPostSchema from '@/components/BlogPostSchema';
import { APP_VERSION, MIN_AGE, SITE_URL } from '@/lib/constants';
import { cons, pros } from '@/lib/homeContent';

export const metadata: Metadata = {
  title: 'Y71 App Review 2026',
  description:
    'Full Y71 Game review for Pakistan 2026: lobby games, JazzCash & EasyPaisa, first deposit bonus, withdraw fees, pros, cons and responsible play notes.',
  keywords: ['Y71 review', 'Y71 app review 2026', 'Y71 Pakistan', 'Y71 game'],
  alternates: { canonical: `${SITE_URL}/blog/y71-app-review-2026` },
  openGraph: {
    title: 'Y71 App Review 2026',
    description:
      'Full Y71 Game review for Pakistan 2026: lobby games, JazzCash & EasyPaisa, first deposit bonus, withdraw fees, pros, cons and responsible play notes.',
    url: `${SITE_URL}/blog/y71-app-review-2026`,
    siteName: 'Y71',
    type: 'article',
    images: [{ url: `${SITE_URL}/y71-home.webp`, width: 1200, height: 630, alt: 'Y71 App Review 2026' }],
  },
};

export default function Page() {
  return (
    <article className="container mx-auto px-4 py-12 max-w-3xl">
      <BlogPostSchema
        title="Y71 App Review 2026"
        description="Full Y71 Game review for Pakistan 2026: lobby games, JazzCash & EasyPaisa, first deposit bonus, withdraw fees, pros, cons and responsible play notes."
        slug="y71-app-review-2026"
        datePublished="2026-10-07"
        image={`${SITE_URL}/y71-home.webp`}
      />
      <nav className="text-sm text-gray-400 mb-6">
        <Link href="/" className="hover:text-accent">
          Home
        </Link>
        <span className="mx-2">/</span>
        <Link href="/blog" className="hover:text-accent">
          Blog
        </Link>
        <span className="mx-2">/</span>
        <span className="text-gray-300">Y71 App Review 2026</span>
      </nav>
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Y71 App Review 2026</h1>
      <p className="text-gray-400 text-sm mb-8">
        Updated October 2026 · Y71 Pakistan · APK {APP_VERSION}
      </p>
      <div className="relative w-full max-w-md mx-auto mb-10 rounded-xl overflow-hidden border border-gray-800">
        <Image
          src="/y71-home.webp"
          alt="Y71 App Review 2026"
          width={720}
          height={1280}
          className="w-full h-auto object-contain"
          priority
        />
      </div>
      <div className="prose prose-invert max-w-none space-y-5 text-gray-300 leading-relaxed text-lg">
        <p>
          Y71 Game is a real-money Android / web lobby heavily searched in Pakistan for JazzCash and
          EasyPaisa payments, a golden shiny mobile UI, and short rounds across slots, fishing,
          cards and crash-style titles. This review summarises what players typically see in the
          lobby — always confirm live limits inside the app.
        </p>

        <h2 className="text-2xl font-bold text-white mt-8">What Y71 offers</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Free APK download + web lobby (not on Google Play)</li>
          <li>Local PKR deposits and withdrawals via JazzCash, EasyPaisa, QR and Bank</li>
          <li>Categories such as Slot, Fishing, Tables, Sport, Poker, Lottery, Blockchain and 3D</li>
          <li>Providers commonly marketed include JILI, PG Soft, Pragmatic Play, JDB, FC and Spribe</li>
          <li>First deposit bonus up to ~30%, daily check-in, lucky wheel, VIP and referral campaigns</li>
          <li>Urdu / English / Hindi friendly navigation and 24/7 support shortcuts</li>
        </ul>

        <h2 className="text-2xl font-bold text-white mt-8">Payments snapshot</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Deposit minimum often near Rs 100; max can reach Rs 50,000–100,000 per order</li>
          <li>Withdraw minimum often near Rs 103; max ~Rs 50,000 per request</li>
          <li>A platform fee (example 3%) and a separate daily withdrawal cap may apply</li>
          <li>QR deposits use a countdown — never reuse an expired code</li>
        </ul>

        <h2 className="text-2xl font-bold text-white mt-8">Pros</h2>
        <ul className="list-disc pl-6 space-y-2">
          {pros.map((p) => (
            <li key={p}>{p}</li>
          ))}
        </ul>

        <h2 className="text-2xl font-bold text-white mt-8">Cons &amp; risks</h2>
        <ul className="list-disc pl-6 space-y-2">
          {cons.map((c) => (
            <li key={c}>{c}</li>
          ))}
        </ul>

        <h2 className="text-2xl font-bold text-white mt-8">Verdict</h2>
        <p>
          Y71 suits Pakistani players who want a simple earning-style lobby with local wallets. Download
          only from the official button on y71.net.pk, start with small deposits, test a minimum
          withdrawal first, and treat every session as entertainment — not guaranteed income.{' '}
          {MIN_AGE}+ only.
        </p>
        <p>
          Next:{' '}
          <Link href="/blog/how-to-download-install-y71-apk-pakistan" className="text-accent hover:underline">
            install guide
          </Link>{' '}
          ·{' '}
          <Link href="/blog/y71-deposit-jazzcash-easypaisa-guide" className="text-accent hover:underline">
            deposit guide
          </Link>{' '}
          ·{' '}
          <Link href="/blog/y71-withdraw-money-guide" className="text-accent hover:underline">
            withdraw guide
          </Link>
          .
        </p>
      </div>
      <div className="mt-12 text-center">
        <DownloadButton size="lg" label="DOWNLOAD Y71 APK" />
        <p className="text-sm text-gray-500 mt-4">
          Official Pakistan site · Play responsibly · {MIN_AGE}+ only
        </p>
      </div>
    </article>
  );
}
