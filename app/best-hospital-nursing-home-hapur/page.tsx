"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useLanguage } from "@/app/context/LanguageContext";
import {
  ChevronDown,
  Check,
  Phone,
  Activity,
  Baby,
  ShieldCheck,
  Heart,
  UserCheck,
  Clock,
  Building2,
  FileText,
  HeartHandshake,
  CreditCard,
  Star,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Quote,
  ShieldAlert,
  GraduationCap
} from "lucide-react";

const FAQItem = ({
  question,
  answer,
  isOpen,
  toggle,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  toggle: () => void;
}) => {
  return (
    <div className={`border border-gray-100 rounded-[2rem] bg-white overflow-hidden transition-all duration-300 hover:shadow-xl ${isOpen ? 'shadow-lg border-slate-200' : 'hover:border-slate-200'}`}>
      <button
        onClick={toggle}
        className="w-full flex items-center justify-between p-6 md:p-8 text-left group"
      >
        <span className={`text-lg font-bold transition-colors duration-300 ${isOpen ? "text-[#9d174d]" : "text-gray-900 group-hover:text-[#9d174d]"}`}>
          {question}
        </span>
        <span
          className={`flex items-center justify-center w-10 h-10 rounded-full transition-all duration-300 ${isOpen ? "bg-[#9d174d] text-white rotate-180 shadow-md" : "bg-gray-50 text-gray-400 group-hover:bg-red-50 group-hover:text-[#9d174d]"
            }`}
        >
          <ChevronDown className="w-5 h-5" />
        </span>
      </button>
      <div
        className={`transition-all duration-500 ease-in-out ${isOpen ? "max-h-[500px] opacity-100 pb-8" : "max-h-0 opacity-0"
          }`}
      >
        <div className="px-8 text-gray-600 leading-relaxed font-medium">
          {answer}
        </div>
      </div>
    </div>
  );
};

export default function BestHospitalPage() {
  const { t } = useLanguage();
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const faqs = [
    { q: t("bestHospital.faq1q"), a: t("bestHospital.faq1a") },
    { q: t("bestHospital.faq2q"), a: t("bestHospital.faq2a") },
    { q: t("bestHospital.faq3q"), a: t("bestHospital.faq3a") },
    { q: t("bestHospital.faq4q"), a: t("bestHospital.faq4a") },
    { q: t("bestHospital.faq5q"), a: t("bestHospital.faq5a") },
  ];

  return (
    <div className="bg-white min-h-screen selection:bg-[#9d174d] selection:text-white pt-24">
      {/* Hero Section - Refined for Content Hierarchy */}
      <section className="relative min-h-[400px] md:min-h-[500px] flex items-center overflow-hidden bg-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(157,23,77,0.03),transparent_50%)]" />
        <div className="absolute top-0 right-0 w-1/2 h-full hidden lg:block">
            <div className="relative w-full h-full">
                <Image src="/medical.jpg" alt="Building" fill className="object-cover grayscale-[0.2] opacity-20" />
                <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent" />
            </div>
        </div>

        <div className="max-w-[1420px] mx-auto px-6 sm:px-8 md:px-10 lg:px-12 relative z-10 w-full">
          <div className="max-w-4xl space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-50 border border-slate-100 text-slate-800 text-xs md:text-sm font-bold uppercase tracking-widest shadow-sm">
              <Sparkles className="w-4 h-4 text-yellow-500 fill-yellow-500" />
              <span>{t("bestHospital.badge")}</span>
            </div>
            
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-[#0f172a] leading-tight tracking-tight text-center lg:text-left">
              {t("bestHospital.heroTitle")} <br /> 
              <span className="text-[#9d174d]">{t("bestHospital.heroTitleHighlight")}</span> <br />
              {t("bestHospital.heroTitleSuffix")}
            </h1>
            
            <div className="max-w-2xl mx-auto lg:mx-0">
              <p className="text-base md:text-xl text-slate-600 leading-relaxed font-semibold italic border-l-4 border-[#9d174d] pl-6 bg-slate-50 py-4 rounded-r-2xl text-center lg:text-left">
                {t("bestHospital.heroPara")}
              </p>
            </div>

            <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-4">
              <Link href="/contact" className="px-8 py-4 bg-[#9d174d] text-white rounded-2xl font-bold text-sm uppercase tracking-widest shadow-xl hover:bg-[#831843] transition-all">
                {t("bestHospital.bookAppointment")}
              </Link>
              <nav className="flex items-center text-sm text-slate-500 font-bold bg-slate-50 px-6 py-4 rounded-2xl border border-slate-100 backdrop-blur-sm">
                <Link href="/" className="hover:text-[#9d174d] transition-colors">HOME</Link>
                <span className="mx-2 opacity-30">/</span>
                <span className="text-slate-900 uppercase">Best Hospital</span>
              </nav>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Quote Section */}
      <section className="py-12 md:py-16 bg-slate-50 border-y border-slate-100">
          <div className="max-w-4xl mx-auto px-6 text-center space-y-6">
              <div className="w-12 h-1 bg-[#9d174d] mx-auto rounded-full" />
              <p className="text-lg md:text-2xl text-slate-800 font-bold leading-relaxed italic">
                  {t("bestHospital.intro2")}
              </p>
              <p className="text-base text-slate-500 font-semibold leading-relaxed">
                  {t("bestHospital.intro3")}
              </p>
          </div>
      </section>

      {/* Emergency Response Section */}
      <section className="py-16 md:py-24 bg-white overflow-hidden">
        <div className="max-w-[1420px] mx-auto px-6 sm:px-8 md:px-10 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 md:gap-24 items-center">
            <div className="relative group">
              <div className="absolute -inset-4 bg-slate-50 rounded-[4rem] group-hover:scale-105 transition-transform duration-700" />
              <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white">
                <Image
                  src="/raj/raj-nursing-home-icu.jpg"
                  alt="24/7 Emergency ICU"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-1000"
                />
                <div className="absolute top-8 left-8">
                    <div className="bg-red-600 text-white px-6 py-3 rounded-2xl font-bold flex items-center gap-3 shadow-xl">
                        <Clock className="w-5 h-5 animate-pulse" />
                        <span>24/7 ACTIVE</span>
                    </div>
                </div>
              </div>
              
              <div className="absolute -bottom-10 -right-10 bg-[#0f172a] p-8 rounded-[2.5rem] shadow-2xl max-w-xs hidden md:block border-4 border-white">
                  <div className="flex gap-4 items-center mb-4">
                      <div className="w-12 h-12 bg-red-600 rounded-xl flex items-center justify-center">
                          <ShieldAlert className="w-6 h-6 text-white" />
                      </div>
                      <p className="text-white font-bold text-sm tracking-widest">{t("bestHospital.criticalCare")}</p>
                  </div>
                  <p className="text-slate-400 font-medium text-xs uppercase tracking-widest leading-relaxed">
                      Saving Every Minute in Heart Attacks & Traumatic Road Accidents
                  </p>
              </div>
            </div>

            <div className="space-y-12">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight leading-tight">
                  {t("bestHospital.emergencyTitle")}
                </h2>
                <div className="h-1.5 w-20 bg-red-600 rounded-full" />
              </div>
              
              <div className="space-y-6 text-slate-600 text-lg leading-relaxed font-semibold italic border-l-4 border-red-600 pl-6 py-2">
                 <p>{t("bestHospital.emergencyP1")}</p>
                 <p className="text-slate-900 font-bold not-italic bg-red-50 p-6 rounded-2xl shadow-sm">{t("bestHospital.emergencyQuote")}</p>
              </div>

              <div className="space-y-6">
                  <p className="text-slate-800 font-bold text-xl">{t("bestHospital.emergencyP2")}</p>
                  <ul className="grid gap-4">
                      {[1, 2, 3, 4].map((i) => (
                          <li key={i} className="flex items-start gap-4 p-4 rounded-2xl border border-slate-50 bg-slate-50/50 hover:bg-slate-50 transition-colors">
                              <CheckCircle2 className="w-6 h-6 text-red-600 shrink-0 mt-0.5" />
                              <span className="font-bold text-slate-700">{t(`bestHospital.emergencyL${i}`)}</span>
                          </li>
                      ))}
                  </ul>
              </div>

              <div className="pt-6">
                <Link href="tel:+916397970802" className="flex items-center justify-between bg-red-600 text-white p-6 md:p-8 rounded-[2.5rem] shadow-2xl hover:scale-[1.02] transition-all group">
                  <div className="flex gap-6 items-center">
                    <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center shrink-0 group-hover:rotate-12 transition-transform">
                        <Phone className="w-8 h-8 text-white fill-white" />
                    </div>
                    <div>
                        <p className="text-white/80 font-bold text-xs md:text-sm uppercase tracking-widest mb-1">{t("bestHospital.medicalEmergency")}</p>
                        <p className="text-xl md:text-2xl font-bold">{t("bestHospital.saveNumber")}</p>
                    </div>
                  </div>
                  <ChevronRight className="w-8 h-8 text-white hidden sm:block" />
                </Link>
                <div className="mt-6 flex justify-center lg:justify-start">
                    <p className="text-3xl lg:text-5xl font-bold text-slate-900 tabular-nums">63979 70802</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Maternity Grid - New Layout */}
      <section className="py-16 md:py-24 bg-slate-50 border-y border-slate-100 relative overflow-hidden">
        <div className="max-w-[1420px] mx-auto px-6 sm:px-8 md:px-10 lg:px-12 relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-12">
               <div className="space-y-6 text-center lg:text-left">
                  <span className="text-pink-600 font-bold uppercase tracking-widest text-sm bg-pink-50 px-5 py-2 rounded-full border border-pink-100">{t("bestHospital.maternityBadge")}</span>
                  <h2 className="text-3xl md:text-5xl font-bold text-[#0f172a] leading-tight tracking-tight">
                    {t("bestHospital.maternityTitle")}
                  </h2>
               </div>

               <div className="bg-white p-8 md:p-12 rounded-[3.5rem] border border-pink-100 shadow-xl shadow-pink-900/5 space-y-10">
                  <div className="relative">
                    <Quote className="w-12 h-12 text-pink-100 absolute -top-4 -left-4" />
                    <p className="text-xl md:text-2xl font-bold text-[#9d174d] leading-relaxed italic relative z-10">
                      {t("bestHospital.womenQuote")}
                    </p>
                  </div>
                  
                  <p className="text-slate-600 font-bold text-lg leading-relaxed">
                    {t("bestHospital.womenPara")}
                  </p>

                  <div className="space-y-6">
                      <p className="text-slate-900 font-bold text-xl uppercase tracking-wider border-b-2 border-pink-600 pb-2 inline-block">
                        {t("bestHospital.complexGynae")}
                      </p>
                      <div className="grid md:grid-cols-3 gap-4">
                        {[
                            { key: "fibroids", icon: ShieldCheck },
                            { key: "infertility", icon: Activity },
                            { key: "menstrual", icon: UserCheck }
                        ].map((item, i) => (
                           <div key={i} className="bg-pink-50/50 p-6 rounded-2xl border border-pink-50 flex flex-col items-center text-center group hover:bg-white transition-colors">
                              <item.icon className="w-8 h-8 text-pink-600 mb-4 group-hover:scale-110 transition-transform" />
                              <span className="font-bold text-slate-800 text-sm">{t(`bestHospital.${item.key}`)}</span>
                           </div>
                        ))}
                      </div>
                  </div>
               </div>
            </div>

            <div className="space-y-8">
               <div className="bg-white p-8 md:p-10 rounded-[3rem] border border-slate-100 shadow-xl space-y-8">
                  <div className="flex gap-6 items-start">
                    <div className="w-12 h-12 bg-pink-100 text-pink-600 rounded-xl flex items-center justify-center shrink-0 font-bold text-xl">1</div>
                    <p className="text-lg md:text-xl font-bold text-slate-700 leading-snug">{t("bestHospital.expertsCysts")}</p>
                  </div>
                  <div className="flex gap-6 items-start">
                    <div className="w-12 h-12 bg-pink-100 text-pink-600 rounded-xl flex items-center justify-center shrink-0 font-bold text-xl">2</div>
                    <p className="text-lg md:text-xl font-bold text-slate-700 leading-snug">{t("bestHospital.motherBaby")}</p>
                  </div>
               </div>

               <div className="bg-[#9d174d] p-10 md:p-14 rounded-[3.5rem] text-white text-center shadow-2xl space-y-6 relative overflow-hidden group">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  <Baby className="w-20 h-20 text-white fill-white mx-auto mb-4 opacity-20" />
                  <p className="text-xl md:text-2xl font-bold italic leading-relaxed leading-snug">
                    {t("bestHospital.newbornCta")}
                  </p>
                  <Link href="/contact" className="inline-flex py-5 px-10 bg-white text-[#9d174d] rounded-2xl font-bold text-lg hover:scale-105 transition-all shadow-xl">
                    SCHEDULE A VISIT TODAY
                  </Link>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Facilities & Transparency Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-[1420px] mx-auto px-6 sm:px-8 md:px-10 lg:px-12">
            <div className="grid lg:grid-cols-[0.8fr,1.2fr] gap-16 items-center mb-20 md:mb-32">
                <div className="space-y-8">
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight leading-tight">
                        {t("bestHospital.facilitiesMainTitle")}
                    </h2>
                    <div className="h-2 w-24 bg-[#0f172a] rounded-full" />
                    <p className="text-xl text-slate-600 font-bold italic leading-relaxed">
                        {t("bestHospital.facilitiesP1")}
                    </p>
                </div>
                <div className="grid sm:grid-cols-2 gap-8">
                    {[
                        { key: "premium", icon: Building2 },
                        { key: "transparent", icon: HeartHandshake }
                    ].map((item, i) => (
                         <div key={i} className="bg-slate-50 p-10 rounded-[3rem] border border-slate-100 shadow-sm space-y-6 group hover:bg-white hover:shadow-xl transition-all">
                            <div className="w-16 h-16 bg-white text-[#0f172a] rounded-2xl flex items-center justify-center shadow-md group-hover:bg-[#0f172a] group-hover:text-white transition-all">
                                <item.icon className="w-8 h-8" />
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900">{t(`bestHospital.${item.key}Facilities`)}</h3>
                            <p className="text-slate-600 font-bold leading-relaxed">{t(`bestHospital.${item.key}Desc`)}</p>
                         </div>
                    ))}
                </div>
            </div>

            <div className="bg-[#0f172a] p-12 md:p-20 rounded-[4rem] text-white relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-transparent to-[#9d174d]/10" />
                <div className="relative z-10 grid md:grid-cols-2 gap-16 items-center">
                    <div className="space-y-8">
                         <h3 className="text-3xl font-bold text-white tracking-tight">{t("bestHospital.respectKindness")}</h3>
                         <p className="text-xl text-slate-300 font-bold leading-relaxed italic border-l-4 border-slate-500 pl-8">
                             {t("bestHospital.facilitiesP2")}
                         </p>
                         <div className="flex items-center gap-4 bg-white/5 p-6 rounded-2xl border border-white/10">
                            <GraduationCap className="w-8 h-8 text-blue-400" />
                            <p className="text-white font-bold">{t("bestHospital.respectDesc")}</p>
                         </div>
                    </div>
                    <div className="relative h-[400px] rounded-[3rem] overflow-hidden shadow-2xl scale-95 group-hover:scale-100 transition-all duration-1000 order-first md:order-last">
                        <Image src="/raj/dr.Vipin.jpg" alt="Clinical Dedication" fill className="object-cover" />
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* Conclusion & CTA */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-[1420px] mx-auto px-6 sm:px-8 md:px-10 lg:px-12">
            <div className="bg-[#9d174d] p-12 md:p-24 rounded-[4rem] text-white text-center space-y-12 relative overflow-hidden group shadow-2xl">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/asfalt-light.png')] opacity-10" />
                <div className="relative z-10 max-w-4xl mx-auto space-y-12">
                    <div className="space-y-6">
                        <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight">{t("bestHospital.conclusion")}</h2>
                        <div className="h-1.5 w-32 bg-white/20 mx-auto rounded-full" />
                    </div>
                    
                    <div className="space-y-10 text-xl md:text-3xl font-bold leading-relaxed text-red-50">
                        <p>{t("bestHospital.conclusionP1")}</p>
                        <p className="text-white drop-shadow-sm">{t("bestHospital.conclusionP2")}</p>
                    </div>

                    <p className="text-2xl md:text-4xl font-bold italic text-yellow-400 drop-shadow-lg">
                        {t("bestHospital.conclusionCta")}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-6 justify-center pt-10">
                        <Link href="/contact" className="px-12 py-6 bg-white text-[#9d174d] rounded-2xl font-bold text-xl shadow-2xl hover:scale-105 transition-all">
                             {t("bestHospital.contactUsNow")}
                        </Link>
                        <Link href="/health-checkup-plans" className="px-12 py-6 bg-[#0f172a] text-white rounded-2xl font-bold text-xl hover:scale-105 transition-all border border-white/10">
                             EXPLORE HEALTH PACKAGES
                        </Link>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-20 space-y-6">
            <span className="text-[#9d174d] font-bold tracking-[0.3em] uppercase text-sm bg-red-50 px-6 py-2 rounded-full inline-block">{t("bestHospital.faqTitle")}</span>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight">Expert Hospital Guidance</h2>
            <div className="h-1.5 w-24 bg-slate-200 mx-auto rounded-full" />
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.q}
                answer={faq.a}
                isOpen={openFAQ === index}
                toggle={() => toggleFAQ(index)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Bottom Padding for Footer */}
      <div className="h-20" />
    </div>
  );
}

function ChevronRight(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  )
}
