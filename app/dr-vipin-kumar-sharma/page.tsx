"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Award, Briefcase, Calendar, CheckCircle2, GraduationCap, Heart, Phone, Stethoscope, Users } from "lucide-react";

export default function DrVipinKumarSharma() {
    return (
        <div className="bg-white min-h-screen animate-page-enter mt-20">
            {/* Hero Section */}
            <div className="relative h-[400px] md:h-[500px] flex items-center overflow-hidden bg-gradient-to-br from-indigo-900 via-indigo-800 to-purple-900">
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
                                <Stethoscope className="w-4 h-4" />
                                <span>MD Medicine Specialist</span>
                            </div>
                            <h1 className="text-4xl md:text-6xl font-black text-white leading-tight">
                                Dr. Vipin Kumar Sharma
                            </h1>
                            <p className="text-xl text-indigo-200 font-bold uppercase tracking-wide">
                                MD MEDICINE SPECIALIST AND GENERAL PHYSICIAN IN HAPUR
                            </p>
                            <div className="flex flex-wrap gap-4 pt-4">
                                <div className="flex items-center gap-2 text-white">
                                    <Award className="w-5 h-5 text-yellow-400" />
                                    <span className="font-bold text-sm">15+ Years Experience</span>
                                </div>
                                <div className="flex items-center gap-2 text-white">
                                    <Users className="w-5 h-5 text-green-400" />
                                    <span className="font-bold text-sm">10,000+ Patients Treated</span>
                                </div>
                            </div>
                        </div>

                        <div className="relative">
                            <div className="relative w-full max-w-md mx-auto aspect-[3/4] rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white/20 backdrop-blur-sm">
                                <Image
                                    src="/raj/dr.Vipin.jpg"
                                    alt="Dr. Vipin Kumar Sharma"
                                    fill
                                    className="object-cover object-top"
                                    priority
                                />
                            </div>
                            <div className="absolute -bottom-6 -right-6 bg-white rounded-3xl p-6 shadow-2xl hidden md:block">
                                <p className="text-4xl font-black text-indigo-600">15+</p>
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
                        { icon: GraduationCap, label: "Qualification", value: "MBBS, MD Medicine", color: "bg-blue-500" },
                        { icon: Briefcase, label: "Reg. No", value: "Pediatrics - DMC/R/7973", color: "bg-purple-500" },
                        { icon: Calendar, label: "Specialty", value: "Cardiac Physician", color: "bg-indigo-500" }
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
                                About <span className="text-indigo-600">Dr. Vipin Sharma</span>
                            </h2>
                            <div className="h-2 w-24 bg-indigo-600 rounded-full"></div>
                        </div>

                        <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
                            <p className="font-medium">
                                Dr. Vipin Sharma (MBBS, MD Medicine), formerly of Safdarjung Hospital Delhi, brings <strong>15+ years of holistic internal medicine expertise</strong> to Raj Nursing Home. As Hapur's leading systemic health physician, he manages interconnected conditions:
                            </p>
                            <ul className="space-y-3">
                                {[
                                    "Cardiac (hypertension, heart failure)",
                                    "Pulmonary (asthma, COPD)",
                                    "Renal disorders",
                                    "Endocrine diseases (diabetes/thyroid)"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <CheckCircle2 className="w-6 h-6 text-indigo-600 flex-shrink-0 mt-0.5" />
                                        <span className="font-semibold">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-[3rem] p-8 md:p-12 border border-indigo-100">
                        <h3 className="text-2xl md:text-3xl font-black text-gray-900 mb-6">
                            Whole-Body Health Protocol
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6 font-medium">
                            His <strong>"Whole-Body Health Protocol"</strong> combines advanced diagnostics (ECG, 2D Echo, PFT) with personalized lifestyle plans.
                        </p>
                        <div className="bg-white rounded-2xl p-6 border-l-4 border-indigo-600 shadow-lg">
                            <p className="text-gray-600 italic leading-relaxed font-semibold">
                                "Dr. Sharma spotted my kidney issue during a routine BP check and prevented dialysis"
                            </p>
                            <p className="text-sm font-bold text-indigo-600 mt-3">— Priya M., Pilkhuwa</p>
                        </div>
                    </div>
                </div>

                {/* Community Service */}
                <div className="bg-gray-900 rounded-[4rem] p-12 md:p-16 text-white mb-20">
                    <div className="max-w-4xl mx-auto text-center space-y-6">
                        <Heart className="w-16 h-16 text-red-400 mx-auto" />
                        <h3 className="text-3xl md:text-4xl font-black">Community Health Initiatives</h3>
                        <p className="text-xl text-gray-300 leading-relaxed">
                            He oversees RNH's free community health initiatives, including <strong>monsoon fever camps</strong> and <strong>air pollution impact workshops</strong> near Ganga College.
                        </p>
                    </div>
                </div>

                {/* CTA Section */}
                <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-[4rem] p-12 md:p-16 text-white text-center">
                    <h3 className="text-3xl md:text-5xl font-black mb-6">
                        Book Your Consultation Today
                    </h3>
                    <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
                        Get expert care from one of Hapur's most experienced physicians
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="tel:+916397970802" className="inline-flex items-center justify-center gap-3 bg-white text-indigo-600 px-10 py-5 rounded-2xl font-black text-lg shadow-2xl hover:bg-gray-50 transition-all">
                            <Phone className="w-6 h-6" />
                            Call Now
                        </Link>
                        <Link href="/contact" className="inline-flex items-center justify-center gap-3 bg-white/10 backdrop-blur-md border-2 border-white/30 text-white px-10 py-5 rounded-2xl font-black text-lg hover:bg-white/20 transition-all">
                            Book Appointment
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
