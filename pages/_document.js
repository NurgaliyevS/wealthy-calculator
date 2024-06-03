import { Html, Head, Main, NextScript } from "next/document";
import { Analytics } from "@vercel/analytics/react"

export default function Document() {
  return (
    <Html lang="en" data-theme="dark">
      <Head />
      <body>
        <Main />
        <NextScript />
        <Analytics mode={'production'} />
      </body>
    </Html>
  );
}
