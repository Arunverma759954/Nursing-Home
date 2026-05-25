"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { ArrowLeft, Award, Baby, Briefcase, Calendar, CheckCircle2, GraduationCap, Heart, Phone, Sparkles, Users, HelpCircle, ChevronRight, Quote } from "lucide-react";
import { useLanguage } from "@/app/context/LanguageContext";

export default function DrSrishtiBhardwaj() {
    const { t } = useLanguage();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="bg-white min-h-screen animate-page-enter pt-24">
            {/* Hero Section - Refined Height */}
            <div className="relative min-h-[300px] md:min-h-[400px] flex items-center overflow-hidden bg-gradient-to-br from-[#800020] via-[#a52a2a] to-[#800020]">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.4\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }}></div>
                </div>

                <div className="container mx-auto px-6 z-10 relative">
                    <Link href="/#doctors" className="inline-flex items-center gap-2 text-white/90 hover:text-white transition-colors mb-4 md:mb-6 group">
                        <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                        <span className="font-bold">{t("doctors.backToDoctors")}</span>
                    </Link>

                    <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
                        <div className="space-y-4 md:space-y-6">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs md:text-sm font-bold uppercase tracking-wider">
                                <Sparkles className="w-4 h-4 fill-current" />
                                <span>{t("doctors.srishti.badge")}</span>
                            </div>
                            <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-white leading-tight">
                                Dr. Srishti Bhardwaj
                            </h1>
                            <p className="text-lg md:text-xl text-rose-200 font-bold uppercase tracking-widest leading-relaxed">
                                {t("doctors.srishti.tagline")}
                            </p>
                            <div className="flex flex-wrap gap-4 pt-2">
                                <div className="flex items-center gap-2 text-white/90">
                                    <Award className="w-5 h-5 text-yellow-400" />
                                    <span className="font-bold text-sm">10+ Years Experience</span>
                                </div>
                                <div className="flex items-center gap-2 text-white/90">
                                    <Baby className="w-5 h-5 text-rose-300" />
                                    <span className="font-bold text-sm">2,000+ Safe Deliveries</span>
                                </div>
                            </div>
                        </div>

                        <div className="relative h-[250px] md:h-[350px] lg:h-[450px] flex items-end">
                            <div className="relative w-full h-full">
                                <Image
                                    src="/raj/dr-Srishti.jpg"
                                    alt="Dr. Srishti Bhardwaj"
                                    fill
                                    className="object-contain object-bottom drop-shadow-2xl"
                                    priority
                                />
                            </div>
                            {/* Registration Badge */}
                            <div className="absolute top-10 right-0 bg-white/90 backdrop-blur-md px-6 py-3 rounded-2xl border border-rose-200 shadow-xl hidden md:block">
                                <p className="text-rose-900 font-bold text-xs uppercase tracking-widest mb-1">{t("doctors.regNo")}</p>
                                <p className="text-rose-600 font-bold text-lg">96831</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Content Container */}
            <div className="max-w-[1420px] mx-auto px-6 sm:px-8 md:px-10 lg:px-12 py-12 md:py-16">
                
                {/* About & Specialist Summary */}
                <div className="grid lg:grid-cols-[1.2fr,0.8fr] gap-10 md:gap-16 items-start mb-16 md:mb-24">
                    <div className="space-y-10">
                        <div className="space-y-4">
                            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 tracking-tight">
                                {t("doctors.srishti.aboutTitle")}
                            </h2>
                            <div className="h-1.5 w-20 bg-rose-600 rounded-full"></div>
                        </div>
                        <div className="space-y-8 text-gray-700 text-lg leading-relaxed font-medium">
                            <p>{t("doctors.srishti.about1")}</p>
                            <p>{t("doctors.srishti.about2")}</p>
                            
                            {/* Specialization Block */}
                            <div className="bg-rose-50 p-6 md:p-8 rounded-[2rem] border border-rose-100 space-y-4">
                                <h3 className="text-xl font-bold text-rose-900 tracking-tight">
                                    {t("doctors.srishti.specializationTitle")}
                                </h3>
                                <p className="text-rose-700 font-bold text-base leading-relaxed italic">
                                    {t("doctors.srishti.specializationSubtitle")}
                                </p>
                                <p className="text-gray-600 font-medium text-base">
                                    {t("doctors.srishti.specializationDesc")}
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-8">
                        <div className="p-8 bg-white border border-gray-100 shadow-xl rounded-[2.5rem] relative overflow-hidden group">
                           <div className="absolute top-0 right-0 p-8 opacity-5">
                                <Quote className="w-20 h-20 text-rose-600" />
                           </div>
                           <h3 className="text-xl font-bold mb-6 text-gray-900 border-b border-gray-50 pb-4">
                                {t("doctors.srishti.expertiseTitle")}
                           </h3>
                           <div className="space-y-6">
                                {["1", "2", "3", "4", "5"].map((k) => (
                                    <div key={k} className="flex gap-4">
                                        <div className="w-10 h-10 bg-rose-50 text-rose-600 rounded-xl flex items-center justify-center shrink-0 font-bold">
                                            {k}
                                        </div>
                                        <p className="font-bold text-gray-700 text-sm md:text-base leading-relaxed">
                                            {t(`doctors.srishti.exp${k}`)}
                                        </p>
                                    </div>
                                ))}
                           </div>
                        </div>
                        
                        <div className="bg-[#800020] p-10 rounded-[2.5rem] text-white shadow-2xl space-y-6">
                            <p className="text-lg font-bold italic border-l-4 border-rose-300 pl-6">
                                "{t("doctors.srishti.quote")}"
                            </p>
                            <Link href="tel:+919958314740" className="flex items-center justify-center gap-4 bg-white text-rose-900 py-5 rounded-2xl font-bold text-lg shadow-lg hover:bg-rose-50 transition-all">
                                <Phone className="w-6 h-6" /> {t("doctors.bookAppointment")}
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Service Grids - Full Range */}
                <div className="space-y-12 mb-16 md:mb-24">
                    <div className="text-center max-w-3xl mx-auto space-y-4">
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 tracking-tight">
                            {t("doctors.srishti.leadingTitle")}
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                        {[
                            { title: "doctors.srishti.generalGynaeTitle", count: 9, prefix: "generalGynae", color: "border-rose-500 bg-rose-50/30" },
                            { title: "doctors.srishti.pregnancyMaternityTitle", count: 6, prefix: "pregnancy", color: "border-pink-500 bg-pink-50/30" },
                            { title: "doctors.srishti.infertilityTitle", count: 6, prefix: "infertility", color: "border-red-500 bg-red-50/30" },
                            { title: "doctors.srishti.surgeriesTitle", count: 4, prefix: "surgery", color: "border-maroon-500 bg-orange-50/30" },
                            { title: "doctors.srishti.adolescentMenopauseTitle", count: 4, prefix: "menopause", color: "border-rose-700 bg-rose-100/30" },
                            { title: "doctors.srishti.urogynaeTitle", count: 3, prefix: "urogynae", color: "border-red-700 bg-red-100/30" }
                        ].map((section, idx) => (
                            <div key={idx} className={`p-6 md:p-8 rounded-[1.5rem] border-l-[6px] ${section.color} shadow-sm hover:shadow-md transition-all group`}>
                                <h3 className="font-bold text-gray-900 text-lg mb-4 md:mb-6 leading-tight">{t(section.title)}</h3>
                                <ul className="space-y-3">
                                    {Array.from({ length: section.count }).map((_, i) => (
                                        <li key={i} className="flex items-start gap-2 text-sm font-bold text-gray-600">
                                            <CheckCircle2 className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                                            <span>{t(`doctors.srishti.${section.prefix}${i + 1}`)}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                {/* FAQ Section - Every Word Included */}
                <div className="bg-gray-50 rounded-[3rem] md:rounded-[4rem] p-8 md:p-12 lg:p-16 border border-gray-100 mb-16 md:mb-24">
                    <div className="text-center mb-12 space-y-4">
                        <HelpCircle className="w-10 h-10 md:w-12 md:h-12 text-rose-600 mx-auto" />
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 tracking-tight">Frequently Asked Questions</h2>
                    </div>
                    <div className="max-w-4xl mx-auto grid gap-8">
                        {[1, 2, 3, 4].map((i) => (
                            <div key={i} className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                                <div className="flex gap-4 mb-4">
                                    <div className="w-8 h-8 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center font-bold shrink-0">Q</div>
                                    <h4 className="text-lg md:text-xl font-bold text-gray-900 tracking-tight leading-tight">
                                        {t(`doctors.srishti.faq${i}Quest`)}
                                    </h4>
                                </div>
                                <div className="flex gap-4 pl-12 border-l-2 border-rose-50">
                                    <p className="text-gray-600 font-medium leading-relaxed italic md:text-lg">
                                        {t(`doctors.srishti.faq${i}Ans`)}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Final CTA Card */}
                <div className="relative rounded-[2.5rem] md:rounded-[3.5rem] overflow-hidden bg-gradient-to-r from-[#5a001a] to-[#800020] p-8 md:p-16 lg:p-20 text-white group shadow-2xl">
                    <div className="absolute top-0 right-0 p-12 opacity-10 blur-2xl bg-white w-64 h-64 rounded-full -translate-y-1/2 translate-x-1/2" />
                    <div className="relative z-10 grid lg:grid-cols-[1fr,0.8fr] gap-10 lg:gap-12 items-center">
                        <div className="space-y-6 md:space-y-8 text-center lg:text-left">
                            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold leading-tight tracking-tight">
                                {t("doctors.srishti.ctaHeading")}
                            </h2>
                            <p className="text-lg md:text-xl text-rose-100 font-bold opacity-90 max-w-xl">
                                {t("doctors.srishti.ctaSub")}
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                                <Link href="tel:+919958314740" className="flex items-center justify-center gap-3 bg-white text-rose-900 px-8 py-5 rounded-xl font-bold text-lg shadow-xl hover:scale-105 transition-all">
                                    <Phone className="w-6 h-6 fill-rose-900" /> +91-9958314740
                                </Link>
                                <Link href="/womens-health-in-hapur" className="flex items-center justify-center gap-3 bg-white/10 backdrop-blur-md border-2 border-white/30 text-white px-8 py-5 rounded-xl font-bold text-lg hover:bg-white/20 transition-all uppercase tracking-widest text-sm md:text-base">
                                    Visit Health Wing
                                </Link>
                            </div>
                        </div>
                        <div className="relative h-[400px] rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white/20 group-hover:scale-105 transition-transform duration-1000 hidden lg:block">
                            <Image src="/raj/gyne.jpg" alt="Excellence in Maternity" fill className="object-cover" />
                             <div className="absolute inset-0 bg-gradient-to-t from-[#800020]/60 to-transparent" />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
