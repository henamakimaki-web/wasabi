"use client";

import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";

export default function SiteShell({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <div className="flex min-h-screen">
      <button
        type="button"
        className={`fixed inset-0 z-40 bg-black/55 transition-opacity duration-200 lg:hidden ${
          mobileOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        aria-label="メニューを閉じる"
        onClick={() => setMobileOpen(false)}
      />
      <Sidebar
        mobileOpen={mobileOpen}
        onNavigate={() => setMobileOpen(false)}
      />
      <main className="flex min-h-screen w-full min-w-0 flex-1 flex-col lg:ml-48">
        <Header onOpenMenu={() => setMobileOpen(true)} />
        {children}
      </main>
    </div>
  );
}
