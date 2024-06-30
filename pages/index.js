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
        <title>Weeealth.com - S&P 500 monthly investment calculator</title>
      </Head>
      <main className="flex-grow pt-6 lg:w-3/5 w-4/5 mx-auto mb-40 lg:mb-32">
        <Navbar />
        <Main />
        <Footer />
      </main>
    </div>
  );
}
