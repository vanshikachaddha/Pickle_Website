"use client";

import Link from "next/link";
import { CircleUserRound, ShoppingCart } from "lucide-react";
import PaddlePurchaseSection from "@/app/components/PaddlePurchaseSection";

const navItems = [
  { href: "/shop", label: "Shop", active: true },
  { href: "/features", label: "Paddles" },
  { href: "/support", label: "Accessories" },
  { href: "/about", label: "About" },
];

export default function ShopPage() {
  return (
    <main className="bg-[#050510] text-white">
      <div className="absolute inset-x-0 top-0 z-20 px-4 pt-4 sm:px-6 lg:px-8 lg:pt-6">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between rounded-full border border-white/10 bg-black/18 px-4 py-3 backdrop-blur-md sm:px-5 lg:px-7">
          <nav className="hidden items-center gap-6 lg:flex">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={`font-oswald relative text-sm font-bold uppercase tracking-[0.18em] transition ${
                  item.active
                    ? "text-white"
                    : "text-white/78 hover:text-[#ff2f9f]"
                }`}
              >
                {item.label}
                {item.active ? (
                  <span className="absolute inset-x-0 -bottom-3 h-[2px] bg-[#9b4dff] shadow-[0_0_16px_rgba(155,77,255,0.85)]" />
                ) : null}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3 sm:gap-5">
            <div className="hidden items-center gap-2 rounded-full border border-[#b650ff]/25 bg-white/6 px-3 py-1.5 sm:flex">
              <span className="h-2 w-2 rounded-full bg-[#b650ff] shadow-[0_0_10px_rgba(182,80,255,0.95)]" />
              <span className="font-oswald text-xs font-bold uppercase tracking-[0.12em] text-white/78">
                Connected
              </span>
            </div>
            <button
              type="button"
              className="text-white/88 transition hover:text-[#ff2f9f]"
            >
              <CircleUserRound className="h-5 w-5" />
            </button>
            <button
              type="button"
              className="text-white/88 transition hover:text-[#ff2f9f]"
            >
              <ShoppingCart className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      <PaddlePurchaseSection />
    </main>
  );
}
