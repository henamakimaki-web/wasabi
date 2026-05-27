"use client";

import Link from "next/link";
import { demoStore } from "@/data/demoStore";

const navItems: { label: string; href: string }[] = [
  { label: "店舗情報", href: "/#access" },
  { label: "おすすめ料理", href: "/#menu" },
  { label: "お席・空間", href: "/#rooms" },
  { label: "ご利用シーン", href: "/#scenes" },
  { label: "コンセプト", href: "/#features" },
  { label: "ご挨拶", href: "/#welcome" },
  { label: "ご予約", href: "/#reservation" },
];

type SidebarProps = {
  mobileOpen: boolean;
  onNavigate: () => void;
};

export default function Sidebar({ mobileOpen, onNavigate }: SidebarProps) {
  return (
    <aside
      className={`fixed left-0 top-0 z-50 flex h-[100dvh] max-h-[100dvh] w-[min(19.5rem,calc(100vw-2rem))] max-w-[90vw] flex-col overflow-y-auto bg-black text-white transition-transform duration-300 ease-out lg:max-h-none lg:w-48 lg:max-w-none ${
        mobileOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
      }`}
    >
      <div className="flex flex-col items-center justify-center border-b border-white/10 px-4 py-8">
        <Link
          href="/#top"
          onClick={onNavigate}
          className="relative flex min-h-[5rem] w-[5.5rem] flex-col items-center justify-center rounded-full border border-white/40 px-2 py-3 text-center"
        >
          <span className="block font-serif text-[10px] tracking-[0.35em] text-white/70">
            {demoStore.tagline}
          </span>
          <span className="mt-1 block font-serif text-lg tracking-[0.25em] text-white">
            {demoStore.name}
          </span>
          <span className="mt-0.5 block font-serif text-[9px] tracking-widest text-white/45">
            {demoStore.nameEn}
          </span>
        </Link>
      </div>

      <nav className="flex flex-1 flex-col">
        {navItems.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            onClick={onNavigate}
            className="flex min-h-[48px] items-center justify-center border-b border-white/10 px-4 py-3 text-center text-[13px] tracking-[0.18em] text-white/85 transition-colors active:bg-white/15 hover:bg-white/10 hover:text-white"
          >
            {item.label}
          </Link>
        ))}
      </nav>

      <div className="space-y-1.5 border-t border-white/10 px-4 pb-[max(1.25rem,env(safe-area-inset-bottom,0px))] pt-5 text-center">
        <div className="text-[11px] tracking-widest text-white/50">
          EN ｜ JP
        </div>
        <div className="text-[11px] tracking-wide text-white/50">
          CN（ 簡 ｜ 繁 ）
        </div>
      </div>
    </aside>
  );
}
