import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";

import { Header } from "@/src/features/shared/components/header/Header";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Positivus — Digital Marketing Agency",
    template: "%s · Positivus",
  },
  description:
    "Navigate the digital landscape for success. SEO, PPC, social media marketing, content creation, and full-funnel campaigns that grow your business online.",
  openGraph: {
    title: "Positivus — Digital Marketing Agency",
    description:
      "Navigate the digital landscape for success. SEO, PPC, social media marketing, content creation, and measurable growth.",
    siteName: "Positivus",
    locale: "en_US",
    type: "website",
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
        <Header />
        {children}
      </body>
    </html>
  );
}
