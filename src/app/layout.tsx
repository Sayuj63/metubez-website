import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";

const lato = Lato({
  variable: "--font-lato",
  weight: ["300", "400", "700", "900"],
  subsets: ["latin"],
  display: "swap",
});

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://metubez-website.vercel.app";

const TAGLINE = "World's first horizontal scrollable video platform";
const TITLE = `MeTubez: ${TAGLINE}. Create. Share. Monetize. Made in India.`;
const SHARE_DESCRIPTION =
  "India's First Landscape video platform. Create. Share. Monetise. Built in Bharat, for Bharat.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: SHARE_DESCRIPTION,
  icons: {
    icon: "/metubez-logo.png",
  },
  openGraph: {
    type: "website",
    siteName: "MeTubez",
    locale: "en_IN",
    url: SITE_URL,
    title: TITLE,
    description: SHARE_DESCRIPTION,
    images: [
      {
        url: "/banners/banner-horizontal.png",
        width: 1440,
        height: 420,
        alt: "MeTubez — India's First Landscape video platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: SHARE_DESCRIPTION,
    images: ["/banners/banner-horizontal.png"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${lato.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-white text-[#111]">
        {children}
      </body>
    </html>
  );
}
