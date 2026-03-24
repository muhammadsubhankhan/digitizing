import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header, Footer } from "@/components";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "Custom Embroidered Patches | Premium Quality Custom Patches",
    template: "%s | Custom Patch House",
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
    locale: "en_US",
    siteName: "Custom Patch House",
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
  robots: {
    index: true,
    follow: true,
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
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
