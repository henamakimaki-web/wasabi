import type { Metadata, Viewport } from "next";
import { Noto_Serif_JP } from "next/font/google";
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
  title: "居酒屋まさまさ｜北九州市八幡西区",
  description:
    "〒807-0843 福岡県北九州市八幡西区三ケ森3丁目10-5。クチコミ5.0の居酒屋。ディナーにご利用いただけます。19:00営業開始。080-2796-1533。",
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
