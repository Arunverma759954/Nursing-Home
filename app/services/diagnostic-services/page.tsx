"use client";

import Image from "next/image";
import Link from "next/link";
import { Microscope, FlaskConical, FileText, Home, Clock, ShieldCheck, Activity, Syringe, ArrowRight } from "lucide-react";

export default function DiagnosticServicesPage() {
    return (
        <div className="bg-white min-h-screen animate-page-enter">
            {/* Hero Section */}
            <div className="relative h-[450px] md:h-[550px] flex items-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/raj/banner1.webp"
                        alt="Advanced Diagnostic Lab"
                        fill
                        className="object-cover object-center scale-105 animate-pulse-slow"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#059669] via-[#059669]/90 to-transparent z-10"></div>
                </div>

                <div className="container mx-auto px-4 z-20 relative">
                    <div className="max-w-3xl space-y-6">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-white text-sm font-medium animate-float">
                            <Microscope className="w-4 h-4 text-emerald-200 fill-emerald-200" />
                            <span>Precision Pathology Lab</span>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
                            Comprehensive <span className="text-emerald-200">Diagnostic Services</span>
                        </h1>
                        <p className="text-lg text-gray-100 leading-relaxed max-w-2xl">
                            From routine blood tests to specialized screenings, we deliver accurate results you can trust. Modern equipment, expert pathologists, and home collection available.
                        </p>
                        <div className="flex flex-wrap gap-4 pt-4">
                            <Link href="#appointment" className="btn-primary bg-white text-[#059669] hover:bg-emerald-50 border-none">
                                Book a Test <ArrowRight className="w-4 h-4" />
                            </Link>
                            <nav className="flex items-center text-sm text-white/80 py-3">
                                <Link href="/" className="hover:text-white transition-colors">Home</Link>
                                <span className="mx-2">/</span>
                                <span className="text-white font-semibold">Diagnostics</span>
                            </nav>
                        </div>
                    </div>
                </div>

                {/* Floating Doctor Image */}
                <div className="absolute right-0 bottom-0 h-full w-[40%] z-20 hidden lg:block opacity-90 transition-transform hover:scale-105 duration-700">
                    <Image
                        src="/raj/dr.Vipin.jpg"
                        alt="Pathologist"
                        fill
                        className="object-cover object-top"
                        style={{ clipPath: 'polygon(15% 0, 100% 0, 100% 100%, 0% 100%)' }}
                    />
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-screen-2xl mx-auto px-4 py-20">

                {/* Quick Stats / Highlights */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-24">
                    {[
                        { icon: Microscope, label: "Advanced Lab", color: "text-emerald-600 bg-emerald-50" },
                        { icon: Home, label: "Home Collection", color: "text-blue-600 bg-blue-50" },
                        { icon: Clock, label: "Fast Reports", color: "text-amber-600 bg-amber-50" },
                        { icon: ShieldCheck, label: "NABL Standards", color: "text-rose-600 bg-rose-50" },
                    ].map((item, idx) => (
                        <div key={idx} className="premium-card p-6 flex flex-col items-center text-center space-y-3 group">
                            <div className={`p-4 rounded-2xl ${item.color} group-hover:scale-110 transition-transform duration-300`}>
                                <item.icon className="w-6 h-6" />
                            </div>
                            <span className="font-bold text-gray-800 text-sm md:text-base leading-tight">{item.label}</span>
                        </div>
                    ))}
                </div>

                {/* Intro Section */}
                <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
                    <div className="space-y-8 animate-page-enter" style={{ animationDelay: '0.2s' }}>
                        <div className="space-y-4">
                            <h2 className="text-sm font-bold tracking-widest text-[#059669] uppercase">Reliable Diagnostics</h2>
                            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                                Because Accurate Diagnosis is the First Step to Cure
                            </h3>
                        </div>
                        <p className="text-gray-600 text-lg leading-relaxed">
                            Medical diagnostics play a crucial role in disease detection, monitoring, and management. At Raj Nursing Home, our diagnostic facility is equipped with fully automated analyzers and cutting-edge technology to ensure every test result is precise and reliable.
                        </p>
                        <p className="text-gray-600 text-lg leading-relaxed">
                            Whether it is a routine health checkup or a specific investigation prescribed by your doctor, our team of experienced pathologists and technicians ensures highest quality standards.
                        </p>
                        <div className="bg-emerald-50 border-l-4 border-[#059669] p-6 rounded-r-xl">
                            <p className="italic text-[#059669]">
                                "We understand the value of timely reports in medical treatment. That's why we prioritize speed without compromising on accuracy."
                            </p>
                        </div>
                    </div>
                    <div className="relative group overflow-hidden rounded-3xl shadow-2xl h-[450px]">
                        <Image
                            src="/Diagnostic3.jpg"
                            alt="Modern Pathology Lab"
                            fill
                            className="object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                    </div>
                </div>

                {/* Detailed Services Grid */}
                <div className="space-y-16 mb-24">
                    <div className="text-center space-y-4 max-w-2xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Our Diagnostic Services</h2>
                        <div className="h-1.5 w-24 bg-[#059669] mx-auto rounded-full"></div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Clinical Pathology */}
                        <div className="premium-card p-8 space-y-6 hover:border-emerald-200">
                            <div className="h-14 w-14 bg-emerald-100 rounded-2xl flex items-center justify-center">
                                <FlaskConical className="w-8 h-8 text-[#059669]" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900">Clinical Pathology</h3>
                            <p className="text-gray-600 leading-relaxed text-sm">
                                Comprehensive blood, urine, and body fluid analysis to detect infections and diseases. We use automated cell counters for error-free results.
                            </p>
                            <ul className="space-y-2 pt-2">
                                <li className="flex items-center gap-2 text-sm text-gray-700">
                                    <ShieldCheck className="w-4 h-4 text-emerald-500" /> CBC & Blood Components
                                </li>
                                <li className="flex items-center gap-2 text-sm text-gray-700">
                                    <ShieldCheck className="w-4 h-4 text-emerald-500" /> Urine Routine & Micro
                                </li>
                            </ul>
                        </div>

                        {/* Biochemistry */}
                        <div className="premium-card p-8 space-y-6 hover:border-emerald-200">
                            <div className="h-14 w-14 bg-emerald-100 rounded-2xl flex items-center justify-center">
                                <Activity className="w-8 h-8 text-[#059669]" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900">Biochemistry</h3>
                            <p className="text-gray-600 leading-relaxed text-sm">
                                Analyzing chemical components in the blood to assess organ function. Crucial for monitoring diabetes, liver, and kidney health.
                            </p>
                            <ul className="space-y-2 pt-2">
                                <li className="flex items-center gap-2 text-sm text-gray-700">
                                    <ShieldCheck className="w-4 h-4 text-emerald-500" /> LFT & KFT
                                </li>
                                <li className="flex items-center gap-2 text-sm text-gray-700">
                                    <ShieldCheck className="w-4 h-4 text-emerald-500" /> Lipid Profile & HbA1c
                                </li>
                            </ul>
                        </div>

                        {/* Home Collection */}
                        <div className="premium-card p-8 space-y-6 hover:border-emerald-200">
                            <div className="h-14 w-14 bg-emerald-100 rounded-2xl flex items-center justify-center">
                                <Home className="w-8 h-8 text-[#059669]" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900">Home Sample Collection</h3>
                            <p className="text-gray-600 leading-relaxed text-sm">
                                Cannot visit the lab? Our trained phlebotomists will visit your home to collect samples hygienically and safely at your convenience.
                            </p>
                            <ul className="space-y-2 pt-2">
                                <li className="flex items-center gap-2 text-sm text-gray-700">
                                    <ShieldCheck className="w-4 h-4 text-emerald-500" /> Safe & Hygienic
                                </li>
                                <li className="flex items-center gap-2 text-sm text-gray-700">
                                    <ShieldCheck className="w-4 h-4 text-emerald-500" /> Digital Reports
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Call to Action Section with Image Overlap */}
                <div className="relative rounded-[3rem] overflow-hidden bg-gradient-to-br from-[#059669] to-[#047857] p-12 md:p-20 text-white mb-24">
                    <div className="absolute top-0 right-0 p-10 opacity-10">
                        <Microscope className="w-64 h-64" />
                    </div>
                    <div className="max-w-3xl space-y-8 relative z-10">
                        <h2 className="text-3xl md:text-5xl font-bold leading-tight">
                            Quality Diagnostics for Better Health
                        </h2>
                        <p className="text-white/90 text-lg leading-relaxed">
                            Your health cannot wait. Get accurate reports on time to start the right treatment. Book your test online or request a home visit today.
                        </p>
                        <div className="grid sm:grid-cols-2 gap-6 pt-6">
                            <div className="glass p-6 rounded-2xl">
                                <h4 className="font-bold text-xl mb-2">Accurate Results</h4>
                                <p className="text-sm text-white/80">Double-checked by senior pathologists.</p>
                            </div>
                            <div className="glass p-6 rounded-2xl">
                                <h4 className="font-bold text-xl mb-2">Modern Technology</h4>
                                <p className="text-sm text-white/80">Using latest automated analyzers.</p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-12">
                        <Link href="#appointment" className="inline-flex items-center gap-3 bg-white text-[#059669] px-10 py-4 rounded-2xl font-bold text-lg hover:bg-emerald-50 transition-all shadow-xl hover:-translate-y-1">
                            Schedule Test <ArrowRight className="w-5 h-5" />
                        </Link>
                    </div>
                </div>

                {/* Technology & Interpretation */}
                <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
                    <div className="relative group overflow-hidden rounded-3xl shadow-2xl h-[400px]">
                        <Image
                            src="/Diagnostic2.jpg"
                            alt="Lab Technician at Work"
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                    </div>
                    <div className="space-y-8">
                        <div className="space-y-4">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Why Choose Raj Nursing Home Diagnostics?</h2>
                            <p className="text-gray-600 text-lg leading-relaxed">
                                We go beyond just testing. We ensure that every sample is handled with care and every report is verified for accuracy. Our integrated hospital setting means immediate consultation with doctors is available if reports show any abnormalities.
                            </p>
                        </div>

                        <div className="space-y-6">
                            {[
                                "NABL Standards",
                                "Highly Trained Technicians",
                                "Affordable Pricing",
                                "Online Report Access"
                            ].map((text, i) => (
                                <div key={i} className="flex items-center gap-4 bg-gray-50 p-4 rounded-xl border border-gray-100">
                                    <div className="h-10 w-10 flex items-center justify-center bg-[#059669] text-white rounded-lg">
                                        {i + 1}
                                    </div>
                                    <span className="font-bold text-gray-800">{text}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Simple Conclusion Box */}
                <div className="mt-16 bg-white border border-gray-200 rounded-3xl p-8 md:p-12 shadow-sm transition-all hover:shadow-md">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Trusted by Thousands</h2>
                    <p className="leading-relaxed text-gray-600 text-lg">
                        Raj Nursing Home has been a trusted name in healthcare for years. Our diagnostic services continue this legacy of trust by providing high-quality, affordable, and timely testing services to the community of Hapur. Whether it's a simple blood test or a complex profile, you can rely on us for the truth about your health.
                    </p>
                </div>

            </div>
        </div>
    );
}

