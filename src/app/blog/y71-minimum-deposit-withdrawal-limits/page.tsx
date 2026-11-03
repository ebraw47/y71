import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import DownloadButton from '@/components/DownloadButton';
import BlogPostSchema from '@/components/BlogPostSchema';
import { SITE_URL } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Y71 Minimum Deposit & Withdrawal Limits',
  description: 'Typical Y71 min deposit (~Rs 100), min withdraw (~Rs 103), max per order, fees and daily caps for JazzCash & EasyPaisa in Pakistan.',
  keywords: [
    'Y71 minimum deposit',
    'Y71 minimum withdrawal',
    'Y71 withdraw limit',
    'Y71 deposit limit',
    'Y71 fees'
  ],
  alternates: { canonical: `${SITE_URL}/blog/y71-minimum-deposit-withdrawal-limits` },
  openGraph: {
    title: 'Y71 Minimum Deposit & Withdrawal Limits',
    description: 'Typical Y71 min deposit (~Rs 100), min withdraw (~Rs 103), max per order, fees and daily caps for JazzCash & EasyPaisa in Pakistan.',
    url: `${SITE_URL}/blog/y71-minimum-deposit-withdrawal-limits`,
    siteName: 'Y71',
    type: 'article',
    images: [{ url: `${SITE_URL}/y71-deposit.webp`, width: 1200, height: 630, alt: 'Y71 Minimum Deposit & Withdrawal Limits' }],
  },
};

export default function Page() {
  return (
    <article className="container mx-auto px-4 py-12 max-w-3xl">
      <BlogPostSchema
        title='Y71 Minimum Deposit & Withdrawal Limits'
        description='Typical Y71 min deposit (~Rs 100), min withdraw (~Rs 103), max per order, fees and daily caps for JazzCash & EasyPaisa in Pakistan.'
        slug="y71-minimum-deposit-withdrawal-limits"
        datePublished="2026-11-03"
        image={`${SITE_URL}/y71-deposit.webp`}
      />
      <nav className="text-sm text-gray-400 mb-6">
        <Link href="/" className="hover:text-accent">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/blog" className="hover:text-accent">Blog</Link>
        <span className="mx-2">/</span>
        <span className="text-gray-300">Y71 Minimum Deposit & Withdrawal Limits</span>
      </nav>
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Y71 Minimum Deposit & Withdrawal Limits</h1>
      <p className="text-gray-400 text-sm mb-8">Updated November 2026 · Y71 Pakistan guide</p>
      <div className="relative w-full max-w-md mx-auto mb-10 rounded-xl overflow-hidden border border-gray-800">
        <Image src="/y71-deposit.webp" alt="Y71 Minimum Deposit & Withdrawal Limits" width={720} height={1280} className="w-full h-auto object-contain" priority />
      </div>
      <div className="prose prose-invert max-w-none space-y-5 text-gray-300 leading-relaxed text-lg">
        <p>Queries like <strong>Y71 minimum deposit</strong> and <strong>Y71 minimum withdrawal</strong> convert well because players want clear PKR numbers before funding. Limits change — treat the figures below as common lobby examples and trust the live Deposit / Withdraw screens.</p>
        <h2 className="text-2xl font-bold text-white mt-8">Typical deposit limits</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Minimum often near <strong>Rs 100</strong></li>
          <li>Maximum per order often around <strong>Rs 50,000–100,000</strong></li>
          <li>Methods: EasyPaisa QR, JazzCash QR, EasyPaisa, JazzCash, P2P when listed</li>
        </ul>
        <h2 className="text-2xl font-bold text-white mt-8">Typical withdrawal limits</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Minimum often near <strong>Rs 103</strong></li>
          <li>Maximum often near <strong>Rs 50,000</strong> per request</li>
          <li>A separate <strong>daily withdrawal cap</strong> may be lower than the per-request max</li>
          <li>A platform fee (example <strong>~3%</strong>) may apply</li>
        </ul>
        <h2 className="text-2xl font-bold text-white mt-8">Why a request is rejected</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Amount below min or above max</li>
          <li>Bonus turnover not finished</li>
          <li>Wallet name / CNIC mismatch</li>
          <li>Daily cap already used</li>
        </ul>
        <p>Full flows: <Link href="/blog/y71-deposit-jazzcash-easypaisa-guide" className="text-accent hover:underline">deposit guide</Link> · <Link href="/blog/y71-withdraw-money-guide" className="text-accent hover:underline">withdraw guide</Link>.</p>
      </div>
      <div className="mt-12 text-center">
        <DownloadButton size="lg" label="DOWNLOAD Y71 APK" />
        <p className="text-sm text-gray-500 mt-4">
          Official Pakistan site · Play responsibly · 18+ only
        </p>
      </div>
    </article>
  );
}
