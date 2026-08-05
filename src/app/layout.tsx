import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "GreennBugg House Deziign | Architecture & Interior Design Company",
  description:
    "GreennBugg House Deziign provides professional architecture, interior design, house planning, 2D floor plans, 3D front elevations, villa design, and construction consultancy services.",
  keywords: [
    "Architecture Company",
    "Architecture Firm",
    "Interior Design",
    "House Design",
    "Residential Architecture",
    "Commercial Architecture",
    "Villa Design",
    "2D Floor Plan",
    "3D Front Elevation",
    "Construction Consultancy",
    "3D Visualization",
    "Architectural Design",
  ],
  authors: [{ name: "GreennBugg House Deziign" }],
  openGraph: {
    title: "GreennBugg House Deziign | Architecture & Interior Design Company",
    description:
      "GreennBugg House Deziign provides professional architecture, interior design, house planning, 2D floor plans, 3D front elevations, villa design, and construction consultancy services.",
    siteName: "GreennBugg House Deziign",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "GreennBugg House Deziign | Architecture & Interior Design Company",
    description:
      "GreennBugg House Deziign provides professional architecture, interior design, house planning, 2D floor plans, 3D front elevations, villa design, and construction consultancy services.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-IN" className={`${playfair.variable} ${inter.variable}`}>
      <body className="font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "GreennBugg House Deziign",
              url: "https://www.greennbugg.example",
              logo: "https://www.greennbugg.example/images/og/og-image.jpg",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+919000000000",
                contactType: "customer service",
                areaServed: "IN",
              },
              sameAs: [
                "https://instagram.com/greennbugg",
                "https://facebook.com/greennbugg",
                "https://youtube.com/@greennbugg",
                "https://linkedin.com/company/greennbugg",
              ],
            }),
          }}
        />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:z-[100] focus:bg-deepgreen-700 focus:px-4 focus:py-2 focus:text-offwhite"
        >
          Skip to main content
        </a>
        <Header />
        {children}
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
