import type { Metadata } from "next";
import "./globals.css";
import Image from 'next/image';
import Footer from '../components/Footer';
import Link from "next/link";
import {Outfit, Markazi_Text, Petrona, Aleo, Manrope} from "next/font/google";
import SplashScreen from "@/components/SplashScreen";
import ScrollToTop from "@/components/ScrollToTop";

export const metadata: Metadata = {
  title: "Point Grey Pictures",
  description: "Point Grey Pictures",
};

const pet = Petrona({weight: "500", subsets: ["latin"], variable: "--font-petrona"})

const aleo = Aleo({weight: "400", subsets: ["latin"], variable: "--font-aleo"})

const markazi = Markazi_Text({weight:"variable", variable:"--font-markazi",display: "swap"}) // LIKE


const anybody = Manrope({weight: "700", subsets: ["latin"], variable: "--font-anybody"})

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
    // Made by Elias Belzberg for Point Grey Pictures
    <html lang="en">
      <body className={`no-scroll-bar bg-background min-h-screen flex flex-col ${markazi.variable} ${outfit.variable} ${pet.variable} ${aleo.variable} ${pet.variable} ${anybody.variable}`}>
        <div className="flex flex-col flex-grow h-full">
          <SplashScreen>
            <div className="flex flex-col justify-center items-center w-full bg-secondary h-36 mx-auto px-10">
              <Link href={"/"}>
                <Image
                  src='/pg.svg'
                  alt='Point Grey Pictures logo'
                  width={175}
                  height={90}
                />
              </Link>
            </div>
            <div className="flex-grow bg-orange-100">
              {children}
            </div>
            <Footer />
          </SplashScreen>
        </div>
        <ScrollToTop />
      </body>
    </html>
  );
}