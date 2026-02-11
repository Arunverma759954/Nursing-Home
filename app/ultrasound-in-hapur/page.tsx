"use client";

import Image from "next/image";
import Link from "next/link";
import { Scan, Activity, Baby, FileText, ArrowRight, ShieldCheck, Clock, UserCheck } from "lucide-react";

export default function UltrasoundPage() {
    return (
        <div className="bg-white min-h-screen animate-page-enter">
            {/* Hero Section */}
            <div className="relative h-[450px] md:h-[550px] flex items-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/raj/banner1.webp"
                        alt="Ultrasound Center in Hapur"
                        fill
                        className="object-cover object-center scale-105 animate-pulse-slow"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#0f4c81] via-[#0f4c81]/90 to-transparent z-10"></div>
                </div>

                <div className="container mx-auto px-4 z-20 relative">
                    <div className="max-w-3xl space-y-6">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-white text-sm font-medium animate-float">
                            <Scan className="w-4 h-4 text-blue-300 fill-blue-300" />
                            <span>Advanced Imaging Center</span>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
                            Digital Ultrasound <span className="text-blue-300">& Imaging in Hapur</span>
                        </h1>
                        <p className="text-lg text-gray-100 leading-relaxed max-w-2xl">
                            High-resolution diagnostic imaging for precise results. From routine abdominal scans to advanced pregnancy care, we provide clarity you can trust.
                        </p>
                        <div className="flex flex-wrap gap-4 pt-4">
                            <Link href="#appointment" className="btn-primary bg-white text-[#0f4c81] hover:bg-blue-50 border-none">
                                Book Ultrasound <ArrowRight className="w-4 h-4" />
                            </Link>
                            <nav className="flex items-center text-sm text-white/80 py-3">
                                <Link href="/" className="hover:text-white transition-colors">Home</Link>
                                <span className="mx-2">/</span>
                                <span className="text-white font-semibold">Ultrasound</span>
                            </nav>
                        </div>
                    </div>
                </div>

                {/* Floating Doctor Image */}
                <div className="absolute right-0 bottom-0 h-full w-[40%] z-20 hidden lg:block opacity-90 transition-transform hover:scale-105 duration-700">
                    <Image
                        src="/raj/dr.Vipin.jpg"
                        alt="Radiologist"
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
                        { icon: Scan, label: "High Definition", color: "text-blue-600 bg-blue-50" },
                        { icon: Baby, label: "Maternity Care", color: "text-pink-600 bg-pink-50" },
                        { icon: Clock, label: "Immediate Reports", color: "text-amber-600 bg-amber-50" },
                        { icon: UserCheck, label: "Expert Doctors", color: "text-emerald-600 bg-emerald-50" },
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
                            <h2 className="text-sm font-bold tracking-widest text-[#0f4c81] uppercase">Diagnostic Excellence</h2>
                            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                                Seeing Clearly for Better Health
                            </h3>
                        </div>
                        <p className="text-gray-600 text-lg leading-relaxed">
                            Ultrasound imaging (Sonography) is a safe, non-invasive diagnostic method that uses sound waves to create images of the inside of the body. It does not use radiation, making it the preferred method for monitoring pregnancy and examining internal organs.
                        </p>
                        <p className="text-gray-600 text-lg leading-relaxed">
                            At Raj Nursing Home, we use state-of-the-art digital ultrasound machines that provide crystal-clear images, helping our doctors diagnose conditions with high accuracy and plan effective treatments.
                        </p>
                        <div className="bg-blue-50 border-l-4 border-[#0f4c81] p-6 rounded-r-xl">
                            <p className="italic text-[#0f4c81]">
                                "Our commitment is to provide a comfortable environment where patients receive quick and accurate diagnostic answers."
                            </p>
                        </div>
                    </div>
                    <div className="relative group overflow-hidden rounded-3xl shadow-2xl h-[450px]">
                        <Image
                            src="/ultrasound.jpg"
                            alt="Ultrasound Machine"
                            fill
                            className="object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                    </div>
                </div>

                {/* Detailed Services Grid */}
                <div className="space-y-16 mb-24">
                    <div className="text-center space-y-4 max-w-2xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Our Ultrasound Services</h2>
                        <div className="h-1.5 w-24 bg-[#0f4c81] mx-auto rounded-full"></div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {/* General Ultrasound */}
                        <div className="premium-card p-8 md:p-10 space-y-6 hover:border-blue-200">
                            <div className="h-14 w-14 bg-blue-100 rounded-2xl flex items-center justify-center">
                                <Activity className="w-8 h-8 text-[#0f4c81]" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900">General & Abdominal Scans</h3>
                            <p className="text-gray-600 leading-relaxed">
                                We perform comprehensive scans for the abdomen, pelvis, thyroid, and other soft tissues. These help in diagnosing stones, cysts, infections, and organ enlargements effectively.
                            </p>
                            <ul className="space-y-3 pt-4">
                                {['Liver & Gallbladder', 'Kidney & Bladder (KUB)', 'Thyroid & Neck'].map((li, i) => (
                                    <li key={i} className="flex items-center gap-3 text-gray-700 font-medium">
                                        <ShieldCheck className="w-5 h-5 text-emerald-500" /> {li}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Maternity Ultrasound */}
                        <div className="premium-card p-8 md:p-10 space-y-6 hover:border-pink-200">
                            <div className="h-14 w-14 bg-pink-100 rounded-2xl flex items-center justify-center">
                                <Baby className="w-8 h-8 text-pink-600" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900">Pregnancy & Maternity</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Monitoring the growth and health of your baby is our priority. We offer detailed pregnancy scans at every stage, from early confirmation to growth monitoring and color doppler studies.
                            </p>
                            <ul className="space-y-3 pt-4">
                                {['Early Pregnancy Scan', 'Anomaly Scan (Level II)', 'Growth & Doppler Scan'].map((li, i) => (
                                    <li key={i} className="flex items-center gap-3 text-gray-700 font-medium">
                                        <ShieldCheck className="w-5 h-5 text-emerald-500" /> {li}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Call to Action Section with Image Overlap */}
                <div className="relative rounded-[3rem] overflow-hidden bg-gradient-to-br from-[#0f4c81] to-[#1e3a8a] p-12 md:p-20 text-white mb-24">
                    <div className="absolute top-0 right-0 p-10 opacity-10">
                        <Scan className="w-64 h-64" />
                    </div>
                    <div className="max-w-3xl space-y-8 relative z-10">
                        <h2 className="text-3xl md:text-5xl font-bold leading-tight">
                            Accurate Diagnostics, Timely Care
                        </h2>
                        <p className="text-white/90 text-lg leading-relaxed">
                            Don't delay your diagnosis. With our advanced imaging technology and experienced radiologists, you get reliable reports that help your doctor treat you better.
                        </p>
                        <div className="grid sm:grid-cols-2 gap-6 pt-6">
                            <div className="glass p-6 rounded-2xl">
                                <h4 className="font-bold text-xl mb-2">Fast Reporting</h4>
                                <p className="text-sm text-white/80">Get your reports same-day for faster treatment.</p>
                            </div>
                            <div className="glass p-6 rounded-2xl">
                                <h4 className="font-bold text-xl mb-2">Affordable</h4>
                                <p className="text-sm text-white/80">High-quality imaging at reasonable prices.</p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-12">
                        <Link href="#appointment" className="inline-flex items-center gap-3 bg-white text-[#0f4c81] px-10 py-4 rounded-2xl font-bold text-lg hover:bg-blue-50 transition-all shadow-xl hover:-translate-y-1">
                            Schedule Your Scan <ArrowRight className="w-5 h-5" />
                        </Link>
                    </div>
                </div>

                {/* Technology & Interpretation */}
                <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
                    <div className="relative group overflow-hidden rounded-3xl shadow-2xl h-[400px]">
                        <Image
                            src="/ultrasound2.jpg"
                            alt="Doctor performing ultrasound"
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                    </div>
                    <div className="space-y-8">
                        <div className="space-y-4">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Why Choose Raj Nursing Home?</h2>
                            <p className="text-gray-600 text-lg leading-relaxed">
                                We combine technical expertise with compassionate care. Our facility is designed to ensure privacy and comfort, especially for femal patients requiring sensitive scans.
                            </p>
                        </div>

                        <div className="space-y-6">
                            {[
                                "Advanced Digital Ultrasound Machines",
                                "Experienced Radiologists & Technicians",
                                "Private & Comfortable Scanning Rooms",
                                "Comprehensive Diagnostic Support"
                            ].map((text, i) => (
                                <div key={i} className="flex items-center gap-4 bg-gray-50 p-4 rounded-xl border border-gray-100">
                                    <div className="h-10 w-10 flex items-center justify-center bg-[#0f4c81] text-white rounded-lg">
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
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Your Trusted Imaging Partner in Hapur</h2>
                    <p className="leading-relaxed text-gray-600 text-lg">
                        Whether you need a routine health check, abdominal scan, or maternity ultrasound, Raj Nursing Home is your trusted partner for diagnostic imaging in Hapur. We ensure that every scan is performed with the utmost care and precision, giving you the peace of mind you deserve. Visit us today for reliable and affordable ultrasound services.
                    </p>
                </div>

            </div>
        </div>
    );
}

