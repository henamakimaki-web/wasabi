const infoRows = [
  { label: "店名", value: "居酒屋まさまさ" },
  { label: "ジャンル", value: "居酒屋" },
  { label: "評価", value: "⭐️ 5.0（クチコミ2件）" },
  {
    label: "クチコミ評価",
    value: "食事 5/5 ｜ サービス 5/5 ｜ 雰囲気 4〜5/5",
  },
  {
    label: "住所",
    value: "〒807-0843 福岡県北九州市八幡西区三ケ森3丁目10-5",
  },
  { label: "電話番号", value: "080-2796-1533" },
  { label: "SNS", value: "Instagramアカウントあり" },
  { label: "営業時間", value: "19:00 営業開始" },
  { label: "ご利用シーン", value: "ディナー" },
  { label: "価格帯", value: "1人あたり 5,000円～6,000円程度" },
  { label: "騒音レベル", value: "静かで、会話しやすい" },
  {
    label: "グループの人数",
    value: "1人、2人、3〜4人、5〜8人",
  },
  { label: "待ち時間", value: "待ち時間なし" },
  {
    label: "駐車場",
    value: "空いている駐車スペースは多い（有料駐車場・有料の屋内駐車場）",
  },
  {
    label: "サービス",
    value: "イートイン（店内飲食）可／テイクアウト・宅配（デリバリー）不可",
  },
];

const mapEmbedSrc =
  "https://maps.google.com/maps?q=" +
  encodeURIComponent("福岡県北九州市八幡西区三ケ森3丁目10-5") +
  "&z=16&output=embed";

export default function Access() {
  return (
    <section id="access" className="scroll-mt-14 bg-zinc-900 px-4 py-12 sm:px-8 sm:py-16 lg:px-12 lg:py-24">
      <div className="mx-auto max-w-5xl">
        <div className="mb-10 flex items-center gap-6 sm:mb-16">
          <div className="h-px w-8 bg-red-800" />
          <p className="font-serif text-[11px] tracking-[0.4em] text-red-800 uppercase">
            Access & Info
          </p>
        </div>
        <h2 className="mb-10 font-serif text-2xl font-light tracking-[0.25em] text-white sm:mb-16">
          アクセス・店舗情報
        </h2>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
          <div className="relative h-56 overflow-hidden border border-white/10 bg-zinc-800 sm:h-72">
            <iframe
              title="居酒屋まさまさ 周辺地図"
              src={mapEmbedSrc}
              className="absolute inset-0 h-full w-full border-0 grayscale-[20%] contrast-[1.05]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <div className="flex flex-col justify-center">
            {infoRows.map((row, i) => (
              <div
                key={row.label}
                className={`flex flex-col gap-1.5 py-4 sm:flex-row sm:gap-6 ${i < infoRows.length - 1 ? "border-b border-white/10" : ""}`}
              >
                <dt className="w-auto shrink-0 pt-0.5 font-serif text-[11px] tracking-[0.25em] text-white/40 sm:w-24">
                  {row.label}
                </dt>
                <dd className="min-w-0 font-serif text-[13px] leading-relaxed tracking-wider text-white/80">
                  {row.value}
                </dd>
              </div>
            ))}
          </div>
        </div>

        <p className="mt-12 font-serif text-[11px] leading-relaxed tracking-wide text-white/35">
          掲載情報は制作時点のものです。営業時間・定休日・駐車場台数などは変更となる場合がございます。最新情報はお電話または各予約サイトにてご確認ください。
        </p>
      </div>
    </section>
  );
}
