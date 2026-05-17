"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { useDashboardMode } from "@/components/dashboard/dashboard-mode-provider";
import {
  Menu,
  X,
  ChevronDown,
  ChevronRight,
  LayoutDashboard,
  Dumbbell,
  Apple,
  Flag,
  CalendarDays,
  BarChart3,
  UserCircle2,
  ShieldCheck,
  Footprints,
  FileText,
  Table2,
  Boxes,
  Layers3,
  Sparkles,
  Crown,
} from "lucide-react";

type NavItem = {
  name: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  children?: { name: string; href: string }[];
};

const navigation = [
  { name: "Overview", href: "/dashboard", icon: LayoutDashboard },
  {
    name: "Workout",
    href: "/user/workouts",
    icon: Dumbbell,
    children: [
      { name: "Workout Filter", href: "/user/workouts/filter" },
      { name: "Workout Top Filter", href: "/user/workouts/top-filter" },
      { name: "Body Workout", href: "/user/workouts/body-workout" },
      { name: "Create Workout", href: "/user/workouts/create" },
      { name: "Workout Summary", href: "/user/workouts/summary" },
      { name: "Workout CRUD", href: "/user/workouts/crud" },
    ],
  },
  {
    name: "Diet Plan",
    href: "/user/diet-plan",
    icon: Apple,
    children: [
      { name: "Diet Menu", href: "/user/diet-plan/menu" },
      { name: "Diet Details", href: "/user/diet-plan/details" },
    ],
  },
  { name: "Goals", href: "/user/goals", icon: Flag },
  { name: "My Schedule", href: "/user/schedule", icon: CalendarDays },
  { name: "Progress", href: "/user/progress", icon: BarChart3 },
  { name: "Profile", href: "/user/profile", icon: UserCircle2 },
  { name: "Authentication", href: "/dashboard/authentication", icon: ShieldCheck, children: [
    { name: "Sign In", href: "/dashboard/authentication/signin" },
    { name: "Sign Up", href: "/dashboard/authentication/signup" },
    { name: "Forgot Password", href: "/dashboard/authentication/forgot-password" },
    { name: "Reset Password", href: "/dashboard/authentication/reset-password" },
    { name: "Verify Email", href: "/dashboard/authentication/verify-email" },
    { name: "Verify Pin", href: "/dashboard/authentication/verify-pin" },
  ] },
  { name: "Step", href: "/dashboard/onboarding-step", icon: Footprints },
  { name: "Table", href: "/dashboard/table", icon: Table2, children: [
    { name: "Table", href: "/dashboard/table/basic" },
    { name: "Datatable", href: "/dashboard/table/datatable" },
    { name: "CRUD", href: "/dashboard/table/crud" },
  ] },

] satisfies NavItem[];

export function OrcishSidebar() {
  const pathname = usePathname();
  const { isDark } = useDashboardMode();
  const [isMobile, setIsMobile] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const [isHovered, setIsHovered] = React.useState(false);
  const [openMenus, setOpenMenus] = React.useState<Record<string, boolean>>({
    Workout: true,
    "Diet Plan": true,
    Table: true,
    Form: true,
    Authentication: true,
  });

  React.useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      if (mobile) {
        setIsMobileMenuOpen(false);
      }
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const isExpanded = isMobile ? isMobileMenuOpen : isHovered;
  const toggleMenu = (name: string) => {
    setOpenMenus((prev) => {
      const newMenus = { ...prev };
      // Close all other menus
      Object.keys(newMenus).forEach(key => {
        if (key !== name) {
          newMenus[key] = false;
        }
      });
      // Toggle the clicked menu
      newMenus[name] = !prev[name];
      return newMenus;
    });
  };

  return (
    <>
      {isMobile && isMobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/40"
          onClick={toggleMobileMenu}
        />
      )}

      <aside
        onMouseEnter={() => !isMobile && setIsHovered(true)}
        onMouseLeave={() => !isMobile && setIsHovered(false)}
        className={cn(
          "h-screen shrink-0 border-r transition-all duration-300",
          isExpanded ? "w-64" : "w-20",
          isDark ? "border-slate-800 bg-black" : "border-slate-200 bg-white",
          "flex flex-col px-4 py-5",
          isMobile
            ? isMobileMenuOpen
              ? "fixed left-0 top-0 z-50"
              : "fixed -left-full top-0 z-50"
            : "relative"
        )}
      >
        <div className="mb-8 flex items-center justify-between">
          <div className="flex items-center gap-2 overflow-hidden">
            <div className="h-8 w-8 rounded-xl overflow-hidden bg-orange-500">
              <img 
                src="/images/German Fitness without logo.png" 
                alt="German Fitness Logo" 
                className="h-full w-full object-cover"
              />
            </div>
            {isExpanded && (
              <span
                className={cn(
                  "text-xl font-semibold whitespace-nowrap",
                  isDark ? "text-slate-100" : "text-slate-700"
                )}
              >
                German Fitness
              </span>
            )}
          </div>
          {(isMobile || isExpanded) && (
            <button
              onClick={toggleMobileMenu}
              className={cn(
                "rounded-md p-2",
                isDark
                  ? "text-slate-400 hover:bg-slate-900"
                  : "text-slate-500 hover:bg-slate-100"
              )}
              aria-label="Close menu"
            >
              <X className="h-5 w-5" />
            </button>
          )}
        </div>

        <nav className="space-y-1 flex-1 overflow-y-auto scrollbar-thin scrollbar-orange">
          {navigation.map((item) => {
            const isActive =
              item.href === "/dashboard"
                ? pathname === "/dashboard" || pathname === "/user/dashboard"
                : pathname?.startsWith(item.href) ||
                  item.children?.some((child) => pathname?.startsWith(child.href));
            const isMenuOpen = Boolean(openMenus[item.name]);

            return (
              <div key={item.name}>
                {item.children && isExpanded ? (
                  <button
                    type="button"
                    title={!isExpanded ? item.name : undefined}
                    onClick={() => toggleMenu(item.name)}
                    className={cn(
                      "w-full flex items-center rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
                      "justify-start",
                      isActive
                        ? "bg-orange-500 text-white"
                        : isDark
                          ? "text-slate-300 hover:bg-slate-900"
                          : "text-slate-600 hover:bg-slate-100"
                    )}
                  >
                    <item.icon className="h-4 w-4" />
                    <span className="ml-3 whitespace-nowrap">{item.name}</span>
                    {isMenuOpen ? (
                      <ChevronDown className="ml-auto h-4 w-4" />
                    ) : (
                      <ChevronRight className="ml-auto h-4 w-4" />
                    )}
                  </button>
                ) : (
                  <Link
                    href={item.href}
                    title={!isExpanded ? item.name : undefined}
                    className={cn(
                      "flex items-center rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
                      isExpanded ? "justify-start" : "justify-center",
                      isActive
                        ? "bg-orange-500 text-white"
                        : isDark
                          ? "text-slate-300 hover:bg-slate-900"
                          : "text-slate-600 hover:bg-slate-100"
                    )}
                  >
                    <item.icon className="h-4 w-4" />
                    {isExpanded && <span className="ml-3 whitespace-nowrap">{item.name}</span>}
                  </Link>
                )}

                {item.children && isExpanded && isMenuOpen && (
                  <div className="mt-1 ml-8 space-y-1">
                    {item.children.map((child) => {
                      const isChildActive = pathname?.startsWith(child.href);
                      return (
                        <Link
                          key={child.name}
                          href={child.href}
                          className={cn(
                            "block rounded-md px-2 py-1.5 text-xs transition-colors",
                            isChildActive
                              ? "text-orange-500 font-medium"
                              : isDark
                                ? "text-slate-400 hover:text-slate-200"
                                : "text-slate-500 hover:text-slate-700"
                          )}
                        >
                          {child.name}
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        <div
          className={cn(
            "mt-auto rounded-2xl p-4 text-center",
            isDark ? "bg-slate-900" : "bg-orange-50"
          )}
        >
          <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-sm">
            <Crown className="h-6 w-6 text-orange-500" />
          </div>
          {isExpanded && (
            <>
              <p className={cn("text-sm font-semibold", isDark ? "text-slate-100" : "text-slate-700")}>
                Premium Membership
              </p>
              <p className={cn("mt-1 text-xs", isDark ? "text-slate-400" : "text-slate-500")}>
                Monitor progress and achieve goals faster
              </p>
              <button className="mt-3 w-full rounded-lg bg-orange-500 px-3 py-2 text-sm font-medium text-white hover:bg-orange-600">
                Upgrade
              </button>
            </>
          )}
        </div>
      </aside>

      {isMobile && !isMobileMenuOpen && (
        <button
          onClick={toggleMobileMenu}
          className={cn(
            "fixed left-4 top-4 z-30 rounded-lg border p-2 shadow-sm",
            isDark
              ? "border-slate-700 bg-slate-900"
              : "border-slate-200 bg-white"
          )}
          aria-label="Open navigation menu"
        >
          <Menu className={cn("h-5 w-5", isDark ? "text-slate-300" : "text-slate-600")} />
        </button>
      )}
    </>
  );
}
