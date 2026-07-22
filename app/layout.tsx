import { Ubuntu } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next"

import NextTopLoader from "nextjs-toploader";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

export const metadata = {
  title: "Ripon Mardy Axel",
  description: "A AI-Driven Developer portfolio",
};





export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head></head>

      <body suppressHydrationWarning className={ubuntu.className}>
        <NextTopLoader
          color="#f59e0b"
          initialPosition={0.08}
          crawlSpeed={200}
          height={3}
          crawl={true}
          showSpinner={false}
          easing="ease"
          speed={200}
        />

        {/* google analytics  */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
  `}
        </Script>

        {/* vercel analytics  */}
        <Analytics />


        <div className="min-h-screen bg-[#121212] text-gray-300 pb-24 lg:pb-0">
          <div className="relative max-w-7xl mx-auto px-4 py-6 md:py-12 lg:py-16 xl:py-20 flex flex-col lg:flex-row gap-6 md:gap-8">
            <Sidebar />
            <main className="w-full lg:flex-1 bg-[#1e1e1f] border border-[#383838] rounded-3xl shadow-2xl min-h-[75vh] flex flex-col">
              <Navbar />
              <div className="flex-1 p-6 md:p-8 lg:p-10 pt-8 pb-20 lg:pb-10">
                {children}
              </div>
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}
