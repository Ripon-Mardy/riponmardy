import { Lora, Bitter, Ubuntu } from "next/font/google";
import "./globals.css";

import Script from "next/script";
import Navbar from "@/components/Navbar";
import Copyright from "@/components/Copyright";

const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "500", "500", "600", "700"],
});

const bitte = Bitter ({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
})

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
        <Navbar />
        {children}
        <Copyright/>
      </body>
    </html>
  );
}
