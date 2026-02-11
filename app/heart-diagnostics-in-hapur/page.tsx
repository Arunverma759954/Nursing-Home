"use client";

import Image from "next/image";
import Link from "next/link";

const Heart = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M19 14c1.49-1.28 3.6-2.34 4.63-4.97a5.5 5.5 0 0 0-1.65-7.14 6 6 0 0 0-8.17 1L12 4.7l-1.81-1.8a6 6 0 0 0-8.18-1 5.5 5.5 0 0 0 1.67 7.15C4.66 11.66 6.77 12.72 8.26 14L12 18l7-4Z" />
    </svg>
);

const Activity = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
    </svg>
);

const ShieldCheck = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
        <path d="m9 12 2 2 4-4" />
    </svg>
);

const Clock = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
    </svg>
);

const ArrowRight = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <line x1="5" y1="12" x2="19" y2="12" />
        <polyline points="12 5 19 12 12 19" />
    </svg>
);

const UserCheck = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <polyline points="16 11 18 13 22 9" />
    </svg>
);

export default function HeartDiagnosticsPage() {
    return (
        <div className="bg-white min-h-screen animate-page-enter">
            {/* Hero Section */}
            <div className="relative h-[450px] md:h-[550px] flex items-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/raj/banner1.webp"
                        alt="Heart Diagnostics Banner"
                        fill
                        className="object-cover object-center scale-105 animate-pulse-slow"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#701a2e] via-[#701a2e]/90 to-transparent z-10"></div>
                </div>

                <div className="container mx-auto px-4 z-20 relative">
                    <div className="max-w-3xl space-y-6">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-white text-sm font-medium animate-float">
                            <Heart className="w-4 h-4 text-rose-400 fill-rose-400" />
                            <span>Cardiac Excellence Center</span>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
                            Heart Diagnostics – <span className="text-rose-400">2D Echo & ECG</span>
                        </h1>
                        <p className="text-lg text-gray-200 leading-relaxed max-w-2xl">
                            Advanced cardiac assessment delivering precision results for a healthier life. Experience world-class heart care at Raj Nursing Home.
                        </p>
                        <div className="flex flex-wrap gap-4 pt-4">
                            <Link href="#appointment" className="btn-primary">
                                Book Diagnostic <ArrowRight className="w-4 h-4" />
                            </Link>
                            <nav className="flex items-center text-sm text-white/80 py-3">
                                <Link href="/" className="hover:text-white transition-colors">Home</Link>
                                <span className="mx-2">/</span>
                                <span className="text-white font-semibold">Heart Diagnostics</span>
                            </nav>
                        </div>
                    </div>
                </div>

                {/* Floating Doctor Image */}
                <div className="absolute right-0 bottom-0 h-full w-[40%] z-20 hidden lg:block opacity-90 transition-transform hover:scale-105 duration-700">
                    <Image
                        src="/raj/dr.Vipin.jpg"
                        alt="Dr. Vipin Kumar Sharma"
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
                        { icon: Activity, label: "Real-time Imaging", color: "text-rose-600 bg-rose-50" },
                        { icon: ShieldCheck, label: "Certified Labs", color: "text-blue-600 bg-blue-50" },
                        { icon: Clock, label: "Fast Reports", color: "text-amber-600 bg-amber-50" },
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
                            <h2 className="text-sm font-bold tracking-widest text-rose-600 uppercase">Introduction</h2>
                            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                                Prioritizing Your Cardiac Health with Precision
                            </h3>
                        </div>
                        <p className="text-gray-600 text-lg leading-relaxed">
                            Cardiovascular health is crucial to general wellbeing, and early diagnosis can save lives. Our contemporary diagnostic center assists physicians in recognizing the functioning of the heart and vessels with unmatched accuracy.
                        </p>
                        <div className="bg-rose-50 border-l-4 border-rose-600 p-6 rounded-r-xl">
                            <p className="italic text-rose-900">
                                "At Raj Nursing Home, cardiac assessments are performed in a relaxed, caring environment by our heart experts, ensuring you feel educated and self-assured throughout."
                            </p>
                        </div>
                    </div>
                    <div className="relative group overflow-hidden rounded-3xl shadow-2xl h-[400px]">
                        <Image
                            src="/ecg2.jpg"
                            alt="Heart Diagnostic Lab"
                            fill
                            className="object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                    </div>
                </div>

                {/* Detailed Services Grid */}
                <div className="space-y-16 mb-24">
                    <div className="text-center space-y-4 max-w-2xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Comprehensive Testing Services</h2>
                        <div className="h-1.5 w-24 bg-rose-600 mx-auto rounded-full"></div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {/* 2D Echo */}
                        <div className="premium-card p-8 md:p-10 space-y-6 hover:border-rose-200">
                            <div className="h-14 w-14 bg-rose-100 rounded-2xl flex items-center justify-center">
                                <Activity className="w-8 h-8 text-rose-600" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900">2D Echo Testing</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Utilizes high-frequency sound waves to generate real-time images of your heart. It allows our experts to view chambers, valves, and blood flow patterns with exceptional clarity. Safely performed for all ages with no discomfort.
                            </p>
                            <ul className="space-y-3 pt-4">
                                {['Non-invasive & Painless', 'Real-time Valve Visibility', 'Blood Flow Pattern Map'].map((li, i) => (
                                    <li key={i} className="flex items-center gap-3 text-gray-700 font-medium">
                                        <ShieldCheck className="w-5 h-5 text-emerald-500" /> {li}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* ECG Role */}
                        <div className="premium-card p-8 md:p-10 space-y-6 hover:border-blue-200">
                            <div className="h-14 w-14 bg-blue-100 rounded-2xl flex items-center justify-center">
                                <Heart className="w-8 h-8 text-blue-600" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900">ECG Services</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Electrocardiograms record your heart's electrical activity to identify irregular rhythms and stress-related changes. Our modern equipment ensures accurate readings vital for timely diagnosis and proper treatment planning.
                            </p>
                            <ul className="space-y-3 pt-4">
                                {['Rapid Signal Recording', 'Arrythmia Detection', 'Coronary Artery Assessment'].map((li, i) => (
                                    <li key={i} className="flex items-center gap-3 text-gray-700 font-medium">
                                        <ShieldCheck className="w-5 h-5 text-emerald-500" /> {li}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Call to Action Section with Image Overlap */}
                <div className="relative rounded-[3rem] overflow-hidden medical-gradient p-12 md:p-20 text-white mb-24">
                    <div className="absolute top-0 right-0 p-10 opacity-10">
                        <Heart className="w-64 h-64" />
                    </div>
                    <div className="max-w-3xl space-y-8 relative z-10">
                        <h2 className="text-3xl md:text-5xl font-bold leading-tight">
                            Integrated Cardiac Care for Long-term Wellness
                        </h2>
                        <p className="text-white/80 text-lg leading-relaxed">
                            Our holistic approach combines scientific knowledge with advanced technology. Beyond diagnostics, we provide seamless lifestyle guidelines and follow-up treatments to ensure your heart stays strong.
                        </p>
                        <div className="grid sm:grid-cols-2 gap-6 pt-6">
                            <div className="glass p-6 rounded-2xl">
                                <h4 className="font-bold text-xl mb-2">Preventive Screening</h4>
                                <p className="text-sm text-white/70">Early warning signs detected before symptoms take effect.</p>
                            </div>
                            <div className="glass p-6 rounded-2xl">
                                <h4 className="font-bold text-xl mb-2">Patient-Centered</h4>
                                <p className="text-sm text-white/70">Confidential, caring, and professional environment.</p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-12">
                        <Link href="#appointment" className="inline-flex items-center gap-3 bg-white text-[#701a2e] px-10 py-4 rounded-2xl font-bold text-lg hover:bg-rose-50 transition-all shadow-xl hover:-translate-y-1">
                            Schedule Your Check-up <ArrowRight className="w-5 h-5" />
                        </Link>
                    </div>
                </div>

                {/* Technology & Interpretation */}
                <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
                    <div className="relative group overflow-hidden rounded-3xl shadow-2xl h-[400px]">
                        <Image
                            src="/ecg.jpg"
                            alt="Advanced Heart Monitoring"
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                    </div>
                    <div className="space-y-8">
                        <div className="space-y-4">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Expert Interpretation</h2>
                            <p className="text-gray-600 text-lg leading-relaxed">
                                Proper interpretation is just as important as the test itself. Our highly trained medical staff analyze your results using the latest insights to provide meaningful conclusions.
                            </p>
                        </div>

                        <div className="space-y-6">
                            {[
                                "Highly Trained interpreting Experts",
                                "Advanced High-Precision Equipment",
                                "No Wait Time for Critical Results"
                            ].map((text, i) => (
                                <div key={i} className="flex items-center gap-4 bg-gray-50 p-4 rounded-xl border border-gray-100">
                                    <div className="h-10 w-10 flex items-center justify-center bg-rose-600 text-white rounded-lg">
                                        {i + 1}
                                    </div>
                                    <span className="font-bold text-gray-800">{text}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Simple Conclusion Box (Requested) */}
                <div className="mt-16 bg-white border border-gray-200 rounded-3xl p-8 md:p-12 shadow-sm transition-all hover:shadow-md">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Conclusion</h2>
                    <p className="leading-relaxed text-gray-600 text-lg">
                        Diagnostics of the heart is a vital aspect of maintaining the general health. Raj Nursing Home offers patients care at all levels of their cardiac process through advanced testing, caring service, and accessible treatment. Professional guidance, as well as immediate action, is promoted through early evaluation. The decision of effective diagnostic services will ensure that people are educated, active, and assured of their heart condition today and in the future.
                    </p>
                </div>

            </div>
        </div>
    );
}
