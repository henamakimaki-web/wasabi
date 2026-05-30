const subHeadingClass =
  "font-serif text-lg font-bold leading-snug tracking-wide text-zinc-800 border-l-4 border-[#8c2727] pl-3 sm:text-xl sm:pl-3.5";

const sceneListItemClass =
  "relative pl-5 text-[15px] leading-[1.75] text-red-950/95 before:absolute before:left-0 before:top-[0.12em] before:font-bold before:text-[#8c2727] before:content-['・'] sm:leading-[1.85]";

export default function WelcomeMessage() {
  return (
    <section
      id="welcome"
      className="scroll-mt-14 px-4 py-16 sm:px-8 lg:px-12"
      style={{ backgroundColor: "#f5f3ef" }}
    >
      <div className="mx-auto max-w-4xl">
        <div className="mx-auto mb-8 h-px w-12 bg-red-950/30 sm:mb-10" />

        {/* メイン見出し：地域タグ＋キャッチを2段で明確化 */}
        <header className="mb-10 text-center sm:mb-12">
          <p className="mb-3">
            <span className="inline-block border border-[#8c2727] px-2.5 py-1 font-serif text-[13px] font-medium tracking-[0.2em] text-[#8c2727] sm:text-sm sm:tracking-[0.24em]">
              北九州市八幡西区
            </span>
          </p>
          <h1 className="font-serif text-[1.125rem] font-bold leading-[1.55] tracking-[0.06em] text-zinc-800 sm:text-xl sm:leading-[1.6] sm:tracking-[0.08em]">
            ディナーにゆっくり楽しめる
            <br />
            居酒屋「まさまさ」
          </h1>
        </header>

        {/* リード */}
        <div className="mb-10 space-y-6 font-serif text-[15px] leading-[1.85] tracking-wide text-red-950/95 sm:mb-12 sm:text-base sm:leading-[1.9]">
          <p>
            北九州市八幡西区三ケ森に佇む「居酒屋まさまさ」は、落ち着いた雰囲気の中でディナーをお楽しみいただける一軒です。
          </p>
          <p>
            店内飲食（イートイン）に対応しており、食事・サービス・雰囲気すべて高評価のクチコミをいただいております。
          </p>
        </div>

        <div className="space-y-8 sm:space-y-10">
          <section className="space-y-4">
            <h2 className={subHeadingClass}>旬の食材とお料理</h2>
            <div className="space-y-5 font-serif text-[15px] leading-[1.85] tracking-wide text-red-950/95 sm:text-base sm:leading-[1.9]">
              <p>
                お刺身や天ぷらなど、和食のお料理をお楽しみいただけます。
              </p>
              <p>
                クチコミでも食事5/5の高評価をいただいております。
              </p>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className={subHeadingClass}>クチコミで評判のお店</h2>
            <p className="font-serif text-[15px] leading-[1.85] tracking-wide text-red-950/95 sm:text-base sm:leading-[1.9]">
              Googleマップのクチコミ（2件・星5）より。1人から8人まで、さまざまな人数でのご利用実績があります。
            </p>
            <ul className="list-none space-y-2.5 pl-0 sm:space-y-3">
              <li className={sceneListItemClass}>
                食事 5/5 ｜ サービス 5/5 ｜ 雰囲気 4〜5/5
              </li>
              <li className={sceneListItemClass}>
                静かで、会話しやすい空間
              </li>
              <li className={sceneListItemClass}>
                1人、2人、3〜4人、5〜8人でのご利用
              </li>
              <li className={sceneListItemClass}>
                待ち時間なし／駐車スペースに余裕あり
              </li>
            </ul>
            <p className="font-serif text-[15px] leading-[1.85] tracking-wide text-red-950/95 sm:text-base sm:leading-[1.9]">
              価格帯の目安は、お一人様 5,000円〜6,000円程度です。
            </p>
          </section>

          <section className="space-y-4 border-t border-red-950/10 pt-8 sm:pt-10">
            <h2 className={subHeadingClass}>【店主より一言】</h2>
            <div className="space-y-4 font-serif text-[15px] leading-[1.85] tracking-wide text-red-950/95 sm:text-base sm:leading-[1.9]">
              <p>当店は多くのお客様にご予約いただいております。</p>
              <p>
                お越しの際は、お電話にて事前にお席のご確認をおすすめいたします。
              </p>
            </div>
          </section>
        </div>

        <p className="mt-10 text-center font-serif text-[13px] tracking-[0.2em] text-stone-500 sm:mt-12">
          居酒屋まさまさ
        </p>

        <div className="mx-auto mt-10 h-px w-8 bg-red-950/20 sm:mt-12" />
      </div>
    </section>
  );
}
