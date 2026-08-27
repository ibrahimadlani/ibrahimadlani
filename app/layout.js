import { Inter } from "next/font/google";

import Providers from "@/components/layout/Providers";
import {
  SITE_AUTHOR,
  SITE_DESCRIPTION,
  SITE_ROLE,
  SITE_URL,
} from "@/lib/site";
import "./styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

/**
 * Metadata inherited by every route. Individual pages override `title` and
 * `description`; the rest cascades.
 *
 * The Open Graph image is resolved automatically by Next from
 * `app/opengraph-image.png`.
 */
export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_AUTHOR} - ${SITE_ROLE}`,
    template: `%s - ${SITE_AUTHOR}`,
  },
  description: SITE_DESCRIPTION,
  authors: [{ name: SITE_AUTHOR, url: SITE_URL }],
  creator: SITE_AUTHOR,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: `${SITE_AUTHOR} - ${SITE_ROLE}`,
    title: `${SITE_AUTHOR} - ${SITE_ROLE}`,
    description: SITE_DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_AUTHOR} - ${SITE_ROLE}`,
    description: SITE_DESCRIPTION,
  },
  robots: { index: true, follow: true },
};

export const viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0f172a" },
  ],
};

/**
 * Root layout: the only place that renders `<html>` and `<body>`.
 *
 * `<body>` is `relative` so the cursor gradient can span the document, and
 * `suppressHydrationWarning` is required because next-themes writes the theme
 * class onto `<html>` before React hydrates.
 *
 * @param {Object} props
 * @param {React.ReactNode} props.children - The rendered route.
 * @returns {JSX.Element}
 */
export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${inter.className} relative overflow-x-hidden bg-background text-secondary antialiased transition-colors duration-200 ease-in-out selection:bg-accent selection:text-background dark:bg-darkBackground dark:text-darkSecondary leading-relaxed`}
      >
        <Providers>
          <div className="relative mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
            <div className="lg:flex lg:justify-between lg:gap-4">{children}</div>
          </div>
        </Providers>
      </body>
    </html>
  );
}
