import { Ubuntu } from "next/font/google";
import "./globals.css";
import NextTopLoader from "nextjs-toploader";

import Script from "next/script";



const ubuntu = Ubuntu ({
  subsets: ['latin'],
  weight : ['300', '400', '500', '700']
})

export const metadata = {
  title: "Ripon Mardy",
  description: "A createtive Web Developer portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script
          async
          custom-element="amp-ad"
          src="https://cdn.ampproject.org/v0/amp-ad-0.1.js"
        ></script>

        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-J4E4Y2SR22"
        ></Script>
        <Script>
          {`
           window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-J4E4Y2SR22');
          `}
        </Script>
      </head>

      <body suppressHydrationWarning className={ubuntu.className}>
        <NextTopLoader
        color="#2563eb"
          initialPosition={0.08}
          crawlSpeed={200}
          height={3}
          crawl={true}
          showSpinner={false}
          easing="ease"
          speed={200}
        />
        {children}
      </body>
    </html>
  );
}
