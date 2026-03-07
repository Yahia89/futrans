import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Future Transportation | Reliable NEMT & Waiver Services",
  description:
    "Dependable medical and waiver-based transportation in the Seven-county metro area. Safe, timely, and supportive service for medical appointments, day programs, and more.",
  keywords: [
    "NEMT",
    "Medical Transportation",
    "Waiver Transportation",
    "Minnesota",
    "St Paul",
    "Wheelchair Accessible",
  ],
  openGraph: {
    title: "Future Transportation",
    description:
      "Reliable. Professional. On Time. Future Transportation provides high-quality NEMT services.",
    type: "website",
    url: "https://futrans.us",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${outfit.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
