import Image from "next/image";
import { demoStore } from "@/data/demoStore";

const spaces = [
  {
    name: "カウンター席",
    capacity: "おひとり様・お二人様に",
    desc: "気軽に立ち寄れるカウンター席をご用意しております。職人の仕事ぶりを間近に感じながら、一杯のお時間も心地よくお過ごしいただけます。",
    src: "/shop/rooms-counter-2026.png",
    alt: "木のカウンター席と調理場。椅子が並ぶ落ち着いた和風の店内",
  },
  {
    name: "個室",
    capacity: "お人数に応じて",
    desc: "ご接待・ご会食やご家族のお食事など、シーンに合わせて個室をご利用いただけます。空き状況はお電話またはネット予約にてご確認ください。",
    src: "/shop/rooms-private-2026.png",
    alt: "畳敷きの個室。座布団と低い木のテーブル、暖色の照明が印象的な和室",
  },
  {
    name: "旅館の趣ある店内",
    capacity: "落ち着いた照明",
    desc: "旅館を思わせる外観・内装が評判です。割烹と居酒屋の良さを感じられる空間で、上質な和のひとときをお楽しみください。",
    src: "/shop/rooms-entrance-2026.png",
    alt: "下駄が置かれた入口から見える店内。暖簾と「迎」の掛け軸のある和の空間",
  },
];

export default function Rooms() {
  return (
    <section id="rooms" className="scroll-mt-14 bg-zinc-900 px-4 py-12 sm:px-8 sm:py-16 lg:px-12 lg:py-24">
      <div className="mx-auto max-w-5xl">
        <div className="mb-10 flex items-center gap-6 sm:mb-16">
          <div className="h-px w-8 bg-red-800" />
          <p className="font-serif text-[11px] tracking-[0.4em] text-red-800 uppercase">
            Seat & Space
          </p>
        </div>
        <h2 className="mb-3 font-serif text-2xl font-light tracking-[0.25em] text-white">
          お席・空間のご案内
        </h2>
        <p className="mb-10 font-serif text-sm leading-loose tracking-wider text-white/45 sm:mb-14">
          カウンター席と個室の雰囲気を、店内の写真でご紹介しております。
        </p>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {spaces.map((space) => (
            <div key={space.name} className="group">
              <div className="relative h-52 overflow-hidden sm:h-56">
                <Image
                  src={space.src}
                  alt={space.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover object-center brightness-[0.92] transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <p className="mb-1 font-serif text-[10px] tracking-[0.3em] text-white/50">
                    {space.capacity}
                  </p>
                  <h3 className="font-serif text-lg tracking-[0.3em] text-white">
                    {space.name}
                  </h3>
                </div>
              </div>

              <div className="mt-0 border-t border-white/10 pt-5">
                <p className="font-serif text-[12px] leading-[2] tracking-wide text-white/50">
                  {space.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-12 text-center font-serif text-[11px] tracking-widest text-white/30">
          ※ 空き状況はお電話（{demoStore.phone}）またはネット予約にてご確認ください（デモ表示）
        </p>
      </div>
    </section>
  );
}
