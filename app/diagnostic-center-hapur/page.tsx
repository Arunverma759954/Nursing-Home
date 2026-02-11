"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Microscope, Activity, ShieldCheck, Heart, UserCheck, Phone, CheckCircle2, FlaskConical, Scan, Syringe, Sparkles } from "lucide-react";

export default function DiagnosticCenterHapur() {
  return (
    <div className="bg-white min-h-screen animate-page-enter mt-20">
      {/* Hero Section */}
      <div className="relative h-[450px] md:h-[650px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/raj/banner1.webp"
            alt="Advanced Diagnostic Center Hapur"
            fill
            className="object-cover object-center scale-105 animate-pulse-slow"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0369a1] via-[#0369a1]/90 to-transparent z-10"></div>
        </div>

        <div className="container mx-auto px-6 z-20 relative">
          <div className="max-w-4xl space-y-8">
            <div className="inline-flex mt-10 items-center gap-2 px-5 py-2.5 rounded-full glass text-white text-sm font-bold animate-float tracking-wide">
              <Sparkles className="w-4 h-4 text-cyan-200 fill-cyan-200" />
              <span>Full Spectrum Diagnostic Center</span>
            </div>
            <h1 className="text-4xl md:text-7xl font-black text-white leading-[1.1] tracking-tighter">
              Precision Diagnostics <br /><span className="text-cyan-200">Trust in Clarity</span>
            </h1>
            <p className="text-xl text-gray-100 leading-relaxed max-w-2xl font-medium">
              Raj Nursing Home provides world-class diagnostic services in Hapur. From advanced pathology to high-resolution imaging, we ensure your medical reports are accurate, timely, and reliable.
            </p>
            <div className="flex flex-wrap gap-5 pt-4">
              <Link href="#appointment" className="px-10 py-5 bg-white text-[#0369a1] rounded-2xl font-black text-sm uppercase tracking-widest shadow-2xl hover:bg-cyan-50 transition-all transform hover:-translate-y-1">
                Book Test Now <ArrowRight className="w-5 h-5 ml-2 inline" />
              </Link>
              <nav className="flex items-center text-sm text-white/80 py-3 font-semibold">
                <Link href="/" className="hover:text-white transition-colors">Home</Link>
                <span className="mx-2">/</span>
                <span className="text-white">Diagnostic Center</span>
              </nav>
            </div>
          </div>
        </div>

        {/* Floating Decoration */}
        <div className="absolute right-0 bottom-0 h-full w-[45%] z-20 hidden lg:block opacity-90 transition-transform hover:scale-105 duration-1000">
          <Image
            src="/Diagnostic.jpg"
            alt="Laboratory Tech"
            fill
            className="object-cover object-center"
            style={{ clipPath: 'polygon(20% 0, 100% 0, 100% 100%, 0% 100%)' }}
          />
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-screen-2xl mx-auto px-6 py-24 sm:py-32">

        {/* Quick Highlights Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-32">
          {[
            { icon: Microscope, label: "Advanced Pathology", color: "text-blue-600 bg-blue-50" },
            { icon: Scan, label: "Digital Imaging", color: "text-cyan-600 bg-cyan-50" },
            { icon: FlaskConical, label: "Rapid Bio-chem", color: "text-emerald-600 bg-emerald-50" },
            { icon: UserCheck, label: "Verified Reports", color: "text-slate-600 bg-slate-50" },
          ].map((item, idx) => (
            <div key={idx} className="bg-white border border-gray-100 p-8 rounded-[3rem] shadow-xl hover:shadow-[0_30px_60px_rgba(3,105,161,0.1)] transition-all duration-500 group flex flex-col items-center text-center">
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
              <span className="text-cyan-700 font-black tracking-[0.3em] uppercase text-sm">Actionable Insights</span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 leading-[1.1] tracking-tighter">
                Accurate Healthcare <span className="text-cyan-700">Starts Here</span>
              </h2>
            </div>
            <div className="space-y-6 text-gray-600 text-xl leading-relaxed font-medium">
              <p>
                A reliable diagnosis is the cornerstone of effective treatment. Our diagnostic center in Hapur combines state-of-the-art laboratory automation with expert oversight to deliver reports you can trust.
              </p>
              <p>
                Whether it's a routine blood profile or specialized pathology, we prioritize accuracy and speed to help you and your doctor make informed decisions without delay.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                "NABL Standard Guidelines",
                "Automated Sample Processing",
                "Home Sample Collection",
                "Digital Report Delivery"
              ].map((li, i) => (
                <div key={i} className="flex items-center gap-3 bg-gray-50 p-4 rounded-2xl border border-gray-100">
                  <CheckCircle2 className="w-5 h-5 text-cyan-600" />
                  <span className="font-bold text-gray-800 tracking-tight">{li}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative group rounded-[4rem] overflow-hidden shadow-2xl h-[600px] border-[12px] border-white ring-1 ring-gray-100">
            <Image
              src="/Diagnostic3.jpg"
              alt="Advanced Diagnostic Lab"
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-1000"
            />
          </div>
        </div>

        {/* Diagnostic Services (Cards) */}
        <div className="mb-32">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-6">
            <span className="text-cyan-700 font-black tracking-[0.3em] uppercase text-sm">Full Test Menu</span>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tighter">Our Core <span className="text-cyan-700">Investigations</span></h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Pathology Lab", desc: "Expert analysis of blood, urine, and tissue samples for total clinical precision.", icon: FlaskConical },
              { title: "Digital Imaging", desc: "High-resolution X-ray and ultrasound services for clear internal visualization.", icon: Scan },
              { title: "Blood Center", desc: "From routine CBC to advanced hormonal and biochemical screenings.", icon: Syringe }
            ].map((service, i) => (
              <div key={i} className="bg-white p-10 rounded-[3rem] border border-gray-100 shadow-xl hover:-translate-y-2 transition-all duration-500 group flex flex-col items-center text-center hover:border-cyan-100">
                <div className="w-16 h-16 bg-cyan-50 text-cyan-700 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                  <service.icon className="w-8 h-8" />
                </div>
                <h4 className="text-2xl font-black text-gray-900 mb-4 tracking-tight">{service.title}</h4>
                <p className="text-gray-500 font-medium leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section (Cyan Gradient) */}
        <div id="appointment" className="relative rounded-[4rem] overflow-hidden bg-gradient-to-br from-[#0369a1] to-[#0c4a6e] p-12 md:p-24 text-white group">
          <div className="absolute top-0 right-0 p-10 opacity-10">
            <Microscope className="w-64 h-64 rotate-12" />
          </div>
          <div className="grid lg:grid-cols-[1.2fr,0.8fr] gap-20 items-center relative z-10">
            <div className="space-y-10">
              <h2 className="text-4xl md:text-6xl font-black leading-tight tracking-tighter">
                Accurate Data. <br /><span className="text-cyan-200">Better Outcomes.</span>
              </h2>
              <p className="text-2xl text-cyan-50 font-medium leading-relaxed">
                Walk-in for any medical test or schedule a home collection. We are committed to making diagnostics hassle-free for Hapur.
              </p>
              <div className="flex flex-col sm:flex-row gap-6">
                <Link href="tel:+916397970802" className="flex items-center justify-center gap-4 bg-white text-cyan-900 px-12 py-6 rounded-3xl font-black text-xl shadow-2xl hover:scale-105 transition-all">
                  <Phone className="w-8 h-8" /> Book Home Visit
                </Link>
                <Link href="/contact" className="flex items-center justify-center gap-4 bg-cyan-800/40 backdrop-blur-md border border-white/30 text-white px-12 py-6 rounded-3xl font-black text-xl hover:bg-cyan-800/60 transition-all uppercase tracking-widest text-center">
                  See All Tests
                </Link>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="bg-white/10 backdrop-blur-xl p-10 rounded-[4rem] border border-white/20 space-y-8">
                <h3 className="text-2xl font-black text-cyan-200">Our Lab Promise</h3>
                <div className="space-y-4">
                  {[
                    "Same-day Digital Reports",
                    "NABL Calibrated Equipment",
                    "Hygienic Sampling Booths",
                    "Affordable Package Options"
                  ].map((li, i) => (
                    <div key={i} className="flex items-center gap-4 text-white/90">
                      <CheckCircle2 className="w-5 h-5 text-cyan-400" />
                      <span className="font-bold tracking-tight">{li}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Conclusion Box */}
        <div className="mt-32 bg-gray-50 rounded-[4rem] p-12 md:p-20 text-center border border-gray-100">
          <h3 className="text-3xl font-black text-gray-900 mb-8 tracking-tight">Your Trusted Diagnostic Partner in Hapur</h3>
          <p className="text-xl font-medium text-gray-500 leading-relaxed max-w-4xl mx-auto italic">
            "For years, patients and doctors have relied on Raj Nursing Home for quality diagnostic solutions. Our commitment to accuracy and efficiency ensures you get the care you deserve close to home."
          </p>
        </div>

      </div>
    </div>
  );
}
