import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";

import { SiteJsonLd } from "@/src/features/landing/seo/site-json-ld";
import { getSiteUrl } from "@/src/features/landing/seo/site-config";
import { Header } from "@/src/features/shared/components/header/Header";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const siteUrl = getSiteUrl();

const description =
  "Navigate the digital landscape for success. SEO, PPC, social media marketing, content creation, and full-funnel campaigns that grow your business online.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Positivus — Digital Marketing Agency",
    template: "%s · Positivus",
  },
  description,
  applicationName: "Positivus",
  keywords: [
    "digital marketing agency",
    "SEO",
    "PPC",
    "social media marketing",
    "content marketing",
    "online growth",
    "Positivus",
  ],
  alternates: {
    canonical: "/",
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
  openGraph: {
    title: "Positivus — Digital Marketing Agency",
    description:
      "Navigate the digital landscape for success. SEO, PPC, social media marketing, content creation, and measurable growth.",
    siteName: "Positivus",
    locale: "en_US",
    type: "website",
    url: siteUrl,
  },
  twitter: {
    card: "summary_large_image",
    title: "Positivus — Digital Marketing Agency",
    description:
      "Digital marketing agency: SEO, PPC, social media, and content that drives leads and revenue.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className={`${spaceGrotesk.variable} h-full antialiased`}>
      <body className='flex min-h-full flex-col bg-white font-sans text-brand-dark antialiased'>
        <SiteJsonLd />
        <Header />
        {children}
      </body>
    </html>
  );
}
