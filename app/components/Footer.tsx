"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const PhoneIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l2.27-2.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);
const MapPinIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);
const MailIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect width="20" height="16" x="2" y="4" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);
const FacebookIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);
const InstagramIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

export default function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      id="contact"
      className="bg-[#0b1120] text-white pt-16 pb-8 relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#9d174d]/50 to-transparent"></div>
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#9d174d]/20 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute top-40 -left-20 w-72 h-72 bg-blue-600/10 rounded-full blur-[80px] pointer-events-none"></div>

      <div className="max-w-[1700px] mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 border-b border-white/5 pb-10 mb-8 relative z-10">
        {/* Brand Column */}
        <div className="space-y-5">
          <div className="flex items-center gap-4 group cursor-pointer">
            <div className="relative w-12 h-12 transition-transform duration-700 group-hover:rotate-[360deg]">
              <Image
                src="/RNH logo.png"
                alt="RNH Logo"
                fill
                className="object-contain brightness-110 drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]"
              />
            </div>
            <div className="flex flex-col">
              <h3 className="text-xl font-black tracking-tighter leading-none bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                RAJ NURSING
                <br />
                HOME
              </h3>
              <span className="text-[9px] font-bold text-[#9d174d] tracking-[0.2em] uppercase mt-1">
                Since 1999
              </span>
            </div>
          </div>
          <p className="text-gray-400 text-sm font-medium leading-relaxed max-w-xs">
            Western Uttar Pradesh's most trusted medical landmark. Delivering
            excellence in healthcare with compassion and advanced technology.
          </p>
          <div className="flex gap-3">
            {[
              { i: <FacebookIcon />, c: "hover:bg-[#1877F2]" },
              { i: <InstagramIcon />, c: "hover:bg-[#E4405F]" },
              { i: <MailIcon />, c: "hover:bg-red-500" },
            ].map((s, idx) => (
              <div
                key={idx}
                className={`w-10 h-10 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl flex items-center justify-center text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg cursor-pointer ${s.c}`}
              >
                {s.i}
              </div>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div className="space-y-5">
          <h4 className="text-lg font-black flex items-center gap-3">
            <span className="w-6 h-1 bg-[#9d174d] rounded-full"></span>
            Quick Navigation
          </h4>
          <ul className="space-y-3 text-gray-400 font-bold text-sm">
            {[
              { l: "Our Story", h: "/#about" },
              { l: "Medical Services", h: "/services" },
              { l: "Health Plans", h: "/health-checkup-plans" },
              { l: "Best Hospital in Hapur", h: "/best-hospital-nursing-home-hapur" },
              { l: "Expert Team", h: "/#doctors" },
              { l: "Patient Stories", h: "/#testimonials" },
              { l: "Contact Us", h: "/contact" },
            ].map((item, i) => (
              <li key={i}>
                <Link
                  href={item.h}
                  className="hover:text-white transition-colors flex items-center gap-2 group"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-600 group-hover:bg-[#9d174d] transition-colors"></span>
                  {item.l}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div className="space-y-5">
          <h4 className="text-lg font-black flex items-center gap-3">
            <span className="w-6 h-1 bg-[#9d174d] rounded-full"></span>
            Contact Us
          </h4>
          <ul className="space-y-4">
            <li className="flex items-start gap-3 text-gray-400 group">
              <div className="w-10 h-10 rounded-xl bg-[#9d174d]/10 text-[#9d174d] flex items-center justify-center shrink-0 group-hover:bg-[#9d174d] group-hover:text-white transition-all">
                <MapPinIcon />
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-gray-500 mb-1 block">
                  Visit Us
                </span>
                <p className="text-white text-sm font-medium leading-tight">
                  Swarg Ashram Road,
                  <br />
                  Hapur, Uttar Pradesh
                </p>
              </div>
            </li>
            <li className="flex items-start gap-3 text-gray-400 group">
              <div className="w-10 h-10 rounded-xl bg-[#9d174d]/10 text-[#9d174d] flex items-center justify-center shrink-0 group-hover:bg-[#9d174d] group-hover:text-white transition-all">
                <PhoneIcon />
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-gray-500 mb-1 block">
                  Emergency Call
                </span>
                <a
                  href="tel:+916397970802"
                  className="text-white font-bold text-lg hover:text-[#9d174d] transition-colors"
                >
                  +91 63979 70802
                </a>
              </div>
            </li>
            <li className="flex items-start gap-3 text-gray-400 group">
              <div className="w-10 h-10 rounded-xl bg-[#9d174d]/10 text-[#9d174d] flex items-center justify-center shrink-0 group-hover:bg-[#9d174d] group-hover:text-white transition-all">
                <MailIcon />
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-gray-500 mb-1 block">
                  Email Support
                </span>
                <a
                  href="mailto:drvipinkumar@gmail.com"
                  className="text-white text-sm font-medium hover:text-[#9d174d] transition-colors"
                >
                  drvipinkumar@gmail.com
                </a>
              </div>
            </li>
          </ul>
        </div>

        {/* Working Hours Card */}
        <div className="space-y-5">
          <h4 className="text-lg font-black flex items-center gap-3">
            <span className="w-6 h-1 bg-[#9d174d] rounded-full"></span>
            Working Hours
          </h4>
          <div className="p-6 rounded-[2rem] bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 backdrop-blur-md relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-[#9d174d]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            <div className="relative z-10 space-y-4">
              <div className="flex justify-between items-center border-b border-white/10 pb-3">
                <span className="text-gray-300 text-sm font-bold flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse"></div>
                  Emergency
                </span>
                <span className="text-white font-black text-base">24 / 7</span>
              </div>
              <div className="flex justify-between items-center border-b border-white/10 pb-3">
                <span className="text-gray-300 text-sm font-bold">OPD Timings</span>
                <div className="text-right">
                  <span className="text-white text-sm font-bold block">
                    08:00 - 14:00
                  </span>
                  <span className="text-white text-sm font-bold block">
                    17:00 - 19:00
                  </span>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-300 text-sm font-bold">Pharmacy</span>
                <span className="text-white font-black text-base">24 / 7</span>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10">
              <Link
                href="/contact"
                className="block w-full text-center py-2.5 bg-white text-gray-900 font-black rounded-xl hover:bg-[#9d174d] hover:text-white transition-all text-xs uppercase tracking-widest shadow-lg"
              >
                Book Appointment
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-screen-2xl mx-auto px-6 pt-4 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-medium text-gray-500">
        <p>© 2024 Raj Nursing Home. All rights reserved.</p>
        <div className="flex gap-8">
          <Link href="#" className="hover:text-white transition-colors">
            Privacy Policy
          </Link>
          <Link href="#" className="hover:text-white transition-colors">
            Terms of Service
          </Link>
          <Link href="#" className="hover:text-white transition-colors">
            Sitemap
          </Link>
        </div>
      </div>

      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-30 p-4 bg-[#9d174d] text-white rounded-full shadow-2xl hover:bg-[#831843] transition-all duration-300 hover:-translate-y-2 hover:shadow-red-500/30 group"
          aria-label="Scroll to top"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="group-hover:-translate-y-1 transition-transform"
          >
            <path d="m18 15-6-6-6 6" />
          </svg>
        </button>
      )}
    </footer>
  );
}
