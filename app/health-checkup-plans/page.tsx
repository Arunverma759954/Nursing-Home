"use client";

import Image from "next/image";
import Link from "next/link";

const plans = [
  {
    title: "Basic Health Check-Up",
    description: "Ideal for young adults and working professionals, this package provides a snapshot of your core health parameters.",
    includes: "Complete Blood Count (CBC) , Blood Sugar (Fasting), Blood Pressure Check, Urine Routine Test, ECG, Physician Consultation",
    recommended: "20–40 years age group",
    frequency: "Once a year",
    icon: "🧘‍♂️"
  },
  {
    title: "Executive Health Check-Up",
    description: "Tailored for busy individuals who want to stay ahead of health issues with a more detailed analysis.",
    includes: "All tests in Basic Package; Liver Function Test (LFT), Kidney Function Test (KFT), Lipid Profile (Cholesterol), Thyroid Profile (TSH, T3, T4), Chest X-Ray, Abdominal Ultrasound",
    recommended: "30–50 years age group",
    frequency: "Every 6–12 months",
    icon: "👔"
  },
  {
    title: "Senior Citizen Health Check-Up",
    description: "As we age, our body needs more attention. This package is specially designed for seniors.",
    includes: "All tests in Executive Package; Vitamin D & B12 Levels, Calcium & Uric Acid Test, Bone Density Test, Eye Check-Up, Cardiologist Consultation (if required)",
    recommended: "50+ years age group",
    frequency: "Twice a year",
    icon: "👴"
  },
  {
    title: "Diabetes Screening Package",
    description: "Focused on early detection, control, and monitoring of diabetes.",
    includes: "Fasting & Post-Prandial Blood Sugar, HbA1c (3-month average sugar), Urine Microalbumin, KFT, Eye Screening (Diabetic Retinopathy)",
    recommended: "Diabetic patients or family history of diabetes",
    frequency: "Quarterly or as advised",
    icon: "🩸"
  },
  {
    title: "Heart Health Check-Up",
    description: "Early signs of cardiac stress can save lives. This package is perfect for individuals with sedentary lifestyles or a family history of heart disease.",
    includes: "ECG, 2D Echo / TMT (as advised), Lipid Profile, Blood Sugar, Blood Pressure Monitoring, Cardiologist Consultation",
    recommended: "30+ with heart risk factors",
    frequency: "As advised",
    icon: "❤️"
  },
  {
    title: "Add-On Diagnostic Services",
    description: "We also provide individual diagnostic services as per the doctor's advice or specific requirements.",
    includes: "Blood Tests, Urine & Stool Analysis, X-Rays & Sonography, Pap Smear & Mammography, Ultrasound Scans, CT Scan (in partnership with our imaging partner labs), COVID-19 RT-PCR & Antigen Testing",
    recommended: "As prescribed",
    frequency: "As needed",
    icon: "🔬"
  }
];

export default function HealthCheckupPlans() {
  return (
    <div className="min-h-screen bg-white text-gray-900 pt-[110px] md:pt-[130px]">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/medical.jpg"
            alt="Health Checkup Banner"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#5b0f2d]/90 via-[#6f1436]/80 to-[#6f1436]/40" />
        </div>
        <div className="max-w-screen-2xl mx-auto px-6 pt-12 pb-12 relative">
          <span className="inline-flex w-fit items-center gap-2 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest bg-white/15 text-white border border-white/20">
            Preventive Care
          </span>
          <div className="mt-4">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-white tracking-tight mb-2">
              Health Checkup Plans
            </h1>
            <div className="flex items-center gap-2 text-xs font-bold text-white/80">
              <Link href="/" className="hover:text-white transition-colors">
                Home
              </Link>
              <span>/</span>
              <span className="text-white">Health Checkup Plans</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-screen-2xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 leading-tight mb-4">
              Comprehensive Health Check-Up Plans at <span className="text-[#9d174d]">Raj Nursing Home</span>
            </h2>
            <p className="text-gray-600 leading-relaxed text-lg">
              Early detection is the key to better prevention. Our advanced diagnostic services and thoughtfully curated health check-up packages are designed to monitor, assess, and safeguard your well-being — all under one roof.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div key={index} className="bg-white rounded-[2rem] p-8 border border-gray-100 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1 flex flex-col h-full">
                <div className="w-14 h-14 bg-red-50 rounded-2xl flex items-center justify-center text-3xl mb-6 text-[#9d174d]">
                  {plan.icon}
                </div>
                <h3 className="text-lg md:text-xl font-black text-gray-900 mb-3">{plan.title}</h3>
                <p className="text-sm text-gray-500 mb-6 leading-relaxed font-medium">
                  {plan.description}
                </p>

                <div className="mt-auto space-y-4 pt-6 border-t border-gray-100">
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-[#9d174d] block mb-1">Includes</span>
                    <p className="text-xs font-bold text-gray-700 leading-relaxed">{plan.includes}</p>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <span className="text-[10px] font-black uppercase tracking-widest text-[#9d174d] block mb-1">Recommended</span>
                      <p className="text-xs font-bold text-gray-700">{plan.recommended}</p>
                    </div>
                    <div>
                      <span className="text-[10px] font-black uppercase tracking-widest text-[#9d174d] block mb-1">Frequency</span>
                      <p className="text-xs font-bold text-gray-700">{plan.frequency}</p>
                    </div>
                  </div>
                </div>

                <Link
                  href="/contact"
                  className="mt-8 w-full py-3 bg-gray-900 text-white text-xs font-black uppercase tracking-widest rounded-xl flex items-center justify-center hover:bg-[#9d174d] transition-colors"
                >
                  Book Now
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

