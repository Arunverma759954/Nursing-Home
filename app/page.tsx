"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

// Premium SVG Icons
const PhoneIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l2.27-2.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>;
const MapPinIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></svg>;
const ClockIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>;
const ChevronRightIcon = ({ className }: { className?: string }) => <svg className={className} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>;
const HeartIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" /></svg>;
const ShieldIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.8 17 5 19 5a1 1 0 0 1 1 1z" /><path d="m9 12 2 2 4-4" /></svg>;
const StarIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="1"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>;
const ArrowRightIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>;
const PlayIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z" /></svg>;
const MailIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>;
const FacebookIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>;
const InstagramIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>;

export default function Home() {
  const [activeDept, setActiveDept] = useState(0);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const departments = [
    { name: "Heart Specialist", img: "/heart-care.jpg", desc: "Expert cardiac care with advanced monitoring including ECG and 2D Echo.", icon: "❤️" },
    { name: "Internal Medicine", img: "/internal1.jpg", desc: "Holistic physician managing cardiac, pulmonary, renal, and endocrine conditions.", icon: "🩺" },
    { name: "Laparoscopic Surgery", img: "/laparoscopic2.jpg", desc: "Minimally invasive safe and modern surgical care for quick recovery.", icon: "🔬" },
    { name: "Diagnostic Services", img: "/Diagnostic3.jpg", desc: "Full-spectrum diagnostics with high-resolution imaging and lab tests.", icon: "🔍" },
    { name: "IVF & Fertility Treatment", img: "/IVF2.jpg", desc: "Supporting your journey to parenthood with advanced medical solutions.", icon: "👶" },
    { name: "Womans Health", img: "/raj/gyne-2.jpg", desc: "Comprehensive gynecological care and maternity services available 24/7.", icon: "💗" },
  ];

  const doctors = [
    { name: "Dr. Vipin Kumar Sharma", role: "MD Medicine, Ex-Safdarjung Hospital", exp: "28+ Years", img: "/raj/dr.Vipin.jpg", speciality: "Holistic Physician" },
    { name: "Dr. Srishti Bhardwaj", role: "MS Obstetrics & Gynecology", exp: "10+ Years", img: "/raj/dr-Srishti.jpg", speciality: "Gynaecologist & Pregnancy Specialist" },
    { name: "Dr. M.C. Sharma", role: "Senior Laparoscopic Surgeon", exp: "35+ Years", img: "/raj/M.C.Sharma.jpg", speciality: "Surgical Expert" },
  ];

  const facilities = [
    { title: "Modular OT", img: "/raj/ot.jpg", desc: "Zero-infection advanced operation theatres for safe surgeries" },
    { title: "Advanced ICU", img: "/raj/raj-nursing-home-icu.jpg", desc: "24/7 critical care support with modern monitoring equipment" },
    { title: "Ultrasound Center", img: "/raj/ultrasound.jpg", desc: "High-resolution diagnostics and 2D Echo imaging" },
    { title: "Premium Rooms", img: "/raj/cabin3.jpg", desc: "Luxury patient suites for comfortable medical recovery" },
  ];

  return (
    <div className="min-h-screen bg-white overflow-x-hidden pt-[110px] md:pt-[130px]">
      {/* ═══════════════════════════════════════════════════════════════════════════
          HERO SECTION
      ═══════════════════════════════════════════════════════════════════════════ */}
      <section id="home" className="relative h-auto min-h-[550px] md:min-h-[600px] lg:h-[750px] flex items-center overflow-hidden py-16 md:py-0 bg-white pb-24 md:pb-32">
        <Image src="/Banner_1c.webp" alt="Raj Nursing Home Banner" fill className="object-cover z-0 opacity-90" priority />

        {/* Gradients */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/30 z-10"></div>

        <div className="relative z-20 max-w-screen-2xl mx-auto px-6 md:px-12 w-full h-full flex items-center">
          <div className="max-w-3xl space-y-6">
            {/* Badge - Smaller */}
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/80 border border-gray-200 text-[#9d174d] text-[10px] md:text-xs font-bold rounded-full shadow-sm backdrop-blur-md">
              <span className="w-1.5 h-1.5 bg-red-600 rounded-full animate-pulse"></span>
              EXCELLENCE IN HEALTHCARE
            </div>

            {/* Main Heading - Smaller & Tight */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 leading-[1.1] tracking-tight">
              Where Healing <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#9d174d] via-[#f43f5e] to-[#9d174d]">Meets Excellence.</span>
            </h1>

            {/* Description - Compact */}
            <p className="text-sm md:text-base text-gray-700 max-w-xl leading-relaxed font-medium">
              Trusted by 50,000+ families for advanced <strong>MD Medicine</strong>, <strong>Laparoscopic Surgery</strong>, and <strong>24/7 Emergency Care</strong>. Your health is our priority.
            </p>

            {/* Buttons - Smaller */}
            <div className="flex flex-col sm:flex-row gap-4 pt-1">
              <button className="px-6 py-3 bg-[#9d174d] hover:bg-[#831843] text-white font-bold text-sm rounded-xl shadow-lg shadow-red-500/20 transition-all hover:-translate-y-0.5 flex items-center justify-center gap-2">
                Book Consultation <span className="w-4 h-4 flex items-center justify-center"><ArrowRightIcon /></span>
              </button>
              <button className="px-6 py-3 bg-white border border-gray-200 text-gray-800 font-bold text-sm rounded-xl hover:bg-gray-50 transition-all flex items-center justify-center gap-2 shadow-sm">
                <div className="w-6 h-6 bg-red-50 rounded-full flex items-center justify-center text-[#9d174d]">
                  <span className="w-3 h-3 flex items-center justify-center"><PlayIcon /></span>
                </div>
                Virtual Tour
              </button>
            </div>

            {/* Stats - Compact & Left Aligned */}
            <div className="flex flex-wrap gap-8 md:gap-12 pt-6 border-t border-gray-200/60 w-full max-w-2xl">
              {[
                { v: "15+", l: "Years Exp." },
                { v: "10K+", l: "Deliveries" },
                { v: "50K+", l: "Patients" },
              ].map((s, i) => (
                <div key={i}>
                  <span className="block text-2xl md:text-3xl font-black text-[#9d174d]">{s.v}</span>
                  <span className="block text-[10px] font-bold text-gray-500 uppercase tracking-wider mt-0.5">{s.l}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* QUICK SERVICES */}
      <section className="py-10 bg-[#9d174d]">
        <div className="max-w-[1700px] mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {[
              { i: "🚑", t: "24/7 Emergency", d: "Always Ready" },
              { i: "🏥", t: "Advanced ICU", d: "Critical Support" },
              { i: "🩺", t: "OPD Services", d: "Expert Doctors" },
              { i: "🧪", t: "Modern Labs", d: "Quick Reports" },
            ].map((s, i) => (
              <div key={i} className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-3 md:gap-5 text-white p-2">
                <span className="text-3xl md:text-4xl">{s.i}</span>
                <div>
                  <p className="font-black text-base md:text-xl leading-none">{s.t}</p>
                  <p className="text-red-200 text-xs md:text-sm mt-1 uppercase tracking-tighter">{s.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="py-16 md:py-32 bg-gray-50">
        <div className="max-w-screen-2xl mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-10 md:gap-20 items-center">
            <div className="grid grid-cols-2 gap-3 md:gap-6">
              <div className="space-y-3 md:space-y-6">
                <div className="relative h-40 md:h-64 rounded-2xl md:rounded-[3rem] overflow-hidden shadow-2xl"><Image src="/raj/ot.jpg" alt="OT" fill className="object-cover" /></div>
                <div className="relative h-48 md:h-80 rounded-2xl md:rounded-[3rem] overflow-hidden shadow-2xl"><Image src="/medical.jpg" alt="Raj Nursing Home" fill className="object-cover" /></div>
              </div>
              <div className="space-y-3 md:space-y-6 pt-6 md:pt-12">
                <div className="relative h-48 md:h-80 rounded-2xl md:rounded-[3rem] overflow-hidden shadow-2xl"><Image src="/ultrasound.jpg" alt="Ultrasound" fill className="object-cover" /></div>
                <div className="relative h-40 md:h-64 rounded-2xl md:rounded-[3rem] overflow-hidden shadow-2xl"><Image src="/raj/cabin3.jpg" alt="Patient Room" fill className="object-cover" /></div>
              </div>
            </div>

            <div className="space-y-6 md:space-y-10">
              <div>
                <span className="text-[#9d174d] font-black tracking-[0.2em] md:tracking-[0.3em] uppercase text-xs md:text-sm">Hapur's Trusted Destination</span>
                <h2 className="text-3xl md:text-4xl font-black text-gray-900 mt-2 md:mt-4 leading-tight">Expert Care for <span className="text-[#9d174d]">Everyone</span></h2>
              </div>

              <p className="text-base md:text-xl text-gray-600 leading-relaxed">
                Located on Swarg Ashram Road, Hapur, <strong>Raj Hospital and Nursing Home</strong> combines 15+ years of clinical expertise with modern medical technology. Our patient-first philosophy ensures you receive personalized, compassionate treatment for all your healthcare needs.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-8">
                {[
                  { t: "Expert Team", d: "Senior specialists only", icon: <ShieldIcon /> },
                  { t: "Compassionate", d: "Personalized attention", icon: <HeartIcon /> },
                ].map((f, i) => (
                  <div key={i} className="flex gap-4 md:gap-6 p-4 md:p-6 bg-white rounded-2xl md:rounded-3xl shadow-lg border border-gray-100">
                    <div className="w-12 h-12 md:w-14 md:h-14 bg-red-50 text-[#9d174d] rounded-xl md:rounded-2xl flex items-center justify-center shrink-0">{f.icon}</div>
                    <div>
                      <h4 className="font-black text-base md:text-lg text-gray-900">{f.t}</h4>
                      <p className="text-gray-500 text-xs md:text-sm mt-1">{f.d}</p>
                    </div>
                  </div>
                ))}
              </div>

              <button className="w-full sm:w-auto px-8 md:px-10 py-4 md:py-5 bg-gray-900 text-white font-black text-base md:text-lg rounded-2xl hover:bg-black transition-all flex items-center justify-center gap-4">
                Experience Excellence <ChevronRightIcon />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-16 md:py-32 bg-white">
        <div className="max-w-screen-2xl mx-auto px-4 md:px-6 text-center mb-12 md:mb-24">
          <span className="text-[#9d174d] font-black tracking-[0.3em] uppercase text-xs md:text-sm">Our Medical Services</span>
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mt-2 md:mt-4">Advanced Medical <span className="text-[#9d174d]">Solutions</span></h2>
        </div>

        <div className="max-w-[1700px] mx-auto px-4 md:px-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
          {[
            { name: "Heart Specialist", slug: "heart-specialist", img: "/heart-care.jpg", desc: "Expert cardiac care with advanced monitoring including ECG and 2D Echo.", icon: "❤️" },
            { name: "Internal Medicine", slug: "internal-medicine", img: "/internal1.jpg", desc: "Holistic physician managing cardiac, pulmonary, renal, and endocrine conditions.", icon: "🩺" },
            { name: "Laparoscopic Surgery", slug: "laparoscopic-surgery", img: "/laparoscopic2.jpg", desc: "Minimally invasive safe and modern surgical care for quick recovery.", icon: "🔬" },
            { name: "Diagnostic Services", slug: "diagnostic-services", img: "/Diagnostic3.jpg", desc: "Full-spectrum diagnostics with high-resolution imaging and lab tests.", icon: "🔍" },
            { name: "IVF & Fertility Treatment", slug: "ivf-and-fertility", img: "/IVF2.jpg", desc: "Supporting your journey to parenthood with advanced medical solutions.", icon: "👶" },
            { name: "Woman's Health", slug: "womens-health-in-hapur", img: "/raj/gyne-2.jpg", desc: "Comprehensive gynecological care and maternity services available 24/7.", icon: "💗" },
          ].map((d, i) => (
            <div key={i} className="group relative bg-white border border-gray-100 rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-xl hover:shadow-[0_40px_80px_rgba(157,23,77,0.15)] transition-all duration-700 hover:-translate-y-4">
              <div className="relative h-56 md:h-72 overflow-hidden">
                <Image src={d.img} alt={d.name} fill className="object-cover group-hover:scale-125 transition-transform duration-1000" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <span className="absolute bottom-6 left-8 text-4xl md:text-5xl drop-shadow-2xl">{d.icon}</span>
              </div>
              <div className="p-6 md:p-10">
                <h3 className="text-xl md:text-2xl font-black text-gray-900 mb-3 md:mb-4">{d.name}</h3>
                <p className="text-gray-600 text-sm md:text-lg mb-6 md:mb-8 leading-relaxed">{d.desc}</p>
                <Link href={`/services/${d.slug}`} className="flex items-center gap-3 text-[#9d174d] font-black text-base md:text-lg group-hover:gap-6 transition-all">
                  Book Service <ArrowRightIcon />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* DOCTORS */}
      {/* DOCTORS SECTION - Responsive Cards */}
      <section id="doctors" className="py-16 md:py-24 bg-gray-50 overflow-hidden">
        <div className="max-w-screen-2xl mx-auto px-4 md:px-6 text-center mb-10 md:mb-16">
          <span className="text-[#9d174d] font-black tracking-[0.3em] uppercase text-xs md:text-sm">Meet Our Expert Team</span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mt-2 md:mt-4 tracking-tighter">Legacy of <span className="text-[#9d174d]">Expertise</span></h2>
        </div>

        <div className="max-w-[1780px] mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Doctor 1: Dr. Vipin Kumar Sharma */}
          <div className="bg-white rounded-[2rem] md:rounded-[2.5rem] shadow-xl border border-gray-100 flex flex-col sm:flex-row lg:flex-row xl:flex-row p-5 md:p-6 gap-6 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group min-h-auto lg:min-h-[520px]">
            {/* Left side: Content */}
            <div className="flex-1 flex flex-col gap-3 md:gap-4 order-2 sm:order-1">
              <div>
                <h3 className="text-xl md:text-2xl font-black text-gray-900 leading-tight">Dr. Vipin Kumar Sharma</h3>
                <p className="text-[#9d174d] text-xs md:text-sm font-black uppercase tracking-tight mt-1">MD Medicine Specialist and General Physician in Hapur</p>
              </div>

              <div className="space-y-3 md:space-y-4 overflow-y-auto pr-2 custom-scrollbar max-h-[200px] md:max-h-none">
                <p className="text-[10px] md:text-[10px] text-gray-600 leading-relaxed font-bold">
                  Dr. Vipin Sharma (MBBS, MD Medicine), formerly of Safdarjung Hospital Delhi, brings 15+ years of holistic internal medicine expertise to Raj Nursing Home. As Hapur’s leading systemic health physician, he manages interconnected conditions: cardiac (hypertension, heart failure), pulmonary (asthma, COPD), renal disorders, and endocrine diseases (diabetes/thyroid).
                </p>
                <p className="text-[10px] md:text-[10px] text-gray-500 leading-relaxed italic font-medium hidden sm:block">
                  His "Whole-Body Health Protocol" combines advanced diagnostics (ECG, 2D Echo, PFT) with personalized lifestyle plans – "Dr. Sharma spotted my kidney issue during a routine BP check and prevented dialysis" (Priya M., Pilkhuwa). He oversees RNH’s free community health initiatives, including monsoon fever camps and air pollution impact workshops near Ganga College.
                </p>
              </div>

              <div className="space-y-1 mt-auto pt-4 sm:pt-0">
                {[
                  { l: "Reg. No:", v: "Pediatrics" },
                  { l: "Consultant:", v: "DMC/R/7973" },
                  { l: "Specialty:", v: "Cardiac Physician" },
                ].map((item, i) => (
                  <div key={i} className="flex justify-between items-center text-[10px] bg-gray-50 px-3 py-1.5 rounded-xl border border-gray-100/50">
                    <span className="font-black text-gray-400 uppercase tracking-widest text-[9px]">{item.l}</span>
                    <span className="font-bold text-gray-900">{item.v}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right side: Photo */}
            <div className="w-full sm:w-36 shrink-0 flex flex-col gap-4 order-1 sm:order-2">
              <div className="relative aspect-[3/4] w-full sm:w-36 mx-auto rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                <Image src="/raj/dr.Vipin.jpg" alt="Dr. Vipin" fill className="object-cover object-top" />
              </div>
              <Link href="/dr-vipin-kumar-sharma" className="hidden sm:block w-full py-3.5 bg-[#9d174d] text-white font-black text-[10px] rounded-xl uppercase tracking-widest hover:bg-[#831843] transition-all shadow-lg active:scale-95 text-center inline-block">
                Read More
              </Link>
            </div>
            {/* Mobile Button */}
            <Link href="/dr-vipin-kumar-sharma" className="sm:hidden w-full py-3 bg-[#9d174d] text-white font-black text-xs rounded-xl uppercase tracking-widest shadow-lg order-3 text-center block">
              Read More
            </Link>
          </div>

          {/* Doctor 2: Dr. Srishti Bhardwaj */}
          <div className="bg-white rounded-[2rem] md:rounded-[2.5rem] shadow-xl border border-gray-100 flex flex-col sm:flex-row lg:flex-row xl:flex-row p-5 md:p-6 gap-6 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group min-h-auto lg:min-h-[520px]">
            <div className="flex-1 flex flex-col gap-3 md:gap-4 order-2 sm:order-1">
              <div>
                <h3 className="text-xl md:text-2xl font-black text-gray-900 leading-tight">Dr. Srishti Bhardwaj</h3>
                <p className="text-[#9d174d] text-xs md:text-sm font-black uppercase tracking-tight mt-1">Best Gynaecologist and Pregnancy Specialist In Hapur</p>
              </div>
              <div className="space-y-3 md:space-y-4 overflow-y-auto pr-2 custom-scrollbar max-h-[200px] md:max-h-none">
                <p className="text-[10px] md:text-[10px] text-gray-600 leading-relaxed font-bold">
                  Dr. Srishti Bhardwaj (MS Obstetrics & Gynecology), with 10+ years of expertise, leads RNH’s Women’s Health Wing. She specializes in high-risk pregnancy care, PCOS management, and minimally invasive surgeries (fibroid removal, ovarian cysts). Her patient-centric approach includes birth plans in local dialects and post-delivery Ayurvedic nutrition guides.
                </p>
                <p className="text-[10px] md:text-[10px] text-gray-500 leading-relaxed italic font-medium hidden sm:block">
                  Credited with 2,000+ safe deliveries, Dr. Bhardwaj introduced Hapur’s first 24/7 fetal monitoring system. Her landmark study on rural menstrual health won the UP Medical Innovation Award (2024). Patients affirm: "She held my hand during delivery and spoke in our Kavi Nagar dialect" (Sunita T.).
                </p>
              </div>
              <div className="space-y-1 mt-auto pt-4 sm:pt-0">
                {[
                  { l: "Reg. No:", v: "96831" },
                  { l: "Consultant:", v: "Obstetrics & Gynae" },
                  { l: "Specialty:", v: "Pregnancy Specialist" },
                ].map((item, i) => (
                  <div key={i} className="flex justify-between items-center text-[10px] bg-gray-50 px-3 py-1.5 rounded-xl border border-gray-100/50">
                    <span className="font-black text-gray-400 uppercase tracking-widest text-[9px]">{item.l}</span>
                    <span className="font-bold text-gray-900">{item.v}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="w-full sm:w-36 shrink-0 flex flex-col gap-4 order-1 sm:order-2">
              <div className="relative aspect-[3/4] w-full sm:w-36 mx-auto rounded-2xl overflow-hidden shadow-2xl border-4 border-white grayscale group-hover:grayscale-0 transition-all">
                <Image src="/raj/dr-Srishti.jpg" alt="Dr. Srishti" fill className="object-cover object-top" />
              </div>
              <Link href="/dr-srishti-bhardwaj" className="hidden sm:block w-full py-3.5 bg-[#9d174d] text-white font-black text-[10px] rounded-xl uppercase tracking-widest hover:bg-[#831843] transition-all shadow-lg active:scale-95 text-center inline-block">
                Read More
              </Link>
            </div>
            <Link href="/dr-srishti-bhardwaj" className="sm:hidden w-full py-3 bg-[#9d174d] text-white font-black text-xs rounded-xl uppercase tracking-widest shadow-lg order-3 text-center block">
              Read More
            </Link>
          </div>

          {/* Doctor 3: Dr. M.C. Sharma */}
          <div className="bg-white rounded-[2rem] md:rounded-[2.5rem] shadow-xl border border-gray-100 flex flex-col sm:flex-row lg:flex-row xl:flex-row p-5 md:p-6 gap-6 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group min-h-auto lg:min-h-[520px]">
            {/* Left side: Content */}
            <div className="flex-1 flex flex-col gap-3 md:gap-4 order-2 sm:order-1">
              <div>
                <h3 className="text-xl md:text-2xl font-black text-gray-900 leading-tight">Dr. M.C. Sharma</h3>
                <p className="text-[#9d174d] text-xs md:text-sm font-black uppercase tracking-tight mt-1">Senior Laparoscopic & General Surgeon – Raj Nursing Home, Hapur</p>
              </div>

              <div className="space-y-3 md:space-y-4 overflow-y-auto pr-2 custom-scrollbar max-h-[350px] md:max-h-[350px]">
                <p className="text-[10px] md:text-[10px] text-gray-600 leading-relaxed font-bold">
                  With over 20 years of surgical excellence in Hapur, Dr. M.C. Sharma (MBBS, MS - Surgery) is a pioneer in minimally invasive procedures at Raj Nursing Home. Trained at premier institutions, he has performed 1,500+ successful laparoscopic surgeries for appendicitis, gallstones, hernia, and gynecological conditions. His signature "Stitchless Technique" ensures scars under 1cm, 70% faster recovery, and same-day discharge for 90% of patients.
                </p>
                <p className="text-[10px] md:text-[10px] text-gray-500 leading-relaxed italic font-medium hidden sm:block">
                  Dr. Sharma leads our 24/7 emergency surgical unit, handling complex trauma cases from across Western Uttar Pradesh. Patients praise his compassionate approach – "He explained my gallbladder surgery in simple Hindi and visited me hourly post-op" (Ramesh K., Hapur). Beyond the OT, he conducts free surgical camps in rural Ghaziabad and mentors medical students.
                </p>
                <p className="text-[10px] md:text-[10px] text-gray-600 leading-relaxed font-bold hidden sm:block">
                  With decades of surgical experience and a reputation for clinical excellence, Dr. M. C. Sharma is one of the most trusted laparoscopic surgeons in Hapur. He brings precision, skill, and compassion to every procedure, offering patients minimally invasive surgical solutions.
                </p>
              </div>

              <div className="space-y-1 mt-auto pt-4 sm:pt-0">
                {[
                  { l: "Reg. No:", v: "49495" },
                  { l: "OPD Hours:", v: "9 AM - 2 PM (Mon-Sat)" },
                  { l: "Expertise:", v: "Stitchless Tech" },
                ].map((item, i) => (
                  <div key={i} className="flex justify-between items-center text-[10px] bg-gray-50 px-3 py-1.5 rounded-xl border border-gray-100/50">
                    <span className="font-black text-gray-400 uppercase tracking-widest text-[9px]">{item.l}</span>
                    <span className="font-bold text-gray-900">{item.v}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right side: Photo */}
            <div className="w-full sm:w-36 shrink-0 flex flex-col gap-4 order-1 sm:order-2">
              <div className="relative aspect-[3/4] w-full sm:w-36 mx-auto rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                <Image src="/raj/M.C.Sharma.jpg" alt="Dr. M.C. Sharma" fill className="object-cover object-top" />
              </div>
              <Link href="/dr-mc-sharma" className="hidden sm:block w-full py-3.5 bg-[#9d174d] text-white font-black text-[10px] rounded-xl uppercase tracking-widest hover:bg-[#831843] transition-all shadow-lg active:scale-95 text-center inline-block">
                Read More
              </Link>
            </div>
            <Link href="/dr-mc-sharma" className="sm:hidden w-full py-3 bg-[#9d174d] text-white font-black text-xs rounded-xl uppercase tracking-widest shadow-lg order-3 text-center block">
              Read More
            </Link>
          </div>
        </div>
      </section>

      {/* DEPARTMENT SECTION - Premium Modern Design */}
      <section className="py-24 bg-gradient-to-br from-gray-50 via-white to-red-50/30 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-red-100 rounded-full blur-[120px] opacity-30" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#9d174d]/10 rounded-full blur-[120px] opacity-40" />

        <div className="max-w-[1400px] mx-auto px-6 relative z-10">
          {/* Section Title */}
          <div className="text-center mb-16">
            <span className="text-[#9d174d] font-black tracking-[0.3em] uppercase text-sm">Our Specialties</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mt-4 mb-3">
              Medical <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#9d174d] to-[#f43f5e]">Departments</span>
            </h2>
            <div className="h-1.5 w-24 bg-gradient-to-r from-[#9d174d] to-[#f43f5e] mx-auto rounded-full" />
          </div>

          <div className="grid lg:grid-cols-[420px,1fr] gap-12 items-start">
            {/* Left Tabs - Premium Cards */}
            <div className="space-y-4">
              {[
                { name: "Surgery Department", icon: "🏥", color: "from-blue-500 to-cyan-500" },
                { name: "Internal Medicine Department", icon: "🩺", color: "from-purple-500 to-pink-500" },
                { name: "Gynaecological Department", icon: "💗", color: "from-rose-500 to-pink-500" }
              ].map((dept, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveDept(idx)}
                  className={`group w-full text-left p-6 rounded-3xl border-2 transition-all duration-500 relative overflow-hidden ${activeDept === idx
                    ? "bg-gradient-to-br from-[#9d174d] to-[#be185d] border-[#9d174d] shadow-2xl shadow-red-500/30 scale-[1.02]"
                    : "bg-white/80 backdrop-blur-sm border-gray-200 hover:border-[#9d174d]/40 hover:shadow-xl hover:scale-[1.01]"
                    }`}
                >
                  {/* Icon */}
                  <div className={`absolute top-4 right-4 text-4xl transition-all duration-500 ${activeDept === idx ? "opacity-20 scale-150" : "opacity-10 group-hover:opacity-30 group-hover:scale-125"
                    }`}>
                    {dept.icon}
                  </div>

                  <div className="flex items-center gap-4 relative z-10">
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-2xl transition-all duration-500 ${activeDept === idx
                      ? "bg-white/20 backdrop-blur-sm"
                      : `bg-gradient-to-br ${dept.color} shadow-lg`
                      }`}>
                      {dept.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className={`font-black text-base leading-tight transition-colors ${activeDept === idx ? "text-white" : "text-gray-900"
                        }`}>
                        {dept.name}
                      </h3>
                      <p className={`text-xs font-bold mt-1 transition-colors ${activeDept === idx ? "text-red-100" : "text-gray-500"
                        }`}>
                        {idx === 0 && "Advanced Surgical Solutions"}
                        {idx === 1 && "Holistic Healthcare"}
                        {idx === 2 && "Women's Wellness"}
                      </p>
                    </div>

                    {/* Arrow indicator */}
                    <div className={`transition-all duration-500 ${activeDept === idx ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
                      }`}>
                      <ChevronRightIcon className="text-white" />
                    </div>
                  </div>
                </button>
              ))}
            </div>

            {/* Right Content - Premium Card */}
            <div className="bg-white/60 backdrop-blur-xl rounded-[3rem] p-10 md:p-14 border border-gray-200/50 shadow-2xl min-h-[420px] flex flex-col">
              <div key={activeDept} className="animate-in fade-in slide-in-from-right-10 duration-700 flex-1 flex flex-col">
                {/* Title with icon */}
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#9d174d] to-[#f43f5e] flex items-center justify-center text-3xl shadow-lg shrink-0">
                    {activeDept === 0 && "🏥"}
                    {activeDept === 1 && "🩺"}
                    {activeDept === 2 && "💗"}
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-black text-gray-900 leading-tight">
                      {activeDept === 0 && "Surgical Care You Can Trust"}
                      {activeDept === 1 && "Expert Medical Diagnosis & Care"}
                      {activeDept === 2 && "Compassionate Care for Women"}
                    </h3>
                    <div className="h-1 w-16 bg-gradient-to-r from-[#9d174d] to-[#f43f5e] rounded-full mt-3" />
                  </div>
                </div>

                {/* Description */}
                <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-8 flex-1">
                  {activeDept === 0 && "Our surgical department is equipped to handle a wide range of procedures with safety, precision, and care. Whether it's planned surgery or an emergency operation, our team of skilled surgeons and trained staff work together to ensure a smooth experience and a faster recovery. We follow strict hygiene protocols and use modern techniques for the best possible outcomes."}
                  {activeDept === 1 && "Our internal medicine wing specializes in the prevention, diagnosis, and treatment of adult diseases. From chronic condition management like diabetes and hypertension to acute illness care, we provide comprehensive health solutions tailored to each patient's unique needs."}
                  {activeDept === 2 && "Dedicated to every stage of a woman's life, our gynaecology department provides expert care for maternity, high-risk pregnancies, PCOS, and minimally invasive surgeries. We combine advanced medical technology with a sensitive, patient-centric approach."}
                </p>

                {/* Features */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {activeDept === 0 && [
                    { icon: "🔬", text: "Advanced Techniques" },
                    { icon: "⚡", text: "Fast Recovery" },
                    { icon: "🛡️", text: "Safety First" },
                    { icon: "👨‍⚕️", text: "Expert Surgeons" }
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 p-3 bg-blue-50/50 rounded-2xl border border-blue-100/50">
                      <span className="text-xl">{item.icon}</span>
                      <span className="text-xs font-bold text-gray-700">{item.text}</span>
                    </div>
                  ))}

                  {activeDept === 1 && [
                    { icon: "🩺", text: "Preventive Care" },
                    { icon: "💊", text: "Chronic Management" },
                    { icon: "🔍", text: "Accurate Diagnosis" },
                    { icon: "❤️", text: "Holistic Approach" }
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 p-3 bg-purple-50/50 rounded-2xl border border-purple-100/50">
                      <span className="text-xl">{item.icon}</span>
                      <span className="text-xs font-bold text-gray-700">{item.text}</span>
                    </div>
                  ))}

                  {activeDept === 2 && [
                    { icon: "👶", text: "Maternity Care" },
                    { icon: "🏥", text: "Minimally Invasive" },
                    { icon: "💗", text: "Women's Wellness" },
                    { icon: "🌟", text: "24/7 Support" }
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 p-3 bg-rose-50/50 rounded-2xl border border-rose-100/50">
                      <span className="text-xl">{item.icon}</span>
                      <span className="text-xs font-bold text-gray-700">{item.text}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <button className="group px-10 py-5 bg-gradient-to-r from-[#9d174d] to-[#be185d] hover:from-[#831843] hover:to-[#9d174d] text-white font-black text-lg rounded-2xl transition-all duration-500 hover:-translate-y-1 shadow-xl shadow-red-500/30 hover:shadow-2xl hover:shadow-red-500/40 flex items-center justify-center gap-3">
                  Book Appointment Now
                  <ArrowRightIcon />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS SECTION - Premium Redesign */}
      <section id="testimonials" className="py-24 bg-[#0f172a] relative overflow-hidden text-white">
        {/* Abstract Background Shapes */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-20">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#9d174d] rounded-full blur-[120px]"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-600 rounded-full blur-[120px]"></div>
        </div>

        <div className="max-w-screen-2xl mx-auto px-6 relative z-10 text-center">
          {/* Section Title */}
          <div className="mb-16">
            <span className="text-red-400 font-black tracking-[0.3em] uppercase text-sm">Patient Stories</span>
            <h2 className="text-3xl md:text-4xl font-black text-white mt-4">
              Real Stories, <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#9d174d] to-[#f43f5e]">Real Trust</span>
            </h2>
            <div className="h-1.5 w-24 bg-gradient-to-r from-[#9d174d] to-[#f43f5e] mx-auto rounded-full mt-6" />
          </div>

          <div className="max-w-4xl mx-auto">
            <div key={activeTestimonial} className="relative bg-white/10 backdrop-blur-xl border border-white/10 rounded-[3rem] p-8 md:p-12 shadow-2xl animate-in fade-in slide-in-from-bottom-8 duration-700">
              {/* Large Quote Icon */}
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gradient-to-br from-[#9d174d] to-[#f43f5e] w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg shadow-red-500/30 rotate-12">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="currentColor" className="text-white transform -rotate-12"><path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11C14.017 11.5523 13.5693 12 13.017 12H12.017V5H22.017V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM5.0166 21L5.0166 18C5.0166 16.8954 5.91203 16 7.0166 16H10.0166C10.5689 16 11.0166 15.5523 11.0166 15V9C11.0166 8.44772 10.5689 8 10.0166 8H6.0166C5.46432 8 5.0166 8.44772 5.0166 9V11C5.0166 11.5523 4.56889 12 4.0166 12H3.0166V5H13.0166V15C13.0166 18.3137 10.3303 21 7.0166 21H5.0166Z" /></svg>
              </div>

              {/* Content Grid */}
              <div className="mt-8 flex flex-col items-center">
                {/* Star Rating */}
                <div className="flex gap-1 mb-6 text-yellow-400">
                  {[1, 2, 3, 4, 5].map((_, i) => (
                    <StarIcon key={i} />
                  ))}
                </div>

                {/* Text */}
                <p className="text-lg md:text-2xl leading-relaxed font-medium text-gray-200 italic mb-8">
                  "{[
                    "I had been struggling with a constant cough and chest tightness for months. Dr. Vipin Kumar Sharma diagnosed it correctly as a lung infection and started treatment immediately. The improvement was visible within days. Their attention to detail is unmatched!",
                    "My wife delivered our first baby here, and we couldn't have asked for a better experience. Dr. Srishti Bhardwaj was incredibly kind and explained every step clearly. The nursing staff was supportive and caring throughout our stay.",
                    "I was nervous about my emergency appendix surgery, but the team here made me feel completely safe. Dr. M.C. Sharma's expertise is evident—the surgery went smoothly, and I was back on my feet in just a few days. Truly grateful!"
                  ][activeTestimonial]}"
                </p>

                <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent mb-8" />

                {/* Profile Info */}
                <div className="flex items-center gap-4">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-[#9d174d] shadow-lg shadow-red-500/20">
                    <Image
                      src={[
                        "/raj/test1.jpg",
                        "/raj/test2.jpg",
                        "/raj/test3.jpg"
                      ][activeTestimonial]}
                      alt="Patient"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="text-left">
                    <h4 className="text-xl font-black text-white">
                      {[
                        "Sabiya Anjum",
                        "Akhil Joshi",
                        "Ramesh Verma"
                      ][activeTestimonial]}
                    </h4>
                    <p className="text-red-400 text-xs font-bold uppercase tracking-widest">
                      {[
                        "Patient, 46 Yrs",
                        "Patient, 35 Yrs",
                        "Patient, 52 Yrs"
                      ][activeTestimonial]}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Pagination */}
            <div className="flex justify-center gap-4 mt-12">
              {[0, 1, 2].map((idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveTestimonial(idx)}
                  className={`transition-all duration-300 rounded-full ${activeTestimonial === idx
                    ? "w-12 h-3 bg-gradient-to-r from-[#9d174d] to-[#f43f5e] shadow-lg shadow-red-500/50"
                    : "w-3 h-3 bg-gray-700 hover:bg-gray-600"
                    }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FACILITIES */}
      <section className="py-32 bg-gray-50">
        <div className="max-w-screen-2xl mx-auto px-6 text-center mb-24">
          <span className="text-[#9d174d] font-black tracking-[0.3em] uppercase text-sm">Our Facilities</span>
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mt-4">Modern Medical <span className="text-[#9d174d]">Infrastructure</span></h2>
        </div>

        <div className="max-w-screen-2xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {facilities.map((f, i) => (
            <div key={i} className="group bg-white rounded-[2rem] p-4 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <div className="relative h-64 rounded-2xl overflow-hidden mb-6">
                <Image src={f.img} alt={f.title} fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
              </div>
              <div className="px-2 pb-4">
                <h4 className="text-xl font-black text-gray-900 mb-2 group-hover:text-[#9d174d] transition-colors">{f.title}</h4>
                <p className="text-gray-500 text-sm font-bold leading-relaxed">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section >


    </div>
  );
}
