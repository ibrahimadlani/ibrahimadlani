import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ibrahim Adlani",
  description: "Ibrahim Adlani, a software engineer based in France.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className + "bg-white leading-relaxed text-[#837979] antialiased selection:bg-[#837979] selection:text-white"}>
        <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
          <div className="lg:flex lg:justify-between lg:gap-4">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
