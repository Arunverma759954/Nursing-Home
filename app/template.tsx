"use client";

import { usePathname } from "next/navigation";

export default function Template({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="animate-page-enter w-full min-h-screen">
      {children}
    </div>
  );
}
