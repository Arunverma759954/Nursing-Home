"use client";

import Image from "next/image";
import Link from "next/link";
import { Baby, HeartHandshake, Microscope, Dna, ArrowRight, UserCheck, Activity, Heart, CheckCircle2, Sparkles, Leaf } from "lucide-react";
import { useLanguage } from "@/app/context/LanguageContext";

export default function IvfTreatmentPage() {
  const { t } = useLanguage();

  return (
    <div className="bg-white min-h-screen animate-page-enter pt-32">
      {/* Hero Section */}
      <div className="relative min-h-[350px] md:min-h-[450px] flex items-center">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <Image
            src="/raj/banner1.webp"
            alt="IVF & Fertility Center in Hapur"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#9d174d] via-[#9d174d]/85 to-[#9d174d]/40 z-10" />
        </div>

        <div className="relative z-20 w-full max-w-[1420px] mx-auto px-5 sm:px-8 md:px-10 lg:px-12 py-16 md:py-24">
          <div className="max-w-4xl space-y-6 md:space-y-8">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass text-white text-sm font-bold tracking-wide">
              <Sparkles className="w-4 h-4 text-rose-300 fill-rose-300 shrink-0" />
              <span>{t("ivfTreatment.badge")}</span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight mb-4 text-center lg:text-left">
              {t("ivfTreatment.heroTitle")}<span className="text-rose-300">{t("ivfTreatment.heroTitleHighlight")}</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-100 leading-relaxed max-w-2xl font-medium text-center lg:text-left mx-auto lg:mx-0">
              {t("ivfTreatment.heroDesc")}
            </p>
            <p className="text-lg md:text-xl text-rose-100 leading-relaxed max-w-2xl font-medium text-center lg:text-left mx-auto lg:mx-0">
              {t("ivfTreatment.heroExtra")}
            </p>
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-4">
              <Link
                href="#appointment"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#9d174d] rounded-2xl font-bold text-sm uppercase tracking-widest shadow-xl hover:bg-rose-50 transition-all hover:-translate-y-0.5"
              >
                {t("ivfTreatment.bookCta")}
                <ArrowRight className="w-5 h-5 shrink-0" />
              </Link>
              <nav className="flex items-center text-sm text-white/80 font-bold bg-black/10 px-6 py-4 rounded-2xl backdrop-blur-sm">
                <Link href="/" className="hover:text-white transition-colors">{t("ivfTreatment.home")}</Link>
                <span className="mx-2 opacity-50">/</span>
                <span className="text-white">{t("ivfTreatment.breadcrumbCurrent")}</span>
              </nav>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-[1420px] mx-auto px-5 sm:px-8 md:px-10 lg:px-12 py-8 md:py-12">

        {/* Quick Highlights Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {[
            { icon: Baby, labelKey: "ivfTreatment.stat1", color: "text-rose-600 bg-rose-50" },
            { icon: Microscope, labelKey: "ivfTreatment.stat2", color: "text-blue-600 bg-blue-50" },
            { icon: HeartHandshake, labelKey: "ivfTreatment.stat3", color: "text-amber-600 bg-amber-50" },
            { icon: UserCheck, labelKey: "ivfTreatment.stat4", color: "text-emerald-600 bg-emerald-50" },
          ].map((item, idx) => (
            <div key={idx} className="bg-white border border-gray-100 p-6 rounded-[2.5rem] shadow-lg hover:shadow-xl transition-all duration-500 group flex flex-col items-center text-center">
              <div className={`p-4 rounded-2xl ${item.color} group-hover:scale-110 transition-transform duration-500 mb-4 shadow-sm`}>
                <item.icon className="w-7 h-7" />
              </div>
              <span className="font-bold text-gray-900 text-base md:text-lg tracking-tight leading-tight">{t(item.labelKey)}</span>
            </div>
          ))}
        </div>

        {/* Intro Section */}
        <div className="grid lg:grid-cols-2 gap-10 md:gap-20 items-center mb-16 md:mb-24">
          <div className="space-y-6 md:space-y-10">
            <div className="space-y-3 md:space-y-4">
              <span className="text-[#9d174d] font-bold tracking-[0.2em] uppercase text-xs bg-rose-50 px-4 py-1.5 rounded-full inline-block">{t("ivfTreatment.introLabel")}</span>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight tracking-tight">
                {t("ivfTreatment.introTitle")}<span className="text-[#9d174d]">{t("ivfTreatment.introTitleHighlight")}</span>
              </h2>
            </div>
            <div className="space-y-6 text-gray-600 text-lg leading-relaxed font-semibold italic border-l-4 border-rose-200 pl-6">
              <p>{t("ivfTreatment.introP1")}</p>
              <p>{t("ivfTreatment.introP2")}</p>
            </div>
          </div>
          <div className="relative group rounded-[3rem] overflow-hidden shadow-xl h-[450px] border-8 border-white ring-1 ring-gray-100">
            <Image
              src="/IVF.jpg"
              alt="IVF Laboratory Center"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-1000"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#9d174d]/20 to-transparent"></div>
          </div>
        </div>

        {/* Detailed Services */}
        <div className="mb-16 md:mb-24">
          <div className="text-center max-w-3xl mx-auto mb-8 md:mb-12 space-y-3 md:space-y-4">
            <span className="text-[#9d174d] font-bold tracking-[0.2em] uppercase text-xs bg-rose-50 px-4 py-1.5 rounded-full inline-block">{t("ivfTreatment.servicesTitle")}</span>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 tracking-tight">{t("ivfTreatment.servicesSubtitle")}</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: t("ivfTreatment.service1Title"), desc: t("ivfTreatment.service1Desc"), icon: Dna },
              { title: t("ivfTreatment.service2Title"), desc: t("ivfTreatment.service2Desc"), icon: Heart },
              { title: t("ivfTreatment.service3Title"), desc: t("ivfTreatment.service3Desc"), icon: Microscope },
              { title: t("ivfTreatment.service4Title"), desc: t("ivfTreatment.service4Desc"), icon: Activity }
            ].map((service, i) => (
              <div key={i} className="bg-gray-50 border-none p-8 rounded-[2.5rem] hover:bg-white hover:shadow-lg transition-all duration-500 group flex flex-col sm:flex-row items-start gap-6 border border-transparent hover:border-rose-100">
                <div className="w-14 h-14 bg-white shadow-sm text-[#9d174d] rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform text-rose-600">
                  <service.icon className="w-7 h-7" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3 tracking-tight group-hover:text-[#9d174d] transition-colors">{service.title}</h4>
                  <p className="text-gray-600 font-semibold leading-relaxed text-sm italic">{service.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose Us (Dark Section) */}
        <div className="mb-12 md:mb-20 bg-[#9d174d] p-6 md:p-16 rounded-[2.5rem] md:rounded-[4rem] text-white relative overflow-hidden group shadow-2xl">
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-white/5 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none"></div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
            <div className="space-y-8">
              <h3 className="text-2xl md:text-3xl font-bold leading-tight tracking-tight text-white mb-8">
                {t("ivfTreatment.whyChooseTitle")}
              </h3>
              <div className="space-y-3">
                {[
                  { t: t("ivfTreatment.why1Title"), d: t("ivfTreatment.why1Desc") },
                  { t: t("ivfTreatment.why2Title"), d: t("ivfTreatment.why2Desc") },
                  { t: t("ivfTreatment.why3Title"), d: t("ivfTreatment.why3Desc") },
                  { t: t("ivfTreatment.why4Title"), d: t("ivfTreatment.why4Desc") },
                  { t: t("ivfTreatment.why5Title"), d: t("ivfTreatment.why5Desc") }
                ].map((item, i) => (
                  <div key={i} className="flex gap-5 group/item p-4 rounded-2xl hover:bg-white/5 transition-all">
                    <div className="w-7 h-7 rounded-full bg-rose-400 mt-1 flex items-center justify-center shrink-0 shadow-lg">
                      <CheckCircle2 className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h5 className="font-bold text-lg text-white mb-1">{item.t}</h5>
                      <p className="text-rose-100/90 font-semibold leading-relaxed text-sm">{item.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative h-[600px] rounded-[3rem] overflow-hidden shadow-2xl hidden lg:block border-4 border-white/20">
              <Image src="/IVF2.jpg" alt="IVF Success" fill className="object-cover" />
            </div>
          </div>
        </div>

        {/* Roles and Supporting Sections */}
        <div className="grid md:grid-cols-2 gap-6 mb-12 md:mb-20">
          <div className="bg-blue-50/50 border border-blue-100 p-10 rounded-[3rem]">
             <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-6">
                <Leaf className="w-7 h-7" />
             </div>
             <h3 className="text-2xl font-bold text-gray-900 mb-4">{t("ivfTreatment.roleTitle")}</h3>
             <p className="text-gray-600 text-base leading-relaxed font-semibold italic">{t("ivfTreatment.roleP1")}</p>
          </div>
          <div className="bg-amber-50/50 border border-amber-100 p-10 rounded-[3rem]">
             <div className="w-14 h-14 bg-amber-100 text-amber-600 rounded-xl flex items-center justify-center mb-6">
                <HeartHandshake className="w-7 h-7" />
             </div>
             <h3 className="text-2xl font-bold text-gray-900 mb-4">{t("ivfTreatment.supportingTitle")}</h3>
             <p className="text-gray-600 text-base leading-relaxed font-semibold italic">{t("ivfTreatment.supportingP1")}</p>
          </div>
        </div>

        {/* Final CTA */}
        <div id="appointment" className="max-w-[1420px] mx-auto bg-slate-50 rounded-[3rem] border border-slate-100 overflow-hidden shadow-md">
          <div className="p-10 md:p-20 flex flex-col items-center text-center space-y-8">
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 tracking-tight leading-tight">
              {t("ivfTreatment.conclusionTitle")} <br/><span className="text-[#9d174d] font-black">{t("ivfTreatment.conclusionSubtitle")}</span>
            </h2>
            <div className="text-lg text-gray-600 font-semibold max-w-4xl space-y-4">
              <p>{t("ivfTreatment.conclusionP1")}</p>
              <p className="text-gray-900 font-bold border-l-4 border-[#9d174d] pl-6 italic text-left bg-white p-6 rounded-2xl shadow-sm">{t("ivfTreatment.conclusionP2")}</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 w-full justify-center pt-4">
              <Link href="tel:+916397970802" className="flex items-center justify-center gap-3 bg-[#9d174d] text-white px-10 py-5 rounded-2xl font-bold text-lg shadow-xl hover:bg-[#831843] transition-all transform hover:-translate-y-1 uppercase tracking-widest">
                <Activity className="w-6 h-6" /> Call IVF Center
              </Link>
              <Link href="/contact" className="flex items-center justify-center gap-3 bg-white border border-gray-200 text-gray-900 px-10 py-5 rounded-2xl font-bold text-lg transition-all hover:bg-gray-100 uppercase tracking-widest shadow-md">
                Book Visit
              </Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
