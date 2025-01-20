import type { Metadata } from "next";
import "./globals.css";
import Image from 'next/image';
import Footer from '../components/Footer';
import Link from "next/link";
import {Outfit, Bakbak_One, Alfa_Slab_One, Markazi_Text, Petrona, Aleo} from "next/font/google";

export const metadata: Metadata = {
  title: "Point Grey Pictures",
  description: "Point Grey Pictures",
};

const bakba = Bakbak_One({weight: "400", subsets: ["latin"]})

const alfa = Alfa_Slab_One({weight: "400", subsets: ["latin"]})
const pet = Petrona({weight: "500", subsets: ["latin"], variable: "--font-petrona"})

const aleo = Aleo({weight: "400", subsets: ["latin"], variable: "--font-aleo"})

const markazi = Markazi_Text({weight:"variable", variable:"--font-markazi",display: "swap"}) // LIKE

const outfit = Outfit( {
  weight: "400",
  variable: "--font-outfit",
}

);

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`no-scroll-bar bg-background min-h-screen flex flex-col ${markazi.variable} ${outfit.variable} ${pet.variable} ${aleo.variable} ${pet.variable}`}>
        <div className="flex flex-col flex-grow">
          <div className="flex justify-center items-center w-full bg-secondary h-36">
            <Link href={"/"}>
              <Image
                src='/logo.png'
                alt='Point Grey Pictures logo'
                height={250}
                width={340}
              />
            </Link>
          </div>
          <div className="flex-grow">
            {children}
          </div>
          <Footer />
        </div>
      </body>
    </html>
  );
}