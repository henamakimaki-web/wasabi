import type { Metadata } from "next";
import { Noto_Serif_JP } from "next/font/google";
import "./globals.css";

const notoSerifJP = Noto_Serif_JP({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-noto-serif-jp",
  display: "swap",
});

export const metadata: Metadata = {
  title: "居酒屋・割烹 和さび（わさび）｜北九州市八幡西区",
  description:
    "〒807-0804 福岡県北九州市八幡西区医生ケ丘7-2。割烹と居酒屋の良さを併せ持つ和の居酒屋。カウンター席と個室をご用意。鮮魚の刺身盛り合わせやふぐ料理が人気。093-601-2021。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={`${notoSerifJP.variable} h-full antialiased`}>
      <body className="min-h-full font-serif">{children}</body>
    </html>
  );
}
