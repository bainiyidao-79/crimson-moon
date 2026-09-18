export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"
).replace(/\/+$/, "");

export type NavLink = { label: string; href: string };
export type NavGroup = { title: string; children: NavLink[] };

/** 首页轮播页（固定 3 篇；少于 3 篇时轮播按实际条数渲染） */
export type CarouselSlide = {
  /** 轮播配图（放 public/images/，宽高比按 790:292 裁切） */
  image: string;
  title: string;
  href: string;
};

/** 右侧游戏信息卡的字段行（原站字段：制作公司/发行公司/发售日期/游戏平台/游戏类型） */
export type GameInfoField = { label: string; value: string };

/** 左视频列的 YouTube 条目（官方频道代表作优先；2–4 个） */
export type VideoItem = { youtubeId: string; title: string };

/**
 * 主题色 token 名（供组件以 var() 引用）。
 * ⚠️ 色值唯一来源 = src/app/globals.css 的 @theme 块，本文件不重复定义色值。
 * 每站正式配色由 g-art-design 从游戏官方素材提取后覆盖 globals.css 的三个主槽位。
 */
export const themeTokens = {
  primary: "--color-primary",
  accent: "--color-accent",
  auxiliary: "--color-auxiliary",
} as const;

export type SiteConfig = {
  /** 游戏名（全站唯一来源） */
  name: string;
  shortName: string;

  /** SEO 三件套 */
  seo: {
    title: string;
    description: string;
    keywords: string;
  };

  /** Hero 大图区（无顶栏，Hero 直顶） */
  hero: {
    /** keyart 大图路径；同时用作内容页右栏 banner */
    image: string;
    eyebrow?: string;
    title: string;
    subtitle?: string;
  };

  /** 首页横向轮播：3 篇，5s 自动换页 */
  carousel: {
    autoPlayMs: number;
    slides: CarouselSlide[];
  };

  /** 右侧游戏信息卡 */
  gameInfo: {
    title: string;
    /** 封面图路径（125×166 比例） */
    cover: string;
    fields: GameInfoField[];
    /** Steam 入口按钮（文案统一 View on Steam ↗） */
    ctaLabel: string;
    ctaHref: string;
  };

  /** 左视频列 YouTube id 列表（2–4 个，数量由右攻略区高度反推） */
  videos: VideoItem[];

  /** 官方链接（页脚展示；建议至少 1 条，其余留空则不渲染） */
  officialLinks: NavLink[];

  /** 全站攻略导航分组（首页攻略区 / 内容页右栏导航树共用；每站按真实内容增减） */
  nav: NavGroup[];

  /** 栏目简介（栏目页 L2 顶部一段话，key=section 目录名；缺省回退到「N guides…」） */
  sectionIntros?: Record<string, string>;

  /** 栏目兑底图池：内容页缺图时按栏目取图，避免与右栏 keyart 同图同屏（扬哥 2026-09-16） */
  sectionFallbackImages?: Record<string, string>;

  /** 页脚 */
  footer: {
    copyright: string;
    contactLabel: string;
    /** 联系方式（邮箱/表单链接文本）；不填则页脚不显示联系位 */
    contact?: string;
  };

  /** 广告位（骨架预制）：填入广告代码（HTML/JS）即生效；留空则完全不渲染不占位 */
  ads?: {
    /** 首页攻略区顶部 banner（内容区宽度） */
    contentBanner?: string;
    /** 页面底部 banner 广告位（页脚上方，每页都有） */
    footerBanner?: string;
    /** 正文中横幅广告位（728×90）：位置在第一屏之后，长文自动多插一个位（同一份代码可多处复用） */
    articleInline?: string;
    /** 正文第二坑位代码（扬哥 2026-09-16：长文双广告位时用不同代码/创意，避免同屏重复）；缺省回退 articleInline */
    articleInline2?: string;
    /** 左右浮动竖幅 160×600 旧写法：只填此字段=左右共用同一单元（同屏创意相同） */
    sideRail?: string;
    /** 左侧竖幅广告单元（独立 key=独立竞价/创意/统计；优先于 sideRail） */
    sideRailLeft?: string;
    /** 右侧竖幅广告单元（独立 key=独立竞价/创意/统计；优先于 sideRail） */
    sideRailRight?: string;
  };
};

export const siteConfig: SiteConfig = {
  name: "Crimson Moon",
  shortName: "Crimson Moon",

  // SEO 三件套（title/description 与线上 v1 保持一致，避免排名波动）
  seo: {
    title: "Crimson Moon — Guides, Release Info, Builds & FAQ",
    description:
      "Crimson Moon is a gothic action RPG by ProbablyMonsters, out Sep 1, 2026 on PC, PS5 and Xbox. Missions, builds, co-op and system requirements explained.",
    keywords: "crimson moon, crimson moon wiki, crimson moon guide, crimson moon release, crimson moon ps5, crimson moon xbox",
  },

  hero: {
    image: "/images/keyart-release.webp",
    eyebrow: "Wiki Guide",
    title: "Crimson Moon",
    subtitle: "Guides, Release Info, Builds & FAQ",
  },

  carousel: {
    autoPlayMs: 5000,
    slides: [
      {
        image: "/images/slide-announce.webp",
        title: "What Is Crimson Moon? Gothic Action RPG by ProbablyMonsters",
        href: "/intro/what-is-crimson-moon",
      },
      {
        image: "/images/slide-boss.webp",
        title: "Gameplay and Combat: Runs, Boons, Loot",
        href: "/guide/gameplay-and-combat",
      },
      {
        image: "/images/slide-dragon.webp",
        title: "Every Official Crimson Moon Trailer in One Place",
        href: "/release/trailers",
      },
    ],
  },

  gameInfo: {
    title: "Crimson Moon",
    cover: "/images/cover-nephilim.webp",
    fields: [
      { label: "Developer", value: "ProbablyMonsters" },
      { label: "Publisher", value: "ProbablyMonsters" },
      { label: "Release Date", value: "September 1, 2026" },
      { label: "Platforms", value: "PC, PS5, Xbox Series X|S" },
      { label: "Genre", value: "Gothic Action RPG" },
    ],
    ctaLabel: "View on Steam ↗",
    ctaHref: "https://store.steampowered.com/app/4317690/Crimson_Moon/",
  },

  videos: [
    { youtubeId: "uYnAqs5BC0E", title: "Official Gamescom Trailer" },
    { youtubeId: "2Y0THCDesSc", title: "Official Launch Trailer" },
    { youtubeId: "9A8GHJY3KXY", title: "Summer Game Fest Gameplay Trailer" },
    { youtubeId: "d0lXLkqcOKw", title: "Official Announce Trailer" },
  ],

  officialLinks: [
    { label: "Official Site", href: "https://www.playcrimsonmoon.com/" },
    { label: "Discord", href: "https://discord.gg/playcrimsonmoon" },
    { label: "X (Twitter)", href: "https://x.com/CrimsonMoonPM" },
  ],

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

  sectionIntros: {
    intro: "Who makes Crimson Moon, what the story is about, and why the fallen city of Gildenarch matters — the essentials before you dive in.",
    guide: "Practical Crimson Moon guides: the run loop, builds, co-op, platform facts, PC specs, and how long the campaign really is.",
    release: "Crimson Moon release facts: launch date and platforms, price and editions, and every official trailer with dates.",
  },

  sectionFallbackImages: {
    intro: "/images/capsule-steam.webp",
    guide: "/images/keyart-duo.webp",
    release: "/images/slide-boss.webp",
  },

  footer: {
    copyright:
      "Fan-made wiki. Not affiliated with ProbablyMonsters.",
    contactLabel: "Contact",
  },

  ads: {
    sideRailLeft: `<script>
  atOptions = {
    'key' : '72d260346987a876fbef36d6eafc48e5',
    'format' : 'iframe',
    'height' : 300,
    'width' : 160,
    'params' : {}
  };
</script>
<script src="https://www.highrevenueformat.com/72d260346987a876fbef36d6eafc48e5/invoke.js"></script>`,
    sideRailRight: `<script>
  atOptions = {
    'key' : '6279de9917d8e94af5d3d92791d6c7ca',
    'format' : 'iframe',
    'height' : 600,
    'width' : 160,
    'params' : {}
  };
</script>
<script src="https://www.highrevenueformat.com/6279de9917d8e94af5d3d92791d6c7ca/invoke.js"></script>`,
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
    articleInline: `<script async="async" data-cfasync="false" src="https://pl31264263.profitableratecpmnetwork.com/d95f639e0523c472dcd3d65b37ca535a/invoke.js"></script>
<div id="container-d95f639e0523c472dcd3d65b37ca535a"></div>`,
  },
};
