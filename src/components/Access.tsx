const infoRows = [
  { label: "店名", value: "和さび（わさび / Wasabi）" },
  { label: "ジャンル", value: "居酒屋・割烹（独立個人店）" },
  {
    label: "住所",
    value: "〒807-0804 福岡県北九州市八幡西区医生ケ丘7-2",
  },
  {
    label: "アクセス",
    value:
      "JR筑豊本線（若松〜桂川）本城駅 出口1 より徒歩約19分。駐車場あり（台数は店舗にてご確認ください）。",
  },
  { label: "電話番号", value: "093-601-2021" },
  {
    label: "営業時間",
    value: "18:00 〜 22:00（毎日）※定休日は店舗にてご確認ください",
  },
  { label: "お支払い", value: "現金・カード可（JCB・AMEX）" },
  {
    label: "席",
    value:
      "カウンター席、個室（お人数・お席の詳細はご予約時にお問い合わせください）",
  },
];

const mapEmbedSrc =
  "https://maps.google.com/maps?q=" +
  encodeURIComponent("福岡県北九州市八幡西区医生ケ丘7-2") +
  "&z=16&output=embed";

export default function Access() {
  return (
    <section id="access" className="scroll-mt-14 bg-zinc-900 px-12 py-24">
      <div className="mx-auto max-w-5xl">
        <div className="mb-16 flex items-center gap-6">
          <div className="h-px w-8 bg-red-800" />
          <p className="font-serif text-[11px] tracking-[0.4em] text-red-800 uppercase">
            Access & Info
          </p>
        </div>
        <h2 className="mb-16 font-serif text-2xl font-light tracking-[0.25em] text-white">
          アクセス・店舗情報
        </h2>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          <div className="relative h-72 overflow-hidden border border-white/10 bg-zinc-800">
            <iframe
              title="和さび 周辺地図"
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
                className={`flex gap-6 py-4 ${i < infoRows.length - 1 ? "border-b border-white/10" : ""}`}
              >
                <dt className="w-24 shrink-0 pt-0.5 font-serif text-[11px] tracking-[0.25em] text-white/40">
                  {row.label}
                </dt>
                <dd className="font-serif text-[13px] leading-relaxed tracking-wider text-white/80">
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
