# 居酒屋・割烹「和さび」ランディングページ

Next.js（App Router）で構築した店舗紹介サイトです。環境変数は不要で、そのままビルドできます。

## 前提

- **Node.js** 20.9 以上（推奨: 22.x）。`.nvmrc` に `22` を指定しています。
- パッケージマネージャは **npm**（`package-lock.json` 付き）

```bash
nvm use   # nvm 利用時
npm ci
npm run dev
```

ブラウザで [http://localhost:3000](http://localhost:3000) を開きます。

## スクリプト

| コマンド | 説明 |
|---------|------|
| `npm run dev` | 開発サーバー |
| `npm run build` | 本番ビルド（`output: "standalone"` で `.next/standalone` も生成） |
| `npm run start` | ビルド後のプレビュー（`next start`） |
| `npm run lint` | ESLint |

## デプロイ（おすすめ順）

### 1. Vercel（手軽・Next.js 公式系）

1. リポジトリを GitHub に push する  
2. [Vercel](https://vercel.com) にログイン → **Add New Project** → リポジトリを選択  
3. **Framework Preset**: Next.js のまま  
4. **Build Command** / **Output** はデフォルトのまま（変更不要）  
5. Deploy

`next.config.ts` の `output: "standalone"` は Vercel 上ではそのまま利用可能で、プラットフォーム側が適切に扱います。

### 2. Docker（自社サーバー・任意の PaaS）

リポジトリ直下の `Dockerfile` でマルチステージビルドしています。

```bash
docker build -t wasabi-site .
docker run -p 3000:3000 wasabi-site
```

[http://localhost:3000](http://localhost:3000) で表示を確認できます。

### 3. 自前 Node（VPS など）

```bash
npm ci
npm run build
NODE_ENV=production npm run start
```

`PORT` を変えたい場合は `PORT=8080 npm run start` のように指定してください。

## 継続的インテグレーション

`.github/workflows/ci.yml` で `push` / `pull_request` 時に `npm ci` → `lint` → `build` を実行します。デプロイ前の品質確認に利用できます。

## ディレクトリの目安

- `src/app/` … ページとレイアウト  
- `src/components/` … セクション別コンポーネント  
- `public/shop/` … 店舗写真（ビルド成果物に同梱）

## ライセンス

店舗・クライアント向けのため、利用範囲は契約に従ってください。
