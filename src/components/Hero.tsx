import { Building2 } from "lucide-react";
import Image from "next/image";
import { demoStore } from "@/data/demoStore";

/** 上段2枚＋下段2枚（ビールは左上のみ／重複しない） */
const heroTopImages = [
  {
    src: "/shop/hero-cheers.png",
    alt: "ビールグラスを合わせて乾杯するシーン。温かい店内の雰囲気",
    objectClass: "object-cover object-center",
  },
  {
    src: "/shop/hero-dining-room.png",
    alt: "木のカウンター席と個室のある落ち着いた和風店内",
    objectClass: "object-cover object-center",
  },
] as const;

const heroBottomImages = [
  {
    src: "/shop/hero-meat.png",
    alt: "ネギをのせた焼き肉とサラダ。木のテーブルに並ぶ和食の一品",
    objectClass: "object-cover object-center",
  },
  {
    src: "/shop/hero-dish.png",
    alt: "花形の飾り付けをしたふろふき大根。和食の一品",
    objectClass: "object-cover object-center",
  },
] as const;

export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-[280px] h-[calc(100vh-3.5rem)] scroll-mt-14 overflow-hidden supports-[height:100dvh]:h-[calc(100dvh-3.5rem)]"
    >
      <div className="absolute inset-0 grid grid-rows-2">
        <div className="grid min-h-0 grid-cols-2">
          {heroTopImages.map((img) => (
            <div key={img.src} className="relative min-h-0 overflow-hidden">
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 768px) 50vw, 50vw"
                className={img.objectClass}
                priority
              />
            </div>
          ))}
        </div>

        <div className="grid min-h-0 grid-cols-2">
          {heroBottomImages.map((img) => (
            <div key={img.src} className="relative min-h-0 overflow-hidden">
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 768px) 50vw, 50vw"
                className={img.objectClass}
                priority
              />
            </div>
          ))}
        </div>
      </div>

      <div className="absolute inset-0 bg-black/15" />

      <div className="absolute inset-0 flex items-center justify-center px-3">
        <div className="flex h-[min(22rem,58svh)] w-[min(11rem,42vw)] max-w-[88vw] flex-col items-center bg-black/82 px-4 py-7 text-white sm:h-[min(360px,52vh)] sm:w-[min(10rem,36vw)] sm:max-w-[11rem] sm:px-6 sm:py-9">
          <div className="mb-3 h-5 w-px shrink-0 bg-white/25 sm:mb-5" />

          <div
            className="flex min-h-0 flex-1 items-center justify-center text-[clamp(1.35rem,6.5vw,1.85rem)] font-light tracking-[0.45em] text-white/92 sm:text-[clamp(1.25rem,3.2vw,1.75rem)] sm:tracking-[0.5em]"
            style={{ writingMode: "vertical-rl", textOrientation: "upright" }}
          >
            {demoStore.name}
          </div>

          <div className="my-3 h-px w-10 shrink-0 bg-white/25 sm:my-4" />

          <div className="flex max-w-[11rem] shrink-0 flex-col items-center gap-2 px-0.5">
            <Building2 size={17} className="text-white/60" />
            <span
              className="text-center text-[9.5px] leading-snug tracking-wider text-white/65 sm:text-[10px] sm:whitespace-nowrap sm:text-white/60"
              style={{ writingMode: "horizontal-tb" }}
            >
              個室・カウンター席／駐車場あり
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
