import type { NextConfig } from "next";

/** Docker / VPS 向けに最小ランタイムを出力（Vercel は従来どおりビルド可能） */
const nextConfig: NextConfig = {
  output: "standalone",
};

export default nextConfig;
