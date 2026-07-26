import type { Metadata } from "next";
import { Saira, Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

const saira = Saira({
  variable: "--font-saira",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://raihara3.xyz"),
  title: "raihara3's Launch Station",
  description:
    "raihara3のサイト。フロントエンド、WebXR、3Dなどの制作物を紹介しています。",
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    title: "raihara3's Launch Station",
    description:
      "raihara3のサイト。フロントエンド、WebXR、3Dなどの制作物を紹介しています。",
    url: "https://raihara3.xyz",
    siteName: "raihara3's Launch Station",
    images: [
      {
        url: "/ogp.jpg",
        width: 1200,
        height: 630,
        alt: "raihara3's Launch Station",
      },
    ],
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "raihara3's Launch Station",
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
    <html lang="ja">
      <body
        className={`${saira.variable} ${notoSansJP.variable} antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
