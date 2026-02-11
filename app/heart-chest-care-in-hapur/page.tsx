"use client";

import Image from "next/image";
import Link from "next/link";
import { Activity, Heart, ShieldCheck, Phone, Clock, ArrowRight, UserCheck, Stethoscope } from "lucide-react";

export default function HeartChestCareHapur() {
  return (
    <div className="min-h-screen bg-white text-gray-900 pt-[110px] md:pt-[130px]">

      {/* Header / Breadcrumb Area */}
      <div className="bg-[#800020] text-white py-12 px-6">
        <div className="max-w-screen-2xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Heart & Chest Care in Hapur</h1>
          <nav className="flex items-center gap-2 text-white/90 text-sm font-medium">
            <Link href="/" className="hover:underline">Home</Link>
            <span>/</span>
            <span className="opacity-75">Heart & Chest Care</span>
          </nav>
        </div>
      </div>

      <div className="max-w-screen-2xl mx-auto px-6 py-12 md:py-20 space-y-20">

        {/* Intro Section */}
        <section className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
            Comprehensive Heart & Chest Care Services in Hapur
          </h2>
          <p className="text-gray-700 leading-relaxed text-lg">
            Heart health is one of the most critical aspects of overall well-being. Timely diagnosis and treatment of cardiac and chest-related conditions make a significant difference in leading a healthy and active life. Our Heart & Chest Care in Hapur offers specialized medical care provided by experienced physicians and respiratory experts. Whether you require heart checkups, managing blood pressure, or advanced chest pain treatment, our team provides expert care with modern diagnostic tools and personalized treatment plans.
          </p>
        </section>

        {/* Section 1: Image Left + Content Right */}
        <section className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="relative h-[450px] lg:h-[550px] rounded-2xl overflow-hidden shadow-2xl border-2 border-gray-100">
            <Image
              src="/heart-chest.jpg"
              alt="Heart Surgery Team"
              fill
              className="object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>
          <div className="space-y-10">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-[#800020]">Expert Heart Specialist in Hapur</h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                Our clinic is led by an experienced heart specialist in Hapur who is dedicated to delivering accurate diagnosis and effective treatments. From general cardiology to advanced interventions, we provide comprehensive heart and chest care tailored to each patient's needs.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-[#800020]">Chest Pain Treatment in Hapur</h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                Chest pain is a serious health concern, ranging from heart issues to respiratory and other emergencies. Our facility offers quick chest pain assessment in Hapur, ensuring immediate evaluation with advanced diagnostic equipment. We focus on identifying the root cause quickly and delivering the right medical care to prevent complications.
              </p>
            </div>

            <div className="space-y-5">
              <h3 className="text-2xl font-bold text-[#800020]">Cardiologist Consultation and Care</h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                Get expert advice from a cardiologist in Hapur for your routine heart check-ups, ECG, echocardiography, and other essential services. We prioritize your heart health with specialized care:
              </p>
              <ul className="grid gap-3 pl-2 text-gray-700 text-lg">
                {[
                  "Blood pressure management",
                  "Heart rhythm analysis",
                  "Cholesterol and heart risk evaluation",
                  "Preventive cardiology programs"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-[#800020] rounded-full shrink-0"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Section 2: Full Width Text */}
        <section className="space-y-12">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-[#800020]">Complete Heart Care Clinic in Hapur</h3>
            <p className="text-gray-700 leading-relaxed text-lg">
              As a dedicated heart clinic in Hapur, we focus on early detection and lifestyle management for heart disease. Our specialist takes the time to understand your heart health concerns, lifestyle, and medical history to prescribe a personalized care plan for a healthier heart.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-[#800020]">Blood Pressure & Hypertension Management</h3>
            <p className="text-gray-700 leading-relaxed text-lg">
              High blood pressure is a leading cause of cardiovascular problems. Our specialist for blood pressure management in Hapur helps patients control hypertension through regular monitoring, medication, and counseling on lifestyle management techniques.
            </p>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-[#800020]">Why Choose Us for Heart & Chest Care?</h3>
            <ul className="grid sm:grid-cols-1 gap-4">
              {[
                "Qualified Cardiologists with years of experience in heart and chest diseases.",
                "Advanced Diagnostic Facilities, including ECG, X-Ray, and specialized tests.",
                "Patient-Centric Care with personalized treatment plans.",
                "24/7 Emergency Support for cardiac and chest-related emergencies."
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4 text-gray-700 text-lg">
                  <div className="mt-1.5 min-w-[1.5rem] w-6 h-6 bg-red-50 text-[#800020] rounded-full flex items-center justify-center text-sm font-bold shadow-sm">✓</div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Section 3: Content Left + Image Right */}
        <section className="grid lg:grid-cols-2 gap-16 items-center bg-gray-50/50 rounded-3xl p-8 md:p-12">
          <div className="space-y-10 order-2 lg:order-1">
            <div className="space-y-5">
              <h3 className="text-2xl font-bold text-[#800020]">Conditions We Treat</h3>
              <ul className="grid gap-3 text-gray-700 text-lg">
                {[
                  "Hypertension & high cholesterol",
                  "Chest pain & breathing difficulty",
                  "Heart rhythm disorders",
                  "Asthma, COPD & lung-related complications",
                  "Preventive heart checkups for high-risk patients"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-[#800020] rounded-full shrink-0"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-5">
              <h3 className="text-2xl font-bold text-[#800020]">Book Your Appointment Today</h3>
              <p className="text-gray-700 leading-relaxed text-lg font-medium">
                If you are experiencing chest pain, irregular heartbeat, or want to monitor your heart health, don't delay. Leading heart care for heart and chest diseases in Hapur starts here. Let us help you achieve comprehensive heart care supported by modern medical advancements.
              </p>
              <div className="pt-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-[#800020] text-white px-8 py-4 rounded-full font-bold hover:bg-[#a01a3a] transition-all transform hover:-translate-y-1 shadow-lg"
                >
                  <Phone className="w-5 h-5" />
                  Book Appointment Now
                </Link>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl bg-white p-4">
            <Image
              src="/heart-chest2.jpg"
              alt="Advanced Heart Care Diagnosis"
              fill
              className="object-contain p-6 hover:scale-105 transition-transform duration-700"
            />
          </div>
        </section>

        {/* Bottom Box */}
        <section className="bg-[#800020] text-white rounded-2xl p-10 md:p-14 shadow-xl -mx-4 md:mx-0">
          <h3 className="text-3xl font-bold mb-6">Your Trusted Partner for Heart & Chest Care in Hapur</h3>
          <p className="text-white/90 leading-relaxed text-xl">
            For advanced heart and chest care in Hapur, trust our expert medical team to help you lead a healthy life. If you need a cardiologist in Hapur, or help with chest pain or hypertension management, we provide reliable, safe, and personalized care to help you lead a healthy life.
          </p>
        </section>

      </div>
    </div>
  );
}
