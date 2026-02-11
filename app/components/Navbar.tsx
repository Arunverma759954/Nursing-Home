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
  { label: "Blog", href: "/blog" },
  { label: "Testimonials", href: "/#testimonials" },
  { label: "Treatment", href: "/treatment" },
  { label: "Contact", href: "/contact" },
];

const servicesList = [
  { name: "Heart Specialist Hapur", slug: "heart-specialist-hapur", href: "/heart-specialist-hapur" },
  { name: "Internal Medicine Hapur", slug: "internal-medicine-hapur", href: "/internal-medicine-hapur" },
  { name: "Laparoscopic Surgery Hapur", slug: "laparoscopic-surgery-hapur", href: "/laparoscopic-surgery-hapur" },
  { name: "Diagnostic Center Hapur", slug: "diagnostic-center-hapur", href: "/diagnostic-center-hapur" },
  { name: "Ultrasound & Imaging", slug: "ultrasound-and-imaging", href: "/services/ultrasound-and-imaging" },
  { name: "2D Echo & ECG", slug: "heart-diagnostics-in-hapur", href: "/heart-diagnostics-in-hapur" },
  { name: "PFT Testing", slug: "pft-testing-in-hapur", href: "/pft-testing-in-hapur" },
  { name: "Digital X-Ray", slug: "xray-in-hapur", href: "/xray-in-hapur" },
  { name: "IVF & Fertility Treatment", slug: "ivf-treatment-in-hapur", href: "/ivf-treatment-in-hapur" },
  { name: "Heart & Chest Care", slug: "heart-chest-care-in-hapur", href: "/heart-chest-care-in-hapur" },
  { name: "Woman's Health", slug: "womens-health-in-hapur", href: "/womens-health-in-hapur" },
  { name: "Health Checkup Plans", slug: "health-checkup-plans", href: "/health-checkup-plans" },
  { name: "Best Hospital in Hapur", slug: "best-hospital", href: "/best-hospital-nursing-home-hapur" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [isServicesOpen, setIsServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "unset";
  }, [isMenuOpen]);

  useEffect(() => {
    // Initialize Google Translate
    const initGoogleTranslate = () => {
      if ((window as any).google && (window as any).google.translate) {
        const targetId = 'google_translate_desktop';
        if (!document.getElementById(targetId)?.hasChildNodes()) {
          new (window as any).google.translate.TranslateElement({
            pageLanguage: 'en',
            includedLanguages: 'en,hi',
            layout: (window as any).google.translate.TranslateElement.InlineLayout.SIMPLE,
            autoDisplay: false
          }, targetId);
        }
      }
    };

    (window as any).googleTranslateElementInit = initGoogleTranslate;

    const scriptId = 'google-translate-script';
    if (!document.getElementById(scriptId)) {
      const script = document.createElement('script');
      script.id = scriptId;
      script.type = 'text/javascript';
      script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
      script.async = true;
      document.body.appendChild(script);
    } else {
      initGoogleTranslate();
    }
  }, []);

  // Handle Moving Widget between Desktop and Mobile
  useEffect(() => {
    const moveWidget = () => {
      try {
        const desktopContainer = document.getElementById('google_translate_desktop');
        const mobileContainer = document.getElementById('google_translate_mobile');
        const widget = document.querySelector('.goog-te-gadget-simple');

        if (!widget) return;

        if (isMenuOpen && mobileContainer) {
          // Move to Mobile Container if not already there
          if (!mobileContainer.contains(widget)) {
            mobileContainer.appendChild(widget);
          }
        } else if (desktopContainer) {
          // Move back to Desktop Container if not already there
          if (!desktopContainer.contains(widget)) {
            desktopContainer.appendChild(widget);
          }
        }
      } catch (e) {
        console.error('Error moving translate widget:', e);
      }
    };

    // Run immediately and after a short delay to catch initialization
    moveWidget();
    const interval = setInterval(moveWidget, 1000); // Check periodically for widget existence

    return () => clearInterval(interval);
  }, [isMenuOpen]);

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
          className={`w-full transition-all duration-500 bg-white border-b border-gray-100 ${isScrolled
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
              {/* Language Selector Container (Desktop) */}
              <div className="hidden lg:block min-w-[100px]" id="google_translate_desktop"></div>

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
        className={`fixed inset-0 z-[100] transition-all duration-700 ${isMenuOpen ? "visible" : "invisible"
          }`}
      >
        <div
          className={`absolute inset-0 bg-gray-900/40 backdrop-blur-md transition-opacity duration-700 ${isMenuOpen ? "opacity-100" : "opacity-0"
            }`}
          onClick={() => setIsMenuOpen(false)}
        />
        <div
          className={`absolute top-0 right-0 bottom-0 w-full sm:w-[450px] bg-white/95 backdrop-blur-2xl transition-all duration-700 cubic-bezier(0.16, 1, 0.3, 1) shadow-[0_0_100px_rgba(0,0,0,0.2)] ${isMenuOpen ? "translate-x-0" : "translate-x-full"
            }`}
        >
          <div className="flex flex-col h-full relative overflow-hidden">
            {/* Animated Background Elements */}
            <div className="absolute top-[-10%] right-[-10%] w-80 h-80 bg-[#9d174d]/10 rounded-full blur-[100px] animate-pulse"></div>
            <div className="absolute bottom-[-10%] left-[-10%] w-80 h-80 bg-blue-500/10 rounded-full blur-[100px] animate-pulse delay-700"></div>

            <div className="flex items-center justify-between p-8 border-b border-gray-100 bg-white/50 backdrop-blur-xl sticky top-0 z-10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 relative">
                  <Image src="/RNH logo.png" alt="Logo" fill className="object-contain" />
                </div>
                <span className="font-black text-xl text-[#9d174d] tracking-tighter">NAVIGATION</span>
              </div>
              <button
                onClick={() => setIsMenuOpen(false)}
                className="group p-4 bg-gray-50 hover:bg-[#9d174d] text-gray-900 hover:text-white rounded-2xl transition-all duration-500 hover:scale-110 active:scale-95 shadow-lg border border-gray-100"
              >
                <XIcon />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-6 py-8 space-y-4">
              {/* Mobile Language Selector */}
              <div className="mb-8 p-5 bg-gradient-to-br from-gray-50 to-white rounded-[2.5rem] border border-gray-100 shadow-sm flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#9d174d]/5 rounded-xl flex items-center justify-center text-[#9d174d]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>
                  </div>
                  <span className="font-bold text-gray-800">Language</span>
                </div>
                <div id="google_translate_mobile" className="scale-110 origin-right"></div>
              </div>

              {[
                { label: "Home", href: "/#home", icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></svg> },
                { label: "About Us", href: "/about", icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M12 16v-4" /><path d="M12 8h.01" /></svg> },
                { label: "Our Services", href: "/services", isDropdown: true, icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="7" height="7" x="3" y="3" rx="1" /><rect width="7" height="7" x="14" y="3" rx="1" /><rect width="7" height="7" x="14" y="14" rx="1" /><rect width="7" height="7" x="3" y="14" rx="1" /></svg> },
                { label: "Latest Blog", href: "/blog", icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16L4 18V2H2v16a4 4 0 0 0 4 4z" /><path d="M12 8h4" /><path d="M12 12h4" /></svg> },
                { label: "Health Plans", href: "/health-checkup-plans", icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" /></svg> },
                { label: "Best Hospital", href: "/best-hospital-nursing-home-hapur", icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 21V10a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v11" /><path d="M3 21h18" /><path d="M3 7v14" /><path d="M14 12v.01" /><path d="M18 12v.01" /><path d="M14 16v.01" /><path d="M18 16v.01" /></svg> },
                { label: "Home", href: "/#home", icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></svg> },
                { label: "Our Story", href: "/about", icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M12 16v-4" /><path d="M12 8h.01" /></svg> },
                { label: "Medical Services", href: "/services", isDropdown: true, icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect width="7" height="7" x="3" y="3" rx="1" /><rect width="7" height="7" x="14" y="3" rx="1" /><rect width="7" height="7" x="14" y="14" rx="1" /><rect width="7" height="7" x="3" y="14" rx="1" /></svg> },
                { label: "Latest Blog", href: "/blog", icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16L4 18V2H2v16a4 4 0 0 0 4 4z" /><path d="M12 8h4" /><path d="M12 12h4" /></svg> },
                { label: "Expert Doctors", href: "/#doctors", icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg> },
                { label: "Treatments", href: "/treatment", icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20" /><path d="m4.93 4.93 14.14 14.14" /><path d="M2 12h20" /><path d="m19.07 4.93-14.14 14.14" /></svg> },
                { label: "Contact Us", href: "/contact", icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l2.27-2.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg> },
              ].map((item, index) => (
                <div
                  key={item.label}
                  style={{ animationDelay: `${index * 70}ms` }}
                  className={`transform transition-all duration-700 ${isMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-16 opacity-0'}`}
                >
                  {item.isDropdown ? (
                    <div className="space-y-3">
                      <button
                        onClick={() => setIsServicesOpen(!isServicesOpen)}
                        className={`w-full flex items-center justify-between px-8 py-6 rounded-[2.5rem] transition-all duration-300 group border-2 ${isServicesOpen ? 'bg-[#9d174d] text-white border-[#9d174d] shadow-[0_20px_40px_rgba(157,23,77,0.2)]' : 'bg-white/50 text-gray-800 border-gray-100/50 hover:bg-white hover:border-[#9d174d]/30'}`}
                      >
                        <div className="flex items-center gap-5">
                          <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-500 scale-110 ${isServicesOpen ? 'bg-white/20 text-white' : 'bg-[#9d174d]/5 text-[#9d174d]'}`}>
                            {item.icon}
                          </div>
                          <span className="text-2xl font-black tracking-tight">{item.label}</span>
                        </div>
                        <ChevronRightIcon className={`w-6 h-6 transition-transform duration-500 ${isServicesOpen ? 'rotate-90' : ''}`} />
                      </button>

                      <div className={`overflow-hidden transition-all duration-700 ease-in-out ${isServicesOpen ? 'max-h-[1000px] opacity-100 mt-4' : 'max-h-0 opacity-0'}`}>
                        <div className="grid grid-cols-1 gap-2 pl-4">
                          {servicesList.map((service, idx) => (
                            <Link
                              key={service.slug}
                              href={service.href || `/services/${service.slug}`}
                              onClick={() => setIsMenuOpen(false)}
                              style={{ transitionDelay: `${idx * 20}ms` }}
                              className="flex items-center gap-4 px-8 py-5 text-base font-bold text-gray-600 hover:text-[#9d174d] hover:bg-white rounded-3xl transition-all border border-transparent hover:border-red-100 hover:shadow-lg hover:shadow-red-500/5"
                            >
                              <div className="w-2 h-2 rounded-full bg-[#9d174d]/20 transition-all group-hover:bg-[#9d174d] group-hover:scale-150"></div>
                              {service.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      onClick={() => setIsMenuOpen(false)}
                      className="flex items-center justify-between px-8 py-6 bg-white/50 text-gray-800 hover:text-[#9d174d] hover:bg-white rounded-[2.5rem] transition-all duration-500 group border-2 border-gray-100/50 hover:border-[#9d174d]/30 hover:shadow-[0_15px_30px_rgba(157,23,77,0.08)]"
                    >
                      <div className="flex items-center gap-5">
                        <div className="w-12 h-12 bg-[#9d174d]/5 text-[#9d174d] rounded-2xl flex items-center justify-center group-hover:bg-[#9d174d] group-hover:text-white transition-all duration-500 scale-110">
                          {item.icon}
                        </div>
                        <span className="text-2xl font-black tracking-tight">{item.label}</span>
                      </div>
                      <ChevronRightIcon className="w-6 h-6 opacity-0 group-hover:opacity-100 transition-all transform -translate-x-6 group-hover:translate-x-0" />
                    </Link>
                  )}
                </div>
              ))}

              {/* Mobile Translate (Inside list) */}
              <div className="pt-6 transform transition-all duration-700 delay-500 flex items-center justify-between px-8 py-6 bg-[#9d174d]/5 rounded-[2.5rem] border-2 border-[#9d174d]/10">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-[#9d174d] shadow-sm">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /><path d="M2 12h20" /></svg>
                  </div>
                  <span className="text-xl font-black text-gray-800">Language</span>
                </div>
                <div id="google_translate_mobile" className="scale-125 origin-right"></div>
              </div>
            </div>

            <div className="p-8 space-y-6 bg-white/60 backdrop-blur-3xl border-t border-gray-100 z-40">
              <Link
                href="/contact"
                onClick={() => setIsMenuOpen(false)}
                className="group w-full py-6 bg-gradient-to-r from-[#9d174d] via-[#f43f5e] to-[#9d174d] bg-[length:200%_auto] hover:bg-right text-white font-black text-2xl rounded-[2.5rem] shadow-[0_20px_50px_rgba(157,23,77,0.35)] flex items-center justify-center gap-4 transition-all duration-700 active:scale-95 uppercase tracking-tighter"
              >
                APPOINTMENT NOW
                <ArrowRightIcon />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
