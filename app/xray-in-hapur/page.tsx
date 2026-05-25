"use client";

import Image from "next/image";
import Link from "next/link";
import { Zap, Activity, ShieldCheck, Clock, ArrowRight, UserCheck, Microscope, Camera, Sparkles, Phone, ShieldAlert, Heart, Building2, CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/app/context/LanguageContext";

export default function XrayPage() {
    const { t } = useLanguage();

    return (
        <div className="bg-white min-h-screen selection:bg-[#9d174d] selection:text-white pt-24">
            {/* Hero Section */}
            <section className="relative min-h-[380px] md:min-h-[500px] flex items-center overflow-hidden">
                <div className="absolute inset-0">
                    <Image
                        src="/raj/banner1.webp"
                        alt="Digital X-Ray Center"
                        fill
                        className="object-cover grayscale-[0.2] opacity-40"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-[#1e1b4b] via-[#4c1d95]/90 to-[#9d174d]/80" />
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/asfalt-light.png')] opacity-10" />
                </div>
                
                <div className="max-w-[1420px] mx-auto px-6 sm:px-8 md:px-10 lg:px-12 py-16 relative z-10 w-full text-center lg:text-left">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white text-xs font-bold uppercase tracking-[0.2em] mb-8 backdrop-blur-md shadow-2xl">
                        <Sparkles className="w-4 h-4 text-emerald-400" />
                        <span>{t("digitalXRay.badge")}</span>
                    </div>
                    
                    <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight max-w-4xl mb-6">
                        {t("digitalXRay.heroTitle")}<br /> 
                        <span className="text-emerald-400">{t("digitalXRay.heroTitleHighlight")}</span>
                    </h1>
                    
                    <p className="text-base md:text-xl text-white/90 leading-relaxed font-semibold italic border-l-4 border-emerald-400 pl-6 max-w-3xl mb-10">
                        {t("digitalXRay.heroDesc")}
                    </p>

                    <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                        <Link href="tel:+916397970802" className="px-8 py-4 bg-[#9d174d] text-white rounded-2xl font-bold text-sm uppercase tracking-widest shadow-xl hover:bg-[#831843] transition-all">
                             {t("digitalXRay.bookCta")}
                        </Link>
                        <nav className="flex items-center text-sm text-white/70 font-bold bg-white/10 px-6 py-4 rounded-2xl backdrop-blur-sm">
                            <Link href="/" className="hover:text-white transition-colors">{t("digitalXRay.home")}</Link>
                            <span className="mx-2 opacity-50">/</span>
                            <span className="text-white">{t("digitalXRay.breadcrumbCurrent")}</span>
                        </nav>
                    </div>
                </div>
            </section>

            {/* Importance Section */}
            <section className="py-16 md:py-20 bg-slate-50 relative overflow-hidden">
                <div className="max-w-[1420px] mx-auto px-6 sm:px-8 md:px-10 lg:px-12">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-8">
                            <h2 className="text-2xl md:text-4xl font-bold text-slate-900 leading-tight tracking-tight">
                                {t("digitalXRay.importanceTitle")}
                            </h2>
                            <div className="w-16 h-1.5 bg-[#9d174d] rounded-full" />
                            <p className="text-lg text-slate-600 font-semibold leading-relaxed italic border-l-4 border-[#9d174d] pl-6">
                                {t("digitalXRay.importanceDesc")}
                            </p>
                            
                            <div className="grid sm:grid-cols-2 gap-4 pt-4">
                                {[
                                    { icon: Camera, labelKey: "digitalXRay.stat1", color: "text-blue-600" },
                                    { icon: ShieldAlert, labelKey: "digitalXRay.stat2", color: "text-emerald-600" },
                                    { icon: Clock, labelKey: "digitalXRay.stat3", color: "text-amber-600" },
                                    { icon: Microscope, labelKey: "digitalXRay.stat4", color: "text-[#9d174d]" },
                                ].map((item, idx) => (
                                    <div key={idx} className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm flex items-center gap-4 group hover:shadow-md transition-all">
                                        <div className={`w-10 h-10 ${item.color} bg-slate-50 rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform`}>
                                            <item.icon className="w-5 h-5" />
                                        </div>
                                        <span className="font-semibold text-slate-800 text-sm">{t(item.labelKey)}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="relative h-[400px] md:h-[600px] rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white group">
                            <Image src="/xray.jpg" alt="Digital Diagnostic" fill className="object-cover group-hover:scale-105 transition-transform duration-1000" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Comprehensive Services Section */}
            <section className="py-16 md:py-20 bg-white">
                <div className="max-w-[1420px] mx-auto px-6 sm:px-8 md:px-10 lg:px-12">
                     <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
                        <span className="text-[#9d174d] font-bold uppercase tracking-[0.2em] text-xs bg-red-50 px-5 py-2 rounded-full inline-block">Specialized Imaging</span>
                        <h2 className="text-2xl md:text-4xl font-bold text-slate-900 tracking-tight">Types of X-Ray Services Available</h2>
                        <div className="h-1.5 w-20 bg-slate-200 mx-auto rounded-full" />
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        {[
                            { key: "chest", icon: Heart, color: "bg-blue-50 text-blue-600" },
                            { key: "fracture", icon: Zap, color: "bg-amber-50 text-amber-600" },
                            { key: "general", icon: Microscope, color: "bg-emerald-50 text-emerald-600" },
                            { key: "clinic", icon: Building2, color: "bg-[#9d174d]/5 text-[#9d174d]" }
                        ].map((svc, i) => (
                            <div key={i} className="group bg-slate-50 p-8 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-lg hover:bg-white transition-all duration-500">
                                <div className={`w-14 h-14 ${svc.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-sm`}>
                                    <svc.icon className="w-7 h-7" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-4 tracking-tight group-hover:text-[#9d174d] transition-colors">{t(`digitalXRay.${svc.key}Title`)}</h3>
                                <p className="text-slate-600 font-semibold leading-relaxed italic border-l-4 border-slate-200 pl-6 group-hover:border-[#9d174d] transition-colors text-sm">
                                    {t(`digitalXRay.${svc.key}Desc`)}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Section */}
            <section className="py-16 md:py-20 bg-slate-900 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(157,23,77,0.15),transparent_40%)]" />
                <div className="max-w-[1420px] mx-auto px-6 sm:px-8 md:px-10 lg:px-12 relative z-10">
                    <div className="grid lg:grid-cols-[1.2fr,0.8fr] gap-12 lg:gap-20 items-center">
                        <div className="space-y-10">
                             <div className="space-y-4">
                                <h2 className="text-2xl md:text-4xl font-bold tracking-tight">{t("digitalXRay.whyTitle")}</h2>
                                <div className="h-1.5 w-20 bg-[#9d174d] rounded-full" />
                             </div>
                             <div className="grid gap-4">
                                {[1, 2, 3, 4, 5].map((idx) => (
                                    <div key={idx} className="flex items-start gap-4 bg-white/5 p-4 rounded-2xl border border-white/10 group hover:bg-white/10 transition-all">
                                        <div className="w-8 h-8 bg-[#9d174d] rounded-lg flex items-center justify-center shrink-0 shadow-lg group-hover:rotate-6 transition-transform">
                                            <CheckCircle2 className="w-5 h-5 text-white" />
                                        </div>
                                        <p className="text-base font-semibold text-slate-200 leading-snug">
                                            {t(`digitalXRay.whyPoint${idx}`)}
                                        </p>
                                    </div>
                                ))}
                             </div>
                        </div>
                        <div className="space-y-12">
                            <div className="bg-white/5 p-10 rounded-[3rem] border border-white/10 space-y-8 backdrop-blur-md">
                                <h3 className="text-2xl font-bold border-b border-white/10 pb-4">{t("digitalXRay.roleTitle")}</h3>
                                <p className="text-slate-400 font-bold italic leading-relaxed text-lg">
                                    {t("digitalXRay.roleDesc")}
                                </p>
                            </div>
                            <div className="bg-[#9d174d] p-10 rounded-[3rem] shadow-2xl space-y-8 relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-3xl -mr-16 -mt-16" />
                                <h3 className="text-2xl font-bold">{t("digitalXRay.supportTitle")}</h3>
                                <p className="font-bold text-red-50 leading-relaxed italic border-l-4 border-white/20 pl-6">
                                    {t("digitalXRay.supportDesc")}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Trusted Partner Section */}
            <section className="py-16 md:py-20 bg-white">
                <div className="max-w-[1420px] mx-auto px-6 sm:px-8 md:px-10 lg:px-12">
                    <div className="bg-slate-50 p-8 md:p-16 rounded-[3rem] border border-slate-100 text-center space-y-10 relative overflow-hidden group shadow-lg">
                        <Quote className="w-16 h-16 text-[#9d174d]/10 absolute top-6 left-6" />
                        <div className="max-w-4xl mx-auto space-y-8 relative z-10">
                            <h2 className="text-2xl md:text-4xl font-bold text-slate-900 tracking-tight leading-tight">
                                {t("digitalXRay.partnerTitle")}
                            </h2>
                            <p className="text-lg md:text-xl text-slate-600 font-semibold leading-relaxed italic">
                                {t("digitalXRay.partnerQuote")}
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                                <Link href="tel:+916397970802" className="px-8 py-5 bg-[#9d174d] text-white rounded-2xl font-bold text-lg shadow-xl hover:scale-105 transition-all">
                                    CALL NOW: +91 63979 70802
                                </Link>
                                <Link href="/contact" className="px-8 py-5 bg-slate-900 text-white rounded-2xl font-bold text-lg hover:scale-105 transition-all">
                                    BOOK APPOINTMENT
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Bottom Padding */}
            <div className="h-20" />
        </div>
    );
}

function Quote(props: any) {
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
    )
}
