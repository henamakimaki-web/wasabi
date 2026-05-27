import Image from "next/image";

const menuItems = [
  {
    name: "お刺身の盛り合わせ",
    desc: "鮮度にこだわった旬の魚介を、職人が一枚一枚丁寧に盛り付けた看板メニュー。白身から本鮪まで、その日の仕入れで内容が変わります。わさび・薬味とともに、素材の味を存分にお楽しみください。",
    src: "/shop/menu-osashimi.png",
    alt: "お刺身の盛り合わせ。大トロ・本鮪・白身・ホタテなどを盛り付け、箸で一切れを持ち上げた一皿",
    badge: "看板",
  },
  {
    name: "焼鳥盛り合わせ",
    desc: "炭火で香ばしく焼き上げた串焼きの盛り合わせ。ねぎま・つくね・ももなど、タレの甘みと炭の香りが引き立つ一品。七味唐辛子・山椒とともに、お酒のお供にもぴったりです。",
    src: "/shop/menu-yakitori.png",
    alt: "焼鳥盛り合わせ。ねぎまの串を箸で持ち上げ、タレが滴る様子",
    badge: "おすすめ",
  },
  {
    name: "唐揚げ",
    desc: "ジューシーな鶏もも肉を、サクッと揚げた当店自慢の唐揚げ。外はカリッと、中はほろりとした食感。大葉・水菜・柑橘を添え、特製ダレや七味でお召し上がりください。",
    src: "/shop/menu-karaage.png",
    alt: "唐揚げ。黄金色に揚がった鶏の唐揚げを箸で持ち上げ、ソースが滴る一皿",
    badge: "おすすめ",
  },
] as const;

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
          看板のお刺身盛り合わせをはじめ、焼鳥・唐揚げなど人気の一品をご紹介しております。コース・飲み放題の詳細は店舗へお問い合わせください（宴会プランのご相談も承ります）。
          <br />
          おおよそのご予算の目安は、お一人様{" "}
          <span className="text-red-950/90">4,000円〜5,000円</span> 程度です。
        </p>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {menuItems.map((item, index) => (
            <article
              key={item.src}
              className="group overflow-hidden border border-stone-100 bg-white transition-shadow duration-300 hover:shadow-md"
            >
              <div className="relative h-40 overflow-hidden bg-stone-900/5 sm:h-44">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  priority={index === 0}
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
        </div>

        <div className="mt-12 text-center">
          <button
            type="button"
            className="inline-flex min-h-[48px] cursor-default items-center justify-center gap-2 border border-red-950/40 px-6 py-3 font-serif text-[12px] tracking-[0.25em] text-red-950 sm:px-8 sm:tracking-[0.3em]"
          >
            楽天ぐるなびで詳細を見る（デモ）
          </button>
        </div>
      </div>
    </section>
  );
}
