"use client";

import Image from "next/image";
import Link from "next/link";
import { Baby, Heart, Stethoscope, Calendar, UserCheck, ShieldCheck, Clock, ArrowRight } from "lucide-react";

export default function WomanHealthPage() {
    return (
        <div className="bg-white min-h-screen animate-page-enter">
            {/* Hero Section */}
            <div className="relative h-[450px] md:h-[550px] flex items-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/raj/banner1.webp"
                        alt="Woman's Health Center"
                        fill
                        className="object-cover object-center scale-105 animate-pulse-slow"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#c026d3] via-[#c026d3]/90 to-transparent z-10"></div>
                </div>

                <div className="container mx-auto px-4 z-20 relative">
                    <div className="max-w-3xl space-y-6">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-white text-sm font-medium animate-float">
                            <Baby className="w-4 h-4 text-fuchsia-200 fill-fuchsia-200" />
                            <span>Comprehensive Woman's Care</span>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
                            Dedicated to <span className="text-fuchsia-200">Woman's Health</span>
                        </h1>
                        <p className="text-lg text-gray-100 leading-relaxed max-w-2xl">
                            Compassionate care for every stage of a woman's life. From adolescence to maternity and menopause, we are here for you with expert gynecological services.
                        </p>
                        <div className="flex flex-wrap gap-4 pt-4">
                            <Link href="#appointment" className="btn-primary bg-white text-[#c026d3] hover:bg-fuchsia-50 border-none">
                                Book Appointment <ArrowRight className="w-4 h-4" />
                            </Link>
                            <nav className="flex items-center text-sm text-white/80 py-3">
                                <Link href="/" className="hover:text-white transition-colors">Home</Link>
                                <span className="mx-2">/</span>
                                <span className="text-white font-semibold">Woman's Health</span>
                            </nav>
                        </div>
                    </div>
                </div>

                {/* Floating Doctor Image */}
                <div className="absolute right-0 bottom-0 h-full w-[40%] z-20 hidden lg:block opacity-90 transition-transform hover:scale-105 duration-700">
                    <Image
                        src="/raj/dr.Vipin.jpg"
                        alt="Gynecologist"
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
                        { icon: Baby, label: "Maternity Care", color: "text-fuchsia-600 bg-fuchsia-50" },
                        { icon: Heart, label: "Fertility Solutions", color: "text-rose-600 bg-rose-50" },
                        { icon: ShieldCheck, label: "Advanced Surgery", color: "text-indigo-600 bg-indigo-50" },
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
                            <h2 className="text-sm font-bold tracking-widest text-[#c026d3] uppercase">Complete Care</h2>
                            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                                Empowering Women Through Better Health
                            </h3>
                        </div>
                        <p className="text-gray-600 text-lg leading-relaxed">
                            A woman's health needs evolve with time, and having a trusted medical partner is essential. At Raj Nursing Home, we provide a safe, comfortable, and confidential environment for all your gynecological and obstetric needs.
                        </p>
                        <p className="text-gray-600 text-lg leading-relaxed">
                            Our team of experienced gynecologists uses the latest medical advancements to provide treatments ranging from routine check-ups to complex surgeries and high-risk pregnancy management.
                        </p>
                        <div className="bg-fuchsia-50 border-l-4 border-[#c026d3] p-6 rounded-r-xl">
                            <p className="italic text-[#c026d3]">
                                "We believe in holistic care that nurtures both physical and emotional well-being of every woman who walks through our doors."
                            </p>
                        </div>
                    </div>
                    <div className="relative group overflow-hidden rounded-3xl shadow-2xl h-[450px]">
                        <Image
                            src="/raj/gyne-2.jpg"
                            alt="Maternity and Gynecology"
                            fill
                            className="object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                    </div>
                </div>

                {/* Detailed Services Grid */}
                <div className="space-y-16 mb-24">
                    <div className="text-center space-y-4 max-w-2xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Our Services</h2>
                        <div className="h-1.5 w-24 bg-[#c026d3] mx-auto rounded-full"></div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Maternity */}
                        <div className="premium-card p-8 space-y-6 hover:border-fuchsia-200">
                            <div className="h-14 w-14 bg-fuchsia-100 rounded-2xl flex items-center justify-center">
                                <Baby className="w-8 h-8 text-[#c026d3]" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900">Maternity & Delivery</h3>
                            <p className="text-gray-600 leading-relaxed text-sm">
                                Complete antenatal care, normal & C-section delivery services, and painless labor options ensuring a safe journey to motherhood.
                            </p>
                            <Link href="#contact" className="inline-flex items-center text-[#c026d3] font-semibold text-sm hover:underline">
                                Learn More <ArrowRight className="w-4 h-4 ml-1" />
                            </Link>
                        </div>

                        {/* Gynecology */}
                        <div className="premium-card p-8 space-y-6 hover:border-fuchsia-200">
                            <div className="h-14 w-14 bg-fuchsia-100 rounded-2xl flex items-center justify-center">
                                <Stethoscope className="w-8 h-8 text-[#c026d3]" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900">Gynecology</h3>
                            <p className="text-gray-600 leading-relaxed text-sm">
                                Diagnosis and treatment of menstrual disorders, PCOD/PCOS, uterine fibroids, and other reproductive health issues.
                            </p>
                            <Link href="#contact" className="inline-flex items-center text-[#c026d3] font-semibold text-sm hover:underline">
                                Learn More <ArrowRight className="w-4 h-4 ml-1" />
                            </Link>
                        </div>

                        {/* Surgery */}
                        <div className="premium-card p-8 space-y-6 hover:border-fuchsia-200">
                            <div className="h-14 w-14 bg-fuchsia-100 rounded-2xl flex items-center justify-center">
                                <ShieldCheck className="w-8 h-8 text-[#c026d3]" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900">Laparoscopic Surgery</h3>
                            <p className="text-gray-600 leading-relaxed text-sm">
                                Minimally invasive surgeries for hysterectomy, ovarian cysts, and ectopic pregnancy for faster recovery and less pain.
                            </p>
                            <Link href="#contact" className="inline-flex items-center text-[#c026d3] font-semibold text-sm hover:underline">
                                Learn More <ArrowRight className="w-4 h-4 ml-1" />
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Call to Action Section with Image Overlap */}
                <div className="relative rounded-[3rem] overflow-hidden bg-gradient-to-br from-[#c026d3] to-[#a21caf] p-12 md:p-20 text-white mb-24">
                    <div className="absolute top-0 right-0 p-10 opacity-10">
                        <Heart className="w-64 h-64" />
                    </div>
                    <div className="max-w-3xl space-y-8 relative z-10">
                        <h2 className="text-3xl md:text-5xl font-bold leading-tight">
                            Your Wellness, Our Priority
                        </h2>
                        <p className="text-white/90 text-lg leading-relaxed">
                            Don't ignore the signs. Regular check-ups are key to preventing long-term health issues. Schedule a consultation with our experts today.
                        </p>
                        <div className="grid sm:grid-cols-2 gap-6 pt-6">
                            <div className="glass p-6 rounded-2xl">
                                <h4 className="font-bold text-xl mb-2">Private & Confidential</h4>
                                <p className="text-sm text-white/80">We respect your privacy at every step.</p>
                            </div>
                            <div className="glass p-6 rounded-2xl">
                                <h4 className="font-bold text-xl mb-2">24/7 Maternity Support</h4>
                                <p className="text-sm text-white/80">Always here when you need us most.</p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-12">
                        <Link href="#appointment" className="inline-flex items-center gap-3 bg-white text-[#c026d3] px-10 py-4 rounded-2xl font-bold text-lg hover:bg-fuchsia-50 transition-all shadow-xl hover:-translate-y-1">
                            Book Consultation <ArrowRight className="w-5 h-5" />
                        </Link>
                    </div>
                </div>

                {/* Technology & Interpretation */}
                <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
                    <div className="relative group overflow-hidden rounded-3xl shadow-2xl h-[400px]">
                        <Image
                            src="/raj/gyne-2.jpg"
                            alt="Advanced Care for Women"
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                    </div>
                    <div className="space-y-8">
                        <div className="space-y-4">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Why Choose Us?</h2>
                            <p className="text-gray-600 text-lg leading-relaxed">
                                Raj Nursing Home is dedicated to providing high-quality, specialized care for women. Our facility combines modern technology with a warm, caring touch to ensure you feel supported throughout your healthcare journey.
                            </p>
                        </div>

                        <div className="space-y-6">
                            {[
                                "Experienced Gynecologists",
                                "Modern Labor Rooms",
                                "NICU Support for Newborns",
                                "Comprehensive Antenatal Programs"
                            ].map((text, i) => (
                                <div key={i} className="flex items-center gap-4 bg-gray-50 p-4 rounded-xl border border-gray-100">
                                    <div className="h-10 w-10 flex items-center justify-center bg-[#c026d3] text-white rounded-lg">
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
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Expert Care for Every Woman</h2>
                    <p className="leading-relaxed text-gray-600 text-lg">
                        At Raj Nursing Home, we are committed to excellence in women's health. Whether you are expecting a baby, planning a family, or addressing gynecological concerns, our team is here to guide you with expertise and compassion. Trust us to be your partner in health for a lifetime.
                    </p>
                </div>

            </div>
        </div>
    );
}

