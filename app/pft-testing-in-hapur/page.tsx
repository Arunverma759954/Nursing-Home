"use client";

import Image from "next/image";
import Link from "next/link";
import { Wind, Activity, ShieldCheck, Clock, ArrowRight, UserCheck, Stethoscope, Sparkles, Phone, Shield } from "lucide-react";

export default function PFTTestingPage() {
    return (
        <div className="bg-white min-h-screen animate-page-enter mt-20">
            {/* Hero Section */}
            <div className="relative h-[450px] md:h-[650px] flex items-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/raj/banner3.webp"
                        alt="PFT Testing & Respiratory Center"
                        fill
                        className="object-cover object-center scale-105 animate-pulse-slow"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#0891b2] via-[#0891b2]/90 to-transparent z-10"></div>
                </div>

                <div className="container mx-auto px-6 z-20 relative">
                    <div className="max-w-4xl space-y-8">
                        <div className="inline-flex mt-10 items-center gap-2 px-5 py-2.5 rounded-full glass text-white text-sm font-bold animate-float tracking-wide">
                            <Sparkles className="w-4 h-4 text-cyan-200 fill-cyan-200" />
                            <span>Advanced Respiratory Wellness</span>
                        </div>
                        <h1 className="text-4xl md:text-7xl font-black text-white leading-[1.1] tracking-tighter">
                            Pulmonary PFT <br /><span className="text-cyan-200">Testing Hapur</span>
                        </h1>
                        <p className="text-xl text-gray-100 leading-relaxed max-w-2xl font-medium">
                            Breathe easier with advanced lung function assessments. Raj Nursing Home offers precise PFT testing to diagnose and manage respiratory conditions with world-class accuracy.
                        </p>
                        <div className="flex flex-wrap gap-5 pt-4">
                            <Link href="#appointment" className="px-10 py-5 bg-white text-[#0891b2] rounded-2xl font-black text-sm uppercase tracking-widest shadow-2xl hover:bg-cyan-50 transition-all transform hover:-translate-y-1">
                                Book Test Now <ArrowRight className="w-5 h-5 ml-2 inline" />
                            </Link>
                            <nav className="flex items-center text-sm text-white/80 py-3 font-semibold">
                                <Link href="/" className="hover:text-white transition-colors">Home</Link>
                                <span className="mx-2">/</span>
                                <span className="text-white">PFT Testing</span>
                            </nav>
                        </div>
                    </div>
                </div>

                {/* Floating Decoration */}
                <div className="absolute right-0 bottom-0 h-full w-[45%] z-20 hidden lg:block opacity-90 transition-transform hover:scale-105 duration-1000">
                    <Image
                        src="/raj/dr.Vipin.jpg"
                        alt="Respiratory Specialist"
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
                        { icon: Wind, label: "Lung Analysis", color: "text-cyan-600 bg-cyan-50" },
                        { icon: Stethoscope, label: "Asthma Care", color: "text-rose-600 bg-rose-50" },
                        { icon: Clock, label: "Quick Process", color: "text-amber-600 bg-amber-50" },
                        { icon: UserCheck, label: "Expert Doctors", color: "text-emerald-600 bg-emerald-50" },
                    ].map((item, idx) => (
                        <div key={idx} className="bg-white border border-gray-100 p-8 rounded-[3rem] shadow-xl hover:shadow-[0_30px_60px_rgba(8,145,178,0.1)] transition-all duration-500 group flex flex-col items-center text-center">
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
                            <span className="text-cyan-700 font-black tracking-[0.3em] uppercase text-sm">Advanced Respiratory Care</span>
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 leading-[1.1] tracking-tighter">
                                Precise Lung <br /><span className="text-cyan-700">Function Mapping</span>
                            </h2>
                        </div>
                        <div className="space-y-6 text-gray-600 text-xl leading-relaxed font-medium">
                            <p>
                                Pulmonary Function Tests (PFT) are essential tools for measuring how well your lungs are working. At Raj Nursing Home, we use the latest spirometry and lung volume measurement technology to detect respiratory issues early.
                            </p>
                            <p>
                                Whether you're managing asthma, COPD, or experiencing unexplained shortness of breath, our diagnostic experts provide the clarity you need for effective treatment.
                            </p>
                        </div>
                        <div className="grid sm:grid-cols-2 gap-6">
                            <div className="p-6 bg-cyan-50 rounded-3xl border border-cyan-100">
                                <h5 className="font-black text-cyan-800 mb-2 tracking-tight">Non-Invasive</h5>
                                <p className="text-gray-500 text-sm font-medium">Painless testing procedures with zero downtime.</p>
                            </div>
                            <div className="p-6 bg-cyan-50 rounded-3xl border border-cyan-100">
                                <h5 className="font-black text-cyan-800 mb-2 tracking-tight">Fast Interpretation</h5>
                                <p className="text-gray-500 text-sm font-medium">Expert analysis from senior respiratory physicians.</p>
                            </div>
                        </div>
                    </div>
                    <div className="relative group rounded-[4rem] overflow-hidden shadow-2xl h-[600px] border-[12px] border-white ring-1 ring-gray-100">
                        <Image
                            src="/pft.jpg"
                            alt="Lung Function Test"
                            fill
                            className="object-cover group-hover:scale-110 transition-transform duration-1000"
                        />
                    </div>
                </div>

                {/* Process & Comfort (Styled Boxes) */}
                <div className="mb-32">
                    <div className="text-center max-w-3xl mx-auto mb-16 space-y-6">
                        <span className="text-cyan-700 font-black tracking-[0.3em] uppercase text-sm">Patient Experience</span>
                        <h2 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tighter">Simple Testing <span className="text-cyan-700">Process</span></h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-10">
                        <div className="bg-white p-10 rounded-[3rem] border border-gray-100 shadow-xl hover:shadow-2xl transition-all duration-500 group">
                            <div className="flex items-center gap-6 mb-8">
                                <div className="w-16 h-16 bg-cyan-50 text-cyan-700 rounded-2xl flex items-center justify-center shrink-0 shadow-inner">
                                    <Clock className="w-8 h-8" />
                                </div>
                                <h4 className="text-3xl font-black text-gray-900 tracking-tight">Procedure Steps</h4>
                            </div>
                            <p className="text-gray-500 font-medium leading-relaxed text-lg mb-8">
                                Our pulmonary assessment is straightforward. Guided by specialists, you will breathe into a high-precision mouthpiece. The machine maps your airflow and lung capacity in real-time.
                            </p>
                            <ul className="space-y-4">
                                {[
                                    "Guided by expert technicians",
                                    "Zero pain or discomfort",
                                    "Clear breathing instructions",
                                    "15-20 minute total duration"
                                ].map((li, i) => (
                                    <li key={i} className="flex items-center gap-3 font-bold text-gray-700">
                                        <div className="w-2 h-2 rounded-full bg-cyan-500"></div>
                                        {li}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="bg-cyan-900 p-10 rounded-[3rem] text-white shadow-xl relative overflow-hidden group">
                            <div className="absolute top-0 right-0 p-8 opacity-10">
                                <Shield className="w-48 h-48" />
                            </div>
                            <div className="relative z-10">
                                <h4 className="text-3xl font-black mb-8 tracking-tight text-cyan-200">Pre-Test Guidance</h4>
                                <p className="text-cyan-50/80 font-medium leading-relaxed text-lg mb-8">
                                    To ensure the most accurate results, we recommend a few simple preparations before your appointment.
                                </p>
                                <div className="space-y-6">
                                    {[
                                        { t: "Light Meals", d: "Avoid heavy meals 2 hours before the test." },
                                        { t: "Loose Clothing", d: "Wear comfortable attire for unrestricted breathing." },
                                        { t: "Smoking", d: "Refrain from smoking at least 1 hour prior." }
                                    ].map((item, i) => (
                                        <div key={i} className="flex gap-4">
                                            <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2.5 shrink-0"></div>
                                            <div>
                                                <p className="font-black text-xl tracking-tight">{item.t}</p>
                                                <p className="text-cyan-200/70 text-sm font-medium">{item.d}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Final CTA Section */}
                <div id="appointment" className="relative rounded-[5rem] overflow-hidden bg-gradient-to-br from-[#0891b2] to-[#155e75] p-12 md:p-24 text-white group">
                    <div className="absolute top-0 right-0 p-10 opacity-10">
                        <Wind className="w-64 h-64 scale-125" />
                    </div>
                    <div className="grid lg:grid-cols-[1.2fr,0.8fr] gap-20 items-center relative z-10">
                        <div className="space-y-10">
                            <h2 className="text-4xl md:text-7xl font-black leading-tight tracking-tighter">
                                Breathe Freely <br /><span className="text-cyan-300">Live Fully.</span>
                            </h2>
                            <p className="text-2xl text-white/80 font-medium leading-relaxed">
                                Take a proactive step towards respiratory health. Join thousands of Hapur residents who trust us for lung wellness.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-6">
                                <Link href="tel:+916397970802" className="flex items-center justify-center gap-4 bg-white text-cyan-900 px-12 py-6 rounded-3xl font-black text-xl shadow-2xl hover:scale-105 transition-all">
                                    <Phone className="w-8 h-8" /> +91 63979 70802
                                </Link>
                                <Link href="/contact" className="flex items-center justify-center gap-4 bg-cyan-800/40 backdrop-blur-md border border-white/30 text-white px-12 py-6 rounded-3xl font-black text-xl hover:bg-cyan-800/60 transition-all uppercase tracking-widest text-center">
                                    Visit Center
                                </Link>
                            </div>
                        </div>
                        <div className="relative h-[450px] rounded-[3rem] overflow-hidden shadow-2xl skew-x-1 group-hover:skew-x-0 transition-transform duration-1000">
                            <Image src="/pft2.jpg" alt="PFT Lab" fill className="object-cover" />
                        </div>
                    </div>
                </div>

                {/* Conclusion Box */}
                <div className="mt-32 bg-gray-50 border border-gray-200 rounded-[3rem] p-12 md:p-20 text-center">
                    <h2 className="text-3xl font-black text-gray-900 mb-8 tracking-tight">Your Partner in Respiratory Health</h2>
                    <p className="leading-relaxed text-gray-500 text-xl font-medium max-w-5xl mx-auto italic">
                        "An assessment of pulmonary function is an essential part of chest care. Raj Nursing Home offers reliable assistance in breathing health with structured testing and professionally interpreted results."
                    </p>
                </div>

            </div>
        </div>
    );
}
