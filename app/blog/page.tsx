"use client";

import Image from "next/image";
import Link from "next/link";
import { Calendar, ArrowRight } from "lucide-react";

const blogPosts = [
    {
        id: 1,
        title: "Diabetes & Thyroid Clinic in Hapur",
        date: "Date : 13-11-2025",
        image: "/Thyroid.jpg",
        slug: "diabetes-thyroid-clinic-hapur"
    },
    {
        id: 2,
        title: "Best Gynaecologist in Hapur",
        date: "Date : 21-06-2025",
        image: "/Diagnostic.jpg",
        slug: "best-gynecologist-hapur"
    },
    {
        id: 3,
        title: "गर्भावस्था में अल्ट्रासाउंड क्यों जरूरी है? हापुड़ की महिलाओं के लिए गाइड",
        date: "Date : 19-06-2025",
        image: "/india-doctor.jpg",
        slug: "pregnancy-ultrasound-guide-hindi"
    },
    {
        id: 4,
        title: "Laproscpic in Hapur",
        date: "Date : 15-06-2025",
        image: "/laparoscopic.jpg",
        slug: "laparoscopic-hapur"
    },
    {
        id: 5,
        title: "Ultrasound in Hapur – Advanced Diagnostic Services at Raj Nursing Home",
        date: "Date : 15-06-2025",
        image: "/ultrasound.jpg",
        slug: "ultrasound-advanced-diagnostic-hapur"
    }
];

export default function BlogPage() {
    return (
        <div className="bg-white min-h-screen animate-page-enter mt-20">
            {/* Hero Section */}
            <div className="relative h-[250px] md:h-[300px] flex items-center overflow-hidden bg-gradient-to-r from-[#800020] via-[#9d174d] to-[#800020]">
                <div className="absolute inset-0 opacity-10">
                    <Image
                        src="/raj/banner2.webp"
                        alt="Blog"
                        fill
                        className="object-cover"
                    />
                </div>

                <div className="container mx-auto px-6 z-10 relative">
                    <div className="max-w-screen-2xl mx-auto">
                        <h1 className="text-4xl md:text-6xl font-black text-white mb-4">
                            Blog
                        </h1>
                        <nav className="flex items-center text-sm text-white/90 font-semibold">
                            <Link href="/" className="hover:text-white transition-colors">Home</Link>
                            <span className="mx-2">/</span>
                            <span className="text-white">Blog</span>
                        </nav>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-screen-2xl mx-auto px-6 py-16 md:py-24">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-black text-gray-900">
                        News and Health Tips
                    </h2>
                    <div className="h-1 w-24 bg-[#9d174d] mx-auto mt-6 rounded-full"></div>
                </div>

                {/* Blog Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogPosts.map((post) => (
                        <Link
                            key={post.id}
                            href={`/blog/${post.slug}`}
                            className="group bg-white rounded-xl overflow-hidden shadow-md border border-gray-100 hover:shadow-xl transition-all duration-500 hover:-translate-y-1"
                        >
                            {/* Image */}
                            <div className="relative h-60 overflow-hidden">
                                <Image
                                    src={post.image}
                                    alt={post.title}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                                />
                            </div>

                            {/* Content area matching screenshot (gray background) */}
                            <div className="p-6 bg-gray-100/80 min-h-[140px] flex flex-col justify-center">
                                <h3 className="text-xl font-bold text-[#8a143d] leading-snug line-clamp-2 mb-2">
                                    {post.title}
                                </h3>
                                <p className="text-sm font-black text-[#8a143d] opacity-90">
                                    {post.date}
                                </p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
