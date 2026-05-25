import { Metadata } from 'next';
import blogs from '@/data/blogs.json';

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const blog = blogs.find((b) => b.slug === slug);

  console.log("Generating metadata for slug:", slug);
  console.log("Blog found:", blog ? "yes" : "no");

  if (!blog) {
    return {
      title: 'Blog Post | Raj Nursing Home',
    };
  }

  const title = (blog as any).metaTitle || blog.titleEn;
  const description = (blog as any).metaDescription || blog.excerpt || '';

  return {
    title,
    description,
  };
}

export default async function BlogLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ slug: string }>;
}) {
  await params;
  return <>{children}</>;
}
