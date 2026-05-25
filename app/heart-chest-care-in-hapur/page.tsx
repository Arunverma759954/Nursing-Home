"use client";

import Image from "next/image";
import Link from "next/link";
import { Activity, Heart, ShieldCheck, Phone, Clock, ArrowRight, UserCheck, Stethoscope } from "lucide-react";
import { useLanguage } from "@/app/context/LanguageContext";

export default function HeartChestCareHapur() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-white text-gray-900 pt-24 overflow-x-hidden">

      {/* Header / Breadcrumb Area */}
      <div className="bg-[#800020] text-white min-h-[300px] md:min-h-[400px] flex items-center">
        <div className="max-w-[1420px] mx-auto w-full px-6 sm:px-8 md:px-10 lg:px-12">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-center lg:text-left leading-tight">{t("heartChestCare.heroTitle")}</h1>
          <nav className="flex items-center justify-center lg:justify-start gap-2 text-white/90 text-sm font-bold bg-black/10 w-fit px-6 py-3 rounded-2xl backdrop-blur-sm">
            <Link href="/" className="hover:underline">{t("heartChestCare.home")}</Link>
            <span className="opacity-50">/</span>
            <span className="text-white">{t("heartChestCare.breadcrumbCurrent")}</span>
          </nav>
        </div>
      </div>

      <div className="max-w-[1420px] mx-auto px-6 sm:px-8 md:px-10 lg:px-12 py-12 md:py-16 space-y-12 md:space-y-16">
        
        {/* Intro Section */}
        <section className="space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight">
            {t("heartChestCare.introTitle")}
          </h2>
          <p className="text-gray-600 leading-relaxed text-lg font-semibold italic border-l-4 border-red-100 pl-6">
            {t("heartChestCare.introP1")}
          </p>
        </section>

        {/* Section 1: Image Left + Content Right */}
        <section className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="relative h-[400px] lg:h-[500px] rounded-[2.5rem] overflow-hidden shadow-xl border-4 border-white ring-1 ring-gray-100">
            <Image
              src="/heart-chest.jpg"
              alt="Heart Surgery Team"
              fill
              className="object-cover"
            />
          </div>
          <div className="space-y-8">
            <div className="space-y-3">
              <h3 className="text-lg md:text-xl font-bold text-[#800020] uppercase tracking-wide">{t("heartChestCare.expertHeartTitle")}</h3>
              <p className="text-gray-600 leading-relaxed text-base font-semibold">
                {t("heartChestCare.expertHeartDesc")}
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="text-lg md:text-xl font-bold text-[#800020] uppercase tracking-wide">{t("heartChestCare.chestPainTitle")}</h3>
              <p className="text-gray-600 leading-relaxed text-base font-semibold">
                {t("heartChestCare.chestPainDesc")}
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg md:text-xl font-bold text-[#800020] uppercase tracking-wide">{t("heartChestCare.cardiologistTitle")}</h3>
              <p className="text-gray-600 leading-relaxed text-base font-semibold">
                {t("heartChestCare.cardiologistIntro")}
              </p>
              <ul className="grid gap-2 text-gray-600 text-sm font-semibold italic">
                {[t("heartChestCare.li1"), t("heartChestCare.li2"), t("heartChestCare.li3"), t("heartChestCare.li4")].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 bg-[#800020] rounded-full shrink-0"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Section 2: Full Width Text */}
        <section className="space-y-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-slate-50 p-8 rounded-[2rem] border border-slate-100">
              <h3 className="text-xl font-bold text-[#800020] mb-4">{t("heartChestCare.completeCareTitle")}</h3>
              <p className="text-gray-600 leading-relaxed text-sm font-semibold italic italic">
                {t("heartChestCare.completeCareDesc")}
              </p>
            </div>

            <div className="bg-slate-50 p-8 rounded-[2rem] border border-slate-100">
              <h3 className="text-xl font-bold text-[#800020] mb-4">{t("heartChestCare.bpTitle")}</h3>
              <p className="text-gray-600 leading-relaxed text-sm font-semibold italic">
                {t("heartChestCare.bpDesc")}
              </p>
            </div>
          </div>

          <div className="bg-white border border-gray-100 p-8 rounded-[2.5rem] shadow-sm space-y-6">
            <h3 className="text-xl font-bold text-gray-900 border-b border-gray-50 pb-4">{t("heartChestCare.whyChooseTitle")}</h3>
            <ul className="grid md:grid-cols-2 gap-4">
              {[
                t("heartChestCare.whyChooseL1"),
                t("heartChestCare.whyChooseL2"),
                t("heartChestCare.whyChooseL3"),
                t("heartChestCare.whyChooseL4")
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-600 text-sm font-bold bg-gray-50/50 p-3 rounded-xl border border-gray-50">
                  <div className="mt-0.5 min-w-[1.25rem] w-5 h-5 bg-red-100 text-[#800020] rounded-full flex items-center justify-center text-[10px] font-black shadow-sm shrink-0">✓</div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Section 3: Content Left + Image Right */}
        <section className="grid lg:grid-cols-2 gap-12 items-center bg-gray-50/50 rounded-[3rem] p-8 md:p-14">
          <div className="space-y-10 order-2 lg:order-1">
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-[#800020] uppercase tracking-wide">{t("heartChestCare.conditionsTitle")}</h3>
              <ul className="grid gap-2 text-gray-600 text-sm font-semibold italic">
                {[
                  t("heartChestCare.cond1"),
                  t("heartChestCare.cond2"),
                  t("heartChestCare.cond3"),
                  t("heartChestCare.cond4"),
                  t("heartChestCare.cond5")
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 bg-[#800020] rounded-full shrink-0"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-5">
              <h3 className="text-xl font-bold text-[#800020] uppercase tracking-wide">{t("heartChestCare.bookTodayTitle")}</h3>
              <p className="text-gray-600 leading-relaxed text-sm font-bold bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                {t("heartChestCare.bookTodayDesc")}
              </p>
              <div className="pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-[#800020] text-white px-8 py-4 rounded-2xl font-bold hover:bg-[#a01a3a] transition-all transform hover:-translate-y-1 shadow-xl uppercase tracking-widest text-sm"
                >
                  <Phone className="w-4 h-4" />
                  {t("heartChestCare.bookAppointment")}
                </Link>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 relative h-[350px] lg:h-[450px] rounded-[2rem] overflow-hidden shadow-xl border-8 border-white ring-1 ring-black/5">
            <Image
              src="/heart-chest2.jpg"
              alt="Advanced Heart Care Diagnosis"
              fill
              className="object-contain p-8"
            />
          </div>
        </section>

        {/* Bottom Box */}
        <section className="bg-slate-900 text-white rounded-[2.5rem] p-10 md:p-14 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#800020]/20 rounded-full blur-3xl -mr-32 -mt-32"></div>
          <h3 className="text-xl md:text-2xl font-bold mb-6 text-white leading-tight">{t("heartChestCare.partnerHeading")}</h3>
          <p className="text-white/80 leading-relaxed text-lg font-medium italic border-l-4 border-red-500 pl-6">
            {t("heartChestCare.partnerDesc")}
          </p>
        </section>

      </div>
    </div>
  );
}
