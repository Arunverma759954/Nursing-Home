"use client";

import { useState, useEffect } from "react";
import { useLanguage } from "@/app/context/LanguageContext";
import { useAppointment } from "@/app/context/AppointmentContext";

const XIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 6 6 18" />
    <path d="m6 6 12 12" />
  </svg>
);

const CalendarIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
    <line x1="16" x2="16" y1="2" y2="6" />
    <line x1="8" x2="8" y1="2" y2="6" />
    <line x1="3" x2="21" y1="10" y2="10" />
  </svg>
);

const ChevronDownIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="m6 9 6 6 6-6" />
  </svg>
);

const serviceOptions = [
  "General OPD",
  "Heart & Chest Care",
  "Internal Medicine",
  "Laparoscopic Surgery",
  "Diagnostic / Lab",
  "Ultrasound & Imaging",
  "Digital X-Ray",
  "PFT Testing",
  "Woman's Health / Gynaecology",
  "IVF & Fertility",
  "Health Checkup",
  "Emergency / ICU",
];

export default function AppointmentModal() {
  const { t } = useLanguage();
  const { isOpen, closeAppointment } = useAppointment();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [date, setDate] = useState("");
  const [service, setService] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ type: 'success' | 'error', message: string } | null>(null);

  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  if (!isOpen) return null;

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "appointment",
          name,
          email,
          phone,
          city,
          date,
          service,
          message,
        }),
      });

      if (response.ok) {
        setSubmitStatus({ type: 'success', message: 'Appointment request sent successfully!' });
        setName("");
        setEmail("");
        setPhone("");
        setCity("");
        setDate("");
        setService("");
        setMessage("");
        // Close modal after delay on success
        setTimeout(() => {
          closeAppointment();
          setSubmitStatus(null);
        }, 2500);
      } else {
        const errorData = await response.json();
        setSubmitStatus({ 
          type: 'error', 
          message: errorData.details || 'Failed to send request. Please try again.' 
        });
      }
    } catch (error) {
      setSubmitStatus({ type: 'error', message: 'Connection issue. Please check your internet and try again.' });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-gray-900/60 backdrop-blur-sm"
        onClick={closeAppointment}
        aria-hidden
      />
      <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-white rounded-2xl shadow-2xl border border-gray-100">
        <button
          type="button"
          onClick={closeAppointment}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/90 hover:bg-gray-100 text-gray-600 hover:text-gray-900 border border-gray-200 transition-colors"
          aria-label="Close"
        >
          <XIcon />
        </button>

        <div className="bg-gradient-to-br from-[#9d174d] via-[#831843] to-[#4c0519] text-white px-6 py-4 sm:py-6 rounded-t-2xl text-center relative overflow-hidden">
          {/* Subtle noise/texture overlay */}
          <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
          
          <div className="relative z-10 flex items-center justify-center gap-4">
            <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-lg">
              <CalendarIcon />
            </div>
            <div className="text-left">
              <h2 className="text-xl sm:text-2xl font-black tracking-tight leading-none">
                {t("appointment.title")}
              </h2>
              <p className="text-[10px] sm:text-xs text-white/70 mt-1 font-medium">
                {t("appointment.subtitle")}
              </p>
            </div>
          </div>
        </div>

        <div className="p-4">
          <form onSubmit={handleSubmit} className="grid gap-2.5 sm:grid-cols-2">
            <div>
              <label className="block text-xs font-semibold text-gray-600 mb-1">
                {t("appointment.fullName")}
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full rounded-xl border border-gray-200 bg-gray-50/50 px-4 py-2.5 text-sm font-medium text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#9d174d]/30 focus:border-[#9d174d]"
                required
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-600 mb-1">
                {t("appointment.email")}
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-xl border border-gray-200 bg-gray-50/50 px-4 py-2.5 text-sm font-medium text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#9d174d]/30 focus:border-[#9d174d]"
                required
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-600 mb-1">
                {t("appointment.phone")}
              </label>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full rounded-xl border border-gray-200 bg-gray-50/50 px-4 py-2.5 text-sm font-medium text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#9d174d]/30 focus:border-[#9d174d]"
                required
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-600 mb-1">
                {t("appointment.city")}
              </label>
              <input
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                placeholder="e.g. Hapur, Ghaziabad"
                className="w-full rounded-xl border border-gray-200 bg-gray-50/50 px-4 py-2.5 text-sm font-medium text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#9d174d]/30 focus:border-[#9d174d]"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-600 mb-1">
                {t("appointment.date")}
              </label>
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full rounded-xl border border-gray-200 bg-gray-50/50 px-4 py-2.5 text-sm font-medium text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#9d174d]/30 focus:border-[#9d174d]"
              />
            </div>

            <div className="sm:col-span-2">
              <label className="block text-xs font-semibold text-gray-600 mb-1">
                {t("appointment.selectService")}
              </label>
              <div className="relative">
                <select
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="w-full appearance-none rounded-xl border border-gray-200 bg-gray-50/50 px-4 py-2.5 pr-10 text-sm font-medium text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#9d174d]/30 focus:border-[#9d174d]"
                >
                  <option value="">{t("appointment.selectService")}</option>
                  {serviceOptions.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
                  <ChevronDownIcon />
                </span>
              </div>
            </div>

            <div className="sm:col-span-2">
              <label className="block text-xs font-semibold text-gray-600 mb-1">
                {t("appointment.additionalMessage")}
              </label>
              <textarea
                rows={2}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Any specific request or note..."
                className="w-full rounded-xl border border-gray-200 bg-gray-50/50 px-4 py-2 text-sm font-medium text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#9d174d]/30 focus:border-[#9d174d]"
              />
            </div>

            <div className="sm:col-span-2 flex flex-col gap-4 pt-2">
              {submitStatus && (
                <div 
                  className={`flex flex-col gap-3 p-4 rounded-xl animate-in fade-in zoom-in-95 duration-500 ${
                    submitStatus.type === 'success' 
                    ? 'bg-emerald-50/50 border border-emerald-100 ring-1 ring-emerald-500/20 shadow-sm' 
                    : 'bg-rose-50/50 border border-rose-100 ring-1 ring-rose-500/20 shadow-sm'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 shadow-sm ${
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
                      <h4 className={`text-sm font-black ${submitStatus.type === 'success' ? 'text-emerald-800' : 'text-rose-800'}`}>
                        {submitStatus.type === 'success' ? 'Appointment Confirmed' : 'Submission Failed'}
                      </h4>
                      <p className={`text-[11px] font-medium ${submitStatus.type === 'success' ? 'text-emerald-600/90' : 'text-rose-600/90'}`}>
                        {submitStatus.message}
                      </p>
                    </div>
                  </div>
                </div>
              )}
              <div className="flex justify-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`relative group overflow-hidden w-full py-3.5 px-8 rounded-xl text-white font-black text-[11px] uppercase tracking-[0.2em] transition-all duration-300 flex items-center justify-center gap-3 ${
                    isSubmitting 
                    ? 'bg-gray-400 cursor-not-allowed' 
                    : 'bg-gradient-to-r from-[#9d174d] via-[#831843] to-gray-900 hover:shadow-lg active:translate-y-0'
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      <span>{t("nav.booking") || "Processing..."}</span>
                    </>
                  ) : (
                    <>
                      <span>{t("appointment.bookButton")}</span>
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
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
