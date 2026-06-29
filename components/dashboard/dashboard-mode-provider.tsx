"use client";

import React from "react";

type DashboardMode = "dark" | "light";

type DashboardModeContextType = {
  mode: DashboardMode;
  isDark: boolean;
  toggleMode: () => void;
  setMode: (mode: DashboardMode) => void;
};

const DashboardModeContext = React.createContext<DashboardModeContextType | undefined>(
  undefined
);

const STORAGE_KEY = "dashboard_mode";

export function DashboardModeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mode, setMode] = React.useState<DashboardMode>("dark");

  React.useEffect(() => {
    const savedMode = window.localStorage.getItem(STORAGE_KEY);
    if (savedMode === "dark" || savedMode === "light") {
      setMode(savedMode);
    }
  }, []);

  React.useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, mode);
  }, [mode]);

  const toggleMode = React.useCallback(() => {
    setMode((prev) => (prev === "dark" ? "light" : "dark"));
  }, []);

  return (
    <DashboardModeContext.Provider
      value={{ mode, isDark: mode === "dark", toggleMode, setMode }}
    >
      {children}
    </DashboardModeContext.Provider>
  );
}

export function useDashboardMode() {
  const context = React.useContext(DashboardModeContext);
  if (!context) {
    throw new Error("useDashboardMode must be used within DashboardModeProvider");
  }
  return context;
}
