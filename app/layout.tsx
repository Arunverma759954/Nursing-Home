import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

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
        className={`${inter.variable} ${outfit.variable} antialiased`}
      >
        <style dangerouslySetInnerHTML={{
          __html: `
            .goog-te-banner-frame.skiptranslate { display: none !important; }
            body { top: 0px !important; position: static !important; }
            .goog-te-banner-frame { display: none !important; }
            .skiptranslate iframe { display: none !important; }
            
            .goog-te-gadget-simple { 
              background-color: white !important; 
              border: 1px solid #f3f4f6 !important; 
              padding: 10px 20px !important; 
              border-radius: 99px !important; 
              font-family: 'Outfit', sans-serif !important; 
              font-weight: 700 !important;
              font-size: 13px !important;
              cursor: pointer !important;
              display: flex !important;
              align-items: center !important;
              box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05) !important;
              transition: all 0.3s ease !important;
              height: 44px !important;
            }
            .goog-te-gadget-simple:hover {
              box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1) !important;
              transform: translateY(-1px) !important;
              border-color: #fce7f3 !important;
            }
            .goog-te-gadget-simple img { display: none !important; }
            .goog-te-gadget-simple .goog-te-menu-value { color: #374151 !important; margin: 0 !important; }
            .goog-te-gadget-simple .goog-te-menu-value span { color: #374151 !important; border-left: none !important; }
            .goog-te-gadget-simple .goog-te-menu-value span:last-child { display: none !important; }
            
            /* Customizing the dropdown */
            .goog-te-menu-frame {
              box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1) !important;
              border-radius: 16px !important;
              border: 1px solid #f3f4f6 !important;
              top: 70px !important;
            }
          `
        }} />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
