import { Metadata } from "next";

export const metadata: Metadata = {
  title: "PFT Test in Hapur | Pulmonary Function Testing at Raj Nursing Home",
  description: "Need a lung function, asthma, or COPD test in Hapur? Get safe and accurate PFT testing at Raj Nursing Home with expert care and quick reports.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
