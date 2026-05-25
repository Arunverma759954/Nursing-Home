"use client";

import Image from "next/image";
import Link from "next/link";
import { Stethoscope, Activity, ShieldCheck, Heart, UserCheck, Clock, ArrowRight, CheckCircle2, FlaskConical, Thermometer, Brain, Sparkles, Phone, Shield, Search, BookOpen, HeartPulse, Microscope } from "lucide-react";
import { useLanguage } from "@/app/context/LanguageContext";

export default function InternalMedicinePage() {
  const { t } = useLanguage();

  return (
    <div className="bg-white min-h-screen animate-page-enter mt-32">
      {/* Hero Section - Optimized and Smaller */}
      <div className="relative min-h-[280px] md:min-h-[380px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/raj/banner3.webp"
            alt="Internal Medicine Department"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#9d174d] via-[#9d174d]/92 to-[#9d174d]/50 z-10" />
        </div>

        <div className="relative z-20 w-full max-w-[1420px] mx-auto px-6 sm:px-8 md:px-10 lg:px-12 py-10 md:py-16">
          <div className="max-w-4xl space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-white text-xs md:text-sm font-bold tracking-wide uppercase">
              <Sparkles className="w-3 h-3 md:w-4 md:h-4 text-rose-200 fill-rose-200 shrink-0" />
              <span>{t("internalMedicine.badge")}</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight tracking-tight">
              {t("internalMedicine.heroTitle")}<br />
              <span className="text-rose-200">{t("internalMedicine.heroTitleHighlight")}</span>
            </h1>
            <div className="flex flex-wrap items-center gap-4 md:gap-6 pt-2">
              <Link
                href="#appointment"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-white text-[#9d174d] rounded-xl font-bold text-sm uppercase tracking-widest shadow-xl hover:bg-rose-50 transition-all hover:-translate-y-1"
              >
                {t("internalMedicine.bookCta")}
                <ArrowRight className="w-5 h-5 shrink-0" />
              </Link>
              <nav className="flex items-center text-xs md:text-sm text-white/80 font-semibold bg-white/5 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/10">
                <Link href="/" className="hover:text-white transition-colors">{t("internalMedicine.home")}</Link>
                <span className="mx-2 opacity-50">/</span>
                <span className="text-white">{t("internalMedicine.breadcrumbCurrent")}</span>
              </nav>
            </div>
          </div>
        </div>

        {/* Dr. Image in Hero - Hidden on small screens to keep height small */}
        <div className="absolute right-0 bottom-0 h-full w-[35%] z-20 hidden xl:block">
          <Image
            src="/raj/dr.Vipin.jpg"
            alt="Dr. Vipin Kumar Sharma"
            fill
            className="object-contain object-bottom opacity-90 transition-opacity hover:opacity-100"
          />
        </div>
      </div>

      {/* Introduction Content Section - Moved from Banner */}
      <div className="bg-gray-50 border-b border-gray-100">
        <div className="max-w-[1420px] mx-auto px-6 sm:px-8 md:px-10 lg:px-12 py-12 md:py-16">
          <div className="grid lg:grid-cols-[1fr,0.8fr] gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4 text-gray-900">
                <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-[#9d174d]">{t("internalMedicine.badge")}</h2>
                <p className="text-base md:text-lg text-gray-700 leading-relaxed font-semibold italic">
                  {t("internalMedicine.heroP1")}
                </p>
                <p className="text-base md:text-lg text-gray-700 leading-relaxed font-semibold">
                  {t("internalMedicine.heroP2")}
                </p>
              </div>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                {t("internalMedicine.heroDesc")}
              </p>
              <div className="bg-rose-50 border-l-4 border-rose-500 p-6 rounded-r-2xl">
                <p className="text-[#9d174d] font-bold italic text-base md:text-lg leading-relaxed">
                  {t("internalMedicine.heroP3")}
                </p>
              </div>
            </div>
            <div className="relative h-[300px] md:h-[400px] rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white ring-1 ring-gray-200">
               <Image
                  src="/internal1.jpg"
                  alt="Internal Medicine Care"
                  fill
                  className="object-cover"
               />
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Sections */}
      <div className="max-w-[1420px] mx-auto px-6 sm:px-8 md:px-10 lg:px-12 py-16 md:py-24 space-y-24 md:space-y-32">

        {/* Why Choose Us & Services Grid */}
        <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-start">
          <div className="space-y-10">
            <div className="space-y-6">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 tracking-tight">{t("internalMedicine.whyTitle")}</h2>
              <div className="prose prose-lg text-gray-600 font-medium space-y-6">
                <p className="font-semibold text-gray-800">{t("internalMedicine.whyDesc")}</p>
                <p className="italic text-[#9d174d] font-bold">{t("internalMedicine.whyInDepth")}</p>
                <p>{t("internalMedicine.whyCommitment")}</p>
              </div>
            </div>
          </div>
          <div className="space-y-8">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 tracking-tight">{t("internalMedicine.servicesTitleHighlight")}</h3>
            <div className="grid gap-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex gap-4 p-6 bg-white border border-gray-100 rounded-3xl shadow-sm hover:shadow-md transition-shadow group">
                  <div className="w-10 h-10 bg-rose-50 text-rose-600 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-rose-600 group-hover:text-white transition-colors">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg mb-1">{t(`internalMedicine.svc${i}Title`)}</h4>
                    <p className="text-gray-500 font-medium text-sm leading-relaxed">{t(`internalMedicine.svc${i}Desc`)}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Diabetes Section - Fixed Image */}
        <div className="bg-gradient-to-br from-emerald-50 via-teal-50 to-white p-8 md:p-16 rounded-[3.5rem] border border-emerald-100 shadow-sm relative overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-emerald-900 tracking-tight">
                  {t("internalMedicine.diabetesTitle")}
                </h2>
                <p className="text-gray-700 text-lg font-semibold leading-relaxed italic">
                  {t("internalMedicine.diabetesDesc")}
                </p>
              </div>
              <div className="space-y-5">
                <h4 className="text-sm font-black text-emerald-800 uppercase tracking-[0.2em]">
                  {t("internalMedicine.diabetesOfferingTitle")}
                </h4>
                <div className="grid sm:grid-cols-2 lg:grid-cols-1 gap-3">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div key={i} className="flex items-center gap-3 bg-white/70 backdrop-blur-sm p-4 rounded-2xl border border-emerald-100 font-bold text-emerald-900 text-sm">
                      <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                      {t(`internalMedicine.diabetesItem${i}`)}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="relative h-[350px] md:h-[450px] rounded-[2.5rem] overflow-hidden shadow-xl border-8 border-white">
              <Image src="/raj/diabetes-care.png" alt="Diabetes Treatment Hapur" fill className="object-cover" />
            </div>
          </div>
        </div>

        {/* Thyroid Section - Fixed Image */}
        <div className="grid lg:grid-cols-2 gap-12 md:gap-20 items-center">
          <div className="relative h-[350px] md:h-[500px] rounded-[3rem] overflow-hidden shadow-xl border-8 border-white order-2 lg:order-1">
             <Image src="/raj/thyroid-check.png" alt="Thyroid Specialist Hapur" fill className="object-cover" />
          </div>
          <div className="space-y-8 order-1 lg:order-2">
            <div className="space-y-4">
              <span className="inline-block px-4 py-1 rounded bg-rose-50 text-[#9d174d] font-bold uppercase tracking-widest text-xs">
                {t("internalMedicine.thyroidTitle")}
              </span>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 tracking-tight leading-tight">
                {t("internalMedicine.thyroidDesc")}
              </h2>
              <p className="text-gray-600 text-lg font-medium leading-relaxed">
                {t("internalMedicine.thyroidDetail")}
              </p>
            </div>
            <div className="p-8 bg-gray-50 rounded-[2.5rem] border border-gray-100">
               <p className="text-gray-600 font-bold text-base md:text-lg leading-relaxed italic">
                 {t("internalMedicine.thyroidContact")}
               </p>
            </div>
          </div>
        </div>

        {/* Benefits & Promising Healthcare Section */}
        <div className="bg-[#9d174d] p-10 md:p-16 rounded-[4rem] text-white shadow-2xl relative overflow-hidden">
           <div className="absolute top-0 right-0 p-12 opacity-5 translate-x-1/4 -translate-y-1/4">
                <HeartPulse className="w-64 h-64" />
           </div>
           <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight">{t("internalMedicine.benefitsTitle")}</h2>
                <div className="h-1 w-20 bg-rose-300 rounded-full" />
                <p className="text-rose-100 font-semibold text-lg md:text-xl">
                   {t("internalMedicine.benefitsIntro")}
                </p>
              </div>
              <div className="grid sm:grid-cols-2 gap-6">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="flex items-center gap-4 bg-white/10 backdrop-blur-md p-5 rounded-2xl border border-white/10 group hover:bg-white/20 transition-all">
                    <div className="w-10 h-10 bg-rose-100 text-[#9d174d] rounded-xl flex items-center justify-center font-black group-hover:scale-110 transition-transform">
                      {i}
                    </div>
                    <span className="font-bold text-base md:text-lg">{t(`internalMedicine.benefit${i}`)}</span>
                  </div>
                ))}
              </div>
           </div>
        </div>

        {/* Final CTA / Appointment - Reduced Padding */}
        <div id="appointment" className="relative rounded-[3.5rem] overflow-hidden bg-gradient-to-br from-[#0f172a] to-[#334155] p-10 md:p-16 text-white text-center sm:text-left space-y-10 group shadow-2xl">
           <div className="grid lg:grid-cols-[1.2fr,0.8fr] gap-12 md:gap-20 items-center relative z-10">
              <div className="space-y-8">
                <div className="space-y-4">
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight">
                    {t("internalMedicine.appointmentTitle")}
                  </h2>
                  <p className="text-lg md:text-xl text-blue-200 font-semibold leading-relaxed">
                    {t("internalMedicine.appointmentDesc")}
                  </p>
                </div>
                <div className="space-y-4 pt-4">
                   <p className="text-xl md:text-2xl font-black text-rose-400 italic">
                     {t("internalMedicine.appointmentCta")}
                   </p>
                   <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center sm:justify-start">
                    <Link href="tel:+919958314740" className="flex items-center justify-center gap-4 bg-white text-gray-900 px-8 py-5 rounded-2xl font-bold text-xl shadow-lg hover:scale-105 active:scale-95 transition-all">
                      <Phone className="w-8 h-8 fill-gray-900 text-gray-900" /> +91-9958314740
                    </Link>
                    <Link href="/contact" className="flex items-center justify-center gap-4 bg-white/10 backdrop-blur-md border-2 border-white/20 text-white px-8 py-5 rounded-2xl font-bold text-xl hover:bg-white/20 transition-all uppercase tracking-widest text-center text-sm">
                      {t("internalMedicine.bookVisit")}
                    </Link>
                   </div>
                </div>
              </div>
              <div className="relative h-[350px] md:h-[450px] rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white/30 hidden lg:block">
                  <Image src="/raj/dr.Vipin.jpg" alt="Dr. Vipin Specialist" fill className="object-cover object-top" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/80 to-transparent" />
              </div>
           </div>
        </div>

      </div>
    </div>
  );
}
