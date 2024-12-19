import type { Metadata } from "next";
import "./globals.css";

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
      <body>
        {children}
      </body>
    </html>
  );
}
