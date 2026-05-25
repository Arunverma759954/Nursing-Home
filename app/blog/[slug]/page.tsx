import { Metadata } from 'next';
import blogs from '@/data/blogs.json';
import BlogDetailClient from './BlogDetailClient';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const blog = blogs.find((b) => b.slug === slug);

  if (!blog) {
    return {
      title: 'Blog Post | Raj Nursing Home',
    };
  }

  // Use (blog as any) to access dynamically added fields
  const b = blog as any;
  const title = b.metaTitle || b.titleEn;
  const description = b.metaDescription || b.excerpt || '';

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [b.image],
    },
  };
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  return <BlogDetailClient slug={slug} />;
}
