"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Calendar, User } from "lucide-react";
import { useLanguage } from "@/app/context/LanguageContext";

type BlogPost = {
  id: string;
  slug: string;
  titleEn: string;
  titleHi?: string;
  date: string;
  image: string;
  excerpt?: string;
  content?: string;
};

export default function BlogDetailClient({ slug }: { slug: string }) {
  const { t, lang } = useLanguage();
  const [allPosts, setAllPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  const currentPost = allPosts.find((p) => p.slug === slug);
  const recentPosts = allPosts.filter((p) => p.slug !== slug).slice(0, 5);

  const title = currentPost
    ? lang === "hi" && currentPost.titleHi
      ? currentPost.titleHi
      : currentPost.titleEn
    : "";

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  useEffect(() => {
    fetch("/api/blogs")
      .then((res) => res.json())
      .then((data) => setAllPosts(Array.isArray(data) ? data : []))
      .catch(() => setAllPosts([]))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-50/50 flex items-center justify-center pt-32">
        <div className="animate-pulse text-gray-500 font-medium">Loading…</div>
      </div>
    );
  }

  if (!currentPost) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20">
        <div className="text-center">
          <h1 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">{t("blog.postNotFound")}</h1>
          <Link href="/blog" className="text-[#9d174d] font-bold hover:underline">{t("blog.backToBlog")}</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-slate-50/50 min-h-screen animate-page-enter mt-36 pb-12">
      <div className="max-w-[1420px] mx-auto px-4 sm:px-6 md:px-10 lg:px-12 py-8">
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Left Column: Article */}
          <article className="flex-1 bg-white rounded-[2rem] p-6 md:p-10 shadow-sm border border-gray-100">
            <div className="relative w-full aspect-[16/9] md:aspect-[21/10] rounded-3xl overflow-hidden mb-8 shadow-md">
              <Image
                src={currentPost.image}
                alt={title}
                fill
                className="object-cover"
              />
            </div>
            <div className="flex items-center gap-6 mb-6 text-sm font-bold text-gray-500">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-[#800020]">
                  <User className="w-4 h-4" />
                </div>
                <span>ADMIN</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-[#800020]">
                  <Calendar className="w-4 h-4" />
                </div>
                <span>{currentPost.date}</span>
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-8 leading-tight">
              {title}
            </h1>
            <div
              className="prose prose-lg max-w-none space-y-6 text-gray-700 leading-relaxed font-medium text-lg [&_h2]:text-3xl [&_h2]:md:text-4xl [&_h2]:font-black [&_h2]:text-gray-900 [&_h2]:leading-tight [&_h3]:text-2xl [&_h3]:md:text-3xl [&_h3]:font-black [&_h3]:text-gray-900 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2 [&_li]:marker:text-[#800020]"
              dangerouslySetInnerHTML={{ __html: currentPost.content || "" }}
            />
          </article>

          {/* Right Column: Sidebar */}
          <aside className="w-full lg:w-[380px] space-y-8">
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
              <h3 className="text-xl font-black text-gray-900 mb-6">{t("blog.searchBlogs")}</h3>
              <input
                type="text"
                placeholder={t("blog.askPlaceholder")}
                className="w-full bg-slate-50 border border-gray-100 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-[#800020]/20 transition-all font-bold placeholder:text-gray-400"
              />
            </div>
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
              <h3 className="text-xl font-black text-gray-900 mb-8">{t("blog.recentPosts")}</h3>
              <div className="space-y-6">
                {recentPosts.map((post) => {
                  const postTitle = lang === "hi" && post.titleHi ? post.titleHi : post.titleEn;
                  return (
                    <Link key={post.id} href={`/blog/${post.slug}`} className="group flex gap-4 items-start">
                      <div className="relative w-20 h-20 rounded-2xl overflow-hidden shrink-0 shadow-sm">
                        <Image
                          src={post.image}
                          alt={postTitle}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                      <div className="space-y-1.5 flex-1">
                        <h4 className="text-[14px] font-black text-gray-900 group-hover:text-[#800020] transition-colors leading-tight">
                          {postTitle}
                        </h4>
                        <p className="text-[11px] text-gray-500 font-bold uppercase tracking-wider">
                          {post.date}
                        </p>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
            <div className="bg-[#0c4a4e] rounded-3xl p-10 text-white relative overflow-hidden shadow-xl">
              <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)", backgroundSize: "24px 24px" }} />
              </div>
              <div className="relative z-10">
                <h3 className="text-2xl font-black mb-4 leading-tight">{t("blog.ctaTitle")}</h3>
                <p className="text-teal-100 font-medium mb-8 text-sm leading-relaxed">{t("blog.ctaDesc")}</p>
                <Link
                  href="/contact"
                  className="block w-full bg-[#4fd1c5] text-[#0c4a4e] text-center py-4 rounded-xl font-black uppercase tracking-widest hover:bg-white transition-all shadow-lg"
                >
                  {t("nav.bookAppointment")}
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
