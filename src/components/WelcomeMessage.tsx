export default function WelcomeMessage() {
  return (
    <section
      id="welcome"
      className="scroll-mt-14 px-12 py-16"
      style={{ backgroundColor: "#f5f3ef" }}
    >
      <div className="max-w-4xl">
        <div className="mb-10 h-px w-12 bg-red-950/30" />

        <p className="font-serif text-lg leading-[2.4] tracking-wider text-red-950">
          北九州市八幡西区、旅館のような佇まいの「和さび」は、割烹と居酒屋の魅力をひとつのお店で味わえる、上質な和の居酒屋です。
          腕を磨いた料理人が、ふぐをはじめとする魚介など旬の食材を厳選。とくに鮮度にこだわったお刺身は、多くのお客様にご好評いただいている看板メニューです。
          カウンター席のほか、ご接待やご会食に適した個室もご用意しております。記念日や女子会、おひとり様の気軽な一杯まで、お席のスタイルに合わせて幅広くご利用いただけます。
          常にご予約で賑わう人気店ですので、お越しの際はお電話またはネット予約にてお席のご確認をおすすめいたします。
        </p>

        <p className="mt-8 font-serif text-[13px] tracking-[0.2em] text-stone-500">
          居酒屋・割烹 和さび（わさび）
        </p>

        <div className="mt-10 h-px w-8 bg-red-950/20" />
      </div>
    </section>
  );
}
