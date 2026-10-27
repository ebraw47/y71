import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import DownloadButton from '@/components/DownloadButton';
import BlogPostSchema from '@/components/BlogPostSchema';
import { SITE_URL } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'How to Use Y71 App in Pakistan: Beginner Guide',
  description: 'Beginner guide to start earning with Y71 in Pakistan: download, register, deposit, play, withdraw, and stay in control.',
  keywords: ['how to use Y71', 'Y71 beginner guide', 'start earning Y71 Pakistan', 'Y71 guide'],
  alternates: { canonical: `${SITE_URL}/blog/how-to-use-y71-app-pakistan-guide` },
  openGraph: {
    title: 'How to Use Y71 App in Pakistan: Beginner Guide',
    description: 'Beginner guide to start earning with Y71 in Pakistan: download, register, deposit, play, withdraw, and stay in control.',
    url: `${SITE_URL}/blog/how-to-use-y71-app-pakistan-guide`,
    siteName: 'Y71',
    type: 'article',
    images: [{ url: `${SITE_URL}/y71-home.webp`, width: 1200, height: 630, alt: 'How to Use Y71 App in Pakistan: Beginner Guide' }],
  },
};

export default function Page() {
  return (
    <article className="container mx-auto px-4 py-12 max-w-3xl">
      <BlogPostSchema
        title='How to Use Y71 App in Pakistan: Beginner Guide'
        description='Beginner guide to start earning with Y71 in Pakistan: download, register, deposit, play, withdraw, and stay in control.'
        slug="how-to-use-y71-app-pakistan-guide"
        datePublished="2026-10-07"
        image={`${SITE_URL}/y71-home.webp`}
      />
      <nav className="text-sm text-gray-400 mb-6">
        <Link href="/" className="hover:text-accent">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/blog" className="hover:text-accent">Blog</Link>
        <span className="mx-2">/</span>
        <span className="text-gray-300">How to Use Y71 App in Pakistan: Beginner Guide</span>
      </nav>
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">How to Use Y71 App in Pakistan: Beginner Guide</h1>
      <p className="text-gray-400 text-sm mb-8">Updated October 2026 · Y71 Pakistan guide</p>
      <div className="relative w-full max-w-md mx-auto mb-10 rounded-xl overflow-hidden border border-gray-800">
        <Image src="/y71-home.webp" alt='How to Use Y71 App in Pakistan: Beginner Guide' width={720} height={1280} className="w-full h-auto object-contain" priority />
      </div>
      <div className="prose prose-invert max-w-none space-y-5 text-gray-300 leading-relaxed text-lg">

        <p>This beginner guide matches common searches like <strong>how to start earning with Y71</strong> and <strong>how to use Y71 app in Pakistan</strong>.</p>
        <h2 className="text-2xl font-bold text-white mt-8">End-to-end path</h2>
        <ol className="list-decimal pl-6 space-y-2">
          <li><Link href="/blog/how-to-download-install-y71-apk-pakistan" className="text-accent hover:underline">Download &amp; install</Link> the official APK.</li>
          <li><Link href="/blog/create-y71-account-and-login" className="text-accent hover:underline">Register and log in</Link> with your mobile number.</li>
          <li>Explore the lobby and read any welcome offer rules.</li>
          <li><Link href="/blog/y71-deposit-jazzcash-easypaisa-guide" className="text-accent hover:underline">Deposit</Link> a small amount with JazzCash or EasyPaisa when ready.</li>
          <li>Play short sessions; track wins and losses in wallet history.</li>
          <li><Link href="/blog/y71-withdraw-money-guide" className="text-accent hover:underline">Withdraw</Link> to your own wallet after rules are met.</li>
        </ol>
        <h2 className="text-2xl font-bold text-white mt-8">Responsible play</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Only use money you can afford to lose</li>
          <li>Do not chase losses</li>
          <li>18+ only — real-money gaming is entertainment, not income</li>
        </ul>
        <p>Also read our <Link href="/blog/y71-app-review-2026" className="text-accent hover:underline">2026 Y71 review</Link> and <Link href="/blog/is-y71-safe-legal-pakistan" className="text-accent hover:underline">safety guide</Link>.</p>
    
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
