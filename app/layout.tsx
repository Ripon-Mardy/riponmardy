import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next"

import NextTopLoader from "nextjs-toploader";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import MobileNav from "../components/MobileNav";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-instrument",
});

export const metadata: Metadata = {
  title: {
    default: "Ripon Mardy | Full Stack Software Developer",
    template: "%s | Ripon Mardy",
  },
  description:
    "Portfolio of Ripon Mardy, a full stack developer building scalable web applications with React, Next.js, Node.js and MongoDB.",
  openGraph: {
    title: "Ripon Mardy | Full Stack Software Developer",
    description:
      "Full stack developer building scalable web applications with React, Next.js, Node.js and MongoDB.",
    url: "https://riponmardy.vercel.app",
    siteName: "Ripon Mardy",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#08080a",
};





export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning
        className={`${geist.variable} ${geistMono.variable} ${instrumentSerif.variable} font-sans`}
      >
        <NextTopLoader
          color="#e3bf7f"
          initialPosition={0.08}
          crawlSpeed={200}
          height={3}
          crawl={true}
          showSpinner={false}
          easing="ease"
          speed={200}
        />

        {/* google analytics  */}
        {/* <!-- Google tag (gtag.js) --> */}
        <Script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
          strategy="afterInteractive"
        />

        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
    `,
          }}
        />

        {/* vercel analytics  */}
        <Analytics />


        <MobileNav />
        <div className="min-h-screen">
          <div className="relative mx-auto flex max-w-7xl flex-col gap-5 px-4 pt-21 pb-5 md:gap-6 md:pt-24 md:pb-10 lg:flex-row lg:gap-7 lg:py-14 xl:py-16">
            <Sidebar />
            <main className="card flex min-h-[75vh] w-full flex-col rounded-[2rem] bg-surface/85 backdrop-blur-xl lg:flex-1">
              <Navbar />
              <div className="flex-1 px-5 pt-8 pb-12 sm:px-7 md:px-10 md:pb-14 lg:px-12 lg:pt-24">
                {children}
              </div>
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}
