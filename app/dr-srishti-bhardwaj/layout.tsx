import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dr Srishti Bhardwaj | Best Gynaecologist in Hapur",
  description: "Consult Dr Srishti Bhardwaj, the best gynaecologist in Hapur for expert care in pregnancy, infertility, and womens health—trusted specialist with years of experience.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
