import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";

const lato = Lato({
  variable: "--font-lato",
  weight: ["300", "400", "700", "900"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "MeTubez — India's landscape-first video platform",
  description:
    "The way the new India is meant to watch and create. Create. Share. Monetise. Built in Bharat, for Bharat.",
  icons: {
    icon: "/metubez-logo.png",
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
