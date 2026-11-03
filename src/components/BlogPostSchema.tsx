import { SITE_URL } from '@/lib/constants';

function safeJsonLd(obj: object): string {
  return JSON.stringify(obj).replace(/</g, '\\u003c');
}

type BlogPostSchemaProps = {
  title: string;
  description: string;
  slug: string;
  datePublished: string;
  dateModified?: string;
  image?: string;
  breadcrumbOnly?: boolean;
};

export default function BlogPostSchema({
  title,
  description,
  slug,
  datePublished,
  dateModified,
  image = `${SITE_URL}/y71-logo.webp`,
  breadcrumbOnly = false,
}: BlogPostSchemaProps) {
  const url = `${SITE_URL}/blog/${slug}`;
  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE_URL}/blog` },
      { '@type': 'ListItem', position: 3, name: title, item: url },
    ],
  };
  const article = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    image,
    author: { '@type': 'Organization', name: 'Y71', url: SITE_URL },
    publisher: {
      '@type': 'Organization',
      name: 'Y71',
      logo: { '@type': 'ImageObject', url: `${SITE_URL}/y71-logo.webp`, width: 512, height: 512 },
    },
    datePublished,
    dateModified: dateModified || datePublished,
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
    inLanguage: 'en-PK',
    isAccessibleForFree: true,
    about: {
      '@type': 'SoftwareApplication',
      name: 'Y71 Game',
      applicationCategory: 'GameApplication',
      operatingSystem: 'Android',
    },
  };
  return (
    <div suppressHydrationWarning style={{ display: "contents" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(breadcrumb) }}
      />
      {!breadcrumbOnly && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: safeJsonLd(article) }}
        />
      )}
    </div>
  );
}
