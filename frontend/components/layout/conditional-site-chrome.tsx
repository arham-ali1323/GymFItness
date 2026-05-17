"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";

export default function ConditionalSiteChrome({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isDashboardRoute =
    pathname?.startsWith("/dashboard") || pathname?.startsWith("/user");

  return (
    <>
      {!isDashboardRoute && <Navbar />}
      <main>{children}</main>
      {!isDashboardRoute && <Footer />}
    </>
  );
}
