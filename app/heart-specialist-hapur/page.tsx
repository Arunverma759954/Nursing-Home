"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Activity, Phone, ShieldCheck, CheckCircle2, Stethoscope, Heart, Clock, UserCheck, ArrowRight, ChevronLeft, ChevronRight, Sparkles, MapPin } from "lucide-react";
import { useLanguage } from "@/app/context/LanguageContext";

export default function HeartSpecialistPage() {
  const { t } = useLanguage();
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonialKeys = [
    { textKey: "heartSpecialist.testimonial1Text", nameKey: "heartSpecialist.testimonial1Name" },
    { textKey: "heartSpecialist.testimonial2Text", nameKey: "heartSpecialist.testimonial2Name" }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonialKeys.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonialKeys.length) % testimonialKeys.length);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white min-h-screen selection:bg-[#9d174d] selection:text-white pt-[80px] sm:pt-[90px] md:pt-[100px]">
      
      {/* 1. Concise Banner */}
      <section className="relative h-[200px] md:h-[300px] overflow-hidden">
        <Image
          src="/raj/banner1.webp"
          alt="Heart Care Center Hapur"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
        <div className="absolute inset-0 flex items-center">
            <div className="max-w-[1420px] mx-auto px-6 sm:px-8 md:px-10 lg:px-12 w-full">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-white text-[9px] font-bold uppercase tracking-widest mb-3">
                    <Sparkles className="w-3 h-3 text-rose-300 fill-rose-300" />
                    <span>{t("heartSpecialist.badge")}</span>
                </div>
                <h1 className="text-2xl md:text-5xl font-black text-white tracking-tight uppercase">
                    {t("heartSpecialist.heroTitle")}
                </h1>
            </div>
        </div>
      </section>

      {/* 2. Hero Intro Section - Tight Layout */}
      <section className="py-8 md:py-10 bg-white">
        <div className="max-w-[1420px] mx-auto px-6 sm:px-8 md:px-10 lg:px-12">
            <div className="grid lg:grid-cols-[1.1fr,0.9fr] gap-8 items-center">
                <div className="space-y-4">
                    <h2 className="text-xl md:text-3xl font-black text-slate-900 leading-tight uppercase">
                        {t("heartSpecialist.heroTitleHighlight")}
                    </h2>
                    <p className="text-sm md:text-base text-slate-600 leading-relaxed font-bold italic border-l-4 border-[#9d174d] pl-5 py-1">
                        {t("heartSpecialist.heroDesc")}
                    </p>
                    <div className="flex flex-wrap gap-3 pt-1">
                        <Link href="tel:+916397970802" className="px-6 py-3 bg-[#9d174d] text-white rounded-lg font-bold text-[10px] uppercase tracking-widest shadow-lg hover:bg-[#831843] transition-all">
                            {t("heartSpecialist.bookCta")}
                        </Link>
                        <nav className="flex items-center text-[10px] text-slate-500 font-bold bg-slate-50 px-4 py-3 rounded-lg border border-slate-200">
                            <Link href="/" className="hover:text-[#9d174d] transition-colors">{t("heartSpecialist.home")}</Link>
                            <span className="mx-2 opacity-30">/</span>
                            <span className="text-slate-900">{t("heartSpecialist.breadcrumbCurrent")}</span>
                        </nav>
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                    {[
                      { icon: Heart, key: "stat1", color: "text-rose-600 bg-rose-50" },
                      { icon: ShieldCheck, key: "stat2", color: "text-blue-600 bg-blue-50" },
                      { icon: Clock, key: "stat3", color: "text-amber-600 bg-amber-50" },
                      { icon: UserCheck, key: "stat4", color: "text-emerald-600 bg-emerald-50" },
                    ].map((item, idx) => (
                      <div key={idx} className="bg-slate-50 p-4 rounded-xl border border-slate-100 flex items-center gap-3 group hover:bg-white hover:shadow-lg transition-all">
                        <div className={`p-2 rounded-lg ${item.color} transition-transform group-hover:scale-110`}>
                          <item.icon className="w-5 h-5" />
                        </div>
                        <span className="font-bold text-slate-800 text-[11px] leading-tight">{t(`heartSpecialist.${item.key}`)}</span>
                      </div>
                    ))}
                </div>
            </div>
        </div>
      </section>

      {/* 3. Why & Services - Compact Section */}
      <section className="py-8 md:py-10 bg-slate-50">
        <div className="max-w-[1420px] mx-auto px-6 sm:px-8 md:px-10 lg:px-12">
          <div className="grid lg:grid-cols-[0.7fr,1.3fr] gap-8 items-start">
            <div className="space-y-4">
              <div className="space-y-2">
                <h2 className="text-xl md:text-2xl font-black text-slate-900 tracking-tight uppercase">
                  {t("heartSpecialist.whyTitle")}
                </h2>
                <div className="w-12 h-1 bg-[#9d174d] rounded-full" />
              </div>
              <p className="text-sm text-slate-600 font-bold leading-relaxed">
                {t("heartSpecialist.whyIntro")}
              </p>
              <div className="relative h-[200px] rounded-2xl overflow-hidden shadow-lg border-2 border-white">
                <Image src="/medical.jpg" alt="Cardiac Diagnostic" fill className="object-cover" />
              </div>
            </div>
            
            <div className="bg-white p-5 md:p-8 rounded-[2rem] shadow-lg border border-slate-100">
               <h3 className="text-lg font-black text-slate-900 mb-6 border-b border-slate-100 pb-3 uppercase tracking-tight">{t("heartSpecialist.servicesTitle")}</h3>
               <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <div key={i} className="flex flex-col gap-2 p-4 rounded-xl bg-slate-50 hover:bg-rose-50 border border-transparent hover:border-rose-100 transition-all">
                    <div className="w-8 h-8 bg-white text-[#9d174d] rounded-lg flex items-center justify-center shadow-sm">
                      <Stethoscope className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-[11px] font-black text-slate-900 mb-0.5 uppercase">{t(`heartSpecialist.svc${i}Title`)}</h4>
                      <p className="text-slate-500 font-bold text-[10px] leading-snug">{t(`heartSpecialist.svc${i}Desc`)}</p>
                    </div>
                  </div>
                ))}
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Symptoms & Approach - Tightly Packed */}
      <section className="py-8 md:py-10 bg-slate-900 text-white">
        <div className="max-w-[1420px] mx-auto px-6 sm:px-8 md:px-10 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="space-y-2">
                <h2 className="text-xl md:text-3xl font-black text-rose-400 uppercase">
                    {t("heartSpecialist.whenTitle")}
                </h2>
                <div className="h-1 w-16 bg-rose-600 rounded-full" />
              </div>
              <div className="grid sm:grid-cols-2 gap-2">
                  {[1, 2, 3, 4, 5, 6, 7].map((i) => (
                    <div key={i} className="flex items-center gap-2.5 p-3 rounded-lg bg-white/5 border border-white/10">
                      <CheckCircle2 className="w-4 h-4 text-rose-500 shrink-0" />
                      <span className="font-bold text-slate-200 text-[11px] tracking-tight">{t(`heartSpecialist.symptom${i}`)}</span>
                    </div>
                  ))}
              </div>
            </div>
            
            <div className="space-y-6">
               <h3 className="text-xl font-black border-b border-white/10 pb-3 uppercase">{t("heartSpecialist.approachTitle")}</h3>
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {["Diagnosis", "Treatment", "Monitoring", "Affordable"].map((id) => (
                  <div key={id} className="bg-white/5 p-4 rounded-xl border border-white/10 hover:border-rose-500/50 transition-all flex items-start gap-3">
                    <Activity className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
                    <div>
                        <h4 className="text-[11px] font-black text-rose-300 uppercase">{t(`heartSpecialist.approach${id}Title`)}</h4>
                        <p className="text-slate-400 text-[10px] font-bold leading-tight mt-1">{t(`heartSpecialist.approach${id}Desc`)}</p>
                    </div>
                  </div>
                ))}
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Tips & Standout - Minimal Gaps */}
      <section className="py-8 md:py-10 bg-white">
        <div className="max-w-[1420px] mx-auto px-6 sm:px-8 md:px-10 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-6">
             <div className="bg-slate-50 p-6 md:p-8 rounded-2xl border border-slate-100">
               <div className="flex items-center gap-3 mb-6">
                  <Heart className="w-5 h-5 text-rose-600" />
                  <h3 className="text-lg font-black text-slate-900 uppercase">{t("heartSpecialist.tipsTitle")}</h3>
               </div>
               <div className="grid gap-2">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <div key={i} className="flex items-center gap-3 p-3 bg-white rounded-lg shadow-sm border border-slate-100 border-l-4 border-l-[#9d174d]">
                    <div className="w-5 h-5 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold text-[9px] shrink-0">{i}</div>
                    <p className="font-bold text-slate-700 text-[11px] leading-snug">{t(`heartSpecialist.tip${i}`)}</p>
                  </div>
                ))}
               </div>
             </div>

             <div className="bg-[#9d174d] p-6 md:p-8 rounded-2xl text-white shadow-lg">
                <h3 className="text-lg font-black mb-6 uppercase">{t("heartSpecialist.standOutTitle")}</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {[1, 2, 3, 4, 5, 6].map((i) => (
                    <div key={i} className="flex items-center gap-3 p-3 rounded-lg bg-white/10 border border-white/20">
                      <CheckCircle2 className="w-4 h-4 text-white shrink-0" />
                      <span className="font-bold text-[11px] uppercase tracking-tight">{t(`heartSpecialist.standOut${i}`)}</span>
                    </div>
                  ))}
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* 6. Testimonials - Compact */}
      <section className="py-8 bg-slate-50">
        <div className="max-w-[1420px] mx-auto px-6 sm:px-8 md:px-10 lg:px-12">
          <div className="bg-white p-6 md:p-10 rounded-[2rem] relative text-center border border-slate-100 shadow-sm max-w-3xl mx-auto overflow-hidden">
             <QuoteIcon className="w-8 h-8 text-slate-100 absolute top-4 left-4" />
             <div className="space-y-6 relative z-10">
                <div key={currentTestimonial} className="animate-in fade-in duration-500">
                  <p className="text-sm md:text-lg text-slate-600 italic font-black mb-6">
                    &quot;{t(testimonialKeys[currentTestimonial].textKey)}&quot;
                  </p>
                  <p className="text-sm font-black text-gray-900 uppercase tracking-widest">{t(testimonialKeys[currentTestimonial].nameKey)}</p>
                  <div className="flex text-amber-400 justify-center gap-1 mt-2">
                    {[1, 2, 3, 4, 5].map((s) => <span key={s}>★</span>)}
                  </div>
                </div>
                <div className="flex justify-center gap-3">
                  <button onClick={prevTestimonial} className="p-2 rounded-lg bg-slate-50 hover:bg-[#9d174d] hover:text-white transition-all border border-slate-200">
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button onClick={nextTestimonial} className="p-2 rounded-lg bg-slate-50 hover:bg-[#9d174d] hover:text-white transition-all border border-slate-200">
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* 7. Contact CTA - Minimalist */}
      <section id="appointment" className="py-8 md:py-10 bg-white">
        <div className="max-w-[1420px] mx-auto px-6 sm:px-8 md:px-10 lg:px-12">
          <div className="bg-slate-950 rounded-[2rem] overflow-hidden p-6 md:p-10 text-white relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#9d174d]/30 to-transparent" />
              <div className="grid lg:grid-cols-[1.2fr,0.8fr] gap-10 relative z-10 items-center">
                  <div className="space-y-6">
                    <h2 className="text-2xl md:text-4xl font-black uppercase leading-tight">{t("heartSpecialist.contactTitle")}</h2>
                    <p className="text-sm text-slate-400 font-bold border-l-2 border-rose-500 pl-4 py-1 italic">
                      {t("heartSpecialist.contactDesc")}
                    </p>
                    <div className="flex flex-wrap gap-3">
                        <Link href="tel:+916397970802" className="flex items-center gap-3 bg-[#9d174d] px-6 py-4 rounded-xl hover:bg-[#831843] transition-all">
                            <Phone className="w-4 h-4" />
                            <div className="text-left">
                               <p className="text-[8px] uppercase font-black text-red-200 tracking-widest">EMERGENCY 24/7</p>
                               <p className="text-base font-black">+91 63979 70802</p>
                            </div>
                        </Link>
                        <Link href="/contact" className="flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white px-6 py-4 rounded-xl font-black text-[10px] uppercase tracking-widest transition-all">
                           <MapPin className="w-4 h-4" />
                           FIND US ON MAP
                        </Link>
                    </div>
                  </div>
                  <div className="bg-white/5 p-6 rounded-2xl border border-white/10 backdrop-blur-md flex flex-col items-center text-center">
                     <p className="text-[10px] font-black text-red-100 uppercase tracking-widest mb-2">Patient Focused Care</p>
                     <div className="h-0.5 w-10 bg-rose-500 mb-3" />
                     <p className="text-lg font-black uppercase text-white leading-tight">{t("heartSpecialist.ctaTitleHighlight")}</p>
                  </div>
              </div>
          </div>
        </div>
      </section>

      {/* Footer Link */}
      <div className="pb-10 text-center">
          <Link href="/services" className="text-slate-400 font-black text-[8px] tracking-[0.4em] uppercase hover:text-[#9d174d] transition-colors">
              {t("heartSpecialist.heartSpecialistConsultation")}
          </Link>
      </div>
    </div>
  );
}

function QuoteIcon(props: any) {
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
      <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 2.5 1 4.066 3 5v1c-1.5 0-3-1-3-4" />
      <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c1 0 1 0 1 1v1c0 2.5 1 4.066 3 5v1c-1.5 0-3-1-3-4" />
    </svg>
  );
}
