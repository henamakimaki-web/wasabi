import Image from "next/image";

/**
 * 2×2 コラージュ（左上→右上→左下→右下）
 * 上段2枚は object-top で下側トリミング。
 * 高さは dvh/svh を優先（モバイルのアドレスバー対策）。
 */
const heroImages = [
  {
    src: "/shop/fv-sign.png",
    alt: "居酒屋まさまさの看板。壁面に掲げられた「居酒屋 まさまさ MASAMASA」のサイン",
    objectClass: "object-cover object-center",
  },
  {
    src: "/shop/fv-tempura.png",
    alt: "天ぷら盛り合わせ。海老・野菜の揚げ物",
    objectClass: "object-cover object-center",
  },
  {
    src: "/shop/fv-sake.png",
    alt: "獺祭など、日本酒のボトル",
    objectClass: "object-cover object-center",
  },
  {
    src: "/shop/fv-sashimi.png",
    alt: "お刺身の盛り合わせ。旬の魚介とわさび・薬味",
    objectClass: "object-cover object-center",
  },
];

export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-[280px] h-[calc(100vh-3.5rem)] scroll-mt-14 overflow-hidden supports-[height:100dvh]:h-[calc(100dvh-3.5rem)]"
    >
      <div className="absolute inset-0 grid grid-cols-2 grid-rows-2">
        {heroImages.map((img, i) => (
          <div key={img.src} className="relative min-h-0 overflow-hidden">
            <Image
              src={img.src}
              alt={img.alt}
              fill
              sizes="(max-width: 768px) 50vw, 50vw"
              className={img.objectClass}
              priority={i < 2}
            />
          </div>
        ))}
      </div>

      <div className="absolute inset-0 bg-black/15" />

      <div className="absolute inset-0 flex items-center justify-center px-4">
        <div className="flex flex-col items-center gap-5 sm:gap-6">
          <Image
            src="/shop/logo-masamasa.png"
            alt="居酒屋まさまさ"
            width={334}
            height={206}
            className="h-auto w-[min(17rem,78vw)] drop-shadow-[0_4px_24px_rgba(0,0,0,0.35)] sm:w-[min(20rem,44vw)]"
            priority
          />
          <p className="font-serif text-[10px] tracking-[0.35em] text-white/90 drop-shadow-[0_1px_8px_rgba(0,0,0,0.5)] sm:text-[11px]">
            ディナー／イートイン
          </p>
        </div>
      </div>
    </section>
  );
}
