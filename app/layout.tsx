import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nehal Gadhavi | AI & Data Portfolio",
  description:
    "Personal portfolio of Nehal Gadhavi, showcasing projects in artificial intelligence, machine learning, data analytics, product strategy, and full-stack AI applications.",
  keywords: [
    "Nehal Gadhavi",
    "AI Portfolio",
    "Data Analyst Portfolio",
    "Machine Learning",
    "Artificial Intelligence",
    "Next.js Portfolio",
    "SAIT",
  ],
  authors: [{ name: "Nehal Gadhavi" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
