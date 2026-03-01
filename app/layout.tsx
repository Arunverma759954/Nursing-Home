import type { Metadata, Viewport } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Providers } from "./components/Providers";
import ScrollToTop from "./components/ScrollToTop";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#9d174d",
};

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Best Hospital & Nursing Home in Hapur | 24*7 Emergency Hospital",
  description: "Raj Hospital &amp; Nursing Home is a trusted hospital and nursing home in Hapur offering expert medical care, 24×7 emergency services, maternity care and surgeries for families.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${outfit.variable} antialiased overflow-x-hidden`}
      >
        <Providers>
          <ScrollToTop />
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
