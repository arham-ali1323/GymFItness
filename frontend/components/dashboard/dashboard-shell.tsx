"use client";

import { OrcishSidebar } from "@/components/dashboard/orcish-sidebar";
import { DashboardModeProvider, useDashboardMode } from "@/components/dashboard/dashboard-mode-provider";

function DashboardShellContent({ children }: { children: React.ReactNode }) {
  const { isDark } = useDashboardMode();

  return (
    <div className={`flex h-screen ${isDark ? "bg-black" : "bg-slate-100"}`}>
      <OrcishSidebar />
      <main className="flex-1 overflow-y-auto">{children}</main>
    </div>
  );
}

export default function DashboardShell({ children }: { children: React.ReactNode }) {
  return (
    <DashboardModeProvider>
      <DashboardShellContent>{children}</DashboardShellContent>
    </DashboardModeProvider>
  );
}
