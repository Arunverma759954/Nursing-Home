import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Providers } from "./components/Providers";
import ScrollToTop from "./components/ScrollToTop";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Raj Nursing Home | Best Multi-Speciality Hospital in Hapur",
  description: "Raj Nursing Home provides world-class healthcare, laparoscopic surgery, IVF, and diagnostic services in Hapur, Uttar Pradesh.",
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
