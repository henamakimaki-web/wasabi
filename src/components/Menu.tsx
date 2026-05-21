import Image from "next/image";

const featuredMenu = {
  name: "お刺身の盛り合わせ",
  desc: "鮮度にこだわった旬の魚介を、職人が一枚一枚丁寧に盛り付けた看板メニュー。白身から本鮪まで、その日の仕入れで内容が変わります。わさび・薬味とともに、素材の味を存分にお楽しみください。",
  src: "/shop/menu-osashimi.png",
  badge: "看板",
};

const PREPARING_SLOTS = 6;

export default function Menu() {
  return (
    <section id="menu" className="scroll-mt-14 bg-stone-50 px-12 py-24">
      <div className="mx-auto max-w-5xl">
        <div className="mb-16 flex items-center gap-6">
          <div className="h-px w-8 bg-red-900" />
          <p className="font-serif text-[11px] tracking-[0.4em] text-red-900/70 uppercase">
            Menu
          </p>
        </div>
        <h2 className="mb-3 font-serif text-2xl font-light tracking-[0.25em] text-zinc-800">
          お料理・おすすめ
        </h2>
        <p className="mb-16 font-serif text-sm leading-loose tracking-wider text-stone-500">
          現在は看板のお刺身盛り合わせのみ写真を掲載しております。その他メニューの写真は
          <span className="text-red-950/80">準備中</span>
          です。コース・飲み放題の詳細は店舗へお問い合わせください（宴会プランのご相談も承ります）。
          <br />
          おおよそのご予算の目安は、お一人様{" "}
          <span className="text-red-950/90">4,000円〜5,000円</span> 程度です。
        </p>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <article className="group overflow-hidden border border-stone-100 bg-white transition-shadow duration-300 hover:shadow-md">
            <div className="relative h-44 overflow-hidden bg-stone-900/5">
              <Image
                src={featuredMenu.src}
                alt="お刺身の盛り合わせ。旬の魚介とわさび・薬味を青みがかった陶器皿に盛り付けた一皿"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                priority
              />
              <span className="absolute left-3 top-3 bg-red-950 px-3 py-1 font-serif text-[10px] tracking-widest text-white">
                {featuredMenu.badge}
              </span>
            </div>
            <div className="border-t border-stone-100 p-5">
              <h3 className="mb-2 font-serif text-[15px] tracking-[0.2em] text-zinc-800">
                {featuredMenu.name}
              </h3>
              <p className="font-serif text-[12px] leading-[1.9] tracking-wide text-stone-500">
                {featuredMenu.desc}
              </p>
            </div>
          </article>

          {Array.from({ length: PREPARING_SLOTS }, (_, i) => (
            <article
              key={`preparing-${i}`}
              className="overflow-hidden border border-dashed border-stone-200 bg-white/80"
            >
              <div className="relative flex h-44 flex-col items-center justify-center bg-stone-100/90 text-stone-400">
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

        <div className="mt-12 text-center">
          <a
            href="https://r.gnavi.co.jp/c4ege6st0000/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 border border-red-950/40 px-8 py-3 font-serif text-[12px] tracking-[0.3em] text-red-950 transition-colors duration-300 hover:bg-red-950 hover:text-white"
          >
            楽天ぐるなびで詳細を見る
          </a>
        </div>
      </div>
    </section>
  );
}
