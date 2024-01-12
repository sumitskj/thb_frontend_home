import { Inter } from "next/font/google";
import "../globals.css";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "The HyperBrand",
  description:
    "The HyperBrand : We create SEO optimized content for your business that will increase your search engine rankings and drive more traffic to your website.",
};

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-Y4YZZ389DC"
      ></Script>
      <Script type="text/javascript" src="/static/ga.js"></Script>
      <Script type="text/javascript" src="/static/clarity.js"></Script>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
