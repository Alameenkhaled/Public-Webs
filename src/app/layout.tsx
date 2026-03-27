import type { Metadata } from "next";
import { Inter, Cormorant_Garamond, Playfair_Display, Manrope } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "optional" });
const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  weight: "700",
  variable: "--font-cormorant-garamond",
  display: "optional",
});
const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["700", "800", "900"],
  variable: "--font-playfair-display",
  display: "optional",
});
const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-manrope",
  display: "optional",
});

export const metadata: Metadata = {
  title: "Digital Atelier",
  description: "Where Art Meets the Digital Canvas.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined&display=optional"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${inter.variable} ${cormorantGaramond.variable} ${playfairDisplay.variable} ${manrope.variable} bg-background-light dark:bg-background-dark font-body text-text-light dark:text-text-dark`}
      >
        <div className="relative flex min-h-screen w-full flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
