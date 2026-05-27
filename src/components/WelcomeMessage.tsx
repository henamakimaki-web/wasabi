import { demoStore } from "@/data/demoStore";

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
              {demoStore.area}
            </span>
          </p>
          <h1 className="font-serif text-[1.125rem] font-bold leading-[1.55] tracking-[0.06em] text-zinc-800 sm:text-xl sm:leading-[1.6] sm:tracking-[0.08em]">
            割烹の味を、気取らずに味わえる
            <br />
            上質な和の居酒屋「{demoStore.name}」
          </h1>
        </header>

        {/* リード */}
        <div className="mb-10 space-y-6 font-serif text-[15px] leading-[1.85] tracking-wide text-red-950/95 sm:mb-12 sm:text-base sm:leading-[1.9]">
          <p>
            {demoStore.area}に佇む「{demoStore.name}」は、旅館を思わせる落ち着いた佇まいが印象的な一軒です。
          </p>
          <p>
            割烹ならではの確かな手仕事と、居酒屋の気軽さを、ひとつのお店でゆったりとお楽しみいただけます。
          </p>
        </div>

        <div className="space-y-8 sm:space-y-10">
          <section className="space-y-4">
            <h2 className={subHeadingClass}>職人が厳選する旬の食材</h2>
            <div className="space-y-5 font-serif text-[15px] leading-[1.85] tracking-wide text-red-950/95 sm:text-base sm:leading-[1.9]">
              <p>
                腕を磨いた料理人が、ふぐをはじめとする魚介を中心に、旬の食材を日々厳選しております。
              </p>
              <p>
                とくに鮮度にこだわったお刺身は、多くのお客様にご支持いただいている看板の一品です。
              </p>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className={subHeadingClass}>シーンに合わせた上質な空間</h2>
            <p className="font-serif text-[15px] leading-[1.85] tracking-wide text-red-950/95 sm:text-base sm:leading-[1.9]">
              お席はカウンターと個室をご用意しております。ご利用のイメージは、例えば次のような場面です。
            </p>
            <ul className="list-none space-y-2.5 pl-0 sm:space-y-3">
              <li className={sceneListItemClass}>
                カウンター席で、職人の手さばきを眺めながらのおひとり様の一杯
              </li>
              <li className={sceneListItemClass}>
                個室でのご接待・ご会食、大切な方との語らいの時間
              </li>
              <li className={sceneListItemClass}>
                記念日や女子会、ご家族のお集まりなど、心安らぐひととき
              </li>
              <li className={sceneListItemClass}>
                仕事帰りの軽い一杯から、ゆっくりコースまで幅広いご利用
              </li>
            </ul>
            <p className="font-serif text-[15px] leading-[1.85] tracking-wide text-red-950/95 sm:text-base sm:leading-[1.9]">
              お席のスタイルに合わせて、さまざまなシーンでお迎えいたします。
            </p>
          </section>

          <section className="space-y-4 border-t border-red-950/10 pt-8 sm:pt-10">
            <h2 className={subHeadingClass}>【店主より一言】</h2>
            <div className="space-y-4 font-serif text-[15px] leading-[1.85] tracking-wide text-red-950/95 sm:text-base sm:leading-[1.9]">
              <p>当店は多くのお客様にご予約いただいております。</p>
              <p>
                お越しの際は、お電話またはネット予約にて、事前にお席のご確認をおすすめいたします。
              </p>
            </div>
          </section>
        </div>

        <p className="mt-10 text-center font-serif text-[13px] tracking-[0.2em] text-stone-500 sm:mt-12">
          {demoStore.tagline} {demoStore.fullName}
        </p>

        <div className="mx-auto mt-10 h-px w-8 bg-red-950/20 sm:mt-12" />
      </div>
    </section>
  );
}
