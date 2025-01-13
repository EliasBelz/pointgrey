import type { Metadata } from "next";
import "./globals.css";
import Image from 'next/image';
import Footer from '../components/Footer';
import Link from "next/link";

export const metadata: Metadata = {
  title: "Point Grey Pictures",
  description: "Point Grey Pictures",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="no-scroll-bar bg-background min-h-screen flex flex-col">
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