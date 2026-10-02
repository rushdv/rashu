import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

const rawSiteUrl = process.env.NEXT_PUBLIC_SITE_URL;
// Only construct a URL object when a real domain is provided.
// Without NEXT_PUBLIC_SITE_URL set, metadataBase is omitted to avoid build errors.
const metadataBase =
  rawSiteUrl && !rawSiteUrl.includes("[")
    ? new URL(rawSiteUrl)
    : undefined;

export const metadata: Metadata = {
  title: "Rashu — Cybersecurity Portfolio",
  description:
    "Portfolio of Rashu — a Computer Science student focused on penetration testing, SOC analysis, and practical security research.",
  ...(metadataBase ? { metadataBase, alternates: { canonical: "/" } } : {}),
  openGraph: {
    title: "Rashu — Cybersecurity Portfolio",
    description:
      "Portfolio of Rashu — a Computer Science student focused on penetration testing, SOC analysis, and practical security research.",
    ...(rawSiteUrl && !rawSiteUrl.includes("[") ? { url: rawSiteUrl } : {}),
    siteName: "Rashu",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Rashu — Cybersecurity Portfolio",
    description:
      "Portfolio of Rashu — a Computer Science student focused on penetration testing, SOC analysis, and practical security research.",
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
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable} h-full`}
    >
      <body className="min-h-full antialiased">{children}</body>
    </html>
  );
}
