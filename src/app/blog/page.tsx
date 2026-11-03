import Link from 'next/link';
import { Metadata } from 'next';
import { SITE_URL } from '@/lib/constants';
import { BLOG_POSTS } from '@/lib/blogPosts';

export const metadata: Metadata = {
  title: 'Y71 Blog - Guides, Tips, Reviews & Tutorials 2026',
  description:
    'Y71 blog for Pakistan: app review, APK, bonuses, referral, earn money, JazzCash deposits, withdrawals, login fixes, support and safety guides.',
  keywords: [
    'Y71 blog',
    'Y71 guide',
    'Y71 review',
    'Y71 APK',
    'Y71 bonus',
    'Y71 referral',
    'Y71 deposit',
    'Y71 withdraw',
    'Y71 Pakistan 2026',
  ],
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
  alternates: {
    canonical: `${SITE_URL}/blog`,
  },
  openGraph: {
    title: 'Y71 Blog - Guides, Tips & Reviews 2026',
    description: 'Official Y71 guides for download, payments, and safe play in Pakistan.',
    url: `${SITE_URL}/blog`,
    siteName: 'Y71',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: `${SITE_URL}/y71-logo.webp`,
        width: 1200,
        height: 630,
        alt: 'Y71 Blog',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Y71 Blog - Guides & Reviews 2026',
    description: 'APK, bonus, deposit, withdraw, referral and safety guides for Y71 Pakistan.',
    images: [`${SITE_URL}/y71-logo.webp`],
  },
};

export default function Blog() {
  const itemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Y71 Blog Guides',
    itemListElement: BLOG_POSTS.map((post, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      url: `${SITE_URL}/blog/${post.slug}`,
      name: post.title,
    })),
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE_URL}/blog` },
    ],
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema).replace(/</g, '\\u003c') }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema).replace(/</g, '\\u003c') }}
      />

      <h1 className="text-3xl md:text-4xl font-bold mb-4 text-accent">Y71 Blog</h1>
      <p className="text-gray-300 mb-8 text-lg max-w-3xl">
        Guides, payment help, bonuses, referrals, and responsible gaming for Y71 players in Pakistan.
        Start with the featured review, then follow deposit, withdraw, and earn guides as needed.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {BLOG_POSTS.map((post) => (
          <article
            key={post.slug}
            className={`bg-secondary px-8 py-8 rounded-lg hover:shadow-lg transition-all border-2 ${
              post.featured ? 'border-accent' : 'border-gray-700 hover:border-accent'
            }`}
          >
            {post.featured && (
              <div className="inline-block bg-accent text-primary text-xs font-bold px-3 py-1 rounded-full mb-3">
                FEATURED
              </div>
            )}
            <h2 className="text-2xl font-bold mb-4 text-white">
              <Link href={`/blog/${post.slug}`} className="hover:text-accent transition-colors">
                {post.title}
              </Link>
            </h2>
            <p className="text-gray-300 mb-4">{post.description}</p>
            <div className="flex items-center gap-2 text-sm text-gray-400 mb-4">
              <time>{post.dateLabel}</time>
              <span>•</span>
              <span>{post.readTime}</span>
            </div>
            <Link href={`/blog/${post.slug}`} className="text-accent hover:underline font-semibold">
              Read More →
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}
