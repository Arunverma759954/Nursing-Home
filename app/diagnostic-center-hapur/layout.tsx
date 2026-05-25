import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Diagnostic Center in Hapur | Blood Test, Pathology & Imaging Services",
  description: "Looking for a diagnostic center in Hapur? Get reliable blood tests, pathology lab services, imaging, and medical tests near you at Raj Nursing Home.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
