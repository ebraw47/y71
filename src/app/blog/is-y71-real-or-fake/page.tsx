import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import DownloadButton from '@/components/DownloadButton';
import BlogPostSchema from '@/components/BlogPostSchema';
import { SITE_URL } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Is Y71 Real or Fake? Scam Check for Pakistan',
  description: 'Is Y71 real or a scam? How to spot fake APKs, fake agents, payment traps and what genuine players should verify before depositing in Pakistan.',
  keywords: [
    'is Y71 real',
    'Y71 fake',
    'Y71 scam',
    'Y71 real or fake',
    'Y71 fraud'
  ],
  alternates: { canonical: `${SITE_URL}/blog/is-y71-real-or-fake` },
  openGraph: {
    title: 'Is Y71 Real or Fake? Scam Check for Pakistan',
    description: 'Is Y71 real or a scam? How to spot fake APKs, fake agents, payment traps and what genuine players should verify before depositing in Pakistan.',
    url: `${SITE_URL}/blog/is-y71-real-or-fake`,
    siteName: 'Y71',
    type: 'article',
    images: [{ url: `${SITE_URL}/y71-support.webp`, width: 1200, height: 630, alt: 'Is Y71 Real or Fake? Scam Check for Pakistan' }],
  },
};

export default function Page() {
  return (
    <article className="container mx-auto px-4 py-12 max-w-3xl">
      <BlogPostSchema
        title='Is Y71 Real or Fake? Scam Check for Pakistan'
        description='Is Y71 real or a scam? How to spot fake APKs, fake agents, payment traps and what genuine players should verify before depositing in Pakistan.'
        slug="is-y71-real-or-fake"
        datePublished="2026-11-03"
        image={`${SITE_URL}/y71-support.webp`}
      />
      <nav className="text-sm text-gray-400 mb-6">
        <Link href="/" className="hover:text-accent">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/blog" className="hover:text-accent">Blog</Link>
        <span className="mx-2">/</span>
        <span className="text-gray-300">Is Y71 Real or Fake? Scam Check for Pakistan</span>
      </nav>
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Is Y71 Real or Fake? Scam Check for Pakistan</h1>
      <p className="text-gray-400 text-sm mb-8">Updated November 2026 · Y71 Pakistan guide</p>
      <div className="relative w-full max-w-md mx-auto mb-10 rounded-xl overflow-hidden border border-gray-800">
        <Image src="/y71-support.webp" alt="Is Y71 Real or Fake? Scam Check for Pakistan" width={720} height={1280} className="w-full h-auto object-contain" priority />
      </div>
      <div className="prose prose-invert max-w-none space-y-5 text-gray-300 leading-relaxed text-lg">
        <p><strong>Is Y71 real or fake</strong> is a classic SERP question next to “safe” and “legal.” No site can guarantee every payout, but you can filter obvious scams before you send JazzCash or EasyPaisa money.</p>
        <h2 className="text-2xl font-bold text-white mt-8">Signs of a fake Y71 experience</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>APK from random WhatsApp / Telegram files instead of <Link href="/" className="text-accent hover:underline">y71.net.pk</Link></li>
          <li>“Mod / unlimited money” installs</li>
          <li>Someone asking you to pay a fee to release a withdrawal</li>
          <li>Support asking for OTP, JazzCash PIN or full CNIC photos over chat outside the app</li>
          <li>Deposit details that do not match the live in-app cashier</li>
        </ul>
        <h2 className="text-2xl font-bold text-white mt-8">Practical real-check steps</h2>
        <ol className="list-decimal pl-6 space-y-2">
          <li>Install only from the official download / referral button on this site.</li>
          <li>Register with your own +92 number.</li>
          <li>Test a small deposit and a small withdrawal before larger amounts.</li>
          <li>Keep receipts and use in-app customer service for disputes.</li>
          <li>Read <Link href="/blog/is-y71-safe-legal-pakistan" className="text-accent hover:underline">Is Y71 safe and legal in Pakistan?</Link> for broader context.</li>
        </ol>
        <h2 className="text-2xl font-bold text-white mt-8">Bottom line</h2>
        <p>Y71 is a real-money play-and-earn lobby marketed to Pakistan. Like any such app, outcomes are uncertain and funds can be lost. Stay with official downloads, small tests, and responsible limits. 18+ only.</p>
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
