"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
type ThemeProviderProps = React.ComponentProps<typeof NextThemesProvider>;

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  // Simply pass props through to the underlying provider
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
