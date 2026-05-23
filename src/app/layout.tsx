import type { Metadata } from "next";
import "./globals.css";
import { Nav } from "@/components/layout/Nav";
import {
  Albert_Sans,
  Bodoni_Moda,
  Cormorant_Garamond,
} from "next/font/google";

const albertSans = Albert_Sans({
  subsets: ["latin"],
  variable: "--font-albert-sans",
  display: "swap",
});

const bodoniModa = Bodoni_Moda({
  subsets: ["latin"],
  variable: "--font-bodoni-moda",
  display: "swap",
});

const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant-garamond",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Humanly | Smarter health starts from within",
  description: "The new standard in personal wellness.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${albertSans.variable} ${bodoniModa.variable} ${cormorantGaramond.variable}`}
    >
      <body className="antialiased">
        <Nav />
        {children}
      </body>
    </html>
  );
}