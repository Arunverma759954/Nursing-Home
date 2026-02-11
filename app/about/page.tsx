"use client";

import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900 pt-[110px] md:pt-[130px]">
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
        <div className="max-w-screen-2xl mx-auto px-6 pt-12 pb-12 relative flex items-center justify-between">
          <div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-white tracking-tight mb-2">
              About Us
            </h1>
            <div className="flex items-center gap-2 text-xs font-bold text-white/80">
              <Link href="/" className="hover:text-white transition-colors">
                Home
              </Link>
              <span>/</span>
              <span className="text-white">About Us</span>
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

      <section className="py-20 md:py-24">
        <div className="max-w-screen-2xl mx-auto px-6 grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 leading-tight mb-4">
                15 Years of Healing Hapur - <span className="text-[#9d174d]">Our Story</span>
              </h2>
              <p className="text-gray-600 leading-relaxed text-lg">
                Founded in 2009 on Swarg Ashram Road, Raj Nursing Home began with 10 beds and a vision: &quot;Make advanced healthcare accessible to Hapur&apos;s families.&quot; Today, we&apos;re a 50-bed facility serving 200+ patients daily from Ghaziabad, Meerut, and Bulandshahr.
              </p>
            </div>

            <div>
              <h3 className="text-xl md:text-2xl font-black text-[#9d174d] mb-4">Why Choose Us?</h3>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="shrink-0 w-6 h-6 mt-1 text-[#9d174d]">🩺</div>
                  <div>
                    <h4 className="font-bold text-gray-900">Doctor-Led Diagnostics:</h4>
                    <p className="text-sm text-gray-600">Reports analyzed by MD specialists, not technicians</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="shrink-0 w-6 h-6 mt-1 text-[#9d174d]">💡</div>
                  <div>
                    <h4 className="font-bold text-gray-900">Technology Meets Compassion:</h4>
                    <p className="text-sm text-gray-600">HD ultrasound, laparoscopic towers + regional language counseling</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="shrink-0 w-6 h-6 mt-1 text-[#9d174d]">🌱</div>
                  <div>
                    <h4 className="font-bold text-gray-900">Community Impact:</h4>
                    <p className="text-sm text-gray-600">Free health camps, monsoon relief kits, and school health programs</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl md:text-2xl font-black text-[#9d174d] mb-4">Milestones</h3>
              <ul className="space-y-2 list-disc list-inside text-gray-700 font-medium">
                <li><span className="font-bold">2023:</span> Launched Hapur&apos;s first tele-ICU for remote villages</li>
                <li><span className="font-bold">2024:</span> Recognized as &quot;Best Hospital and Nursing Home in Western UP&quot; by UP Medical Council</li>
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
        <div className="max-w-screen-2xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
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
              <h3 className="text-2xl md:text-3xl font-black text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                Ad everti virtute adversarium usu. Errem legere adolescens ut cum. Te quo purto altera, mei nisl causae laboramus no. Te liber graeco quo, nam velit intellegebat an. Vis et sumo temporibus.
                <br /><br />
                In ius illud idque nobis. Sed ut equidem omittam. Ius enim nullam insolens ex, munere insolens tractatos vel an, sea iriure virtute adipiscing ex. Vel dignissim hendrerit id. Quem expetenda at duo.
              </p>
            </div>
            <div>
              <h3 className="text-2xl md:text-3xl font-black text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                Eam etiam blandit an, no ius alia affert antiopam. Vim gubergren inciderint ea. Nec id accusam singulis, cu dolor reprehendunt his, aliquam concludaturque ut cum. In mazim omnium consequuntur per, ea semper fabulas sed.
                <br /><br />
                Eripuit molestiae persequeris eam no, vis ex primis blandit. Expetenda abhorreant ne sit. Omnes eripuit vis eu, pertinax adipiscing moderatius has te. Sed ad quot facete, vim et quas recteque repudiare. Detraxit definiebas an duo, officiis perfecto est id.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
