import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import DownloadButton from '@/components/DownloadButton';
import BlogPostSchema from '@/components/BlogPostSchema';
import { SITE_URL } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Y71 Withdraw Money Guide',
  description: 'Cash out Y71 winnings to JazzCash or EasyPaisa — no extra approvals needed. Fix failed withdrawal requests fast.',
  keywords: ['Y71 withdraw', 'Y71 withdrawal', 'Y71 JazzCash cash out', 'Y71 EasyPaisa'],
  alternates: { canonical: `${SITE_URL}/blog/y71-withdraw-money-guide` },
  openGraph: {
    title: 'Y71 Withdraw Money Guide',
    description: 'Cash out Y71 winnings to JazzCash or EasyPaisa — no extra approvals needed. Fix failed withdrawal requests fast.',
    url: `${SITE_URL}/blog/y71-withdraw-money-guide`,
    siteName: 'Y71',
    type: 'article',
    images: [{ url: `${SITE_URL}/y71-withdraw.webp`, width: 1200, height: 630, alt: 'Y71 Withdraw Money Guide' }],
  },
};

export default function Page() {
  return (
    <article className="container mx-auto px-4 py-12 max-w-3xl">
      <BlogPostSchema
        title='Y71 Withdraw Money Guide'
        description="Cash out Y71 winnings to JazzCash or EasyPaisa — no extra approvals needed. Fix failed withdrawal requests fast."
        slug="y71-withdraw-money-guide"
        datePublished="2026-10-07"
        image={`${SITE_URL}/y71-withdraw.webp`}
      />
      <nav className="text-sm text-gray-400 mb-6">
        <Link href="/" className="hover:text-accent">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/blog" className="hover:text-accent">Blog</Link>
        <span className="mx-2">/</span>
        <span className="text-gray-300">Y71 Withdraw Money Guide</span>
      </nav>
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Y71 Withdraw Money Guide</h1>
      <p className="text-gray-400 text-sm mb-8">Updated October 2026 · Y71 Pakistan guide</p>
      <div className="relative w-full max-w-md mx-auto mb-10 rounded-xl overflow-hidden border border-gray-800">
        <Image src="/y71-withdraw.webp" alt='Y71 Withdraw Money Guide' width={720} height={1280} className="w-full h-auto object-contain" priority />
      </div>
      <div className="prose prose-invert max-w-none space-y-5 text-gray-300 leading-relaxed text-lg">

        <p>
          Searches for <strong>Y71 withdraw</strong> and <strong>Y71 EasyPaisa withdrawal</strong> are
          common once players have a balance. Bind your own wallet first. Withdrawals do not need
          extra permissions or approvals — confirm in-app and funds go to your account.
        </p>
        <h2 className="text-2xl font-bold text-white mt-8">How to withdraw</h2>
        <ol className="list-decimal pl-6 space-y-2">
          <li>Open <strong>Withdraw / Wallet</strong> in Y71.</li>
          <li>Add a receiving account: JazzCash, EasyPaisa or Bank in your name.</li>
          <li>Enter an amount within the shown min / max (often Min ~Rs 103).</li>
          <li>Confirm the request — no separate approval step.</li>
          <li>Check your wallet; funds usually arrive quickly.</li>
        </ol>
        <h2 className="text-2xl font-bold text-white mt-8">Why withdrawals fail</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Name mismatch between Y71 profile and wallet / CNIC name</li>
          <li>Wrong wallet number</li>
          <li>Network or bank delay (retry or contact support with order ID)</li>
        </ul>
        <p>Full page: <Link href="/withdraw-money-from-y71" className="text-accent hover:underline">Withdraw money from Y71</Link>. Also read: <Link href="/blog/is-y71-safe-legal-pakistan" className="text-accent hover:underline">is Y71 safe?</Link>.</p>
    
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
