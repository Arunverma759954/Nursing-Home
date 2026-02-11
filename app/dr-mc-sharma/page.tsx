"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Award, Briefcase, Calendar, CheckCircle2, Clock, GraduationCap, Heart, Phone, ScissorsIcon, Users } from "lucide-react";

export default function DrMCSharma() {
    return (
        <div className="bg-white min-h-screen animate-page-enter mt-20">
            {/* Hero Section */}
            <div className="relative h-[400px] md:h-[500px] flex items-center overflow-hidden bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900">
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
                                <ScissorsIcon className="w-4 h-4" />
                                <span>Laparoscopic Surgeon</span>
                            </div>
                            <h1 className="text-4xl md:text-6xl font-black text-white leading-tight">
                                Dr. M.C. Sharma
                            </h1>
                            <p className="text-xl text-gray-300 font-bold uppercase tracking-wide">
                                SENIOR LAPAROSCOPIC & GENERAL SURGEON – RAJ NURSING HOME, HAPUR
                            </p>
                            <div className="flex flex-wrap gap-4 pt-4">
                                <div className="flex items-center gap-2 text-white">
                                    <Award className="w-5 h-5 text-yellow-400" />
                                    <span className="font-bold text-sm">20+ Years Experience</span>
                                </div>
                                <div className="flex items-center gap-2 text-white">
                                    <Users className="w-5 h-5 text-green-400" />
                                    <span className="font-bold text-sm">1,500+ Surgeries</span>
                                </div>
                            </div>
                        </div>

                        <div className="relative">
                            <div className="relative w-full max-w-md mx-auto aspect-[3/4] rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white/20 backdrop-blur-sm">
                                <Image
                                    src="/raj/M.C.Sharma.jpg"
                                    alt="Dr. M.C. Sharma"
                                    fill
                                    className="object-cover object-top"
                                    priority
                                />
                            </div>
                            <div className="absolute -bottom-6 -right-6 bg-white rounded-3xl p-6 shadow-2xl hidden md:block">
                                <p className="text-4xl font-black text-gray-900">20+</p>
                                <p className="text-sm font-bold text-gray-600">Years</p>
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
                        { icon: GraduationCap, label: "Qualification", value: "MBBS, MS - Surgery", color: "bg-slate-600" },
                        { icon: Briefcase, label: "Reg. No", value: "49495", color: "bg-gray-700" },
                        { icon: Clock, label: "OPD Hours", value: "9 AM - 2 PM (Mon-Sat)", color: "bg-gray-800" }
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
                                About <span className="text-gray-700">Dr. M.C. Sharma</span>
                            </h2>
                            <div className="h-2 w-24 bg-gray-900 rounded-full"></div>
                        </div>

                        <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
                            <p className="font-medium">
                                With over <strong>20 years of surgical excellence</strong> in Hapur, Dr. M.C. Sharma (MBBS, MS - Surgery) is a pioneer in minimally invasive procedures at Raj Nursing Home. Trained at premier institutions, he has performed <strong>1,500+ successful laparoscopic surgeries</strong> for:
                            </p>
                            <ul className="space-y-3">
                                {[
                                    "Appendicitis",
                                    "Gallstones",
                                    "Hernia",
                                    "Gynecological conditions"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <CheckCircle2 className="w-6 h-6 text-gray-700 flex-shrink-0 mt-0.5" />
                                        <span className="font-semibold">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="bg-gradient-to-br from-gray-50 to-slate-50 rounded-[3rem] p-8 md:p-12 border border-gray-200">
                        <h3 className="text-2xl md:text-3xl font-black text-gray-900 mb-6">
                            The "Stitchless Technique"
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6 font-medium">
                            His signature <strong>"Stitchless Technique"</strong> ensures:
                        </p>
                        <div className="grid gap-4">
                            {[
                                { label: "Scars under 1cm", icon: "✨" },
                                { label: "70% faster recovery", icon: "⚡" },
                                { label: "Same-day discharge for 90% of patients", icon: "🏠" }
                            ].map((item, i) => (
                                <div key={i} className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 flex items-center gap-3">
                                    <span className="text-2xl">{item.icon}</span>
                                    <span className="font-bold text-gray-800">{item.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Emergency Services */}
                <div className="bg-red-600 rounded-[4rem] p-12 md:p-16 text-white mb-20">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-8">
                            <div className="w-20 h-20 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center mx-auto mb-6">
                                <Heart className="w-10 h-10 text-white" />
                            </div>
                            <h3 className="text-3xl md:text-4xl font-black mb-4">24/7 Emergency Surgical Unit</h3>
                            <p className="text-xl text-red-100 leading-relaxed">
                                Dr. Sharma leads our round-the-clock emergency surgical unit, handling complex trauma cases from across Western Uttar Pradesh.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Patient Testimonial & Excellence */}
                <div className="grid lg:grid-cols-2 gap-10 mb-20">
                    <div className="bg-white rounded-[3rem] p-10 border border-gray-100 shadow-2xl">
                        <h3 className="text-2xl font-black text-gray-900 mb-6">Patient Testimonial</h3>
                        <div className="bg-gradient-to-r from-gray-50 to-slate-50 rounded-3xl p-8 border-l-4 border-gray-900">
                            <p className="text-lg text-gray-700 italic leading-relaxed mb-4 font-semibold">
                                "He explained my gallbladder surgery in simple Hindi and visited me hourly post-op"
                            </p>
                            <p className="text-lg font-black text-gray-900">— Ramesh K., Hapur</p>
                        </div>
                    </div>

                    <div className="bg-gradient-to-br from-gray-900 to-slate-800 rounded-[3rem] p-10 text-white shadow-2xl">
                        <h3 className="text-2xl font-black mb-6">Clinical Excellence</h3>
                        <p className="text-gray-300 leading-relaxed font-medium">
                            With decades of surgical experience and a reputation for clinical excellence, Dr. M.C. Sharma is one of the most trusted laparoscopic surgeons in Hapur. He brings <strong className="text-white">precision, skill, and compassion</strong> to every procedure, offering patients minimally invasive surgical solutions.
                        </p>
                        <p className="text-gray-400 italic mt-6">
                            Beyond the OT, he conducts free surgical camps in rural Ghaziabad and mentors medical students.
                        </p>
                    </div>
                </div>

                {/* CTA Section */}
                <div className="bg-gradient-to-r from-gray-900 to-slate-800 rounded-[4rem] p-12 md:p-16 text-white text-center">
                    <h3 className="text-3xl md:text-5xl font-black mb-6">
                        Book Your Consultation Today
                    </h3>
                    <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                        Expert laparoscopic and general surgery from one of Hapur's most experienced surgeons
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="tel:+916397970802" className="inline-flex items-center justify-center gap-3 bg-white text-gray-900 px-10 py-5 rounded-2xl font-black text-lg shadow-2xl hover:bg-gray-50 transition-all">
                            <Phone className="w-6 h-6" />
                            Call Now
                        </Link>
                        <Link href="/laparoscopic-surgery-hapur" className="inline-flex items-center justify-center gap-3 bg-white/10 backdrop-blur-md border-2 border-white/30 text-white px-10 py-5 rounded-2xl font-black text-lg hover:bg-white/20 transition-all">
                            Laparoscopic Services
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
