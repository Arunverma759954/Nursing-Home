import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dr MC Sharma | Senior Laparoscopic Surgeon in Hapur",
  description: "Consult Dr MC Sharma, senior laparoscopic surgeon in Hapur, for advanced minimally invasive surgeries with trusted expertise and compassionate care.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
