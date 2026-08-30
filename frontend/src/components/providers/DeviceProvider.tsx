"use client";

import { createContext, useContext, useMemo } from "react";

type DeviceContextType = {
  isMobile: boolean;
  isDesktop: boolean;
  width: number;
  height: number;
};

const DeviceContext = createContext<DeviceContextType | null>(null);

export function DeviceProvider({ children }: { children: React.ReactNode }) {
  // Solo se ejecuta en el cliente
  const width = typeof window === "undefined" ? 0 : window.innerWidth;
  const height = typeof window === "undefined" ? 0 : window.innerHeight;

  const value = useMemo(
    () => ({
      isMobile: width < 768,
      isDesktop: width >= 768,
      width,
      height,
    }),
    [width, height],
  );

  return (
    <DeviceContext.Provider value={value}>{children}</DeviceContext.Provider>
  );
}

export function useDevice() {
  const context = useContext(DeviceContext);
  if (!context) {
    throw new Error("useDevice debe usarse dentro de DeviceProvider");
  }
  return context;
}
