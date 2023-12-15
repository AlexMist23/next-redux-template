"use client";

import { Provider as ReduxProvider } from "react-redux";
import { ThemeProvider } from "next-themes";

import { reduxStore } from "@/lib/redux";

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <ReduxProvider store={reduxStore}>
      <ThemeProvider>{children}</ThemeProvider>
    </ReduxProvider>
  );
};
