"use client";

import { Inter } from "next/font/google";
import "./styles/globals.css";
import { ThemeProvider } from "next-themes";
import { useState, useEffect } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);
  const [isDesktop, setIsDesktop] = useState(true);
  const [isGradientEnabled, setIsGradientEnabled] = useState(false);

  // Enable/disable gradient based on the theme
  useEffect(() => {
    const theme = localStorage.getItem("theme") || "light"; // Default to light if not set
    setIsGradientEnabled(theme !== "light"); // Enable gradient only if theme is not light
  }, []);

  // Track scroll position
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Track screen size to disable gradient on mobile
  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768); // Disable for screens < 768px
    };

    handleResize(); // Run on mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Handle mouse move to update gradient position
  const handleMouseMove = (e) => {
    if (isDesktop && isGradientEnabled) {
      setPosition({ x: e.clientX, y: e.clientY });
    }
  };

  return (
    <html lang="en" className="scroll-smooth transition" suppressHydrationWarning>
      <head />
      <body
        className={`${inter.className} bg-background dark:bg-darkBackground text-secondary dark:text-darkSecondary leading-relaxed antialiased selection:bg-accent selection:text-background transition-colors duration-200 ease-in-out overflow-x-hidden relative`}
        onMouseMove={handleMouseMove}
      >
        {/* Cursor-Following Gradient */}
        {isDesktop && isGradientEnabled && (
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: `radial-gradient(600px at ${position.x}px ${position.y +
                scrollY}px, rgba(255, 255, 255, 0.04), transparent 80%)`,
            }}
          />
        )}

        {/* Theme & Content Wrapper */}
        <ThemeProvider attribute="class">
          <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0 relative">
            <div className="lg:flex lg:justify-between lg:gap-4">{children}</div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
