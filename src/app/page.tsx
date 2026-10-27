import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import DownloadButton from '@/components/DownloadButton';
import FaqList from '@/components/FaqList';
import ScreenshotCarousel from '@/components/ScreenshotCarousel';
import {
  APP_OS,
  APP_SIZE,
  APP_VERSION,
  BRAND_NAME,
  DOWNLOAD_APP_URL,
  HERO_LOGO_PATH,
  LOGO_PATH,
  MIN_AGE,
  SITE_URL,
  SUPPORT_EMAIL,
} from '@/lib/constants';
import {
  apkFeatures,
  appInfoRows,
  bonusList,
  cons,
  depositRewards,
  depositSteps,
  downloadSteps,
  faqs,
  gameCategories,
  pros,
  requirements,
  tips,
  troubleshooting,
  whyFeatures,
  withdrawSteps,
} from '@/lib/homeContent';
import { Y71_SHOTS } from '@/lib/screenshots';

export const metadata: Metadata = {
  title: 'Y71 Game 2026 – Play & Earn Real Money Online in Pakistan',
  description:
    'Y71 Game Pakistan — download APK v1.1.1, register with +92, deposit via JazzCash & EasyPaisa QR, claim up to 30% first deposit bonus, invite friends and withdraw. 18+ only.',
  keywords: [
    'Y71',
    'Y71 Game',
    'Y71 APK',
    'Y71 download',
    'Y71 Pakistan',
    'Y71 login',
    'Y71 register',
    'Y71 JazzCash',
    'Y71 EasyPaisa',
    'Y71 referral',
    'Y71 Game 2026',
    'y71.net.pk',
  ],
  alternates: { canonical: SITE_URL },
  openGraph: {
    title: 'Y71 Game 2026 – Play & Earn in Pakistan',
    description:
      'Download Y71 APK v1.1.1 — JazzCash, EasyPaisa, first deposit bonus up to 30%, referral spins & 24/7 support.',
    url: SITE_URL,
    siteName: BRAND_NAME,
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: `${SITE_URL}/feature/og-image.webp`,
        width: 1200,
        height: 630,
        alt: 'Y71 Game Pakistan',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Y71 Game Pakistan — Play & Earn 2026',
    description: 'Y71 APK v1.1.1 with JazzCash, EasyPaisa, bonuses & referral rewards. 18+.',
    images: [`${SITE_URL}/feature/og-image.webp`],
  },
};

const screenshots = [
  Y71_SHOTS.invitation,
  Y71_SHOTS.register,
  Y71_SHOTS.login,
  Y71_SHOTS.deposit,
  Y71_SHOTS.depositReward,
  Y71_SHOTS.withdraw,
  Y71_SHOTS.support,
  Y71_SHOTS.downloadReward,
  Y71_SHOTS.spinInvite,
  Y71_SHOTS.cashEveryday,
].map(({ src, alt, title }) => ({ src, alt, title }));

export default function HomePage() {
  const schemaData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': `${SITE_URL}/#organization`,
        name: BRAND_NAME,
        url: SITE_URL,
        logo: `${SITE_URL}${LOGO_PATH}`,
        description:
          'Y71 Game Pakistan — play-and-earn mini-games with JazzCash, EasyPaisa, bonuses and referral rewards.',
        areaServed: { '@type': 'Country', name: 'Pakistan', alternateName: 'PK' },
        contactPoint: {
          '@type': 'ContactPoint',
          contactType: 'customer support',
          email: SUPPORT_EMAIL,
          areaServed: 'PK',
          availableLanguage: ['English', 'Urdu'],
        },
      },
      {
        '@type': 'WebSite',
        '@id': `${SITE_URL}/#website`,
        url: SITE_URL,
        name: 'Y71 Game Pakistan',
        publisher: { '@id': `${SITE_URL}/#organization` },
        inLanguage: 'en-PK',
      },
      {
        '@type': 'SoftwareApplication',
        name: 'Y71 Game',
        operatingSystem: 'Android',
        applicationCategory: 'GameApplication',
        softwareVersion: APP_VERSION,
        fileSize: APP_SIZE,
        offers: { '@type': 'Offer', price: '0', priceCurrency: 'PKR' },
        downloadUrl: DOWNLOAD_APP_URL,
      },
      {
        '@type': 'FAQPage',
        mainEntity: faqs.map((f) => ({
          '@type': 'Question',
          name: f.q,
          acceptedAnswer: { '@type': 'Answer', text: f.a },
        })),
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      {/* Hero */}
      <section className="dx-hero relative py-12 md:py-20 px-4 overflow-hidden">
        <div className="dx-hero-bg" aria-hidden="true">
          <span className="dx-hero-orb dx-hero-orb-a" />
          <span className="dx-hero-orb dx-hero-orb-b" />
          <span className="dx-hero-orb dx-hero-orb-c" />
          <span className="dx-hero-grid" />
          <span className="dx-hero-fade" />
        </div>
        <div className="container mx-auto relative z-[1]">
          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
            <div className="flex-1 w-full max-w-xl mx-auto lg:mx-0 lg:max-w-none text-center lg:text-left">
              <h1 className="mb-4 text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight">
                Y71 Game
              </h1>
              <p className="text-xl md:text-2xl font-semibold mb-4 text-cyan">
                Play &amp; Earn Real Money Online in Pakistan — 2026
              </p>
              <p className="text-base sm:text-lg text-gray-300 leading-relaxed mb-8 text-balance">
                Grab <strong className="text-white">Y71 {APP_VERSION}</strong> · sign up with{' '}
                <strong className="text-white">+92</strong> · fund with{' '}
                <strong className="text-white">JazzCash</strong> &amp;{' '}
                <strong className="text-white">EasyPaisa</strong> · unlock bonuses, invite friends,
                cash out fast.
              </p>
              <div className="flex justify-center lg:justify-start mb-8">
                <DownloadButton size="lg" label="PLAY NOW" />
              </div>
              <div className="grid grid-cols-3 gap-4 max-w-md mx-auto lg:mx-0">
                {[
                  { n: 'PKR', l: 'Wallets' },
                  { n: '30%', l: '1st Deposit' },
                  { n: '24/7', l: 'Support' },
                ].map((s) => (
                  <div key={s.l} className="text-center lg:text-left">
                    <div className="text-2xl font-bold text-accent">{s.n}</div>
                    <div className="text-sm text-gray-400">{s.l}</div>
                  </div>
                ))}
              </div>
              <p className="text-sm text-gray-500 mt-4 text-center lg:text-left">
                *Android APK {APP_VERSION} · {APP_SIZE} · {APP_OS} · JazzCash &amp; EasyPaisa ready
              </p>
            </div>
            <div className="flex-1 flex flex-col items-center justify-center gap-4">
              <div className="relative w-56 h-56 sm:w-72 sm:h-72 md:w-80 md:h-80">
                <div className="absolute inset-0 rounded-full bg-accent/20 blur-3xl" aria-hidden="true" />
                <div className="relative z-[1] w-full h-full overflow-hidden rounded-[24%] bg-transparent">
                  <Image
                    src={`${HERO_LOGO_PATH}?v=8`}
                    alt="Y71 Game official logo"
                    width={640}
                    height={640}
                    className="w-full h-full object-contain bg-transparent drop-shadow-[0_0_40px_rgba(251,223,3,0.35)]"
                    priority
                    quality={100}
                    unoptimized
                  />
                </div>
              </div>
              <div className="text-center max-w-xs">
                <span
                  className="inline-flex items-center justify-center rounded-md border-2 border-accent bg-accent/20 px-4 py-1.5 text-lg font-extrabold tracking-wide text-accent"
                  aria-label={`${MIN_AGE} plus only`}
                >
                  {MIN_AGE}+
                </span>
                <p className="mt-3 text-sm md:text-[0.95rem] font-medium leading-relaxed tracking-wide text-accent/90">
                  Adults only · Play smart · Keep essentials safe
                  <span className="block mt-1 text-accent/70 font-normal tracking-normal">
                    Wins aren’t guaranteed — enjoy the game.
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* App info */}
      <section className="py-14 px-4">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-3 text-white">
            Y71 Game App Information
          </h2>
          <p className="text-center text-gray-400 mb-8 max-w-2xl mx-auto">
            Quick facts for Pakistan players before you download and register. Limits and bonuses can
            change — always confirm inside the live lobby.
          </p>
          <div className="y71-table-wrap">
            <table className="y71-table">
              <thead>
                <tr>
                  <th scope="col">Feature</th>
                  <th scope="col">Information</th>
                </tr>
              </thead>
              <tbody>
                {appInfoRows.map((row) => (
                  <tr key={row.label}>
                    <td>{row.label}</td>
                    <td>{row.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="flex justify-center mt-8">
            <DownloadButton size="md" label="JOIN Y71 NOW" />
          </div>
        </div>
      </section>

      {/* What is */}
      <section className="py-14 px-4 bg-black/20">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">What Is Y71 Game?</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            Y71 Game is a secure play-and-earn platform where players in Pakistan enjoy thrilling
            mini-games and promotional rewards. Deposit funds, play your favorite titles, and request
            withdrawals through JazzCash, EasyPaisa or Bank — subject to the rules shown in the app.
          </p>
          <p className="text-gray-300 leading-relaxed mb-4">
            The lobby combines slots, fishing, poker, live-style tables, sports and lottery sections
            behind one +92 account. Daily login rewards, treasure boxes, referral spins, VIP-style
            levels, Invitation Challenge and seasonal events keep every session packed with chances to
            earn. Treat gaming as entertainment: results are never guaranteed.
          </p>
          <p className="text-gray-400 text-sm leading-relaxed">
            Y71 is distributed as an Android APK and web lobby (not Google Play). Use only the official
            referral link on this site. {MIN_AGE}+ only.
          </p>
        </div>
      </section>

      {/* Why download */}
      <section className="py-14 px-4">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-3 text-white">
            Why Download Y71 Game APK?
          </h2>
          <p className="text-center text-gray-400 mb-10 max-w-2xl mx-auto">
            Built for Pakistani Android users who want JazzCash / EasyPaisa payments and a
            golden shiny mobile lobby.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyFeatures.map((f) => (
              <div
                key={f.title}
                className="rounded-2xl border border-accent/20 bg-gradient-to-br from-maroon/40 to-primary/80 p-6 shadow-lg"
              >
                <h3 className="text-xl font-bold text-accent mb-2">{f.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{f.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* APK features */}
      <section className="py-14 px-4 bg-black/20">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-white">Features of Y71 Game APK</h2>
          <p className="text-gray-400 mb-8">
            Extra platform traits players look for when comparing earning apps in Pakistan.
          </p>
          <ul className="grid sm:grid-cols-2 gap-3">
            {apkFeatures.map((item) => (
              <li
                key={item}
                className="rounded-xl border border-accent/15 bg-primary/60 px-4 py-3 text-sm text-gray-300"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Game types */}
      <section className="py-14 px-4">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-3 text-white">
            Types of Games on Y71
          </h2>
          <p className="text-center text-gray-400 mb-10 max-w-2xl mx-auto">
            Titles and providers rotate — treat this as a guide to what the lobby commonly shows, not
            a permanent catalogue.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {gameCategories.map((cat) => (
              <div
                key={cat.title}
                className="rounded-2xl border border-accent/20 bg-gradient-to-br from-maroon/30 to-primary/70 p-6"
              >
                <h3 className="text-lg font-bold text-accent mb-3">{cat.title}</h3>
                <ul className="flex flex-wrap gap-2">
                  {cat.items.map((g) => (
                    <li
                      key={g}
                      className="rounded-lg border border-white/10 bg-black/30 px-3 py-1.5 text-sm text-gray-200"
                    >
                      {g}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Screenshots */}
      <section className="py-14 px-4 bg-black/20">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-3 text-white">
            Y71 Game Screenshots
          </h2>
          <p className="text-center text-gray-400 mb-8">
            Login, register, deposit, withdraw, bonuses, spins and support — real lobby views.
          </p>
          <ScreenshotCarousel screenshots={screenshots} />
        </div>
      </section>

      {/* Requirements */}
      <section className="py-14 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Requirements to Download Y71 Game APK
          </h2>
          <ul className="space-y-3 text-gray-300">
            {requirements.map((r) => (
              <li key={r} className="flex gap-3">
                <span className="text-accent font-bold">•</span>
                <span>{r}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* How to download */}
      <section className="py-14 px-4 bg-black/20">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            How to Download Y71 Game APK
          </h2>
          <ol className="space-y-4 text-gray-300">
            {downloadSteps.map((step, i) => (
              <li key={step} className="flex gap-3">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-accent text-primary font-bold flex items-center justify-center">
                  {i + 1}
                </span>
                <span className="pt-1">{step}</span>
              </li>
            ))}
          </ol>
          <div className="mt-8">
            <DownloadButton size="md" label="DOWNLOAD APK NOW" />
          </div>
          <p className="text-sm text-gray-500 mt-4">
            More detail:{' '}
            <Link href="/download-y71" className="text-accent hover:underline">
              Download Y71 page
            </Link>{' '}
            ·{' '}
            <Link
              href="/blog/how-to-download-install-y71-apk-pakistan"
              className="text-accent hover:underline"
            >
              install guide
            </Link>
          </p>
        </div>
      </section>

      {/* Register / Login */}
      <section className="py-14 px-4">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            How to Register &amp; Login on Y71
          </h2>
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div>
              <h3 className="text-xl font-bold text-accent mb-3">Registration (Sign-Up)</h3>
              <ol className="list-decimal list-inside space-y-2 text-gray-300 mb-6">
                <li>Open Y71 and tap Register.</li>
                <li>Enter your Pakistan +92 mobile number and create a password.</li>
                <li>Confirm password; add invite code if you have one.</li>
                <li>Agree to the Privacy Agreement and tap Register.</li>
              </ol>
              <h3 className="text-xl font-bold text-accent mb-3">Login (Sign-In)</h3>
              <ol className="list-decimal list-inside space-y-2 text-gray-300 mb-6">
                <li>Open the Login tab.</li>
                <li>Enter your registered +92 number and password.</li>
                <li>Or use Google Quick Login when available.</li>
              </ol>
              <h3 className="text-xl font-bold text-accent mb-3">Connect Your Wallet</h3>
              <ol className="list-decimal list-inside space-y-2 text-gray-300">
                <li>Go to Wallet / Withdrawal and choose JazzCash or EasyPaisa.</li>
                <li>Enter real name, phone number and required ID details.</li>
                <li>Confirm so deposits and payouts can bind to your account.</li>
              </ol>
            </div>
            <div className="relative mx-auto w-full max-w-xs rounded-2xl overflow-hidden border border-accent/30 shadow-gold-sm">
              <Image
                src="/y71-shots/register.webp"
                alt="Y71 Game register signup with +92 and invite code"
                width={529}
                height={1024}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Deposit */}
      <section className="py-14 px-4 bg-black/20">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            How to Deposit with JazzCash &amp; EasyPaisa
          </h2>
          <p className="text-gray-300 mb-6 max-w-3xl">
            Open Deposit, choose EasyPaisaQR, JazzCashQR, EasyPaisa, JazzCash or P2P-payment, pick an
            Instant Deposit channel, enter an amount (live limits often show Min 100 / Max
            50,000–100,000), then confirm. For QR deposits, finish before the countdown expires and
            never reuse an old code.
          </p>
          <ol className="space-y-2 text-gray-300 mb-8 max-w-3xl">
            {depositSteps.map((s, i) => (
              <li key={s} className="flex gap-2">
                <span className="text-accent font-semibold">{i + 1}.</span>
                <span>{s}</span>
              </li>
            ))}
          </ol>
          <div className="grid md:grid-cols-2 gap-8 items-start mb-10">
            <div className="relative mx-auto w-full max-w-xs rounded-2xl overflow-hidden border border-accent/30">
              <Image
                src="/y71-shots/deposit.webp"
                alt="Y71 deposit EasyPaisa JazzCash QR methods"
                width={529}
                height={1024}
                className="w-full h-auto"
              />
            </div>
            <div>
              <h3 className="text-xl font-bold text-accent mb-3">First Deposit Bonus (up to 30%)</h3>
              <p className="text-gray-400 text-sm mb-4">
                Example reward tiers shown in the app. Higher deposits may show a lower effective %.
                Offers can change — verify live terms.
              </p>
              <div className="y71-table-wrap">
                <table className="y71-table">
                  <thead>
                    <tr>
                      <th scope="col">Deposit amount</th>
                      <th scope="col">Reward amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    {depositRewards.map((r) => (
                      <tr key={r.deposit}>
                        <td>{r.deposit}</td>
                        <td>{r.reward}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="mt-6">
                <Link
                  href="/deposit-money-in-y71"
                  className="text-accent hover:underline font-medium"
                >
                  Full Y71 deposit guide →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Withdraw */}
      <section className="py-14 px-4">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            How to Withdraw on Y71 Game
          </h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <ol className="space-y-3 text-gray-300 mb-4">
                {withdrawSteps.map((s, i) => (
                  <li key={s}>
                    {i + 1}. {s}
                  </li>
                ))}
              </ol>
              <p className="text-sm text-gray-400 mb-4">
                Withdrawals do not need extra permissions or approvals — submit from Withdraw and funds
                go to your JazzCash, EasyPaisa or Bank account. A ~3% platform fee and daily caps may
                still apply; follow the live Withdraw screen.
              </p>
              <Link href="/withdraw-money-from-y71" className="text-accent hover:underline font-medium">
                Full withdraw guide →
              </Link>
            </div>
            <div className="relative mx-auto w-full max-w-xs rounded-2xl overflow-hidden border border-accent/30">
              <Image
                src="/y71-shots/withdraw.webp"
                alt="Y71 withdraw EasyPaisa JazzCash Bank"
                width={515}
                height={1024}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Bonuses */}
      <section className="py-14 px-4 bg-black/20">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-3 text-white">
            Rewards &amp; Bonuses on Y71
          </h2>
          <p className="text-center text-gray-400 mb-10 max-w-2xl mx-auto">
            Promotions rotate. Eligibility and timers live inside Promo / Earn — never assume every
            advertised reward is cash-withdrawable.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {bonusList.map((b) => (
              <div
                key={b.title}
                className="rounded-2xl border border-accent/20 bg-gradient-to-br from-maroon/40 to-primary/80 p-6"
              >
                <h3 className="text-lg font-bold text-accent mb-2">{b.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{b.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Referral */}
      <section className="py-14 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Y71 Referral &amp; Invitation Challenge
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Open Earn to copy your invitation link, save the QR code, and share on WhatsApp, Facebook
            or Telegram. Invitation Challenge and Cash Everyday events can add extra spins and
            commissions when friends join under the current program rules. Agent banners may advertise
            very high monthly ceilings — treat those as marketing, not typical results.
          </p>
        </div>
      </section>

      {/* Troubleshooting */}
      <section className="py-14 px-4 bg-black/20">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Download Issues &amp; Fixes
          </h2>
          <div className="space-y-4">
            {troubleshooting.map((t) => (
              <div
                key={t.title}
                className="rounded-xl border border-accent/15 bg-primary/50 px-5 py-4"
              >
                <h3 className="font-bold text-accent mb-1">{t.title}</h3>
                <p className="text-sm text-gray-300">{t.fix}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tips */}
      <section className="py-14 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Tips for Responsible Play on Y71
          </h2>
          <ul className="grid sm:grid-cols-2 gap-3 text-gray-300">
            {tips.map((t) => (
              <li
                key={t}
                className="rounded-xl border border-accent/15 bg-primary/60 px-4 py-3 text-sm"
              >
                {t}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Pros / Cons */}
      <section className="py-14 px-4 bg-black/20">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-white">
            Pros and Cons of Y71 Game
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="rounded-2xl border border-accent/25 bg-gradient-to-br from-maroon/40 to-primary/80 p-6">
              <h3 className="text-xl font-bold text-accent mb-4">Pros</h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                {pros.map((p) => (
                  <li key={p} className="flex gap-2">
                    <span className="text-accent">+</span>
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-white/10 bg-primary/70 p-6">
              <h3 className="text-xl font-bold text-white mb-4">Cons</h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                {cons.map((c) => (
                  <li key={c} className="flex gap-2">
                    <span className="text-gray-500">−</span>
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-14 px-4">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-white">
            Y71 Game FAQs
          </h2>
          <FaqList faqs={faqs} />
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-3xl text-center rounded-3xl border border-accent/30 bg-gradient-to-br from-maroon/50 to-primary p-10 shadow-gold">
          <h2 className="text-3xl font-bold text-white mb-3">Start Y71 Game Today</h2>
          <p className="text-gray-300 mb-8">
            Download the APK, register with +92, and explore JazzCash &amp; EasyPaisa play in Pakistan.
            {MIN_AGE}+ only. Play responsibly — winnings are never guaranteed.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
            <DownloadButton size="lg" label="DOWNLOAD NOW" />
            <DownloadButton size="lg" label="REGISTER / LOGIN" variant="outline" />
          </div>
        </div>
      </section>
    </>
  );
}
