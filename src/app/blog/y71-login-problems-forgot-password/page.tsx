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
  title: 'Y71 Login Problems & Forgot Password Fix',
  description: 'Fix Y71 login failed, OTP not received, wrong password and account lock issues for Pakistani numbers — safe reset steps only.',
  keywords: [
    'Y71 login problem',
    'Y71 forgot password',
    'Y71 login failed',
    'Y71 OTP not received',
    'Y71 account locked'
  ],
  alternates: { canonical: `${SITE_URL}/blog/y71-login-problems-forgot-password` },
  openGraph: {
    title: 'Y71 Login Problems & Forgot Password Fix',
    description: 'Fix Y71 login failed, OTP not received, wrong password and account lock issues for Pakistani numbers — safe reset steps only.',
    url: `${SITE_URL}/blog/y71-login-problems-forgot-password`,
    siteName: 'Y71',
    type: 'article',
    images: [{ url: `${SITE_URL}/y71-login.webp`, width: 1200, height: 630, alt: 'Y71 Login Problems & Forgot Password Fix' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Y71 Login Problems & Forgot Password Fix',
    description: 'Fix Y71 login failed, OTP not received, wrong password and account lock issues for Pakistani numbers — safe reset steps only.',
  },
};

export default function Page() {
  return (
    <article className="container mx-auto px-4 py-12 max-w-3xl">
      <BlogPostSchema
        title='Y71 Login Problems & Forgot Password Fix'
        description='Fix Y71 login failed, OTP not received, wrong password and account lock issues for Pakistani numbers — safe reset steps only.'
        slug="y71-login-problems-forgot-password"
        datePublished="2026-11-03"
        image={`${SITE_URL}/y71-login.webp`}
      />
      <nav className="text-sm text-gray-400 mb-6">
        <Link href="/" className="hover:text-accent">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/blog" className="hover:text-accent">Blog</Link>
        <span className="mx-2">/</span>
        <span className="text-gray-300">Y71 Login Problems & Forgot Password Fix</span>
      </nav>
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Y71 Login Problems & Forgot Password Fix</h1>
      <p className="text-gray-400 text-sm mb-8">Updated November 2026 · Y71 Pakistan guide</p>
      <div className="relative w-full max-w-md mx-auto mb-10 rounded-xl overflow-hidden border border-gray-800">
        <Image src="/y71-login.webp" alt="Y71 Login Problems & Forgot Password Fix" width={720} height={1280} className="w-full h-auto object-contain" priority />
      </div>
      <div className="prose prose-invert max-w-none space-y-5 text-gray-300 leading-relaxed text-lg">
        <p><strong>Y71 login problem</strong> and <strong>Y71 forgot password</strong> are high-intent searches after install. Most fixes are simple: correct +92 format, stable data, OTP reset, then official support — never a third-party “agent.”</p>
        <h2 className="text-2xl font-bold text-white mt-8">Quick checklist</h2>
        <ol className="list-decimal pl-6 space-y-2">
          <li>Confirm you installed the APK from <Link href="/" className="text-accent hover:underline">y71.net.pk</Link>, not a mod file.</li>
          <li>Enter the same +92 mobile number used at registration.</li>
          <li>Check Caps Lock / saved wrong password in your keyboard.</li>
          <li>Switch between Wi-Fi and mobile data, then retry.</li>
          <li>Update or reinstall the latest APK if the app crashes on login.</li>
        </ol>
        <h2 className="text-2xl font-bold text-white mt-8">Forgot password / OTP reset</h2>
        <ol className="list-decimal pl-6 space-y-2">
          <li>On the login screen tap <strong>Forgot Password</strong> (wording may vary).</li>
          <li>Enter your registered number and request OTP.</li>
          <li>Wait for SMS; check spam / dual-SIM inbox.</li>
          <li>Set a new strong password you do not reuse on JazzCash or EasyPaisa.</li>
        </ol>
        <h2 className="text-2xl font-bold text-white mt-8">OTP not received</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Wait 60–120 seconds before requesting again.</li>
          <li>Ensure the number can receive SMS (not blocked by operator filters).</li>
          <li>Try again later during network congestion, then contact in-app support.</li>
        </ul>
        <h2 className="text-2xl font-bold text-white mt-8">Still locked out?</h2>
        <p>Open <Link href="/blog/y71-customer-care-support" className="text-accent hover:underline">Y71 customer care</Link> from a working device or the web lobby if available. Share your number and registration date — never share OTP or PIN.</p>
      </div>
      <RelatedGuides slug="y71-login-problems-forgot-password" />
      <div className="mt-12 text-center">
        <DownloadButton size="lg" label="DOWNLOAD Y71 APK" />
        <p className="text-sm text-gray-500 mt-4">
          Official Pakistan site · Play responsibly · 18+ only
        </p>
      </div>
    </article>
  );
}
