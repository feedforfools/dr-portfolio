import Navbar from "@/components/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Your Name - Portfolio",
  description: "My personal portfolio showcasing my work and skills.",
  // Add more metadata later (openGraph, twitter, etc.)
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          {" "}
          <TooltipProvider delayDuration={0}>
            {" "}
            <Navbar />
            <main className="flex-1 max-w-3xl mx-auto py-12 sm:py-16 px-6">
              {" "}
              {children}
            </main>
            {/* Optional Footer can go here */}
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
