"use client";

import Image from "next/image";
import Link from "next/link";
import { Baby, HeartHandshake, Microscope, Dna, ArrowRight, ShieldCheck, Clock, UserCheck, Activity, Heart, CheckCircle2, Sparkles } from "lucide-react";

export default function IvfTreatmentPage() {
  return (
    <div className="bg-white min-h-screen animate-page-enter mt-20">
      {/* Hero Section */}
      <div className="relative h-[450px] md:h-[650px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/raj/banner1.webp"
            alt="IVF & Fertility Center in Hapur"
            fill
            className="object-cover object-center scale-105 animate-pulse-slow"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#9d174d] via-[#9d174d]/90 to-transparent z-10"></div>
        </div>

        <div className="container mx-auto px-6 z-20 relative">
          <div className="max-w-4xl space-y-8">
            <div className="inline-flex mt-10 items-center gap-2 px-5 py-2.5 rounded-full glass text-white text-sm font-bold animate-float tracking-wide">
              <Sparkles className="w-4 h-4 text-rose-300 fill-rose-300" />
              <span>Advanced Fertility Excellence</span>
            </div>
            <h1 className="text-4xl md:text-7xl font-black text-white leading-[1.1] tracking-tighter">
              Hope for Your <br /><span className="text-rose-300">Parenthood Journey</span>
            </h1>
            <p className="text-xl text-gray-100 leading-relaxed max-w-2xl font-medium">
              Raj Nursing Home offers advanced IVF and fertility treatments in Hapur. With cutting-edge technology and compassionate care, we help couples navigate their journey to building a family with confidence.
            </p>
            <div className="flex flex-wrap gap-5 pt-4">
              <Link href="#appointment" className="px-10 py-5 bg-white text-[#9d174d] rounded-2xl font-black text-sm uppercase tracking-widest shadow-2xl hover:bg-rose-50 transition-all transform hover:-translate-y-1">
                Book Fertility Consultation <ArrowRight className="w-5 h-5 ml-2 inline" />
              </Link>
              <nav className="flex items-center text-sm text-white/80 py-3 font-semibold">
                <Link href="/" className="hover:text-white transition-colors">Home</Link>
                <span className="mx-2">/</span>
                <span className="text-white">IVF Treatment</span>
              </nav>
            </div>
          </div>
        </div>

        {/* Floating Decoration */}
        <div className="absolute right-0 bottom-0 h-full w-[45%] z-20 hidden lg:block opacity-90 transition-transform hover:scale-105 duration-1000">
          <Image
            src="/raj/dr.Vipin.jpg"
            alt="Medical Expert"
            fill
            className="object-cover object-top"
            style={{ clipPath: 'polygon(20% 0, 100% 0, 100% 100%, 0% 100%)' }}
          />
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-screen-2xl mx-auto px-6 py-24 sm:py-32">

        {/* Quick Highlights Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-32">
          {[
            { icon: Baby, label: "Success Rate", color: "text-rose-600 bg-rose-50" },
            { icon: Microscope, label: "Advanced Lab", color: "text-blue-600 bg-blue-50" },
            { icon: HeartHandshake, label: "Caring Support", color: "text-amber-600 bg-amber-50" },
            { icon: UserCheck, label: "Expert Doctors", color: "text-emerald-600 bg-emerald-50" },
          ].map((item, idx) => (
            <div key={idx} className="bg-white border border-gray-100 p-8 rounded-[3rem] shadow-xl hover:shadow-[0_30px_60px_rgba(157,23,77,0.1)] transition-all duration-500 group flex flex-col items-center text-center">
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
              <span className="text-[#9d174d] font-black tracking-[0.3em] uppercase text-sm">Building Families</span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 leading-[1.1] tracking-tighter">
                Understanding <span className="text-[#9d174d]">IVF Excellence</span>
              </h2>
            </div>
            <div className="space-y-6 text-gray-600 text-xl leading-relaxed font-medium">
              <p>
                In vitro fertilization (IVF) is one of the most widely used assisted reproductive technologies to help couples conceive. At Raj Nursing Home, we combine world-class medical protocols with a personalized approach to ensure the highest chances of success.
              </p>
              <p>
                Whether you're facing blocked fallopian tubes, ovulation disorders, or male factor infertility, our experts are here to guide you through every step of the process with clarity and compassion.
              </p>
            </div>
            <div className="bg-rose-50 border-l-4 border-[#9d174d] p-8 rounded-r-[2rem] shadow-sm">
              <p className="italic text-[#9d174d] text-xl font-semibold leading-relaxed">
                "We act as your partners in this journey, offering not just medical treatment but emotional support to help you build your dream family."
              </p>
            </div>
          </div>
          <div className="relative group rounded-[4rem] overflow-hidden shadow-2xl h-[600px] border-[12px] border-white ring-1 ring-gray-100">
            <Image
              src="/IVF.jpg"
              alt="IVF Laboratory Center"
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-1000"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#9d174d]/40 to-transparent"></div>
          </div>
        </div>

        {/* Detailed Services (Styled as Cards) */}
        <div className="mb-32">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-6">
            <span className="text-[#9d174d] font-black tracking-[0.3em] uppercase text-sm">Our Expertise</span>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tighter">Diagnostic & <span className="text-[#9d174d]">Fertility Services</span></h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { title: "IVF Specialist Center", desc: "Advanced egg retrieval and embryo transfer protocols using state-of-the-art laboratory standards.", icon: Dna },
              { title: "IUI (Intrauterine Insemination)", desc: "A simpler fertility procedure that places sperm directly into the uterus during ovulation.", icon: Activity },
              { title: "Fertility Evaluation", desc: "Comprehensive testing for both partners to identify and address the root causes of infertility.", icon: Microscope },
              { title: "Supporting Care", desc: "Hormonal therapy, monitoring, and lifestyle guidance to optimize reproductive health.", icon: Heart }
            ].map((service, i) => (
              <div key={i} className="bg-white p-10 rounded-[3rem] border border-gray-100 shadow-xl hover:shadow-2xl transition-all duration-500 group flex items-start gap-8">
                <div className="w-16 h-16 bg-rose-50 text-[#9d174d] rounded-2xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform shadow-inner">
                  <service.icon className="w-8 h-8" />
                </div>
                <div>
                  <h4 className="text-2xl font-black text-gray-900 mb-3 tracking-tight">{service.title}</h4>
                  <p className="text-gray-500 font-medium leading-relaxed">{service.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose Us (Dark Section) */}
        <div className="mb-32 bg-[#9d174d] p-8 md:p-24 rounded-[5rem] text-white relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -mr-20 -mt-20"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-black/10 rounded-full blur-3xl -ml-20 -mb-20"></div>

          <div className="grid lg:grid-cols-2 gap-20 items-center relative z-10">
            <div className="space-y-10">
              <h3 className="text-4xl md:text-6xl font-black leading-[1.1] tracking-tighter">
                Why Couples Trust <br /><span className="text-rose-300">Raj IVF Center?</span>
              </h3>
              <div className="space-y-6">
                {[
                  { t: "Advanced Lab Standards", d: "Equipped with the latest incubation and monitoring tech." },
                  { t: "Personalized Protocols", d: "No one-size-fits-all. Every plan is unique to you." },
                  { t: "Caring Environment", d: "Sensitive care in a respectful and supportive setting." },
                  { t: "Transparent Success", d: "Clear communication regarding expectations and outcomes." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6 group/item backdrop-blur-md bg-white/5 p-6 rounded-3xl border border-white/10 hover:bg-white/10 transition-all">
                    <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center shrink-0 group-hover/item:scale-110 transition-transform">
                      <CheckCircle2 className="w-6 h-6 text-rose-300" />
                    </div>
                    <div>
                      <h5 className="font-black text-xl tracking-tight mb-1">{item.t}</h5>
                      <p className="text-rose-100 font-medium opacity-80">{item.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative h-[650px] rounded-[4rem] overflow-hidden border-[12px] border-white/10 ring-1 ring-white/20 shadow-2xl skew-y-1">
              <Image src="/IVF2.jpg" alt="IVF Success" fill className="object-cover brightness-110" />
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div id="appointment" className="max-w-screen-2xl mx-auto">
          <div className="relative rounded-[4rem] overflow-hidden bg-gray-50 p-12 md:p-24 flex flex-col items-center text-center space-y-10">
            <div className="w-24 h-24 bg-rose-100 rounded-full flex items-center justify-center text-[#9d174d] animate-bounce">
              <Heart className="w-12 h-12 fill-[#9d174d]" />
            </div>
            <h2 className="text-4xl md:text-7xl font-black text-gray-900 tracking-tighter leading-tight">
              Start Your <span className="text-[#9d174d]">Parenthood Dream</span> Today
            </h2>
            <p className="text-2xl text-gray-500 font-medium max-w-3xl">
              Don't let infertility stand in the way. Schedule a confidential consultation with our fertility experts in Hapur.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 w-full justify-center">
              <Link href="tel:+916397970802" className="flex items-center justify-center gap-4 bg-[#9d174d] text-white px-12 py-6 rounded-[2.5rem] font-black text-xl shadow-2xl hover:bg-[#831843] transition-all transform hover:-translate-y-1 uppercase tracking-widest">
                <Activity className="w-8 h-8" /> Call IVF Center
              </Link>
              <Link href="/contact" className="flex items-center justify-center gap-4 bg-white border border-gray-200 text-gray-900 px-12 py-6 rounded-[2.5rem] font-black text-xl transition-all hover:bg-gray-50 uppercase tracking-widest shadow-lg">
                Book Visit
              </Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
