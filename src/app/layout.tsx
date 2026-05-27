import type { Metadata, Viewport } from "next";
import { Noto_Serif_JP } from "next/font/google";
import { demoStore } from "@/data/demoStore";
import "./globals.css";

const notoSerifJP = Noto_Serif_JP({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-noto-serif-jp",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#171717",
};

export const metadata: Metadata = {
  title: `${demoStore.tagline} ${demoStore.fullName}｜${demoStore.area}`,
  description: `${demoStore.address}。デモ用の架空店舗サイトです。割烹と居酒屋の良さを併せ持つ和の居酒屋。カウンター席と個室をご用意。${demoStore.phone}。`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={`${notoSerifJP.variable} h-full scroll-smooth antialiased`}>
      <body className="min-h-full font-serif">{children}</body>
    </html>
  );
}
