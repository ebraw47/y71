import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import DownloadButton from '@/components/DownloadButton';
import BlogPostSchema from '@/components/BlogPostSchema';
import { SITE_URL } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Y71 Deposit Guide: JazzCash & EasyPaisa',
  description: 'Add Y71 balance with JazzCash or EasyPaisa, fix delayed credits, and avoid common deposit mistakes in Pakistan.',
  keywords: ['Y71 deposit', 'Y71 JazzCash', 'Y71 EasyPaisa', 'Y71 recharge'],
  alternates: { canonical: `${SITE_URL}/blog/y71-deposit-jazzcash-easypaisa-guide` },
  openGraph: {
    title: 'Y71 Deposit Guide: JazzCash & EasyPaisa',
    description: 'Add Y71 balance with JazzCash or EasyPaisa, fix delayed credits, and avoid common deposit mistakes in Pakistan.',
    url: `${SITE_URL}/blog/y71-deposit-jazzcash-easypaisa-guide`,
    siteName: 'Y71',
    type: 'article',
    images: [{ url: `${SITE_URL}/y71-deposit.webp`, width: 1200, height: 630, alt: 'Y71 Deposit Guide: JazzCash & EasyPaisa' }],
  },
};

export default function Page() {
  return (
    <article className="container mx-auto px-4 py-12 max-w-3xl">
      <BlogPostSchema
        title='Y71 Deposit Guide: JazzCash & EasyPaisa'
        description='Add Y71 balance with JazzCash or EasyPaisa, fix delayed credits, and avoid common deposit mistakes in Pakistan.'
        slug="y71-deposit-jazzcash-easypaisa-guide"
        datePublished="2026-10-07"
        image={`${SITE_URL}/y71-deposit.webp`}
      />
      <nav className="text-sm text-gray-400 mb-6">
        <Link href="/" className="hover:text-accent">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/blog" className="hover:text-accent">Blog</Link>
        <span className="mx-2">/</span>
        <span className="text-gray-300">Y71 Deposit Guide: JazzCash & EasyPaisa</span>
      </nav>
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Y71 Deposit Guide: JazzCash & EasyPaisa</h1>
      <p className="text-gray-400 text-sm mb-8">Updated October 2026 · Y71 Pakistan guide</p>
      <div className="relative w-full max-w-md mx-auto mb-10 rounded-xl overflow-hidden border border-gray-800">
        <Image src="/y71-deposit.webp" alt='Y71 Deposit Guide: JazzCash & EasyPaisa' width={720} height={1280} className="w-full h-auto object-contain" priority />
      </div>
      <div className="prose prose-invert max-w-none space-y-5 text-gray-300 leading-relaxed text-lg">

        <p>People searching <strong>Y71 deposit</strong> want a clear JazzCash and EasyPaisa flow. Always pay only to the recipient details shown inside the live app.</p>
        <h2 className="text-2xl font-bold text-white mt-8">How to deposit</h2>
        <ol className="list-decimal pl-6 space-y-2">
          <li>Log in and open <strong>Deposit / Wallet / Funds</strong>.</li>
          <li>Choose JazzCash or EasyPaisa when listed.</li>
          <li>Enter an amount (minimum is often near PKR 100 — confirm on screen).</li>
          <li>Copy the exact account name and number shown in Y71.</li>
          <li>Pay from your own wallet app, then return and submit any required transaction ID.</li>
          <li>Wait for the balance to refresh; keep a screenshot of the payment.</li>
        </ol>
        <h2 className="text-2xl font-bold text-white mt-8">If credit is delayed</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Confirm you paid the current in-app details (not an old chat number).</li>
          <li>Match the exact amount selected in the deposit screen.</li>
          <li>Contact in-app support with the transaction ID and time.</li>
        </ul>
        <p>Full page: <Link href="/deposit-money-in-y71" className="text-accent hover:underline">Deposit money in Y71</Link>. Next: <Link href="/blog/y71-withdraw-money-guide" className="text-accent hover:underline">withdraw guide</Link>.</p>
    
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
