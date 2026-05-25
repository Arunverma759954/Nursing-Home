import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Heart & Chest Care in Hapur | Cardiologist & Chest Pain Treatment - Raj Nursing Home",
  description: "Need a heart specialist or chest pain treatment in Hapur? Visit Raj Nursing Home for expert cardiac care, BP management, and respiratory treatment.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
