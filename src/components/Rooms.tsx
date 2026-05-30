const highlights = [
  {
    name: "食事・サービス",
    tag: "クチコミ 5/5",
    desc: "食事・サービスともに満点の評価をいただいております。お一人様からグループまで、丁寧なおもてなしでお迎えいたします。",
    icon: "🍽️",
  },
  {
    name: "静かな雰囲気",
    tag: "雰囲気 4〜5/5",
    desc: "「静かで、会話しやすい」とのお声をいただいております。落ち着いた空間で、ゆっくりとお食事・お酒をお楽しみいただけます。",
    icon: "🍶",
  },
  {
    name: "駐車・待ち時間",
    tag: "アクセス",
    desc: "空いている駐車スペースは多く、有料駐車場・有料の屋内駐車場をご利用いただけます。待ち時間なしとのクチコミもございます。",
    icon: "🅿️",
  },
];

export default function Rooms() {
  return (
    <section id="rooms" className="scroll-mt-14 bg-zinc-900 px-4 py-12 sm:px-8 sm:py-16 lg:px-12 lg:py-24">
      <div className="mx-auto max-w-5xl">
        <div className="mb-10 flex items-center gap-6 sm:mb-16">
          <div className="h-px w-8 bg-red-800" />
          <p className="font-serif text-[11px] tracking-[0.4em] text-red-800 uppercase">
            Reviews
          </p>
        </div>
        <h2 className="mb-3 font-serif text-2xl font-light tracking-[0.25em] text-white">
          クチコミから見えるお店
        </h2>
        <p className="mb-10 font-serif text-sm leading-loose tracking-wider text-white/45 sm:mb-14">
          現在2件のクチコミ（いずれも星5）。Googleマップに寄せられた評価をもとにご紹介しております。
        </p>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {highlights.map((item) => (
            <div
              key={item.name}
              className="border border-white/10 bg-white/[0.03] p-6 sm:p-8"
            >
              <p className="mb-4 text-2xl" aria-hidden>
                {item.icon}
              </p>
              <p className="mb-2 font-serif text-[10px] tracking-[0.3em] text-red-800/80">
                {item.tag}
              </p>
              <h3 className="mb-4 font-serif text-lg tracking-[0.25em] text-white">
                {item.name}
              </h3>
              <p className="font-serif text-[12px] leading-[2] tracking-wide text-white/50">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        <p className="mt-12 text-center font-serif text-[11px] tracking-widest text-white/30">
          ※ 1人〜8人までのご利用実績あり。詳細はお電話（080-2796-1533）にてお問い合わせください
        </p>
      </div>
    </section>
  );
}
