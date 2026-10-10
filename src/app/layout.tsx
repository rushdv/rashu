import type { Metadata } from "next";
import { Inter, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const ibmPlexMono = IBM_Plex_Mono({
  weight: ["400", "500", "600"],
  variable: "--font-ibm-plex-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "rashu — Cybersecurity & CSE Portfolio",
  description: "Computer Science & Engineering student focused on cybersecurity, ethical hacking, defensive security, and systems analysis.",
  keywords: [
    "Cybersecurity",
    "Ethical Hacking",
    "Computer Science",
    "Portfolio",
    "Rashu",
    "Malware Analysis",
    "SOC",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${ibmPlexMono.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col bg-neutral-950 text-gray-200">
        {children}
      </body>
    </html>
  );
}
