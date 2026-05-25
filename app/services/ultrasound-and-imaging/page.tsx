"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/app/context/LanguageContext";

export default function UltrasoundPage() {
    const { t } = useLanguage();

    return (
        <div className="bg-white">
            {/* Hero Section */}
            <div className="relative bg-[#701a2e] text-white overflow-hidden min-h-[300px] md:min-h-[400px] flex items-center">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-[#701a2e]/90 z-10" />
                    <Image
                        src="/raj/banner1.webp"
                        alt="Banner"
                        fill
                        className="object-cover object-center opacity-30"
                        priority
                    />
                </div>
                <div className="relative z-20 w-full max-w-[1420px] mx-auto px-6 sm:px-8 md:px-10 lg:px-12 pt-24 pb-12">
                    <div className="flex flex-col justify-center text-center lg:text-left">
                        <nav className="text-xs md:text-sm text-white/80 font-bold mb-4 bg-black/10 w-fit px-5 py-2.5 rounded-xl backdrop-blur-sm self-center lg:self-start">
                            <Link href="/" className="hover:text-white transition-colors uppercase">{t("ultrasoundImaging.home")}</Link>
                            <span className="mx-2 opacity-50">/</span>
                            <span className="text-white uppercase">{t("ultrasoundImaging.breadcrumbCurrent")}</span>
                        </nav>
                        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight">
                            {t("ultrasoundImaging.heroTitle")}
                        </h1>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-[1420px] mx-auto px-6 sm:px-8 md:px-10 lg:px-12 py-12 md:py-16 text-gray-700 space-y-12">

                {/* Intro */}
                <div className="space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-[#701a2e] leading-tight tracking-tight">{t("ultrasoundImaging.introTitle")}</h2>
                    <p className="leading-relaxed text-lg font-semibold italic border-l-4 border-red-50 pl-6">
                        {t("ultrasoundImaging.introP1")}
                    </p>
                </div>

                {/* Section 1 */}
                <div className="space-y-4">
                    <h2 className="text-xl md:text-2xl font-bold text-[#701a2e] leading-tight">
                        Ultrasound & Imaging in Hapur: Your Guide to Comprehensive Care at Raj Nursing Home
                    </h2>
                    <p className="leading-relaxed font-semibold text-gray-600 italic">
                        Seeking a trusted source for reliable ultrasound and imaging services in Hapur? Well, you are at the right place! At Raj Nursing Home, we prioritize accurate and offered by for all our patients. Maintaining this approach from our team here is to ensure reliable ultrasound and diagnostic imaging center Hapur.
                    </p>
                </div>

                {/* Section 2: Image Left, Text Right */}
                <div className="grid md:grid-cols-2 gap-10 items-start">
                    <div className="relative h-[350px] md:h-[450px] w-full rounded-[2.5rem] overflow-hidden shadow-xl border-4 border-white ring-1 ring-gray-100">
                        <Image
                            src="/ultrasound.jpg"
                            alt="Ultrasound Importance"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="space-y-6">
                        <h2 className="text-xl md:text-2xl font-bold text-[#701a2e] leading-tight">
                            Understanding the Basics of Ultrasound: What is the Importance?
                        </h2>
                        <div className="space-y-4 text-gray-600 font-semibold italic text-sm md:text-base border-l-2 border-red-50 pl-6">
                          <p className="leading-relaxed ">
                              The term &quot;Ultrasound&quot; is quite common in the medical sphere and diagnostic world. The meaning is simple as the technology uses sound waves to give us the real-time internal structures in the form of images. However, the process is generally prepared on the exposed areas of the body.
                          </p>
                          <p className="leading-relaxed ">
                              The ultrasound helps patients and doctors in the medical exams to know whether there are any anomalies.
                          </p>
                          <p className="leading-relaxed ">
                              At Raj Nursing Home, modern ultrasound machines are there to perform different types of scans, starting from abdominal to focused pelvic ultrasound in Hapur. There is no radiation involved in this process that saves from the general enthusiasts later during disease.
                          </p>
                        </div>
                    </div>
                </div>

                {/* Section 3: Pregnancy Scan */}
                <div className="space-y-6">
                    <h2 className="text-2xl md:text-3xl font-black text-[#701a2e]">
                        Pregnancy Scan Hapur: Nurturing New Life with Confidence
                    </h2>
                    <p className="leading-relaxed">
                        An expectant couple can understand the importance of joy and emotions and the expense of genial pregnancy imaging. Therefore, choosing Raj Nursing Home is the best one can have kept sweet pregnancy scan Hapur can see.
                    </p>
                    <div className="space-y-4">
                        <h3 className="font-black text-lg md:text-xl text-black">
                            What do we actually do here for the lady who is expecting? The steps are as follows:
                        </h3>
                        <ul className="space-y-2 list-none pl-4">
                            <li className="flex gap-2 items-center">
                                <span className="text-blue-500 text-xl">✓</span>
                                <span className="italic text-gray-600">Determine the early signs of pregnancy.</span>
                            </li>
                            <li className="flex gap-2 items-center">
                                <span className="text-blue-500 text-xl">✓</span>
                                <span className="italic text-gray-600">Monitor the growth of the fetus.</span>
                            </li>
                            <li className="flex gap-2 items-center">
                                <span className="text-blue-500 text-xl">✓</span>
                                <span className="italic text-gray-600">Check amniotic fluid.</span>
                            </li>
                            <li className="flex gap-2 items-center">
                                <span className="text-blue-500 text-xl">✓</span>
                                <span className="italic text-gray-600">Find out for congenital health concerns.</span>
                            </li>
                            <li className="flex gap-2 items-center">
                                <span className="text-blue-500 text-xl">✓</span>
                                <span className="italic text-gray-600">Check the nuanced reports to support the family through the entire journey.</span>
                            </li>
                        </ul>
                        <p className="leading-relaxed mt-4">
                            At Raj Nursing Home, we just don&apos;t do the regular ultrasound, but ensure personal safety with the lady by counseling. Choose us for the gold standard of maternity care as a leading diagnostic imaging center in Hapur.
                        </p>
                    </div>
                </div>

                {/* Section 4: Pelvic Ultrasound - Text Left, Image Right */}
                <div className="grid md:grid-cols-2 gap-10 items-center bg-slate-50/50 p-8 md:p-12 rounded-[3rem] border border-slate-100">
                    <div className="space-y-6">
                        <h2 className="text-xl md:text-2xl font-bold text-[#701a2e] leading-tight">
                            Pelvic Ultrasound Hapur: Women&apos;s Health Under One Roof
                        </h2>
                        <div className="space-y-4 text-gray-600 font-semibold italic text-sm md:text-base">
                          <p className="leading-relaxed ">
                              For women&apos;s pelvic health diagnostics, conducting a pelvic ultrasound is necessary. This technology helps the gynecologist to assess the problems with the reproductive tract or procedure. However, precision reliable pelvic ultrasound in Hapur is limited to a few.
                          </p>
                          <p className="leading-relaxed ">
                              After Raj Nursing Home, the diagnostic department is possible as our technicians are friendly and suggestions as early as women&apos;s burden and discomfort without any flaw.
                          </p>
                          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-4">
                            <p className="leading-relaxed ">
                                With our reliable procedures, we ensure that a patient finds every possible guidance she needs related to fertility, gynecological surgery, or any typical festering scene.
                            </p>
                            <p className="leading-relaxed text-[#701a2e] font-bold">
                                For clear and precise women&apos;s health questions, book a pelvic ultrasound in Hapur at Raj Nursing Home today!
                            </p>
                          </div>
                        </div>
                    </div>
                    <div className="relative h-[300px] md:h-[400px] w-full rounded-[2rem] overflow-hidden shadow-xl border-4 border-white ring-1 ring-gray-100">
                        <Image
                            src="/ultrasound2.jpg"
                            alt="Pelvic Ultrasound Machine"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>

                {/* Section 5: Why Choose Us */}
                <div className="space-y-6">
                    <h2 className="text-2xl md:text-3xl font-black text-[#701a2e]">
                        Why Choose Raj Nursing Home as Hapur’s Diagnostic Imaging Center?
                    </h2>
                    <p className="leading-relaxed">
                        Everyone wants to join a healthcare system where they can receive responsive and accessible health-related facilities at marginal pricing. Well, Raj Nursing Home is one of the best diagnostic imaging centers in Hapur that delivers premium care to its patients.
                    </p>
                    <div className="space-y-4">
                        <h3 className="font-black text-xl text-black">
                            With a legacy of more than a decade, we
                        </h3>
                        <ul className="space-y-2 list-none pl-4">
                            {[
                                "Follow NABH-certified protocols,",
                                "Deliver patient-first service,",
                                "Appoint the best gynecologists in Hapur,",
                                "Offer full-suit imaging services apart from ultrasound (ECO, 2D Echo, X-ray)",
                                "Deliver advanced laboratory tests,",
                                "Provide 24/7 emergency care, and",
                                "Maintain transparent pricing"
                            ].map((item, i) => (
                                <li key={i} className="flex gap-2 items-start">
                                    <span className="text-black font-bold">✓</span>
                                    <span className="text-gray-700">{item}</span>
                                </li>
                            ))}
                        </ul>
                        <p className="leading-relaxed mt-4 font-medium text-gray-800">
                            Trust your health with the experts! For reliable ultrasound and complete diagnostics in Hapur, choose Raj Nursing Home—your health partner for life.
                        </p>
                    </div>
                </div>

                {/* Conclusion Box */}
                <div className="bg-slate-900 border-none rounded-[2.5rem] p-10 md:p-14 text-white shadow-2xl relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-[#701a2e]/20 rounded-full blur-3xl -mr-32 -mt-32"></div>
                    <h2 className="text-2xl md:text-3xl font-bold mb-6 tracking-tight relative z-10">Conclusion</h2>
                    <p className="leading-relaxed text-slate-300 font-medium italic border-l-4 border-red-500 pl-6 relative z-10 text-lg">
                        Whether it&apos;s your routine checkup, or you look for specialized imaging and pregnancy-based scans, Raj Nursing Home provides the best and unmatched level of diagnosis in Hapur. Now, no more worries about getting the best ultrasound in Hapur. With Raj Nursing Home, get in touch with accuracy, commitment, and privacy. Reach out to Raj Nursing Home for all your ultrasound and diagnostic needs in Hapur!
                    </p>
                </div>

            </div>
        </div>
    );
}
