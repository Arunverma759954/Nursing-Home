"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useLanguage } from "@/app/context/LanguageContext";
const ArrowRightIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>;

export default function AboutClientPage() {
  const { t } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [activeServiceTab, setActiveServiceTab] = useState(0);
  return (
    <div className="min-h-screen bg-white text-gray-900 pt-[100px] sm:pt-[110px] md:pt-[130px] overflow-x-hidden">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/medical.jpg"
            alt="About Banner"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#5b0f2d]/90 via-[#6f1436]/80 to-[#6f1436]/40" />
        </div>
        <div className="max-w-[1420px] mx-auto px-4 sm:px-8 md:px-10 lg:px-12 pt-8 sm:pt-12 pb-8 sm:pb-12 relative flex items-center justify-between">
          <div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white tracking-tight mb-2">
              {t("about.title")}
            </h1>
            <div className="flex items-center gap-2 text-[10px] md:text-xs font-bold text-white/80">
              <Link href="/" className="hover:text-white transition-colors">
                {t("about.breadcrumbHome")}
              </Link>
              <span>/</span>
              <span className="text-white">{t("about.breadcrumbAbout")}</span>
            </div>
          </div>
          <div className="hidden md:block relative h-40 w-40 overflow-hidden rounded-full border-4 border-white/20">
            <Image
              src="/indian-nurse-39.jpg"
              alt="Nurse"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* STORY / WHY CHOOSE US / MILESTONES SECTION */}
      <section className="py-10 sm:py-14 md:py-16 bg-white">
        <div className="max-w-[1420px] mx-auto px-4 sm:px-8 md:px-10 lg:px-12 grid lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-20 items-start">
          {/* Left: Story + Why Choose + Milestones */}
          <div className="space-y-10">
            {/* Story */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-50 rounded-full mb-4">
                <span className="w-2 h-2 rounded-full bg-[#9d174d] animate-pulse" />
                <span className="text-[#9d174d] font-black tracking-widest uppercase text-[10px] md:text-xs">Our Story</span>
              </div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 leading-tight mb-4">
                {t("about.storyTitle")} <span className="text-[#9d174d]">{t("about.storyHighlight")}</span>
              </h2>
              <p className="text-gray-600 leading-relaxed text-base md:text-lg">
                {t("about.storyPara")}
              </p>
            </div>

            {/* Why Choose Us */}
            <div>
              <h3 className="text-xl md:text-2xl font-black text-gray-900 mb-5">{t("about.whyChoose")}</h3>
              <div className="space-y-5">
                {[
                  { icon: "🩺", title: t("about.doctorLed"), desc: t("about.doctorLedDesc") },
                  { icon: "💡", title: t("about.techCompassion"), desc: t("about.techCompassionDesc") },
                  { icon: "🌱", title: t("about.communityImpact"), desc: t("about.communityImpactDesc") },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 p-4 bg-gray-50 rounded-2xl border border-gray-100">
                    <div className="shrink-0 w-10 h-10 bg-white rounded-xl flex items-center justify-center text-xl shadow-sm border border-gray-100">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-base font-black text-gray-900">{item.title}</h4>
                      <p className="text-sm text-gray-600 mt-0.5">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Milestones */}
            <div>
              <h3 className="text-xl md:text-2xl font-black text-gray-900 mb-5">{t("about.milestones")}</h3>
              <div className="space-y-3">
                {[
                  { year: "2023", text: t("about.milestone1") },
                  { year: "2024", text: t("about.milestone2") },
                ].map((m, i) => (
                  <div key={i} className="flex gap-4 items-start p-4 bg-[#9d174d]/5 rounded-2xl border border-[#9d174d]/10">
                    <span className="shrink-0 px-3 py-1 bg-[#9d174d] text-white font-black text-xs rounded-lg">{m.year}</span>
                    <p className="text-sm md:text-base text-gray-700 font-medium">{m.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Image */}
          <div className="relative h-[400px] md:h-[600px] rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white ring-1 ring-gray-100 sticky top-32">
            <Image
              src="/raj/cabin3.jpg"
              alt="Hospital Interior"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
          </div>
        </div>
      </section>


      {/* MISSION & VISION SECTION - REDESIGNED */}
      <section className="py-10 sm:py-14 md:py-16 bg-gradient-to-br from-gray-50 via-white to-red-50/30 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-red-100 rounded-full blur-[120px] opacity-30" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#9d174d]/10 rounded-full blur-[120px] opacity-40" />

        <div className="max-w-[1420px] mx-auto px-4 sm:px-8 md:px-10 lg:px-12 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-8 sm:mb-10 md:mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-50 rounded-full mb-4">
              <span className="w-2 h-2 rounded-full bg-[#9d174d] animate-pulse" />
              <span className="text-[#9d174d] font-black tracking-widest uppercase text-[10px] md:text-xs">
                OUR PURPOSE
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 leading-tight mb-4">
              Driving{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#9d174d] via-[#f43f5e] to-[#9d174d]">
                Healthcare Excellence
              </span>
            </h2>
            <div className="h-1.5 w-24 bg-gradient-to-r from-[#9d174d] to-[#f43f5e] mx-auto rounded-full" />
          </div>

          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 xl:gap-16">
            {/* Mission Card */}
            <div className="group bg-white rounded-[2rem] md:rounded-[2.5rem] shadow-xl border border-gray-100 overflow-hidden hover:shadow-[0_40px_80px_rgba(157,23,77,0.15)] transition-all duration-700 hover:-translate-y-4">
              {/* Card Header with Icon */}
              <div className="relative h-48 bg-gradient-to-r from-[#9d174d] to-[#f43f5e] p-6 md:p-8 flex items-end">
                <div className="absolute top-8 right-8 text-8xl opacity-20">🎯</div>
                <div>
                  <div className="w-16 h-16 md:w-20 md:h-20 bg-white/20 backdrop-blur-md rounded-xl md:rounded-2xl flex items-center justify-center mb-4">
                    <span className="text-3xl md:text-4xl">🎯</span>
                  </div>
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-black text-white">Our Mission</h3>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6 md:p-8 lg:p-10">
                <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-6 md:mb-8 font-medium">
                  Our mission is to provide quality and affordable healthcare in Hapur with care and honesty.
                </p>

                <div className="space-y-4 md:space-y-6">
                  <p className="text-lg md:text-xl font-bold text-[#9d174d] flex items-center gap-2">
                    <span className="w-1 h-6 bg-[#9d174d] rounded-full" />
                    We are committed to:
                  </p>

                  <ul className="space-y-3 md:space-y-4">
                    {[
                      "Providing 24/7 emergency and medical services",
                      "Offering safe pregnancy care and women's health treatment",
                      "Delivering advanced laparoscopic surgery and diagnostics",
                      "Ensuring proper consultation and personalized patient care",
                      "Using modern medical equipment for accurate treatment",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3 md:gap-4 group/item">
                        <span className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-[#9d174d]/10 flex items-center justify-center shrink-0 mt-0.5 group-hover/item:bg-[#9d174d] group-hover/item:text-white transition-colors">
                          <span className="text-[10px] md:text-xs">✓</span>
                        </span>
                        <span className="text-sm md:text-base text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 md:mt-8 pt-6 border-t border-gray-100">
                  <p className="text-gray-500 text-sm md:text-base italic flex items-start gap-3">
                    <span className="text-2xl md:text-3xl">💭</span>
                    <span>Our goal is to treat every patient with compassion, respect, and professionalism.</span>
                  </p>
                </div>
              </div>
            </div>


            <div className="group bg-white rounded-[2rem] md:rounded-[2.5rem] shadow-xl border border-gray-100 overflow-hidden hover:shadow-[0_40px_80px_rgba(37,99,235,0.15)] transition-all duration-700 hover:-translate-y-4">

              <div className="relative h-48 bg-gradient-to-r from-blue-600 to-blue-400 p-6 md:p-8 flex items-end">
                <div className="absolute top-8 right-8 text-8xl opacity-20">👁️</div>
                <div>
                  <div className="w-16 h-16 md:w-20 md:h-20 bg-white/20 backdrop-blur-md rounded-xl md:rounded-2xl flex items-center justify-center mb-4">
                    <span className="text-3xl md:text-4xl">👁️</span>
                  </div>
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-black text-white">Our Vision</h3>
                </div>
              </div>


              <div className="p-6 md:p-8 lg:p-10">
                <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-6 md:mb-8 font-medium">
                  Our vision is to become a trusted multi-specialty hospital in Hapur and nearby areas.
                </p>

                <div className="space-y-4 md:space-y-6">
                  <p className="text-lg md:text-xl font-bold text-blue-600 flex items-center gap-2">
                    <span className="w-1 h-6 bg-blue-600 rounded-full" />
                    We aim to:
                  </p>

                  <ul className="space-y-3 md:space-y-4">
                    {[
                      "Provide reliable and advanced medical treatment",
                      "Support families with complete healthcare solutions",
                      "Maintain high standards of safety and hygiene",
                      "Make quality healthcare accessible to everyone",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3 md:gap-4 group/item">
                        <span className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-blue-600/10 flex items-center justify-center shrink-0 mt-0.5 group-hover/item:bg-blue-600 group-hover/item:text-white transition-colors">
                          <span className="text-[10px] md:text-xs">✓</span>
                        </span>
                        <span className="text-sm md:text-base text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 md:mt-8 pt-6 border-t border-gray-100">
                  <p className="text-gray-500 text-sm md:text-base italic flex items-start gap-3">
                    <span className="text-2xl md:text-3xl">💚</span>
                    <span>We want to build a healthier and stronger community through dedicated medical care.</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* SERVICES TABS SECTION */}

    </div>
  );
}
