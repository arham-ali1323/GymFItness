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
  BarChart3,
  UserCircle2,
  FileText,
  Package,
  ShoppingCart,
  Users,
  Settings,
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
  { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { name: "Products", href: "/dashboard/products", icon: Package },
  { name: "Categories", href: "/dashboard/categories", icon: Layers3 },
  { name: "Brands", href: "/dashboard/brands", icon: Sparkles },
  { name: "Orders", href: "/dashboard/orders", icon: ShoppingCart },
  { name: "Customers", href: "/dashboard/customers", icon: Users },
  { name: "Inventory", href: "/dashboard/inventory", icon: BarChart3 },
  { name: "Settings", href: "/dashboard/settings", icon: Settings },
] satisfies NavItem[];

export function OrcishSidebar() {
  const pathname = usePathname();
  const { isDark } = useDashboardMode();
  const [isMobile, setIsMobile] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const [isHovered, setIsHovered] = React.useState(false);
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
            const isActive = pathname === item.href || pathname?.startsWith(item.href);

            return (
              <Link
                key={item.name}
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
