import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import PreloaderWrapper from "@/components/PreloaderWrapper";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "BVEST 12 | Greenovate",
  description: "BVEST - The Technical Fest of BVCOE | 8-9 October 2025",
  keywords: ["BVEST", "Hackathon", "Technical Fest", "Greenovate", "Technology", "Sustainability"],
  themeColor: "#000000",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-black text-gray-100 antialiased overflow-x-hidden">
        <PreloaderWrapper>
          {children}
        </PreloaderWrapper>
      </body>
    </html>
  );
}
