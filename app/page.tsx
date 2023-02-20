import { Inter } from '@next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return <main className={`${inter.className} text-red-600`}>Hellos</main>;
}
