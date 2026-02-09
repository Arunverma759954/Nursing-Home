"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

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
const MenuIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12" /><line x1="4" x2="20" y1="6" y2="6" /><line x1="4" x2="20" y1="18" y2="18" /></svg>;
const XIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>;
const MailIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>;
const FacebookIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>;
const InstagramIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>;

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDept, setActiveDept] = useState(0);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMenuOpen]);

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
          HEADER & NAVBAR - Fixed structure
      ═══════════════════════════════════════════════════════════════════════════ */}
      <nav className="fixed top-0 w-full z-50">
        {/* Top Header Bar */}
        <div className="bg-[#9d174d] text-white py-2 px-6 lg:px-12 border-b border-white/10">
          <div className="max-w-[1700px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 py-1">
            {/* Need Urgent Care */}
            <a href="tel:+916397970802" className="flex items-center gap-3 hover:text-red-100 transition-colors group">
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-all">
                <PhoneIcon />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] font-bold opacity-70 uppercase tracking-widest">Need Urgent Care?</span>
                <span className="text-sm font-black">+91 63979 70802</span>
              </div>
            </a>

            {/* Send us a Mail */}
            <a href="mailto:drvipinkumarsharma@gmail.com" className="hidden lg:flex items-center gap-3 hover:text-red-100 transition-colors group">
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-all">
                <MailIcon />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] font-bold opacity-70 uppercase tracking-widest">Send us a Mail</span>
                <span className="text-sm font-black">drvipinkumar@gmail.com</span>
              </div>
            </a>

            {/* Our Location */}
            <div className="hidden md:flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-all">
                <MapPinIcon />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] font-bold opacity-70 uppercase tracking-widest">Our Location</span>
                <span className="text-sm font-black italic">Kavi Nagar, Hapur, UP</span>
              </div>
            </div>

            {/* Working Hours */}
            <div className="hidden xl:flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-all">
                <ClockIcon />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] font-bold opacity-70 uppercase tracking-widest">Working Hours</span>
                <span className="text-sm font-black">Mon - Sun 08:00 - 19:00</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Navbar */}
        <div className={`w-full transition-all duration-500 bg-white border-b border-gray-100 ${isScrolled ? 'shadow-[0_10px_30px_rgba(157,23,77,0.1)] py-2' : 'py-4'}`}>
          <div className="max-w-[1700px] mx-auto px-6 md:px-12 flex items-center justify-between">
            {/* Logo */}
            <a href="#" className="flex items-center gap-4 group">
              <div className="relative w-14 h-14 md:w-16 md:h-16 transition-transform group-hover:rotate-[360deg] duration-1000">
                <Image src="/RNH logo.png" alt="RNH Logo" fill className="object-contain" />
              </div>
              <div className="flex flex-col">
                <h1 className="text-xl md:text-2xl lg:text-3xl font-black text-[#9d174d] tracking-tight leading-none uppercase">RAJ NURSING HOME</h1>
                <p className="text-[9px] md:text-[10px] font-bold text-gray-400 uppercase tracking-widest mt-1">Excellence in Healthcare since 1999</p>
              </div>
            </a>

            {/* Nav Links */}
            <div className="hidden xl:flex items-center gap-1">
              <a href="#home" className="px-5 py-3 text-lg font-bold text-gray-700 hover:text-[#9d174d] hover:bg-red-50 rounded-2xl transition-all">Home</a>
              <a href="#about" className="px-5 py-3 text-lg font-bold text-gray-700 hover:text-[#9d174d] hover:bg-red-50 rounded-2xl transition-all">About</a>

              {/* Services Dropdown */}
              <div className="relative group">
                <button className="px-5 py-3 text-lg font-bold text-gray-700 hover:text-[#9d174d] hover:bg-red-50 rounded-2xl transition-all flex items-center gap-2">
                  Services
                  <svg className="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 9l-7 7-7-7" /></svg>
                </button>
                <div className="absolute top-full left-0 w-72 pt-2 opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 z-50">
                  <div className="bg-white rounded-3xl shadow-[0_20px_50px_rgba(157,23,77,0.15)] border border-gray-100 p-3 overflow-hidden">
                    {[
                      { name: "Heart Specialist", slug: "heart-specialist" },
                      { name: "Internal Medicine", slug: "internal-medicine" },
                      { name: "Laparoscopic Surgery", slug: "laparoscopic-surgery" },
                      { name: "Diagnostic Services", slug: "diagnostic-services" },
                      { name: "Ultrasound & Imaging", slug: "ultrasound-and-imaging" },
                      { name: "2D Echo & ECG", slug: "2d-echo-and-ecg" },
                      { name: "PFT Testing", slug: "pft-testing" },
                      { name: "Digital X-Ray", slug: "digital-x-ray" },
                      { name: "IVF & Fertility Treatment", slug: "ivf-and-fertility" },
                      { name: "Heart & Chest Care", slug: "heart-and-chest-care" },
                      { name: "Woman's Health", slug: "woman-health" }
                    ].map((service) => (
                      <Link
                        key={service.slug}
                        href={`/services/${service.slug}`}
                        className="block px-6 py-3.5 text-base font-bold text-gray-600 hover:text-[#9d174d] hover:bg-red-50 rounded-2xl transition-all"
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              <a href="#doctors" className="px-5 py-3 text-lg font-bold text-gray-700 hover:text-[#9d174d] hover:bg-red-50 rounded-2xl transition-all">Doctors</a>
              <a href="#testimonials" className="px-5 py-3 text-lg font-bold text-gray-700 hover:text-[#9d174d] hover:bg-red-50 rounded-2xl transition-all">Testimonials</a>
              <a href="#contact" className="px-5 py-3 text-lg font-bold text-gray-700 hover:text-[#9d174d] hover:bg-red-50 rounded-2xl transition-all">Contact</a>
            </div>

            {/* CTA */}
            <div className="flex items-center gap-4">
              <button className="hidden sm:flex px-10 py-5 bg-[#9d174d] hover:bg-[#831843] text-white text-lg font-black rounded-2xl shadow-xl shadow-red-500/25 transition-all hover:-translate-y-1 flex items-center gap-3">
                Admission Now
                <ArrowRightIcon />
              </button>

              <button
                onClick={() => setIsMenuOpen(true)}
                className="xl:hidden p-3 text-gray-900 bg-gray-50 hover:bg-red-50 hover:text-[#9d174d] rounded-2xl transition-all border border-gray-100"
              >
                <MenuIcon />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Panel */}
      <div className={`fixed inset-0 z-[100] transition-all duration-500 ${isMenuOpen ? 'visible' : 'invisible xl:invisible'}`}>
        <div className={`absolute inset-0 bg-gray-900/60 backdrop-blur-md transition-opacity duration-500 ${isMenuOpen ? 'opacity-100' : 'opacity-0'}`} onClick={() => setIsMenuOpen(false)} />
        <div className={`absolute top-0 right-0 bottom-0 w-full xs:w-[350px] bg-white transition-transform duration-500 ease-out shadow-2xl ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="flex flex-col h-full">
            <div className="flex items-center justify-between p-8 border-b border-gray-100">
              <span className="font-black text-2xl text-[#9d174d]">MENU</span>
              <button
                onClick={() => setIsMenuOpen(false)}
                className="p-4 bg-gray-100 hover:bg-red-600 hover:text-white text-gray-900 rounded-2xl transition-all hover:rotate-90 shadow-lg"
              >
                <XIcon />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-8 space-y-4">
              {["Home", "About", "Services", "Doctors", "Testimonials", "Contact"].map((item) => (
                <div key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    onClick={() => setIsMenuOpen(false)}
                    className="flex items-center justify-between px-6 py-5 text-2xl font-black text-gray-800 hover:text-[#9d174d] hover:bg-red-50 rounded-3xl transition-all group border border-transparent hover:border-red-100"
                  >
                    {item}
                    <ChevronRightIcon className="opacity-0 group-hover:opacity-100 transition-all transform -translate-x-4 group-hover:translate-x-0" />
                  </a>
                </div>
              ))}

              <div className="mt-12 pt-12 border-t border-gray-100">
                <p className="text-xs font-black text-gray-400 uppercase tracking-[0.2em] mb-6">Contact Us</p>
                <a href="tel:+916397970802" className="flex items-center gap-5 p-4 bg-gray-50 rounded-3xl group">
                  <div className="w-14 h-14 bg-[#9d174d] text-white rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <PhoneIcon />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-gray-500">Emergency Call</p>
                    <p className="text-xl font-black text-gray-900">+91 63979</p>
                  </div>
                </a>
              </div>
            </div>

            <div className="p-8 bg-gray-50 border-t border-gray-100">
              <button className="w-full py-6 bg-gradient-to-r from-[#9d174d] to-[#f43f5e] text-white font-black text-xl rounded-3xl shadow-2xl shadow-red-500/30 flex items-center justify-center gap-4 transition-transform active:scale-95">
                Admission Now
                <ArrowRightIcon />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════════════════════════
          HERO SECTION
      ═══════════════════════════════════════════════════════════════════════════ */}
      <section id="home" className="relative h-auto min-h-[550px] md:min-h-[600px] lg:h-[750px] flex items-center overflow-hidden py-16 md:py-0 bg-white pb-24 md:pb-32">
        <Image src="/Banner_1c.webp" alt="Raj Nursing Home Banner" fill className="object-cover z-0 opacity-90" priority />

        {/* Gradients */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/30 z-10"></div>

        <div className="relative z-20 max-w-7xl mx-auto px-6 md:px-12 w-full h-full flex items-center">
          <div className="max-w-3xl space-y-6">
            {/* Badge - Smaller */}
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/80 border border-gray-200 text-[#9d174d] text-[10px] md:text-xs font-bold rounded-full shadow-sm backdrop-blur-md">
              <span className="w-1.5 h-1.5 bg-red-600 rounded-full animate-pulse"></span>
              EXCELLENCE IN HEALTHCARE
            </div>

            {/* Main Heading - Smaller & Tight */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 leading-[1.1] tracking-tight">
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
                Book Consultation <ArrowRightIcon className="w-4 h-4" />
              </button>
              <button className="px-6 py-3 bg-white border border-gray-200 text-gray-800 font-bold text-sm rounded-xl hover:bg-gray-50 transition-all flex items-center justify-center gap-2 shadow-sm">
                <div className="w-6 h-6 bg-red-50 rounded-full flex items-center justify-center text-[#9d174d]">
                  <PlayIcon className="w-3 h-3" />
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
        <div className="max-w-7xl mx-auto px-4 md:px-6">
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
                <h2 className="text-3xl md:text-5xl lg:text-7xl font-black text-gray-900 mt-2 md:mt-4 leading-tight">Expert Care for <span className="text-[#9d174d]">Everyone</span></h2>
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
        <div className="max-w-7xl mx-auto px-4 md:px-6 text-center mb-12 md:mb-24">
          <span className="text-[#9d174d] font-black tracking-[0.3em] uppercase text-xs md:text-sm">Our Medical Services</span>
          <h2 className="text-3xl md:text-5xl lg:text-7xl font-black text-gray-900 mt-2 md:mt-4">Advanced Medical <span className="text-[#9d174d]">Solutions</span></h2>
        </div>

        <div className="max-w-[1700px] mx-auto px-4 md:px-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
          {[
            { name: "Heart Specialist", slug: "heart-specialist", img: "/heart-care.jpg", desc: "Expert cardiac care with advanced monitoring including ECG and 2D Echo.", icon: "❤️" },
            { name: "Internal Medicine", slug: "internal-medicine", img: "/internal1.jpg", desc: "Holistic physician managing cardiac, pulmonary, renal, and endocrine conditions.", icon: "🩺" },
            { name: "Laparoscopic Surgery", slug: "laparoscopic-surgery", img: "/laparoscopic2.jpg", desc: "Minimally invasive safe and modern surgical care for quick recovery.", icon: "🔬" },
            { name: "Diagnostic Services", slug: "diagnostic-services", img: "/Diagnostic3.jpg", desc: "Full-spectrum diagnostics with high-resolution imaging and lab tests.", icon: "🔍" },
            { name: "IVF & Fertility Treatment", slug: "ivf-and-fertility", img: "/IVF2.jpg", desc: "Supporting your journey to parenthood with advanced medical solutions.", icon: "👶" },
            { name: "Woman's Health", slug: "woman-health", img: "/raj/gyne-2.jpg", desc: "Comprehensive gynecological care and maternity services available 24/7.", icon: "💗" },
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
        <div className="max-w-7xl mx-auto px-4 md:px-6 text-center mb-10 md:mb-16">
          <span className="text-[#9d174d] font-black tracking-[0.3em] uppercase text-xs md:text-sm">Meet Our Expert Team</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mt-2 md:mt-4 tracking-tighter">Legacy of <span className="text-[#9d174d]">Expertise</span></h2>
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
              <button className="hidden sm:block w-full py-3.5 bg-[#9d174d] text-white font-black text-[10px] rounded-xl uppercase tracking-widest hover:bg-[#831843] transition-all shadow-lg active:scale-95">
                Book Appt
              </button>
            </div>
            {/* Mobile Button */}
            <button className="sm:hidden w-full py-3 bg-[#9d174d] text-white font-black text-xs rounded-xl uppercase tracking-widest shadow-lg order-3">
              Book Appointment
            </button>
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
              <button className="hidden sm:block w-full py-3.5 bg-[#9d174d] text-white font-black text-[10px] rounded-xl uppercase tracking-widest hover:bg-[#831843] transition-all shadow-lg active:scale-95">
                Book Appt
              </button>
            </div>
            <button className="sm:hidden w-full py-3 bg-[#9d174d] text-white font-black text-xs rounded-xl uppercase tracking-widest shadow-lg order-3">
              Book Appointment
            </button>
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
              <button className="hidden sm:block w-full py-3.5 bg-gray-900 text-white font-black text-[10px] rounded-xl uppercase tracking-widest hover:bg-black transition-all shadow-lg active:scale-95">
                Book Appt
              </button>
            </div>
            <button className="sm:hidden w-full py-3 bg-gray-900 text-white font-black text-xs rounded-xl uppercase tracking-widest shadow-lg order-3">
              Book Appointment
            </button>
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
            <h2 className="text-4xl md:text-6xl font-black text-gray-900 mt-4 mb-3">
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

        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          {/* Section Title */}
          <div className="mb-16">
            <span className="text-red-400 font-black tracking-[0.3em] uppercase text-sm">Patient Stories</span>
            <h2 className="text-4xl md:text-6xl font-black text-white mt-4">
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
        <div className="max-w-7xl mx-auto px-6 text-center mb-24">
          <span className="text-[#9d174d] font-black tracking-[0.3em] uppercase text-sm">Our Facilities</span>
          <h2 className="text-5xl md:text-7xl font-black text-gray-900 mt-4">Modern Medical <span className="text-[#9d174d]">Infrastructure</span></h2>
        </div>

        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
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

      {/* FOOTER - Premium Dark Design */}
      <footer id="contact" className="bg-[#0b1120] text-white pt-24 pb-12 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#9d174d]/50 to-transparent"></div>
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#9d174d]/20 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="absolute top-40 -left-20 w-72 h-72 bg-blue-600/10 rounded-full blur-[80px] pointer-events-none"></div>

        <div className="max-w-[1700px] mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-20 border-b border-white/5 pb-16 mb-12 relative z-10">
          {/* Brand Column */}
          <div className="space-y-8">
            <div className="flex items-center gap-4 group cursor-pointer">
              <div className="relative w-16 h-16 transition-transform duration-700 group-hover:rotate-[360deg]">
                <Image src="/RNH logo.png" alt="RNH Logo" fill className="object-contain brightness-110 drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]" />
              </div>
              <div className="flex flex-col">
                <h3 className="text-2xl font-black tracking-tighter leading-none bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">RAJ NURSING<br />HOME</h3>
                <span className="text-[10px] font-bold text-[#9d174d] tracking-[0.2em] uppercase mt-1">Since 1999</span>
              </div>
            </div>
            <p className="text-gray-400 text-lg font-medium leading-relaxed max-w-xs">
              Western Uttar Pradesh's most trusted medical landmark. Delivering excellence in healthcare with compassion and advanced technology.
            </p>
            <div className="flex gap-4">
              {[
                { i: <FacebookIcon />, c: "hover:bg-[#1877F2]" },
                { i: <InstagramIcon />, c: "hover:bg-[#E4405F]" },
                { i: <MailIcon />, c: "hover:bg-red-500" }
              ].map((s, idx) => (
                <div key={idx} className={`w-12 h-12 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl flex items-center justify-center text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg cursor-pointer ${s.c}`}>
                  {s.i}
                </div>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-8">
            <h4 className="text-xl font-black flex items-center gap-3">
              <span className="w-8 h-1 bg-[#9d174d] rounded-full"></span>
              Quick Navigation
            </h4>
            <ul className="space-y-4">
              {[
                { n: "Our Story", l: "#about" },
                { n: "Medical Services", l: "#services" },
                { n: "Expert Team", l: "#doctors" },
                { n: "Patient Stories", l: "#testimonials" },
                { n: "Book Appointment", l: "#contact" }
              ].map((link, idx) => (
                <li key={idx}>
                  <a href={link.l} className="group flex items-center gap-3 text-gray-400 hover:text-white text-lg font-medium transition-colors">
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-600 group-hover:bg-[#9d174d] transition-colors"></span>
                    <span className="group-hover:translate-x-1 transition-transform">{link.n}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <h4 className="text-xl font-black flex items-center gap-3">
              <span className="w-8 h-1 bg-[#9d174d] rounded-full"></span>
              Contact Us
            </h4>
            <ul className="space-y-6">
              <li className="flex items-start gap-4 text-gray-400 group">
                <div className="w-12 h-12 rounded-xl bg-[#9d174d]/10 text-[#9d174d] flex items-center justify-center shrink-0 group-hover:bg-[#9d174d] group-hover:text-white transition-all">
                  <MapPinIcon />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-1 block">Visit Us</span>
                  <p className="text-white font-medium leading-tight">Swarg Ashram Road,<br />Hapur, Uttar Pradesh</p>
                </div>
              </li>
              <li className="flex items-start gap-4 text-gray-400 group">
                <div className="w-12 h-12 rounded-xl bg-[#9d174d]/10 text-[#9d174d] flex items-center justify-center shrink-0 group-hover:bg-[#9d174d] group-hover:text-white transition-all">
                  <PhoneIcon />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-1 block">Emergency Call</span>
                  <a href="tel:+916397970802" className="text-white font-bold text-xl hover:text-[#9d174d] transition-colors">+91 63979 70802</a>
                </div>
              </li>
              <li className="flex items-start gap-4 text-gray-400 group">
                <div className="w-12 h-12 rounded-xl bg-[#9d174d]/10 text-[#9d174d] flex items-center justify-center shrink-0 group-hover:bg-[#9d174d] group-hover:text-white transition-all">
                  <MailIcon />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-1 block">Email Support</span>
                  <a href="mailto:drvipinkumar@gmail.com" className="text-white font-medium hover:text-[#9d174d] transition-colors">drvipinkumar@gmail.com</a>
                </div>
              </li>
            </ul>
          </div>

          {/* Working Hours Card */}
          <div className="space-y-8">
            <h4 className="text-xl font-black flex items-center gap-3">
              <span className="w-8 h-1 bg-[#9d174d] rounded-full"></span>
              Working Hours
            </h4>
            <div className="p-8 rounded-[2.5rem] bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 backdrop-blur-md relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-[#9d174d]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10 space-y-6">
                <div className="flex justify-between items-center border-b border-white/10 pb-4">
                  <span className="text-gray-300 font-bold flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>Emergency</span>
                  <span className="text-white font-black text-lg">24 / 7</span>
                </div>
                <div className="flex justify-between items-center border-b border-white/10 pb-4">
                  <span className="text-gray-300 font-bold">OPD Timings</span>
                  <div className="text-right">
                    <span className="text-white font-bold block">08:00 - 14:00</span>
                    <span className="text-white font-bold block">17:00 - 19:00</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300 font-bold">Pharmacy</span>
                  <span className="text-white font-black text-lg">24 / 7</span>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-white/10">
                <button className="w-full py-3 bg-white text-gray-900 font-black rounded-xl hover:bg-[#9d174d] hover:text-white transition-all text-sm uppercase tracking-widest shadow-lg">
                  Book Appointment
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm font-medium text-gray-500">
          <p>© 2024 Raj Nursing Home. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Sitemap</a>
          </div>
        </div>
      </footer>

      {/* WhatsApp Button */}
      < a
        href="https://wa.me/916397970802"
        target="_blank"
        className="fixed bottom-10 right-10 w-20 h-20 bg-green-500 rounded-[2.5rem] shadow-2xl flex items-center justify-center text-white z-[100] hover:scale-110 transition-all hover:rotate-12"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" viewBox="0 0 16 16">
          <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
        </svg>
      </a>
    </div>
  );
}
