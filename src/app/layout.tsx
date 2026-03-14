import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://futrans.us"),
  title: {
    default: "Future Transportation | Reliable NEMT & Waiver Services Minnesota",
    template: "%s | Future Transportation",
  },
  description:
    "Future Transportation provides dependable medical (NEMT) and waiver-based transportation in the Seven-county Twin Cities metro area. Safe, timely, and supportive service.",
  keywords: [
    "NEMT Minnesota",
    "Non-Emergency Medical Transportation St Paul",
    "Waiver Transportation MN",
    "Wheelchair Van Service Twin Cities",
    "Medical Appointments Transport",
    "CADI waiver transportation",
    "Elderly transportation Minneapolis",
  ],
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    title: "Future Transportation | Reliable NEMT & Waiver Services",
    description:
      "Dependable medical and waiver-based transportation in the Seven-county metro area. Safe, timely, and supportive service for medical appointments.",
    type: "website",
    url: "https://futrans.us",
    siteName: "Future Transportation",
    locale: "en_US",
    images: [
      {
        url: "/logo.png",
        width: 800,
        height: 600,
        alt: "Future Transportation Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Future Transportation",
    description: "Reliable NEMT & Waiver Services in Minnesota",
    images: ["/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Future Transportation",
  image: "https://futrans.us/logo.png",
  "@id": "https://futrans.us",
  url: "https://futrans.us",
  telephone: "6128889966",
  address: {
    "@type": "PostalAddress",
    streetAddress: "151 Silver Lake RD NW Unit #5",
    addressLocality: "St Paul",
    addressRegion: "MN",
    postalCode: "55112",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 45.0519,
    longitude: -93.2208,
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    opens: "06:00",
    closes: "20:00",
  },
  sameAs: [],
};


import ScrollToTop from "@/components/ScrollToTop";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${outfit.variable} font-sans antialiased text-foreground selection:bg-brand-lime/30`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
        <ScrollToTop />
      </body>
    </html>
  );
}
