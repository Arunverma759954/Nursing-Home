"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  ChevronDown,
  Check,
  Phone,
  Activity,
  Baby,
  ShieldCheck,
  Heart,
  UserCheck,
  Clock,
  Building2,
  FileText,
  HeartHandshake,
  Star,
  ArrowRight,
  CheckCircle2
} from "lucide-react";

const FAQItem = ({
  question,
  answer,
  isOpen,
  toggle,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  toggle: () => void;
}) => {
  return (
    <div className={`border border-gray-100 rounded-3xl bg-white overflow-hidden transition-all duration-500 hover:shadow-xl ${isOpen ? 'shadow-lg ring-1 ring-gray-100' : ''}`}>
      <button
        onClick={toggle}
        className="w-full flex items-center justify-between p-6 md:p-8 text-left group"
      >
        <span className={`text-lg font-bold transition-colors duration-300 ${isOpen ? "text-[#9d174d]" : "text-gray-900 group-hover:text-[#9d174d]"}`}>
          {question}
        </span>
        <span
          className={`flex items-center justify-center w-10 h-10 rounded-full transition-all duration-300 ${isOpen ? "bg-[#9d174d] text-white rotate-180" : "bg-gray-50 text-gray-400 group-hover:bg-red-50 group-hover:text-[#9d174d]"
            }`}
        >
          <ChevronDown className="w-5 h-5" />
        </span>
      </button>
      <div
        className={`transition-[max-height,opacity] duration-500 ease-in-out ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
      >
        <div className="p-8 pt-0 text-gray-600 leading-relaxed border-t border-gray-50">
          {answer}
        </div>
      </div>
    </div>
  );
};

export default function BestHospitalPage() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const faqs = [
    {
      q: "Why is Raj Nursing Home the best hospital and nursing home in Hapur?",
      a: "There are reasons behind becoming the best healthcare provider and a private hospital Hapur, such as: Experience advanced laparoscopic surgery, Emergency medical care, Outpatient services, High success rate, Positive responses from family, Affordable hospital expenses.",
    },
    {
      q: "Is Raj Nursing Home open 24/7?",
      a: "Yes, as a responsible health service provider, we offer 24/7 emergency services, supported by our staff, management, and all the other associates.",
    },
    {
      q: "Is Raj Nursing Home a trusted hospital Hapur?",
      a: "Of course, yes! At Raj Nursing Home, extensive care for every group of patients is always available. We do the treatment with compassion and focus to offer a swift recovery all the time.",
    },
    {
      q: "What's the review about the Raj Nursing Home?",
      a: "Being the best hospital and nursing home in Hapur, we receive positive responses from our previous patients all the time. Their love and support encourage us to keep going in the same direction.",
    },
    {
      q: "Can I book an appointment online?",
      a: "Yes, our officials have provided the number and all the details on the website to get an appointment online.",
    },
  ];

  return (
    <div className="pt-[110px] md:pt-[130px] min-h-screen bg-gray-50 font-sans selection:bg-[#9d174d] selection:text-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white pb-20 lg:pb-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(157,23,77,0.05),transparent_40%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(59,130,246,0.03),transparent_40%)]" />

        <div className="max-w-screen-2xl mx-auto px-6 pt-10 md:pt-20 relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 animate-in slide-in-from-left-5 duration-700 fade-in">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[11px] font-black uppercase tracking-widest bg-red-50 text-[#9d174d] border border-red-100 shadow-sm hover:shadow-md transition-shadow cursor-default">
                <span className="w-2 h-2 rounded-full bg-[#9d174d] animate-pulse"></span>
                Top Rated Facility
              </span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 tracking-tighter leading-[1.1] drop-shadow-sm">
                An Excellent & <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#9d174d] to-pink-600">Top-Rated</span> Nursing Home in Hapur
              </h1>
              <p className="text-xl text-gray-500 leading-relaxed max-w-xl font-medium">
                Healthcare is a fundamental requirement for all individuals living in modern society. Without proper medical facilities and advanced treatment, people may fail to save their relatives on time. That's why choosing a reliable and trusted hospital in Hapur is the right move.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <Link
                  href="/contact"
                  className="px-10 py-5 rounded-2xl bg-[#9d174d] text-white font-black text-sm uppercase tracking-widest shadow-xl shadow-red-500/25 hover:bg-[#831843] hover:-translate-y-1 hover:shadow-2xl hover:shadow-red-500/40 transition-all duration-300"
                >
                  Book Appointment
                </Link>
                <Link
                  href="/services"
                  className="px-10 py-5 rounded-2xl bg-white text-gray-900 border-2 border-gray-100 font-black text-sm uppercase tracking-widest hover:bg-gray-50 hover:border-gray-200 transition-all duration-300"
                >
                  Our Services
                </Link>
              </div>
            </div>
            <div className="relative animate-in slide-in-from-right-5 duration-1000 fade-in">
              <div className="relative aspect-[4/3] rounded-[2.5rem] overflow-hidden shadow-2xl shadow-gray-200/50 border-8 border-white group">
                <Image
                  src="/medical.jpg"
                  alt="Raj Nursing Home Building"
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-105"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-0 left-0 p-10 text-white w-full">
                  <div className="flex justify-between items-end">
                    <div>
                      <p className="text-sm font-bold uppercase tracking-widest opacity-80 mb-2">Since 1999</p>
                      <p className="text-3xl font-black tracking-tight">Trusted by Thousands</p>
                    </div>
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30">
                      <Star className="w-6 h-6 text-white fill-current" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-12 -left-12 w-56 h-56 rounded-[2rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.15)] border-8 border-white hidden md:block hover:scale-105 transition-transform duration-500">
                <Image
                  src="/indian-nurse-39.jpg"
                  alt="Nursing Care"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Intro Text */}
      <section className="py-20 md:py-28 bg-white relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-20 bg-gradient-to-b from-transparent to-gray-200" />
        <div className="max-w-5xl mx-auto px-6 text-center">
          <p className="text-2xl md:text-3xl font-medium text-gray-800 leading-relaxed font-serif italic">
            "In Uttar Pradesh, <span className="text-[#9d174d] font-bold not-italic font-sans bg-red-50 px-2 py-1 rounded-lg">Raj Nursing Home</span> has risen as one of the most popular options in terms of providing elegant and world-class medical treatment. It is a good option for people who seek these types of treatment right at their doorstep.
            <br /><br />
            The tag of becoming the <span className="text-[#9d174d] font-bold not-italic font-sans">“best hospital and nursing home in Hapur”</span> isn’t just a self-proclaimed slogan, but our mission in Hapur and its nearby locations.
            <br /><br />
            Let’s take a quick look at the Raj Nursing Home Hapur reviews that reveal why we care for people the most!"
          </p>
          <div className="mt-12 flex justify-center">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-[#9d174d] animate-bounce" style={{ animationDelay: '0s' }}></div>
              <div className="w-3 h-3 rounded-full bg-[#9d174d] animate-bounce" style={{ animationDelay: '0.1s' }}></div>
              <div className="w-3 h-3 rounded-full bg-[#9d174d] animate-bounce" style={{ animationDelay: '0.2s' }}></div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Section */}
      <section className="py-24 bg-gray-50 overflow-hidden relative">
        <div className="absolute -left-20 top-20 w-96 h-96 bg-red-200/30 rounded-full blur-[100px]" />
        <div className="max-w-screen-2xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="order-2 lg:order-1 relative group">
              <div className="absolute inset-0 bg-[#9d174d] rounded-[3rem] rotate-6 opacity-10 group-hover:rotate-3 transition-transform duration-500 scale-105" />
              <div className="relative aspect-square rounded-[2.5rem] overflow-hidden shadow-2xl shadow-red-900/10 rotate-3 group-hover:rotate-0 transition-transform duration-500 border-4 border-white">
                <Image
                  src="/raj/raj-nursing-home-icu.jpg"
                  alt="ICU Facility"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-[#9d174d]/10 mix-blend-overlay" />
              </div>
              <div className="absolute -bottom-10 -right-10 bg-white p-8 rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.1)] max-w-xs z-10 animate-bounce-slow">
                <div className="flex items-center gap-5">
                  <div className="w-14 h-14 bg-red-50 rounded-2xl flex items-center justify-center text-[#9d174d] shadow-inner">
                    <Phone className="w-7 h-7" />
                  </div>
                  <div>
                    <p className="text-xs font-black text-gray-400 uppercase tracking-widest">Emergency</p>
                    <p className="text-2xl font-black text-[#9d174d]">24 / 7 <span className="text-black">Active</span></p>
                  </div>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2 space-y-10">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-50 rounded-full text-[#9d174d] font-bold text-xs uppercase tracking-wider mb-4 border border-red-100">
                  Critical Care
                </div>
                <h2 className="text-3xl md:text-4xl font-black text-gray-900 tracking-tight leading-tight">
                  24/7 Emergency and Critical Care Response
                </h2>
              </div>
              <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                <p>
                  A hospital's responsibilities are not just like some mere office's working hours. As a respected private hospital in Hapur, we keep the 24/7 emergency service active all the time without any delay.
                </p>
                <p className="p-6 bg-white rounded-2xl border-l-4 border-[#9d174d] shadow-sm italic">
                  "Whether it's a cardiac arrest or any type of tragic road accident, our emergency team is always ready to handle life-threatening situations."
                </p>
                <p>
                  Also, we have the operations that we always keep active in the emergency ward to deliver smooth healthcare facilities without trouble, such as:
                </p>
                <ul className="grid gap-3">
                  {[
                    "Monitor patients requiring intensive support.",
                    "Use advanced ventilators in case of life-saving situations.",
                    "Have a centralized oxygen supply system to provide constant vigilance.",
                    "Ensure that financial or logistical issues won’t be a problem in life-saving care."
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="mt-1.5 w-5 h-5 rounded-full bg-red-100 flex items-center justify-center shrink-0 text-[#9d174d] text-xs font-bold">
                        <Check className="w-3 h-3" />
                      </div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="bg-[#9d174d] text-white p-6 rounded-2xl shadow-xl shadow-red-500/20 flex items-center justify-between gap-4 mt-6 transform hover:scale-[1.02] transition-transform cursor-pointer">
                  <div>
                    <p className="font-bold text-red-100 text-xs uppercase tracking-wider mb-1">Medical Emergency?</p>
                    <p className="font-black text-xl">Save our 24/7 Number</p>
                  </div>
                  <div className="bg-white text-[#9d174d] px-5 py-3 rounded-xl font-black shadow-lg">
                    +91 63979 70802
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Women's Health Section */}
      <section className="py-24 bg-white relative">
        <div className="max-w-screen-2xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-10">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-pink-50 rounded-full text-pink-600 font-bold text-xs uppercase tracking-wider mb-4 border border-pink-100">
                  Maternity & Gynecology
                </div>
                <h2 className="text-3xl md:text-4xl font-black text-gray-900 tracking-tight">
                  Holistic Women's Health and Maternity Excellence
                </h2>
              </div>
              <p className="text-2xl font-serif italic text-[#9d174d] leading-relaxed">
                "At Raj Nursing Home, we don't just deliver babies; we nurture families."
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                This is not just a claim as we carry the initiative "caring for Women" all the time with the assistance of our gynecologists and nurses. We are proud to be the top-rated nursing home in Hapur for safe, painless deliveries and neonatal support.
              </p>

              <div className="space-y-8 bg-pink-50/50 p-8 rounded-[2.5rem] border border-pink-100">
                <h3 className="text-xl font-black text-gray-900 flex items-center gap-3">
                  <span className="w-8 h-1 bg-[#9d174d] rounded-full"></span>
                  Why Choose Us?
                </h3>
                <ul className="space-y-6">
                  <li className="flex gap-4 group">
                    <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center text-pink-500 shadow-sm border border-pink-100 group-hover:scale-110 transition-transform">
                      <Activity className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="font-bold text-gray-900 block text-lg mb-2">Complex Gynecological Issues</span>
                      <div className="flex flex-wrap gap-2">
                        {["Uterine fibroids", "Infertility", "Menstrual disorders"].map((item, i) => (
                          <span key={i} className="px-3 py-1 bg-white text-gray-600 text-xs font-bold rounded-lg border border-pink-100 shadow-sm">
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  </li>
                  <li className="flex gap-4 group">
                    <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center text-pink-500 shadow-sm border border-pink-100 group-hover:scale-110 transition-transform">
                      <ShieldCheck className="w-6 h-6" />
                    </div>
                    <span className="text-gray-600 font-medium pt-2">Experts from our gynecology department are great at removing cysts and tumors with minimal recovery time.</span>
                  </li>
                  <li className="flex gap-4 group">
                    <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center text-pink-500 shadow-sm border border-pink-100 group-hover:scale-110 transition-transform">
                      <Baby className="w-6 h-6" />
                    </div>
                    <span className="text-gray-600 font-medium pt-2">Ensure both mother and baby transition smoothly into their new life together.</span>
                  </li>
                </ul>
                <div className="bg-white p-6 rounded-2xl border border-pink-100 text-[#9d174d] font-bold text-lg text-center shadow-lg shadow-pink-100">
                  "It’s time to give your newborn the best start in life with the expert maternity care at Raj Nursing Home. Schedule a prenatal visit today!"
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl shadow-pink-900/10 border-8 border-white group">
                <Image
                  src="/raj/dr-Srishti.jpg"
                  alt="Women's Health Specialist"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#9d174d]/90 via-transparent to-transparent opacity-90" />
                <div className="absolute bottom-0 left-0 w-full p-10 text-white">
                  <div className="w-16 h-1 bg-white/50 mb-6 rounded-full"></div>
                  <p className="font-black text-3xl mb-2">Dr. Srishti Bhardwaj</p>
                  <p className="text-lg opacity-90 font-medium tracking-wide">Obstetrician & Gynecologist</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section className="py-24 bg-[#0b1120] text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[#9d174d]/20 blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-1/3 h-full bg-blue-600/20 blur-[120px]" />

        <div className="max-w-screen-2xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center mb-20">
            <div>
              <h2 className="text-3xl md:text-4xl font-black mb-8 leading-tight">
                Patient-Centric Facilities and Ethical Transparency
              </h2>
              <div className="h-1 w-24 bg-gradient-to-r from-[#9d174d] to-transparent rounded-full mb-8"></div>
            </div>
            <div className="text-gray-400 text-lg space-y-6 leading-relaxed">
              <p>
                The modern healthcare system is now giving people the best experience at hospitals. In Hapur, Raj Nursing Home has provided the best range of treatment and delivered its loyalty towards every patient.
              </p>
              <p>
                We always ensure that every interaction is marked by respect and kindness. When you pick the best hospital and nursing home in Hapur, it’s none other than Raj Nursing Home.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Premium Facilities",
                desc: "We need to complete all the requirements on time with premium healthcare facilities, from wards to ICUs.",
                icon: <Building2 className="w-8 h-8" />
              },
              {
                title: "Transparent System",
                desc: "We are thankful to our management for building a transparent system that helps doctors and assists patients and families.",
                icon: <FileText className="w-8 h-8" />
              },
              {
                title: "Respect & Kindness",
                desc: "We always ensure that every interaction is marked by respect and kindness. We prioritize your comfort and budget.",
                icon: <HeartHandshake className="w-8 h-8" />
              }
            ].map((feature, i) => (
              <div key={i} className="bg-white/5 backdrop-blur-md border border-white/10 p-10 rounded-[2.5rem] hover:-translate-y-2 hover:bg-white/10 transition-all duration-300 group">
                <div className="w-16 h-16 bg-gradient-to-br from-[#9d174d] to-pink-600 rounded-2xl flex items-center justify-center mb-8 text-white shadow-lg shadow-red-900/30 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-xl md:text-2xl font-black mb-4 group-hover:text-red-300 transition-colors">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed group-hover:text-gray-200 transition-colors">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Conclusion / CTA */}
      <section className="py-24 bg-white relative">
        <div className="max-w-screen-2xl mx-auto px-6">
          <div className="bg-gradient-to-br from-[#9d174d] to-[#be185d] rounded-[3rem] p-8 md:p-20 text-center text-white relative overflow-hidden shadow-2xl shadow-red-900/30 group">
            <div className="absolute top-0 left-0 w-full h-full bg-[url('/file.svg')] opacity-10 bg-repeat bg-center mix-blend-overlay transition-opacity duration-500 group-hover:opacity-20" />
            <div className="absolute -top-40 -right-40 w-96 h-96 bg-white/10 rounded-full blur-[80px]" />
            <div className="absolute bottom-40 -left-40 w-96 h-96 bg-black/10 rounded-full blur-[80px]" />

            <div className="relative z-10 space-y-10">
              <div>
                <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-sm font-bold uppercase tracking-widest mb-6 backdrop-blur-sm">
                  Our Promise
                </span>
                <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-6 leading-tight">
                  Conclusion
                </h2>
              </div>
              <div className="space-y-8 text-lg md:text-2xl text-red-50 max-w-4xl mx-auto leading-relaxed font-light">
                <p>
                  At last, Raj Nursing Home is not just a mere medical facility; it is a center of healing where patients get extensive care from experienced doctors and nurses by using advanced equipment and medicine for smooth and budget-friendly healing.
                </p>
                <p>
                  In case you are seeking a trusted hospital Hapur for a complex surgery or any medical emergency, join the best hospital and nursing home in Hapur without hesitation.
                </p>
                <p className="font-bold text-white text-3xl pt-4 drop-shadow-md">
                  Discover healthcare that prioritizes your comfort and budget. Explore our specialized health packages today!
                </p>
              </div>
              <div className="flex flex-col sm:flex-row justify-center gap-6 pt-10">
                <Link
                  href="/contact"
                  className="px-12 py-5 bg-white text-[#9d174d] rounded-2xl font-black text-lg uppercase tracking-widest shadow-xl hover:bg-gray-50 hover:scale-105 transition-all duration-300"
                >
                  Contact Us Now
                </Link>
                <Link
                  href="/health-checkup-plans"
                  className="px-12 py-5 bg-[#9d174d] border-2 border-white/30 text-white rounded-2xl font-black text-lg uppercase tracking-widest hover:bg-[#831843] hover:border-white/50 hover:scale-105 transition-all duration-300"
                >
                  Health Packages
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[#9d174d] font-black tracking-[0.2em] uppercase text-sm bg-red-50 px-4 py-2 rounded-full border border-red-100">Common Questions</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mt-6 tracking-tight">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.q}
                answer={faq.a}
                isOpen={openFAQ === index}
                toggle={() => toggleFAQ(index)}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
