import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  title: "Oweleen - Fractional Ownership. A Digital Twist.",
  description: "Real Estate for Everyone, One Digital Dirham at a Time.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${spaceGrotesk.variable} font-display bg-background-light dark:bg-background-dark text-gray-900 dark:text-gray-100`}>
        {children}
      </body>
    </html>
  );
}
