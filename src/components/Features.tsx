const features = [
  {
    number: "01",
    title: "食事・サービス満点",
    desc: "クチコミでは食事・サービスともに5/5の高評価。お一人様から5〜8人のグループまで、幅広い人数でご利用いただいています。",
  },
  {
    number: "02",
    title: "静かで会話しやすい",
    desc: "「静かで、会話しやすい」とのお声をいただいております。雰囲気も4〜5/5と高く、落ち着いたディナーに最適です。",
  },
  {
    number: "03",
    title: "駐車場・待ち時間",
    desc: "空いている駐車スペースは多く、有料駐車場・有料の屋内駐車場をご利用可能。待ち時間なしとのクチコミもございます。",
  },
];

export default function Features() {
  return (
    <section id="features" className="scroll-mt-14 bg-zinc-900 px-4 py-12 sm:px-8 sm:py-16 lg:px-12 lg:py-24">
      <div className="mx-auto max-w-5xl">
        <div className="mb-10 flex items-center gap-6 sm:mb-16">
          <div className="h-px w-8 bg-red-800" />
          <p className="font-serif text-[11px] tracking-[0.4em] text-red-800 uppercase">
            Our Features
          </p>
        </div>
        <h2 className="mb-10 font-serif text-2xl font-light tracking-[0.25em] text-white sm:mb-16">
          お店のコンセプト・特徴
        </h2>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-10 lg:gap-12">
          {features.map((f) => (
            <div key={f.number} className="border-t border-white/15 pt-8">
              <p className="mb-4 font-serif text-[11px] tracking-[0.3em] text-red-800/70">
                {f.number}
              </p>
              <h3 className="mb-5 font-serif text-lg tracking-[0.3em] text-white">
                {f.title}
              </h3>
              <p className="font-serif text-sm leading-[2.2] tracking-wide text-white/55">
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
