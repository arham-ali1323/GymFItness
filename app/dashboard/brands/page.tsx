"use client";

import React from "react";
import { useDashboardMode } from "@/components/dashboard/dashboard-mode-provider";
import { cn } from "@/lib/utils";
import { Sparkles, Plus, Search } from "lucide-react";

const BrandsPage = () => {
  const { isDark } = useDashboardMode();

  const brands = [
    { id: 1, name: "Nike", productCount: 45, logo: "Nike" },
    { id: 2, name: "Adidas", productCount: 38, logo: "Adidas" },
    { id: 3, name: "Under Armour", productCount: 29, logo: "UA" },
    { id: 4, name: "Reebok", productCount: 22, logo: "Reebok" },
  ];

  return (
    <div className="min-h-screen p-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className={cn("text-4xl font-bold mb-2", isDark ? "text-slate-100" : "text-slate-900")}>
            Brands
          </h1>
          <p className={cn("text-lg", isDark ? "text-slate-400" : "text-slate-600")}>
            Manage product brands
          </p>
        </div>

        <div className={cn("rounded-2xl p-6 shadow-lg border", isDark ? "bg-slate-900 border-slate-800" : "bg-white border-slate-200")}>
          <div className="flex items-center justify-between mb-6">
            <div className={cn("relative", isDark ? "bg-slate-800" : "bg-white")}>
              <Search className={cn("absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5", isDark ? "text-slate-400" : "text-slate-500")} />
              <input
                type="text"
                placeholder="Search brands..."
                className={cn("pl-10 pr-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-orange-500", isDark ? "bg-slate-900 text-slate-100 border-slate-700" : "bg-white text-slate-900 border-slate-300")}
              />
            </div>
            <button className="flex items-center gap-2 bg-orange-500 px-4 py-2 rounded-lg text-white font-medium hover:bg-orange-600 transition-colors">
              <Plus className="w-4 h-4" />
              Add Brand
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {brands.map((brand) => (
              <div key={brand.id} className={cn("rounded-xl p-6 border text-center", isDark ? "bg-slate-800 border-slate-700" : "bg-slate-50 border-slate-200")}>
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="w-8 h-8 text-white" />
                </div>
                <h3 className={cn("text-lg font-semibold mb-2", isDark ? "text-slate-200" : "text-slate-900")}>
                  {brand.name}
                </h3>
                <p className={cn("text-sm mb-4", isDark ? "text-slate-400" : "text-slate-600")}>
                  {brand.productCount} products
                </p>
                <div className="flex gap-2">
                  <button className="flex-1 text-sm font-medium text-orange-500 hover:text-orange-600">Edit</button>
                  <button className="flex-1 text-sm font-medium text-red-500 hover:text-red-600">Delete</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandsPage;
