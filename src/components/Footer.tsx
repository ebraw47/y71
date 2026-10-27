import Link from 'next/link';
import DownloadButton from '@/components/DownloadButton';
import { FACEBOOK_URL, SITE_DOMAIN } from '@/lib/constants';

export default function Footer() {
  return (
    <footer className="bg-[#0c0505]/95 text-white pt-8 pb-2 px-4 md:px-8 border-t border-accent/15 relative z-20">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold text-accent mb-4">Y71</h3>
            <p className="text-sm text-gray-300 mb-4">
              Y71 Game Pakistan — play &amp; earn mini-games with JazzCash, EasyPaisa, bonuses and
              referral rewards. Play responsibly (18+).
            </p>
            {FACEBOOK_URL && FACEBOOK_URL !== 'https://www.facebook.com/' && (
              <a
                href={FACEBOOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Y71 on Facebook"
                className="inline-flex items-center gap-2 text-sm text-gray-300 hover:text-accent"
              >
                Facebook
              </a>
            )}
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-accent">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="text-gray-300 hover:text-accent transition-colors">Home</Link></li>
              <li><Link href="/download-y71" className="text-gray-300 hover:text-accent transition-colors">Download</Link></li>
              <li><Link href="/y71-for-pc" className="text-gray-300 hover:text-accent transition-colors">PC Version</Link></li>
              <li><Link href="/blog" className="text-gray-300 hover:text-accent transition-colors">Blog</Link></li>
              <li><Link href="/about-us" className="text-gray-300 hover:text-accent transition-colors">About Us</Link></li>
              <li><Link href="/contact-us" className="text-gray-300 hover:text-accent transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-accent">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/deposit-money-in-y71" className="text-gray-300 hover:text-accent transition-colors">Deposit Guide</Link></li>
              <li><Link href="/withdraw-money-from-y71" className="text-gray-300 hover:text-accent transition-colors">Withdraw Guide</Link></li>
              <li><Link href="/blog/create-y71-account-and-login" className="text-gray-300 hover:text-accent transition-colors">Account & Login</Link></li>
              <li><Link href="/blog/is-y71-safe-legal-pakistan" className="text-gray-300 hover:text-accent transition-colors">Safety Guide</Link></li>
              <li><Link href="/privacy" className="text-gray-300 hover:text-accent transition-colors">Privacy Policy</Link></li>
              <li><Link href="/disclaimer" className="text-gray-300 hover:text-accent transition-colors">Disclaimer</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-accent">Download App</h3>
            <p className="text-sm text-gray-300 mb-4">
              Get Y71 Game APK v1.1.1 — JazzCash, EasyPaisa, bonuses and referral spins.
            </p>
            <div className="flex flex-col gap-3 items-start">
              <DownloadButton size="sm" label="DOWNLOAD Y71" />
              <Link
                href="/download-y71"
                className="inline-flex w-fit items-center justify-center px-4 py-2 rounded-full border border-gray-600 text-sm text-white font-semibold hover:border-accent hover:text-accent transition-colors"
              >
                Installation Guide
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-4 pb-3 text-center text-sm text-gray-400">
          <p className="mb-0">
            © 2026 Y71 Game. All rights reserved. |{' '}
            <Link href="/" className="hover:text-accent">{SITE_DOMAIN}</Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
