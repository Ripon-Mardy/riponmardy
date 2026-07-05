import { Ubuntu } from "next/font/google";
import "./globals.css";
import NextTopLoader from "nextjs-toploader";

import Script from "next/script";

const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

export const metadata = {
  title: "Ripon Mardy",
  description: "A createtive Web Developer portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head></head>

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
