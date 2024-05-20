import { Poppins } from 'next/font/google';
import Navbar from "@/components/Navbar";

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['400', '500', '600', '700', '800', '900']
});

export default function Home() {
  return (
    <main className={`${poppins.variable}`}>
      <Navbar />
    </main>
  );
}
