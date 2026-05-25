import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Best Hospital & Nursing Home in Hapur | 24/7 Emergency Care",
  description: "Looking for the best hospital and nursing home in Hapur? Raj Nursing Home offers expert laparoscopic surgery, maternity care, and 24/7 emergency services. Book now!",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
