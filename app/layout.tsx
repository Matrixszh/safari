import type { Metadata } from "next";
import { Geist_Mono, Lora, Cinzel } from "next/font/google";
import "./globals.css";

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
});

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Syed Nouman | Wildlife Photography & Bespoke Safaris",
  description:
    "Cinematic wildlife photography and privately guided tiger safaris with photographer Syed Nouman. Explore India’s Terai, rivers and grasslands through curated photographic journeys and fine-art imagery.",
};

import ClientLayout from "./ClientLayout";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${lora.variable} ${cinzel.variable} ${geistMono.variable} antialiased`}
      >
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
