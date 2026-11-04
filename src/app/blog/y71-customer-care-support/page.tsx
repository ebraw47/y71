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
  title: 'Y71 Customer Care & Support Guide',
  description: 'How to contact Y71 customer care in Pakistan: in-app live chat, Telegram, WhatsApp, Facebook and what to send for deposit or withdraw issues.',
  keywords: [
    'Y71 customer care',
    'Y71 support',
    'Y71 helpline',
    'Y71 live chat',
    'Y71 customer service'
  ],
  alternates: { canonical: `${SITE_URL}/blog/y71-customer-care-support` },
  openGraph: {
    title: 'Y71 Customer Care & Support Guide',
    description: 'How to contact Y71 customer care in Pakistan: in-app live chat, Telegram, WhatsApp, Facebook and what to send for deposit or withdraw issues.',
    url: `${SITE_URL}/blog/y71-customer-care-support`,
    siteName: 'Y71',
    type: 'article',
    images: [{ url: `${SITE_URL}/y71-support.webp`, width: 1200, height: 630, alt: 'Y71 Customer Care & Support Guide' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Y71 Customer Care & Support Guide',
    description: 'How to contact Y71 customer care in Pakistan: in-app live chat, Telegram, WhatsApp, Facebook and what to send for deposit or withdraw issues.',
  },
};

export default function Page() {
  return (
    <article className="container mx-auto px-4 py-12 max-w-3xl">
      <BlogPostSchema
        title='Y71 Customer Care & Support Guide'
        description='How to contact Y71 customer care in Pakistan: in-app live chat, Telegram, WhatsApp, Facebook and what to send for deposit or withdraw issues.'
        slug="y71-customer-care-support"
        datePublished="2026-11-03"
        image={`${SITE_URL}/y71-support.webp`}
      />
      <nav className="text-sm text-gray-400 mb-6">
        <Link href="/" className="hover:text-accent">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/blog" className="hover:text-accent">Blog</Link>
        <span className="mx-2">/</span>
        <span className="text-gray-300">Y71 Customer Care & Support Guide</span>
      </nav>
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Y71 Customer Care & Support Guide</h1>
      <p className="text-gray-400 text-sm mb-8">Updated November 2026 · Y71 Pakistan guide</p>
      <div className="relative w-full max-w-md mx-auto mb-10 rounded-xl overflow-hidden border border-gray-800">
        <Image src="/y71-support.webp" alt="Y71 Customer Care & Support Guide" width={720} height={1280} className="w-full h-auto object-contain" priority />
      </div>
      <div className="prose prose-invert max-w-none space-y-5 text-gray-300 leading-relaxed text-lg">
        <p><strong>Y71 customer care</strong> and <strong>Y71 helpline</strong> searches usually mean: where is real support, and what proof do they need? Prefer channels inside the official app over random numbers shared on social media.</p>
        <h2 className="text-2xl font-bold text-white mt-8">Where to contact support</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>In-app Live Chat / Customer Service</strong> — best first option for deposits, KYC and bonuses.</li>
          <li><strong>Telegram / WhatsApp / Facebook</strong> — only use shortcuts that open from inside Y71.</li>
          <li>Site contact: <Link href="/contact-us" className="text-accent hover:underline">contact page</Link> on y71-apk.com.pk for general guide questions.</li>
        </ul>
        <h2 className="text-2xl font-bold text-white mt-8">What to prepare before chatting</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Registered +92 mobile number</li>
          <li>Transaction ID, amount, time and wallet screenshot for missing deposits</li>
          <li>Withdrawal order ID and wallet name for delayed cashouts</li>
          <li>Clear CNIC photos if KYC is requested</li>
        </ul>
        <h2 className="text-2xl font-bold text-white mt-8">Scam warnings</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Real support never asks for your OTP, JazzCash PIN or withdrawal PIN.</li>
          <li>Never pay a “release fee” to a stranger claiming they can force a payout.</li>
          <li>Ignore fake helpline numbers posted in WhatsApp groups.</li>
        </ul>
        <p>Related: <Link href="/blog/y71-login-problems-forgot-password" className="text-accent hover:underline">login problems</Link> · <Link href="/blog/is-y71-real-or-fake" className="text-accent hover:underline">is Y71 real?</Link></p>
      </div>
      <RelatedGuides slug="y71-customer-care-support" />
      <div className="mt-12 text-center">
        <DownloadButton size="lg" label="DOWNLOAD Y71 APK" />
        <p className="text-sm text-gray-500 mt-4">
          Official Pakistan site · Play responsibly · 18+ only
        </p>
      </div>
    </article>
  );
}
