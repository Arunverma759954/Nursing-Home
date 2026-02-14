"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/app/context/LanguageContext";

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
  const { t } = useLanguage();
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

      <div className="max-w-[1700px] mx-auto px-4 sm:px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12 border-b border-white/5 pb-10 mb-8 relative z-10">
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
                {t("footer.rajNursing")}
                <br />
                {t("footer.home")}
              </h3>
              <span className="text-[9px] font-bold text-[#9d174d] tracking-[0.2em] uppercase mt-1">
                {t("footer.since1999")}
              </span>
            </div>
          </div>
          <p className="text-gray-400 text-sm font-medium leading-relaxed max-w-xs">
            {t("footer.tagline")}
          </p>
          <div className="flex gap-3">
            {[
              { i: <FacebookIcon />, c: "hover:bg-[#1877F2]", href: "https://www.facebook.com/rajnursinghomehapur/" },
              { i: <InstagramIcon />, c: "hover:bg-[#E4405F]", href: "https://www.instagram.com/rajnursinghomehapur/" },
              { i: <MailIcon />, c: "hover:bg-red-500", href: "mailto:drvipinkumarsharma@gmail.com" },
            ].map((s, idx) => (
              <a
                key={idx}
                href={s.href}
                target={s.href.startsWith("http") ? "_blank" : "_self"}
                rel={s.href.startsWith("http") ? "noopener noreferrer" : ""}
                className={`w-10 h-10 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl flex items-center justify-center text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg cursor-pointer ${s.c}`}
              >
                {s.i}
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div className="space-y-5">
          <h4 className="text-lg font-black flex items-center gap-3">
            <span className="w-6 h-1 bg-[#9d174d] rounded-full"></span>
            {t("footer.quickNav")}
          </h4>
          <ul className="space-y-3 text-gray-400 font-bold text-sm">
            {[
              { l: t("footer.ourStory"), h: "/#about" },
              { l: t("footer.medicalServices"), h: "/services" },
              { l: t("footer.healthPlans"), h: "/health-checkup-plans" },
              { l: t("footer.bestHospital"), h: "/best-hospital-nursing-home-hapur" },
              { l: t("footer.expertTeam"), h: "/#doctors" },
              { l: t("footer.patientStories"), h: "/#testimonials" },
              { l: t("footer.contactUs"), h: "/contact" },
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
            {t("footer.contactUsTitle")}
          </h4>
          <ul className="space-y-4">
            <li className="flex items-start gap-3 text-gray-400 group">
              <div className="w-10 h-10 rounded-xl bg-[#9d174d]/10 text-[#9d174d] flex items-center justify-center shrink-0 group-hover:bg-[#9d174d] group-hover:text-white transition-all">
                <MapPinIcon />
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-gray-500 mb-1 block">
                  {t("footer.visitUs")}
                </span>
                <p className="text-white text-sm font-medium leading-tight">
                  {t("footer.address")}
                </p>
              </div>
            </li>
            <li className="flex items-start gap-3 text-gray-400 group">
              <div className="w-10 h-10 rounded-xl bg-[#9d174d]/10 text-[#9d174d] flex items-center justify-center shrink-0 group-hover:bg-[#9d174d] group-hover:text-white transition-all">
                <PhoneIcon />
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-gray-500 mb-1 block">
                  {t("footer.emergencyCall")}
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
                  {t("footer.emailSupport")}
                </span>
                <a
                  href="mailto:drvipinkumarsharma@gmail.com"
                  className="text-white text-sm font-medium hover:text-[#9d174d] transition-colors"
                >
                  drvipinkumarsharma@gmail.com
                </a>
              </div>
            </li>
          </ul>
        </div>

        {/* Working Hours Card */}
        <div className="space-y-5">
          <h4 className="text-lg font-black flex items-center gap-3">
            <span className="w-6 h-1 bg-[#9d174d] rounded-full"></span>
            {t("footer.workingHours")}
          </h4>
          <div className="p-6 rounded-[2rem] bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 backdrop-blur-md relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-[#9d174d]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

            <div className="relative z-10 space-y-4">
              <div className="flex justify-between items-center border-b border-white/10 pb-3">
                <span className="text-gray-300 text-sm font-bold flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse"></div>
                  {t("footer.emergency")}
                </span>
                <span className="text-white font-black text-base">{t("common.hour24_7")}</span>
              </div>
              <div className="flex justify-between items-center border-b border-white/10 pb-3">
                <span className="text-gray-300 text-sm font-bold">{t("footer.opdTimings")}</span>
                <div className="text-right">
                  <span className="text-white text-sm font-bold block">
                    {t("common.opdTiming1")}
                  </span>
                  <span className="text-white text-sm font-bold block">
                    {t("common.opdTiming2")}
                  </span>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-300 text-sm font-bold">{t("footer.pharmacy")}</span>
                <span className="text-white font-black text-base">{t("common.hour24_7")}</span>
              </div>
            </div>

            <div className="relative z-20 mt-6 pt-4 border-t border-white/10">
              <a
                href="/contact"
                className="block w-full text-center py-2.5 bg-white text-gray-900 font-black rounded-xl hover:bg-[#9d174d] hover:text-white transition-all text-xs uppercase tracking-widest shadow-lg cursor-pointer"
              >
                {t("footer.bookAppointment")}
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-4 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-medium text-gray-500">
        <p>{t("footer.copyright")}</p>
        <div className="flex gap-8">
          <Link href="#" className="hover:text-white transition-colors">
            {t("footer.privacyPolicy")}
          </Link>
          <Link href="#" className="hover:text-white transition-colors">
            {t("footer.termsOfService")}
          </Link>
          <Link href="#" className="hover:text-white transition-colors">
            {t("footer.sitemap")}
          </Link>
        </div>
      </div>

      {/* WhatsApp - fixed on right, fully visible; scroll button to its left when visible */}
      <a
        href="https://wa.me/916397970802"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-[999] w-14 h-14 min-w-[56px] min-h-[56px] bg-[#25D366] text-white rounded-full shadow-2xl hover:bg-[#20bd5a] transition-all duration-300 hover:-translate-y-2 hover:shadow-green-500/40 flex items-center justify-center shrink-0 overflow-visible"
        aria-label="WhatsApp"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="currentColor" className="shrink-0">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.865 9.865 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </a>

      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-24 z-[999] w-14 h-14 min-w-[56px] min-h-[56px] p-4 bg-[#9d174d] text-white rounded-full shadow-2xl hover:bg-[#831843] transition-all duration-300 hover:-translate-y-2 hover:shadow-red-500/30 group animate-bounce flex items-center justify-center shrink-0 overflow-visible"
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
