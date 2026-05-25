import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dr Vipin Sharma | MD Medicine Specialist in Hapur",
  description: "Consult Dr. Vipin Sharma, a trusted MD Medicine Specialist in Hapur, for expert diagnosis and treatment of chronic and acute medical conditions. Book your appointment today.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
