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
  title: 'Y71 Referral & Invite Code Guide',
  description: 'How Y71 referral works in Pakistan: invite code, Earn invitation link, QR share, agent rewards and common mistakes.',
  keywords: [
    'Y71 referral',
    'Y71 invite code',
    'Y71 referral code',
    'Y71 invitation',
    'Y71 agent'
  ],
  alternates: { canonical: `${SITE_URL}/blog/y71-referral-invite-code-guide` },
  openGraph: {
    title: 'Y71 Referral & Invite Code Guide',
    description: 'How Y71 referral works in Pakistan: invite code, Earn invitation link, QR share, agent rewards and common mistakes.',
    url: `${SITE_URL}/blog/y71-referral-invite-code-guide`,
    siteName: 'Y71',
    type: 'article',
    images: [{ url: `${SITE_URL}/y71-home.webp`, width: 1200, height: 630, alt: 'Y71 Referral & Invite Code Guide' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Y71 Referral & Invite Code Guide',
    description: 'How Y71 referral works in Pakistan: invite code, Earn invitation link, QR share, agent rewards and common mistakes.',
  },
};

export default function Page() {
  return (
    <article className="container mx-auto px-4 py-12 max-w-3xl">
      <BlogPostSchema
        title='Y71 Referral & Invite Code Guide'
        description='How Y71 referral works in Pakistan: invite code, Earn invitation link, QR share, agent rewards and common mistakes.'
        slug="y71-referral-invite-code-guide"
        datePublished="2026-11-03"
        image={`${SITE_URL}/y71-home.webp`}
      />
      <nav className="text-sm text-gray-400 mb-6">
        <Link href="/" className="hover:text-accent">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/blog" className="hover:text-accent">Blog</Link>
        <span className="mx-2">/</span>
        <span className="text-gray-300">Y71 Referral & Invite Code Guide</span>
      </nav>
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Y71 Referral & Invite Code Guide</h1>
      <p className="text-gray-400 text-sm mb-8">Updated November 2026 · Y71 Pakistan guide</p>
      <div className="relative w-full max-w-md mx-auto mb-10 rounded-xl overflow-hidden border border-gray-800">
        <Image src="/y71-home.webp" alt="Y71 Referral & Invite Code Guide" width={720} height={1280} className="w-full h-auto object-contain" priority />
      </div>
      <div className="prose prose-invert max-w-none space-y-5 text-gray-300 leading-relaxed text-lg">
        <p><strong>Y71 referral</strong> and <strong>Y71 invite code</strong> queries rank well because players want clear steps to share links and claim invite rewards. Rewards depend on live Earn / Agent rules.</p>
        <h2 className="text-2xl font-bold text-white mt-8">How to use an invite code when registering</h2>
        <ol className="list-decimal pl-6 space-y-2">
          <li>Download Y71 only from the trusted button on <Link href="/" className="text-accent hover:underline">y71-apk.com.pk</Link>.</li>
          <li>Open Register and enter your +92 mobile number and password.</li>
          <li>If the form shows Invite / Referral code, enter a code you trust (optional on some builds).</li>
          <li>Accept the privacy agreement and complete OTP if asked.</li>
        </ol>
        <h2 className="text-2xl font-bold text-white mt-8">How to invite friends from Earn</h2>
        <ol className="list-decimal pl-6 space-y-2">
          <li>Log in and open <strong>Earn / Get rewards / Agent</strong>.</li>
          <li>Copy your invitation link, code or QR.</li>
          <li>Share on WhatsApp, Facebook or Telegram.</li>
          <li>Track Invitation Challenge / turntable progress after friends register and play under current rules.</li>
        </ol>
        <h2 className="text-2xl font-bold text-white mt-8">Rules to remember</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Commissions and challenge rewards can change without notice.</li>
          <li>Fake “guaranteed daily income” agents are usually scams — never pay anyone to unlock a referral payout.</li>
          <li>Use your own invite tools inside the app, not random third-party dashboards.</li>
        </ul>
        <p>Also read: <Link href="/blog/y71-bonus-promotions-guide" className="text-accent hover:underline">bonus guide</Link> · <Link href="/blog/how-to-earn-money-on-y71" className="text-accent hover:underline">how to earn on Y71</Link>.</p>
      </div>
      <RelatedGuides slug="y71-referral-invite-code-guide" />
      <div className="mt-12 text-center">
        <DownloadButton size="lg" label="DOWNLOAD Y71 APK" />
        <p className="text-sm text-gray-500 mt-4">
          Official Pakistan site · Play responsibly · 18+ only
        </p>
      </div>
    </article>
  );
}
