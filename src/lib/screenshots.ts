export type Y71Shot = {
  src: string;
  alt: string;
  title: string;
  width: number;
  height: number;
};

export const Y71_SHOTS = {
  login: {
    src: '/y71-shots/login.webp',
    alt: 'Y71 Game login with Pakistan +92 phone and Google quick login',
    title: 'Login — +92 & Google',
    width: 536,
    height: 1024,
  },
  register: {
    src: '/y71-shots/register.webp',
    alt: 'Y71 Game register with invite code for Pakistan players',
    title: 'Register / Sign-Up',
    width: 529,
    height: 1024,
  },
  deposit: {
    src: '/y71-shots/deposit.webp',
    alt: 'Y71 deposit with EasyPaisa QR, JazzCash QR, EasyPaisa, JazzCash and P2P',
    title: 'Deposit — JazzCash & EasyPaisa',
    width: 529,
    height: 1024,
  },
  depositReward: {
    src: '/y71-shots/deposit-reward.webp',
    alt: 'Y71 first deposit bonus table up to 30 percent reward',
    title: 'First Deposit Bonus up to 30%',
    width: 514,
    height: 1024,
  },
  withdraw: {
    src: '/y71-shots/withdraw.webp',
    alt: 'Y71 withdraw with EasyPaisa, JazzCash and Bank',
    title: 'Withdraw',
    width: 515,
    height: 1024,
  },
  invitation: {
    src: '/y71-shots/invitation-challenge.webp',
    alt: 'Y71 invitation challenge lucky wheel earn bonus',
    title: 'Invitation Challenge',
    width: 512,
    height: 1024,
  },
  support: {
    src: '/y71-shots/support.webp',
    alt: 'Y71 24/7 support centre Telegram WhatsApp Facebook',
    title: 'Support Centre',
    width: 518,
    height: 1024,
  },
  downloadReward: {
    src: '/y71-shots/download-reward.webp',
    alt: 'Y71 download the app get bonus popup',
    title: 'Download App Bonus',
    width: 512,
    height: 1024,
  },
  spinInvite: {
    src: '/y71-shots/spin-invite.webp',
    alt: 'Y71 free spin invite friends share WhatsApp Facebook Telegram',
    title: 'Spin & Invite',
    width: 511,
    height: 1024,
  },
  cashEveryday: {
    src: '/y71-shots/cash-everyday.webp',
    alt: 'Y71 cash everyday treasure chests and referral code',
    title: 'Cash Everyday',
    width: 517,
    height: 1024,
  },
} as const satisfies Record<string, Y71Shot>;
