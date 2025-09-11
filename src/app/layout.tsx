import type { Metadata } from "next";
import { Inter, Poppins, Raleway } from "next/font/google";
import "./globals.css";
import PreloaderWrapper from "@/components/PreloaderWrapper";
import { FloatingSidebars } from "@/components/FloatingSidebars";

// Font configurations
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  weight: ["400", "500", "600"],
});

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["600", "700", "800"],
});

const raleway = Raleway({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-raleway",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "BVEST 12 | Greenovate",
  description: "BVEST - The Technical Fest of BVCOE | 8-9 October 2025",
  keywords: [
    "BVEST",
    "Hackathon",
    "Technical Fest",
    "Greenovate",
    "Technology",
    "Sustainability",
  ],

  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${poppins.variable} ${raleway.variable} scroll-smooth`}
    >
      {/* Custom font links removed. Use next/font or import in global CSS for app router. */}
      <body className="bg-black text-gray-100 antialiased overflow-x-hidden">
        <PreloaderWrapper>
          <FloatingSidebars />
          {children}
        </PreloaderWrapper>
      </body>
    </html>
  );
}
