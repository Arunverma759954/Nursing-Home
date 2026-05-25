"use client";

import Image from "next/image";
import Link from "next/link";
import { Scissors, Activity, Zap, ShieldCheck, ArrowRight, Clock, UserCheck, Microscope, Sparkles, Phone, CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/app/context/LanguageContext";

export default function LaparoscopicSurgeryPage() {
  const { t } = useLanguage();

  return (
    <div className="bg-white min-h-screen animate-page-enter pt-24">
      {/* Hero Section - no clipping, proper padding */}
      <div className="relative min-h-[300px] md:min-h-[400px] flex items-center">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <Image
            src="/raj/banner1.webp"
            alt="Advanced Laparoscopic Center"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#9d174d] via-[#9d174d]/85 to-[#9d174d]/40 z-10" />
        </div>

        <div className="relative z-20 w-full max-w-[1420px] mx-auto px-6 sm:px-8 md:px-10 lg:px-12 py-14 md:py-20">
          <div className="max-w-4xl space-y-6 md:space-y-8">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass text-white text-sm font-bold tracking-wide">
              <Sparkles className="w-4 h-4 text-rose-200 fill-rose-200 shrink-0" />
              <span>{t("laparoscopicSurgery.badge")}</span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.15] tracking-tight">
              {t("laparoscopicSurgery.heroTitle")}<br /><span className="text-rose-200">{t("laparoscopicSurgery.heroTitleHighlight")}</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-100 leading-relaxed max-w-2xl font-medium">
              {t("laparoscopicSurgery.heroDesc")}
            </p>
            <div className="flex flex-wrap items-center gap-4 md:gap-6 pt-2 pb-2">
              <Link
                href="#appointment"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#9d174d] rounded-2xl font-bold text-sm uppercase tracking-widest shadow-xl hover:bg-rose-50 transition-all border-2 border-transparent"
              >
                {t("laparoscopicSurgery.bookCta")}
                <ArrowRight className="w-5 h-5 shrink-0" />
              </Link>
              <nav className="flex items-center text-sm text-white/80 font-semibold">
                <Link href="/" className="hover:text-white transition-colors">{t("laparoscopicSurgery.home")}</Link>
                <span className="mx-2">/</span>
                <span className="text-white">{t("laparoscopicSurgery.breadcrumbCurrent")}</span>
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
            { icon: Zap, labelKey: "laparoscopicSurgery.stat1", color: "text-[#9d174d] bg-rose-50" },
            { icon: Scissors, labelKey: "laparoscopicSurgery.stat2", color: "text-rose-600 bg-rose-50" },
            { icon: ShieldCheck, labelKey: "laparoscopicSurgery.stat3", color: "text-emerald-600 bg-emerald-50" },
            { icon: UserCheck, labelKey: "laparoscopicSurgery.stat4", color: "text-blue-600 bg-blue-50" },
          ].map((item, idx) => (
            <div key={idx} className="bg-white border border-gray-100 p-8 rounded-[3rem] shadow-xl hover:shadow-[0_30px_60px_rgba(157,23,77,0.1)] transition-all duration-500 group flex flex-col items-center text-center">
              <div className={`p-5 rounded-3xl ${item.color} group-hover:scale-110 transition-transform duration-500 mb-6 shadow-sm`}>
                <item.icon className="w-8 h-8" />
              </div>
              <span className="font-bold text-gray-900 text-lg md:text-xl tracking-tight leading-tight">{t(item.labelKey)}</span>
            </div>
          ))}
        </div>

        {/* Intro Section - The Revolution */}
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-10 animate-page-enter">
            <div className="space-y-6">
              <span className="text-[#9d174d] font-bold tracking-[0.3em] uppercase text-sm">{t("laparoscopicSurgery.badge")}</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-[1.1] tracking-tight">
                {t("laparoscopicSurgery.heroTitle")}<span className="text-[#9d174d]">{t("laparoscopicSurgery.heroTitleHighlight")}</span>
              </h2>
            </div>
            <div className="space-y-8 text-gray-600 text-xl leading-relaxed font-bold">
              <p>{t("laparoscopicSurgery.heroDesc")}</p>
              <p>{t("laparoscopicSurgery.heroP1")}</p>
              <p className="bg-rose-50 p-8 rounded-[3rem] border border-rose-100 text-[#9d174d]">
                {t("laparoscopicSurgery.heroP2")}
              </p>
              <p className="border-l-4 border-rose-600 pl-6 italic text-gray-900">
                {t("laparoscopicSurgery.heroP3")}
              </p>
            </div>
          </div>
          <div className="relative group rounded-[3rem] md:rounded-[4rem] overflow-hidden shadow-2xl h-[450px] md:h-[550px] border-[8px] md:border-[12px] border-white ring-1 ring-gray-100">
            <Image
              src="/laparoscopic.jpg"
              alt="Laparoscopic Surgery Setup"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Basics Section */}
        <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center">
          <div className="bg-gray-900 rounded-[3rem] md:rounded-[4rem] p-8 md:p-12 lg:p-16 text-white space-y-8 order-2 lg:order-1">
            <h3 className="text-2xl md:text-3xl font-bold text-rose-400">{t("laparoscopicSurgery.basicsTitle")}</h3>
            <div className="space-y-6 text-gray-300 font-bold leading-relaxed text-lg">
              <p>{t("laparoscopicSurgery.basicsP1")}</p>
              <p>{t("laparoscopicSurgery.basicsP2")}</p>
            </div>
            <div className="grid gap-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex items-center gap-4 bg-white/10 p-5 rounded-3xl border border-white/10 hover:bg-white/20 transition-all">
                  <CheckCircle2 className="w-6 h-6 text-emerald-400 shrink-0" />
                  <span className="font-bold text-white">{t(`laparoscopicSurgery.basicsReason${i}`)}</span>
                </div>
              ))}
            </div>
            <p className="pt-6 font-bold text-rose-200 border-t border-white/10">{t("laparoscopicSurgery.basicsConclusion")}</p>
          </div>
          <div className="space-y-10 order-1 lg:order-2">
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 leading-tight">
              {t("laparoscopicSurgery.typesTitle")}
            </h2>
            <div className="aspect-video relative rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-xl border-4 md:border-8 border-white ring-1 ring-gray-100">
              <Image src="/raj/ot.jpg" alt="Laparoscopic OT" fill className="object-cover" />
            </div>
          </div>
        </div>

        {/* Specialized Procedures - Gallbladder, Appendix, Hernia */}
        <div className="space-y-20">
          {/* Gallbladder */}
          <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center bg-rose-50/50 p-6 md:p-12 lg:p-16 rounded-[3rem] md:rounded-[4rem] border border-rose-100">
            <div className="space-y-8">
              <div className="space-y-4">
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900">{t("laparoscopicSurgery.gallbladderTitle")}</h3>
                <div className="h-1.5 w-24 bg-rose-600 rounded-full"></div>
              </div>
              <div className="space-y-6 text-gray-600 text-lg font-semibold leading-relaxed">
                <p>{t("laparoscopicSurgery.gallbladderDesc")}</p>
                <p>{t("laparoscopicSurgery.gallbladderBenefit")}</p>
                <p className="text-[#9d174d] font-bold">{t("laparoscopicSurgery.gallbladderFee")}</p>
              </div>
              <p className="bg-white p-6 rounded-2xl shadow-sm border border-rose-200 font-bold text-rose-900 border-l-[8px] border-l-rose-600">
                {t("laparoscopicSurgery.gallbladderCta")}
              </p>
            </div>
            <div className="relative h-[350px] md:h-[450px] rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-xl">
              <Image src="/raj/gallbladder.webp" alt="Gallbladder Surgery" fill className="object-cover" />
            </div>
          </div>

          {/* Appendix */}
          <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center">
            <div className="order-2 lg:order-1 relative h-[350px] md:h-[450px] rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-xl">
              <Image src="/raj/appendix.webp" alt="Appendix Operation" fill className="object-cover" />
            </div>
            <div className="order-1 lg:order-2 space-y-8">
              <div className="space-y-4">
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900">{t("laparoscopicSurgery.appendixTitle")}</h3>
                <div className="h-1.5 w-24 bg-blue-600 rounded-full"></div>
              </div>
              <div className="space-y-6 text-gray-600 text-lg font-semibold leading-relaxed">
                <p>{t("laparoscopicSurgery.appendixDesc")}</p>
                <p>{t("laparoscopicSurgery.appendixExpertise")}</p>
                <p className="text-blue-700 font-bold">{t("laparoscopicSurgery.appendixCost")}</p>
              </div>
              <div className="grid gap-3">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="flex items-center gap-3 font-bold text-blue-900 bg-blue-50 p-4 rounded-xl border border-blue-100">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    {t(`laparoscopicSurgery.appendixReason${i}`)}
                  </div>
                ))}
              </div>
              <p className="text-[#9d174d] font-bold text-xl">{t("laparoscopicSurgery.appendixCta")}</p>
            </div>
          </div>

          {/* Hernia */}
          <div className="bg-gray-900 text-white p-8 md:p-16 lg:p-24 rounded-[3rem] md:rounded-[4rem] lg:rounded-[5rem] shadow-2xl relative overflow-hidden group">
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-rose-600/10 rounded-full -mb-64 -mr-32 blur-3xl transition-transform duration-1000"></div>
            <div className="relative z-10 grid lg:grid-cols-2 gap-12 md:gap-16 items-center">
              <div className="space-y-8 md:space-y-10">
                <div className="space-y-4">
                  <h3 className="text-2xl md:text-3xl lg:text-5xl font-bold text-rose-400">{t("laparoscopicSurgery.herniaTitle")}</h3>
                  <div className="h-2 w-24 md:w-32 bg-white/20 rounded-full"></div>
                </div>
                <p className="text-lg md:text-xl text-gray-300 font-semibold leading-relaxed">{t("laparoscopicSurgery.herniaDesc")}</p>
                <div className="space-y-6">
                  <h4 className="text-lg md:text-xl font-bold text-white italic">{t("laparoscopicSurgery.herniaAspectsTitle")}</h4>
                  <div className="grid gap-4">
                    {[1, 2].map((i) => (
                      <div key={i} className="flex gap-4 p-4 md:p-5 bg-white/5 rounded-2xl md:rounded-3xl border border-white/10 hover:bg-white/10 transition-all">
                        <div className="w-8 h-8 bg-rose-600 rounded-xl flex items-center justify-center shrink-0">
                          <CheckCircle2 className="w-5 h-5 text-white" />
                        </div>
                        <p className="font-bold text-base md:text-lg">{t(`laparoscopicSurgery.herniaAspect${i}`)}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <p className="text-xl md:text-2xl font-bold text-rose-200 pt-6 border-t border-white/10">{t("laparoscopicSurgery.herniaCta")}</p>
              </div>
              <div className="relative h-[350px] md:h-[500px] rounded-[2rem] md:rounded-[4rem] overflow-hidden border-[8px] md:border-[12px] border-white/10 shadow-inner">
                <Image src="/raj/hernia-care.webp" alt="Hernia Treatment" fill className="object-cover" />
              </div>
            </div>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="space-y-12 py-8">
          <div className="text-center space-y-4 max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 leading-tight">
              {t("laparoscopicSurgery.whySectionTitle")}
            </h2>
            <p className="text-lg md:text-xl text-gray-600 font-semibold leading-relaxed">{t("laparoscopicSurgery.whyDesc")}</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-lg space-y-6 text-center hover:bg-rose-50 transition-colors group">
                <div className="w-16 h-16 bg-rose-100 text-[#9d174d] rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
                  <ShieldCheck className="w-8 h-8" />
                </div>
                <p className="font-bold text-gray-900 text-base md:text-lg leading-tight uppercase tracking-tight">
                  {t(`laparoscopicSurgery.whyBenefit${i}`)}
                </p>
              </div>
            ))}
          </div>
          <p className="text-center text-xl md:text-2xl font-bold text-[#9d174d] underline decoration-wavy decoration-rose-300 underline-offset-[12px]">
            {t("laparoscopicSurgery.whyConclusion")}
          </p>
        </div>

        {/* FAQ Section */}
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900">{t("laparoscopicSurgery.faqTitle")}</h2>
            <div className="h-1.5 w-24 md:w-32 bg-[#9d174d] mx-auto rounded-full"></div>
          </div>
          <div className="max-w-4xl mx-auto grid gap-6">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="bg-gray-50 p-6 md:p-8 rounded-[2rem] border border-gray-100 space-y-4 hover:bg-white hover:shadow-xl transition-all duration-300 group">
                <h4 className="text-lg md:text-xl font-bold text-gray-900 flex gap-4 group-hover:text-[#9d174d] transition-colors">
                  <span className="text-rose-600 font-serif">Q.</span> {t(`laparoscopicSurgery.faq${i}Q`)}
                </h4>
                <p className="text-gray-600 text-base md:text-lg font-semibold leading-relaxed pl-8 md:pl-10 border-l-[3px] border-l-rose-200">
                  {t(`laparoscopicSurgery.faq${i}A`)}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Final CTA / Conclusion */}
        <div id="appointment" className="bg-gradient-to-br from-[#800020] to-rose-900 rounded-[3rem] md:rounded-[4rem] lg:rounded-[5rem] p-8 md:p-16 lg:p-24 text-white text-center space-y-10 relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
          <div className="relative z-10 max-w-4xl mx-auto space-y-8">
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold leading-tight tracking-tight">
              {t("laparoscopicSurgery.conclusionTitle")}
            </h2>
            <p className="text-lg md:text-xl lg:text-2xl text-white/90 font-semibold leading-relaxed italic border-x-4 border-white/20 px-6 md:px-8">
              &quot;{t("laparoscopicSurgery.conclusionP")}&quot;
            </p>
            <p className="text-xl md:text-2xl font-bold text-rose-300 uppercase tracking-widest bg-white/5 py-3 md:py-4 rounded-[1.5rem] md:rounded-2xl mx-auto w-fit px-8 md:px-10 border border-white/10">
              {t("laparoscopicSurgery.conclusionCta")}
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-6 pt-6">
              <Link href="tel:+916397970802" className="flex items-center justify-center gap-4 bg-white text-[#800020] px-10 py-5 rounded-[2rem] font-bold text-xl shadow-xl hover:scale-105 transition-transform group/btn">
                <Phone className="w-8 h-8 group-hover/btn:rotate-12 transition-transform" />
                <div className="text-left">
                  <span className="block text-xs opacity-80 uppercase tracking-widest text-[#800020]">Emergency Surgical Line</span>
                  <span>+91 63979 70802</span>
                </div>
              </Link>
              <Link href="/contact" className="flex items-center justify-center gap-4 bg-white/10 backdrop-blur-xl border-2 border-white/20 text-white px-10 py-5 rounded-[2rem] font-bold text-xl hover:bg-white/20 transition-colors uppercase tracking-widest">
                {t("laparoscopicSurgery.bookConsult")}
              </Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
