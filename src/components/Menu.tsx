import Image from "next/image";

const menuItems = [
  {
    name: "生ハム巻き（アボカド・クリームチーズ）",
    desc: "当店の看板メニュー。アボカドとクリームチーズ、生ハムを巻いたひと口サイズの一品。チリソースとの相性も抜群で、食べやすく華やかな盛り付けが魅力です。",
    src: "/shop/menu-prosciutto-roll.png",
    alt: "生ハム巻き。アボカド・クリームチーズ・生ハムをチリソースで彩ったひと口サイズの盛り付け",
    badge: "看板",
  },
  {
    name: "たこの半ナマ火入れ",
    desc: "看板メニューの一品。半ナマ状態で絶妙な火入れを施したたこ刺身。からし酢味噌・梅肉・醤油とともに、食感と旨味をお楽しみください。",
    src: "/shop/menu-tako.png",
    alt: "たこの半ナマ火入れ。からし酢味噌・梅肉・醤油を添えた刺身盛り",
    badge: "看板",
  },
  {
    name: "煮付け",
    desc: "看板メニューの一品。じっくり煮込んだ魚の身は、とろりとした食感と濃厚なタレの旨味が口いっぱいに広がります。白髪ねぎを添えて、ぜひご賞味ください。",
    src: "/shop/menu-nitsuke.png",
    alt: "煮付け。青い花形の皿に盛られた煮魚。白髪ねぎと緑の野菜を添えた一皿",
    badge: "看板",
  },
  {
    name: "鯛のユッケ カルパッチョ風",
    desc: "薄切りにした鯛を円形に盛り付け、中央に黄身、刻みのり・白ごまを添えた一皿。ごま油の風味が引き立つ、カルパッチョ風のユッケです。",
    src: "/shop/menu-tai-yukke.png",
    alt: "鯛のユッケ カルパッチョ風。薄切りの鯛に黄身・刻みのり・白ごまを添えた一皿",
    badge: "おすすめ",
  },
];

const PREPARING_SLOTS = 0;

export default function Menu() {
  return (
    <section id="menu" className="scroll-mt-14 bg-stone-50 px-4 py-12 sm:px-8 sm:py-16 lg:px-12 lg:py-24">
      <div className="mx-auto max-w-5xl">
        <div className="mb-10 flex items-center gap-6 sm:mb-16">
          <div className="h-px w-8 bg-red-900" />
          <p className="font-serif text-[11px] tracking-[0.4em] text-red-900/70 uppercase">
            Menu
          </p>
        </div>
        <h2 className="mb-3 font-serif text-2xl font-light tracking-[0.25em] text-zinc-800">
          お料理・おすすめ
        </h2>
        <p className="mb-10 font-serif text-sm leading-loose tracking-wider text-stone-500 sm:mb-14">
          おすすめ料理の写真を掲載しております。その他メニューの詳細は店舗へお問い合わせください。
          <br />
          おおよそのご予算の目安は、お一人様{" "}
          <span className="text-red-950/90">5,000円〜6,000円</span> 程度です。
        </p>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {menuItems.map((item) => (
            <article
              key={item.name}
              className="group overflow-hidden border border-stone-100 bg-white transition-shadow duration-300 hover:shadow-md"
            >
              <div className="relative h-40 overflow-hidden bg-stone-900/5 sm:h-44">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute left-3 top-3 bg-red-950 px-3 py-1 font-serif text-[10px] tracking-widest text-white">
                  {item.badge}
                </span>
              </div>
              <div className="border-t border-stone-100 p-5">
                <h3 className="mb-2 font-serif text-[15px] tracking-[0.2em] text-zinc-800">
                  {item.name}
                </h3>
                <p className="font-serif text-[12px] leading-[1.9] tracking-wide text-stone-500">
                  {item.desc}
                </p>
              </div>
            </article>
          ))}

          {Array.from({ length: PREPARING_SLOTS }, (_, i) => (
            <article
              key={`preparing-${i}`}
              className="overflow-hidden border border-dashed border-stone-200 bg-white/80"
            >
              <div className="relative flex h-40 flex-col items-center justify-center bg-stone-100/90 text-stone-400 sm:h-44">
                <span className="font-serif text-lg tracking-[0.45em] text-stone-500">
                  準備中
                </span>
                <span className="mt-3 font-serif text-[11px] tracking-wider text-stone-400">
                  写真・掲載準備中
                </span>
              </div>
              <div className="border-t border-stone-100/80 p-5">
                <h3 className="mb-2 font-serif text-[15px] tracking-[0.2em] text-stone-400">
                  準備中
                </h3>
                <p className="font-serif text-[12px] leading-[1.9] tracking-wide text-stone-400">
                  その他のおすすめ料理の写真は、整い次第こちらに掲載いたします。
                </p>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-12 text-center font-serif text-[11px] tracking-widest text-stone-400">
          ※ 詳細なメニューはお電話（080-2796-1533）にてお問い合わせください
        </p>
      </div>
    </section>
  );
}
