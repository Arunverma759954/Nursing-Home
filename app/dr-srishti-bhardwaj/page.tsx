"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Award, Baby, Briefcase, Calendar, CheckCircle2, GraduationCap, Heart, Phone, Sparkles, Users } from "lucide-react";

export default function DrSrishtiBhardwaj() {
    return (
        <div className="bg-white min-h-screen animate-page-enter mt-20">
            {/* Hero Section */}
            <div className="relative h-[400px] md:h-[500px] flex items-center overflow-hidden bg-gradient-to-br from-rose-900 via-pink-800 to-rose-900">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.4\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }}></div>
                </div>

                <div className="container mx-auto px-6 z-10 relative">
                    <Link href="/#doctors" className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors mb-6 group">
                        <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                        <span className="font-bold">Back to Doctors</span>
                    </Link>

                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-bold">
                                <Sparkles className="w-4 h-4 fill-current" />
                                <span>Women's Health Specialist</span>
                            </div>
                            <h1 className="text-4xl md:text-6xl font-black text-white leading-tight">
                                Dr. Srishti Bhardwaj
                            </h1>
                            <p className="text-xl text-rose-200 font-bold uppercase tracking-wide">
                                BEST GYNAECOLOGIST AND PREGNANCY SPECIALIST IN HAPUR
                            </p>
                            <div className="flex flex-wrap gap-4 pt-4">
                                <div className="flex items-center gap-2 text-white">
                                    <Award className="w-5 h-5 text-yellow-400" />
                                    <span className="font-bold text-sm">10+ Years Experience</span>
                                </div>
                                <div className="flex items-center gap-2 text-white">
                                    <Baby className="w-5 h-5 text-pink-300" />
                                    <span className="font-bold text-sm">2,000+ Safe Deliveries</span>
                                </div>
                            </div>
                        </div>

                        <div className="relative">
                            <div className="relative w-full max-w-md mx-auto aspect-[3/4] rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white/20 backdrop-blur-sm">
                                <Image
                                    src="/raj/dr-Srishti.jpg"
                                    alt="Dr. Srishti Bhardwaj"
                                    fill
                                    className="object-cover object-top"
                                    priority
                                />
                            </div>
                            <div className="absolute -bottom-6 -right-6 bg-white rounded-3xl p-6 shadow-2xl hidden md:block">
                                <p className="text-4xl font-black text-rose-600">2K+</p>
                                <p className="text-sm font-bold text-gray-600">Deliveries</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-screen-2xl mx-auto px-6 py-20">
                {/* Quick Info Cards */}
                <div className="grid md:grid-cols-3 gap-6 -mt-20 relative z-10 mb-20">
                    {[
                        { icon: GraduationCap, label: "Qualification", value: "MS Obstetrics & Gynecology", color: "bg-rose-500" },
                        { icon: Briefcase, label: "Reg. No", value: "30531", color: "bg-pink-500" },
                        { icon: Calendar, label: "Specialty", value: "Obstetrics & Gynae / Pregnancy Specialist", color: "bg-red-500" }
                    ].map((item, i) => (
                        <div key={i} className="bg-white rounded-3xl p-6 shadow-2xl border border-gray-100 hover:-translate-y-2 transition-all duration-300">
                            <div className={`w-14 h-14 ${item.color} rounded-2xl flex items-center justify-center mb-4 shadow-lg`}>
                                <item.icon className="w-7 h-7 text-white" />
                            </div>
                            <p className="text-sm font-black text-gray-400 uppercase tracking-widest mb-1">{item.label}</p>
                            <p className="text-lg font-black text-gray-900">{item.value}</p>
                        </div>
                    ))}
                </div>

                {/* About Section */}
                <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">
                    <div className="space-y-8">
                        <div>
                            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
                                About <span className="text-rose-600">Dr. Srishti Bhardwaj</span>
                            </h2>
                            <div className="h-2 w-24 bg-rose-600 rounded-full"></div>
                        </div>

                        <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
                            <p className="font-medium">
                                Dr. Srishti Bhardwaj (MS Obstetrics & Gynecology), with <strong>10+ years of expertise</strong>, leads RNH's Women's Health Wing. She specializes in:
                            </p>
                            <ul className="space-y-3">
                                {[
                                    "High-risk pregnancy care",
                                    "PCOS management",
                                    "Minimally invasive surgeries (fibroid removal, ovarian cysts)",
                                    "Patient-centric approach with birth plans in local dialects",
                                    "Post-delivery Ayurvedic nutrition guides"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <CheckCircle2 className="w-6 h-6 text-rose-600 flex-shrink-0 mt-0.5" />
                                        <span className="font-semibold">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="bg-gradient-to-br from-rose-50 to-pink-50 rounded-[3rem] p-8 md:p-12 border border-rose-100">
                        <h3 className="text-2xl md:text-3xl font-black text-gray-900 mb-6">
                            Landmark Achievements
                        </h3>
                        <div className="space-y-6">
                            <div className="bg-white rounded-2xl p-6 shadow-lg">
                                <p className="text-gray-800 font-bold mb-2">✨ 2,000+ Safe Deliveries</p>
                                <p className="text-gray-600 text-sm">Credited with exceptional maternal care</p>
                            </div>
                            <div className="bg-white rounded-2xl p-6 shadow-lg">
                                <p className="text-gray-800 font-bold mb-2">🏆 UP Medical Innovation Award (2024)</p>
                                <p className="text-gray-600 text-sm">Landmark study on rural menstrual health</p>
                            </div>
                            <div className="bg-white rounded-2xl p-6 shadow-lg">
                                <p className="text-gray-800 font-bold mb-2">🏥 Hapur's First 24/7 Fetal Monitoring System</p>
                                <p className="text-gray-600 text-sm">Pioneered advanced maternal care in the region</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Patient Testimonial */}
                <div className="bg-white rounded-[4rem] p-12 md:p-16 border border-gray-100 shadow-2xl mb-20">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-10">
                            <Heart className="w-16 h-16 text-rose-500 mx-auto mb-4" />
                            <h3 className="text-3xl md:text-4xl font-black text-gray-900">What Patients Say</h3>
                        </div>
                        <div className="bg-gradient-to-r from-rose-50 to-pink-50 rounded-3xl p-8 md:p-12 border-l-4 border-rose-600">
                            <p className="text-xl text-gray-700 italic leading-relaxed mb-4 font-semibold">
                                "She held my hand during delivery and spoke in our Kavi Nagar dialect"
                            </p>
                            <p className="text-lg font-black text-rose-600">— Sunita T., Kavi Nagar</p>
                        </div>
                    </div>
                </div>

                {/* CTA Section */}
                <div className="bg-gradient-to-r from-[#800020] to-rose-700 rounded-[4rem] p-12 md:p-16 text-white text-center">
                    <h3 className="text-3xl md:text-5xl font-black mb-6">
                        Book Your Consultation Today
                    </h3>
                    <p className="text-xl text-rose-100 mb-8 max-w-2xl mx-auto">
                        Expert gynecological and maternity care from Hapur's most trusted specialist
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="tel:+916397970802" className="inline-flex items-center justify-center gap-3 bg-white text-[#800020] px-10 py-5 rounded-2xl font-black text-lg shadow-2xl hover:bg-gray-50 transition-all">
                            <Phone className="w-6 h-6" />
                            Call Now
                        </Link>
                        <Link href="/womens-health-in-hapur" className="inline-flex items-center justify-center gap-3 bg-white/10 backdrop-blur-md border-2 border-white/30 text-white px-10 py-5 rounded-2xl font-black text-lg hover:bg-white/20 transition-all">
                            Women's Health Services
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
