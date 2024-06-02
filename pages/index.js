import { Poppins } from 'next/font/google';
import Navbar from "@/components/Navbar";
import Main from "@/components/Main";

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['400', '500', '600', '700', '800', '900']
});

export default function Home() {
  return (
    <main className={`${poppins.variable} lg:w-3/5 w-4/5 mx-auto pt-6 min-h-screen`}>
      <Navbar />
      <Main />
    </main>
  );
}
