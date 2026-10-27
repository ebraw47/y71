import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import DownloadButton from '@/components/DownloadButton';
import BlogPostSchema from '@/components/BlogPostSchema';
import { SITE_URL } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Is Y71 Safe and Legal in Pakistan?',
  description: 'Is Y71 real or fake? Official download tips, scam warnings, legal context, and responsible play advice for Pakistan.',
  keywords: ['is Y71 safe', 'Y71 real or fake', 'Y71 legal Pakistan', 'Y71 scam'],
  alternates: { canonical: `${SITE_URL}/blog/is-y71-safe-legal-pakistan` },
  openGraph: {
    title: 'Is Y71 Safe and Legal in Pakistan?',
    description: 'Is Y71 real or fake? Official download tips, scam warnings, legal context, and responsible play advice for Pakistan.',
    url: `${SITE_URL}/blog/is-y71-safe-legal-pakistan`,
    siteName: 'Y71',
    type: 'article',
    images: [{ url: `${SITE_URL}/y71-support.webp`, width: 1200, height: 630, alt: 'Is Y71 Safe and Legal in Pakistan?' }],
  },
};

export default function Page() {
  return (
    <article className="container mx-auto px-4 py-12 max-w-3xl">
      <BlogPostSchema
        title='Is Y71 Safe and Legal in Pakistan?'
        description='Is Y71 real or fake? Official download tips, scam warnings, legal context, and responsible play advice for Pakistan.'
        slug="is-y71-safe-legal-pakistan"
        datePublished="2026-10-07"
        image={`${SITE_URL}/y71-support.webp`}
      />
      <nav className="text-sm text-gray-400 mb-6">
        <Link href="/" className="hover:text-accent">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/blog" className="hover:text-accent">Blog</Link>
        <span className="mx-2">/</span>
        <span className="text-gray-300">Is Y71 Safe and Legal in Pakistan?</span>
      </nav>
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Is Y71 Safe and Legal in Pakistan?</h1>
      <p className="text-gray-400 text-sm mb-8">Updated October 2026 · Y71 Pakistan guide</p>
      <div className="relative w-full max-w-md mx-auto mb-10 rounded-xl overflow-hidden border border-gray-800">
        <Image src="/y71-support.webp" alt='Is Y71 Safe and Legal in Pakistan?' width={720} height={1280} className="w-full h-auto object-contain" priority />
      </div>
      <div className="prose prose-invert max-w-none space-y-5 text-gray-300 leading-relaxed text-lg">

        <p>People searching <strong>is Y71 safe</strong>, <strong>Y71 real or fake</strong>, or <strong>Y71 legal Pakistan</strong> want clear risk notes — not hype.</p>
        <h2 className="text-2xl font-bold text-white mt-8">Safety checklist</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Download only from y71.net.pk or the official button linked here</li>
          <li>Avoid Telegram / WhatsApp APKs and &quot;agent&quot; deposit numbers</li>
          <li>Never share OTP, password, or withdrawal PIN</li>
          <li>Test a small deposit and a small withdrawal before larger amounts</li>
        </ul>
        <h2 className="text-2xl font-bold text-white mt-8">Legal context</h2>
        <p>Online real-money gaming sits in a grey area for many users in Pakistan. Laws can be restrictive and unregulated apps carry financial risk. This site is informational — you are responsible for following local rules and deciding whether to play.</p>
        <h2 className="text-2xl font-bold text-white mt-8">Real or fake?</h2>
        <p>Y71 operates as a working real-money app with JazzCash and EasyPaisa rails for many players, but that does not mean payouts are guaranteed or that the platform is risk-free. Treat it as entertainment, not a job.</p>
        <p>Set a budget, take breaks, and play only if you are 18+. Need help? <Link href="/contact-us" className="text-accent hover:underline">Contact us</Link>.</p>
    
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
