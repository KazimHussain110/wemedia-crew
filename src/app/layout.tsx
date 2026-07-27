import type { Metadata } from "next";
import { Suspense } from "react";
import { Syne, DM_Sans } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PageLoader from "../components/PageLoader";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

export const metadata: Metadata = {
  title: "WeMediaCrew | Corporate Video Production & Event Videography | UAE & Canada",
  description: "Professional corporate video production and event videography across the UAE and Canada. Cinematic quality, commercial reliability. Get a free consultation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preload" href="/logo.png" as="image" fetchPriority="high" />
      </head>
      <body
        className={`${syne.variable} ${dmSans.variable} antialiased`}
        suppressHydrationWarning
      >
        <Suspense fallback={<div className="fixed inset-0 z-[100] bg-[#2a2a2a]" />}>
          <PageLoader />
        </Suspense>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
