"use client";

import React from "react";
import { useDashboardMode } from "@/components/dashboard/dashboard-mode-provider";
import { cn } from "@/lib/utils";
import { Package, Plus, Search, Filter } from "lucide-react";

const ProductsPage = () => {
  const { isDark } = useDashboardMode();

  const products = [
    { id: 1, name: "Protein Powder", category: "Supplements", price: "$45.00", stock: 234, status: "In Stock" },
    { id: 2, name: "Dumbbells Set", category: "Equipment", price: "$120.00", stock: 56, status: "In Stock" },
    { id: 3, name: "Yoga Mat", category: "Accessories", price: "$35.00", stock: 189, status: "In Stock" },
    { id: 4, name: "Resistance Bands", category: "Accessories", price: "$25.00", stock: 12, status: "Low Stock" },
    { id: 5, name: "Water Bottle", category: "Accessories", price: "$15.00", stock: 312, status: "In Stock" },
  ];

  return (
    <div className="min-h-screen p-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className={cn("text-4xl font-bold mb-2", isDark ? "text-slate-100" : "text-slate-900")}>
            Products
          </h1>
          <p className={cn("text-lg", isDark ? "text-slate-400" : "text-slate-600")}>
            Manage your product inventory
          </p>
        </div>

        <div className={cn("rounded-2xl p-6 shadow-lg border", isDark ? "bg-slate-900 border-slate-800" : "bg-white border-slate-200")}>
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-4">
              <div className={cn("relative", isDark ? "bg-slate-800" : "bg-white")}>
                <Search className={cn("absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5", isDark ? "text-slate-400" : "text-slate-500")} />
                <input
                  type="text"
                  placeholder="Search products..."
                  className={cn("pl-10 pr-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-orange-500", isDark ? "bg-slate-900 text-slate-100 border-slate-700" : "bg-white text-slate-900 border-slate-300")}
                />
              </div>
              <button className={cn("flex items-center gap-2 px-4 py-2 rounded-lg border", isDark ? "bg-slate-800 border-slate-700 text-slate-300" : "bg-white border-slate-300 text-slate-700")}>
                <Filter className="w-4 h-4" />
                Filter
              </button>
            </div>
            <button className="flex items-center gap-2 bg-orange-500 px-4 py-2 rounded-lg text-white font-medium hover:bg-orange-600 transition-colors">
              <Plus className="w-4 h-4" />
              Add Product
            </button>
          </div>

          <table className="w-full">
            <thead>
              <tr className={cn("border-b", isDark ? "border-slate-700" : "border-slate-200")}>
                <th className={cn("text-left py-3 px-4 text-sm font-semibold", isDark ? "text-slate-300" : "text-slate-700")}>ID</th>
                <th className={cn("text-left py-3 px-4 text-sm font-semibold", isDark ? "text-slate-300" : "text-slate-700")}>Name</th>
                <th className={cn("text-left py-3 px-4 text-sm font-semibold", isDark ? "text-slate-300" : "text-slate-700")}>Category</th>
                <th className={cn("text-left py-3 px-4 text-sm font-semibold", isDark ? "text-slate-300" : "text-slate-700")}>Price</th>
                <th className={cn("text-left py-3 px-4 text-sm font-semibold", isDark ? "text-slate-300" : "text-slate-700")}>Stock</th>
                <th className={cn("text-left py-3 px-4 text-sm font-semibold", isDark ? "text-slate-300" : "text-slate-700")}>Status</th>
                <th className={cn("text-left py-3 px-4 text-sm font-semibold", isDark ? "text-slate-300" : "text-slate-700")}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product.id} className={cn("border-b", isDark ? "border-slate-800" : "border-slate-100")}>
                  <td className={cn("py-3 px-4 text-sm", isDark ? "text-slate-300" : "text-slate-700")}>{product.id}</td>
                  <td className={cn("py-3 px-4 text-sm font-medium", isDark ? "text-slate-200" : "text-slate-900")}>{product.name}</td>
                  <td className={cn("py-3 px-4 text-sm", isDark ? "text-slate-300" : "text-slate-700")}>{product.category}</td>
                  <td className={cn("py-3 px-4 text-sm font-medium", isDark ? "text-slate-200" : "text-slate-900")}>{product.price}</td>
                  <td className={cn("py-3 px-4 text-sm", isDark ? "text-slate-300" : "text-slate-700")}>{product.stock}</td>
                  <td className={cn("py-3 px-4 text-sm", product.status === "Low Stock" ? "text-red-500" : "text-green-500")}>{product.status}</td>
                  <td className={cn("py-3 px-4 text-sm", isDark ? "text-slate-300" : "text-slate-700")}>
                    <button className="text-orange-500 hover:text-orange-600 mr-2">Edit</button>
                    <button className="text-red-500 hover:text-red-600">Delete</button>
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

export default ProductsPage;
