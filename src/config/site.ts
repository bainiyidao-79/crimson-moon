export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"
).replace(/\/+$/, "");

export type NavLink = { label: string; href: string };
export type NavGroup = { title: string; children: NavLink[] };

export type SiteConfig = {
  name: string;
  shortName: string;
  description: string;
  heroTitle: string;
  heroSubtitle: string;
  /** Hero 区顶部小徽章文字（如 "WIKI GUIDE"），空串则不显示 */
  eyebrow?: string;
  primaryCtaLabel: string;
  primaryCtaHref: string;

  // 官方链接
  platformUrl?: string;
  discordUrl?: string;
  youtubeChannelUrl?: string;

  // 顶部导航（Header 用的平铺链接；不填则取 nav 第一组前 4 项）
  topNav?: NavLink[];

  // 侧边栏目录树（按实际内容增减，不做死链接）
  nav: NavGroup[];

  // 首页 YouTube 视频
  heroVideo?: {
    youtubeId: string;
    title?: string;
    description?: string;
  };

  // 首页「Trending Now」：精选文章（不填则整块隐藏）
  trending?: { label: string; href: string; description?: string }[];

  // 首页「What is <Game>?」介绍区（不填则整块隐藏）
  gameIntro?: {
    title?: string;
    paragraphs: string[];
    facts?: { label: string; value: string }[];
  };

  // 底部 CTA 大横幅（光晕容器，不填则整块隐藏）
  ctaBanner?: {
    title: string;
    description?: string;
    buttonLabel: string;
    buttonHref: string;
  };

  // 广告位（骨架预制）：填入广告代码（HTML/JS）即生效；留空则完全不渲染不占位
  ads?: {
    /** 侧边栏底部广告位（菜单栏下方） */
    sidebar?: string;
    /** 页面底部 banner 广告位（页脚上方，每页都有） */
    footerBanner?: string;
  };

  // 可选：FAQ
  faq?: { question: string; answer: string }[];
};

export const siteConfig: SiteConfig = {
  name: "Crimson Moon",
  shortName: "Crimson Moon",
  description:
    "Crimson Moon is a gothic action RPG by ProbablyMonsters, out Sep 1, 2026 on PC, PS5 and Xbox. Missions, builds, co-op and system requirements explained.",
  heroTitle: "Crimson Moon Wiki",
  heroSubtitle: "Guides, Release Info, Builds & FAQ",
  eyebrow: "WIKI GUIDE",
  primaryCtaLabel: "Start with What Is Crimson Moon",
  primaryCtaHref: "/intro/what-is-crimson-moon",

  ads: {
    sidebar: `<script async="async" data-cfasync="false" src="https://pl31264263.profitableratecpmnetwork.com/d95f639e0523c472dcd3d65b37ca535a/invoke.js"></script>
<div id="container-d95f639e0523c472dcd3d65b37ca535a"></div>`,
    footerBanner: `<script>
  atOptions = {
    'key' : 'd6c99557f0b8c0ceecf07155967298db',
    'format' : 'iframe',
    'height' : 90,
    'width' : 728,
    'params' : {}
  };
</script>
<script src="https://www.highrevenueformat.com/d6c99557f0b8c0ceecf07155967298db/invoke.js"></script>`,
  },
  platformUrl: "https://store.steampowered.com/app/4317690/Crimson_Moon/",
  discordUrl: "https://discord.gg/playcrimsonmoon",
  youtubeChannelUrl: "https://www.youtube.com/@ProbablyMonsters",

  topNav: [
    { label: "Intro", href: "/intro/what-is-crimson-moon" },
    { label: "Release", href: "/release/release-date-and-platforms" },
    { label: "Price", href: "/release/price-and-editions" },
    { label: "Guides", href: "/guide/gameplay-and-combat" },
    { label: "FAQ", href: "/guide/faq-everything-we-know" },
  ],

  // 侧边栏目录树：与 src/content/en/ 实际内容一一对应（14 页 3 栏目）
  nav: [
    {
      title: "Intro",
      children: [
        { label: "What is Crimson Moon?", href: "/intro/what-is-crimson-moon" },
        { label: "Story and Setting", href: "/intro/story-and-setting" },
        { label: "The Developer", href: "/intro/crimson-moon-developer" },
      ],
    },
    {
      title: "Release",
      children: [
        { label: "Release Date & Platforms", href: "/release/release-date-and-platforms" },
        { label: "Price and Editions", href: "/release/price-and-editions" },
        { label: "Trailers", href: "/release/trailers" },
      ],
    },
    {
      title: "Guides",
      children: [
        { label: "Gameplay and Combat", href: "/guide/gameplay-and-combat" },
        { label: "Soulslike or Roguelike?", href: "/guide/soulslike-or-roguelike" },
        { label: "Crossplay and Co-op", href: "/guide/crossplay-and-co-op" },
        { label: "Steam Guide", href: "/guide/steam-guide" },
        { label: "Demo Guide", href: "/guide/demo-guide" },
        { label: "System Requirements", href: "/guide/pc-system-requirements" },
        { label: "How Long to Beat", href: "/guide/how-long-to-beat" },
        { label: "FAQ: Everything We Know", href: "/guide/faq-everything-we-know" },
      ],
    },
  ],

  heroVideo: {
    youtubeId: "uYnAqs5BC0E",
    title: "Crimson Moon | Official Gamescom Trailer",
    description:
      "The official Gamescom trailer for Crimson Moon - the gothic action RPG from ProbablyMonsters, out now on PC, PS5 and Xbox Series X|S.",
  },

  trending: [
    {
      label: "Release Date & Platforms",
      href: "/release/release-date-and-platforms",
      description: "Out Sep 1, 2026 on PC, PS5 and Xbox Series X|S - crossplay supported.",
    },
    {
      label: "Gameplay and Combat",
      href: "/guide/gameplay-and-combat",
      description: "The run loop, boon stacking, Purify Loot, Nephilim mode and 2-player co-op explained.",
    },
    {
      label: "Price and Editions",
      href: "/release/price-and-editions",
      description: "Standard $19.99 vs Deluxe Upgrade - what each edition includes.",
    },
    {
      label: "How Long to Beat",
      href: "/guide/how-long-to-beat",
      description: "Missions of 15-45 minutes across three districts - what hands-on coverage says.",
    },
  ],

  gameIntro: {
    title: "What is Crimson Moon?",
    paragraphs: [
      "Crimson Moon is a gothic action RPG from ProbablyMonsters. Play a Nephilim reclaiming the fallen city of Gildenarch from demons, vampires and undead - solo or in 2-player online co-op, with Souls-inspired combat in roguelite missions of 15-45 minutes.",
      "Out now on PC, PS5 and Xbox Series X|S for $19.99, with crossplay support and a Deluxe Edition upgrade that includes extra equipment and access to a future post-launch expansion.",
    ],
    facts: [
      { label: "Release Date", value: "September 1, 2026" },
      { label: "Developer", value: "ProbablyMonsters" },
      { label: "Platforms", value: "PC / PS5 / Xbox Series X|S" },
      { label: "Price", value: "$19.99" },
      { label: "Genre", value: "Action RPG (Soulslike + Roguelite)" },
      { label: "Co-op", value: "2-player online, crossplay" },
    ],
  },

  ctaBanner: {
    title: "Ready to Reclaim Gildenarch?",
    description:
      "Grab Crimson Moon for $19.99 or join the official Discord for build talk and patch news.",
    buttonLabel: "Get it on Steam",
    buttonHref: "https://store.steampowered.com/app/4317690/Crimson_Moon/",
  },

  ads: {
    sidebar: `<script async="async" data-cfasync="false" src="https://pl31036462.profitableratecpmnetwork.com/451eb73e616cf113813a1a0246327f1c/invoke.js"></script> <div id="container-451eb73e616cf113813a1a0246327f1c"></div>`,
    footerBanner: `<script> atOptions = { 'key' : '0956a07eeaa1b83c5493388661a88e44', 'format' : 'iframe', 'height' : 90, 'width' : 728, 'params' : {} }; </script> <script src="https://www.highrevenueformat.com/0956a07eeaa1b83c5493388661a88e44/invoke.js"></script>`,
  },

  faq: [
    {
      question: "When did Crimson Moon come out?",
      answer:
        "September 1, 2026, on PC (Steam), PS5 and Xbox Series X|S - a simultaneous worldwide launch.",
    },
    {
      question: "Does Crimson Moon have crossplay?",
      answer:
        "Yes. Cross-platform play between PC and console works for the 2-player online co-op and can be disabled in settings.",
    },
    {
      question: "Is there a Crimson Moon demo?",
      answer:
        "A pre-launch demo let players try one loadout, the hub blacksmith and a slice of Gildenarch. Whether it remains downloadable after launch is to be confirmed - the full game is out now.",
    },
    {
      question: "Does Crimson Moon have DLC?",
      answer:
        "Two DLC items exist: a Deluxe Edition Upgrade (extra equipment + future expansion access) and the official soundtrack.",
    },
  ],
};
