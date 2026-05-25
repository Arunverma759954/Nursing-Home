import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Internal Medicine Doctor in Hapur | General Physician, Thyroid & Diabetes Specialist",
  description: "Looking for an MD physician near you? Get expert internal medicine, diabetes treatment, thyroid care, and general physician consultations in Hapur at Raj Nursing Home.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
