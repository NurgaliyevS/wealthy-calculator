import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en" data-theme="dark">
      <Head>
        <meta
          name="description"
          content="Everything you need to invest money wisely. S&P 500 monthly investment calculator."
        />
        <meta
          name="keywords"
          content="s&p 500 monthly investment calculator, how much to invest per month to become a millionaire, how much to invest to get 5000 per month, how much to invest in 529 per month"
        />
        <meta charSet="UTF-8" />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />

        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-title" content="Weeealth" />
        <meta name="application-name" content="Weeealth" />

        <meta property="og:image" content="https://weeealth.com/ogImage.png" />
        <meta
          property="og:image:alt"
          content="Weeealth - Everything you need to invest money wisely"
        />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:url" content="https://weeealth.com" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Weeealth - Everything you need to invest money wisely"
        />
        <meta
          property="og:description"
          content="Everything you need to invest money wisely. S&P 500 monthly investment calculator."
        />
        <meta property="og:site_name" content="Weeealth" />
        <meta property="og:locale" content="en_US" />

        <meta
          property="article:author"
          content="https://x.com/tech_nurgaliyev"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@tech_nurgaliyev" />
        <meta name="twitter:creator" content="@tech_nurgaliyev" />
        <meta
          name="twitter:title"
          content="Weeealth - Everything you need to invest money wisely"
        />
        <meta
          name="twitter:description"
          content="Everything you need to invest money wisely. S&P 500 monthly investment calculator."
        />
        <meta name="twitter:image" content="https://weeealth.com/twitter.png" />

        <link rel="canonical" href="https://weeealth.com/" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
