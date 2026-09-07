"use client";

import React from "react";
import { useDashboardMode } from "@/components/dashboard/dashboard-mode-provider";
import { cn } from "@/lib/utils";
import { Settings, Save, Bell, Lock, Globe, Palette } from "lucide-react";

const SettingsPage = () => {
  const { isDark, toggleMode } = useDashboardMode();

  return (
    <div className="min-h-screen p-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className={cn("text-4xl font-bold mb-2", isDark ? "text-slate-100" : "text-slate-900")}>
            Settings
          </h1>
          <p className={cn("text-lg", isDark ? "text-slate-400" : "text-slate-600")}>
            Manage your store settings
          </p>
        </div>

        <div className="space-y-6">
          {/* General Settings */}
          <div className={cn("rounded-2xl p-6 shadow-lg border", isDark ? "bg-slate-900 border-slate-800" : "bg-white border-slate-200")}>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-orange-500 flex items-center justify-center">
                <Globe className="w-5 h-5 text-white" />
              </div>
              <h2 className={cn("text-xl font-semibold", isDark ? "text-slate-200" : "text-slate-900")}>
                General Settings
              </h2>
            </div>
            <div className="space-y-4">
              <div>
                <label className={cn("block text-sm font-medium mb-2", isDark ? "text-slate-300" : "text-slate-700")}>
                  Store Name
                </label>
                <input
                  type="text"
                  defaultValue="German Fitness"
                  className={cn("w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-orange-500", isDark ? "bg-slate-800 text-slate-100 border-slate-700" : "bg-white text-slate-900 border-slate-300")}
                />
              </div>
              <div>
                <label className={cn("block text-sm font-medium mb-2", isDark ? "text-slate-300" : "text-slate-700")}>
                  Store Email
                </label>
                <input
                  type="email"
                  defaultValue="germanfitness@email.com"
                  className={cn("w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-orange-500", isDark ? "bg-slate-800 text-slate-100 border-slate-700" : "bg-white text-slate-900 border-slate-300")}
                />
              </div>
            </div>
          </div>

          {/* Appearance Settings */}
          <div className={cn("rounded-2xl p-6 shadow-lg border", isDark ? "bg-slate-900 border-slate-800" : "bg-white border-slate-200")}>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-purple-500 flex items-center justify-center">
                <Palette className="w-5 h-5 text-white" />
              </div>
              <h2 className={cn("text-xl font-semibold", isDark ? "text-slate-200" : "text-slate-900")}>
                Appearance
              </h2>
            </div>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <label className={cn("block text-sm font-medium mb-1", isDark ? "text-slate-300" : "text-slate-700")}>
                    Dark Mode
                  </label>
                  <p className={cn("text-sm", isDark ? "text-slate-400" : "text-slate-600")}>
                    Toggle dark mode for the dashboard
                  </p>
                </div>
                <button
                  onClick={toggleMode}
                  className={cn(
                    "relative inline-flex h-6 w-11 items-center rounded-full transition-colors",
                    isDark ? "bg-orange-500" : "bg-slate-300"
                  )}
                >
                  <span
                    className={cn(
                      "inline-block h-4 w-4 transform rounded-full bg-white transition-transform",
                      isDark ? "translate-x-6" : "translate-x-1"
                    )}
                  />
                </button>
              </div>
            </div>
          </div>

          {/* Notification Settings */}
          <div className={cn("rounded-2xl p-6 shadow-lg border", isDark ? "bg-slate-900 border-slate-800" : "bg-white border-slate-200")}>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-blue-500 flex items-center justify-center">
                <Bell className="w-5 h-5 text-white" />
              </div>
              <h2 className={cn("text-xl font-semibold", isDark ? "text-slate-200" : "text-slate-900")}>
                Notifications
              </h2>
            </div>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <label className={cn("block text-sm font-medium mb-1", isDark ? "text-slate-300" : "text-slate-700")}>
                    Email Notifications
                  </label>
                  <p className={cn("text-sm", isDark ? "text-slate-400" : "text-slate-600")}>
                    Receive email notifications for new orders
                  </p>
                </div>
                <input type="checkbox" defaultChecked className="w-5 h-5 text-orange-500 rounded" />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <label className={cn("block text-sm font-medium mb-1", isDark ? "text-slate-300" : "text-slate-700")}>
                    Low Stock Alerts
                  </label>
                  <p className={cn("text-sm", isDark ? "text-slate-400" : "text-slate-600")}>
                    Get notified when products are low in stock
                  </p>
                </div>
                <input type="checkbox" defaultChecked className="w-5 h-5 text-orange-500 rounded" />
              </div>
            </div>
          </div>

          {/* Security Settings */}
          <div className={cn("rounded-2xl p-6 shadow-lg border", isDark ? "bg-slate-900 border-slate-800" : "bg-white border-slate-200")}>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-green-500 flex items-center justify-center">
                <Lock className="w-5 h-5 text-white" />
              </div>
              <h2 className={cn("text-xl font-semibold", isDark ? "text-slate-200" : "text-slate-900")}>
                Security
              </h2>
            </div>
            <div className="space-y-4">
              <div>
                <label className={cn("block text-sm font-medium mb-2", isDark ? "text-slate-300" : "text-slate-700")}>
                  Admin Password
                </label>
                <input
                  type="password"
                  placeholder="Enter new password"
                  className={cn("w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-orange-500", isDark ? "bg-slate-800 text-slate-100 border-slate-700" : "bg-white text-slate-900 border-slate-300")}
                />
              </div>
              <div>
                <label className={cn("block text-sm font-medium mb-2", isDark ? "text-slate-300" : "text-slate-700")}>
                  Confirm Password
                </label>
                <input
                  type="password"
                  placeholder="Confirm new password"
                  className={cn("w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-orange-500", isDark ? "bg-slate-800 text-slate-100 border-slate-700" : "bg-white text-slate-900 border-slate-300")}
                />
              </div>
            </div>
          </div>

          {/* Save Button */}
          <div className="flex justify-end">
            <button className="flex items-center gap-2 bg-orange-500 px-6 py-3 rounded-lg text-white font-medium hover:bg-orange-600 transition-colors">
              <Save className="w-4 h-4" />
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
