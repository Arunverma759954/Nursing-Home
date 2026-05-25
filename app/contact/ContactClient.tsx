"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useLanguage } from "@/app/context/LanguageContext";

export default function ContactPage() {
  const { t } = useLanguage();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ type: 'success' | 'error', message: string } | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "contact",
          name,
          email,
          phone,
          subject,
          message,
        }),
      });

      if (response.ok) {
        setSubmitStatus({ type: 'success', message: 'Message sent successfully!' });
        setName("");
        setEmail("");
        setPhone("");
        setSubject("");
        setMessage("");
      } else {
        setSubmitStatus({ type: 'error', message: 'Failed to send message. Please try again.' });
      }
    } catch (error) {
      setSubmitStatus({ type: 'error', message: 'An error occurred. Please try again later.' });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="min-h-screen bg-white text-gray-900 pt-[100px] sm:pt-[110px] md:pt-[130px] overflow-x-hidden">
      <section className="relative overflow-hidden min-h-[280px] sm:min-h-[320px] md:min-h-[400px] flex items-center">
        <div className="absolute inset-0">
          <Image
            src="/medical.jpg"
            alt="Contact Banner"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#5b0f2d]/90 via-[#6f1436]/80 to-[#6f1436]/40" />
        </div>
        <div className="max-w-[1420px] mx-auto px-4 sm:px-8 md:px-10 lg:px-12 py-8 sm:py-12 relative z-10 w-full">
          <span className="inline-flex w-fit items-center gap-2 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest bg-white/15 text-white border border-white/20">
            {t("contact.title")}
          </span>
          <div className="mt-4 flex items-center gap-2 text-xs font-bold text-white/80">
            <Link href="/" className="hover:text-white transition-colors">
              {t("nav.home")}
            </Link>
            <span>/</span>
            <span className="text-white">{t("contact.breadcrumbContact")}</span>
          </div>
        </div>
      </section>

      <section className="pb-16 sm:pb-24 bg-gradient-to-b from-white via-white to-gray-50/40">
        <div className="max-w-[1420px] mx-auto px-4 sm:px-8 md:px-10 lg:px-12 grid lg:grid-cols-[1.15fr,0.85fr] gap-6 sm:gap-10">
          <div className="bg-white border border-gray-100 rounded-2xl sm:rounded-[2.75rem] shadow-[0_30px_80px_rgba(17,24,39,0.08)] p-4 sm:p-6 md:p-12">
            <div className="flex items-center gap-3 mb-6">
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-2xl bg-red-50 text-[#9d174d] text-lg">
                ✉️
              </span>
              <div>
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-gray-900">
                  {t("contact.hereForYou")}
                </h1>
                <p className="text-sm text-gray-500 mt-1">
                  {t("contact.hereDesc")}
                </p>
              </div>
            </div>
            <form onSubmit={handleSubmit} className="grid gap-5 md:grid-cols-2">
              <div>
                <label className="text-xs font-bold uppercase tracking-widest text-gray-500">
                  {t("contact.name")}
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder={t("contact.namePlaceholder")}
                  className="mt-2 w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm font-medium text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#9d174d]/30"
                  required
                />
              </div>
              <div>
                <label className="text-xs font-bold uppercase tracking-widest text-gray-500">
                  {t("contact.email")}
                </label>
                <p className="text-[10px] text-gray-400 mt-1">
                  {t("contact.emailNote")}
                </p>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={t("contact.emailPlaceholder")}
                  className="mt-2 w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm font-medium text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#9d174d]/30"
                  required
                />
              </div>
              <div>
                <label className="text-xs font-bold uppercase tracking-widest text-gray-500">
                  {t("contact.phone")}
                </label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder={t("contact.phonePlaceholder")}
                  className="mt-2 w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm font-medium text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#9d174d]/30"
                  required
                />
              </div>
              <div>
                <label className="text-xs font-bold uppercase tracking-widest text-gray-500">
                  {t("contact.subject")}
                </label>
                <input
                  type="text"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  placeholder={t("contact.subjectPlaceholder")}
                  className="mt-2 w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm font-medium text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#9d174d]/30"
                />
              </div>
              <div className="md:col-span-2">
                <label className="text-xs font-bold uppercase tracking-widest text-gray-500">
                  {t("contact.message")}
                </label>
                <textarea
                  rows={5}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder={t("contact.messagePlaceholder")}
                  className="mt-2 w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm font-medium text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#9d174d]/30"
                />
              </div>
              <div className="md:col-span-2 flex flex-col gap-5 pt-2">
                {submitStatus && (
                  <div 
                    className={`flex flex-col gap-4 p-6 rounded-2xl animate-in fade-in zoom-in-95 duration-500 ${
                      submitStatus.type === 'success' 
                      ? 'bg-emerald-50/50 border border-emerald-100 ring-1 ring-emerald-500/20 shadow-sm' 
                      : 'bg-rose-50/50 border border-rose-100 ring-1 ring-rose-500/20 shadow-sm'
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center shrink-0 shadow-sm ${
                        submitStatus.type === 'success' ? 'bg-emerald-500 text-white' : 'bg-rose-500 text-white'
                      }`}>
                        {submitStatus.type === 'success' ? (
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                          </svg>
                        ) : (
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        )}
                      </div>
                      <div>
                        <h4 className={`text-base font-black ${submitStatus.type === 'success' ? 'text-emerald-800' : 'text-rose-800'}`}>
                          {submitStatus.type === 'success' ? 'Message Received' : 'Transmission Fault'}
                        </h4>
                        <p className={`text-sm font-medium ${submitStatus.type === 'success' ? 'text-emerald-600/90' : 'text-rose-600/90'}`}>
                          {submitStatus.message}
                        </p>
                      </div>
                    </div>
                  </div>
                )}
                <div className="flex flex-col sm:flex-row items-center gap-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`relative group overflow-hidden px-10 py-4 rounded-2xl text-white text-[11px] font-black uppercase tracking-[0.2em] transition-all duration-300 min-w-[200px] flex items-center justify-center gap-3 ${
                      isSubmitting 
                      ? 'bg-gray-400 cursor-not-allowed' 
                      : 'bg-gradient-to-r from-[#9d174d] to-[#be185d] hover:shadow-[0_10px_25px_-5px_rgba(157,23,77,0.4)] hover:-translate-y-0.5 active:translate-y-0'
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        <span>{t("nav.sending") || "Sending..."}</span>
                      </>
                    ) : (
                      <>
                        <span>{t("contact.sendMessage")}</span>
                        <svg 
                          xmlns="http://www.w3.org/2000/svg" 
                          width="16" 
                          height="16" 
                          viewBox="0 0 24 24" 
                          fill="none" 
                          stroke="currentColor" 
                          strokeWidth="3" 
                          strokeLinecap="round" 
                          strokeLinejoin="round"
                          className="group-hover:translate-x-1 transition-transform"
                        >
                          <path d="m12 5 7 7-7 7"/><path d="M5 12h14"/>
                        </svg>
                      </>
                    )}
                  </button>
                  <div className="flex flex-col">
                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">
                      {t("contact.submitNote")}
                    </span>
                    <span className="text-[9px] text-gray-300 font-medium">
                      Average response time: &lt; 2 hours
                    </span>
                  </div>
                </div>
              </div>
            </form>
          </div>

          <div className="space-y-6">
            <div className="bg-white border border-gray-100 rounded-3xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-red-50 text-[#9d174d] flex items-center justify-center text-xl">
                  🚑
                </div>
                <div>
                  <h3 className="text-lg font-black text-gray-900">
                    {t("contact.emergencyService")}
                  </h3>
                  <p className="text-sm text-gray-600 mt-2">
                    🚨 {t("contact.emergencyCallNum")}
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-100 rounded-3xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-red-50 text-[#9d174d] flex items-center justify-center text-xl">
                  ⏰
                </div>
                <div>
                  <h3 className="text-lg font-black text-gray-900">
                    {t("contact.opdHours")}
                  </h3>
                  <p className="text-sm text-gray-600 mt-2">
                    {t("contact.opdHoursDetail")}
                  </p>
                  <p className="text-sm text-gray-600 mt-1">
                    {t("contact.opdHoursSun")}
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-100 rounded-3xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-red-50 text-[#9d174d] flex items-center justify-center text-xl">
                  🏥
                </div>
                <div>
                  <h3 className="text-lg font-black text-gray-900">
                    {t("contact.mainCenter")}
                  </h3>
                  <p className="text-sm text-gray-600 mt-2">
                    {t("contact.mainCenterName")}
                  </p>
                  <p className="text-sm text-gray-600 mt-1">
                    {t("contact.mainCenterAddress")}
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-100 rounded-3xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-red-50 text-[#9d174d] flex items-center justify-center text-xl">
                  📩
                </div>
                <div>
                  <h3 className="text-lg font-black text-gray-900">
                    {t("contact.bookAppointments")}
                  </h3>
                  <p className="text-sm text-gray-600 mt-2">
                    {t("contact.whatsappAppoint")}
                  </p>
                  <p className="text-sm text-gray-600 mt-1">
                    {t("contact.emailLabel")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="max-w-[1420px] mx-auto px-6 sm:px-8 md:px-10 lg:px-12">
          <div className="flex items-center justify-between mb-5">
            <div>
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#9d174d]">
                {t("contact.location")}
              </span>
              <h2 className="text-2xl md:text-3xl font-black text-gray-900 mt-2">
                {t("contact.findOnMap")}
              </h2>
            </div>
            <Link
              href="https://maps.google.com/?q=Raj%20Nursing%20Home%20Hapur"
              className="hidden sm:inline-flex items-center justify-center px-5 py-3 rounded-xl bg-white text-gray-900 font-black text-xs uppercase tracking-widest border border-gray-200 hover:border-[#9d174d] hover:text-[#9d174d] transition-all shadow-sm"
            >
              {t("contact.getDirections")}
            </Link>
          </div>
          <div className="rounded-[2.5rem] overflow-hidden border border-gray-100 shadow-2xl">
            <iframe
              title="Raj Nursing Home - Hapur"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13993.960902714158!2d77.788486!3d28.734777!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390c85b28f530843%3A0x255093a94d78e2dc!2sRaj%20Nursing%20Home%20-%20Hapur!5e0!3m2!1sen!2sin!4v1771085116646!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              className="w-full"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

