import type { Metadata } from "next";
import { Archivo_Black, Space_Grotesk, JetBrains_Mono, Fira_Code } from "next/font/google";
import { Toaster } from "@/components/ui/toaster";
import "./globals.css";

const archivoBlack = Archivo_Black({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-archivo-black",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
});

const firaCode = Fira_Code({
  subsets: ["latin"],
  variable: "--font-fira-code",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://zenith-codex.com"),
  title: {
    default: "Zenith Codex",
    template: "%s | Zenith Codex",
  },
  description: "Building infrastructure for the next paradigm. A collective of engineers architecting the future.",
  keywords: ["Blockchain", "AI", "Infrastructure", "Web3", "Rust", "Go", "Zenith Codex"],
  authors: [{ name: "Zenith Codex Collective" }],
  creator: "Zenith Codex",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://zenith-codex.com",
    title: "Zenith Codex",
    description: "Building infrastructure for the next paradigm.",
    siteName: "Zenith Codex",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Zenith Codex",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Zenith Codex",
    description: "Building infrastructure for the next paradigm.",
    images: ["/og-image.jpg"],
    creator: "@zenithcodex",
  },
  icons: {
    icon: "/favicon.ico",
  },

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning className={`${archivoBlack.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} ${firaCode.variable} font-sans antialiased bg-[#0D0D0F] text-[#E8E8E8]`}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
