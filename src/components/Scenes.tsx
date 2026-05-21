const scenes = [
  {
    en: "Business",
    ja: "ご接待・会食",
    desc: "大切なお客様との会食に。個室をご利用の際は落ち着いた雰囲気の中、鮮度の良い魚介料理でおもてなしいたします（お席はご予約にてご相談ください）。",
    icon: "🍱",
  },
  {
    en: "Anniversary",
    ja: "記念日・誕生日",
    desc: "かけがえのない一日を、旅館の趣ある空間で。料理人の一皿一皿とともに、特別な時間をお過ごしください。",
    icon: "🎂",
  },
  {
    en: "Girls night",
    ja: "女子会",
    desc: "個室をご利用いただければ周りを気にせず会話を楽しめます。カウンターでサクッと一杯という過ごし方も可能です。お料理のボリューム感もご好評いただいております。",
    icon: "🥂",
  },
  {
    en: "Family",
    ja: "家族の集まり",
    desc: "ご家族みなさまでのお食事に。個室でゆっくり囲むもよし、お席は当日の空き状況に応じてご案内いたします。",
    icon: "👨‍👩‍👧",
  },
  {
    en: "Farewell",
    ja: "歓迎会・送別会",
    desc: "宴会プランのご相談も承ります。お人数やご予算、お席の形に応じて、お電話にてお問い合わせください。",
    icon: "🎉",
  },
  {
    en: "Solo",
    ja: "おひとり様",
    desc: "一人でも気軽にご利用いただけるお店です。カウンター席では職人の手仕事を眺めながら、ゆったりとお食事をお楽しみいただけます。",
    icon: "🍶",
  },
];

export default function Scenes() {
  return (
    <section
      id="scenes"
      style={{ backgroundColor: "#f5f3ef" }}
      className="scroll-mt-14 px-4 py-12 sm:px-8 sm:py-16 lg:px-12 lg:py-24"
    >
      <div className="mx-auto max-w-5xl">
        <div className="mb-10 flex items-center gap-6 sm:mb-16">
          <div className="h-px w-8 bg-red-900" />
          <p className="font-serif text-[11px] tracking-[0.4em] text-red-900/70 uppercase">
            Usage Scenes
          </p>
        </div>
        <h2 className="mb-3 font-serif text-2xl font-light tracking-[0.25em] text-zinc-800">
          ご利用シーン
        </h2>
        <p className="mb-10 font-serif text-sm leading-loose tracking-wider text-stone-500 sm:mb-14">
          カウンターと個室、それぞれのお席で幅広いシーンに対応いたします
        </p>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
          {scenes.map((scene) => (
            <div
              key={scene.ja}
              className="border border-stone-100 bg-white p-5 transition-shadow duration-300 hover:shadow-sm sm:p-8"
            >
              <p className="mb-3 font-serif text-[10px] tracking-[0.4em] text-red-900/50">
                {scene.en}
              </p>
              <h3 className="mb-5 border-b border-stone-100 pb-5 font-serif text-lg tracking-[0.25em] text-zinc-800">
                <span className="mr-2" aria-hidden>
                  {scene.icon}
                </span>
                {scene.ja}
              </h3>
              <p className="font-serif text-sm leading-[2.2] tracking-wide text-stone-500">
                {scene.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
