"use client";

import Image from "next/image";
import Link from "next/link";
import { Scissors, Activity, Zap, ShieldCheck, ArrowRight, Clock, UserCheck, Microscope, Sparkles, Phone } from "lucide-react";

export default function LaparoscopicSurgeryPage() {
  return (
    <div className="bg-white min-h-screen animate-page-enter mt-20">
      {/* Hero Section */}
      <div className="relative h-[450px] md:h-[650px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/raj/banner1.webp"
            alt="Advanced Laparoscopic Center"
            fill
            className="object-cover object-center scale-105 animate-pulse-slow"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#4338ca] via-[#4338ca]/90 to-transparent z-10"></div>
        </div>

        <div className="container mx-auto px-6 z-20 relative">
          <div className="max-w-4xl space-y-8">
            <div className="inline-flex mt-10 items-center gap-2 px-5 py-2.5 rounded-full glass text-white text-sm font-bold animate-float tracking-wide">
              <Sparkles className="w-4 h-4 text-indigo-200 fill-indigo-200" />
              <span>Minimal Invasive Surgical Center</span>
            </div>
            <h1 className="text-4xl md:text-7xl font-black text-white leading-[1.1] tracking-tighter">
              Advanced Keyhole <br /><span className="text-indigo-200">Surgery in Hapur</span>
            </h1>
            <p className="text-xl text-gray-100 leading-relaxed max-w-2xl font-medium">
              Experience faster recovery, minimal pain, and precision results with our expert laparoscopic surgical team. Raj Nursing Home is Hapur's leader in modern surgical excellence.
            </p>
            <div className="flex flex-wrap gap-5 pt-4">
              <Link href="#appointment" className="px-10 py-5 bg-white text-[#4338ca] rounded-2xl font-black text-sm uppercase tracking-widest shadow-2xl hover:bg-indigo-50 transition-all transform hover:-translate-y-1">
                Book Consultation <ArrowRight className="w-5 h-5 ml-2 inline" />
              </Link>
              <nav className="flex items-center text-sm text-white/80 py-3 font-semibold">
                <Link href="/" className="hover:text-white transition-colors">Home</Link>
                <span className="mx-2">/</span>
                <span className="text-white">Laparoscopic Surgery</span>
              </nav>
            </div>
          </div>
        </div>

        {/* Floating Decoration */}
        <div className="absolute right-0 bottom-0 h-full w-[45%] z-20 hidden lg:block opacity-90 transition-transform hover:scale-105 duration-1000">
          <Image
            src="/raj/M.C.Sharma.jpg"
            alt="Senior Surgeon"
            fill
            className="object-cover object-top"
            style={{ clipPath: 'polygon(20% 0, 100% 0, 100% 100%, 0% 100%)' }}
          />
          <div className="absolute bottom-10 left-32 bg-white/10 backdrop-blur-xl p-6 rounded-3xl border border-white/20 shadow-2xl text-white">
            <p className="font-black text-xl mb-1">Dr. M.C. Sharma</p>
            <p className="text-indigo-200 text-sm font-bold tracking-widest uppercase text-center">Senior Surgeon</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-screen-2xl mx-auto px-6 py-24 sm:py-32">

        {/* Quick Highlights Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-32">
          {[
            { icon: Zap, label: "Fast Recovery", color: "text-indigo-600 bg-indigo-50" },
            { icon: Scissors, label: "Minimal Pain", color: "text-rose-600 bg-rose-50" },
            { icon: ShieldCheck, label: "Safe Outcomes", color: "text-emerald-600 bg-emerald-50" },
            { icon: UserCheck, label: "Expert Surgeons", color: "text-blue-600 bg-blue-50" },
          ].map((item, idx) => (
            <div key={idx} className="bg-white border border-gray-100 p-8 rounded-[3rem] shadow-xl hover:shadow-[0_30px_60px_rgba(67,56,202,0.1)] transition-all duration-500 group flex flex-col items-center text-center">
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
              <span className="text-indigo-700 font-black tracking-[0.3em] uppercase text-sm">Keyhole Technology</span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 leading-[1.1] tracking-tighter">
                Precision Surgery <br /><span className="text-indigo-700">Minimal Discomfort</span>
              </h2>
            </div>
            <div className="space-y-6 text-gray-600 text-xl leading-relaxed font-medium">
              <p>
                Laparoscopic surgery represents a revolution in surgical care. By using tiny incisions and high-definition cameras, we perform complex procedures with unparalleled precision while significantly reducing trauma to the body.
              </p>
              <p>
                Patients benefit from less post-operative pain, reduced hospital stays, and a much faster return to their daily activities compared to traditional open surgery.
              </p>
            </div>
            <div className="bg-indigo-50 border-l-4 border-indigo-700 p-8 rounded-r-[2rem] shadow-sm">
              <p className="italic text-indigo-700 text-xl font-semibold leading-relaxed">
                "Our surgical team is committed to delivering world-class laparoscopic care with a primary focus on patient safety and rapid healing."
              </p>
            </div>
          </div>
          <div className="relative group rounded-[4rem] overflow-hidden shadow-2xl h-[600px] border-[12px] border-white ring-1 ring-gray-100">
            <Image
              src="/laparoscopic.jpg"
              alt="Laparoscopic Surgery Setup"
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-1000"
            />
          </div>
        </div>

        {/* Surgical Services (Cards) */}
        <div className="mb-32">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-6">
            <span className="text-indigo-700 font-black tracking-[0.3em] uppercase text-sm">Surgical Expertise</span>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tighter">Our Specialized <span className="text-indigo-700">Procedures</span></h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Gallbladder", desc: "Safe removal of gallstones using minimally invasive keyhole techniques.", icon: Zap },
              { title: "Appendix", desc: "Rapid appendectomy procedures with minimal recovery time and small incisions.", icon: Microscope },
              { title: "Hernia Repair", desc: "Advanced laparoscopic hernia repair using superior mesh and fixative technology.", icon: ShieldCheck }
            ].map((service, i) => (
              <div key={i} className="bg-white p-10 rounded-[3rem] border border-gray-100 shadow-xl hover:-translate-y-2 transition-all duration-500 group flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-indigo-50 text-indigo-700 rounded-2xl flex items-center justify-center mb-8 group-hover:rotate-12 transition-transform shadow-inner">
                  <service.icon className="w-8 h-8" />
                </div>
                <h4 className="text-2xl font-black text-gray-900 mb-4 tracking-tight">{service.title}</h4>
                <p className="text-gray-500 font-medium leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section (Indigo Gradient) */}
        <div id="appointment" className="relative rounded-[4rem] overflow-hidden bg-gradient-to-br from-[#4338ca] to-[#1e1b4b] p-12 md:p-24 text-white group">
          <div className="absolute top-0 right-0 p-10 opacity-10">
            <Scissors className="w-64 h-64 rotate-45" />
          </div>
          <div className="grid lg:grid-cols-[1.2fr,0.8fr] gap-20 items-center relative z-10">
            <div className="space-y-10">
              <h2 className="text-4xl md:text-6xl font-black leading-tight tracking-tighter">
                Surgical Excellence <br /><span className="text-indigo-300">You Can Trust.</span>
              </h2>
              <p className="text-2xl text-white/80 font-medium leading-relaxed">
                Trust Hapur's leading senior surgeons for your laparoscopic needs. Safe, effective, and budget-friendly surgical solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-6">
                <Link href="tel:+916397970802" className="flex items-center justify-center gap-4 bg-white text-indigo-900 px-12 py-6 rounded-[2.5rem] font-black text-xl shadow-2xl hover:scale-105 transition-all">
                  <Phone className="w-8 h-8" /> +91 63979 70802
                </Link>
                <Link href="/contact" className="flex items-center justify-center gap-4 bg-white/10 backdrop-blur-md border border-white/30 text-white px-12 py-6 rounded-[2.5rem] font-black text-xl hover:bg-white/20 transition-all uppercase tracking-widest">
                  Book Consult
                </Link>
              </div>
            </div>
            <div className="hidden lg:block relative group-hover:scale-105 transition-transform duration-1000 h-[450px]">
              <Image src="/raj/ot.jpg" alt="Modular OT" fill className="object-cover rounded-[3rem] border-8 border-white/10 ring-1 ring-white/20" />
            </div>
          </div>
        </div>

        {/* Final Conclusion Box */}
        <div className="mt-32 bg-gray-50 rounded-[4rem] p-12 md:p-20 border border-gray-100 flex flex-col items-center text-center">
          <h3 className="text-3xl font-black text-gray-900 mb-8 tracking-tight">Your Partner in Surgical Excellence</h3>
          <p className="text-2xl font-medium text-gray-500 leading-relaxed max-w-5xl italic">
            "Choosing Raj Nursing Home for laparoscopic surgery in Hapur means opting for advanced medical care with a personal touch. Trust our experienced surgeons for a safer, faster recovery."
          </p>
        </div>

      </div>
    </div>
  );
}
