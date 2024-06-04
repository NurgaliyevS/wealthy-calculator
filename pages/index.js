import { Poppins } from "next/font/google";
import Head from "next/head";
import Navbar from "@/components/Navbar";
import Main from "@/components/Main";
import Footer from "@/components/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700", "800", "900"],
});

export default function Home() {
  return (
    <div
      className={`${poppins.variable} flex flex-col min-h-screen p-2 lg:p-6`}
    >
      <Head>
        <title>Weeealth - Empowering Your Financial Journey</title>
        <meta name="description" content="Invest first & spend what's left" />
        <meta
          name="keywords"
          content="wealth management, financial growth, investment, personal finance, financial freedom, financial independence, financial planning, financial literacy, financial education, financial advisor, financial consultant, financial services, financial advice, wealth calculator, wealth, money"
        />
        <meta name="author" content="Weeealth" />
        <meta
          property="og:title"
          content="Wealth Calculator: Everything you need to invest money wisely"
        />
        <meta
          property="og:description"
          content="Invest first & spend what's left"
        />
        <meta property="og:image" content="/og-image.jpg" />
        <meta property="og:url" content="https://weeealth.com" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Wealth Calculator: Everything you need to invest money wisely"
        />
        <meta
          name="twitter:description"
          content="Invest first & spend what's left"
        />
        <meta
          name="twitter:image"
          content="/twitter-image.jpg"
        />
        <meta name="twitter:url" content="https://weeealth.com" />
      </Head>
      <main className="flex-grow pt-6 lg:w-3/5 w-4/5 mx-auto mb-40 lg:mb-32">
        <Navbar />
        <Main />
        <Footer />
      </main>
    </div>
  );
}
