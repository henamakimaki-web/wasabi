"use client";

import { ChevronDown, ChevronRight, Menu } from "lucide-react";
import Link from "next/link";
import { demoStore } from "@/data/demoStore";

const menuItems: { label: string; href: string }[] = [
  { label: "おすすめ料理", href: "/#menu" },
  { label: "お席・空間", href: "/#rooms" },
  { label: "ご利用シーン", href: "/#scenes" },
  { label: "コンセプト", href: "/#features" },
  { label: "ご挨拶", href: "/#welcome" },
  { label: "店舗情報", href: "/#access" },
];

type HeaderProps = {
  onOpenMenu: () => void;
};

export default function Header({ onOpenMenu }: HeaderProps) {
  return (
    <header className="fixed left-0 right-0 top-0 z-40 flex h-14 min-h-14 shadow-sm lg:left-48">
      <button
        type="button"
        onClick={onOpenMenu}
        className="flex h-14 min-h-[48px] w-12 min-w-[48px] shrink-0 items-center justify-center border-r border-gray-100 bg-white text-gray-700 active:bg-gray-100 lg:hidden"
        aria-label="メニューを開く"
      >
        <Menu size={22} strokeWidth={1.75} />
      </button>

      {/* スマホは横スクロールナビを廃止（左メニューに集約）。タブレット以上で表示 */}
      <nav className="hidden touch-pan-x flex-1 items-center overflow-x-auto bg-white lg:flex">
        {menuItems.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className="flex h-14 shrink-0 items-center gap-0.5 whitespace-nowrap border-r border-gray-100 px-3 text-[13px] tracking-wide text-gray-700 transition-colors hover:bg-gray-50"
          >
            {item.label}
            <ChevronDown
              size={11}
              className="mt-0.5 shrink-0 text-gray-400"
            />
          </Link>
        ))}
      </nav>

      <div className="group flex min-h-[48px] min-w-0 flex-1 items-center justify-between gap-2 bg-red-950 px-2.5 text-white sm:gap-3 sm:px-3 lg:min-w-[190px] lg:flex-initial lg:px-4">
        <div className="min-w-0">
          <div className="hidden text-[10px] leading-snug tracking-widest text-white/75 sm:block">
            {demoStore.tagline}
          </div>
          <div className="text-[12px] font-medium leading-snug tracking-wide sm:text-[13px]">
            {demoStore.name}
          </div>
          <div className="mt-0.5 truncate text-[10px] tracking-wider text-white/75 sm:text-[11px]">
            {demoStore.phone}
          </div>
        </div>
        <ChevronRight
          size={13}
          className="shrink-0 text-white/50 transition-colors group-hover:text-white/90"
        />
      </div>

      <button
        type="button"
        className="group flex min-h-[48px] min-w-[5.5rem] shrink-0 cursor-default items-center justify-center gap-1.5 bg-black px-3 text-white sm:min-w-[120px] sm:gap-2 sm:px-5"
      >
        <span className="whitespace-nowrap text-center text-[10.5px] font-medium tracking-[0.08em] sm:text-[13px] sm:tracking-[0.2em]">
          WEB予約
        </span>
        <ChevronRight
          size={13}
          className="shrink-0 text-white/50 transition-colors group-hover:text-white/90"
        />
      </button>
    </header>
  );
}
