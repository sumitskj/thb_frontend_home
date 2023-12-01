import { Inter } from "next/font/google";
import "../globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "The HyperBrand",
  description:
    "The HyperBrand : We create SEO optimized content for your business that will increase your search engine rankings and drive more traffic to your website.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
