import { demoStore } from "@/data/demoStore";

const infoRows = [
  { label: "店名", value: demoStore.fullName },
  { label: "ジャンル", value: demoStore.genre },
  { label: "住所", value: demoStore.address },
  { label: "アクセス", value: demoStore.access },
  { label: "電話番号", value: demoStore.phone },
  {
    label: "営業時間",
    value: `${demoStore.hours} ※${demoStore.hoursNote}`,
  },
  { label: "お支払い", value: demoStore.payment },
  { label: "席", value: demoStore.seats },
];

const mapEmbedSrc =
  "https://maps.google.com/maps?q=" +
  encodeURIComponent(demoStore.mapQuery) +
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
              title={`${demoStore.name} 周辺地図（デモ）`}
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
          ※本サイトはデモ用の架空店舗です。掲載されている店名・住所・電話番号・地図・予約リンクはすべてサンプルであり、実在の店舗情報ではありません。
        </p>
      </div>
    </section>
  );
}
