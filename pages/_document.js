import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en" data-theme="dark">
      <Head>
        <meta property="og:title" content="Invest first & spend what's left" />
        <meta
          property="og:description"
          content="Everything you need to invest money wisely"
        />
        <meta property="og:image" content="/og-image.jpg" />
        <meta property="og:url" content="https://weeealth.com" />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Invest first & spend what's left" />
        <meta
          name="twitter:description"
          content="Everything you need to invest money wisely"
        />
        <meta name="twitter:image" content="/twitter-image.jpg" />
        <meta name="twitter:url" content="https://weeealth.com" />

        <meta
          name="description"
          content="Everything you need to invest money wisely"
        />
        <meta
          name="keywords"
          content="wealth management, financial growth, investment, personal finance, financial freedom, financial independence, financial planning, financial literacy, financial education, financial advisor, financial consultant, financial services, financial advice, wealth calculator, wealth, money"
        />
        <meta name="author" content="Weeealth" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
