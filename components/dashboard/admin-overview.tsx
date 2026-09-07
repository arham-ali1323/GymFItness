"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Package,
  ShoppingCart,
  Users,
  DollarSign,
  AlertTriangle,
  TrendingUp,
  TrendingDown,
  ArrowUpRight,
  ArrowDownRight,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useDashboardMode } from "@/components/dashboard/dashboard-mode-provider";

const AdminOverview = () => {
  const { isDark } = useDashboardMode();

  const stats = [
    {
      title: "Total Products",
      value: "1,234",
      change: "+12.5%",
      trend: "up",
      icon: Package,
      color: "from-blue-500 to-blue-600",
    },
    {
      title: "Total Orders",
      value: "856",
      change: "+8.2%",
      trend: "up",
      icon: ShoppingCart,
      color: "from-green-500 to-green-600",
    },
    {
      title: "Total Customers",
      value: "2,456",
      change: "+15.3%",
      trend: "up",
      icon: Users,
      color: "from-purple-500 to-purple-600",
    },
    {
      title: "Total Sales",
      value: "$45,678",
      change: "+23.1%",
      trend: "up",
      icon: DollarSign,
      color: "from-orange-500 to-orange-600",
    },
    {
      title: "Low Stock",
      value: "23",
      change: "-5.2%",
      trend: "down",
      icon: AlertTriangle,
      color: "from-red-500 to-red-600",
    },
  ];

  const recentOrders = [
    { id: "#ORD-001", customer: "John Doe", product: "Protein Powder", amount: "$45.00", status: "Completed" },
    { id: "#ORD-002", customer: "Jane Smith", product: "Dumbbells Set", amount: "$120.00", status: "Pending" },
    { id: "#ORD-003", customer: "Bob Johnson", product: "Yoga Mat", amount: "$35.00", status: "Completed" },
    { id: "#ORD-004", customer: "Alice Brown", product: "Resistance Bands", amount: "$25.00", status: "Processing" },
    { id: "#ORD-005", customer: "Charlie Wilson", product: "Water Bottle", amount: "$15.00", status: "Completed" },
  ];

  const topProducts = [
    { name: "Protein Powder", sales: 234, revenue: "$10,530" },
    { name: "Dumbbells Set", sales: 156, revenue: "$18,720" },
    { name: "Yoga Mat", sales: 189, revenue: "$6,615" },
    { name: "Resistance Bands", sales: 267, revenue: "$6,675" },
    { name: "Water Bottle", sales: 312, revenue: "$4,680" },
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
        {/* Header */}
        <div className="mb-8">
          <h1
            className={cn(
              "text-4xl font-bold mb-2",
              isDark ? "text-slate-100" : "text-slate-900",
            )}
          >
            Admin Dashboard
          </h1>
          <p
            className={cn(
              "text-lg",
              isDark ? "text-slate-400" : "text-slate-600",
            )}
          >
            Overview of your store performance
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={cn(
                  "rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border",
                  isDark ? "bg-slate-900 border-slate-800" : "bg-white border-slate-200",
                )}
              >
                <div className="flex items-center justify-between mb-4">
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-r ${stat.color} flex items-center justify-center`}
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div
                    className={cn(
                      "flex items-center gap-1 text-sm font-medium",
                      stat.trend === "up" ? "text-green-500" : "text-red-500",
                    )}
                  >
                    {stat.trend === "up" ? (
                      <ArrowUpRight className="w-4 h-4" />
                    ) : (
                      <ArrowDownRight className="w-4 h-4" />
                    )}
                    {stat.change}
                  </div>
                </div>

                <h3
                  className={cn(
                    "text-2xl font-bold mb-1",
                    isDark ? "text-slate-100" : "text-slate-900",
                  )}
                >
                  {stat.value}
                </h3>
                <p
                  className={cn(
                    "text-sm",
                    isDark ? "text-slate-400" : "text-slate-600",
                  )}
                >
                  {stat.title}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Recent Orders & Top Products */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Recent Orders */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className={cn(
              "rounded-2xl p-6 shadow-lg border",
              isDark ? "bg-slate-900 border-slate-800" : "bg-white border-slate-200",
            )}
          >
            <div className="flex items-center justify-between mb-6">
              <h3
                className={cn(
                  "text-lg font-semibold",
                  isDark ? "text-slate-100" : "text-slate-900",
                )}
              >
                Recent Orders
              </h3>
              <button
                className={cn(
                  "text-sm font-medium",
                  isDark ? "text-orange-300 hover:text-orange-200" : "text-orange-600 hover:text-orange-700",
                )}
              >
                View All
              </button>
            </div>
            <div className="space-y-4">
              {recentOrders.map((order, index) => (
                <div
                  key={index}
                  className={cn(
                    "flex items-center justify-between p-4 rounded-lg",
                    isDark ? "bg-slate-800" : "bg-slate-50",
                  )}
                >
                  <div className="flex-1">
                    <p
                      className={cn(
                        "text-sm font-medium",
                        isDark ? "text-slate-200" : "text-slate-900",
                      )}
                    >
                      {order.customer}
                    </p>
                    <p
                      className={cn(
                        "text-xs",
                        isDark ? "text-slate-400" : "text-slate-500",
                      )}
                    >
                      {order.product}
                    </p>
                  </div>
                  <div className="text-right">
                    <p
                      className={cn(
                        "text-sm font-medium",
                        isDark ? "text-slate-200" : "text-slate-900",
                      )}
                    >
                      {order.amount}
                    </p>
                    <span
                      className={cn(
                        "text-xs px-2 py-1 rounded-full",
                        getStatusColor(order.status),
                      )}
                    >
                      {order.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Top Products */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
            className={cn(
              "rounded-2xl p-6 shadow-lg border",
              isDark ? "bg-slate-900 border-slate-800" : "bg-white border-slate-200",
            )}
          >
            <div className="flex items-center justify-between mb-6">
              <h3
                className={cn(
                  "text-lg font-semibold",
                  isDark ? "text-slate-100" : "text-slate-900",
                )}
              >
                Top Products
              </h3>
              <button
                className={cn(
                  "text-sm font-medium",
                  isDark ? "text-orange-300 hover:text-orange-200" : "text-orange-600 hover:text-orange-700",
                )}
              >
                View All
              </button>
            </div>
            <div className="space-y-4">
              {topProducts.map((product, index) => (
                <div
                  key={index}
                  className={cn(
                    "flex items-center justify-between p-4 rounded-lg",
                    isDark ? "bg-slate-800" : "bg-slate-50",
                  )}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={cn(
                        "w-10 h-10 rounded-lg flex items-center justify-center text-sm font-bold",
                        isDark ? "bg-slate-700 text-slate-300" : "bg-slate-200 text-slate-700",
                      )}
                    >
                      {index + 1}
                    </div>
                    <div>
                      <p
                        className={cn(
                          "text-sm font-medium",
                          isDark ? "text-slate-200" : "text-slate-900",
                        )}
                      >
                        {product.name}
                      </p>
                      <p
                        className={cn(
                          "text-xs",
                          isDark ? "text-slate-400" : "text-slate-500",
                        )}
                      >
                        {product.sales} sold
                      </p>
                    </div>
                  </div>
                  <p
                    className={cn(
                      "text-sm font-medium",
                      isDark ? "text-slate-200" : "text-slate-900",
                    )}
                  >
                    {product.revenue}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AdminOverview;
