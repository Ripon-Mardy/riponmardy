import { Lora } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

import Script from "next/script";


const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "500", "500", "600", "700"]
})


export const metadata = {
  title: "Ripon Mardy - Developer Portfolio",
  description: "A createtive Web Developer portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">


      <head>


        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-J4E4Y2SR22"></Script>
        <Script>
         {
          `
           window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-J4E4Y2SR22');
          `
         }
        </Script>

      </head>


      <body suppressHydrationWarning={true} className={lora.className}>
        <div className="md:flex ">
          <div className="md:basis-[20%] md:bg-gray-800 md:h-full md:fixed md:w-[20%] relative md:px-5">
            <Navbar />
          </div>
          <div className="md:basis-[80%] md:ml-auto md:px-20 md:pt-10 px-3 pt-4 ">
            {children}
          </div>
        </div>

      </body>
    </html>
  );
}
