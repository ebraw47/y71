import Link from 'next/link';
import { getRelatedBlogPosts } from '@/lib/blogPosts';

type RelatedGuidesProps = {
  slug: string;
};

export default function RelatedGuides({ slug }: RelatedGuidesProps) {
  const related = getRelatedBlogPosts(slug, 4);
  if (related.length === 0) return null;

  return (
    <aside className="mt-12 pt-8 border-t border-gray-800" aria-labelledby="related-guides-heading">
      <h2 id="related-guides-heading" className="text-2xl font-bold text-white mb-4">
        Related Y71 Guides
      </h2>
      <ul className="space-y-3">
        {related.map((post) => (
          <li key={post.slug}>
            <Link
              href={`/blog/${post.slug}`}
              className="block rounded-xl border border-gray-800 bg-secondary/40 px-4 py-3 hover:border-accent transition-colors"
            >
              <span className="text-accent font-semibold">{post.title}</span>
              <span className="block text-sm text-gray-400 mt-1">{post.description}</span>
            </Link>
          </li>
        ))}
      </ul>
      <p className="mt-4 text-sm text-gray-500">
        Browse all guides on the{' '}
        <Link href="/blog" className="text-accent hover:underline">
          Y71 blog
        </Link>
        .
      </p>
    </aside>
  );
}
