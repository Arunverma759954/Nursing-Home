"use client";

import Image from "next/image";
import Link from "next/link";

const treatments = [
  { title: "Dengue Treatment", image: "/treatments/Dengue.png" },
  { title: "Viral Fever Treatment", image: "/treatments/Viral.png" },
  { title: "Chikungunya Treatment", image: "/treatments/Chikungunya.png" },
  { title: "Typhoid Treatment", image: "/treatments/Typhoid.png" },
  { title: "Malaria Treatment", image: "/treatments/Malaria.png" },
];

export default function TreatmentPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900 pt-[110px] md:pt-[130px]">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#9d174d]/10 via-white to-white" />
        <div className="absolute -top-40 -right-40 h-[420px] w-[420px] rounded-full bg-[#9d174d]/15 blur-[120px]" />
        <div className="absolute bottom-[-120px] left-[-120px] h-[320px] w-[320px] rounded-full bg-red-200/40 blur-[120px]" />
        <div className="max-w-7xl mx-auto px-6 pt-16 md:pt-24 pb-16 relative">
          <div className="grid lg:grid-cols-[1.1fr,0.9fr] gap-10 items-center">
            <div className="flex flex-col gap-5">
              <span className="inline-flex w-fit items-center gap-2 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest bg-red-50 text-[#9d174d] border border-red-100">
                Treatments
              </span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
                Our Treatments
              </h1>
              <div className="flex items-center gap-2 text-xs font-bold text-gray-500">
                <Link href="/" className="hover:text-[#9d174d] transition-colors">
                  Home
                </Link>
                <span>/</span>
                <span className="text-gray-900">Treatments</span>
              </div>
              <div className="pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-7 py-3.5 rounded-xl bg-[#9d174d] text-white font-black text-xs uppercase tracking-widest shadow-lg shadow-red-500/20 hover:bg-[#831843] transition-all"
                >
                  Book Appointment
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {treatments.slice(0, 4).map((treatment) => (
                <div
                  key={treatment.title}
                  className="relative h-40 md:h-44 rounded-2xl overflow-hidden shadow-2xl border border-white/70"
                >
                  <Image
                    src={treatment.image}
                    alt={treatment.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/10 to-transparent" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Treatments Grid */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between mb-8">
            <div>
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#9d174d]">
                Treatments
              </span>
              <h2 className="text-2xl md:text-3xl font-black text-gray-900 mt-2">
                Select Your Care
              </h2>
            </div>
            <Link
              href="/contact"
              className="hidden sm:inline-flex items-center justify-center px-6 py-3 rounded-xl bg-white text-gray-900 font-black text-xs uppercase tracking-widest border border-gray-200 hover:border-[#9d174d] hover:text-[#9d174d] transition-all shadow-sm"
            >
              Book Appointment
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {treatments.map((treatment) => (
              <div
                key={treatment.title}
                className="group bg-white border border-gray-100 rounded-[2rem] overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
                <div className="relative h-56">
                  <Image
                    src={treatment.image}
                    alt={treatment.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                </div>
                <div className="p-6 flex items-center justify-between gap-4">
                  <h3 className="text-lg font-black text-gray-900">
                    {treatment.title}
                  </h3>
                  <Link
                    href="/contact"
                    className="shrink-0 px-4 py-2 rounded-lg bg-[#9d174d] text-white text-[10px] font-black uppercase tracking-widest hover:bg-[#831843] transition-all"
                  >
                    Book
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

