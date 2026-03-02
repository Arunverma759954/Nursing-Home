"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useLanguage } from "@/app/context/LanguageContext";
const ArrowRightIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>;

export default function AboutClientPage() {
  const { t } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [activeServiceTab, setActiveServiceTab] = useState(0);
  return (
    <div className="min-h-screen bg-white text-gray-900 pt-[100px] sm:pt-[110px] md:pt-[130px] overflow-x-hidden">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/medical.jpg"
            alt="About Banner"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#5b0f2d]/90 via-[#6f1436]/80 to-[#6f1436]/40" />
        </div>
        <div className="max-w-[1420px] mx-auto px-4 sm:px-8 md:px-10 lg:px-12 pt-8 sm:pt-12 pb-8 sm:pb-12 relative flex items-center justify-between">
          <div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white tracking-tight mb-2">
              {t("about.title")}
            </h1>
            <div className="flex items-center gap-2 text-[10px] md:text-xs font-bold text-white/80">
              <Link href="/" className="hover:text-white transition-colors">
                {t("about.breadcrumbHome")}
              </Link>
              <span>/</span>
              <span className="text-white">{t("about.breadcrumbAbout")}</span>
            </div>
          </div>
          <div className="hidden md:block relative h-40 w-40 overflow-hidden rounded-full border-4 border-white/20">
            <Image
              src="/indian-nurse-39.jpg"
              alt="Nurse"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* <section className="py-12 sm:py-20 md:py-24">
        <div className="max-w-[1420px] mx-auto px-4 sm:px-8 md:px-10 lg:px-12 grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-start">
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 leading-tight mb-5">
                {t("about.storyTitle")} <span className="text-[#9d174d]">{t("about.storyHighlight")}</span>
              </h2>
              <p className="text-gray-600 leading-relaxed text-base md:text-lg">
                {t("about.storyPara")}
              </p>
            </div>

            <div>
              <h3 className="text-xl md:text-2xl font-black text-[#9d174d] mb-5">{t("about.whyChoose")}</h3>
              <div className="space-y-5">
                <div className="flex gap-4">
                  <div className="shrink-0 w-7 h-7 mt-1 text-[#9d174d] text-xl">🩺</div>
                  <div>
                    <h4 className="text-base md:text-lg font-black text-gray-900">{t("about.doctorLed")}</h4>
                    <p className="text-sm md:text-base text-gray-600">{t("about.doctorLedDesc")}</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="shrink-0 w-7 h-7 mt-1 text-[#9d174d] text-xl">💡</div>
                  <div>
                    <h4 className="text-base md:text-lg font-black text-gray-900">{t("about.techCompassion")}</h4>
                    <p className="text-sm md:text-base text-gray-600">{t("about.techCompassionDesc")}</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="shrink-0 w-7 h-7 mt-1 text-[#9d174d] text-xl">🌱</div>
                  <div>
                    <h4 className="text-base md:text-lg font-black text-gray-900">{t("about.communityImpact")}</h4>
                    <p className="text-sm md:text-base text-gray-600">{t("about.communityImpactDesc")}</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl md:text-2xl font-black text-[#9d174d] mb-5">{t("about.milestones")}</h3>
              <ul className="space-y-3 list-disc list-inside text-base md:text-lg text-gray-700 font-medium">
                <li>{t("about.milestone1")}</li>
                <li>{t("about.milestone2")}</li>
              </ul>
            </div>
          </div>

          <div className="relative h-[400px] md:h-[600px] rounded-[2rem] overflow-hidden shadow-2xl border-8 border-white">
            <Image
              src="/raj/cabin3.jpg"
              alt="Hospital Interior"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-[1420px] mx-auto px-6 sm:px-8 md:px-10 lg:px-12 grid md:grid-cols-2 gap-12 items-center">
          <div className="relative h-[400px] rounded-[2rem] overflow-hidden shadow-2xl">
            <Image
              src="/medic-563423_1280.jpg"
              alt="Doctor with Child"
              fill
              className="object-cover"
            />
          </div>
          <div className="space-y-10">
            <div>
              <h3 className="text-xl md:text-2xl lg:text-3xl font-black text-gray-900 mb-5">{t("about.visionTitle")}</h3>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed whitespace-pre-line">
                {t("about.visionText")}
              </p>
            </div>
            <div>
              <h3 className="text-xl md:text-2xl lg:text-3xl font-black text-gray-900 mb-5">{t("about.missionTitle")}</h3>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed whitespace-pre-line">
                {t("about.missionText")}
              </p>
            </div>
          </div>
        </div>
      </section> */}
      {/* SERVICES TABS SECTION */}
<section id="services-tabs" className="py-10 sm:py-14 md:py-16 bg-gray-50">
  <div className="max-w-[1420px] mx-auto px-4 sm:px-8 md:px-10 lg:px-12">
    <div className="text-center mb-8 sm:mb-12">
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 leading-tight mb-3">Services</h2>
      <div className="h-1 w-16 bg-[#9d174d] mx-auto rounded-full"></div>
    </div>

    <div className="flex flex-col md:flex-row gap-6 md:gap-8">
      {/* Left Sidebar Navigation */}
      <div className="w-full md:w-1/4 flex flex-row md:flex-col gap-2 overflow-x-auto md:overflow-x-visible pb-2 md:pb-0">
        {[
          { id: "emergency", label: "Emergency Care" },
          { id: "womens", label: "Women's Health" },
          { id: "surgery", label: "Advanced Surgery" },
          { id: "internal", label: "Internal Medicine" },
          { id: "diagnostic", label: "Diagnostic Center" },
        ].map((tab, idx) => (
          <button
            key={tab.id}
            onClick={() => setActiveServiceTab(idx)}
            className={`flex-shrink-0 px-6 py-3 text-left font-bold text-sm rounded-xl transition-all duration-300 whitespace-nowrap md:whitespace-normal ${
              activeServiceTab === idx
                ? "bg-[#9d174d] text-white shadow-lg shadow-red-500/30"
                : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Right Content Area */}
      <div className="w-full md:w-3/4 bg-white rounded-2xl md:rounded-3xl p-6 md:p-10 shadow-xl border border-gray-100">
        {/* Emergency Care */}
        {activeServiceTab === 0 && (
          <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-500">
            <h3 className="text-xl md:text-2xl font-black text-gray-900 mb-4">Emergency Care</h3>
            
            <div>
              <ul className="space-y-3 mb-6">
                {[
                  "24/7 Emergency Response Protocol",
                  "ICU & Critical Care Facilities",
                  "Free Ambulance Service Map (Hapur coverage)",
                  "Common Emergencies Handled (heart attacks, accidents, etc.)",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#9d174d] mt-2 shrink-0" />
                    <span className="text-sm md:text-base">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-red-50 p-6 rounded-xl border border-red-100">
              <h4 className="font-black text-gray-900 mb-3">Led by Dr. Vipin Sharma (MD Medicine), our emergency team provides</h4>
              <ul className="space-y-2">
                {[
                  "Cardiac crisis management",
                  "Sepsis & trauma protocols",
                  "Direct admission system",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#9d174d] mt-2 shrink-0" />
                    <span className="text-sm md:text-base">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {/* Women's Health */}
        {activeServiceTab === 1 && (
          <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-500">
            <h3 className="text-xl md:text-2xl font-black text-gray-900 mb-4">Women's Health</h3>
            
            <ul className="space-y-3 mb-6">
              {[
                "Pregnancy Care Timeline (trimester-wise)",
                "PCOS Management Program",
                "Menstrual Disorder Treatments",
                "Minimally Invasive Gynecology Surgeries",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-700">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#9d174d] mt-2 shrink-0" />
                  <span className="text-sm md:text-base">{item}</span>
                </li>
              ))}
            </ul>

            <div className="bg-rose-50 p-6 rounded-xl border border-rose-100">
              <h4 className="font-black text-gray-900 mb-2">Dr. Srishti Bhardwaj's Specialized Approach</h4>
              <p className="text-sm md:text-base text-gray-600 mb-3">
                With 10+ years focusing on Hapur women's unique health challenges, Dr. Srishti offers:
              </p>
              <ul className="space-y-2">
                {[
                  "Local-dialect counseling",
                  "Customized Ayurvedic-nutrition plans",
                  "24/7 delivery suites with fetal monitoring",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#9d174d] mt-2 shrink-0" />
                    <span className="text-sm md:text-base">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {/* Advanced Surgery */}
        {activeServiceTab === 2 && (
          <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-500">
            <h3 className="text-xl md:text-2xl font-black text-gray-900 mb-4">Advanced Surgery</h3>
            
            <ul className="space-y-3 mb-6">
              {[
                "Laparoscopic vs Open Surgery Comparison",
                "Conditions Treated (gallstones, appendicitis, hernia)",
                "Day-Care Surgery Process",
                "Pre/Post-Op Guidelines",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-700">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#9d174d] mt-2 shrink-0" />
                  <span className="text-sm md:text-base">{item}</span>
                </li>
              ))}
            </ul>

            <div className="bg-violet-50 p-6 rounded-xl border border-violet-100">
              <h4 className="font-black text-gray-900 mb-2">Pioneered by Dr. M.C. Sharma</h4>
              <p className="text-sm md:text-base text-gray-600 mb-3">
                Our MS Surgery specialist has performed 1,500+ procedures with:
              </p>
              <ul className="space-y-2">
                {[
                  "95% same-day discharge rate",
                  "Scarless technique (<1cm incisions)",
                  "Free follow-up for Hapur residents",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#9d174d] mt-2 shrink-0" />
                    <span className="text-sm md:text-base">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {/* Internal Medicine */}
        {activeServiceTab === 3 && (
          <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-500">
            <h3 className="text-xl md:text-2xl font-black text-gray-900 mb-4">Internal Medicine</h3>
            
            <ul className="space-y-3 mb-6">
              {[
                "Cardiac & Pulmonary Care",
                "Diabetes & Thyroid Management",
                "Renal & Gastrointestinal Health",
                "Neurological Disorders",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-700">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#9d174d] mt-2 shrink-0" />
                  <span className="text-sm md:text-base">{item}</span>
                </li>
              ))}
            </ul>

            <div className="bg-sky-50 p-6 rounded-xl border border-sky-100">
              <h4 className="font-black text-gray-900 mb-2">Dr. Vipin Sharma's Holistic Framework</h4>
              <p className="text-sm md:text-base text-gray-600 mb-3">
                Ex-Safdarjung Hospital physician providing:
              </p>
              <ul className="space-y-2">
                {[
                  "Systemic health mapping",
                  "Pollution-impact mitigation strategies",
                  "Preventive health packages",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#9d174d] mt-2 shrink-0" />
                    <span className="text-sm md:text-base">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {/* Diagnostic Center */}
        {activeServiceTab === 4 && (
          <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-500">
            <h3 className="text-xl md:text-2xl font-black text-gray-900 mb-4">Diagnostic Center</h3>
            
            <ul className="space-y-3 mb-6">
              {[
                "ECG/2D Echo/PFT Testing",
                "Ultrasound & X-Ray Imaging",
                "Lab Test Menu & Pricing",
                "Report Interpretation Process",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-700">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#9d174d] mt-2 shrink-0" />
                  <span className="text-sm md:text-base">{item}</span>
                </li>
              ))}
            </ul>

            <div className="bg-emerald-50 p-6 rounded-xl border border-emerald-100">
              <h4 className="font-black text-gray-900 mb-2">Expert-Guided Diagnostics</h4>
              <p className="text-sm md:text-base text-gray-600 mb-3">
                All tests supervised by:
              </p>
              <ul className="space-y-2 mb-6">
                {[
                  "Dr. Vipin Sharma (cardiac reports)",
                  "Dr. Srishti Bhardwaj (obstetric ultrasounds)",
                  "Dr. M.C. Sharma (pre-op screenings)",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#9d174d] mt-2 shrink-0" />
                    <span className="text-sm md:text-base">{item}</span>
                  </li>
                ))}
              </ul>
              
              <Link href="/contact" className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#9d174d] text-white font-semibold rounded-lg hover:bg-[#831843] transition-colors text-sm">
                Get Appointment <ArrowRightIcon />
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  </div>
</section>
    </div>
  );
}
