"use client";

import React from "react";
import { useDashboardMode } from "@/components/dashboard/dashboard-mode-provider";
import { cn } from "@/lib/utils";
import { BarChart3, AlertTriangle, Search } from "lucide-react";

const InventoryPage = () => {
  const { isDark } = useDashboardMode();

  const inventory = [
    { id: 1, product: "Protein Powder", sku: "SKU-001", quantity: 234, minStock: 50, status: "In Stock" },
    { id: 2, product: "Dumbbells Set", sku: "SKU-002", quantity: 56, minStock: 30, status: "In Stock" },
    { id: 3, product: "Yoga Mat", sku: "SKU-003", quantity: 189, minStock: 40, status: "In Stock" },
    { id: 4, product: "Resistance Bands", sku: "SKU-004", quantity: 12, minStock: 20, status: "Low Stock" },
    { id: 5, product: "Water Bottle", sku: "SKU-005", quantity: 312, minStock: 50, status: "In Stock" },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "In Stock":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200";
      case "Low Stock":
        return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200";
    }
  };

  return (
    <div className="min-h-screen p-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className={cn("text-4xl font-bold mb-2", isDark ? "text-slate-100" : "text-slate-900")}>
            Inventory
          </h1>
          <p className={cn("text-lg", isDark ? "text-slate-400" : "text-slate-600")}>
            Manage stock levels and inventory
          </p>
        </div>

        <div className={cn("rounded-2xl p-6 shadow-lg border mb-6", isDark ? "bg-slate-900 border-slate-800" : "bg-white border-slate-200")}>
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 rounded-lg bg-red-500 flex items-center justify-center">
              <AlertTriangle className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className={cn("text-lg font-semibold", isDark ? "text-slate-200" : "text-slate-900")}>Low Stock Alert</h3>
              <p className={cn("text-sm", isDark ? "text-slate-400" : "text-slate-600")}>2 products need restocking</p>
            </div>
          </div>
        </div>

        <div className={cn("rounded-2xl p-6 shadow-lg border", isDark ? "bg-slate-900 border-slate-800" : "bg-white border-slate-200")}>
          <div className="flex items-center justify-between mb-6">
            <div className={cn("relative", isDark ? "bg-slate-800" : "bg-white")}>
              <Search className={cn("absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5", isDark ? "text-slate-400" : "text-slate-500")} />
              <input
                type="text"
                placeholder="Search inventory..."
                className={cn("pl-10 pr-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-orange-500", isDark ? "bg-slate-900 text-slate-100 border-slate-700" : "bg-white text-slate-900 border-slate-300")}
              />
            </div>
          </div>

          <table className="w-full">
            <thead>
              <tr className={cn("border-b", isDark ? "border-slate-700" : "border-slate-200")}>
                <th className={cn("text-left py-3 px-4 text-sm font-semibold", isDark ? "text-slate-300" : "text-slate-700")}>ID</th>
                <th className={cn("text-left py-3 px-4 text-sm font-semibold", isDark ? "text-slate-300" : "text-slate-700")}>Product</th>
                <th className={cn("text-left py-3 px-4 text-sm font-semibold", isDark ? "text-slate-300" : "text-slate-700")}>SKU</th>
                <th className={cn("text-left py-3 px-4 text-sm font-semibold", isDark ? "text-slate-300" : "text-slate-700")}>Quantity</th>
                <th className={cn("text-left py-3 px-4 text-sm font-semibold", isDark ? "text-slate-300" : "text-slate-700")}>Min Stock</th>
                <th className={cn("text-left py-3 px-4 text-sm font-semibold", isDark ? "text-slate-300" : "text-slate-700")}>Status</th>
                <th className={cn("text-left py-3 px-4 text-sm font-semibold", isDark ? "text-slate-300" : "text-slate-700")}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {inventory.map((item) => (
                <tr key={item.id} className={cn("border-b", isDark ? "border-slate-800" : "border-slate-100")}>
                  <td className={cn("py-3 px-4 text-sm", isDark ? "text-slate-300" : "text-slate-700")}>{item.id}</td>
                  <td className={cn("py-3 px-4 text-sm font-medium", isDark ? "text-slate-200" : "text-slate-900")}>{item.product}</td>
                  <td className={cn("py-3 px-4 text-sm", isDark ? "text-slate-300" : "text-slate-700")}>{item.sku}</td>
                  <td className={cn("py-3 px-4 text-sm font-medium", isDark ? "text-slate-200" : "text-slate-900")}>{item.quantity}</td>
                  <td className={cn("py-3 px-4 text-sm", isDark ? "text-slate-300" : "text-slate-700")}>{item.minStock}</td>
                  <td className={cn("py-3 px-4 text-sm")}>
                    <span className={cn("text-xs px-2 py-1 rounded-full", getStatusColor(item.status))}>
                      {item.status}
                    </span>
                  </td>
                  <td className={cn("py-3 px-4 text-sm", isDark ? "text-slate-300" : "text-slate-700")}>
                    <button className="text-orange-500 hover:text-orange-600 mr-2">Restock</button>
                    <button className="text-blue-500 hover:text-blue-600">Edit</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default InventoryPage;
