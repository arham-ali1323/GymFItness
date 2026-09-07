"use client";

import React from "react";
import { useDashboardMode } from "@/components/dashboard/dashboard-mode-provider";
import { cn } from "@/lib/utils";
import { ShoppingCart, Search, Filter } from "lucide-react";

const OrdersPage = () => {
  const { isDark } = useDashboardMode();

  const orders = [
    { id: "#ORD-001", customer: "John Doe", date: "2024-01-15", amount: "$45.00", status: "Completed" },
    { id: "#ORD-002", customer: "Jane Smith", date: "2024-01-15", amount: "$120.00", status: "Pending" },
    { id: "#ORD-003", customer: "Bob Johnson", date: "2024-01-14", amount: "$35.00", status: "Completed" },
    { id: "#ORD-004", customer: "Alice Brown", date: "2024-01-14", amount: "$25.00", status: "Processing" },
    { id: "#ORD-005", customer: "Charlie Wilson", date: "2024-01-13", amount: "$15.00", status: "Completed" },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200";
      case "Pending":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200";
      case "Processing":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200";
    }
  };

  return (
    <div className="min-h-screen p-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className={cn("text-4xl font-bold mb-2", isDark ? "text-slate-100" : "text-slate-900")}>
            Orders
          </h1>
          <p className={cn("text-lg", isDark ? "text-slate-400" : "text-slate-600")}>
            Manage customer orders
          </p>
        </div>

        <div className={cn("rounded-2xl p-6 shadow-lg border", isDark ? "bg-slate-900 border-slate-800" : "bg-white border-slate-200")}>
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-4">
              <div className={cn("relative", isDark ? "bg-slate-800" : "bg-white")}>
                <Search className={cn("absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5", isDark ? "text-slate-400" : "text-slate-500")} />
                <input
                  type="text"
                  placeholder="Search orders..."
                  className={cn("pl-10 pr-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-orange-500", isDark ? "bg-slate-900 text-slate-100 border-slate-700" : "bg-white text-slate-900 border-slate-300")}
                />
              </div>
              <button className={cn("flex items-center gap-2 px-4 py-2 rounded-lg border", isDark ? "bg-slate-800 border-slate-700 text-slate-300" : "bg-white border-slate-300 text-slate-700")}>
                <Filter className="w-4 h-4" />
                Filter
              </button>
            </div>
          </div>

          <table className="w-full">
            <thead>
              <tr className={cn("border-b", isDark ? "border-slate-700" : "border-slate-200")}>
                <th className={cn("text-left py-3 px-4 text-sm font-semibold", isDark ? "text-slate-300" : "text-slate-700")}>Order ID</th>
                <th className={cn("text-left py-3 px-4 text-sm font-semibold", isDark ? "text-slate-300" : "text-slate-700")}>Customer</th>
                <th className={cn("text-left py-3 px-4 text-sm font-semibold", isDark ? "text-slate-300" : "text-slate-700")}>Date</th>
                <th className={cn("text-left py-3 px-4 text-sm font-semibold", isDark ? "text-slate-300" : "text-slate-700")}>Amount</th>
                <th className={cn("text-left py-3 px-4 text-sm font-semibold", isDark ? "text-slate-300" : "text-slate-700")}>Status</th>
                <th className={cn("text-left py-3 px-4 text-sm font-semibold", isDark ? "text-slate-300" : "text-slate-700")}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order.id} className={cn("border-b", isDark ? "border-slate-800" : "border-slate-100")}>
                  <td className={cn("py-3 px-4 text-sm font-medium", isDark ? "text-slate-200" : "text-slate-900")}>{order.id}</td>
                  <td className={cn("py-3 px-4 text-sm", isDark ? "text-slate-300" : "text-slate-700")}>{order.customer}</td>
                  <td className={cn("py-3 px-4 text-sm", isDark ? "text-slate-300" : "text-slate-700")}>{order.date}</td>
                  <td className={cn("py-3 px-4 text-sm font-medium", isDark ? "text-slate-200" : "text-slate-900")}>{order.amount}</td>
                  <td className={cn("py-3 px-4 text-sm")}>
                    <span className={cn("text-xs px-2 py-1 rounded-full", getStatusColor(order.status))}>
                      {order.status}
                    </span>
                  </td>
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

export default OrdersPage;
