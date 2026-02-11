"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Activity, Phone, ShieldCheck, CheckCircle2, Stethoscope, Heart, Clock, UserCheck, ArrowRight, ChevronLeft, ChevronRight, Sparkles } from "lucide-react";

export default function HeartSpecialistPage() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      text: "I had severe chest pain last year and rushed to the clinic. Thanks to the prompt chest pain treatment in Hapur I received here, I avoided a serious issue. The doctors are knowledgeable and caring.",
      name: "Sanjay K."
    },
    {
      text: "I was struggling with high blood pressure for years. After visiting this heart care clinic, my condition is finally under control. The team really listens.",
      name: "Neha M."
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="bg-white min-h-screen animate-page-enter mt-20">
      {/* Hero Section */}
      <div className="relative h-[450px] md:h-[650px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/raj/banner1.webp"
            alt="Heart Specialist Center"
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
              <span>Elite Cardiac Institute</span>
            </div>
            <h1 className="text-4xl md:text-7xl font-black text-white leading-[1.1] tracking-tighter">
              Exceptional <br /><span className="text-rose-300">Heart Care Hapur</span>
            </h1>
            <p className="text-xl text-gray-100 leading-relaxed max-w-2xl font-medium">
              Raj Nursing Home offers specialized cardiology services led by expert physicians. From advanced diagnostics like 2D Echo to life-saving emergency care, we protect your heart with the highest precision.
            </p>
            <div className="flex flex-wrap gap-5 pt-4">
              <Link href="#appointment" className="px-10 py-5 bg-white text-[#9d174d] rounded-2xl font-black text-sm uppercase tracking-widest shadow-2xl hover:bg-rose-50 transition-all transform hover:-translate-y-1">
                Book Consultation <ArrowRight className="w-5 h-5 ml-2 inline" />
              </Link>
              <nav className="flex items-center text-sm text-white/80 py-3 font-semibold">
                <Link href="/" className="hover:text-white transition-colors">Home</Link>
                <span className="mx-2">/</span>
                <span className="text-white">Heart Specialist</span>
              </nav>
            </div>
          </div>
        </div>

        {/* Floating Doctor Image */}
        <div className="absolute right-0 bottom-0 h-full w-[45%] z-20 hidden lg:block opacity-90 transition-transform hover:scale-105 duration-1000">
          <Image
            src="/raj/dr.Vipin.jpg"
            alt="Dr. Vipin Sharma"
            fill
            className="object-cover object-top"
            style={{ clipPath: 'polygon(20% 0, 100% 0, 100% 100%, 0% 100%)' }}
          />
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-screen-2xl mx-auto px-6 py-24 sm:py-32">

        {/* Quick Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-32">
          {[
            { icon: Heart, label: "Advanced Care", color: "text-rose-600 bg-rose-50" },
            { icon: ShieldCheck, label: "Senior Experts", color: "text-blue-600 bg-blue-50" },
            { icon: Clock, label: "24/7 Cardiac ER", color: "text-amber-600 bg-amber-50" },
            { icon: UserCheck, label: "Patient First", color: "text-emerald-600 bg-emerald-50" },
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
              <span className="text-[#9d174d] font-black tracking-[0.3em] uppercase text-sm">Your Heart Matters</span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 leading-[1.1] tracking-tighter">
                Dedicated Cardiac <span className="text-[#9d174d]">Health Experts</span>
              </h2>
            </div>
            <div className="space-y-6 text-gray-600 text-xl leading-relaxed font-medium">
              <p>
                Heart diseases remain the leading cause of illness worldwide. Early intervention by a qualified cardiologist can drastically improve health outcomes and provide a longer, healthier life.
              </p>
              <p>
                At Raj Nursing Home, our clinic offers specialized care for managing hypertension, chest pain, arrhythmias, and other cardiac conditions with an empathetic, patient-centric approach.
              </p>
            </div>
            <ul className="space-y-4">
              {[
                "Persistent chest discomfort or pressure",
                "Unexplained fatigue or shortness of breath",
                "Rapid or irregular heartbeat (Palpitations)",
                "High blood pressure readings consistently"
              ].map((li, i) => (
                <li key={i} className="flex items-center gap-4 bg-gray-50 p-5 rounded-3xl border border-gray-100 group transition-all hover:bg-rose-50 hover:border-rose-100">
                  <CheckCircle2 className="w-6 h-6 text-[#9d174d] shrink-0" />
                  <span className="font-bold text-gray-800 tracking-tight">{li}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative group rounded-[4rem] overflow-hidden shadow-2xl h-[600px] border-[12px] border-white ring-1 ring-gray-100">
            <Image
              src="/raj/heart-model.png"
              alt="Cardiac Technology"
              fill
              className="object-contain p-12 group-hover:scale-110 transition-transform duration-1000 bg-rose-50"
            />
          </div>
        </div>

        {/* Services Grid (Best UI) */}
        <div className="mb-32">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-6">
            <span className="text-[#9d174d] font-black tracking-[0.3em] uppercase text-sm">Our Services</span>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tighter">Gold Standard <span className="text-[#9d174d]">Heart Services</span></h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Expert Consultation", desc: "Detailed clinical history and customized preventative cardiac plans.", icon: UserCheck },
              { title: "Chest Pain Relief", desc: "Rapid 24/7 assessment for acute cardiac events with immediate stabilization.", icon: Activity },
              { title: "Hypertension Clinic", desc: "Advanced hypertension management programs to prevent heart failure.", icon: Stethoscope },
              { title: "Arrhythmia Care", desc: "Detection and medical management of irregular heartbeats.", icon: Heart },
              { title: "BP Monitoring", desc: "Continuous monitoring and lifestyle advisory for healthy living.", icon: Clock },
              { title: "Prevention Plans", desc: "Holistic screenings designed for early detection and peace of mind.", icon: ShieldCheck }
            ].map((service, i) => (
              <div key={i} className="bg-white p-10 rounded-[3rem] border border-gray-100 shadow-xl hover:-translate-y-2 transition-all duration-500 group flex flex-col items-center text-center hover:border-rose-200">
                <div className="w-16 h-16 bg-rose-50 text-[#9d174d] rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform shadow-inner">
                  <service.icon className="w-8 h-8" />
                </div>
                <h4 className="text-2xl font-black text-gray-900 mb-4 tracking-tight">{service.title}</h4>
                <p className="text-gray-500 font-medium leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section (Maroon Gradient) */}
        <div id="appointment" className="relative rounded-[4rem] overflow-hidden bg-gradient-to-br from-[#9d174d] to-[#881337] p-12 md:p-24 text-white group">
          <div className="absolute top-0 right-0 p-10 opacity-10">
            <Heart className="w-64 h-64 scale-150 rotate-12" />
          </div>
          <div className="max-w-4xl space-y-10 relative z-10">
            <h2 className="text-4xl md:text-7xl font-black leading-tight tracking-tighter">
              A Strong Heart for a <span className="text-rose-400">Longer Life.</span>
            </h2>
            <p className="text-2xl text-white/80 font-medium leading-relaxed">
              Don't wait for symptoms to arrive. Join Hapur's most trusted cardiac specialists today.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <Link href="tel:+916397970802" className="flex items-center justify-center gap-4 bg-white text-[#9d174d] px-12 py-6 rounded-3xl font-black text-xl shadow-2xl hover:scale-105 transition-all outline-none">
                <Phone className="w-8 h-8" /> +91 63979 70802
              </Link>
              <Link href="/contact" className="flex items-center justify-center gap-4 bg-white/10 backdrop-blur-md border-[3px] border-white/30 text-white px-12 py-6 rounded-3xl font-black text-xl hover:bg-white/20 transition-all uppercase tracking-widest">
                Enquire Now
              </Link>
            </div>
          </div>
        </div>

        {/* Testimonials (Premium Carousal Style) */}
        <div className="mt-32">
          <div className="bg-gray-50 p-12 md:p-24 rounded-[5rem] relative text-center border border-gray-100 overflow-hidden group">
            <div className="absolute top-0 left-0 w-64 h-64 bg-rose-500/5 rounded-full blur-3xl -ml-20 -mt-20"></div>
            <div className="text-[#9d174d] opacity-10 absolute top-10 left-1/2 -translate-x-1/2 font-serif text-[20rem] leading-none select-none">“</div>

            <div key={currentTestimonial} className="relative z-10 animate-page-enter">
              <p className="text-2xl md:text-4xl text-gray-700 italic font-medium leading-relaxed max-w-4xl mx-auto mb-12">
                "{testimonials[currentTestimonial].text}"
              </p>
              <div className="flex flex-col items-center gap-2">
                <p className="font-black text-gray-900 text-2xl tracking-tight">{testimonials[currentTestimonial].name}</p>
                <div className="flex text-amber-400 gap-1.5 text-xl">
                  {[1, 2, 3, 4, 5].map((s) => <span key={s}>★</span>)}
                </div>
              </div>
            </div>

            <div className="flex justify-center gap-6 mt-16">
              <button onClick={prevTestimonial} className="w-16 h-16 rounded-full bg-white border border-gray-200 text-gray-500 flex items-center justify-center hover:bg-[#9d174d] hover:text-white hover:-translate-x-2 transition-all shadow-lg active:scale-95 group/btn">
                <ChevronLeft className="w-8 h-8" />
              </button>
              <button onClick={nextTestimonial} className="w-16 h-16 rounded-full bg-white border border-gray-200 text-gray-500 flex items-center justify-center hover:bg-[#9d174d] hover:text-white hover:translate-x-2 transition-all shadow-lg active:scale-95 group/btn">
                <ChevronRight className="w-8 h-8" />
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
