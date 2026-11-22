import type { Metadata } from "next";
import { Syne, Space_Mono } from "next/font/google";
import { ThemeProvider } from "@/context/ThemeContext";
import "./globals.css";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  display: "swap",
});

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Rahmat Taufik Akbar — Portfolio 2.0",
  description:
    "Portfolio Rahmat Taufik Akbar - Siswa Kelas 11-A TJKT SMKN 3 Banjarmasin. Teknisi jaringan komputer dan self-taught developer.",
  keywords: [
    "Rahmat Taufik Akbar",
    "Portfolio",
    "TJKT",
    "SMKN 3 Banjarmasin",
    "MikroTik",
    "Next.js",
    "Tailwind CSS"
  ],
  authors: [{ name: "Rahmat Taufik Akbar" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="id"
      className={`${syne.variable} ${spaceMono.variable} scroll-smooth`}
      suppressHydrationWarning
    >
      <body className="min-h-screen flex flex-col antialiased selection:bg-blue-600 selection:text-white">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
