/** Canonical Y71 blog catalog for index, sitemaps, and internal linking */

export type BlogPostMeta = {
  slug: string;
  title: string;
  description: string;
  readTime: string;
  featured?: boolean;
  dateLabel: string;
};

export const BLOG_POSTS: BlogPostMeta[] = [
  {
    slug: 'y71-app-review-2026',
    title: 'Y71 App Review 2026',
    description:
      'Honest review: earning games, JazzCash & EasyPaisa, pros, cons, and payout notes for Pakistan.',
    readTime: '12 min read',
    featured: true,
    dateLabel: 'October 2026',
  },
  {
    slug: 'how-to-download-install-y71-apk-pakistan',
    title: 'How to Download & Install Y71 APK in Pakistan',
    description: 'Step-by-step Android install: official APK, unknown sources, and troubleshooting.',
    readTime: '10 min read',
    dateLabel: 'October 2026',
  },
  {
    slug: 'create-y71-account-and-login',
    title: 'How to Create a Y71 Account and Login',
    description: 'Register, set credentials, and log in safely on your Pakistani number.',
    readTime: '6 min read',
    dateLabel: 'October 2026',
  },
  {
    slug: 'y71-deposit-jazzcash-easypaisa-guide',
    title: 'Y71 Deposit Guide: JazzCash & EasyPaisa',
    description: 'Add balance with local wallets, fix delayed credits, and avoid common mistakes.',
    readTime: '8 min read',
    dateLabel: 'October 2026',
  },
  {
    slug: 'y71-withdraw-money-guide',
    title: 'Y71 Withdraw Money Guide',
    description: 'Cash out to JazzCash or EasyPaisa — and fix failed requests.',
    readTime: '9 min read',
    dateLabel: 'October 2026',
  },
  {
    slug: 'y71-bonus-promotions-guide',
    title: 'Y71 Bonus & Promotions Guide 2026',
    description: 'First deposit up to 30%, daily check-in, lucky wheel, VIP rebates and claim tips.',
    readTime: '9 min read',
    dateLabel: 'November 2026',
  },
  {
    slug: 'y71-referral-invite-code-guide',
    title: 'Y71 Referral & Invite Code Guide',
    description: 'Use an invite code, share Earn links/QR, and understand agent reward rules.',
    readTime: '8 min read',
    dateLabel: 'November 2026',
  },
  {
    slug: 'how-to-earn-money-on-y71',
    title: 'How to Earn Money on Y71 App (Pakistan)',
    description: 'Realistic earn paths: games, check-ins, referrals, deposits and withdrawals.',
    readTime: '10 min read',
    dateLabel: 'November 2026',
  },
  {
    slug: 'y71-minimum-deposit-withdrawal-limits',
    title: 'Y71 Minimum Deposit & Withdrawal Limits',
    description: 'Typical PKR min/max, fees and daily caps for JazzCash & EasyPaisa.',
    readTime: '7 min read',
    dateLabel: 'November 2026',
  },
  {
    slug: 'y71-login-problems-forgot-password',
    title: 'Y71 Login Problems & Forgot Password Fix',
    description: 'Fix login failed, OTP issues, wrong password and account lockouts safely.',
    readTime: '7 min read',
    dateLabel: 'November 2026',
  },
  {
    slug: 'y71-customer-care-support',
    title: 'Y71 Customer Care & Support Guide',
    description: 'In-app live chat, Telegram/WhatsApp shortcuts, and what proof to send.',
    readTime: '6 min read',
    dateLabel: 'November 2026',
  },
  {
    slug: 'is-y71-real-or-fake',
    title: 'Is Y71 Real or Fake? Scam Check for Pakistan',
    description: 'Spot fake APKs, fake agents and payment traps before you deposit.',
    readTime: '8 min read',
    dateLabel: 'November 2026',
  },
  {
    slug: 'is-y71-safe-legal-pakistan',
    title: 'Is Y71 Safe and Legal in Pakistan?',
    description: 'Official download tips, scam warnings, and responsible play.',
    readTime: '12 min read',
    dateLabel: 'October 2026',
  },
  {
    slug: 'how-to-use-y71-app-pakistan-guide',
    title: 'How to Use Y71 App in Pakistan: Beginner Guide',
    description: 'End-to-end: download, register, deposit, play, withdraw, and stay in control.',
    readTime: '14 min read',
    dateLabel: 'October 2026',
  },
];

export const BLOG_SLUGS = BLOG_POSTS.map((p) => p.slug);

/** High-priority guides for homepage internal linking */
export const HOMEPAGE_GUIDE_LINKS = [
  'how-to-download-install-y71-apk-pakistan',
  'y71-bonus-promotions-guide',
  'y71-deposit-jazzcash-easypaisa-guide',
  'y71-withdraw-money-guide',
  'how-to-earn-money-on-y71',
  'y71-referral-invite-code-guide',
  'is-y71-real-or-fake',
  'y71-login-problems-forgot-password',
] as const;

export function getBlogPost(slug: string): BlogPostMeta | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug);
}

export function getRelatedBlogPosts(slug: string, limit = 4): BlogPostMeta[] {
  const current = getBlogPost(slug);
  if (!current) return BLOG_POSTS.filter((p) => p.slug !== slug).slice(0, limit);

  const others = BLOG_POSTS.filter((p) => p.slug !== slug);
  const related = others.filter((p) => {
    const a = current.title.toLowerCase();
    const b = p.title.toLowerCase();
    return (
      (a.includes('deposit') && b.includes('deposit')) ||
      (a.includes('withdraw') && b.includes('withdraw')) ||
      (a.includes('bonus') && (b.includes('earn') || b.includes('referral') || b.includes('bonus'))) ||
      (a.includes('referral') && (b.includes('earn') || b.includes('bonus'))) ||
      (a.includes('login') && (b.includes('account') || b.includes('login') || b.includes('support'))) ||
      (a.includes('safe') && (b.includes('real') || b.includes('fake') || b.includes('safe'))) ||
      (a.includes('real') && (b.includes('safe') || b.includes('support'))) ||
      (a.includes('earn') && (b.includes('bonus') || b.includes('referral') || b.includes('withdraw'))) ||
      (a.includes('download') && (b.includes('login') || b.includes('beginner') || b.includes('use'))) ||
      ((a.includes('beginner') || a.includes('use y71')) &&
        (b.includes('download') || b.includes('deposit')))
    );
  });

  const picked = [...related];
  for (const p of others) {
    if (picked.length >= limit) break;
    if (!picked.some((x) => x.slug === p.slug)) picked.push(p);
  }
  return picked.slice(0, limit);
}
