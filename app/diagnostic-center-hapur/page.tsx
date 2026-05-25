"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Microscope, Activity, ShieldCheck, Heart, UserCheck, Phone, CheckCircle2, FlaskConical, Scan, Syringe, Sparkles } from "lucide-react";
import { useLanguage } from "@/app/context/LanguageContext";

export default function DiagnosticCenterHapur() {
  const { t } = useLanguage();

  return (
    <div className="bg-white min-h-screen animate-page-enter pt-24">
      {/* Hero Section */}
      <div className="relative min-h-[300px] md:min-h-[400px] flex items-center">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <Image
            src="/raj/banner1.webp"
            alt="Advanced Diagnostic Center Hapur"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#9d174d] via-[#9d174d]/90 to-[#9d174d]/40 z-10" />
        </div>

        <div className="relative z-20 w-full max-w-[1420px] mx-auto px-6 sm:px-8 md:px-10 lg:px-12 py-14 md:py-20">
          <div className="max-w-4xl space-y-6 md:space-y-8">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass text-white text-sm font-bold tracking-wide">
              <Sparkles className="w-4 h-4 text-rose-200 fill-rose-200 shrink-0" />
              <span>{t("diagnosticCenter.badge")}</span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.15] tracking-tight">
              {t("diagnosticCenter.heroTitle")}<br /><span className="text-rose-200">{t("diagnosticCenter.heroTitleHighlight")}</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-100 leading-relaxed max-w-2xl font-medium">
              {t("diagnosticCenter.heroDesc")}
            </p>
            <div className="flex flex-wrap items-center gap-4 md:gap-6 pt-2 pb-2">
              <Link
                href="#appointment"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#9d174d] rounded-2xl font-bold text-sm uppercase tracking-widest shadow-xl hover:bg-rose-50 transition-all border-2 border-transparent"
              >
                {t("diagnosticCenter.bookCta")}
                <ArrowRight className="w-5 h-5 shrink-0" />
              </Link>
              <nav className="flex items-center text-sm text-white/80 font-semibold">
                <Link href="/" className="hover:text-white transition-colors">{t("diagnosticCenter.home")}</Link>
                <span className="mx-2">/</span>
                <span className="text-white">{t("diagnosticCenter.breadcrumbCurrent")}</span>
              </nav>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-[1420px] mx-auto px-6 sm:px-8 md:px-10 lg:px-12 py-16 md:py-24 space-y-20 md:space-y-28">

        {/* Quick Highlights Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { icon: Microscope, labelKey: "diagnosticCenter.stat1", color: "text-[#9d174d] bg-rose-50" },
            { icon: Scan, labelKey: "diagnosticCenter.stat2", color: "text-[#9d174d] bg-rose-50" },
            { icon: FlaskConical, labelKey: "diagnosticCenter.stat3", color: "text-emerald-600 bg-emerald-50" },
            { icon: UserCheck, labelKey: "diagnosticCenter.stat4", color: "text-slate-600 bg-slate-50" },
          ].map((item, idx) => (
            <div key={idx} className="bg-white border border-gray-100 p-8 rounded-[3rem] shadow-xl hover:shadow-[0_30px_60px_rgba(157,23,77,0.12)] transition-all duration-500 group flex flex-col items-center text-center">
              <div className={`p-5 rounded-3xl ${item.color} group-hover:scale-110 transition-transform duration-500 mb-6 shadow-sm`}>
                <item.icon className="w-8 h-8" />
              </div>
              <span className="font-bold text-gray-900 text-lg md:text-xl tracking-tight leading-tight">{t(item.labelKey)}</span>
            </div>
          ))}
        </div>

        {/* Intro Section - The Importance of Diagnosis */}
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-10 animate-page-enter">
            <div className="space-y-6">
              <span className="text-[#9d174d] font-bold tracking-[0.3em] uppercase text-sm">{t("diagnosticCenter.badge")}</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-[1.1] tracking-tight">
                {t("diagnosticCenter.heroTitle")}<span className="text-[#9d174d]">{t("diagnosticCenter.heroTitleHighlight")}</span>
              </h2>
            </div>
            <div className="space-y-8 text-gray-600 text-xl leading-relaxed font-bold">
              <p>{t("diagnosticCenter.heroDesc")}</p>
              <div className="bg-rose-50 p-8 rounded-[3rem] border border-rose-100 space-y-4">
                <p className="text-gray-900">{t("diagnosticCenter.heroP1")}</p>
                <p className="text-[#9d174d]">{t("diagnosticCenter.heroP2")}</p>
              </div>
            </div>
          </div>
          <div className="relative group rounded-[3rem] overflow-hidden shadow-2xl h-[450px] md:h-[550px] border-[8px] md:border-[12px] border-white ring-1 ring-gray-100">
            <Image
              src="/Diagnostic3.jpg"
              alt="Advanced Diagnostic Lab"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Comprehensive Solutions Section */}
        <div className="bg-gray-900 rounded-[3rem] md:rounded-[4rem] p-8 md:p-16 lg:p-24 text-white relative overflow-hidden group">
           <div className="absolute top-0 right-0 w-96 h-96 bg-rose-600/10 rounded-full blur-3xl -mr-48 -mt-48 transition-transform group-hover:scale-150 duration-1000"></div>
           <div className="relative z-10 max-w-5xl space-y-10">
              <h3 className="text-2xl md:text-4xl lg:text-5xl font-bold text-rose-400">{t("diagnosticCenter.solutionsTitle")}</h3>
              <p className="text-lg md:text-xl lg:text-2xl text-gray-300 font-medium leading-relaxed">{t("diagnosticCenter.solutionsDesc")}</p>
              
              <div className="grid md:grid-cols-2 gap-8">
                 <div className="bg-white/5 backdrop-blur-sm p-8 rounded-[2.5rem] border border-white/10 space-y-6 hover:bg-white/10 transition-colors">
                    <FlaskConical className="w-10 h-10 md:w-12 md:h-12 text-rose-400" />
                    <h4 className="text-xl md:text-2xl font-bold">{t("diagnosticCenter.bloodTitle")}</h4>
                    <p className="text-gray-400 font-semibold leading-relaxed">{t("diagnosticCenter.bloodDesc")}</p>
                 </div>
                 <div className="bg-white/5 backdrop-blur-sm p-8 rounded-[2.5rem] border border-white/10 space-y-6 hover:bg-white/10 transition-colors">
                    <Microscope className="w-10 h-10 md:w-12 md:h-12 text-rose-400" />
                    <h4 className="text-xl md:text-2xl font-bold">{t("diagnosticCenter.pathologyTitle")}</h4>
                    <p className="text-gray-400 font-semibold leading-relaxed">{t("diagnosticCenter.pathologyDesc")}</p>
                 </div>
              </div>
           </div>
        </div>

        {/* Imaging & Near Me Section */}
        <div className="grid lg:grid-cols-2 gap-12 md:gap-20 items-center">
           <div className="space-y-12">
              <div className="space-y-6">
                 <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900">{t("diagnosticCenter.imagingTitle")}</h3>
                 <p className="text-lg md:text-xl text-gray-600 font-semibold border-l-4 border-[#9d174d] pl-6 italic">{t("diagnosticCenter.imagingDesc")}</p>
              </div>
              <div className="space-y-6">
                 <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#9d174d]">{t("diagnosticCenter.nearMeTitle")}</h3>
                 <p className="text-lg md:text-xl text-gray-600 font-semibold">{t("diagnosticCenter.nearMeDesc")}</p>
              </div>
           </div>
           <div className="relative h-[400px] md:h-[500px] rounded-[3rem] overflow-hidden shadow-xl border-[8px] md:border-[12px] border-white ring-1 ring-gray-100">
              <Image src="/raj/diagnostic1.webp" alt="Imaging Center" fill className="object-cover" />
           </div>
        </div>

        {/* Technology Section */}
        <div className="bg-rose-50 rounded-[3rem] md:rounded-[4rem] p-8 md:p-12 lg:p-20 border border-rose-100 flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
           <div className="lg:w-1/2 space-y-8">
              <h3 className="text-2xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">{t("diagnosticCenter.techTitle")}</h3>
              <p className="text-lg md:text-xl text-gray-600 font-semibold leading-relaxed">{t("diagnosticCenter.techDesc")}</p>
              <div className="flex gap-4 p-6 bg-white rounded-[2rem] border border-rose-100 shadow-sm items-center">
                 <Activity className="w-10 h-10 text-[#9d174d] shrink-0" />
                 <p className="text-[#9d174d] font-bold text-base italic">"Accuracy, efficiency, and care when it matters most."</p>
              </div>
           </div>
           <div className="lg:w-1/2 grid grid-cols-1 gap-4 md:gap-6 w-full">
              {[1, 2, 3, 4, 5].map((i) => (
                 <div key={i} className="bg-white p-5 md:p-6 rounded-[2rem] border border-rose-50 shadow-sm flex items-center gap-5 hover:-translate-y-1 transition-all duration-300">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-[#9d174d] text-white rounded-xl flex items-center justify-center font-bold text-lg md:text-xl shrink-0">
                       {i}
                    </div>
                    <p className="font-bold text-gray-800 text-base md:text-lg">{t(`diagnosticCenter.whyPoint${i}`)}</p>
                 </div>
              ))}
           </div>
        </div>

        {/* Healthcare Support / Conclusion */}
        <div className="text-center space-y-8 max-w-4xl mx-auto py-8">
           <h3 className="text-2xl md:text-4xl font-bold text-gray-900 leading-tight">{t("diagnosticCenter.supportTitle")}</h3>
           <p className="text-lg md:text-2xl text-gray-600 font-semibold leading-relaxed italic border-y border-gray-200 py-8">
              &quot;{t("diagnosticCenter.supportDesc")}&quot;
           </p>
        </div>

        {/* Final CTA / Contact */}
        <div id="appointment" className="bg-[#9d174d] rounded-[3rem] md:rounded-[4rem] p-8 md:p-16 lg:p-24 text-white text-center space-y-10 shadow-2xl relative overflow-hidden group">
           <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
           <div className="relative z-10 max-w-4xl mx-auto space-y-10">
              <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-rose-200">{t("diagnosticCenter.partnerTitle")}</h2>
              <p className="text-lg md:text-xl lg:text-2xl text-white/90 font-medium leading-relaxed">
                 {t("diagnosticCenter.partnerQuote")}
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center gap-6 pt-6">
                 <Link href="tel:+916397970802" className="flex items-center justify-center gap-4 bg-white text-[#9d174d] px-10 py-5 rounded-[2rem] font-bold text-xl shadow-xl hover:scale-105 transition-transform">
                    <Phone className="w-8 h-8" /> 
                    <div className="text-left">
                       <span className="block text-xs opacity-80 uppercase tracking-widest text-[#9d174d]">Home Collection Line</span>
                       <span>+91 63979 70802</span>
                    </div>
                 </Link>
                 <Link href="/contact" className="flex items-center justify-center gap-4 bg-white/10 backdrop-blur-xl border-2 border-white/20 text-white px-10 py-5 rounded-[2rem] font-bold text-xl hover:bg-white/20 transition-colors uppercase tracking-widest">
                    {t("diagnosticCenter.seeAllTests")}
                 </Link>
              </div>
           </div>
        </div>

      </div>
    </div>
  );
}
