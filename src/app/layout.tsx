import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ASOBI SPACE | raihara3",
  description:
    "raihara3のサイト。フロントエンド、WebXR、3Dなどの制作物を紹介しています。",
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    title: "ASOBI SPACE | raihara3",
    description:
      "raihara3のサイト。フロントエンド、WebXR、3Dなどの制作物を紹介しています。",
    url: "https://raihara3.com",
    siteName: "ASOBI SPACE",
    images: [
      {
        url: "/ogp.jpg",
        width: 1200,
        height: 630,
        alt: "ASOBI SPACE | raihara3",
      },
    ],
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ASOBI SPACE | raihara3",
    description:
      "raihara3のサイト。フロントエンド、WebXR、3Dなどの制作物を紹介しています。",
    images: ["/ogp.jpg"],
    creator: "@raihara3",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
