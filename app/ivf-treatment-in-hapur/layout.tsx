import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "IVF Treatment in Hapur | Fertility Clinic - Raj Nursing Home",
  description: "Looking for IVF or infertility treatment in Hapur? Visit our trusted fertility clinic for IVF, IUI, and personalized fertility care in Hapur at Raj Nursing Home",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
