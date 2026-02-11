"use client";

import Image from "next/image";
import Link from "next/link";

const ArrowLeft = ({ size = 24 }: { size?: number }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m12 19-7-7 7-7" /><path d="M19 12H5" /></svg>
);

export default function ServicePage({
    title = "Medical Service",
    description = "Detailed information about our medical specialty.",
    image = "/medical.jpg",
    features = ["24/7 Support", "Expert Doctors", "Modern Equipment"],
    children
}: {
    title?: string,
    description?: string,
    image?: string,
    features?: string[],
    children?: React.ReactNode
}) {
    return (
        <div className="min-h-screen bg-gray-50 pt-32 pb-20">
            <div className="max-w-screen-2xl mx-auto px-6">
                <Link href="/" className="inline-flex items-center gap-2 text-[#9d174d] font-black mb-12 hover:gap-4 transition-all">
                    <ArrowLeft size={24} /> BACK TO HOME
                </Link>

                <div className="grid lg:grid-cols-2 gap-20 items-center mb-20">
                    <div className="relative h-[600px] rounded-[3rem] overflow-hidden shadow-2xl">
                        <Image src={image} alt={title} fill className="object-cover" />
                    </div>

                    <div className="space-y-10 focus-visible:outline-none">
                        <div>
                            <span className="text-[#9d174d] font-black tracking-[0.3em] uppercase text-sm">Specialized Care</span>
                            <h1 className="text-5xl md:text-7xl font-black text-gray-900 mt-4 leading-tight">{title}</h1>
                        </div>

                        <p className="text-xl text-gray-600 leading-relaxed font-medium">
                            {description}
                        </p>

                        <div className="grid gap-6">
                            {features.map((f, i) => (
                                <div key={i} className="flex items-center gap-6 p-6 bg-white rounded-3xl shadow-sm border border-gray-100">
                                    <div className="w-12 h-12 bg-red-50 text-[#9d174d] rounded-2xl flex items-center justify-center font-black">✓</div>
                                    <span className="text-lg font-bold text-gray-700">{f}</span>
                                </div>
                            ))}
                        </div>

                        <Link href="/contact" className="block w-full py-6 bg-[#9d174d] text-white font-black text-2xl rounded-3xl shadow-2xl shadow-red-500/30 hover:-translate-y-2 transition-all text-center">
                            Book Appointment Now
                        </Link>
                    </div>
                </div>

                {children && (
                    <div className="mt-20">
                        {children}
                    </div>
                )}
            </div>
        </div>
    );
}
