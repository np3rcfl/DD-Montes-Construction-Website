import type { Metadata } from "next";
import { Fraunces, Spectral, DM_Sans } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const fraunces = Fraunces({
  variable: "--font-serif-display",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "900"],
  style: ["normal", "italic"],
  display: "swap",
});

const spectral = Spectral({
  variable: "--font-serif-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "DD Montes Construction | General Contractor in Hawthorne, CA",
  description:
    "Licensed general contractor (CSLB B1049017) serving Hawthorne and the South Bay. Kitchen remodels, ADU construction, home additions, and full renovations. Bonded & insured.",
  keywords:
    "general contractor Hawthorne CA, kitchen remodel Hawthorne, ADU builder South Bay, home addition contractor, CSLB licensed contractor, DD Montes Construction",
  openGraph: {
    title: "DD Montes Construction | General Contractor in Hawthorne, CA",
    description:
      "Licensed general contractor serving Hawthorne and the South Bay. Kitchen remodels, ADUs, additions, and renovations.",
    type: "website",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "GeneralContractor"],
  name: "DD Montes Construction Inc.",
  telephone: "(310) 321-2214",
  address: {
    "@type": "PostalAddress",
    streetAddress: "3318 Rosecrans Ave",
    addressLocality: "Hawthorne",
    addressRegion: "CA",
    postalCode: "90250",
    addressCountry: "US",
  },
  hasCredential: "CSLB B1049017",
  description:
    "Licensed general contractor serving Hawthorne and the South Bay with kitchen remodels, ADU construction, home additions, and complete renovations.",
  areaServed: [
    "Hawthorne",
    "Lawndale",
    "Gardena",
    "Inglewood",
    "El Segundo",
    "Torrance",
    "Manhattan Beach",
    "Redondo Beach",
    "Hermosa Beach",
    "South Bay",
    "Los Angeles County",
  ],
  priceRange: "$$",
  openingHours: "Mo-Fr 07:00-18:00",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${spectral.variable} ${dmSans.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </head>
      <body className="antialiased" suppressHydrationWarning>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
