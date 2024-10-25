import { Inter } from "next/font/google";
import "../styles/globals.css";
import { ThemeProvider } from 'next-themes';

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head />
      <body className={`${inter.className} bg-background dark:bg-darkBackground text-secondary dark:text-darkSecondary leading-relaxed antialiased selection:bg-accent selection:text-background`}>
        <ThemeProvider attribute="class" defaultTheme="system">
          <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
            <div className="lg:flex lg:justify-between lg:gap-4">
              {children}
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
