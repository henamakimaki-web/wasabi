const scenes = [
  {
    en: "Solo",
    ja: "おひとり様",
    desc: "1人でのご利用実績あり。静かで会話しやすい落ち着いた空間で、ゆっくりとお食事をお楽しみいただけます。",
    icon: "🍶",
  },
  {
    en: "Pair",
    ja: "お二人様",
    desc: "2人でのご来店も多くいただいております。落ち着いた雰囲気の中、会話を楽しみながらディナーをお過ごしください。",
    icon: "🥂",
  },
  {
    en: "Small group",
    ja: "3〜4人",
    desc: "3〜4人のグループでのご利用も可能です。食事・サービスともに満点評価のお店で、心安らぐひとときを。",
    icon: "👨‍👩‍👧",
  },
  {
    en: "Group",
    ja: "5〜8人",
    desc: "5〜8人のグループでのご来店実績もございます。ご人数に応じてお電話にてご相談ください。",
    icon: "🎉",
  },
  {
    en: "Business",
    ja: "ご接待・会食",
    desc: "静かで会話しやすい空間は、ご接待や会食にも。事前にお電話にてご予約・ご相談をおすすめいたします。",
    icon: "🍱",
  },
  {
    en: "Anniversary",
    ja: "記念日・誕生日",
    desc: "特別な一日を、落ち着いた雰囲気の中で。価格帯の目安はお一人様 5,000円〜6,000円程度です。",
    icon: "🎂",
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
          1人から8人まで、さまざまな人数でのご利用実績があります
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
