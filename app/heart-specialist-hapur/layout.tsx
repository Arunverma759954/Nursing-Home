import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services Raj Nursing Home Hapur | Trusted Multi-Specialty & Maternity Care",
  description: "Learn about Raj Nursing Home, a leading multi-specialty nursing home in Hapur known for expert gynecology, laparoscopic surgery, maternity care, and 24x7 emergency services. Discover our mission, values, and commitment to patient-centric healthcare.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
