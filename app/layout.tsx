import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header, Footer, WhatsAppFloat } from "@/components";
import JsonLd from "@/components/JsonLd";
import { SITE_NAME, SITE_URL } from "@/lib/site";
import { organizationSchema, websiteSchema } from "@/lib/schema";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: "/",
  },
  title: {
    default: "Custom Embroidered Patches | Premium Quality Custom Patches",
    template: `%s | ${SITE_NAME}`,
  },
  description: "Get eye-popping embroidered custom patches for every industry. Premium quality, fast delivery, affordable prices. Order custom patches for businesses, teams, and personal projects.",
  keywords: ["custom patches", "embroidered patches", "custom embroidery", "biker patches", "military patches", "iron on patches", "velcro patches", "custom badges"],
  authors: [{ name: "Custom Patch House" }],
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/manifest.json",
  openGraph: {
    type: "website",
    url: "/",
    locale: "en_US",
    siteName: SITE_NAME,
    title: "Custom Embroidered Patches | Premium Quality",
    description: "Get eye-popping embroidered custom patches for every industry. Premium quality, fast delivery, affordable prices.",
    images: [{ url: "/og-image-1200x630.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Custom Embroidered Patches | Premium Quality",
    description: "Get eye-popping embroidered custom patches for every industry.",
    images: ["/og-image-1200x630.png"],
  },
  verification: {
    google: "Q-ZfpMo_hL2MamzOvO3qAubzPkVzKlkF_6qe31P2n3w",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        <JsonLd data={organizationSchema} />
        <JsonLd data={websiteSchema} />
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
