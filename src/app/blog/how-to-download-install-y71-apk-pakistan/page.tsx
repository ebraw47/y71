import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import DownloadButton from '@/components/DownloadButton';
import BlogPostSchema from '@/components/BlogPostSchema';
import { SITE_URL } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'How to Download & Install Y71 APK in Pakistan',
  description: 'Step-by-step Android install for Y71: official APK, unknown sources, and troubleshooting for Pakistani phones.',
  keywords: ['Y71 download', 'Y71 APK', 'install Y71 Pakistan', 'Y71 Android'],
  alternates: { canonical: `${SITE_URL}/blog/how-to-download-install-y71-apk-pakistan` },
  openGraph: {
    title: 'How to Download & Install Y71 APK in Pakistan',
    description: 'Step-by-step Android install for Y71: official APK, unknown sources, and troubleshooting for Pakistani phones.',
    url: `${SITE_URL}/blog/how-to-download-install-y71-apk-pakistan`,
    siteName: 'Y71',
    type: 'article',
    images: [{ url: `${SITE_URL}/y71-home.webp`, width: 1200, height: 630, alt: 'How to Download & Install Y71 APK in Pakistan' }],
  },
};

export default function Page() {
  return (
    <article className="container mx-auto px-4 py-12 max-w-3xl">
      <BlogPostSchema
        title='How to Download & Install Y71 APK in Pakistan'
        description='Step-by-step Android install for Y71: official APK, unknown sources, and troubleshooting for Pakistani phones.'
        slug="how-to-download-install-y71-apk-pakistan"
        datePublished="2026-10-07"
        image={`${SITE_URL}/y71-home.webp`}
      />
      <nav className="text-sm text-gray-400 mb-6">
        <Link href="/" className="hover:text-accent">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/blog" className="hover:text-accent">Blog</Link>
        <span className="mx-2">/</span>
        <span className="text-gray-300">How to Download & Install Y71 APK in Pakistan</span>
      </nav>
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">How to Download & Install Y71 APK in Pakistan</h1>
      <p className="text-gray-400 text-sm mb-8">Updated October 2026 · Y71 Pakistan guide</p>
      <div className="relative w-full max-w-md mx-auto mb-10 rounded-xl overflow-hidden border border-gray-800">
        <Image src="/y71-home.webp" alt='How to Download & Install Y71 APK in Pakistan' width={720} height={1280} className="w-full h-auto object-contain" priority />
      </div>
      <div className="prose prose-invert max-w-none space-y-5 text-gray-300 leading-relaxed text-lg">

        <p>Searching for <strong>Y71 download</strong> or <strong>Y71 APK</strong> is common in Pakistan. Use only the official path so you avoid modified files from Telegram or random mirrors.</p>
        <h2 className="text-2xl font-bold text-white mt-8">Before you start</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Android 5.0+ and enough free storage (~10MB plus cache)</li>
          <li>Stable mobile data or Wi-Fi</li>
          <li>Open y71.net.pk — not random third-party APK sites</li>
        </ul>
        <h2 className="text-2xl font-bold text-white mt-8">Install steps</h2>
        <ol className="list-decimal pl-6 space-y-2">
          <li>Tap <Link href="/download-y71" className="text-accent hover:underline">Download Y71</Link> and wait for the APK.</li>
          <li>If prompted, allow install from this source in Android settings.</li>
          <li>Open the downloaded file and tap Install.</li>
          <li>Launch Y71, accept permissions that match the app, then register or log in.</li>
          <li>Turn unknown sources off again after install.</li>
        </ol>
        <h2 className="text-2xl font-bold text-white mt-8">Troubleshooting</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Blocked install:</strong> temporarily allow unknown apps for your browser/file manager, then turn it off again.</li>
          <li><strong>Parse error:</strong> re-download — the file may be incomplete.</li>
          <li><strong>Won&apos;t open:</strong> clear cache or reinstall from the official button only.</li>
        </ul>
        <p>Next: <Link href="/blog/create-y71-account-and-login" className="text-accent hover:underline">create account &amp; login</Link>.</p>
    
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
