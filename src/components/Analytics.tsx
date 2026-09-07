import Script from "next/script";

export function Analytics() {
  const gaId = process.env.NEXT_PUBLIC_GA_ID || "G-06ZWRB5DLS"; // fallback：env 未配置时使用 crimsonmoon.best 的测量 ID（Vercel 令牌待更新后可切回纯 env）
  if (!gaId) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
        strategy="afterInteractive"
      />
      <Script id="ga-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${gaId}', { anonymize_ip: true });
        `}
      </Script>
    </>
  );
}
