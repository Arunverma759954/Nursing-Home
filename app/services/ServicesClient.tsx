"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useLanguage } from "@/app/context/LanguageContext";

const ChevronRightIcon = ({ className }: { className?: string }) => <svg className={className} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>;
const ArrowRightIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>;

export default function ServicesPage() {
    const { t } = useLanguage();
    const [activeTab, setActiveTab] = useState(0);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const services = [
        { titleKey: "emergencyCare",    icon: "🚑", featureCount: 4, subCount: 3, image: "/raj/raj-nursing-home-icu.jpg" },
        { titleKey: "womensHealth",     icon: "🤰", featureCount: 4, subCount: 3, image: "/raj/gyne-2.jpg" },
        { titleKey: "advancedSurgery",  icon: "🔬", featureCount: 4, subCount: 3, image: "/laparoscopic2.jpg" },
        { titleKey: "internalMedicine", icon: "🩺", featureCount: 4, subCount: 3, image: "/internal1.jpg" },
        { titleKey: "diagnosticCenter", icon: "🧪", featureCount: 4, subCount: 3, image: "/Diagnostic3.jpg" },
    ];

    const active      = services[activeTab];
    const tk          = active.titleKey;
    const heading     = t(`servicesPage.${tk}Heading` as Parameters<typeof t>[0]);
    const description = t(`servicesPage.${tk}Desc`    as Parameters<typeof t>[0]);
    const subHeading  = t(`servicesPage.${tk}SubHeading` as Parameters<typeof t>[0]);
    const subDesc     = t(`servicesPage.${tk}SubDesc`    as Parameters<typeof t>[0]);
    const features    = Array.from({ length: active.featureCount }, (_, i) =>
        t(`servicesPage.${tk}F${i + 1}` as Parameters<typeof t>[0])
    );
    const subItems    = Array.from({ length: active.subCount }, (_, i) =>
        t(`servicesPage.${tk}S${i + 1}` as Parameters<typeof t>[0])
    );

    return (
        <div className="bg-gray-50 min-h-screen text-gray-900 font-sans overflow-x-hidden">
            <main className="pt-[80px] sm:pt-[90px] md:pt-[110px] px-4 sm:px-8 md:px-10 lg:px-12 pb-8 max-w-[1420px] mx-auto min-h-screen flex flex-col">

                {/* Page Header */}
                <div className="mb-4 text-center max-w-3xl mx-auto">
                    <span className="inline-block px-3 py-1 bg-red-50 text-[#9d174d] font-bold tracking-widest uppercase text-[9px] rounded-full mb-1 border border-red-100">
                        {t("servicesPage.badge")}
                    </span>
                    <h1 className="text-lg md:text-xl lg:text-2xl font-black text-gray-900 mb-2 leading-tight uppercase tracking-tight">
                        {t("servicesPage.title")}
                    </h1>
                    <div className="h-1 w-12 bg-gradient-to-r from-[#9d174d] to-red-400 rounded-full mx-auto mb-2"></div>
                    <p className="text-gray-500 text-xs font-medium max-w-lg mx-auto leading-relaxed">
                        {t("servicesPage.intro")}
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row gap-6">
                    {/* Mobile Tabs */}
                    <div className="lg:hidden overflow-x-auto pb-2 -mx-4 px-4 flex gap-2 snap-x">
                        {services.map((s, idx) => (
                            <button
                                key={idx}
                                onClick={() => setActiveTab(idx)}
                                className={`flex-shrink-0 px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wide whitespace-nowrap transition-all border snap-center ${
                                    activeTab === idx
                                        ? "bg-[#9d174d] text-white border-[#9d174d] shadow-md"
                                        : "bg-white text-gray-600 border-gray-200"
                                }`}
                            >
                                {t(`servicesPage.${s.titleKey}` as Parameters<typeof t>[0])}
                            </button>
                        ))}
                    </div>

                    {/* Desktop Sidebar */}
                    <div className="hidden lg:flex w-[240px] xl:w-[270px] flex-col gap-2 flex-shrink-0">
                        {services.map((s, idx) => (
                            <button
                                key={idx}
                                onClick={() => setActiveTab(idx)}
                                className={`p-4 rounded-2xl text-left transition-all duration-300 border ${
                                    activeTab === idx
                                        ? "bg-white border-[#9d174d] shadow-xl"
                                        : "bg-white border-transparent hover:border-gray-200 opacity-75 hover:opacity-100"
                                }`}
                            >
                                <div className="flex items-center gap-3">
                                    <div className={`w-9 h-9 rounded-xl flex items-center justify-center text-lg ${
                                        activeTab === idx ? "bg-[#9d174d] text-white" : "bg-gray-100"
                                    }`}>{s.icon}</div>
                                    <div>
                                        <h3 className={`font-black text-xs uppercase tracking-tight ${
                                            activeTab === idx ? "text-gray-900" : "text-gray-500"
                                        }`}>
                                            {t(`servicesPage.${s.titleKey}` as Parameters<typeof t>[0])}
                                        </h3>
                                        {activeTab === idx && (
                                            <p className="text-[8px] text-[#9d174d] font-bold mt-0.5 tracking-wider uppercase">
                                                {t("servicesPage.showing")}
                                            </p>
                                        )}
                                    </div>
                                </div>
                            </button>
                        ))}
                    </div>

                    {/* Main Content */}
                    <div className="flex-1 flex flex-col lg:flex-row gap-5">

                        {/* Image Panel */}
                        <div className="w-full lg:w-[40%] relative rounded-3xl overflow-hidden shadow-2xl min-h-[220px] lg:min-h-0 group flex-shrink-0">
                            <Image
                                src={active.image}
                                alt={heading}
                                fill
                                className="object-cover transition-transform duration-1000 group-hover:scale-105"
                                priority
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-gray-950/80 via-gray-900/30 to-transparent" />
                            <div className="absolute bottom-0 left-0 right-0 p-5">
                                <span className="px-2.5 py-1 bg-white/10 backdrop-blur-md rounded-full border border-white/20 text-[8px] font-bold uppercase tracking-widest text-white flex items-center gap-1.5 w-fit mb-2">
                                    <div className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse"></div>
                                    {t("servicesPage.excellence")}
                                </span>
                                <h2 className="text-white font-black text-base md:text-lg leading-tight drop-shadow-lg uppercase">
                                    {heading}
                                </h2>
                            </div>
                        </div>

                        {/* Text Panel */}
                        <div className="flex-1 bg-white rounded-3xl p-6 md:p-8 shadow-xl border border-gray-100 flex flex-col gap-5">

                            {/* Description */}
                            <p className="text-sm text-gray-600 leading-relaxed border-l-4 border-[#9d174d] pl-4 py-2 bg-red-50/40 rounded-r-xl font-medium">
                                {description}
                            </p>

                            {/* Main Feature List */}
                            <div>
                                <ul className="space-y-2.5">
                                    {features.map((f, i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <span className="w-5 h-5 rounded-full bg-[#9d174d] flex items-center justify-center shrink-0 mt-0.5">
                                                <span className="text-white text-[9px] font-black">✓</span>
                                            </span>
                                            <span className="text-sm text-gray-700 font-medium">{f}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Doctor Sub-Section */}
                            <div className="bg-gray-50 rounded-2xl p-5 border border-gray-100">
                                <h4 className="font-black text-gray-900 text-sm mb-1">{subHeading}</h4>
                                <p className="text-xs text-gray-500 mb-3 font-medium">{subDesc}</p>
                                <ul className="space-y-2">
                                    {subItems.map((item, i) => (
                                        <li key={i} className="flex items-start gap-2.5">
                                            <span className="w-1.5 h-1.5 rounded-full bg-[#9d174d] mt-1.5 shrink-0" />
                                            <span className="text-sm text-gray-700">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* CTA */}
                            <div className="flex gap-3 mt-auto pt-1">
                                <Link
                                    href="/contact"
                                    className="px-5 py-3 bg-[#9d174d] text-white font-black text-xs rounded-xl shadow-lg hover:bg-[#831843] transition-all flex items-center gap-2 uppercase"
                                >
                                    {t("servicesPage.bookAppointment")} <ArrowRightIcon />
                                </Link>
                                <Link
                                    href="/#doctors"
                                    className="hidden sm:flex px-5 py-3 bg-gray-100 border border-gray-200 text-gray-700 font-bold text-xs rounded-xl hover:bg-gray-200 transition-all items-center gap-2 uppercase"
                                >
                                    {t("servicesPage.meetDoctors")} <ChevronRightIcon />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
