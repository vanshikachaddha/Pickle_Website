"use client";

import Image from "next/image";
import { useState } from "react";

type SpotlightState = {
  x: number;
  y: number;
  active: boolean;
};

export default function AboutHero() {
  const [spotlight, setSpotlight] = useState<SpotlightState>({
    x: 50,
    y: 70,
    active: false,
  });

  return (
    <section
      className="relative -mt-[88px] h-[calc(100svh+88px)] overflow-hidden bg-[#050510] pt-[88px]"
      onMouseMove={(event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        const x = ((event.clientX - rect.left) / rect.width) * 100;
        const y = ((event.clientY - rect.top) / rect.height) * 100;

        setSpotlight({ x, y, active: true });
      }}
      onMouseLeave={() =>
        setSpotlight((current) => ({
          ...current,
          active: false,
        }))
      }
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_18%,rgba(155,77,255,0.18),transparent_22%),radial-gradient(circle_at_82%_16%,rgba(255,31,135,0.12),transparent_18%),linear-gradient(180deg,rgba(8,8,18,0.76)_0%,rgba(5,5,16,0.94)_58%,rgba(5,5,16,1)_100%)]" />
      <div className="pointer-events-none absolute left-[10%] top-[18%] h-44 w-44 rounded-full bg-[#9b4dff]/14 blur-3xl" />
      <div className="pointer-events-none absolute right-[14%] top-[24%] h-40 w-40 rounded-full bg-[#ff1f87]/10 blur-3xl" />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-[1] transition-opacity duration-300"
        style={{
          opacity: spotlight.active ? 0.82 : 0.38,
          background: `radial-gradient(circle 420px at ${spotlight.x}% ${spotlight.y}%, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0.12) 16%, rgba(255,31,135,0.1) 34%, rgba(155,77,255,0.08) 52%, rgba(5,5,16,0) 78%)`,
          mixBlendMode: "screen",
        }}
      />

      <div className="relative mx-auto h-[calc(100svh-88px)] w-full max-w-7xl px-4 pb-0 pt-14 sm:px-6 lg:px-8 lg:pt-16">
        <div className="relative z-10 max-w-3xl">
          <p className="font-oswald text-sm font-bold uppercase tracking-[0.24em] text-[#ff1f87] sm:text-base">
            About The Team
          </p>
          <h1 className="font-oswald mt-3 text-5xl font-bold uppercase leading-[0.92] tracking-[0.08em] text-white sm:text-6xl lg:text-7xl">
            Simple To Play.
            <br />
            Hard To Put Down.
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-white/72 sm:text-lg sm:leading-8">
            We&apos;re a team that cares about the little details, the big
            moments, and everything in between. Every feature, every design
            choice, and every mechanic comes from us asking one question: would
            this be fun to play with our friends?
          </p>
        </div>

        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[64vh] min-h-[430px] sm:h-[72vh] lg:h-[88vh]">
          <Image
            src="/newteam.png"
            alt="Picklemania team"
            fill
            priority
            className="object-cover object-[center_top]"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,5,16,0)_0%,rgba(5,5,16,0.08)_36%,rgba(5,5,16,0.16)_100%)]" />
        </div>
      </div>
    </section>
  );
}
