import DashboardShell from "@/components/dashboard/dashboard-shell";

export default function UserLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <DashboardShell>{children}</DashboardShell>;
}
