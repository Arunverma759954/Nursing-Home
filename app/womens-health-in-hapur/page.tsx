"use client";

import Image from "next/image";
import Link from "next/link";
import { Heart, Baby, ShieldCheck, Clock, ArrowRight, UserCheck, Activity, CheckCircle2, Phone, Sparkles } from "lucide-react";

export default function WomensHealthInHapur() {
    return (
        <div className="bg-white min-h-screen animate-page-enter mt-20">
            {/* Hero Section */}
            <div className="relative h-[450px] md:h-[600px] flex items-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/raj/banner2.webp"
                        alt="Women's Health Center in Hapur"
                        fill
                        className="object-cover object-center scale-105 animate-pulse-slow"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#800020] via-[#800020]/90 to-transparent z-10"></div>
                </div>

                <div className="container mx-auto px-6 z-20 relative">
                    <div className="max-w-4xl space-y-8">
                        <div className="inline-flex mt-10 items-center gap-2 px-5 py-2.5 rounded-full glass text-white text-sm font-bold animate-float tracking-wide">
                            <Sparkles className="w-4 h-4 text-rose-300 fill-rose-300" />
                            <span>Premier Women's Healthcare</span>
                        </div>
                        <h1 className="text-4xl md:text-7xl font-black text-white leading-[1.1] tracking-tighter">
                            Women's Health & <br /><span className="text-rose-300">Maternity Excellence</span>
                        </h1>
                        <p className="text-xl text-gray-100 leading-relaxed max-w-2xl font-medium">
                            Compassionate care for every stage of womanhood. From adolescence to motherhood and beyond, Raj Nursing Home is your trusted partner for premium gynecological and maternity services in Hapur.
                        </p>
                        <div className="flex flex-wrap gap-5 pt-4">
                            <Link href="#appointment" className="px-10 py-5 bg-white text-[#800020] rounded-2xl font-black text-sm uppercase tracking-widest shadow-2xl hover:bg-rose-50 transition-all transform hover:-translate-y-1">
                                Book Consultation <ArrowRight className="w-5 h-5 ml-2 inline" />
                            </Link>
                            <nav className="flex items-center text-sm text-white/80 py-3 font-semibold">
                                <Link href="/" className="hover:text-white transition-colors">Home</Link>
                                <span className="mx-2">/</span>
                                <span className="text-white">Women's Health</span>
                            </nav>
                        </div>
                    </div>
                </div>

                {/* Floating Decoration */}
                <div className="absolute right-0 bottom-0 h-full w-[45%] z-20 hidden lg:block opacity-90 transition-transform hover:scale-105 duration-1000">
                    <Image
                        src="/raj/dr-Srishti.jpg"
                        alt="Dr. Srishti Bhardwaj"
                        fill
                        className="object-cover object-top"
                        style={{ clipPath: 'polygon(20% 0, 100% 0, 100% 100%, 0% 100%)' }}
                    />
                    <div className="absolute bottom-10 left-32 bg-white/10 backdrop-blur-xl p-6 rounded-3xl border border-white/20 shadow-2xl">
                        <p className="text-white font-black text-xl mb-1">Dr. Srishti Bhardwaj</p>
                        <p className="text-rose-200 text-sm font-bold tracking-widest uppercase">Expert Gynecologist</p>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-screen-2xl mx-auto px-6 py-24 sm:py-32">

                {/* Quick Highlights Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-32">
                    {[
                        { icon: Baby, label: "Painless Delivery", color: "text-rose-600 bg-rose-50" },
                        { icon: ShieldCheck, label: "Safe Maternity", color: "text-blue-600 bg-blue-50" },
                        { icon: Heart, label: "Compassionate Care", color: "text-red-600 bg-red-50" },
                        { icon: UserCheck, label: "Specialist Team", color: "text-emerald-600 bg-emerald-50" },
                    ].map((item, idx) => (
                        <div key={idx} className="bg-white border border-gray-100 p-8 rounded-[3rem] shadow-xl hover:shadow-[0_30px_60px_rgba(128,0,32,0.1)] transition-all duration-500 group flex flex-col items-center text-center">
                            <div className={`p-5 rounded-3xl ${item.color} group-hover:scale-110 transition-transform duration-500 mb-6 shadow-sm`}>
                                <item.icon className="w-8 h-8" />
                            </div>
                            <span className="font-extrabold text-gray-900 text-lg md:text-xl tracking-tight leading-tight">{item.label}</span>
                        </div>
                    ))}
                </div>

                {/* Section 1: Maternity Hospital - Complete Content */}
                <div className="mb-32">
                    {/* Main Section Heading */}
                    <div className="text-center max-w-5xl mx-auto mb-20 space-y-6">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 leading-tight tracking-tight">
                            Maternity Hospital in Hapur – <span className="text-[#800020]">Compassionate Care for Every Stage of Womanhood</span>
                        </h2>
                        <div className="h-2 w-32 bg-[#800020] mx-auto rounded-full"></div>
                    </div>

                    {/* Content Grid */}
                    <div className="grid lg:grid-cols-2 gap-20 items-center">
                        <div className="space-y-8 animate-page-enter">
                            <div className="space-y-6 text-gray-600 text-lg leading-relaxed font-medium">
                                <p>
                                    Are you seeking expert care for women's health? We welcome you on this deeply personal journey with us at Raj Nursing Home. We are a trusted maternity hospital in Hapur where every woman who requires simple and reasonable solutions for pregnancy or any other gynecological medical support.
                                </p>
                                <p>
                                    We treat our patients as our family members. Every woman finds our trusted maternity hospital her safest place. Our gynecologists lead, guide, and provide necessary support at every step. It starts with adolescence to motherhood and beyond.
                                </p>
                            </div>
                            <div className="inline-block p-1 bg-[#800020] rounded-full">
                                <div className="bg-white px-8 py-3 rounded-full flex items-center gap-3">
                                    <div className="w-3 h-3 rounded-full bg-[#800020] animate-pulse"></div>
                                    <span className="text-[#800020] font-black text-sm uppercase tracking-widest">Always Available 24/7</span>
                                </div>
                            </div>
                        </div>
                        <div className="relative group rounded-[4rem] overflow-hidden shadow-2xl h-[550px] border-[12px] border-white ring-1 ring-gray-100">
                            <Image
                                src="/raj/gyne-2.jpg"
                                alt="Maternity Hospital in Hapur"
                                fill
                                className="object-cover group-hover:scale-110 transition-transform duration-1000"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#800020]/40 to-transparent"></div>
                        </div>
                    </div>
                </div>

                {/* Section 2: Trusted Gynecologist (Image Left) */}
                <div className="grid lg:grid-cols-[0.8fr,1.2fr] gap-20 items-center mb-32 bg-gray-50/50 p-8 md:p-16 rounded-[4rem] border border-gray-100">
                    <div className="relative h-[650px] rounded-[3rem] overflow-hidden shadow-2xl group border-8 border-white">
                        <Image
                            src="/raj/gyne.jpg"
                            alt="Gynecologist in Hapur"
                            fill
                            className="object-cover group-hover:scale-110 transition-transform duration-1000"
                        />
                    </div>
                    <div className="space-y-8">
                        <h3 className="text-3xl md:text-5xl font-black text-gray-900 leading-tight">
                            Find Your Trusted <span className="text-[#800020]">Gynecologist in Hapur</span> <br className="hidden md:block" /> at Raj Nursing Home
                        </h3>
                        <div className="text-gray-700 text-lg leading-relaxed space-y-6 font-medium">
                            <p>When you search for a trusted gynecologist in Hapur, the prime concern will be whether the doctor will have the expertise and empathy or not.</p>

                            <p>Well, let us solve that problem for you. Our maternity hospital in Hapur is home to highly-qualified gynecologists who have always dedicated their time and efforts to providing:</p>

                            <p>The ultrasound helps patients and doctors the most to determine whether there are any critical insights or not.</p>

                            <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
                                <ul className="space-y-3">
                                    {[
                                        "Extensive kind of treatment,",
                                        "Personalised diagnosis, and",
                                        "Ongoing care."
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <CheckCircle2 className="text-[#800020] w-6 h-6 flex-shrink-0 mt-0.5" />
                                            <span className="font-bold text-gray-800 text-lg">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <p className="text-gray-800 font-semibold">
                                Are concerned about any kind of check-ups such as: advanced and compassionate pregnancy care Hapur, fertility advice, or any other gynea-related matters?
                            </p>

                            <div className="border-l-4 border-[#800020] pl-6 py-4 bg-gradient-to-r from-rose-50 to-transparent rounded-r-3xl">
                                <p className="text-gray-700 font-semibold leading-relaxed">
                                    We are extremely glad to help you out throughout this journey. We have the best doctors on-board who will make you feel respected, comfortable, and cared within the entire process.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Section 3: Pregnancy Care - Complete Content */}
                <div className="mb-32">
                    <div className="text-center max-w-5xl mx-auto mb-16 space-y-6">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 leading-tight tracking-tight">
                            Attain Complete Pregnancy Care in Hapur <span className="text-[#800020]">with Raj Nursing Home</span>
                        </h2>
                        <div className="h-2 w-32 bg-[#800020] mx-auto rounded-full"></div>
                    </div>

                    <div className="max-w-4xl mx-auto space-y-8 mb-16">
                        <p className="text-lg text-gray-600 leading-relaxed font-medium text-center">
                            Becoming father and mother is every couple's dream and a suitable family achievement. Well, the right care and guidance is necessary under such circumstances.
                        </p>
                        <p className="text-lg text-gray-600 leading-relaxed font-medium text-center">
                            So, getting into the right maternity hospital in Hapur can help you to avail premium care with extensive medical attention from the professionals.
                        </p>
                        <p className="text-lg text-gray-800 leading-relaxed font-bold text-center">
                            With Raj nursing home pregnancy care Hapur, gynecologists offer
                        </p>
                    </div>

                    <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-[3rem] border border-gray-100 shadow-2xl mb-12">
                        <ul className="space-y-5">
                            {[
                                "Frequent prenatal check-ups with skilled obstetricians",
                                "Guidance on nutrition, supplements, and safe activity",
                                "Sophisticated prenatal screenings to track your baby's growth",
                                "Safe labour and delivery in fully equipped maternity wards",
                                "Postnatal support for recovery, breastfeeding, and newborn care"
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-4">
                                    <CheckCircle2 className="text-[#800020] w-7 h-7 flex-shrink-0 mt-0.5" />
                                    <span className="font-bold text-gray-800 text-lg leading-relaxed">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="max-w-4xl mx-auto text-center">
                        <div className="bg-gradient-to-r from-rose-50 to-pink-50 p-8 md:p-12 rounded-[3rem] border-l-4 border-[#800020]">
                            <p className="text-xl text-gray-700 font-semibold leading-relaxed">
                                A medical facility like Raj Nursing Home gives you excellence with a nurturing atmosphere. We make you comfortable and joyful so that you will never feel alone during the blessed and favorable motherhood journey.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Section 4: PCOS Treatment (Content Left + Image Right) */}
                <div className="grid lg:grid-cols-[1.2fr,0.8fr] gap-20 items-center mb-32 bg-[#800020] p-8 md:p-20 rounded-[5rem] text-white overflow-hidden relative group">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -mr-20 -mt-20"></div>
                    <div className="absolute bottom-0 left-0 w-96 h-96 bg-black/10 rounded-full blur-3xl -ml-20 -mb-20"></div>

                    <div className="space-y-10 relative z-10">
                        <h3 className="text-4xl md:text-5xl font-black leading-[1.1] tracking-tighter">
                            Advanced <span className="text-rose-200">PCOS Treatment</span> <br />in Hapur
                        </h3>
                        <div className="space-y-6 text-rose-50 text-xl leading-relaxed font-medium">
                            <p>There are challenges for some women who go through PCOS. Well, it is nothing serious when treated well. If you care for a happy and comfortable journey on PCOS treatment in Hapur, visit Raj Nursing Home.</p>
                            <p className="text-rose-200 uppercase tracking-widest text-sm font-black">At Raj Nursing Home, our specialists provide:</p>
                            <ul className="grid sm:grid-cols-2 gap-6 pt-4">
                                {[
                                    "Complete hormonal evaluations and ultrasound diagnostics",
                                    "Customized lifestyle and dietary programs",
                                    "Individualized menstrual health education and support",
                                    "Expert and medical science-based therapy for long-term management"
                                ].map((li, i) => (
                                    <li key={i} className="flex items-center gap-4 bg-white/10 backdrop-blur-md p-5 rounded-3xl border border-white/20 hover:bg-white/20 transition-all">
                                        <span className="w-2 h-2 rounded-full bg-rose-300"></span>
                                        <span className="font-bold tracking-tight text-lg">{li}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="space-y-4">
                            <p className="text-rose-100/80 italic font-semibold border-l-4 border-rose-300 pl-6 leading-relaxed">
                                "Visit our gynecologists for giving you suggestions on leading the journey back to health and under control for every patient who is suffering with PCOS. We give the right result at the right treatment phase."
                            </p>
                            <p className="text-rose-200 text-sm font-bold pl-8">Were also seeking in clinical for any gynecological problem, feel free to visit our maternity hospital in Hapur.</p>
                        </div>
                    </div>
                    <div className="relative h-[550px] rounded-[3.5rem] overflow-hidden shadow-2xl border-8 border-white/10 ring-1 ring-white/20 group-hover:scale-105 transition-transform duration-1000">
                        <Image
                            src="/raj/ultrasound.jpg"
                            alt="PCOS Testing"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>

                {/* Section 5: Menstrual Disorder Clinic (Full Content Add) */}
                <div className="max-w-6xl mx-auto space-y-16 py-16">
                    <div className="grid lg:grid-cols-2 gap-20 items-center">
                        <div className="space-y-8">
                            <div className="space-y-4">
                                <span className="text-[#800020] font-black tracking-[0.3em] uppercase text-sm">Specialized Care & Treatment</span>
                                <h3 className="text-3xl md:text-5xl font-black text-gray-900 leading-tight tracking-tighter">
                                    Trusted <br /><span className="text-[#800020]">Menstrual Disorder</span> <br /> Clinic in Hapur
                                </h3>
                            </div>
                            <p className="text-xl text-gray-600 font-medium leading-relaxed">
                                The pain and discomfort in the pelvis can be energetic even for a woman who sits through irregular menstrual cycles. However, the challenging days in the everyday lifestyle look at when you visit maternity hospital in Hapur.
                            </p>
                            <p className="text-lg text-gray-800 font-bold">At Raj Nursing Home, our specialized and refined gynecologists ensure level care for the following problems:</p>
                        </div>

                        <div className="grid gap-4">
                            {[
                                "Adolescent menstrual health education and support",
                                "Missed periods (amenorrhea)",
                                "Heavy bleeding (menorrhagia)",
                                "Painful menstruation (dysmenorrhea)",
                                "Underlying gynecological conditions impacting cycles"
                            ].map((li, i) => (
                                <div key={i} className="p-6 bg-gray-50 rounded-[2rem] border border-gray-100 flex items-center gap-5 hover:bg-white hover:shadow-xl hover:-translate-x-2 transition-all duration-300 group">
                                    <div className="w-10 h-10 bg-white border-2 border-[#800020] rounded-full flex items-center justify-center shrink-0 group-hover:bg-[#800020] transition-colors">
                                        <CheckCircle2 className="w-5 h-5 text-[#800020] group-hover:text-white" />
                                    </div>
                                    <span className="font-extrabold text-gray-800 text-lg">{li}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="text-center pt-8">
                        <p className="text-2xl text-gray-900 font-black mb-10 max-w-4xl mx-auto">
                            Under these portals, every lady requires essential care, moral support, and emotional guidance that can regain her confidence and live a life full of joy and welfare.
                        </p>
                    </div>
                </div>

                {/* WHY BEST SECTION - Exact Screenshot Duplicate */}
                <div className="max-w-screen-xl mx-auto px-6 py-12 border-t border-gray-100">
                    <h3 className="text-3xl font-bold text-gray-900 mb-6">
                        Why is the Raj Nursing Home Best for Maternity Hospital in Hapur?
                    </h3>
                    <p className="text-gray-700 font-bold mb-6">
                        The reasons are simple for a Raj Nursing Home who has grabbed the attention of maximum women dealing with various gynae-related problems. The reasons are:
                    </p>
                    <ul className="space-y-3 mb-16">
                        {[
                            "Experienced gynecologists on-board",
                            "Obstetricians dedicated to women's wellness",
                            "From puberty to post-menopause, your needs are met under one roof.",
                            "Advanced imaging, operation theatres, and maternity suites for the safest care.",
                            "Medical-science-based services tailored for every individual and their preferences."
                        ].map((text, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                                <span className="font-bold text-gray-900 mt-1">✓</span>
                                <span className="text-gray-900 font-bold">{text}</span>
                            </li>
                        ))}
                    </ul>

                    {/* CTA Card Section - Exact Screenshot Duplicate */}
                    <div className="bg-white border border-gray-200 rounded-2xl p-8 md:p-12 shadow-sm">
                        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-8 tracking-tight">
                            Take the First Step Towards Better Health
                        </h2>
                        <div className="space-y-4 text-gray-700 text-lg font-bold leading-relaxed">
                            <p>
                                Whether you are preparing for motherhood, seeking relief from menstrual problems, or looking for effective PCOS management, Hapur's leading maternity hospitals are here for you.
                            </p>
                            <p>
                                Call today to book your appointment with a trusted gynecologist in Hapur and start your journey towards better health and well-being.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Appointment CTA Section */}
                <div id="appointment" className="mt-32 relative rounded-[4rem] overflow-hidden medical-gradient p-12 md:p-24 text-white group">
                    <div className="absolute top-0 right-0 p-10 opacity-10">
                        <Phone className="w-64 h-64" />
                    </div>
                    <div className="max-w-4xl space-y-10 relative z-10">
                        <h2 className="text-4xl md:text-6xl font-black leading-tight tracking-tighter">
                            Your Health is Our Priority. <br /><span className="text-rose-400">Book Your Slot.</span>
                        </h2>
                        <p className="text-2xl text-white/80 font-medium leading-relaxed">
                            Expert gynecologists and maternity care are just a call away. Skip the wait and schedule your visit today.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-6">
                            <Link href="tel:+916397970802" className="flex items-center justify-center gap-4 bg-white text-[#800020] px-12 py-6 rounded-[2rem] font-black text-xl shadow-2xl hover:bg-rose-50 transition-all hover:scale-105">
                                <Phone className="w-8 h-8" /> +91 63979 70802
                            </Link>
                            <Link href="/contact" className="flex items-center justify-center gap-4 bg-white/10 backdrop-blur-md border-2 border-white/30 text-white px-12 py-6 rounded-[2rem] font-black text-xl hover:bg-white/20 transition-all">
                                Send Enquiry
                            </Link>
                        </div>
                    </div>
                </div>

            </div >

            {/* Structured Conclusion (Bottom Padding) */}
            < div className="max-w-screen-2xl mx-auto px-6 pb-32" >
                <div className="bg-gray-50 rounded-[4rem] p-12 md:p-20 border border-gray-100">
                    <p className="text-2xl md:text-3xl font-medium text-gray-500 leading-relaxed italic text-center max-w-5xl mx-auto">
                        "Believe us while we tell you that you will feel confident and cared for with us in this process. We have the best doctors on board who will make you feel respected, comfortable, and cared for in this process."
                    </p>
                </div>
            </div >

        </div >
    );
}
