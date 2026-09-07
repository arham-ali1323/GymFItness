"use client";

import React from "react";
import { useDashboardMode } from "@/components/dashboard/dashboard-mode-provider";
import { cn } from "@/lib/utils";
import { Users, Plus, Search } from "lucide-react";

const CustomersPage = () => {
  const { isDark } = useDashboardMode();

  const customers = [
    { id: 1, name: "John Doe", email: "john@example.com", orders: 12, totalSpent: "$540.00" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", orders: 8, totalSpent: "$320.00" },
    { id: 3, name: "Bob Johnson", email: "bob@example.com", orders: 15, totalSpent: "$750.00" },
    { id: 4, name: "Alice Brown", email: "alice@example.com", orders: 5, totalSpent: "$180.00" },
  ];

  return (
    <div className="min-h-screen p-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className={cn("text-4xl font-bold mb-2", isDark ? "text-slate-100" : "text-slate-900")}>
            Customers
          </h1>
          <p className={cn("text-lg", isDark ? "text-slate-400" : "text-slate-600")}>
            Manage customer accounts
          </p>
        </div>

        <div className={cn("rounded-2xl p-6 shadow-lg border", isDark ? "bg-slate-900 border-slate-800" : "bg-white border-slate-200")}>
          <div className="flex items-center justify-between mb-6">
            <div className={cn("relative", isDark ? "bg-slate-800" : "bg-white")}>
              <Search className={cn("absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5", isDark ? "text-slate-400" : "text-slate-500")} />
              <input
                type="text"
                placeholder="Search customers..."
                className={cn("pl-10 pr-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-orange-500", isDark ? "bg-slate-900 text-slate-100 border-slate-700" : "bg-white text-slate-900 border-slate-300")}
              />
            </div>
            <button className="flex items-center gap-2 bg-orange-500 px-4 py-2 rounded-lg text-white font-medium hover:bg-orange-600 transition-colors">
              <Plus className="w-4 h-4" />
              Add Customer
            </button>
          </div>

          <table className="w-full">
            <thead>
              <tr className={cn("border-b", isDark ? "border-slate-700" : "border-slate-200")}>
                <th className={cn("text-left py-3 px-4 text-sm font-semibold", isDark ? "text-slate-300" : "text-slate-700")}>ID</th>
                <th className={cn("text-left py-3 px-4 text-sm font-semibold", isDark ? "text-slate-300" : "text-slate-700")}>Name</th>
                <th className={cn("text-left py-3 px-4 text-sm font-semibold", isDark ? "text-slate-300" : "text-slate-700")}>Email</th>
                <th className={cn("text-left py-3 px-4 text-sm font-semibold", isDark ? "text-slate-300" : "text-slate-700")}>Orders</th>
                <th className={cn("text-left py-3 px-4 text-sm font-semibold", isDark ? "text-slate-300" : "text-slate-700")}>Total Spent</th>
                <th className={cn("text-left py-3 px-4 text-sm font-semibold", isDark ? "text-slate-300" : "text-slate-700")}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {customers.map((customer) => (
                <tr key={customer.id} className={cn("border-b", isDark ? "border-slate-800" : "border-slate-100")}>
                  <td className={cn("py-3 px-4 text-sm", isDark ? "text-slate-300" : "text-slate-700")}>{customer.id}</td>
                  <td className={cn("py-3 px-4 text-sm font-medium", isDark ? "text-slate-200" : "text-slate-900")}>{customer.name}</td>
                  <td className={cn("py-3 px-4 text-sm", isDark ? "text-slate-300" : "text-slate-700")}>{customer.email}</td>
                  <td className={cn("py-3 px-4 text-sm", isDark ? "text-slate-300" : "text-slate-700")}>{customer.orders}</td>
                  <td className={cn("py-3 px-4 text-sm font-medium", isDark ? "text-slate-200" : "text-slate-900")}>{customer.totalSpent}</td>
                  <td className={cn("py-3 px-4 text-sm", isDark ? "text-slate-300" : "text-slate-700")}>
                    <button className="text-orange-500 hover:text-orange-600 mr-2">View</button>
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

export default CustomersPage;
