"use client";

import React, { useState } from 'react';
import { cn } from "@/lib/utils";
import { useDashboardMode } from "@/components/dashboard/dashboard-mode-provider";

const TableBasic = () => {
  const { isDark } = useDashboardMode();
  const [searchTerm, setSearchTerm] = useState('');

  const tableData = [
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin', status: 'Active', joinDate: '2023-01-15' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'User', status: 'Active', joinDate: '2023-02-20' },
    { id: 3, name: 'Bob Johnson', email: 'bob@example.com', role: 'Editor', status: 'Inactive', joinDate: '2023-03-10' },
    { id: 4, name: 'Alice Brown', email: 'alice@example.com', role: 'User', status: 'Active', joinDate: '2023-04-05' },
    { id: 5, name: 'Charlie Wilson', email: 'charlie@example.com', role: 'Admin', status: 'Active', joinDate: '2023-05-12' },
    { id: 6, name: 'Diana Lee', email: 'diana@example.com', role: 'Editor', status: 'Active', joinDate: '2023-06-18' },
    { id: 7, name: 'Edward Davis', email: 'edward@example.com', role: 'User', status: 'Inactive', joinDate: '2023-07-22' },
    { id: 8, name: 'Fiona Martinez', email: 'fiona@example.com', role: 'Admin', status: 'Active', joinDate: '2023-08-30' },
  ];

  const filteredData = tableData.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.role.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className={cn("min-h-screen p-6", isDark ? "bg-black" : "bg-slate-100")}>
      <div className={cn("rounded-2xl p-6 shadow-lg border", isDark ? "bg-slate-900 border-slate-800" : "bg-white border-slate-200")}>
        <div className="mb-6">
          <h1 className={cn("text-2xl font-bold mb-2", isDark ? "text-slate-100" : "text-slate-900")}>
            Basic Table
          </h1>
          <p className={cn("text-sm", isDark ? "text-slate-400" : "text-slate-600")}>
            Simple and clean table layout with basic functionality
          </p>
        </div>

        <div className="mb-4">
          <input
            type="text"
            placeholder="Search users..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className={cn(
              "w-full max-w-sm px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500",
              isDark
                ? "bg-slate-800 text-slate-100 border-slate-700 placeholder:text-slate-500"
                : "bg-white text-slate-900 border-slate-300 placeholder:text-slate-400"
            )}
          />
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className={cn("border-b", isDark ? "border-slate-700" : "border-slate-200")}>
                <th className={cn("text-left py-3 px-4 font-semibold text-sm", isDark ? "text-slate-300" : "text-slate-700")}>ID</th>
                <th className={cn("text-left py-3 px-4 font-semibold text-sm", isDark ? "text-slate-300" : "text-slate-700")}>Name</th>
                <th className={cn("text-left py-3 px-4 font-semibold text-sm", isDark ? "text-slate-300" : "text-slate-700")}>Email</th>
                <th className={cn("text-left py-3 px-4 font-semibold text-sm", isDark ? "text-slate-300" : "text-slate-700")}>Role</th>
                <th className={cn("text-left py-3 px-4 font-semibold text-sm", isDark ? "text-slate-300" : "text-slate-700")}>Status</th>
                <th className={cn("text-left py-3 px-4 font-semibold text-sm", isDark ? "text-slate-300" : "text-slate-700")}>Join Date</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((item) => (
                <tr key={item.id} className={cn("border-b transition-colors hover:bg-orange-50", isDark ? "border-slate-800 hover:bg-slate-800/50" : "border-slate-100")}>
                  <td className={cn("py-3 px-4 text-sm", isDark ? "text-slate-300" : "text-slate-700")}>{item.id}</td>
                  <td className={cn("py-3 px-4 text-sm font-medium", isDark ? "text-slate-100" : "text-slate-900")}>{item.name}</td>
                  <td className={cn("py-3 px-4 text-sm", isDark ? "text-slate-300" : "text-slate-700")}>{item.email}</td>
                  <td className={cn("py-3 px-4 text-sm", isDark ? "text-slate-300" : "text-slate-700")}>
                    <span className={cn(
                      "px-2 py-1 rounded-full text-xs font-medium",
                      item.role === 'Admin' ? "bg-purple-100 text-purple-800" :
                      item.role === 'Editor' ? "bg-blue-100 text-blue-800" :
                      "bg-gray-100 text-gray-800"
                    )}>
                      {item.role}
                    </span>
                  </td>
                  <td className={cn("py-3 px-4 text-sm", isDark ? "text-slate-300" : "text-slate-700")}>
                    <span className={cn(
                      "px-2 py-1 rounded-full text-xs font-medium",
                      item.status === 'Active' ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                    )}>
                      {item.status}
                    </span>
                  </td>
                  <td className={cn("py-3 px-4 text-sm", isDark ? "text-slate-300" : "text-slate-700")}>{item.joinDate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-4 flex items-center justify-between">
          <p className={cn("text-sm", isDark ? "text-slate-400" : "text-slate-600")}>
            Showing {filteredData.length} of {tableData.length} results
          </p>
          <div className="flex gap-2">
            <button className={cn(
              "px-3 py-1 rounded text-sm border transition-colors",
              isDark ? "border-slate-700 text-slate-300 hover:bg-slate-800" : "border-slate-300 text-slate-700 hover:bg-slate-50"
            )}>
              Previous
            </button>
            <button className={cn(
              "px-3 py-1 rounded text-sm border transition-colors",
              isDark ? "border-slate-700 text-slate-300 hover:bg-slate-800" : "border-slate-300 text-slate-700 hover:bg-slate-50"
            )}>
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TableBasic;
