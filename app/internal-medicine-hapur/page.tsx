"use client";

import Image from "next/image";
import Link from "next/link";
import { Stethoscope, Activity, ShieldCheck, Heart, UserCheck, Clock, ArrowRight, CheckCircle2, FlaskConical, Thermometer, Brain, Sparkles, Phone } from "lucide-react";

export default function InternalMedicinePage() {
  return (
    <div className="bg-white min-h-screen animate-page-enter mt-20">
      {/* Hero Section */}
      <div className="relative h-[450px] md:h-[650px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/raj/banner3.webp"
            alt="Internal Medicine Department"
            fill
            className="object-cover object-center scale-105 animate-pulse-slow"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1d4ed8] via-[#1d4ed8]/90 to-transparent z-10"></div>
        </div>

        <div className="container mx-auto px-6 z-20 relative">
          <div className="max-w-4xl space-y-8">
            <div className="inline-flex mt-10 items-center gap-2 px-5 py-2.5 rounded-full glass text-white text-sm font-bold animate-float tracking-wide">
              <Sparkles className="w-4 h-4 text-blue-200 fill-blue-200" />
              <span>Comprehensive Adult Healthcare</span>
            </div>
            <h1 className="text-4xl md:text-7xl font-black text-white leading-[1.1] tracking-tighter">
              Expert Internal <br /><span className="text-blue-200">Medicine in Hapur</span>
            </h1>
            <p className="text-xl text-gray-100 leading-relaxed max-w-2xl font-medium">
              Raj Nursing Home provides holistic diagnosis and treatment for a wide range of adult health conditions. From chronic management to acute hospital care, our expert physicians ensure your total wellness.
            </p>
            <div className="flex flex-wrap gap-5 pt-4">
              <Link href="#appointment" className="px-10 py-5 bg-white text-[#1d4ed8] rounded-2xl font-black text-sm uppercase tracking-widest shadow-2xl hover:bg-blue-50 transition-all transform hover:-translate-y-1">
                Book Consultation <ArrowRight className="w-5 h-5 ml-2 inline" />
              </Link>
              <nav className="flex items-center text-sm text-white/80 py-3 font-semibold">
                <Link href="/" className="hover:text-white transition-colors">Home</Link>
                <span className="mx-2">/</span>
                <span className="text-white">Internal Medicine</span>
              </nav>
            </div>
          </div>
        </div>

        {/* Floating Decoration */}
        <div className="absolute right-0 bottom-0 h-full w-[45%] z-20 hidden lg:block opacity-90 transition-transform hover:scale-105 duration-1000">
          <Image
            src="/raj/dr.Vipin.jpg"
            alt="Dr. Vipin Kumar Sharma"
            fill
            className="object-cover object-top"
            style={{ clipPath: 'polygon(20% 0, 100% 0, 100% 100%, 0% 100%)' }}
          />
          <div className="absolute bottom-10 left-32 bg-white/10 backdrop-blur-xl p-6 rounded-3xl border border-white/20 shadow-2xl">
            <p className="text-white font-black text-xl mb-1">Dr. Vipin Kumar Sharma</p>
            <p className="text-blue-200 text-sm font-bold tracking-widest uppercase">MD MEDICINE (Safdarjung)</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-screen-2xl mx-auto px-6 py-24 sm:py-32">

        {/* Quick Highlights Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-32">
          {[
            { icon: Heart, label: "Cardiac Care", color: "text-blue-600 bg-blue-50" },
            { icon: FlaskConical, label: "Lab Integration", color: "text-emerald-600 bg-emerald-50" },
            { icon: ShieldCheck, label: "Preventive Care", color: "text-indigo-600 bg-indigo-50" },
            { icon: UserCheck, label: "Senior MD Care", color: "text-amber-600 bg-amber-50" },
          ].map((item, idx) => (
            <div key={idx} className="bg-white border border-gray-100 p-8 rounded-[3rem] shadow-xl hover:shadow-[0_30px_60px_rgba(29,78,216,0.1)] transition-all duration-500 group flex flex-col items-center text-center">
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
              <span className="text-blue-700 font-black tracking-[0.3em] uppercase text-sm">Expert Diagnosis</span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 leading-[1.1] tracking-tighter">
                Holistic Internal <span className="text-blue-700">Medicine Care</span>
              </h2>
            </div>
            <div className="space-y-6 text-gray-600 text-xl leading-relaxed font-medium">
              <p>
                Raj Nursing Home provides comprehensive healthcare for adults, managing both simple and complex medical conditions. Our internal medicine department acts as the primary hub for patient health, offering expert diagnosis and long-term management strategies.
              </p>
              <p>
                From chronic conditions like diabetes and hypertension to acute infectious diseases, our team is equipped with the knowledge and technology to provide the best clinical outcomes in Hapur.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 gap-6">
              {[
                { t: "Diabetes Control", d: "Personalized insulin and diet management." },
                { t: "Hypertension", d: "Continuous BP monitoring and expert therapy." }
              ].map((f, i) => (
                <div key={i} className="bg-blue-50/50 p-6 rounded-[2.5rem] border border-blue-100 flex items-start gap-4">
                  <CheckCircle2 className="text-blue-700 w-6 h-6 mt-1 flex-shrink-0" />
                  <div>
                    <h5 className="font-black text-gray-900 mb-1">{f.t}</h5>
                    <p className="text-sm text-gray-500 font-medium">{f.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative group rounded-[4rem] overflow-hidden shadow-2xl h-[600px] border-[12px] border-white ring-1 ring-gray-100">
            <Image
              src="/internal1.jpg"
              alt="Physician Consultation"
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-1000"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 to-transparent"></div>
          </div>
        </div>

        {/* Specialized Areas (Cards) */}
        <div className="mb-32">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-6">
            <span className="text-blue-700 font-black tracking-[0.3em] uppercase text-sm">Our Focus Areas</span>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tighter">Specialized <span className="text-blue-700">Medical Services</span></h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Chronic Disease", desc: "Long-term management of heart disease, kidney issues, and arthritis.", icon: Activity },
              { title: "Infectious Diseases", desc: "Treatment for viral, bacterial, and seasonal infections with rapid diagnostic support.", icon: Thermometer },
              { title: "Preventive Health", desc: "Comprehensive health checkups to identify risks before they become issues.", icon: Brain }
            ].map((service, i) => (
              <div key={i} className="bg-white p-10 rounded-[3rem] border border-gray-100 shadow-xl hover:-translate-y-2 transition-all duration-500 group flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-blue-50 text-blue-700 rounded-2xl flex items-center justify-center mb-8 group-hover:rotate-12 transition-transform">
                  <service.icon className="w-8 h-8" />
                </div>
                <h4 className="text-2xl font-black text-gray-900 mb-4 tracking-tight">{service.title}</h4>
                <p className="text-gray-500 font-medium leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section (Blue Gradient) */}
        <div id="appointment" className="relative rounded-[4rem] overflow-hidden bg-gradient-to-br from-[#1d4ed8] to-[#1e40af] p-12 md:p-24 text-white group">
          <div className="absolute top-0 right-0 p-10 opacity-10">
            <Stethoscope className="w-64 h-64 rotate-12" />
          </div>
          <div className="grid lg:grid-cols-[1.2fr,0.8fr] gap-20 items-center relative z-10">
            <div className="space-y-10">
              <h2 className="text-4xl md:text-6xl font-black leading-tight tracking-tighter">
                Your Health is Our <span className="text-blue-200">Ultimate Mission.</span>
              </h2>
              <p className="text-2xl text-white/80 font-medium leading-relaxed">
                Connect with our senior MD physician for a thorough evaluation and a step towards a healthier you. Available 24/7 for medical emergencies.
              </p>
              <div className="flex flex-col sm:flex-row gap-6">
                <Link href="tel:+916397970802" className="flex items-center justify-center gap-4 bg-white text-blue-700 px-12 py-6 rounded-3xl font-black text-xl shadow-2xl hover:scale-105 transition-all">
                  <Phone className="w-8 h-8" /> +91 63979 70802
                </Link>
                <Link href="/contact" className="flex items-center justify-center gap-4 bg-blue-800/40 backdrop-blur-md border border-white/30 text-white px-12 py-6 rounded-3xl font-black text-xl hover:bg-blue-800/60 transition-all">
                  Book Visit
                </Link>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="bg-white/10 backdrop-blur-xl p-10 rounded-[4rem] border border-white/20 space-y-8">
                <h3 className="text-2xl font-black text-blue-200">Wait-Free Services</h3>
                <div className="space-y-4">
                  {[
                    "Instant ECG & Vital Checks",
                    "In-house Pathology Lab",
                    "Same-day Medical Reports",
                    "Emergency Bed Availability"
                  ].map((li, i) => (
                    <div key={i} className="flex items-center gap-4">
                      <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                      <span className="font-bold tracking-tight">{li}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
