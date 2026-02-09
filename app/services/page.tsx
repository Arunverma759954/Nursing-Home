"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

// --- Icons (Reused from Home for consistency) ---
const PhoneIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l2.27-2.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>;
const MapPinIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></svg>;
const ClockIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>;
const MenuIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12" /><line x1="4" x2="20" y1="6" y2="6" /><line x1="4" x2="20" y1="18" y2="18" /></svg>;
const XIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>;
const MailIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>;
const FacebookIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>;
const InstagramIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>;
const ArrowRightIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>;
const HeartIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" /></svg>;
const ShieldIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.8 17 5 19 5a1 1 0 0 1 1 1z" /><path d="m9 12 2 2 4-4" /></svg>;

export default function ServicesPage() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="bg-gray-50 min-h-screen font-sans text-gray-900">

            {/* ═══════════════════════════════════════════════════════════════════════════
          HEADER (Replicated for consistency)
      ═══════════════════════════════════════════════════════════════════════════ */}
            <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-white/90 backdrop-blur-md shadow-sm py-3" : "bg-transparent py-5"}`}>
                <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                    <Link href="/" className="flex items-center gap-3 group">
                        <div className="relative w-10 h-10 md:w-12 md:h-12 transition-transform group-hover:scale-105">
                            <Image src="/RNH logo.png" alt="RNH Logo" fill className="object-contain" />
                        </div>
                        <div>
                            <h1 className="text-xl md:text-2xl font-black text-gray-900 tracking-tight leading-none group-hover:text-[#9d174d] transition-colors">
                                RAJ NURSING HOME
                            </h1>
                            <p className="text-[10px] md:text-xs font-bold text-gray-500 tracking-widest uppercase">
                                Hapur's Trusted Care
                            </p>
                        </div>
                    </Link>

                    <nav className="hidden lg:flex items-center gap-8">
                        <Link href="/" className="text-sm font-bold text-gray-600 hover:text-[#9d174d] transition-colors uppercase tracking-wide">Home</Link>
                        <Link href="/about" className="text-sm font-bold text-gray-600 hover:text-[#9d174d] transition-colors uppercase tracking-wide">About Us</Link>
                        <Link href="/services" className="text-sm font-bold text-[#9d174d] uppercase tracking-wide">Services</Link>
                        <Link href="/doctors" className="text-sm font-bold text-gray-600 hover:text-[#9d174d] transition-colors uppercase tracking-wide">Doctors</Link>
                        <Link href="/contact" className="px-6 py-2.5 bg-[#9d174d] hover:bg-[#831843] text-white text-sm font-bold rounded-full transition-all shadow-lg hover:shadow-red-500/30">
                            Book Appointment
                        </Link>
                    </nav>

                    <button className="lg:hidden p-2 text-gray-800" onClick={() => setIsMenuOpen(true)}>
                        <MenuIcon />
                    </button>
                </div>
            </header>

            {/* Mobile Menu Overlay */}
            <div className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-[60] transition-opacity duration-300 ${isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`} onClick={() => setIsMenuOpen(false)} />
            <div className={`fixed top-0 right-0 w-[85%] max-w-sm h-full bg-white z-[70] shadow-2xl transition-transform duration-300 transform ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`}>
                <div className="p-6 flex justify-between items-center border-b border-gray-100">
                    <h2 className="text-xl font-black text-gray-900">Menu</h2>
                    <button onClick={() => setIsMenuOpen(false)} className="p-2 text-gray-500 hover:text-red-500 transition-colors bg-gray-50 rounded-full">
                        <XIcon />
                    </button>
                </div>
                <div className="p-6 space-y-6">
                    <nav className="flex flex-col gap-4">
                        <Link href="/" className="text-xl font-bold text-gray-800 hover:text-[#9d174d]" onClick={() => setIsMenuOpen(false)}>Home</Link>
                        <Link href="/about" className="text-xl font-bold text-gray-800 hover:text-[#9d174d]" onClick={() => setIsMenuOpen(false)}>About Us</Link>
                        <Link href="/services" className="text-xl font-bold text-[#9d174d]" onClick={() => setIsMenuOpen(false)}>Services</Link>
                        <Link href="/doctors" className="text-xl font-bold text-gray-800 hover:text-[#9d174d]" onClick={() => setIsMenuOpen(false)}>Doctors</Link>
                        <Link href="/contact" className="w-full py-4 bg-[#9d174d] text-white text-center font-bold rounded-xl shadow-lg" onClick={() => setIsMenuOpen(false)}>
                            Book Appointment
                        </Link>
                    </nav>
                </div>
            </div>

            <main className="pt-24 md:pt-32 pb-20">

                {/* ═══════════════════════════════════════════════════════════════════════════
            HERO SECTION
        ═══════════════════════════════════════════════════════════════════════════ */}
                <section className="relative bg-[#9d174d] py-20 md:py-32 overflow-hidden rounded-[2rem] md:rounded-[3rem] mx-4 md:mx-6 shadow-2xl mb-24">
                    {/* Abstract Background Shapes */}
                    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
                    <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-black/10 rounded-full blur-3xl -ml-20 -mb-20"></div>

                    <div className="relative z-10 max-w-7xl mx-auto px-6 text-center text-white">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-xs md:text-sm font-bold uppercase tracking-wider mb-6">
                            Complete Healthcare Solutions
                        </span>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 tracking-tight leading-tight">
                            Our Medical Services
                        </h1>
                        <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto font-medium leading-relaxed">
                            Comprehensive care designed for your well-being. From advanced surgery to holistic wellness, we are here for you 24/7.
                        </p>
                    </div>
                </section>

                {/* ═══════════════════════════════════════════════════════════════════════════
            SERVICE SECTIONS
        ═══════════════════════════════════════════════════════════════════════════ */}

                <div className="max-w-7xl mx-auto px-6 space-y-32">

                    {/* 1. Emergency Care */}
                    <section className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="order-2 lg:order-1 space-y-8">
                            <div className="inline-flex items-center gap-2 text-[#9d174d] font-bold uppercase tracking-widest text-sm">
                                <span className="w-8 h-[2px] bg-[#9d174d]"></span> Emergency Care
                            </div>
                            <h2 className="text-3xl md:text-5xl font-black text-gray-900 leading-tight">
                                24/7 Rapid Response & <br /><span className="text-[#9d174d]">Critical Care.</span>
                            </h2>
                            <p className="text-gray-600 text-lg leading-relaxed">
                                When every second counts, our dedicated emergency team is ready. We provide immediate, life-saving interventions with a fully equipped ICU and trauma center.
                            </p>

                            <ul className="space-y-4">
                                {[
                                    "24/7 Emergency Response Protocol",
                                    "ICU & Critical Care Facilities",
                                    "Free Ambulance Service Map (Hapur coverage)",
                                    "Cardiac Crisis & Trauma Protocols",
                                    "Direct Admission System"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-gray-700 font-medium">
                                        <span className="w-6 h-6 rounded-full bg-red-50 flex items-center justify-center text-[#9d174d]">
                                            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                                        </span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                            <Link href="/contact" className="inline-flex items-center gap-2 text-[#9d174d] font-bold hover:gap-4 transition-all mt-4">
                                Call for Emergency <ArrowRightIcon />
                            </Link>
                        </div>
                        <div className="order-1 lg:order-2 relative">
                            <div className="relative h-[400px] md:h-[500px] rounded-[2.5rem] overflow-hidden shadow-2xl">
                                <Image src="/Banner_2.jpg" alt="Emergency Care" fill className="object-cover" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                <div className="absolute bottom-6 left-6 right-6 text-white">
                                    <div className="flex items-center gap-4 bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/20">
                                        <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center animate-pulse">
                                            <PhoneIcon />
                                        </div>
                                        <div>
                                            <p className="text-xs font-bold opacity-80 uppercase">Emergency Helpline</p>
                                            <p className="text-xl font-black">+91 63979 70802</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* 2. Women's Health */}
                    <section className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="relative">
                            <div className="relative h-[400px] md:h-[500px] rounded-[2.5rem] overflow-hidden shadow-2xl group">
                                <Image src="/raj/gyne-2.jpg" alt="Women's Health" fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                                <div className="absolute inset-0 bg-gradient-to-r from-pink-900/40 to-transparent"></div>
                            </div>
                            {/* Doctor Highlight Card */}
                            <div className="absolute -bottom-10 -right-4 md:-right-10 w-[280px] bg-white p-6 rounded-3xl shadow-xl border border-pink-100">
                                <div className="flex items-center gap-3 mb-3">
                                    <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-200">
                                        <Image src="/doctor-2.png" alt="Dr. Srishti" width={48} height={48} className="object-cover" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900">Dr. Srishti Bhardwaj</h4>
                                        <p className="text-xs text-[#9d174d] font-bold">Specialized Approach</p>
                                    </div>
                                </div>
                                <p className="text-xs text-gray-500 font-medium italic">"10+ years focus on Hapur women's unique health challenges."</p>
                            </div>
                        </div>
                        <div className="space-y-8 pl-0 lg:pl-10">
                            <div className="inline-flex items-center gap-2 text-[#9d174d] font-bold uppercase tracking-widest text-sm">
                                <span className="w-8 h-[2px] bg-[#9d174d]"></span> Women's Health
                            </div>
                            <h2 className="text-3xl md:text-5xl font-black text-gray-900 leading-tight">
                                Expert Care for <br /><span className="text-[#9d174d]">Every Stage of Life.</span>
                            </h2>
                            <p className="text-gray-600 text-lg leading-relaxed">
                                Comprehensive gynecological care combining modern medicine with holistic approaches. From pregnancy to menopause, we support you.
                            </p>

                            <div className="grid sm:grid-cols-2 gap-x-4 gap-y-6">
                                {[
                                    "Pregnancy Care Timeline",
                                    "PCOS Management Program",
                                    "Minimally Invasive Surgery",
                                    "Menstrual Treatments",
                                    "Ayurvedic-Nutrition Plans",
                                    "24/7 Delivery Suites"
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-3 bg-pink-50/50 p-3 rounded-xl border border-pink-100">
                                        <span className="text-pink-600">
                                            <HeartIcon />
                                        </span>
                                        <span className="text-sm font-bold text-gray-800">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* 3. Advanced Surgery */}
                    <section className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="order-2 lg:order-1 space-y-8">
                            <div className="inline-flex items-center gap-2 text-[#9d174d] font-bold uppercase tracking-widest text-sm">
                                <span className="w-8 h-[2px] bg-[#9d174d]"></span> Advanced Surgery
                            </div>
                            <h2 className="text-3xl md:text-5xl font-black text-gray-900 leading-tight">
                                Pioneering <br /><span className="text-[#9d174d]">Scarless Surgery.</span>
                            </h2>
                            <p className="text-gray-600 text-lg leading-relaxed">
                                Led by Dr. M.C. Sharma with over 1,500 procedures, providing minimally invasive solutions for faster recovery and minimal scarring.
                            </p>

                            <div className="space-y-6">
                                <div className="bg-white p-6 rounded-3xl shadow-lg border border-gray-100 flex items-start gap-4">
                                    <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center shrink-0">
                                        <ShieldIcon />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold text-gray-900">Why choose Laparoscopic?</h4>
                                        <p className="text-gray-600 text-sm mt-1">Faster recovery, less pain, and tiny incisions compared to open surgery.</p>
                                    </div>
                                </div>

                                <ul className="space-y-3 pl-2">
                                    {[
                                        "95% Same-Day Discharge Rate",
                                        "Scarless Technique (<1cm incisions)",
                                        "Gallstones, Appendicitis, Hernia Treatment",
                                        "Free Follow-up for Hapur Residents"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-center gap-3 text-gray-700 font-bold text-sm">
                                            <div className="w-1.5 h-1.5 bg-[#9d174d] rounded-full"></div>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="order-1 lg:order-2">
                            <div className="relative h-[450px] rounded-[2.5rem] overflow-hidden shadow-2xl">
                                <Image src="/laparoscopic2.jpg" alt="Advanced Surgery" fill className="object-cover" />
                                <div className="absolute inset-0 bg-blue-900/20 mix-blend-multiply"></div>
                            </div>
                        </div>
                    </section>

                    {/* 4. Internal Medicine */}
                    <section className="bg-white rounded-[3rem] p-8 md:p-12 shadow-xl border border-gray-100">
                        <div className="text-center max-w-3xl mx-auto mb-12">
                            <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-4">
                                Internal Medicine & <span className="text-[#9d174d]">Holistic Health</span>
                            </h2>
                            <p className="text-gray-600">
                                Dr. Vipin Sharma's holistic framework focuses on systemic health mapping and preventive strategies for long-term well-being.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {[
                                { title: "Cardiac & Pulmonary", desc: "Heart health & respiratory care management.", icon: "🫀" },
                                { title: "Diabetes & Thyroid", desc: "Specialized endocrine disorder treatments.", icon: "🧬" },
                                { title: "Renal & GI Health", desc: "Kidney and digestive system care.", icon: "🧪" },
                                { title: "Neurology", desc: "Expert management of neurological disorders.", icon: "🧠" }
                            ].map((card, i) => (
                                <div key={i} className="bg-gray-50 p-6 rounded-3xl hover:bg-[#9d174d] group transition-all duration-300">
                                    <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">{card.icon}</div>
                                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-white mb-2">{card.title}</h3>
                                    <p className="text-sm text-gray-500 group-hover:text-white/80 font-medium">{card.desc}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* 5. Diagnostic Center */}
                    <section className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="relative">
                            <div className="relative h-[400px] md:h-[500px] rounded-[2.5rem] overflow-hidden shadow-2xl">
                                <Image src="/Diagnostic3.jpg" alt="Diagnostic Center" fill className="object-cover" />
                            </div>
                        </div>
                        <div className="space-y-8 pl-0 lg:pl-10">
                            <div className="inline-flex items-center gap-2 text-[#9d174d] font-bold uppercase tracking-widest text-sm">
                                <span className="w-8 h-[2px] bg-[#9d174d]"></span> Diagnostic Center
                            </div>
                            <h2 className="text-3xl md:text-5xl font-black text-gray-900 leading-tight">
                                Expert-Guided <br /><span className="text-[#9d174d]">Precision Diagnostics.</span>
                            </h2>
                            <p className="text-gray-600 text-lg leading-relaxed">
                                Advanced imaging and lab services supervised by experts to ensure accurate and timely reports for your treatment.
                            </p>

                            <div className="bg-white p-6 rounded-3xl border border-gray-200 shadow-sm space-y-4">
                                <h4 className="font-bold text-gray-900 border-b border-gray-100 pb-2">Available Tests</h4>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="flex items-center gap-2 text-sm font-bold text-gray-600">
                                        <span className="w-2 h-2 rounded-full bg-green-500"></span> ECG / 2D Echo
                                    </div>
                                    <div className="flex items-center gap-2 text-sm font-bold text-gray-600">
                                        <span className="w-2 h-2 rounded-full bg-green-500"></span> Ultrasound
                                    </div>
                                    <div className="flex items-center gap-2 text-sm font-bold text-gray-600">
                                        <span className="w-2 h-2 rounded-full bg-green-500"></span> Digital X-Ray
                                    </div>
                                    <div className="flex items-center gap-2 text-sm font-bold text-gray-600">
                                        <span className="w-2 h-2 rounded-full bg-green-500"></span> PFT Testing
                                    </div>
                                </div>
                            </div>

                            <div className="flex gap-4 pt-4">
                                <div className="flex -space-x-4">
                                    <div className="w-12 h-12 rounded-full border-2 border-white overflow-hidden relative"><Image src="/doctor-1.png" fill alt="Dr" className="object-cover" /></div>
                                    <div className="w-12 h-12 rounded-full border-2 border-white overflow-hidden relative"><Image src="/doctor-2.png" fill alt="Dr" className="object-cover" /></div>
                                </div>
                                <div>
                                    <p className="text-sm font-bold text-gray-900">Dr. Vipin • Dr. Srishti • Dr. M.C. Sharma</p>
                                    <p className="text-xs text-gray-500">Supervising all diagnostic reports</p>
                                </div>
                            </div>
                        </div>
                    </section>

                </div>

            </main>

            {/* ═══════════════════════════════════════════════════════════════════════════
          FOOTER (Reused)
      ═══════════════════════════════════════════════════════════════════════════ */}
            <footer id="contact" className="bg-[#0b1120] text-white pt-24 pb-12 relative overflow-hidden">

                {/* Abstract Background Elements */}
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
                <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px] pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 w-full h-full bg-[url('/noise.png')] opacity-[0.03] pointer-events-none"></div>

                <div className="max-w-[1700px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-20 border-b border-white/5 pb-16 mb-12 relative z-10">

                    {/* Brand Column */}
                    <div className="space-y-8">
                        <div className="flex items-center gap-4 group cursor-pointer">
                            <div className="relative w-16 h-16 transition-transform group-hover:scale-110 duration-500">
                                <div className="absolute inset-0 bg-white/10 rounded-full blur-xl group-hover:bg-white/20 transition-all"></div>
                                <Image src="/RNH logo.png" alt="RNH Logo" width={64} height={64} className="relative z-10 brightness-200 drop-shadow-lg" />
                            </div>
                            <div>
                                <h3 className="text-3xl font-black tracking-tighter bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">RAJ NURSING HOME</h3>
                                <p className="text-xs font-bold text-[#9d174d] tracking-[0.2em] uppercase mt-1">Excellence in Care</p>
                            </div>
                        </div>
                        <p className="text-gray-400 text-lg font-medium leading-loose max-w-sm">
                            Western Uttar Pradesh's most trusted medical landmark since 1999. Delivering world-class healthcare with compassion.
                        </p>
                        <div className="flex gap-4 pt-4">
                            {[<FacebookIcon />, <InstagramIcon />].map((icon, i) => (
                                <div key={i} className="w-12 h-12 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center hover:bg-[#9d174d] hover:border-[#9d174d] hover:scale-110 hover:-translate-y-1 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-red-900/50 group">
                                    <span className="text-gray-400 group-hover:text-white transition-colors">{icon}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-8">
                        <h4 className="text-xl font-black text-white uppercase tracking-wider flex items-center gap-3">
                            <span className="w-8 h-[2px] bg-[#9d174d]"></span> Quick Links
                        </h4>
                        <ul className="space-y-4">
                            {[
                                { name: "Our Story", href: "/about" },
                                { name: "Medical Services", href: "/services" },
                                { name: "Expert Team", href: "/doctors" },
                                { name: "Patient Stories", href: "/#testimonials" },
                                { name: "Contact Us", href: "/contact" }
                            ].map((link, i) => (
                                <li key={i}>
                                    <Link href={link.href} className="group flex items-center gap-2 text-gray-400 hover:text-white text-lg font-medium transition-colors">
                                        <span className="w-1.5 h-1.5 rounded-full bg-gray-600 group-hover:bg-[#9d174d] transition-colors"></span>
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-8">
                        <h4 className="text-xl font-black text-white uppercase tracking-wider flex items-center gap-3">
                            <span className="w-8 h-[2px] bg-[#9d174d]"></span> Contact Info
                        </h4>
                        <ul className="space-y-6">
                            <li className="flex items-start gap-5 group">
                                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-[#9d174d] shrink-0 group-hover:scale-110 transition-transform"><MapPinIcon /></div>
                                <span className="text-gray-400 text-lg font-medium group-hover:text-white transition-colors">Swarg Ashram Road, Hapur<br />Uttar Pradesh, 245101</span>
                            </li>
                            <li className="flex items-center gap-5 group">
                                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-[#9d174d] shrink-0 group-hover:scale-110 transition-transform"><PhoneIcon /></div>
                                <span className="text-gray-400 text-lg font-medium group-hover:text-white transition-colors">+91 63979 70802</span>
                            </li>
                            <li className="flex items-center gap-5 group">
                                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-[#9d174d] shrink-0 group-hover:scale-110 transition-transform"><MailIcon /></div>
                                <span className="text-gray-400 text-lg font-medium group-hover:text-white transition-colors">drvipinkumar@gmail.com</span>
                            </li>
                        </ul>
                    </div>

                    {/* Working Hours */}
                    <div className="space-y-8">
                        <h4 className="text-xl font-black text-white uppercase tracking-wider flex items-center gap-3">
                            <span className="w-8 h-[2px] bg-[#9d174d]"></span> Opening Hours
                        </h4>
                        <div className="p-8 bg-gradient-to-br from-white/10 to-transparent border border-white/10 rounded-[2rem] backdrop-blur-xl hover:border-[#9d174d]/30 transition-colors group">
                            <div className="flex justify-between items-center mb-6 pb-6 border-b border-white/10">
                                <span className="text-gray-300 font-bold text-lg">Emergency</span>
                                <span className="px-3 py-1 bg-red-500/20 text-red-400 border border-red-500/30 rounded-lg text-sm font-black animate-pulse">24 / 7</span>
                            </div>
                            <div className="flex justify-between items-center mb-6">
                                <span className="text-gray-300 font-bold text-lg">Pharmacy</span>
                                <span className="text-white font-black text-lg">24 / 7</span>
                            </div>
                            <div className="flex items-center gap-3 mt-8 pt-6 border-t border-white/10">
                                <div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_10px_#22c55e]"></div>
                                <p className="text-sm text-gray-400 font-medium">Open all days including holidays.</p>
                            </div>

                            <Link href="/contact">
                                <button className="w-full mt-6 py-4 bg-white text-gray-900 font-black rounded-xl hover:bg-[#9d174d] hover:text-white transition-all shadow-lg active:scale-95 flex items-center justify-center gap-2 group-hover:shadow-[#9d174d]/20">
                                    Book Appointment <ArrowRightIcon />
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="max-w-7xl mx-auto px-6 text-center">
                    <p className="text-gray-600 font-bold text-sm">
                        © 2024 Raj Nursing Home. Designed with <span className="text-red-500 animate-pulse">❤</span> in Hapur.
                    </p>
                </div>
            </footer>
        </div>
    );
}
