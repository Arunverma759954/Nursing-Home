"use client";

import Image from "next/image";
import Link from "next/link";
import { Zap, Activity, ShieldCheck, Clock, ArrowRight, UserCheck, Microscope, Camera, Sparkles, Phone } from "lucide-react";

export default function XrayPage() {
    return (
        <div className="bg-white min-h-screen animate-page-enter mt-20">
            {/* Hero Section */}
            <div className="relative h-[450px] md:h-[650px] flex items-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/raj/banner1.webp"
                        alt="Advanced Digital X-Ray Center"
                        fill
                        className="object-cover object-center scale-105 animate-pulse-slow"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#701a2e] via-[#701a2e]/90 to-transparent z-10"></div>
                </div>

                <div className="container mx-auto px-6 z-20 relative">
                    <div className="max-w-4xl space-y-8">
                        <div className="inline-flex mt-10 items-center gap-2 px-5 py-2.5 rounded-full glass text-white text-sm font-bold animate-float tracking-wide">
                            <Sparkles className="w-4 h-4 text-rose-300 fill-rose-300" />
                            <span>Next-Gen Diagnostic Imaging</span>
                        </div>
                        <h1 className="text-4xl md:text-7xl font-black text-white leading-[1.1] tracking-tighter">
                            Digital X-Ray <br /><span className="text-rose-400">Excellence Hapur</span>
                        </h1>
                        <p className="text-xl text-gray-100 leading-relaxed max-w-2xl font-medium">
                            Experience the precision of high-resolution digital imaging. At Raj Nursing Home, we provide fast, low-radiation X-ray services for accurate diagnosis and better clinical decisions.
                        </p>
                        <div className="flex flex-wrap gap-5 pt-4">
                            <Link href="#appointment" className="px-10 py-5 bg-white text-[#701a2e] rounded-2xl font-black text-sm uppercase tracking-widest shadow-2xl hover:bg-rose-50 transition-all transform hover:-translate-y-1">
                                Book X-Ray Now <ArrowRight className="w-5 h-5 ml-2 inline" />
                            </Link>
                            <nav className="flex items-center text-sm text-white/80 py-3 font-semibold">
                                <Link href="/" className="hover:text-white transition-colors">Home</Link>
                                <span className="mx-2">/</span>
                                <span className="text-white">Digital X-Ray</span>
                            </nav>
                        </div>
                    </div>
                </div>

                <div className="absolute right-0 bottom-0 h-full w-[45%] z-20 hidden lg:block opacity-90 transition-transform hover:scale-105 duration-1000">
                    <Image
                        src="/raj/dr.Vipin.jpg"
                        alt="Clinical Director"
                        fill
                        className="object-cover object-top"
                        style={{ clipPath: 'polygon(20% 0, 100% 0, 100% 100%, 0% 100%)' }}
                    />
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-screen-2xl mx-auto px-6 py-24 sm:py-32">

                {/* Quick Highlights Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-32">
                    {[
                        { icon: Camera, label: "HD Digital Imaging", color: "text-rose-600 bg-rose-50" },
                        { icon: ShieldCheck, label: "Low Radiation", color: "text-blue-600 bg-blue-50" },
                        { icon: Clock, label: "Instant Reports", color: "text-amber-600 bg-amber-50" },
                        { icon: UserCheck, label: "Expert Radiologists", color: "text-emerald-600 bg-emerald-50" },
                    ].map((item, idx) => (
                        <div key={idx} className="bg-white border border-gray-100 p-8 rounded-[3rem] shadow-xl hover:shadow-[0_30px_60px_rgba(112,26,46,0.1)] transition-all duration-500 group flex flex-col items-center text-center">
                            <div className={`p-5 rounded-3xl ${item.color} group-hover:scale-110 transition-transform duration-500 mb-6 shadow-sm`}>
                                <item.icon className="w-8 h-8" />
                            </div>
                            <span className="font-extrabold text-gray-900 text-lg md:text-xl tracking-tight leading-tight">{item.label}</span>
                        </div>
                    ))}
                </div>

                {/* Intro Section */}
                <div className="grid lg:grid-cols-2 gap-20 items-center mb-32">
                    <div className="space-y-10 animate-page-enter">
                        <div className="space-y-5">
                            <span className="text-[#701a2e] font-black tracking-[0.3em] uppercase text-sm">Advanced Imaging</span>
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 leading-[1.1] tracking-tighter">
                                Why Choose <br /><span className="text-[#701a2e]">Digital X-Ray?</span>
                            </h2>
                        </div>
                        <div className="space-y-6 text-gray-600 text-xl leading-relaxed font-medium">
                            <p>
                                Unlike traditional film technology, digital X-rays provide crystal-clear images within seconds. This allows our doctors to zoom in and analyze skeletal or chest conditions with far greater precision.
                            </p>
                            <p>
                                Most importantly, digital sensors are far more sensitive than film, requiring significantly less radiation exposure for the patient, ensuring a safer diagnostic process for everyone.
                            </p>
                        </div>
                        <div className="flex flex-wrap gap-4">
                            <span className="px-6 py-3 bg-rose-50 text-[#701a2e] rounded-full font-bold text-sm border border-rose-100 italic">"Faster Results, Safer Imaging"</span>
                        </div>
                    </div>
                    <div className="relative group rounded-[4rem] overflow-hidden shadow-2xl h-[600px] border-[12px] border-white ring-1 ring-gray-100">
                        <Image
                            src="/xray.jpg"
                            alt="Digital X-Ray Lab"
                            fill
                            className="object-cover group-hover:scale-110 transition-transform duration-1000"
                        />
                    </div>
                </div>

                {/* Services Grid (Best UI) */}
                <div className="mb-32">
                    <div className="text-center max-w-3xl mx-auto mb-16 space-y-6">
                        <span className="text-[#701a2e] font-black tracking-[0.3em] uppercase text-sm">Our Testing Scope</span>
                        <h2 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tighter">Comprehensive <span className="text-[#701a2e]">Radiology Services</span></h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {[
                            { title: "Chest & Respiratory", desc: "Digital screening for pneumonia, lung conditions, and cardiac monitoring.", icon: Activity },
                            { title: "Fracture Diagnosis", desc: "High-definition bone imaging to detect even the finest hairline fractures.", icon: Zap },
                            { title: "Orthopedic Imaging", desc: "Detailed joint and spine X-rays for back pain and arthritic evaluations.", icon: Microscope },
                            { title: "General Radiology", desc: "Abdominal and specialized radiological tests for comprehensive adult health.", icon: UserCheck }
                        ].map((service, i) => (
                            <div key={i} className="bg-white p-10 rounded-[4rem] border border-gray-100 shadow-xl hover:shadow-2xl transition-all duration-500 group flex items-start gap-8 hover:border-rose-100">
                                <div className="w-16 h-16 bg-rose-50 text-[#701a2e] rounded-2xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform shadow-inner">
                                    <service.icon className="w-8 h-8" />
                                </div>
                                <div>
                                    <h4 className="text-2xl font-black text-gray-900 mb-3 tracking-tight">{service.title}</h4>
                                    <p className="text-gray-500 font-medium leading-relaxed">{service.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Dark CTA Section */}
                <div id="appointment" className="relative rounded-[5rem] overflow-hidden bg-[#701a2e] p-12 md:p-24 text-white group">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -mr-20 -mt-20"></div>
                    <div className="absolute bottom-0 left-0 w-96 h-96 bg-black/10 rounded-full blur-3xl -ml-20 -mb-20"></div>

                    <div className="grid lg:grid-cols-2 gap-20 items-center relative z-10">
                        <div className="space-y-10">
                            <h2 className="text-4xl md:text-7xl font-black leading-tight tracking-tighter">
                                Instant Reports <br /><span className="text-rose-400">Better Decisions.</span>
                            </h2>
                            <p className="text-2xl text-rose-100 font-medium leading-relaxed">
                                In-house digital radiology center open for emergencies and routine checkups. Walk-in or book via phone.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-6">
                                <Link href="tel:+916397970802" className="flex items-center justify-center gap-4 bg-white text-[#701a2e] px-12 py-6 rounded-3xl font-black text-xl shadow-2xl hover:scale-105 transition-all">
                                    <Phone className="w-8 h-8" /> +91 63979 70802
                                </Link>
                                <Link href="/contact" className="flex items-center justify-center gap-4 bg-white/10 backdrop-blur-md border border-white/30 text-white px-12 py-6 rounded-3xl font-black text-xl hover:bg-white/20 transition-all uppercase tracking-widest text-center">
                                    Find Us
                                </Link>
                            </div>
                        </div>
                        <div className="relative h-[450px] rounded-[3rem] overflow-hidden border-[10px] border-white/10 shadow-2xl skew-y-1 group-hover:skew-y-0 transition-transform duration-1000">
                            <Image src="/xray2.jpg" alt="Clinical X-Ray" fill className="object-cover" />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
