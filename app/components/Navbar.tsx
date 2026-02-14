"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
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
const ChevronDownIcon = ({ className }: { className?: string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="m6 9 6 6 6-6" />
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
const AyushmanCardIcon = () => (
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
    <rect width="20" height="14" x="2" y="5" rx="2" />
    <line x1="2" x2="22" y1="10" y2="10" />
  </svg>
);

const servicesList = [
  { nameKey: "nav.serviceHeartSpecialistHapur", slug: "heart-specialist-hapur", href: "/heart-specialist-hapur" },
  { nameKey: "nav.serviceInternalMedicineHapur", slug: "internal-medicine-hapur", href: "/internal-medicine-hapur" },
  { nameKey: "nav.serviceLaparoscopicSurgeryHapur", slug: "laparoscopic-surgery-hapur", href: "/laparoscopic-surgery-hapur" },
  { nameKey: "nav.serviceDiagnosticCenterHapur", slug: "diagnostic-center-hapur", href: "/diagnostic-center-hapur" },
  { nameKey: "nav.serviceUltrasoundImaging", slug: "ultrasound-and-imaging", href: "/services/ultrasound-and-imaging" },
  { nameKey: "nav.service2DEchoECG", slug: "heart-diagnostics-in-hapur", href: "/heart-diagnostics-in-hapur" },
  { nameKey: "nav.servicePFTTesting", slug: "pft-testing-in-hapur", href: "/pft-testing-in-hapur" },
  { nameKey: "nav.serviceDigitalXRay", slug: "xray-in-hapur", href: "/xray-in-hapur" },
  { nameKey: "nav.serviceIVFFertility", slug: "ivf-treatment-in-hapur", href: "/ivf-treatment-in-hapur" },
  { nameKey: "nav.serviceHeartChestCare", slug: "heart-chest-care-in-hapur", href: "/heart-chest-care-in-hapur" },
  { nameKey: "nav.serviceWomansHealth", slug: "womens-health-in-hapur", href: "/womens-health-in-hapur" },
  { nameKey: "nav.serviceHealthCheckupPlans", slug: "health-checkup-plans", href: "/health-checkup-plans" },
  { nameKey: "nav.serviceBestHospitalHapur", slug: "best-hospital", href: "/best-hospital-nursing-home-hapur" },
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
    // Handle screen resize to close menu on large screens
    const handleResize = () => {
      if (window.innerWidth >= 1280) { // xl breakpoint
        setIsMenuOpen(false);
      }
    };
    
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const { lang, setLang, t } = useLanguage();
  const [isLangOpen, setIsLangOpen] = useState(false);

  const navLinks = [
    { label: t("nav.home"), href: "/#home" },
    { label: t("nav.aboutUs"), href: "/about" },
    { label: t("nav.expertDoctors"), href: "/#doctors" },
    { label: t("nav.blogs"), href: "/blog" },
    { label: t("nav.testimonials"), href: "/#testimonials" },
    { label: t("nav.treatments"), href: "/treatment" },
    { label: t("nav.contactUs"), href: "/contact" },
  ];

  const setLanguage = (l: "en" | "hi") => {
    setLang(l);
    setIsLangOpen(false);
  };

  const langDropdown = (
    <div className="relative">
      <button
        type="button"
        onClick={() => setIsLangOpen((o) => !o)}
        className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-[#9d174d] text-white text-sm font-bold border border-[#831843] shadow-sm hover:bg-[#831843] transition-colors min-w-[72px] justify-center"
      >
        <span>{lang === "en" ? "EN" : "हिन्दी"}</span>
        <ChevronDownIcon className={`text-white transition-transform ${isLangOpen ? "rotate-180" : ""}`} />
      </button>
      {isLangOpen && (
        <>
          <div className="fixed inset-0 z-40" onClick={() => setIsLangOpen(false)} />
          <div className="absolute top-full right-0 mt-1 z-50 w-[140px] py-1 bg-white rounded-xl border border-[#9d174d]/20 shadow-xl shadow-red-500/10">
            <button
              type="button"
              onClick={() => setLanguage("en")}
              className={`w-full text-left px-4 py-2.5 text-sm font-semibold transition-colors rounded-t-lg ${lang === "en" ? "text-[#9d174d] bg-red-50" : "text-gray-800 hover:bg-gray-50"}`}
            >
              EN
            </button>
            <button
              type="button"
              onClick={() => setLanguage("hi")}
              className={`w-full text-left px-4 py-2.5 text-sm font-semibold transition-colors rounded-b-lg ${lang === "hi" ? "text-[#9d174d] bg-red-50" : "text-gray-800 hover:bg-gray-50"}`}
            >
              हिन्दी
            </button>
          </div>
        </>
      )}
    </div>
  );

  return (
    <>
      <nav className="fixed top-0 w-full z-50">
        {/* Top Header Bar - equal left/right gap via padding inside max-w container */}
        <div className="bg-[#9d174d] text-white py-2 border-b border-white/10">
          <div className="max-w-[1700px] mx-auto px-6 sm:px-8 md:px-10 lg:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-3 lg:gap-4 py-1 justify-items-center">
            <a
              href="tel:+916397970802"
              className="flex items-center gap-3 hover:text-red-100 transition-colors group"
            >
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-all">
                <PhoneIcon />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] font-bold opacity-70 uppercase tracking-widest">
                  {t("nav.needUrgentCare")}
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
                  {t("nav.sendUsMail")}
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
                  {t("nav.ourLocation")}
                </span>
                <span className="text-sm font-black italic">
                  {t("nav.locationAddress")}
                </span>
              </div>
            </div>

            <div className="hidden lg:flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-all">
                <ClockIcon />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] font-bold opacity-70 uppercase tracking-widest">
                  {t("nav.workingHours")}
                </span>
                <span className="text-sm font-black">
                  {t("nav.timing")}
                </span>
              </div>
            </div>

            <div className="hidden xl:flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-all">
                <AyushmanCardIcon />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] font-bold opacity-70 uppercase tracking-widest">
                  {t("nav.ayushmanCard")}
                </span>
                <span className="text-sm font-black">
                  {t("nav.acceptedHere")}
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
          <div className="max-w-[1700px] mx-auto px-4 sm:px-6 md:px-10 lg:px-12 flex items-center justify-between gap-4 flex-nowrap">
            <Link href="/" className="flex items-center gap-3 sm:gap-4 group shrink-0">
              <div className="relative w-14 h-14 md:w-16 md:h-16 transition-transform group-hover:rotate-[360deg] duration-1000">
                <Image
                  src="/RNH logo.png"
                  alt="RNH Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <div className="flex flex-col">
                <h1 className="text-lg md:text-xl lg:text-2xl font-black text-[#9d174d] tracking-tight leading-none uppercase">
                  {t("nav.rajNursingHome")}
                </h1>
                <p className="text-[9px] md:text-[10px] font-bold text-gray-400 uppercase tracking-widest mt-1">
                  {t("nav.excellenceSince")}
                </p>
              </div>
            </Link>

            <div className="hidden xl:flex flex-1 items-center justify-center min-w-0 gap-2 sm:gap-3 flex-nowrap">
              {navLinks.slice(0, 2).map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="px-5 py-3 text-lg font-bold text-gray-700 hover:text-[#9d174d] hover:bg-red-50 rounded-2xl transition-all whitespace-nowrap shrink-0"
                >
                  {item.label}
                </Link>
              ))}

              <div className="relative group shrink-0">
                <Link
                  href="/services"
                  className="px-5 py-3 text-lg font-bold text-gray-700 hover:text-[#9d174d] hover:bg-red-50 rounded-2xl transition-all flex items-center gap-2 whitespace-nowrap shrink-0"
                >
                  {t("nav.ourServices")}
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
                <div className="absolute top-full left-0 xl:-left-20 w-[min(600px,95vw)] pt-2 opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 z-50">
                  <div className="bg-white rounded-3xl shadow-[0_20px_50px_rgba(157,23,77,0.15)] border border-gray-100 p-4 overflow-hidden grid grid-cols-2 gap-2">
                    {servicesList.map((service) => (
                      <Link
                        key={service.slug}
                        href={service.href || `/services/${service.slug}`}
                        className="flex items-center px-4 py-3 text-sm font-bold text-gray-600 hover:text-[#9d174d] hover:bg-red-50 rounded-xl transition-all"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-gray-300 mr-2 group-hover:bg-[#9d174d] transition-colors"></span>
                        {t(service.nameKey)}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              {navLinks.slice(2).map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="px-5 py-3 text-lg font-bold text-gray-700 hover:text-[#9d174d] hover:bg-red-50 rounded-2xl transition-all whitespace-nowrap shrink-0"
                >
                  {item.label}
                </Link>
              ))}
            </div>

            <div className="flex items-center gap-2 sm:gap-4 shrink-0">
              {/* Custom Language Switcher (EN / हिन्दी) - Desktop */}
              <div className="hidden lg:block">{langDropdown}</div>

              <Link
                href="/contact"
                className="hidden md:flex px-4 py-2 sm:px-6 sm:py-3 bg-[#9d174d] hover:bg-[#831843] text-white text-xs sm:text-sm font-black rounded-full shadow-lg shadow-red-500/20 transition-all hover:-translate-y-1 items-center gap-2 uppercase tracking-wide whitespace-nowrap"
              >
                <span className="hidden sm:inline">{t("nav.bookAppointment")}</span>
                <span className="sm:hidden">{t("nav.book")}</span>
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
          className={`absolute inset-0 bg-gray-900/60 backdrop-blur-md transition-opacity duration-700 ${isMenuOpen ? "opacity-100" : "opacity-0"
            }`}
          onClick={() => setIsMenuOpen(false)}
        />
        <div
          className={`absolute top-0 right-0 bottom-0 w-[85%] sm:w-[400px] bg-white transition-transform duration-700 cubic-bezier(0.16, 1, 0.3, 1) shadow-[0_0_100px_rgba(157,23,77,0.2)] ${isMenuOpen ? "translate-x-0" : "translate-x-full"
            }`}
        >
          <div className="flex flex-col h-full bg-white relative overflow-hidden">
             {/* Stylish Background Decoration */}
            <div className="absolute top-[-50px] right-[-50px] w-80 h-80 bg-gradient-to-br from-red-50 to-[#9d174d]/5 rounded-full blur-[80px] opacity-70 pointer-events-none animate-pulse"></div>
            <div className="absolute bottom-[-50px] left-[-50px] w-64 h-64 bg-blue-50 rounded-full blur-[80px] opacity-70 pointer-events-none"></div>
            
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-50 bg-white/90 backdrop-blur-xl sticky top-0 z-20">
              <span className="font-black text-xl text-[#9d174d] uppercase tracking-wider flex items-center gap-2">
                <div className="w-2 h-8 bg-[#9d174d] rounded-full"></div>
                {t("nav.menu")}
              </span>
              <button
                onClick={() => setIsMenuOpen(false)}
                className="p-3 bg-gray-50 hover:bg-red-50 text-gray-500 hover:text-[#9d174d] rounded-2xl transition-all hover:rotate-90 duration-300 border border-gray-100 shadow-sm"
              >
                <XIcon />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-6 py-8 space-y-3">
              {/* Mobile Language Switcher (EN / हिन्दी) */}
              <div className="mb-6 flex items-center justify-between p-4 bg-white rounded-2xl border border-gray-100 shadow-sm">
                <span className="font-bold text-sm text-gray-600 flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                  {t("nav.language")}
                </span>
                {langDropdown}
              </div>

              {[
                { label: t("nav.home"), href: "/#home" },
                { label: t("nav.aboutUs"), href: "/about" },
                { label: t("nav.ourServices"), href: "/services", isDropdown: true },
                { label: t("nav.blogs"), href: "/blog" },
                { label: t("nav.healthPlans"), href: "/health-checkup-plans" },
                { label: t("nav.expertDoctors"), href: "/#doctors" },
                { label: t("nav.testimonials"), href: "/#testimonials" },
                { label: t("nav.treatments"), href: "/treatment" },
                { label: t("nav.contactUs"), href: "/contact" },
              ].map((item, index) => (
                <div
                  key={item.label}
                  style={{ animationDelay: `${index * 50}ms`, transitionDelay: `${index * 30}ms` }}
                  className={`transform transition-all duration-700 ease-out ${isMenuOpen ? 'translate-x-0 opacity-100 blur-0' : 'translate-x-12 opacity-0 blur-sm'}`}
                >
                  {item.isDropdown ? (
                    <div className="space-y-2">
                      <button
                        onClick={() => setIsServicesOpen(!isServicesOpen)}
                        className={`w-full flex items-center justify-between px-5 py-4 text-base font-bold rounded-2xl transition-all group duration-300 border ${isServicesOpen ? 'bg-[#9d174d] text-white border-[#9d174d] shadow-lg shadow-[#9d174d]/20' : 'bg-white text-gray-700 border-gray-100 hover:border-red-100 hover:bg-red-50/50'}`}
                      >
                        {item.label}
                        <ChevronRightIcon className={`w-5 h-5 transition-transform duration-500 ${isServicesOpen ? 'rotate-90' : ''}`} />
                      </button>

                      <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isServicesOpen ? 'max-h-[800px] opacity-100 mt-2' : 'max-h-0 opacity-0'}`}>
                        <div className="pl-4 space-y-2 border-l-2 border-[#9d174d]/10 ml-4 py-2">
                          {servicesList.map((service, i) => (
                            <Link
                              key={service.slug}
                              href={service.href || `/services/${service.slug}`}
                              onClick={() => setIsMenuOpen(false)}
                              style={{ transitionDelay: `${i * 30}ms` }}
                              className="block px-4 py-2.5 text-sm font-medium text-gray-600 hover:text-[#9d174d] hover:bg-red-50 rounded-lg transition-all transform hover:translate-x-1"
                            >
                              {t(service.nameKey)}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      onClick={() => setIsMenuOpen(false)}
                      className="flex items-center justify-between px-5 py-4 text-base font-bold text-gray-700 bg-white hover:text-[#9d174d] hover:bg-red-50/50 rounded-2xl transition-all group duration-300 border border-transparent hover:border-red-100 hover:shadow-sm"
                    >
                      {item.label}
                      <ChevronRightIcon className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-all transform -translate-x-2 group-hover:translate-x-0 text-[#9d174d]" />
                    </Link>
                  )}
                </div>
              ))}
            </div>

            <div className="p-6 bg-white border-t border-gray-100 relative z-20">
              <Link
                href="/contact"
                onClick={() => setIsMenuOpen(false)}
                className="w-full py-5 bg-gradient-to-r from-[#9d174d] to-[#be185d] text-white font-black text-lg rounded-2xl shadow-xl shadow-red-500/20 flex items-center justify-center gap-3 transition-transform active:scale-95 hover:shadow-red-500/30 group"
              >
                <span>{t("nav.bookAppointment")}</span>
                <div className="bg-white/20 p-1 rounded-full group-hover:translate-x-1 transition-transform">
                  <ArrowRightIcon />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
