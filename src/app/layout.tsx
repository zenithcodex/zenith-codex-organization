import type { Metadata } from "next";
import { Archivo_Black, Space_Grotesk, JetBrains_Mono, Fira_Code } from "next/font/google";
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
  title: "Zenith Codex",
  description: "Building infrastructure for the next paradigm",
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
      </body>
    </html>
  );
}
