"use client";

import Image from "next/image";
import Link from "next/link";
import { Wind, Activity, ShieldCheck, Clock, ArrowRight, UserCheck, Stethoscope, Sparkles, Phone, Shield, Search, BookOpen, HeartPulse, Microscope } from "lucide-react";
import { useLanguage } from "@/app/context/LanguageContext";

export default function PFTTestingPage() {
    const { t } = useLanguage();

    return (
        <div className="bg-white min-h-screen animate-page-enter mt-32">
            {/* Hero Section - Simplified */}
            <div className="relative min-h-[350px] md:min-h-[450px] flex items-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/pft.jpg"
                        alt="PFT Testing & Respiratory Center"
                        fill
                        className="object-cover object-center"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#155e75] via-[#155e75]/90 to-[#155e75]/40 z-10" />
                </div>
                <div className="relative z-20 max-w-[1420px] mx-auto px-6 sm:px-8 md:px-10 lg:px-12 w-full py-12">
                    <div className="max-w-4xl space-y-6">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs md:text-sm font-bold tracking-widest uppercase">
                            <Sparkles className="w-4 h-4 text-cyan-300 fill-cyan-300" />
                            <span>{t("pftTesting.badge")}</span>
                        </div>
                        <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-white leading-[1.1] tracking-tight">
                            {t("pftTesting.heroTitle")}<br />
                            <span className="text-cyan-300 drop-shadow-sm">{t("pftTesting.heroTitleHighlight")}</span>
                        </h1>
                        <div className="flex flex-wrap gap-4 pt-2">
                            <Link href="#appointment" className="px-8 py-4 bg-cyan-500 text-white rounded-xl font-bold text-sm uppercase tracking-widest shadow-lg hover:bg-cyan-400 transition-all hover:-translate-y-1">
                                {t("pftTesting.bookCta")} <ArrowRight className="w-5 h-5 ml-2 inline" />
                            </Link>
                            <nav className="flex items-center text-xs md:text-sm text-white/80 font-semibold bg-white/5 backdrop-blur-sm px-5 py-2 rounded-lg border border-white/10">
                                <Link href="/" className="hover:text-cyan-300 transition-colors">{t("pftTesting.home")}</Link>
                                <span className="mx-2 opacity-50">/</span>
                                <span className="text-white">{t("pftTesting.breadcrumbCurrent")}</span>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>

            {/* New Intro Section - Moved from Hero */}
            <div className="bg-gray-50 border-b border-gray-100">
                <div className="max-w-[1420px] mx-auto px-6 sm:px-8 md:px-10 lg:px-12 py-12 md:py-16 text-center lg:text-left">
                    <div className="max-w-4xl space-y-6 mx-auto lg:mx-0">
                        <p className="text-xl md:text-2xl text-cyan-900 font-bold leading-relaxed">
                            {t("pftTesting.heroDesc")}
                        </p>
                        <p className="text-base md:text-lg text-gray-600 leading-relaxed font-medium">
                            {t("pftTesting.heroP1")}
                        </p>
                    </div>
                </div>
            </div>

            {/* Main Content Container */}
            <div className="max-w-[1420px] mx-auto px-6 sm:px-8 md:px-10 lg:px-12 py-16 md:py-24">
                
                {/* Stats Grid - Reduced padding */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-20 md:mb-24">
                    {[
                        { icon: Wind, labelKey: "pftTesting.stat1", color: "text-cyan-600 bg-cyan-50" },
                        { icon: Stethoscope, labelKey: "pftTesting.stat2", color: "text-rose-600 bg-rose-50" },
                        { icon: Activity, labelKey: "pftTesting.stat3", color: "text-amber-600 bg-amber-50" },
                        { icon: UserCheck, labelKey: "pftTesting.stat4", color: "text-emerald-600 bg-emerald-50" },
                    ].map((item, idx) => (
                        <div key={idx} className="bg-white border border-gray-100 p-6 md:p-8 rounded-[2rem] shadow-sm hover:shadow-md transition-all duration-300 group text-center flex flex-col items-center text-center">
                            <div className={`p-4 rounded-2xl ${item.color} group-hover:scale-105 transition-transform duration-300 mb-4`}>
                                <item.icon className="w-6 h-6 md:w-8 md:h-8" />
                            </div>
                            <span className="font-bold text-gray-900 text-base md:text-lg tracking-tight leading-tight">{t(item.labelKey)}</span>
                        </div>
                    ))}
                </div>

                {/* Section 1: Basics - More compact */}
                <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center mb-24 md:mb-32">
                    <div className="space-y-8">
                        <div className="space-y-4">
                            <span className="inline-block px-3 py-1 rounded bg-cyan-50 text-cyan-700 font-bold tracking-widest uppercase text-xs">
                                {t("pftTesting.introLabel")}
                            </span>
                            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight tracking-tight">
                                {t("pftTesting.basicsTitle")}
                            </h2>
                        </div>
                        <p className="text-lg text-gray-700 font-bold leading-relaxed">
                            {t("pftTesting.basicsDesc")}
                        </p>
                        <div className="grid sm:grid-cols-2 gap-4">
                            <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100">
                                <ShieldCheck className="w-8 h-8 text-cyan-600 mb-3" />
                                <h5 className="font-bold text-gray-900 mb-1 text-base">{t("pftTesting.nonInvasive")}</h5>
                                <p className="text-gray-500 font-medium text-xs md:text-sm">{t("pftTesting.nonInvasiveDesc")}</p>
                            </div>
                            <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100">
                                <Search className="w-8 h-8 text-cyan-600 mb-3" />
                                <h5 className="font-bold text-gray-900 mb-1 text-base">{t("pftTesting.fastInterpretation")}</h5>
                                <p className="text-gray-500 font-medium text-xs md:text-sm">{t("pftTesting.fastInterpretationDesc")}</p>
                            </div>
                        </div>
                    </div>
                    <div className="relative rounded-[2.5rem] overflow-hidden shadow-xl min-h-[400px]">
                        <Image
                            src="/pft2.jpg"
                            alt="Respiratory Analysis"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>

                {/* Significance & Asthma - More compact */}
                <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-24 md:mb-32">
                    <div className="bg-white p-8 md:p-10 rounded-[2rem] border border-gray-100 shadow-sm space-y-6 border-l-8 border-l-cyan-500">
                        <h3 className="text-xl md:text-2xl font-bold text-gray-900 tracking-tight">{t("pftTesting.sigTitle")}</h3>
                        <p className="text-gray-600 font-medium leading-relaxed italic">
                            {t("pftTesting.sigDesc")}
                        </p>
                    </div>
                    <div className="bg-white p-8 md:p-10 rounded-[2rem] border border-gray-100 shadow-sm space-y-6 border-l-8 border-l-rose-500">
                        <h3 className="text-xl md:text-2xl font-bold text-gray-900 tracking-tight">{t("pftTesting.asthmaTitle")}</h3>
                        <p className="text-gray-600 font-medium leading-relaxed italic">
                            {t("pftTesting.asthmaDesc")}
                        </p>
                    </div>
                </div>

                {/* COPD & Prevention - More compact */}
                <div className="grid lg:grid-cols-2 gap-12 items-center mb-24 md:mb-32">
                    <div className="relative rounded-[2.5rem] overflow-hidden shadow-xl h-[350px] lg:order-2">
                        <Image src="/pft.jpg" alt="Respiratory Care" fill className="object-cover" />
                    </div>
                    <div className="space-y-8 lg:order-1">
                        <div className="space-y-4">
                            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 tracking-tight">
                                {t("pftTesting.copdTitle")}
                            </h3>
                            <p className="text-gray-600 text-lg font-medium leading-relaxed">
                                {t("pftTesting.copdDesc")}
                            </p>
                        </div>
                        <div className="p-8 bg-rose-50 rounded-2xl border border-rose-100 space-y-3">
                            <p className="font-bold text-rose-700 uppercase tracking-widest text-xs">{t("pftTesting.preventionTitle")}</p>
                            <p className="text-gray-700 text-base md:text-lg font-bold leading-relaxed italic">
                                &quot;{t("pftTesting.preventionDesc")}&quot;
                            </p>
                        </div>
                    </div>
                </div>

                {/* Process & Preparation - Simplified */}
                <div className="space-y-10 mb-24 md:mb-32">
                    <div className="text-center max-w-2xl mx-auto">
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 tracking-tight">{t("pftTesting.processTitle")}</h2>
                    </div>

                    <div className="grid lg:grid-cols-[1fr,0.7fr] gap-8">
                        <div className="bg-white p-8 md:p-12 rounded-[2.5rem] border border-gray-100 shadow-sm space-y-8">
                            <div className="space-y-6">
                                <p className="text-lg md:text-xl text-gray-900 font-bold leading-tight">
                                    {t("pftTesting.processDesc")}
                                </p>
                                <div className="space-y-4">
                                    <h4 className="font-bold text-cyan-700 text-sm tracking-widest uppercase">{t("pftTesting.procedureStepsTitle")}</h4>
                                    <div className="grid sm:grid-cols-2 gap-3">
                                        {[
                                            t("pftTesting.procedureL1"),
                                            t("pftTesting.procedureL2"),
                                            t("pftTesting.procedureL3"),
                                            t("pftTesting.procedureL4")
                                        ].map((li, i) => (
                                            <div key={i} className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl border border-gray-100 font-bold text-gray-700">
                                                <div className="w-2 h-2 rounded-full bg-cyan-500 shrink-0"></div>
                                                <span className="text-sm">{li}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="pt-6 border-t border-gray-100">
                                    <h4 className="font-bold text-cyan-700 text-sm tracking-widest uppercase mb-3">{t("pftTesting.interpretationTitle")}</h4>
                                    <p className="text-gray-600 font-medium leading-relaxed italic text-sm md:text-base">
                                        {t("pftTesting.interpretationDesc")}
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-cyan-700 p-8 md:p-10 rounded-[2.5rem] text-white shadow-lg space-y-8 text-center sm:text-left">
                            <div className="space-y-3">
                                <h3 className="text-2xl font-bold tracking-tight">{t("pftTesting.preTestTitle")}</h3>
                                <p className="text-cyan-100 font-medium text-base">
                                    {t("pftTesting.preTestIntro")}
                                </p>
                            </div>
                            <div className="space-y-6">
                                {[
                                    { titleKey: "pftTesting.preTest1Title", descKey: "pftTesting.preTest1Desc" },
                                    { titleKey: "pftTesting.preTest2Title", descKey: "pftTesting.preTest2Desc" },
                                    { titleKey: "pftTesting.preTest3Title", descKey: "pftTesting.preTest3Desc" }
                                ].map((item, i) => (
                                    <div key={i} className="space-y-1">
                                        <p className="font-bold text-lg tracking-tight">{t(item.titleKey)}</p>
                                        <p className="text-cyan-100/80 text-sm font-medium">{t(item.descKey)}</p>
                                    </div>
                                ))}
                            </div>
                            <p className="text-cyan-200 font-bold italic text-sm pt-4 border-t border-white/10">
                                {t("pftTesting.comfortDesc")}
                            </p>
                        </div>
                    </div>
                </div>

                {/* Final CTA - More compact */}
                <div id="appointment" className="relative rounded-[3rem] overflow-hidden bg-gradient-to-br from-cyan-600 to-cyan-800 p-10 md:p-16 text-white group shadow-xl">
                    <div className="grid lg:grid-cols-[1fr,0.6fr] gap-12 items-center relative z-10">
                        <div className="space-y-8 text-center lg:text-left">
                            <div className="space-y-3">
                                <span className="font-bold tracking-[0.2em] uppercase text-xs text-cyan-200">{t("pftTesting.finalTitle")}</span>
                                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight tracking-tight">
                                    {t("pftTesting.ctaTitle")}<br />
                                    <span className="text-cyan-300">{t("pftTesting.ctaHighlight")}</span>
                                </h2>
                            </div>
                            <p className="text-lg md:text-xl text-white/90 font-bold">
                                {t("pftTesting.ctaDesc")}
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                                <Link href="tel:+919958314740" className="flex items-center justify-center gap-3 bg-white text-cyan-900 px-8 py-5 rounded-xl font-bold text-lg shadow-lg hover:bg-gray-50 transition-all">
                                    <Phone className="w-6 h-6 fill-cyan-900" /> +91-9958314740
                                </Link>
                                <Link href="/contact" className="flex items-center justify-center gap-3 bg-cyan-900/40 backdrop-blur-md border border-white/30 text-white px-8 py-5 rounded-xl font-bold text-lg hover:bg-cyan-900/60 transition-all uppercase tracking-widest text-center text-sm md:text-base">
                                    {t("pftTesting.visitCenter")}
                                </Link>
                            </div>
                        </div>
                        <div className="relative h-[400px] rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white/20 hidden lg:block">
                            <Image src="/pft2.jpg" alt="PFT Excellence" fill className="object-cover" />
                        </div>
                    </div>
                </div>

                {/* Conclusion - Simplified */}
                <div className="mt-24 md:mt-32 text-center py-16 px-6 bg-gray-50 rounded-[2.5rem]">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 tracking-tight italic">
                        {t("pftTesting.conclusionTitle")}
                    </h2>
                    <p className="leading-relaxed text-gray-600 text-lg md:text-xl font-bold max-w-4xl mx-auto mb-8">
                        &quot;{t("pftTesting.conclusionDesc")}&quot;
                    </p>
                    <p className="text-gray-400 font-bold tracking-widest uppercase text-xs">
                        {t("pftTesting.partnerTitle")}
                    </p>
                </div>

            </div>
        </div>
    );
}
