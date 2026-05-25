import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Digital X-Ray in Hapur | Radiology Center at Raj Nursing Home",
  description: "Looking for a chest or bone X-ray in Hapur? Get fast, accurate, and low-radiation digital X-ray services at Raj Nursing Home’s modern radiology clinic.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
