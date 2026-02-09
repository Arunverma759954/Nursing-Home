"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

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
const ClockIcon = () => (
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
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);
const ChevronRightIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="m9 18 6-6-6-6" />
  </svg>
);
const ArrowRightIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M5 12h14" />
    <path d="m12 5 7 7-7 7" />
  </svg>
);
const MenuIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="4" x2="20" y1="12" y2="12" />
    <line x1="4" x2="20" y1="6" y2="6" />
    <line x1="4" x2="20" y1="18" y2="18" />
  </svg>
);
const XIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M18 6 6 18" />
    <path d="m6 6 12 12" />
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

const navLinks = [
  { label: "Home", href: "/#home" },
  { label: "About", href: "/about" },
  { label: "Doctors", href: "/#doctors" },
  { label: "Testimonials", href: "/#testimonials" },
  { label: "Treatment", href: "/treatment" },
  { label: "Contact", href: "/contact" },
];

const servicesList = [
  { name: "Heart Specialist", slug: "heart-specialist" },
  { name: "Internal Medicine", slug: "internal-medicine" },
  { name: "Laparoscopic Surgery", slug: "laparoscopic-surgery" },
  { name: "Diagnostic Services", slug: "diagnostic-services" },
  { name: "Ultrasound & Imaging", slug: "ultrasound-and-imaging" },
  { name: "2D Echo & ECG", slug: "2d-echo-and-ecg" },
  { name: "PFT Testing", slug: "pft-testing" },
  { name: "Digital X-Ray", slug: "digital-x-ray" },
  { name: "IVF & Fertility Treatment", slug: "ivf-and-fertility" },
  { name: "Heart & Chest Care", slug: "heart-and-chest-care" },
  { name: "Woman's Health", slug: "woman-health" },
  { name: "Health Checkup Plans", slug: "health-checkup-plans", href: "/health-checkup-plans" },
  { name: "Best Hospital in Hapur", slug: "best-hospital", href: "/best-hospital-nursing-home-hapur" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "unset";
  }, [isMenuOpen]);

  useEffect(() => {
    // Google Translate Initialization
    (window as any).googleTranslateElementInit = () => {
      if ((window as any).google && (window as any).google.translate) {
        new (window as any).google.translate.TranslateElement({
          pageLanguage: 'en',
          includedLanguages: 'en,hi',
          layout: (window as any).google.translate.TranslateElement.InlineLayout.SIMPLE,
          autoDisplay: false
        }, 'google_translate_element');
      }
    };

    // Load Google Translate Script if not already loaded
    const scriptId = 'google-translate-script';
    if (!document.getElementById(scriptId)) {
      const script = document.createElement('script');
      script.id = scriptId;
      script.type = 'text/javascript';
      script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
      script.async = true;
      document.body.appendChild(script);
    } else {
        // If script is already present, manually re-initialize if needed
        if ((window as any).google && (window as any).google.translate) {
            (window as any).googleTranslateElementInit();
        }
    }
  }, []);

  return (
    <>
      <nav className="fixed top-0 w-full z-50">
        {/* Top Header Bar */}
        <div className="bg-[#9d174d] text-white py-2 px-6 lg:px-12 border-b border-white/10">
          <div className="max-w-[1700px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 py-1">
            <a
              href="tel:+916397970802"
              className="flex items-center gap-3 hover:text-red-100 transition-colors group"
            >
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-all">
                <PhoneIcon />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] font-bold opacity-70 uppercase tracking-widest">
                  Need Urgent Care?
                </span>
                <span className="text-sm font-black">+91 63979 70802</span>
              </div>
            </a>

            <a
              href="mailto:drvipinkumarsharma@gmail.com"
              className="hidden lg:flex items-center gap-3 hover:text-red-100 transition-colors group"
            >
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-all">
                <MailIcon />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] font-bold opacity-70 uppercase tracking-widest">
                  Send us a Mail
                </span>
                <span className="text-sm font-black">
                  drvipinkumar@gmail.com
                </span>
              </div>
            </a>

            <div className="hidden md:flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-all">
                <MapPinIcon />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] font-bold opacity-70 uppercase tracking-widest">
                  Our Location
                </span>
                <span className="text-sm font-black italic">
                  Kavi Nagar, Hapur, UP
                </span>
              </div>
            </div>

            <div className="hidden xl:flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-all">
                <ClockIcon />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] font-bold opacity-70 uppercase tracking-widest">
                  Working Hours
                </span>
                <span className="text-sm font-black">
                  Mon - Sun 08:00 - 19:00
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Navbar */}
        <div
          className={`w-full transition-all duration-500 bg-white border-b border-gray-100 ${
            isScrolled
              ? "shadow-[0_10px_30px_rgba(157,23,77,0.1)] py-2"
              : "py-4"
          }`}
        >
          <div className="max-w-[1700px] mx-auto px-6 md:px-12 flex items-center justify-between flex-nowrap">
            <Link href="/" className="flex items-center gap-4 group shrink-0">
              <div className="relative w-14 h-14 md:w-16 md:h-16 transition-transform group-hover:rotate-[360deg] duration-1000">
                <Image
                  src="/RNH logo.png"
                  alt="RNH Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col">
                <h1 className="text-lg md:text-xl lg:text-2xl font-black text-[#9d174d] tracking-tight leading-none uppercase">
                  RAJ NURSING HOME
                </h1>
                <p className="text-[9px] md:text-[10px] font-bold text-gray-400 uppercase tracking-widest mt-1">
                  Excellence in Healthcare since 1999
                </p>
              </div>
            </Link>

            <div className="hidden xl:flex items-center gap-1">
              {navLinks.slice(0, 2).map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="px-5 py-3 text-lg font-bold text-gray-700 hover:text-[#9d174d] hover:bg-red-50 rounded-2xl transition-all"
                >
                  {item.label}
                </Link>
              ))}

              <div className="relative group">
                <Link
                  href="/services"
                  className="px-5 py-3 text-lg font-bold text-gray-700 hover:text-[#9d174d] hover:bg-red-50 rounded-2xl transition-all flex items-center gap-2"
                >
                  Services
                  <svg
                    className="w-4 h-4 transition-transform group-hover:rotate-180"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="3"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </Link>
                <div className="absolute top-full -left-20 w-[600px] pt-2 opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 z-50">
                  <div className="bg-white rounded-3xl shadow-[0_20px_50px_rgba(157,23,77,0.15)] border border-gray-100 p-4 overflow-hidden grid grid-cols-2 gap-2">
                    {servicesList.map((service) => (
                      <Link
                        key={service.slug}
                        href={service.href || `/services/${service.slug}`}
                        className="flex items-center px-4 py-3 text-sm font-bold text-gray-600 hover:text-[#9d174d] hover:bg-red-50 rounded-xl transition-all"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-gray-300 mr-2 group-hover:bg-[#9d174d] transition-colors"></span>
                        {service.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              {navLinks.slice(2).map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="px-5 py-3 text-lg font-bold text-gray-700 hover:text-[#9d174d] hover:bg-red-50 rounded-2xl transition-all"
                >
                  {item.label}
                </Link>
              ))}
            </div>

            <div className="flex items-center gap-2 sm:gap-4 shrink-0">
              {/* Language Selector Container */}
              <div className="hidden lg:block min-w-[100px]" id="google_translate_element"></div>

              <Link
                href="/contact"
                className="hidden md:flex px-4 py-2 sm:px-6 sm:py-3 bg-[#9d174d] hover:bg-[#831843] text-white text-xs sm:text-sm font-black rounded-full shadow-lg shadow-red-500/20 transition-all hover:-translate-y-1 items-center gap-2 uppercase tracking-wide whitespace-nowrap"
              >
                <span className="hidden sm:inline">Book Appointment</span>
                <span className="sm:hidden">Book</span>
                <ArrowRightIcon />
              </Link>

              <button
                onClick={() => setIsMenuOpen(true)}
                className="xl:hidden p-2 sm:p-3 text-gray-900 bg-gray-50 hover:bg-red-50 hover:text-[#9d174d] rounded-2xl transition-all border border-gray-100 shrink-0"
              >
                <MenuIcon />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Panel */}
      <div
        className={`fixed inset-0 z-[100] transition-all duration-500 ${
          isMenuOpen ? "visible" : "invisible xl:invisible"
        }`}
      >
        <div
          className={`absolute inset-0 bg-gray-900/60 backdrop-blur-md transition-opacity duration-500 ${
            isMenuOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setIsMenuOpen(false)}
        />
        <div
          className={`absolute top-0 right-0 bottom-0 w-full xs:w-[350px] bg-white transition-transform duration-500 ease-out shadow-2xl ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex flex-col h-full bg-white relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-red-50 rounded-full blur-[80px] -z-10 opacity-50 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-50 rounded-full blur-[80px] -z-10 opacity-50 pointer-events-none"></div>
            <div className="flex items-center justify-between p-6 sm:p-8 border-b border-gray-100 bg-gray-50/50 backdrop-blur-xl sticky top-0 z-10">
              <span className="font-black text-2xl text-[#9d174d]">MENU</span>
              <button
                onClick={() => setIsMenuOpen(false)}
                className="p-3 sm:p-4 bg-white hover:bg-red-600 hover:text-white text-gray-900 rounded-2xl transition-all hover:rotate-90 shadow-lg border border-gray-100"
              >
                <XIcon />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-2 sm:space-y-4">
              {[
                { label: "Home", href: "/#home" },
                { label: "About Us", href: "/about" },
                { label: "Our Services", href: "/services" },
                { label: "Health Plans", href: "/health-checkup-plans" },
                { label: "Best Hospital", href: "/best-hospital-nursing-home-hapur" },
                { label: "Expert Doctors", href: "/#doctors" },
                { label: "Testimonials", href: "/#testimonials" },
                { label: "Treatments", href: "/treatment" },
                { label: "Contact Us", href: "/contact" },
              ].map((item, index) => (
                <div 
                  key={item.label} 
                  style={{ animationDelay: `${index * 50}ms` }}
                  className={`transform transition-all duration-500 ${isMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}
                >
                  <Link
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="flex items-center justify-between px-6 py-4 sm:py-5 text-lg sm:text-2xl font-black text-gray-800 hover:text-[#9d174d] hover:bg-red-50 rounded-3xl transition-all group border border-transparent hover:border-red-100"
                  >
                    {item.label}
                    <ChevronRightIcon className="opacity-0 group-hover:opacity-100 transition-all transform -translate-x-4 group-hover:translate-x-0 text-[#9d174d]" />
                  </Link>
                </div>
              ))}

              <div className="mt-12 pt-12 border-t border-gray-100">
                <p className="text-xs font-black text-gray-400 uppercase tracking-[0.2em] mb-6">
                  Contact Us
                </p>
                <a
                  href="tel:+916397970802"
                  className="flex items-center gap-5 p-4 bg-gray-50 rounded-3xl group"
                >
                  <div className="w-14 h-14 bg-[#9d174d] text-white rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <PhoneIcon />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-gray-500">
                      Emergency Call
                    </p>
                    <p className="text-xl font-black text-gray-900">
                      +91 63979
                    </p>
                  </div>
                </a>
              </div>
            </div>

            <div className="p-8 bg-gray-50 border-t border-gray-100">
              <Link
                href="/contact"
                onClick={() => setIsMenuOpen(false)}
                className="w-full py-6 bg-gradient-to-r from-[#9d174d] to-[#f43f5e] text-white font-black text-xl rounded-3xl shadow-2xl shadow-red-500/30 flex items-center justify-center gap-4 transition-transform active:scale-95"
              >
                Book Appointment
                <ArrowRightIcon />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
