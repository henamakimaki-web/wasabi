"use client";

import { ChevronDown, ChevronRight, Menu } from "lucide-react";
import Link from "next/link";

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
    <header className="fixed left-0 right-0 top-0 z-40 flex h-14 shadow-sm lg:left-48">
      <button
        type="button"
        onClick={onOpenMenu}
        className="flex h-full w-12 shrink-0 items-center justify-center border-r border-gray-100 bg-white text-gray-700 hover:bg-gray-50 lg:hidden"
        aria-label="メニューを開く"
      >
        <Menu size={22} strokeWidth={1.75} />
      </button>

      <nav className="flex flex-1 items-center overflow-x-auto bg-white">
        {menuItems.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className="flex h-full shrink-0 items-center gap-0.5 whitespace-nowrap border-r border-gray-100 px-3 text-[13px] tracking-wide text-gray-700 transition-colors hover:bg-gray-50"
          >
            {item.label}
            <ChevronDown
              size={11}
              className="mt-0.5 shrink-0 text-gray-400"
            />
          </Link>
        ))}
      </nav>

      <Link
        href="/#access"
        className="group flex min-w-[190px] shrink-0 items-center justify-between gap-3 bg-red-950 px-4 text-white transition-colors duration-200 hover:bg-red-900"
      >
        <div>
          <div className="text-[10px] leading-snug tracking-widest text-white/75">
            居酒屋・割烹
          </div>
          <div className="text-[13px] font-medium leading-snug tracking-wide">
            和さび
          </div>
          <div className="mt-0.5 text-[11px] tracking-wider text-white/75">
            093-601-2021
          </div>
        </div>
        <ChevronRight
          size={13}
          className="shrink-0 text-white/50 transition-colors group-hover:text-white/90"
        />
      </Link>

      <a
        href="https://autoreserve.com/ja/restaurants/RApyMSvwptxm9sdFcvqB"
        target="_blank"
        rel="noopener noreferrer"
        className="group flex min-w-[120px] shrink-0 items-center justify-center gap-2 bg-black px-5 text-white transition-colors duration-200 hover:bg-gray-900"
      >
        <span className="whitespace-nowrap text-[13px] font-medium tracking-[0.2em]">
          WEB予約
        </span>
        <ChevronRight
          size={13}
          className="shrink-0 text-white/50 transition-colors group-hover:text-white/90"
        />
      </a>
    </header>
  );
}
