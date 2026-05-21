const features = [
  {
    number: "01",
    title: "割烹と居酒屋",
    desc: "本格的な割烹の要素と、気軽に楽しめる居酒屋のよさを併せ持つスタイル。旅館を思わせる落ち着いた外観と空間の中で、上質な和のひとときをお過ごしいただけます。",
  },
  {
    number: "02",
    title: "旬の魚介と鮮度",
    desc: "ふぐをはじめとした魚介を中心に、毎日厳選した旬の素材をご用意。お刺身の盛り合わせはもっとも人気の看板メニューで、口コミでも「鮮度が絶品」と評価をいただいております。",
  },
  {
    number: "03",
    title: "カウンターと個室",
    desc: "おひとり様やサクッと一杯のカウンター席に加え、ご家族の集まりやご接待にご利用いただける個室もございます。お席の空き状況はご予約の際にご相談ください。",
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
