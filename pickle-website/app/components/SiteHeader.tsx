"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navItems = [
  { href: "/", label: "Main" },
  { href: "/features", label: "Features" },
  { href: "/about", label: "About" },
];

export default function SiteHeader({
  showLine = true,
}: {
  showLine?: boolean;
}) {
  const pathname = usePathname();
  const [highlightFeatureSection, setHighlightFeatureSection] = useState(false);
  const shouldHighlight = pathname === "/" && highlightFeatureSection;

  useEffect(() => {
    const target = document.getElementById("feature-section");

    if (!target) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setHighlightFeatureSection(entry.isIntersecting);
      },
      {
        threshold: 0.35,
      },
    );

    observer.observe(target);

    return () => observer.disconnect();
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 bg-transparent">
      {showLine ? (
        <div
          aria-hidden
          className={`pointer-events-none absolute inset-x-0 bottom-2 h-[2px] transition-all ${
            shouldHighlight
              ? "bg-[rgba(255,31,107,0.9)] shadow-[0_0_18px_rgba(255,31,107,0.95),0_0_38px_rgba(255,31,107,0.7),0_0_72px_rgba(255,31,107,0.5)]"
              : "bg-violet-100 shadow-[0_0_18px_rgba(221,214,254,1),0_0_38px_rgba(192,132,252,0.95),0_0_72px_rgba(168,85,247,0.85)]"
          }`}
        />
      ) : null}
      <div className="mx-auto flex w-full max-w-7xl items-center justify-end gap-6 px-4 py-4 sm:px-6 lg:px-8">
        <nav className="font-oswald flex flex-wrap items-center justify-end gap-6 text-base font-bold uppercase tracking-[0.14em] text-slate-100 sm:text-lg">
          {navItems.map((item) => {
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`site-header-link px-1 py-2 transition ${
                  isActive
                    ? "text-white"
                    : "text-slate-200/90"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
