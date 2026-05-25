"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { ArrowLeft, Award, Briefcase, Calendar, CheckCircle2, Clock, GraduationCap, Heart, Phone, ScissorsIcon, Users, HelpCircle, Sparkles, ChevronRight, Quote } from "lucide-react";
import { useLanguage } from "@/app/context/LanguageContext";

export default function DrMCSharma() {
    const { t } = useLanguage();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="bg-white min-h-screen animate-page-enter pt-24">
            {/* Hero Section - Refined Height and Premium Look */}
            <div className="relative min-h-[300px] md:min-h-[400px] flex items-center overflow-hidden bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a]">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.2\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }}></div>
                </div>

                <div className="container mx-auto px-6 z-10 relative">
                    <Link href="/#doctors" className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors mb-4 md:mb-6 group">
                        <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                        <span className="font-bold">{t("doctors.backToDoctors")}</span>
                    </Link>

                    <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
                        <div className="space-y-4 md:space-y-6">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-white text-xs md:text-sm font-bold uppercase tracking-wider">
                                <Sparkles className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                                <span>{t("doctors.mcSharma.badge")}</span>
                            </div>
                            <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-white leading-tight tracking-tight">
                                Dr. M.C. Sharma
                            </h1>
                            <p className="text-lg md:text-xl text-slate-300 font-bold uppercase tracking-widest leading-relaxed">
                                {t("doctors.mcSharma.tagline")}
                            </p>
                            <div className="flex flex-wrap gap-4 pt-2">
                                <div className="flex items-center gap-2 text-white/90">
                                    <Award className="w-5 h-5 text-yellow-400" />
                                    <span className="font-bold text-sm">25+ Years Experience</span>
                                </div>
                                <div className="flex items-center gap-2 text-white/90">
                                    <Users className="w-5 h-5 text-blue-400" />
                                    <span className="font-bold text-sm">1,500+ Successful Surgeries</span>
                                </div>
                            </div>
                        </div>

                        <div className="relative h-[250px] md:h-[350px] lg:h-[450px] flex items-end">
                            <div className="relative w-full h-full">
                                <Image
                                    src="/raj/M.C.Sharma.jpg"
                                    alt="Dr. M.C. Sharma"
                                    fill
                                    className="object-contain object-bottom drop-shadow-2xl grayscale-[0.2] hover:grayscale-0 transition-all duration-700"
                                    priority
                                />
                            </div>
                            {/* Registration Badge */}
                            <div className="absolute top-10 right-0 bg-white/90 backdrop-blur-md px-6 py-3 rounded-2xl border border-slate-200 shadow-xl hidden md:block">
                                <p className="text-slate-500 font-bold text-xs uppercase tracking-widest mb-1">{t("doctors.regNo")}</p>
                                <p className="text-slate-900 font-bold text-lg">49495</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Quick Info Bar */}
            <div className="max-w-[1420px] mx-auto px-6 sm:px-8 md:px-10 lg:px-12 -mt-10 relative z-20">
                <div className="grid md:grid-cols-3 gap-6">
                    {[
                        { icon: GraduationCap, labelKey: "doctors.qualification", value: "MBBS, MS - Surgery", color: "text-blue-600" },
                        { icon: Briefcase, labelKey: "doctors.regNo", value: "49495", color: "text-indigo-600" },
                        { icon: Clock, labelKey: "doctors.opdHours", value: t("doctors.mcSharma.opdHoursVal"), color: "text-slate-800" }
                    ].map((item, i) => (
                        <div key={i} className="bg-white rounded-3xl p-6 shadow-xl border border-gray-100 flex items-center gap-6">
                            <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center shrink-0">
                                <item.icon className={`w-7 h-7 ${item.color}`} />
                            </div>
                            <div>
                                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-0.5">{t(item.labelKey)}</p>
                                <p className="text-base md:text-lg font-bold text-gray-900">{item.value}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Main Content Sections */}
            <div className="max-w-[1420px] mx-auto px-6 sm:px-8 md:px-10 lg:px-12 py-12 md:py-16">
                
                {/* About Section */}
                <div className="grid lg:grid-cols-[1.2fr,0.8fr] gap-10 md:gap-16 items-start mb-16 md:mb-24">
                    <div className="space-y-10">
                        <div className="space-y-6">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
                                {t("doctors.mcSharma.aboutTitle")}
                            </h2>
                            <div className="h-1.5 w-20 bg-[#0f172a] rounded-full"></div>
                        </div>
                        <div className="space-y-8 text-gray-700 text-lg leading-relaxed font-medium">
                            <p className="text-slate-900 font-semibold italic border-l-4 border-slate-900 pl-6 bg-slate-50 py-4 rounded-r-2xl">
                                {t("doctors.mcSharma.about1")}
                            </p>
                            <p>{t("doctors.mcSharma.about2")}</p>
                            <p>{t("doctors.mcSharma.about3")}</p>
                        </div>
                    </div>

                    <div className="space-y-8">
                         {/* Specialization List */}
                         <div className="p-8 bg-[#0f172a] rounded-[2rem] text-white shadow-2xl relative overflow-hidden group">
                            <div className="absolute top-0 right-0 p-8 opacity-10">
                                <ScissorsIcon className="w-20 h-20" />
                            </div>
                            <h3 className="text-xl font-bold mb-8 border-b border-white/10 pb-4 relative z-10">
                                {t("doctors.mcSharma.specializationTitle")}
                            </h3>
                            <ul className="space-y-4 relative z-10">
                                {[1, 2, 3, 4, 5].map((i) => (
                                    <li key={i} className="flex items-center gap-4 group/item">
                                        <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center shrink-0 group-hover/item:bg-yellow-500 transition-colors">
                                            <ChevronRight className="w-4 h-4 text-white" />
                                        </div>
                                        <span className="font-bold text-slate-200">{t(`doctors.mcSharma.spec${i}`)}</span>
                                    </li>
                                ))}
                            </ul>
                         </div>

                         {/* Experience Marker */}
                         <div className="bg-slate-50 p-6 md:p-8 rounded-[2rem] border border-slate-100 flex items-center gap-6 group hover:bg-white transition-colors shadow-sm hover:shadow-md">
                            <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-white flex items-center justify-center shadow-lg transform group-hover:rotate-12 transition-transform">
                                <span className="text-2xl font-bold text-slate-900">25+</span>
                            </div>
                            <div>
                                <p className="text-sm font-bold text-slate-500 uppercase tracking-widest leading-none mb-1">Years of</p>
                                <p className="text-xl font-bold text-slate-900 leading-none">Excellence</p>
                            </div>
                         </div>
                    </div>
                </div>

                {/* Services Section */}
                <div className="space-y-12 mb-16 md:mb-24">
                    <div className="grid md:grid-cols-2 gap-8 md:gap-12">
                        {/* Laparoscopic Services */}
                        <div className="space-y-6 md:space-y-8 p-8 md:p-10 bg-white border border-slate-100 rounded-[2.5rem] md:rounded-[3rem] shadow-xl hover:shadow-2xl transition-all">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-slate-900 text-white rounded-2xl flex items-center justify-center shadow-lg">
                                    <ScissorsIcon className="w-6 h-6" />
                                </div>
                                <h3 className="text-2xl font-bold text-slate-900">{t("doctors.mcSharma.lapServicesTitle")}</h3>
                            </div>
                            <ul className="grid gap-4">
                                {[1, 2, 3, 4, 5, 6, 7].map((i) => (
                                    <li key={i} className="flex items-start gap-4 p-4 rounded-2xl border border-slate-50 hover:bg-slate-50 transition-colors">
                                        <CheckCircle2 className="w-5 h-5 text-indigo-600 shrink-0 mt-0.5" />
                                        <span className="font-bold text-slate-700">{t(`doctors.mcSharma.lapSvc${i}`)}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* General Services */}
                        <div className="space-y-6 md:space-y-8 p-8 md:p-10 bg-slate-50 border border-slate-200/50 rounded-[2.5rem] md:rounded-[3rem] shadow-xl hover:shadow-2xl transition-all">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-indigo-900 text-white rounded-2xl flex items-center justify-center shadow-lg text-xl font-bold">
                                    MS
                                </div>
                                <h3 className="text-2xl font-bold text-slate-900">{t("doctors.mcSharma.genServicesTitle")}</h3>
                            </div>
                            <ul className="grid gap-4">
                                {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                                    <li key={i} className="flex items-start gap-4 p-4 rounded-2xl border border-white bg-white/50 hover:bg-white transition-colors">
                                        <CheckCircle2 className="w-5 h-5 text-slate-900 shrink-0 mt-0.5" />
                                        <span className="font-bold text-slate-700">{t(`doctors.mcSharma.genSvc${i}`)}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Why Choose Section - Redesigned */}
                <div className="bg-[#0f172a] rounded-[3rem] md:rounded-[4rem] p-10 md:p-16 lg:p-20 text-white mb-16 md:mb-24 relative overflow-hidden group">
                     <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-transparent opacity-50" />
                     <div className="relative z-10 space-y-12">
                        <div className="text-center max-w-2xl mx-auto space-y-4">
                            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">{t("doctors.mcSharma.whyChooseTitle")}</h2>
                            <div className="h-1.5 w-24 bg-yellow-500 mx-auto rounded-full" />
                        </div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {[1, 2, 3, 4, 5].map((i) => (
                                <div key={i} className="p-8 rounded-[2.5rem] bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all group/card">
                                    <div className="w-12 h-12 rounded-xl bg-yellow-500/20 text-yellow-500 flex items-center justify-center mb-6 font-bold text-xl group-hover/card:scale-110 transition-transform">
                                        0{i}
                                    </div>
                                    <p className="text-xl font-bold leading-snug group-hover/card:text-white transition-colors">
                                        {t(`doctors.mcSharma.why${i}`)}
                                    </p>
                                </div>
                            ))}
                        </div>
                     </div>
                </div>

                {/* FAQ Section - Final Request Compliance */}
                <div className="bg-gray-50 rounded-[3rem] md:rounded-[4rem] p-10 md:p-16 border border-gray-100 mb-16 md:mb-24">
                    <div className="text-center mb-12 space-y-4">
                        <div className="w-16 h-16 md:w-20 md:h-20 bg-white rounded-[1.5rem] flex items-center justify-center mx-auto shadow-lg mb-6">
                            <HelpCircle className="w-8 h-8 md:w-10 md:h-10 text-slate-900" />
                        </div>
                        <h2 className="text-3xl font-bold text-gray-900 tracking-tight">Expert Surgical Guidance (FAQ)</h2>
                        <p className="text-slate-500 font-bold uppercase tracking-widest text-sm">Every Word Included for Your Clarity</p>
                    </div>
                    <div className="max-w-4xl mx-auto grid gap-8">
                        {[1, 2, 3].map((i) => (
                            <div key={i} className="bg-white p-8 md:p-10 rounded-[2.5rem] shadow-sm border border-gray-100 transition-all hover:scale-[1.01]">
                                <div className="flex gap-6 mb-6">
                                    <div className="w-10 h-10 rounded-xl bg-slate-900 text-white flex items-center justify-center font-bold shrink-0 shadow-lg">Q</div>
                                    <h4 className="text-lg md:text-xl font-bold text-gray-900 tracking-tight leading-tight">
                                        {t(`doctors.mcSharma.faq${i}Quest`)}
                                    </h4>
                                </div>
                                <div className="flex gap-6 pl-16 border-l-4 border-slate-50">
                                    <p className="text-gray-600 font-medium leading-relaxed italic md:text-lg">
                                        {t(`doctors.mcSharma.faq${i}Ans`)}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Final Professional Summary & CTA */}
                <div className="grid lg:grid-cols-[0.8fr,1fr] gap-12 items-center bg-[#f8fafc] rounded-[3rem] md:rounded-[4rem] p-8 md:p-16 lg:p-20 overflow-hidden relative group">
                    <div className="relative h-[400px] md:h-[500px] rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl scale-95 group-hover:scale-100 transition-transform duration-1000 hidden lg:block border-[8px] md:border-[12px] border-white ring-1 ring-slate-200">
                        <Image src="/raj/M.C.Sharma.jpg" alt="Clinical Excellence" fill className="object-cover" />
                    </div>
                    <div className="space-y-10">
                        <Quote className="w-16 h-16 text-slate-300 transform -scale-x-100" />
                        <div className="space-y-6">
                            <h3 className="text-2xl font-bold text-slate-900">{t("doctors.mcSharma.clinicalExcellence")}</h3>
                            <p className="text-xl text-slate-600 font-medium leading-relaxed">
                                {t("doctors.mcSharma.clinicalDesc")}
                            </p>
                            <p className="text-slate-500 italic font-bold">
                                {t("doctors.mcSharma.clinicalExtra")}
                            </p>
                        </div>
                        <div className="pt-8 grid sm:grid-cols-2 gap-4">
                            <Link href="tel:+916397970802" className="flex items-center justify-center gap-4 bg-[#0f172a] text-white py-5 rounded-2xl font-bold text-lg shadow-xl hover:bg-black transition-all">
                                <Phone className="w-6 h-6" /> {t("doctors.callNow")}
                            </Link>
                            <Link href="/contact" className="flex items-center justify-center gap-4 bg-white text-slate-900 border-2 border-slate-900 py-5 rounded-2xl font-bold text-lg hover:bg-slate-50 transition-all">
                                {t("doctors.bookAppointment")}
                            </Link>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
