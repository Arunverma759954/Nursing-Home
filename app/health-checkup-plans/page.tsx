"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { useLanguage } from "@/app/context/LanguageContext";
import { 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  Heart, 
  Stethoscope, 
  Activity, 
  UserPlus, 
  Microscope,
  Calendar,
  Users
} from "lucide-react";

const planKeys = ["plan1", "plan2", "plan3", "plan4", "plan5", "plan6"];
const planIcons = [
  <Stethoscope key="1" className="w-8 h-8" />,
  <Activity key="2" className="w-8 h-8" />,
  <Users key="3" className="w-8 h-8" />,
  <UserPlus key="4" className="w-8 h-8" />,
  <Heart key="5" className="w-8 h-8" />,
  <Microscope key="6" className="w-8 h-8" />
];

export default function HealthCheckupPlans() {
  const { t } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white text-slate-900 pt-[110px] md:pt-[130px] selection:bg-[#9d174d] selection:text-white">
      {/* Premium Hero Banner */}
      <section className="relative overflow-hidden min-h-[400px] md:min-h-[500px] flex items-center">
        <div className="absolute inset-0">
          <Image
            src="/medical.jpg"
            alt="Health Checkup Banner"
            fill
            className="object-cover grayscale-[0.2] opacity-40"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#1e1b4b] via-[#4c1d95]/90 to-[#9d174d]/80" />
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/asfalt-light.png')] opacity-10" />
        </div>
        
        <div className="max-w-[1420px] mx-auto px-6 sm:px-8 md:px-10 lg:px-12 py-16 relative z-10 w-full text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white text-xs font-bold uppercase tracking-[0.2em] mb-8 backdrop-blur-md shadow-2xl">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>{t("healthPlans.preventiveCare")}</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-tight max-w-4xl mb-8">
            {t("healthPlans.heading")}
          </h1>
          
          <nav className="flex items-center justify-center lg:justify-start gap-4 text-sm font-bold text-white/70">
            <Link href="/" className="hover:text-white transition-colors">{t("nav.home")}</Link>
            <span className="opacity-30">/</span>
            <span className="text-white">{t("healthPlans.title")}</span>
          </nav>
        </div>
      </section>

      {/* Main Content Intro */}
      <section className="py-24 bg-slate-50 relative">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
        <div className="max-w-[1420px] mx-auto px-6 sm:px-8 md:px-10 lg:px-12">
          <div className="max-w-4xl mx-auto text-center space-y-10">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 leading-[1.1] tracking-tight">
              {t("healthPlans.sectionHeading")}
            </h2>
            <div className="w-24 h-1.5 bg-[#9d174d] mx-auto rounded-full" />
            <p className="text-lg md:text-2xl text-slate-600 leading-relaxed font-semibold italic border-l-4 border-[#9d174d] pl-8 bg-white py-8 rounded-r-[2rem] shadow-sm text-left">
              {t("healthPlans.sectionIntro")}
            </p>
          </div>

          {/* Service Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-24">
            {planKeys.map((planKey, index) => (
              <div key={index} className="group relative bg-white rounded-[3rem] p-10 md:p-12 border border-slate-100 shadow-xl hover:shadow-[0_20px_50px_rgba(157,23,77,0.1)] transition-all duration-500 hover:-translate-y-2 flex flex-col h-full overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-slate-50 rounded-bl-[4rem] -mr-10 -mt-10 group-hover:bg-[#9d174d] transition-colors duration-500" />
                
                <div className="w-20 h-20 bg-slate-50 text-[#9d174d] rounded-[1.5rem] flex items-center justify-center mb-10 group-hover:bg-white group-hover:shadow-lg transition-all duration-500 relative z-10">
                  {planIcons[index]}
                </div>

                <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4 tracking-tight group-hover:text-[#9d174d] transition-colors duration-300">
                  {t("healthPlans." + planKey + "Title")}
                </h3>
                
                <p className="text-slate-500 mb-10 leading-relaxed font-bold text-sm h-12 md:h-auto overflow-hidden">
                  {t("healthPlans." + planKey + "Desc")}
                </p>

                <div className="mt-auto space-y-8 pt-8 border-t-2 border-slate-50">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#9d174d]">{t("healthPlans.includesLabel")}</span>
                    </div>
                    <p className="text-sm font-bold text-slate-700 leading-relaxed pl-8">
                       {t("healthPlans." + planKey + "Includes")}
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-8 border-t border-slate-50 pt-8">
                    <div className="space-y-3">
                         <div className="flex items-center gap-2">
                             <Users className="w-4 h-4 text-indigo-400" />
                             <span className="text-[9px] font-bold uppercase tracking-[0.15em] text-slate-400">{t("healthPlans.recommendedLabel")}</span>
                         </div>
                         <p className="text-xs font-bold text-slate-900">{t("healthPlans." + planKey + "Recommended")}</p>
                    </div>
                    <div className="space-y-3">
                        <div className="flex items-center gap-2">
                             <Calendar className="w-4 h-4 text-indigo-400" />
                             <span className="text-[9px] font-bold uppercase tracking-[0.15em] text-slate-400">{t("healthPlans.frequencyLabel")}</span>
                         </div>
                         <p className="text-xs font-bold text-slate-900">{t("healthPlans." + planKey + "Frequency")}</p>
                    </div>
                  </div>
                </div>

                <Link
                  href="/contact"
                  className="mt-12 w-full py-5 bg-[#0f172a] text-white text-xs font-bold uppercase tracking-[0.2em] rounded-[1.5rem] flex items-center justify-center gap-3 hover:bg-[#9d174d] transition-all duration-300 shadow-xl"
                >
                  {t("healthPlans.bookNow")}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust & Transparency Section */}
      <section className="py-24 bg-white">
          <div className="max-w-[1420px] mx-auto px-6">
              <div className="bg-[#9d174d] p-12 md:p-24 rounded-[4rem] text-white overflow-hidden relative group">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.1),transparent_40%)]" />
                  <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
                      <div className="space-y-8 text-center lg:text-left">
                          <h3 className="text-3xl md:text-5xl font-bold tracking-tight">Why Timely Diagnosis Matters?</h3>
                          <p className="text-lg md:text-xl text-red-50 font-bold italic leading-relaxed max-w-xl">
                              "At Raj Nursing Home, we don't just treat illnesses; we prevent them. A small check-up today can save you from a complex medical journey tomorrow."
                          </p>
                          <div className="flex flex-wrap justify-center lg:justify-start gap-6">
                              <div className="bg-white/10 backdrop-blur-md px-6 py-4 rounded-2xl border border-white/20">
                                  <p className="text-2xl font-bold">100%</p>
                                  <p className="text-xs font-bold uppercase text-red-200">Accurate Reports</p>
                              </div>
                              <div className="bg-white/10 backdrop-blur-md px-6 py-4 rounded-2xl border border-white/20">
                                  <p className="text-2xl font-bold">Fast</p>
                                  <p className="text-xs font-bold uppercase text-red-200">Turnaround Time</p>
                              </div>
                          </div>
                      </div>
                      <div className="relative h-[400px] rounded-[3rem] overflow-hidden shadow-2xl skew-y-3 group-hover:skew-y-0 transition-transform duration-1000 border-8 border-white/10">
                          <Image src="/raj/raj-nursing-home-icu.jpg" alt="ICU Facilities" fill className="object-cover" />
                      </div>
                  </div>
              </div>
          </div>
      </section>

      {/* Bottom CTA */}
      <section className="pb-24 pt-12">
          <div className="max-w-4xl mx-auto px-6 text-center space-y-8">
              <h2 className="text-2xl md:text-4xl font-bold text-slate-900 tracking-tight">Ready to Take Control of Your Health?</h2>
              <p className="text-slate-600 font-bold">Consult our specialists today and choose the plan that's right for you.</p>
              <div className="flex flex-wrap gap-6 justify-center">
                  <Link href="/contact" className="px-10 py-5 bg-[#9d174d] text-white rounded-2xl font-bold shadow-2xl shadow-red-900/20 hover:scale-105 transition-all">
                      BOOK CONSULTATION
                  </Link>
                  <Link href="tel:+916397970802" className="px-10 py-5 bg-slate-900 text-white rounded-2xl font-bold hover:scale-105 transition-all">
                      CALL FOR PACKAGES
                  </Link>
              </div>
          </div>
      </section>
    </div>
  );
}
