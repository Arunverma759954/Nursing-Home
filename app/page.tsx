"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useLanguage } from "@/app/context/LanguageContext";

// Premium SVG Icons
const PhoneIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l2.27-2.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>;
const MapPinIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></svg>;
const ClockIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>;
const ChevronRightIcon = ({ className }: { className?: string }) => <svg className={className} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>;
const HeartIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" /></svg>;
const ShieldIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.8 17 5 19 5a1 1 0 0 1 1 1z" /><path d="m9 12 2 2 4-4" /></svg>;
const StarIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="1"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>;
const ArrowRightIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>;
const PlayIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z" /></svg>;
const MailIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>;
const FacebookIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>;
const InstagramIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>;

const ChevronDownIcon = ({ className }: { className?: string }) => <svg className={className} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>;

export default function Home() {
  const { t } = useLanguage();
  const [activeDept, setActiveDept] = useState(0);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const departments = [
    { name: t("home.services.heart"), img: "/heart-care.jpg", desc: t("home.services.heartDesc"), icon: "❤️" },
    { name: t("home.services.internal"), img: "/internal1.jpg", desc: t("home.services.internalDesc"), icon: "🩺" },
    { name: t("home.services.lap"), img: "/laparoscopic2.jpg", desc: t("home.services.lapDesc"), icon: "🔬" },
    { name: t("home.services.diagnostic"), img: "/Diagnostic3.jpg", desc: t("home.services.diagnosticDesc"), icon: "🔍" },
    { name: t("home.services.ivf"), img: "/IVF2.jpg", desc: t("home.services.ivfDesc"), icon: "👶" },
    { name: t("home.services.woman"), img: "/raj/gyne-2.jpg", desc: t("home.services.womanDesc"), icon: "💗" },
  ];

  const doctors = [
    { name: t("home.doctors.drVipin"), role: t("home.doctors.drVipinRole"), exp: "28+ Years", img: "/raj/dr.Vipin.jpg", speciality: t("home.doctors.specialty") },
    { name: t("home.doctors.drSrishti"), role: t("home.doctors.drSrishtiRole"), exp: "10+ Years", img: "/raj/dr-Srishti.jpg", speciality: t("home.doctors.specialty") },
    { name: t("home.doctors.drMC"), role: t("home.doctors.drMCRole"), exp: "35+ Years", img: "/raj/M.C.Sharma.jpg", speciality: t("home.doctors.specialty") },
  ];

  const facilities = [
    { title: "Modular OT", img: "/raj/ot.jpg", desc: "Zero-infection advanced operation theatres for safe surgeries" },
    { title: "Advanced ICU", img: "/raj/raj-nursing-home-icu.jpg", desc: "24/7 critical care support with modern monitoring equipment" },
    { title: "Ultrasound Center", img: "/raj/ultrasound.jpg", desc: "High-resolution diagnostics and 2D Echo imaging" },
    { title: "Premium Rooms", img: "/raj/cabin3.jpg", desc: "Luxury patient suites for comfortable medical recovery" },
  ];

  return (
    <div className="min-h-screen bg-white overflow-x-hidden pt-[100px] sm:pt-[110px] md:pt-[130px]">
      {/* ═══════════════════════════════════════════════════════════════════════════
          HERO SECTION
      ═══════════════════════════════════════════════════════════════════════════ */}
      <section id="home" className="relative h-auto min-h-[340px] sm:min-h-[380px] md:min-h-[420px] lg:h-[520px] flex items-center overflow-hidden py-8 sm:py-12 md:py-0 bg-white pb-12 sm:pb-16 md:pb-20">
        <Image src="/Banner_1c.webp" alt="Raj Nursing Home Banner" fill className="object-cover z-0 opacity-90" priority sizes="100vw" />

        {/* Gradients */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/30 z-10"></div>

        <div className="relative z-20 w-full max-w-[1420px] mx-auto px-4 sm:px-6 md:px-10 lg:px-12 h-full flex items-start pt-10 sm:pt-12 md:pt-16 lg:pt-20 min-w-0">
          <div className="max-w-3xl w-full min-w-0 space-y-2 sm:space-y-3">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/90 border border-gray-200 text-[#9d174d] text-[10px] md:text-xs font-bold rounded-full shadow-sm backdrop-blur-md">
              <span className="w-1.5 h-1.5 bg-red-600 rounded-full animate-pulse"></span>
              {t("home.hero.badge")}
            </div>

            {/* Main Heading - tighter line gap */}
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 leading-[1.1] tracking-tight">
              {t("home.hero.title")} <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#9d174d] via-[#f43f5e] to-[#9d174d]">{t("home.hero.titleHighlight")}</span>
            </h1>

            {/* Description - less line spacing */}
            <p className="text-sm md:text-base text-gray-700 max-w-xl leading-snug font-medium">
              {t("home.hero.desc")}
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-0.5">
              <Link href="/contact" className="px-6 py-3 bg-[#9d174d] hover:bg-[#831843] text-white font-bold text-sm rounded-xl shadow-lg shadow-red-500/20 transition-all hover:-translate-y-0.5 flex items-center justify-center gap-2">
                {t("home.hero.bookConsultation")} <span className="w-4 h-4 flex items-center justify-center"><ArrowRightIcon /></span>
              </Link>
              <button className="px-6 py-3 bg-white border border-gray-200 text-gray-800 font-bold text-sm rounded-xl hover:bg-gray-50 transition-all flex items-center justify-center gap-2 shadow-sm">
                <div className="w-6 h-6 bg-red-50 rounded-full flex items-center justify-center text-[#9d174d]">
                  <span className="w-3 h-3 flex items-center justify-center"><PlayIcon /></span>
                </div>
                {t("home.hero.virtualTour")}
              </button>
            </div>

            {/* Stats - left aligned, smaller gaps so nothing cuts off */}
            <div className="flex flex-wrap gap-4 sm:gap-6 md:gap-8 pt-3 sm:pt-4 border-t border-gray-200/60 w-full max-w-2xl min-w-0">
              {[
                { v: t("home.hero.stat1"), l: t("home.hero.yearsExp") },
                { v: t("home.hero.stat2"), l: t("home.hero.deliveries") },
                { v: t("home.hero.stat3"), l: t("home.hero.patients") },
              ].map((s, i) => (
                <div key={i}>
                  <span className="block text-2xl md:text-3xl font-black text-[#9d174d]">{s.v}</span>
                  <span className="block text-[10px] font-bold text-gray-500 uppercase tracking-wider mt-0.5">{s.l}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* QUICK SERVICES */}
      <section className="py-6 sm:py-10 bg-[#9d174d]">
        <div className="max-w-[1420px] mx-auto px-4 sm:px-8 md:px-10 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-8">
            {[
              { i: "🚑", title: t("home.quick.emergency"), sub: t("home.quick.emergencySub") },
              { i: "🏥", title: t("home.quick.icu"), sub: t("home.quick.icuSub") },
              { i: "🩺", title: t("home.quick.opd"), sub: t("home.quick.opdSub") },
              { i: "🧪", title: t("home.quick.labs"), sub: t("home.quick.labsSub") },
            ].map((s, i) => (
              <div key={i} className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-3 md:gap-5 text-white p-2">
                <span className="text-3xl md:text-4xl">{s.i}</span>
                <div>
                  <p className="font-black text-base md:text-xl leading-none">{s.title}</p>
                  <p className="text-red-200 text-xs md:text-sm mt-1 uppercase tracking-tighter">{s.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INTRO BLOCK – Raj Nursing Home Best Hospital + Why Choose + 24/7 Emergency */}
      <section className="py-8 sm:py-12 md:py-14 bg-white">
        <div className="max-w-[1420px] mx-auto px-4 sm:px-8 md:px-10 lg:px-12">
          <div className="flex items-start gap-3 mb-4">
            <span className="w-10 h-10 rounded-lg bg-[#9d174d]/10 flex items-center justify-center text-[#9d174d] shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></svg>
            </span>
            <div>
              <h2 className="text-lg md:text-xl lg:text-2xl font-black text-gray-900 leading-tight">{t("home.introBlock.mainTitle")}</h2>
              <p className="text-[#9d174d] text-sm font-bold mt-1 md:mt-2">{t("home.introBlock.subtitle")}</p>
            </div>
          </div>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-6 max-w-[1100px]">
            {t("home.introBlock.welcome")}
          </p>
          <p className="font-bold text-gray-900 mb-2">{t("home.introBlock.ifSearching")}</p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 mb-6">
            {["search1", "search2", "search3", "search4", "search5", "search6"].map((key, i) => (
              <li key={i} className="flex items-center gap-2 text-gray-700">
                <span className="w-1.5 h-1.5 rounded-full bg-[#9d174d] shrink-0" />
                {t(`home.introBlock.${key}` as const)}
              </li>
            ))}
          </ul>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-10 max-w-[900px]">
            {t("home.introBlock.concluding")}
          </p>

          <h3 className="text-lg md:text-xl font-black text-gray-900 mb-4">{t("home.whyChoose.title")}</h3>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-6 max-w-[900px]">
            {t("home.whyChoose.protocol")}
          </p>
          <ul className="space-y-4 mb-8">
            <li>
              <span className="font-bold text-gray-900">✓ {t("home.whyChoose.clinicalTeam")}</span>
            </li>
            <li>
              <span className="font-bold text-gray-900">✓ {t("home.whyChoose.advancedInfraTitle")}</span>
              <p className="text-gray-600 text-sm md:text-base mt-1">{t("home.whyChoose.advancedInfraDesc")}</p>
            </li>
            <li>
              <span className="font-bold text-gray-900">✓ {t("home.whyChoose.experiencedTeamTitle")}</span>
              <p className="text-gray-600 text-sm md:text-base mt-1">{t("home.whyChoose.experiencedTeamDesc")}</p>
            </li>
            <li>
              <span className="font-bold text-gray-900">✓ {t("home.whyChoose.affordableTitle")}</span>
              <p className="text-gray-600 text-sm md:text-base mt-1">{t("home.whyChoose.affordableDesc")}</p>
            </li>
          </ul>

          <div className="border-t border-gray-200 pt-8">
            <div className="flex items-start gap-3 mb-4">
              <span className="w-10 h-10 rounded-lg bg-[#9d174d]/10 flex items-center justify-center text-[#9d174d] shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></svg>
              </span>
              <h3 className="text-lg md:text-xl font-black text-gray-900">{t("home.emergency24.title")}</h3>
            </div>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-4 max-w-[900px]">
              {t("home.emergency24.intro")}
            </p>
            <p className="font-bold text-gray-900 mb-2">{t("home.emergency24.weManage")}</p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
              {["m1", "m2", "m3", "m4", "m5", "m6"].map((key, i) => (
                <li key={i} className="flex items-center gap-2 text-gray-700">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#9d174d] shrink-0" />
                  {t(`home.emergency24.${key}` as const)}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* NEW SECTION 1: OUR MEDICAL SERVICES (Image Left, Text Right) */}
      <section className="py-10 sm:py-12 md:py-16 bg-white overflow-hidden">
        <div className="max-w-[1420px] mx-auto px-4 sm:px-8 md:px-10 lg:px-12">
          <div className="flex flex-col lg:flex-row items-center gap-10 md:gap-16">
            {/* Image Side */}
            <div className="w-full lg:w-1/2 relative group">
              <div className="relative h-[300px] md:h-[500px] rounded-[2rem] md:rounded-[3.5rem] overflow-hidden shadow-2xl">
                <Image
                  src="/medical.jpg"
                  alt="Medical Services"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-[#9d174d]/20 to-transparent" />
              </div>
              {/* Decorative Element */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 md:w-48 md:h-48 bg-[#9d174d]/5 rounded-full -z-10 blur-2xl" />
            </div>

            {/* Text Side */}
            <div className="w-full lg:w-1/2 space-y-6 md:space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-50 rounded-full">
                <span className="w-2 h-2 rounded-full bg-[#9d174d] animate-pulse" />
                <span className="text-[#9d174d] font-black tracking-widest uppercase text-[10px] md:text-xs">
                  {t("home.ourMedicalServices.title")}
                </span>
              </div>
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 leading-[1.1]">
                {t("home.ourMedicalServices.title")}
              </h3>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed font-medium">
                {t("home.ourMedicalServices.para")}
              </p>
              <div className="pt-4">
                <Link href="#contact" className="px-8 py-4 bg-[#9d174d] text-white font-black rounded-2xl hover:bg-[#831843] transition-all shadow-xl hover:shadow-[#9d174d]/20 inline-flex items-center gap-3">
                  {t("nav.bookAppointment")} <ArrowRightIcon />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section >

      {/* NEW SECTION 2: HEALTH SERVICES FOR EVERYONE (Text Left, Image Right) */}
      <section className="py-10 sm:py-12 md:py-16 bg-gray-50 overflow-hidden">
        <div className="max-w-[1420px] mx-auto px-4 sm:px-8 md:px-10 lg:px-12">
          <div className="flex flex-col-reverse lg:flex-row items-center gap-10 md:gap-16">
            {/* Text Side */}
            <div className="w-full lg:w-1/2 space-y-6 md:space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm border border-gray-100">
                <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                <span className="text-gray-900 font-black tracking-widest uppercase text-[10px] md:text-xs">
                  {t("home.healthServices.title")}
                </span>
              </div>
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 leading-[1.1]">
                {t("home.healthServices.title")}
              </h3>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed font-medium">
                {t("home.healthServices.para")}
              </p>
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="p-4 bg-white rounded-2xl border border-gray-100 shadow-sm">
                  <span className="text-2xl mb-2 block">🏥</span>
                  <p className="font-bold text-gray-900 text-sm">24/7 Availability</p>
                </div>
                <div className="p-4 bg-white rounded-2xl border border-gray-100 shadow-sm">
                  <span className="text-2xl mb-2 block">👨‍⚕️</span>
                  <p className="font-bold text-gray-900 text-sm">Expert Doctors</p>
                </div>
              </div>
            </div>

            {/* Image Side */}
            <div className="w-full lg:w-1/2 relative group">
              <div className="relative h-[300px] md:h-[500px] rounded-[2rem] md:rounded-[3.5rem] overflow-hidden shadow-2xl">
                <Image
                  src="/raj/ot.jpg"
                  alt="Modern Facility"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-bl from-blue-500/10 to-transparent" />
              </div>
              {/* Decorative Element */}
              <div className="absolute -top-6 -left-6 w-32 h-32 md:w-48 md:h-48 bg-blue-500/5 rounded-full -z-10 blur-2xl" />
            </div>
          </div>
        </div>
      </section >

      {/* TRUSTED PARTNER - clean two-column */}
      <section className="py-14 sm:py-16 md:py-20 bg-white overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
            {/* Image - simple, no overlay text */}
            <div className="w-full lg:w-[42%] shrink-0 order-2 lg:order-1">
              <div className="relative aspect-[4/3] max-h-[320px] lg:max-h-[380px] rounded-xl overflow-hidden bg-gray-100">
                <Image
                  src="/raj/cabin3.jpg"
                  alt="Raj Hospital - Care at Hapur"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 42vw"
                />
              </div>
            </div>

            {/* Text - no heavy card, clean left accent */}
            <div className="w-full lg:w-[58%] order-1 lg:order-2 lg:pl-2">
              <div className="border-l-4 border-[#9d174d] pl-5 sm:pl-6">
                <p className="text-[#9d174d] font-bold text-xs uppercase tracking-widest mb-3">
                  {t("home.trustedPartner.badge")}
                </p>
                <h3 className="text-xl sm:text-2xl md:text-[1.6rem] font-bold text-gray-900 leading-snug mb-4">
                  {t("home.trustedPartner.title")}
                </h3>
                <p className="text-sm text-gray-600 leading-snug max-w-prose mb-5">
                  {t("home.trustedPartner.para")}
                </p>
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {["highlight1", "highlight2", "highlight3", "highlight4"].map((key) => (
                    <span key={key} className="inline-block px-2.5 py-1 bg-gray-50 text-gray-700 text-[11px] font-medium rounded-md">
                      {t(("home.trustedPartner." + key) as "home.trustedPartner.highlight1")}
                    </span>
                  ))}
                </div>
                <Link href="/services" className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#9d174d] text-white font-semibold rounded-lg hover:bg-[#831843] transition-colors text-sm">
                  {t("home.trustedPartner.ctaButton")} <ArrowRightIcon />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="py-10 sm:py-12 md:py-16 bg-gray-50">
        <div className="max-w-[1420px] mx-auto px-4 sm:px-8 md:px-10 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-10 md:gap-20 items-center">
            <div className="grid grid-cols-2 gap-3 md:gap-6">
              <div className="space-y-3 md:space-y-6">
                <div className="relative h-40 md:h-64 rounded-2xl md:rounded-[3rem] overflow-hidden shadow-2xl"><Image src="/raj/ot.jpg" alt="OT" fill className="object-cover" /></div>
                <div className="relative h-48 md:h-80 rounded-2xl md:rounded-[3rem] overflow-hidden shadow-2xl"><Image src="/medical.jpg" alt="Raj Nursing Home" fill className="object-cover" /></div>
              </div>
              <div className="space-y-3 md:space-y-6 pt-6 md:pt-12">
                <div className="relative h-48 md:h-80 rounded-2xl md:rounded-[3rem] overflow-hidden shadow-2xl"><Image src="/ultrasound.jpg" alt="Ultrasound" fill className="object-cover" /></div>
                <div className="relative h-40 md:h-64 rounded-2xl md:rounded-[3rem] overflow-hidden shadow-2xl"><Image src="/raj/cabin3.jpg" alt="Patient Room" fill className="object-cover" /></div>
              </div>
            </div>

            <div className="space-y-6 md:space-y-10">
              <div>
                <span className="text-[#9d174d] font-black tracking-[0.2em] md:tracking-[0.3em] uppercase text-xs md:text-sm">{t("home.about.label")}</span>
                <h3 className="text-3xl md:text-4xl font-black text-gray-900 mt-2 md:mt-4 leading-tight">{t("home.about.title")} <span className="text-[#9d174d]">{t("home.about.titleHighlight")}</span></h3>
              </div>

              <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                {t("home.about.para")}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-8">
                {[
                  { title: t("home.about.expertTeam"), desc: t("home.about.expertTeamDesc"), icon: <ShieldIcon /> },
                  { title: t("home.about.compassionate"), desc: t("home.about.compassionateDesc"), icon: <HeartIcon /> },
                ].map((f, i) => (
                  <div key={i} className="flex gap-4 md:gap-6 p-4 md:p-6 bg-white rounded-2xl md:rounded-3xl shadow-lg border border-gray-100">
                    <div className="w-12 h-12 md:w-14 md:h-14 bg-red-50 text-[#9d174d] rounded-xl md:rounded-2xl flex items-center justify-center shrink-0">{f.icon}</div>
                    <div>
                      <h4 className="font-black text-base md:text-lg text-gray-900">{f.title}</h4>
                      <p className="text-gray-500 text-xs md:text-sm mt-1">{f.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Link href="/about" className="w-full sm:w-auto px-8 md:px-10 py-4 md:py-5 bg-gray-900 text-white font-black text-base md:text-lg rounded-2xl hover:bg-black transition-all flex items-center justify-center gap-4 inline-flex">
                {t("home.about.cta")} <ChevronRightIcon />
              </Link>
            </div>
          </div>
        </div>
      </section >

      {/* SERVICES */}
      <section id="services" className="py-10 sm:py-12 md:py-16 bg-white">
        <div className="max-w-[1420px] mx-auto px-4 sm:px-8 md:px-10 lg:px-12 text-center mb-8 sm:mb-12 md:mb-24">
          <span className="text-[#9d174d] font-black tracking-[0.3em] uppercase text-xs md:text-sm">{t("home.services.label")}</span>
          <h3 className="text-3xl md:text-4xl font-black text-gray-900 mt-2 md:mt-4">{t("home.services.title")} <span className="text-[#9d174d]">{t("home.services.titleHighlight")}</span></h3>
        </div>

        <div className="max-w-[1420px] mx-auto px-4 sm:px-8 md:px-10 lg:px-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-10">
          {[
            { name: t("home.services.heart"), slug: "heart-specialist", img: "/heart-care.jpg", desc: t("home.services.heartDesc"), icon: "❤️" },
            { name: t("home.services.internal"), slug: "internal-medicine", img: "/internal1.jpg", desc: t("home.services.internalDesc"), icon: "🩺" },
            { name: t("home.services.lap"), slug: "laparoscopic-surgery", img: "/laparoscopic2.jpg", desc: t("home.services.lapDesc"), icon: "🔬" },
            { name: t("home.services.diagnostic"), slug: "diagnostic-services", img: "/Diagnostic3.jpg", desc: t("home.services.diagnosticDesc"), icon: "🔍" },
            { name: t("home.services.ivf"), slug: "ivf-and-fertility", img: "/IVF2.jpg", desc: t("home.services.ivfDesc"), icon: "👶" },
            { name: t("home.services.woman"), slug: "womens-health-in-hapur", img: "/raj/gyne-2.jpg", desc: t("home.services.womanDesc"), icon: "💗" },
          ].map((d, i) => (
            <div key={i} className="group relative bg-white border border-gray-100 rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-xl hover:shadow-[0_40px_80px_rgba(157,23,77,0.15)] transition-all duration-700 hover:-translate-y-4">
              <div className="relative h-56 md:h-72 overflow-hidden">
                <Image src={d.img} alt={d.name} fill className="object-cover group-hover:scale-125 transition-transform duration-1000" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <span className="absolute bottom-6 left-8 text-4xl md:text-5xl drop-shadow-2xl">{d.icon}</span>
              </div>
              <div className="p-6 md:p-10">
                <h3 className="text-lg md:text-xl font-black text-gray-900 mb-3 md:mb-4">{d.name}</h3>
                <p className="text-gray-600 text-sm md:text-base mb-6 md:mb-8 leading-relaxed">{d.desc}</p>
                <Link href={`/services/${d.slug}`} className="flex items-center gap-3 text-[#9d174d] font-black text-sm md:text-base group-hover:gap-6 transition-all">
                  {t("home.services.bookService")} <ArrowRightIcon />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section >

      {/* OUR FACILITY - 9 items grid (screenshot 2) */}
      <section id="facility" className="py-10 sm:py-12 md:py-16 bg-white">
        <div className="max-w-[1420px] mx-auto px-4 sm:px-8 md:px-10 lg:px-12 text-center mb-8 sm:mb-12">
          <h3 className="text-2xl md:text-3xl font-black text-gray-900 tracking-tight">{t("home.ourFacility.label")}</h3>
          <div className="h-1 w-16 bg-[#9d174d] mx-auto rounded-full mt-3" />
        </div>
        <div className="max-w-[1420px] mx-auto px-4 sm:px-8 md:px-10 lg:px-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {[
            { title: t("home.ourFacility.f1Title"), desc: t("home.ourFacility.f1Desc"), icon: "247" },
            { title: t("home.ourFacility.f2Title"), desc: t("home.ourFacility.f2Desc"), icon: "🩺" },
            { title: t("home.ourFacility.f3Title"), desc: t("home.ourFacility.f3Desc"), icon: "❤️" },
            { title: t("home.ourFacility.f4Title"), desc: t("home.ourFacility.f4Desc"), icon: "👩" },
            { title: t("home.ourFacility.f5Title"), desc: t("home.ourFacility.f5Desc"), icon: "🫁" },
            { title: t("home.ourFacility.f6Title"), desc: t("home.ourFacility.f6Desc"), icon: "📡" },
            { title: t("home.ourFacility.f7Title"), desc: t("home.ourFacility.f7Desc"), icon: "💓" },
            { title: t("home.ourFacility.f8Title"), desc: t("home.ourFacility.f8Desc"), icon: "💊" },
            { title: t("home.ourFacility.f9Title"), desc: t("home.ourFacility.f9Desc"), icon: "🩻" },
          ].map((item, i) => (
            <div key={i} className="flex gap-4 md:gap-5 p-5 md:p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:border-[#9d174d]/30 hover:shadow-lg transition-all text-left">
              <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-[#9d174d] text-white flex items-center justify-center font-black text-sm md:text-base shrink-0">
                {item.icon === "247" ? "24/7" : item.icon}
              </div>
              <div>
                <h3 className="font-black text-gray-900 text-base md:text-lg mb-1">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section >

      {/* DETAILED SERVICES – Critical Care intro + Cardiology, Internal, Surgery, Diagnostic, Women's, Lifestyle, Infectious */}
      < section className="py-12 sm:py-16 md:py-24 bg-gray-50" >
        <div className="max-w-[1420px] mx-auto px-4 sm:px-8 md:px-10 lg:px-12">
          <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-2">{t("home.criticalCareIntro.p1")}</p>
          <p className="font-bold text-gray-900 mb-10 md:mb-12">{t("home.criticalCareIntro.p2")}</p>

          {[
            { icon: "heart", iconColor: "text-pink-500 bg-pink-50", titleKey: "cardiologyTitle", introKey: "cardiologyIntro", bullets: ["cardiology1", "cardiology2", "cardiology3", "cardiology4", "cardiology5"], endKey: "cardiologyEnd" },
            { icon: "stethoscope", iconColor: "text-sky-500 bg-sky-50", titleKey: "internalTitle", introKey: "internalIntro", leadKey: "internalWeTreat", bullets: ["internal1", "internal2", "internal3", "internal4", "internal5", "internal6"], approachKey: "internalApproach", endKey: "internalEnd" },
            { icon: "scalpel", iconColor: "text-violet-500 bg-violet-50", titleKey: "surgeryTitle", introKey: "surgeryIntro", leadKey: "surgeryInclude", bullets: ["surgery1", "surgery2", "surgery3", "surgery4", "surgery5"], benefitsKey: "surgeryBenefits", endKey: "surgeryEnd" },
            { icon: "scan", iconColor: "text-sky-500 bg-sky-50", titleKey: "diagnosticTitle", introKey: "diagnosticIntro", bullets: ["diagnostic1", "diagnostic2", "diagnostic3", "diagnostic4", "diagnostic5"], endKey: "diagnosticEnd" },
            { icon: "woman", iconColor: "text-orange-500 bg-orange-50", titleKey: "womensTitle", introKey: "womensIntro", bullets: ["womens1", "womens2", "womens3", "womens4", "womens5", "womens6", "womens7"], endKeys: ["womensEnd1", "womensEnd2"] },
            { icon: "lifestyle", iconColor: "text-rose-500 bg-rose-50", titleKey: "lifestyleTitle", introKey: "lifestyleIntro", bullets: ["lifestyle1", "lifestyle2", "lifestyle3", "lifestyle4", "lifestyle5"], endKey: "lifestyleEnd" },
            { icon: "thermometer", iconColor: "text-gray-700 bg-gray-100", titleKey: "infectiousTitle", introKey: "infectiousIntro", bullets: ["infectious1", "infectious2", "infectious3", "infectious4"], endKey: "infectiousEnd" },
          ].map((block, idx) => (
            <div key={idx} className="mb-10 md:mb-14 last:mb-0">
              <div className="flex items-start gap-3 mb-3">
                <span className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 ${block.iconColor}`}>
                  {block.icon === "heart" && <HeartIcon />}
                  {block.icon === "stethoscope" && <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 2v2" /><path d="M11 20v2" /><path d="M11 2c-2 0-4.5 1.2-5 4-1 5 3 8 6 8 3 0 7-3 6-8-.5-2.8-3-4-5-4Z" /><path d="M11 2c2 0 4.5 1.2 5 4 1 5-3 8-6 8-3 0-7-3-6-8 .5-2.8 3-4 5-4Z" /></svg>}
                  {block.icon === "scalpel" && <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m14 4 1.5 1.5" /><path d="M4 20 14 10" /><path d="m16 6 2 2-8 8-2-2 8-8Z" /></svg>}
                  {block.icon === "scan" && <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" /><path d="M3 9h18" /><path d="M9 21V9" /></svg>}
                  {block.icon === "woman" && <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="4" /><path d="M12 14v6" /><path d="M9 18h6" /></svg>}
                  {block.icon === "lifestyle" && <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" /></svg>}
                  {block.icon === "thermometer" && <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z" /></svg>}
                </span>
                <h3 className="text-lg md:text-xl font-black text-gray-900">{t(`home.detailedServices.${block.titleKey}` as const)}</h3>
              </div>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-3 ml-0 md:ml-[52px]">{t(`home.detailedServices.${block.introKey}` as const)}</p>
              {"leadKey" in block && block.leadKey && <p className="font-bold text-gray-900 mb-2 ml-0 md:ml-[52px]">{t(`home.detailedServices.${block.leadKey}` as const)}</p>}
              <ul className="ml-0 md:ml-[52px] grid grid-cols-1 sm:grid-cols-2 gap-1.5 mb-3">
                {(block.bullets as string[]).map((b, i) => (
                  <li key={i} className="flex items-center gap-2 text-gray-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#9d174d] shrink-0" />
                    {t(`home.detailedServices.${b}` as const)}
                  </li>
                ))}
              </ul>
              {"approachKey" in block && block.approachKey && <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-3 ml-0 md:ml-[52px]">{t(`home.detailedServices.${block.approachKey}` as const)}</p>}
              {"benefitsKey" in block && block.benefitsKey && <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-3 ml-0 md:ml-[52px]">{t(`home.detailedServices.${block.benefitsKey}` as const)}</p>}
              {"endKey" in block && block.endKey && <p className="text-gray-600 text-sm md:text-base leading-relaxed ml-0 md:ml-[52px]">{t(`home.detailedServices.${block.endKey}` as const)}</p>}
              {"endKeys" in block && block.endKeys && <div className="ml-0 md:ml-[52px] space-y-2"><p className="text-gray-600 text-sm md:text-base leading-relaxed">{t(`home.detailedServices.${block.endKeys[0]}` as const)}</p><p className="text-gray-600 text-sm md:text-base leading-relaxed">{t(`home.detailedServices.${block.endKeys[1]}` as const)}</p></div>}
              {idx < 6 && <div className="h-px bg-gray-200 mt-8 md:mt-10 w-full" />}
            </div>
          ))}
        </div>
      </section >

      {/* DOCTORS */}
      {/* DOCTORS SECTION - Responsive Cards */}
      <section id="doctors" className="py-12 sm:py-16 md:py-24 bg-gray-50 overflow-hidden">
        <div className="max-w-[1420px] mx-auto px-4 sm:px-8 md:px-10 lg:px-12 text-center mb-8 sm:mb-10 md:mb-16">
          <span className="text-[#9d174d] font-black tracking-[0.3em] uppercase text-xs md:text-sm">{t("home.doctors.label")}</span>
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mt-2 md:mt-4 tracking-tighter">{t("home.doctors.title")} <span className="text-[#9d174d]">{t("home.doctors.titleHighlight")}</span></h3>
        </div>

        <div className="max-w-[1420px] mx-auto px-4 sm:px-8 md:px-10 lg:px-12 grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
          {/* Doctor 1: Dr. Vipin Kumar Sharma */}
          <div className="bg-white rounded-[2rem] md:rounded-[2.5rem] shadow-xl border border-gray-100 flex flex-col p-5 md:p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group min-h-[580px] lg:min-h-[620px]">
            {/* Top Zone: Header & Photo */}
            <div className="flex flex-row justify-between items-start gap-4 mb-6">
              <div className="flex-1">
                <h3 className="text-base md:text-lg font-black text-gray-900 leading-tight">{t("home.doctors.drVipin")}</h3>
                <p className="text-[#9d174d] text-[10px] md:text-xs font-black uppercase tracking-tight mt-1">{t("home.doctors.drVipinRole")}</p>
                <div className="mt-4 hidden sm:block">
                  <Link href="/dr-vipin-kumar-sharma" className="inline-block py-2.5 px-6 bg-[#9d174d] text-white font-black text-[10px] rounded-xl uppercase tracking-widest hover:bg-[#831843] transition-all shadow-lg active:scale-95">
                    {t("home.doctors.readMore")}
                  </Link>
                </div>
              </div>
              <div className="w-24 sm:w-36 shrink-0 relative aspect-[3/4] rounded-2xl overflow-hidden shadow-md">
                <Image src="/raj/dr.Vipin.jpg" alt="Dr. Vipin" fill className="object-cover object-center" />
              </div>
            </div>

            {/* Bottom Zone: Full Width Content */}
            <div className="space-y-3">
              <p className="text-[10px] md:text-[11px] text-gray-600 leading-relaxed font-bold">
                {t("home.doctors.vipinDesc1")}
              </p>
              <p className="text-[10px] md:text-[11px] text-gray-500 leading-relaxed italic font-medium">
                {t("home.doctors.vipinDesc2")}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-2">
                {[
                  { l: t("home.doctors.regNo"), v: t("home.doctors.vipinRegVal") },
                  { l: t("home.doctors.consultant"), v: t("home.doctors.vipinConsultantVal") },
                  { l: t("home.doctors.specialty"), v: t("home.doctors.vipinSpecialtyVal") },
                ].map((item, i) => (
                  <div key={i} className="flex flex-col gap-0.5 bg-gray-50 px-3 py-2 rounded-xl border border-gray-100/50">
                    <span className="font-black text-gray-400 uppercase tracking-widest text-[8px]">{item.l}</span>
                    <span className="font-bold text-gray-900 text-[10px]">{item.v}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Mobile Button - Visible only on mobile */}
            <div className="mt-6 sm:hidden">
              <Link href="/dr-vipin-kumar-sharma" className="block w-full py-3 bg-[#9d174d] text-white font-black text-xs rounded-xl uppercase tracking-widest shadow-lg text-center">
                {t("home.doctors.readMore")}
              </Link>
            </div>
          </div>

          {/* Doctor 2: Dr. Srishti Bhardwaj */}
          <div className="bg-white rounded-[2rem] md:rounded-[2.5rem] shadow-xl border border-gray-100 flex flex-col p-5 md:p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group min-h-[580px] lg:min-h-[620px]">
            {/* Top Zone */}
            <div className="flex flex-row justify-between items-start gap-4 mb-6">
              <div className="flex-1">
                <h3 className="text-base md:text-lg font-black text-gray-900 leading-tight">{t("home.doctors.drSrishti")}</h3>
                <p className="text-[#9d174d] text-[10px] md:text-xs font-black uppercase tracking-tight mt-1">{t("home.doctors.drSrishtiRole")}</p>
                <div className="mt-4 hidden sm:block">
                  <Link href="/dr-srishti-bhardwaj" className="inline-block py-2.5 px-6 bg-[#9d174d] text-white font-black text-[10px] rounded-xl uppercase tracking-widest hover:bg-[#831843] transition-all shadow-lg active:scale-95">
                    {t("home.doctors.readMore")}
                  </Link>
                </div>
              </div>
              <div className="w-24 sm:w-36 shrink-0 relative aspect-[3/4] rounded-2xl overflow-hidden shadow-md grayscale group-hover:grayscale-0 transition-all">
                <Image src="/raj/dr-Srishti.jpg" alt="Dr. Srishti" fill className="object-cover object-center" />
              </div>
            </div>

            {/* Bottom Zone */}
            <div className="space-y-3">
              <p className="text-[10px] md:text-[11px] text-gray-600 leading-relaxed font-bold">
                {t("home.doctors.srishtiDesc1")}
              </p>
              <p className="text-[10px] md:text-[11px] text-gray-500 leading-relaxed italic font-medium">
                {t("home.doctors.srishtiDesc2")}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-2">
                {[
                  { l: t("home.doctors.regNo"), v: t("home.doctors.srishtiRegVal") },
                  { l: t("home.doctors.consultant"), v: t("home.doctors.srishtiConsultantVal") },
                  { l: t("home.doctors.specialty"), v: t("home.doctors.srishtiSpecialtyVal") },
                ].map((item, i) => (
                  <div key={i} className="flex flex-col gap-0.5 bg-gray-50 px-3 py-2 rounded-xl border border-gray-100/50">
                    <span className="font-black text-gray-400 uppercase tracking-widest text-[8px]">{item.l}</span>
                    <span className="font-bold text-gray-900 text-[10px]">{item.v}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 sm:hidden">
              <Link href="/dr-srishti-bhardwaj" className="block w-full py-3 bg-[#9d174d] text-white font-black text-xs rounded-xl uppercase tracking-widest shadow-lg text-center">
                {t("home.doctors.readMore")}
              </Link>
            </div>
          </div>

          {/* Doctor 3: Dr. M.C. Sharma */}
          <div className="bg-white rounded-[2rem] md:rounded-[2.5rem] shadow-xl border border-gray-100 flex flex-col p-5 md:p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group min-h-[580px] lg:min-h-[620px]">
            {/* Top Zone */}
            <div className="flex flex-row justify-between items-start gap-4 mb-6">
              <div className="flex-1">
                <h3 className="text-base md:text-lg font-black text-gray-900 leading-tight">{t("home.doctors.drMC")}</h3>
                <p className="text-[#9d174d] text-[10px] md:text-xs font-black uppercase tracking-tight mt-1">{t("home.doctors.drMCRole")}</p>
                <div className="mt-4 hidden sm:block">
                  <Link href="/dr-mc-sharma" className="inline-block py-2.5 px-6 bg-[#9d174d] text-white font-black text-[10px] rounded-xl uppercase tracking-widest hover:bg-[#831843] transition-all shadow-lg active:scale-95">
                    {t("home.doctors.readMore")}
                  </Link>
                </div>
              </div>
              <div className="w-24 sm:w-36 shrink-0 relative aspect-[3/4] rounded-2xl overflow-hidden shadow-md">
                <Image src="/raj/M.C.Sharma.jpg" alt="Dr. M.C. Sharma" fill className="object-cover object-center" />
              </div>
            </div>

            {/* Bottom Zone */}
            <div className="space-y-3">
              <p className="text-[10px] md:text-[11px] text-gray-600 leading-relaxed font-bold">
                {t("home.doctors.mcDesc1")}
              </p>
              <p className="text-[10px] md:text-[11px] text-gray-500 leading-relaxed italic font-medium">
                {t("home.doctors.mcDesc2")}
              </p>
              <p className="text-[10px] md:text-[11px] text-gray-600 leading-relaxed font-bold">
                {t("home.doctors.mcDesc3")}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-2">
                {[
                  { l: t("home.doctors.regNo"), v: t("home.doctors.mcRegVal") },
                  { l: t("home.doctors.opdHours"), v: t("home.doctors.mcOpdVal") },
                  { l: t("home.doctors.expertise"), v: t("home.doctors.mcExpertiseVal") },
                ].map((item, i) => (
                  <div key={i} className="flex flex-col gap-0.5 bg-gray-50 px-3 py-2 rounded-xl border border-gray-100/50">
                    <span className="font-black text-gray-400 uppercase tracking-widest text-[8px]">{item.l}</span>
                    <span className="font-bold text-gray-900 text-[10px]">{item.v}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 sm:hidden">
              <Link href="/dr-mc-sharma" className="block w-full py-3 bg-[#9d174d] text-white font-black text-xs rounded-xl uppercase tracking-widest shadow-lg text-center">
                {t("home.doctors.readMore")}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* DEPARTMENT SECTION - Premium Modern Design */}
      <section className="py-12 sm:py-16 md:py-24 bg-gradient-to-br from-gray-50 via-white to-red-50/30 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-red-100 rounded-full blur-[120px] opacity-30" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#9d174d]/10 rounded-full blur-[120px] opacity-40" />

        <div className="max-w-[1420px] mx-auto px-4 sm:px-8 md:px-10 lg:px-12 relative z-10">
          {/* Section Title */}
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <span className="text-[#9d174d] font-black tracking-[0.3em] uppercase text-sm">{t("home.departments.label")}</span>
            <h3 className="text-3xl md:text-4xl font-black text-gray-900 mt-4 mb-3">
              {t("home.departments.title")} <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#9d174d] to-[#f43f5e]">{t("home.departments.titleHighlight")}</span>
            </h3>
            <div className="h-1.5 w-24 bg-gradient-to-r from-[#9d174d] to-[#f43f5e] mx-auto rounded-full" />
          </div>

          <div className="grid lg:grid-cols-[420px,1fr] gap-6 sm:gap-8 lg:gap-12 items-start">
            {/* Left Tabs - Premium Cards */}
            <div className="space-y-3 sm:space-y-4">
              {[
                { name: t("home.departments.surgery"), sub: t("home.departments.surgerySub"), icon: "🏥", color: "from-blue-500 to-cyan-500" },
                { name: t("home.departments.internal"), sub: t("home.departments.internalSub"), icon: "🩺", color: "from-purple-500 to-pink-500" },
                { name: t("home.departments.gynaecological"), sub: t("home.departments.gynaecologicalSub"), icon: "💗", color: "from-rose-500 to-pink-500" }
              ].map((dept, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveDept(idx)}
                  className={`group w-full text-left p-6 rounded-3xl border-2 transition-all duration-500 relative overflow-hidden ${activeDept === idx
                    ? "bg-gradient-to-br from-[#9d174d] to-[#be185d] border-[#9d174d] shadow-2xl shadow-red-500/30 scale-[1.02]"
                    : "bg-white/80 backdrop-blur-sm border-gray-200 hover:border-[#9d174d]/40 hover:shadow-xl hover:scale-[1.01]"
                    }`}
                >
                  {/* Icon */}
                  <div className={`absolute top-4 right-4 text-4xl transition-all duration-500 ${activeDept === idx ? "opacity-20 scale-150" : "opacity-10 group-hover:opacity-30 group-hover:scale-125"
                    }`}>
                    {dept.icon}
                  </div>

                  <div className="flex items-center gap-4 relative z-10">
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-2xl transition-all duration-500 ${activeDept === idx
                      ? "bg-white/20 backdrop-blur-sm"
                      : `bg-gradient-to-br ${dept.color} shadow-lg`
                      }`}>
                      {dept.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className={`font-black text-base leading-tight transition-colors ${activeDept === idx ? "text-white" : "text-gray-900"
                        }`}>
                        {dept.name}
                      </h3>
                      <p className={`text-xs font-bold mt-1 transition-colors ${activeDept === idx ? "text-red-100" : "text-gray-500"
                        }`}>
                        {dept.sub}
                      </p>
                    </div>

                    {/* Arrow indicator */}
                    <div className={`transition-all duration-500 ${activeDept === idx ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
                      }`}>
                      <ChevronRightIcon className="text-white" />
                    </div>
                  </div>
                </button>
              ))}
            </div>

            {/* Right Content - Premium Card */}
            <div className="bg-white/60 backdrop-blur-xl rounded-2xl sm:rounded-[3rem] p-6 sm:p-8 md:p-14 border border-gray-200/50 shadow-2xl min-h-[320px] sm:min-h-[420px] flex flex-col">
              <div key={activeDept} className="animate-in fade-in slide-in-from-right-10 duration-700 flex-1 flex flex-col">
                {/* Title with icon */}
                <div className="flex items-start gap-3 sm:gap-4 mb-4 sm:mb-6">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br from-[#9d174d] to-[#f43f5e] flex items-center justify-center text-2xl sm:text-3xl shadow-lg shrink-0">
                    {activeDept === 0 && "🏥"}
                    {activeDept === 1 && "🩺"}
                    {activeDept === 2 && "💗"}
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-gray-900 leading-tight">
                      {activeDept === 0 && t("home.departments.surgicalCare")}
                      {activeDept === 1 && t("home.departments.expertMedical")}
                      {activeDept === 2 && t("home.departments.compassionateWomen")}
                    </h3>
                    <div className="h-1 w-16 bg-gradient-to-r from-[#9d174d] to-[#f43f5e] rounded-full mt-3" />
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-8 flex-1">
                  {activeDept === 0 && t("home.departments.deptPara1")}
                  {activeDept === 1 && t("home.departments.deptPara2")}
                  {activeDept === 2 && t("home.departments.deptPara3")}
                </p>

                {/* Features */}
                <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8">
                  {activeDept === 0 && [
                    { icon: "🔬", text: t("home.departments.advancedTech") },
                    { icon: "⚡", text: t("home.departments.fastRecovery") },
                    { icon: "🛡️", text: t("home.departments.safetyFirst") },
                    { icon: "👨‍⚕️", text: t("home.departments.expertSurgeons") }
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 p-3 bg-blue-50/50 rounded-2xl border border-blue-100/50">
                      <span className="text-xl">{item.icon}</span>
                      <span className="text-xs font-bold text-gray-700">{item.text}</span>
                    </div>
                  ))}

                  {activeDept === 1 && [
                    { icon: "🩺", text: t("home.departments.preventiveCare") },
                    { icon: "💊", text: t("home.departments.chronicManagement") },
                    { icon: "🔍", text: t("home.departments.accurateDiagnosis") },
                    { icon: "❤️", text: t("home.departments.holisticApproach") }
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 p-3 bg-purple-50/50 rounded-2xl border border-purple-100/50">
                      <span className="text-xl">{item.icon}</span>
                      <span className="text-xs font-bold text-gray-700">{item.text}</span>
                    </div>
                  ))}

                  {activeDept === 2 && [
                    { icon: "👶", text: t("home.departments.maternityCare") },
                    { icon: "🏥", text: t("home.departments.minimallyInvasive") },
                    { icon: "💗", text: t("home.departments.womenWellness") },
                    { icon: "🌟", text: t("home.departments.support24") }
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 p-3 bg-rose-50/50 rounded-2xl border border-rose-100/50">
                      <span className="text-xl">{item.icon}</span>
                      <span className="text-xs font-bold text-gray-700">{item.text}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <Link href="/contact" className="group px-10 py-5 bg-gradient-to-r from-[#9d174d] to-[#be185d] hover:from-[#831843] hover:to-[#9d174d] text-white font-black text-lg rounded-2xl transition-all duration-500 hover:-translate-y-1 shadow-xl shadow-red-500/30 hover:shadow-2xl hover:shadow-red-500/40 flex items-center justify-center gap-3 inline-flex">
                  {t("home.departments.bookAppointmentNow")}
                  <ArrowRightIcon />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS SECTION - Premium Redesign */}
      <section id="testimonials" className="py-10 sm:py-14 md:py-16 bg-[#0f172a] relative overflow-hidden text-white">
        {/* Abstract Background Shapes */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-20">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#9d174d] rounded-full blur-[120px]"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-600 rounded-full blur-[120px]"></div>
        </div>

        <div className="max-w-[1420px] mx-auto px-4 sm:px-8 md:px-10 lg:px-12 relative z-10 text-center">
          {/* Section Title */}
          <div className="mb-8 sm:mb-12 md:mb-16">
            <span className="text-red-400 font-black tracking-[0.3em] uppercase text-sm">{t("home.testimonials.label")}</span>
            <h3 className="text-3xl md:text-4xl font-black text-white mt-4">
              {t("home.testimonials.title")} <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#9d174d] to-[#f43f5e]">{t("home.testimonials.titleHighlight")}</span>
            </h3>
            <div className="h-1.5 w-24 bg-gradient-to-r from-[#9d174d] to-[#f43f5e] mx-auto rounded-full mt-6" />
          </div>

          <div className="max-w-4xl mx-auto">
            <div key={activeTestimonial} className="relative bg-white/10 backdrop-blur-xl border border-white/10 rounded-2xl sm:rounded-[3rem] p-6 sm:p-8 md:p-12 shadow-2xl animate-in fade-in slide-in-from-bottom-8 duration-700">
              {/* Large Quote Icon */}
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gradient-to-br from-[#9d174d] to-[#f43f5e] w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg shadow-red-500/30 rotate-12">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="currentColor" className="text-white transform -rotate-12"><path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11C14.017 11.5523 13.5693 12 13.017 12H12.017V5H22.017V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM5.0166 21L5.0166 18C5.0166 16.8954 5.91203 16 7.0166 16H10.0166C10.5689 16 11.0166 15.5523 11.0166 15V9C11.0166 8.44772 10.5689 8 10.0166 8H6.0166C5.46432 8 5.0166 8.44772 5.0166 9V11C5.0166 11.5523 4.56889 12 4.0166 12H3.0166V5H13.0166V15C13.0166 18.3137 10.3303 21 7.0166 21H5.0166Z" /></svg>
              </div>

              {/* Content Grid */}
              <div className="mt-8 flex flex-col items-center">
                {/* Star Rating */}
                <div className="flex gap-1 mb-6 text-yellow-400">
                  {[1, 2, 3, 4, 5].map((_, i) => (
                    <StarIcon key={i} />
                  ))}
                </div>

                {/* Text */}
                <p className="text-base sm:text-lg md:text-2xl leading-relaxed font-medium text-gray-200 italic mb-6 sm:mb-8">
                  "{[t("home.testimonials.testimonial1"), t("home.testimonials.testimonial2"), t("home.testimonials.testimonial3")][activeTestimonial]}"
                </p>

                <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent mb-8" />

                {/* Profile Info */}
                <div className="flex items-center gap-4">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-[#9d174d] shadow-lg shadow-red-500/20">
                    <Image
                      src={[
                        "/raj/test1.jpg",
                        "/raj/test2.jpg",
                        "/raj/test3.jpg"
                      ][activeTestimonial]}
                      alt="Patient"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="text-left">
                    <h4 className="text-xl font-black text-white">
                      {[t("home.testimonials.name1"), t("home.testimonials.name2"), t("home.testimonials.name3")][activeTestimonial]}
                    </h4>
                    <p className="text-red-400 text-xs font-bold uppercase tracking-widest">
                      {[
                        `${t("home.testimonials.patient")}, 46 ${t("home.testimonials.yrs")}`,
                        `${t("home.testimonials.patient")}, 35 ${t("home.testimonials.yrs")}`,
                        `${t("home.testimonials.patient")}, 52 ${t("home.testimonials.yrs")}`
                      ][activeTestimonial]}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Pagination */}
            <div className="flex justify-center gap-4 mt-12">
              {[0, 1, 2].map((idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveTestimonial(idx)}
                  className={`transition-all duration-300 rounded-full ${activeTestimonial === idx
                    ? "w-12 h-3 bg-gradient-to-r from-[#9d174d] to-[#f43f5e] shadow-lg shadow-red-500/50"
                    : "w-3 h-3 bg-gray-700 hover:bg-gray-600"
                    }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SERVING HAPUR & NEARBY AREAS */}
      <section className="py-8 sm:py-12 md:py-14 bg-white">
        <div className="max-w-[1420px] mx-auto px-4 sm:px-8 md:px-10 lg:px-12">
          <div className="flex items-start gap-3 mb-4">
            <span className="w-10 h-10 rounded-lg bg-teal-100 flex items-center justify-center text-teal-600 shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M2 12h20" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>
            </span>
            <div>
              <h3 className="text-xl md:text-2xl font-black text-gray-900">{t("home.servingAreas.title")}</h3>
              <p className="text-gray-600 text-sm md:text-base mt-2">{t("home.servingAreas.intro")}</p>
            </div>
          </div>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 mb-4 ml-0 md:ml-[52px]">
            {["area1", "area2", "area3", "area4", "area5"].map((key, i) => (
              <li key={i} className="flex items-center gap-2 text-gray-700">
                <span className="w-1.5 h-1.5 rounded-full bg-[#9d174d] shrink-0" />
                {t(`home.servingAreas.${key}` as const)}
              </li>
            ))}
          </ul>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed ml-0 md:ml-[52px]">{t("home.servingAreas.end")}</p>
        </div>
      </section>

      {/* OUR COMMITMENT TO SAFE & ETHICAL HEALTHCARE */}
      <section className="py-8 sm:py-12 md:py-14 bg-gray-50">
        <div className="max-w-[1420px] mx-auto px-4 sm:px-8 md:px-10 lg:px-12">
          <div className="flex items-start gap-3 mb-4">
            <span className="w-10 h-10 rounded-lg bg-gray-200 flex items-center justify-center text-gray-600 shrink-0">
              <ShieldIcon />
            </span>
            <div>
              <h3 className="text-xl md:text-2xl font-black text-gray-900">{t("home.commitment.title")}</h3>
              <p className="text-gray-600 text-sm md:text-base mt-2">{t("home.commitment.intro")}</p>
            </div>
          </div>
          <ul className="space-y-2 mb-4 ml-0 md:ml-[52px]">
            {["c1", "c2", "c3", "c4", "c5"].map((key, i) => (
              <li key={i} className="flex items-center gap-2 text-gray-700">
                <span className="w-1.5 h-1.5 rounded-full bg-[#9d174d] shrink-0" />
                {t(`home.commitment.${key}` as const)}
              </li>
            ))}
          </ul>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed ml-0 md:ml-[52px] font-medium">{t("home.commitment.end")}</p>
        </div>
      </section>

      {/* FACILITIES (Secondary) */}
      <section className="py-10 sm:py-14 md:py-16 bg-gray-50">
        <div className="max-w-[1420px] mx-auto px-4 sm:px-8 md:px-10 lg:px-12 text-center mb-12 sm:mb-16 md:mb-24">
          <span className="text-[#9d174d] font-black tracking-[0.3em] uppercase text-sm">{t("home.facilities.label")}</span>
          <h3 className="text-3xl md:text-4xl font-black text-gray-900 mt-4">{t("home.facilities.title")} <span className="text-[#9d174d]">{t("home.facilities.titleHighlight")}</span></h3>
        </div>

        <div className="max-w-[1420px] mx-auto px-4 sm:px-8 md:px-10 lg:px-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          {[
            { title: t("home.facilities.modularOT"), img: "/raj/ot.jpg", desc: t("home.facilities.modularOTDesc") },
            { title: t("home.facilities.advancedICU"), img: "/raj/raj-nursing-home-icu.jpg", desc: t("home.facilities.advancedICUDesc") },
            { title: t("home.facilities.ultrasound"), img: "/raj/ultrasound.jpg", desc: t("home.facilities.ultrasoundDesc") },
            { title: t("home.facilities.premiumRooms"), img: "/raj/cabin3.jpg", desc: t("home.facilities.premiumRoomsDesc") },
          ].map((f, i) => (
            <div key={i} className="group bg-white rounded-[2rem] p-4 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <div className="relative h-64 rounded-2xl overflow-hidden mb-6">
                <Image src={f.img} alt={f.title} fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
              </div>
              <div className="px-2 pb-4">
                <h4 className="text-xl font-black text-gray-900 mb-2 group-hover:text-[#9d174d] transition-colors">{f.title}</h4>
                <p className="text-gray-500 text-sm font-bold leading-relaxed">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* MEDIA GALLERY - 2x3 grid (screenshot 3) */}
      <section className="py-10 sm:py-14 md:py-16 bg-gray-50">
        <div className="max-w-[1420px] mx-auto px-4 sm:px-8 md:px-10 lg:px-12 text-center mb-8 sm:mb-12">
          <h3 className="text-2xl md:text-3xl font-black text-gray-900 tracking-tight">{t("home.mediaGallery.label")}</h3>
          <div className="h-1 w-16 bg-[#9d174d] mx-auto rounded-full mt-3" />
        </div>
        <div className="max-w-[1420px] mx-auto px-4 sm:px-8 md:px-10 lg:px-12 grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-6">
          {[
            "/raj/raj-nursing-home-icu.jpg",
            "/raj/ot.jpg",
            "/raj/ultrasound.jpg",
            "/medical.jpg",
            "/raj/cabin3.jpg",
            "/raj/gyne-2.jpg",
          ].map((src, i) => (
            <div key={i} className="relative aspect-[4/3] rounded-xl md:rounded-2xl overflow-hidden border border-gray-200 shadow-md hover:shadow-xl transition-all">
              <Image src={src} alt={`Gallery ${i + 1}`} fill className="object-cover hover:scale-105 transition-transform duration-500" sizes="(max-width: 768px) 50vw, 33vw" />
            </div>
          ))}
        </div>
      </section>

      {/* NEWS AND HEALTH TIPS - 3 blog cards (screenshot 3) */}
      <section className="py-10 sm:py-14 md:py-16 bg-white">
        <div className="max-w-[1420px] mx-auto px-4 sm:px-8 md:px-10 lg:px-12 text-center mb-8 sm:mb-12">
          <h3 className="text-2xl md:text-3xl font-black text-gray-900 tracking-tight">{t("home.newsHealthTips.label")}</h3>
          <div className="h-1 w-16 bg-[#9d174d] mx-auto rounded-full mt-3" />
        </div>
        <div className="max-w-[1420px] mx-auto px-4 sm:px-8 md:px-10 lg:px-12 grid sm:grid-cols-3 gap-6 md:gap-8">
          {[
            { title: t("blog.post1Title"), img: "/raj/ultrasound.jpg", date: "19-10-2023", slug: "diabetes-thyroid-clinic-hapur" },
            { title: t("blog.post2Title"), img: "/raj/dr-Srishti.jpg", date: "19-10-2023", slug: "best-gynecologist-hapur" },
            { title: t("blog.post3Title"), img: "/raj/gyne-2.jpg", date: "19-10-2023", slug: "pregnancy-ultrasound-guide-hindi" },
          ].map((post, i) => (
            <Link key={i} href={`/blog/${post.slug}`} className="group block bg-gray-50 rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl hover:border-[#9d174d]/30 transition-all">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image src={post.img} alt={post.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="(max-width: 768px) 100vw, 33vw" />
              </div>
              <div className="p-4 md:p-5">
                <h3 className="font-black text-gray-900 text-sm md:text-base mb-2 line-clamp-2 group-hover:text-[#9d174d] transition-colors">{post.title}</h3>
                <p className="text-gray-500 text-xs font-bold">Date: {post.date}</p>
              </div>
            </Link>
          ))}
        </div>
        <div className="max-w-[1420px] mx-auto px-4 sm:px-8 md:px-10 lg:px-12 text-center mt-8">
          <Link href="/blog" className="inline-flex items-center gap-2 px-6 py-3 bg-[#9d174d] text-white font-bold rounded-xl hover:bg-[#831843] transition-all">
            {t("blog.readMore")} <ArrowRightIcon />
          </Link>
        </div>
      </section>

      {/* FAQ - Accordion */}
      <section className="py-10 sm:py-14 md:py-16 bg-gray-50">
        <div className="max-w-[1420px] mx-auto px-4 sm:px-8 md:px-10 lg:px-12 text-center mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 mb-2">
            <span className="w-10 h-10 rounded-lg bg-[#9d174d]/10 flex items-center justify-center text-[#9d174d] shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" /><path d="M12 17h.01" /><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" /></svg>
            </span>
            <h3 className="text-2xl md:text-3xl font-black text-gray-900 tracking-tight">{t("home.faq.label")}</h3>
          </div>
          <div className="h-1 w-16 bg-[#9d174d] mx-auto rounded-full mt-3" />
        </div>
        <div className="max-w-[1420px] mx-auto px-4 sm:px-8 md:px-10 lg:px-12 space-y-2">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((n) => (
            <div key={n} className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">
              <button
                onClick={() => setOpenFaq(openFaq === n ? null : n)}
                className={`w-full flex items-center justify-between gap-4 p-4 md:p-5 text-left font-bold text-gray-900 transition-colors ${openFaq === n ? "bg-[#9d174d] text-white" : "hover:bg-gray-50"}`}
              >
                <span className="text-sm md:text-base">{t(`home.faq.q${n}` as const)}</span>
                <span className={`shrink-0 transition-transform ${openFaq === n ? "rotate-180" : ""}`}><ChevronDownIcon className={openFaq === n ? "text-white" : "text-gray-600"} /></span>
              </button>
              {openFaq === n && (
                <div className="px-4 md:px-5 pb-4 md:pb-5 pt-0 text-gray-600 text-sm md:text-base leading-snug border-t border-gray-100">
                  {t(`home.faq.a${n}` as const)}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* BOOK APPOINTMENT - 24/7 SUPPORT CTA */}
      <section className="py-10 sm:py-14 md:py-16 bg-[#9d174d]">
        <div className="max-w-[1420px] mx-auto px-4 sm:px-8 md:px-10 lg:px-12">
          <div className="flex items-start gap-3 mb-6">
            <span className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center text-white shrink-0 [&_svg]:text-white">
              <PhoneIcon />
            </span>
            <div>
              <h3 className="text-xl md:text-2xl font-black text-white">{t("home.bookCta.title")}</h3>
            </div>
          </div>
          <p className="text-white/95 text-sm md:text-base leading-relaxed mb-4 max-w-[800px]">
            {t("home.bookCta.p1")}
          </p>
          <p className="text-white font-bold mb-4">{t("home.bookCta.p2")}</p>
          <p className="text-white/95 text-sm md:text-base mb-8">{t("home.bookCta.p3")}</p>
          <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#9d174d] font-black rounded-xl hover:bg-gray-100 transition-all shadow-lg">
            {t("footer.bookAppointment")} <ArrowRightIcon />
          </Link>
        </div>
      </section>

    </div >
  );
}
