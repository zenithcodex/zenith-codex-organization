import type { Metadata, Viewport } from "next";
import { Archivo_Black, Space_Grotesk, JetBrains_Mono, Fira_Code } from "next/font/google";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import WebVitals from "@/components/zenith/WebVitals";
import "./globals.css";

const archivoBlack = Archivo_Black({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-archivo-black",
  display: "swap",
  preload: true,
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
  preload: true,
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
  preload: false,
});

const firaCode = Fira_Code({
  subsets: ["latin"],
  variable: "--font-fira-code",
  display: "swap",
  preload: false,
});

export const viewport: Viewport = {
  themeColor: "#0D0D0F",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://zenith-codex.com"),
  title: {
    default: "Zenith Codex",
    template: "%s | Zenith Codex",
  },
  description:
    "Building infrastructure for the next paradigm. A collective of engineers architecting the future.",
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
      <body
        suppressHydrationWarning
        className={`${archivoBlack.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} ${firaCode.variable} font-sans antialiased bg-zenith-base text-zenith-text`}
      >
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <WebVitals />
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
