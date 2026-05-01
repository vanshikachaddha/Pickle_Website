"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import SiteFooter from "@/app/components/SiteFooter";
import SiteHeader from "@/app/components/SiteHeader";

type Character = {
  name: string;
  image: string;
  tag: string;
  description: string;
  position?: string;
  size?: string;
};

const characters: Character[] = [
  {
    name: "Picklebelle",
    image: "/characters/Bazaart_1662BCB8-0E9F-4B5F-893D-A357D12DB290.JPEG",
    tag: "Agile / Trickster",
    description:
      "A quick-footed fighter built for sharp rallies and playful pressure.",
    position: "center",
  },
  {
    name: "Sir Trunkington",
    image: "/characters/Bazaart_A3CA0E4E-0E00-4FD0-8A68-1C626CB088E8.JPEG",
    tag: "Heavy / Power",
    description:
      "A heavy hitter who controls the court with powerful returns.",
  },
  {
    name: "Howlin Hank",
    image: "/characters/Bazaart_449FBCD2-EFE9-40C6-8FF8-ED71968A4B6D.JPEG",
    tag: "Balanced / Rally",
    description:
      "A balanced competitor with steady rhythm and reliable defense.",
  },
  {
    name: "Killer Cotton-Tail",
    image: "/characters/Bazaart_330136BE-6C12-42CE-A728-ADE9BCEF68F9.JPEG",
    tag: "Fast / Close Range",
    description:
      "A fast close-range fighter who thrives on quick reactions.",
  },
  {
    name: "Neighvana",
    image: "/characters/Screenshot 2026-05-01 at 3.55.08 AM.png",
    tag: "Technical / Control",
    description:
      "A technical player focused on control, placement, and precision.",
    position: "center center",
  },
  {
    name: "Dumpster Dave",
    image: "/characters/Bazaart_4CB9902D-6C0A-4230-8EE0-D6079260B039.JPEG",
    tag: "Wildcard / Chaos",
    description:
      "A chaotic wildcard who keeps every match unpredictable.",
  },
];

type ControlSlide = {
  title: string;
  image: string;
};

const controlSlides: ControlSlide[] = [
  {
    title: "Step 1",
    image: "/instructions/step1.png",
  },
  {
    title: "Step 2",
    image: "/instructions/step2.png",
  },
  {
    title: "Step 3",
    image: "/instructions/step3.png",
  },
];

export default function FeaturesPage() {
  return (
    <div className="page-shell">
      <SiteHeader />
      <main className="page-main">
        <CharacterShowcaseSection />
        <ControlsSection />
      </main>
      <SiteFooter />
    </div>
  );
}

function CharacterShowcaseSection() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const selectedCharacter = characters[selectedIndex];

  return (
    <section className="relative -mt-[88px] min-h-[calc(100svh+88px)] overflow-hidden bg-[#050510] pt-[88px]">
      <div className="absolute inset-y-0 left-0 w-full overflow-hidden lg:w-[74%] lg:[clip-path:polygon(0_0,100%_0,82%_100%,0_100%)]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('/characters/ChatGPT Image May 1, 2026, 03_41_37 AM.png')",
          }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_22%,rgba(182,80,255,0.12),transparent_20%),radial-gradient(circle_at_82%_14%,rgba(55,213,255,0.08),transparent_16%),linear-gradient(180deg,rgba(18,0,31,0.78)_0%,rgba(26,6,38,0.9)_36%,rgba(8,8,18,0.98)_100%)]" />
      </div>
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,5,16,0.18)_0%,rgba(5,5,16,0.26)_34%,rgba(5,5,16,0.84)_68%,rgba(5,5,16,0.98)_100%)]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-48 bg-[linear-gradient(180deg,rgba(255,31,135,0.08),transparent)]" />
      <div className="pointer-events-none absolute inset-y-0 left-[8%] w-[1px] bg-[linear-gradient(180deg,transparent,rgba(182,80,255,0.45),transparent)] shadow-[0_0_16px_rgba(182,80,255,0.35)]" />
      <div className="pointer-events-none absolute inset-y-0 right-[10%] w-[1px] bg-[linear-gradient(180deg,transparent,rgba(55,213,255,0.28),transparent)] shadow-[0_0_16px_rgba(55,213,255,0.2)]" />

      <div className="relative mx-auto w-full max-w-[1500px] px-4 py-14 sm:px-6 lg:px-8 lg:py-18">
        <div className="mx-auto max-w-5xl text-center">
          <div className="inline-flex max-w-full items-center justify-center px-8 py-3">
            <h1 className="font-oswald text-5xl font-bold uppercase tracking-[0.12em] text-white sm:text-6xl lg:text-7xl">
              Select Your Player
            </h1>
          </div>

          <p className="font-oswald mt-6 text-lg font-semibold uppercase tracking-[0.18em] text-white/78 sm:text-xl">
            Pick Your Champion. Master Your Playstyle.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-6">
          {characters.map((character, index) => {
            const isSelected = index === selectedIndex;

            return (
              <button
                key={character.name}
                type="button"
                onClick={() => setSelectedIndex(index)}
                className={`group relative h-[240px] overflow-hidden border bg-[#12001f] text-left transition duration-300 ease-out md:h-[260px] xl:h-[280px] [clip-path:polygon(0_0,100%_0,100%_84%,88%_100%,0_100%)] ${
                  isSelected
                    ? "border-[#ff1f87] shadow-[0_0_0_1px_rgba(255,31,135,0.6),0_0_26px_rgba(255,31,135,0.28)]"
                    : "border-white/12 hover:-translate-y-1 hover:border-[#ff1f87]/70 hover:shadow-[0_0_22px_rgba(255,31,135,0.22)]"
                }`}
              >
                <div
                  className="absolute inset-0 bg-cover transition duration-500 ease-out group-hover:scale-[1.04]"
                  style={{
                    backgroundImage: `url('${character.image}')`,
                    backgroundPosition: character.position ?? "center",
                    backgroundSize: character.size ?? "cover",
                    backgroundRepeat: "no-repeat",
                  }}
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,5,16,0.08)_0%,rgba(5,5,16,0.14)_42%,rgba(5,5,16,0.92)_100%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_12%,rgba(182,80,255,0.12),transparent_24%)]" />

                <div className="absolute inset-x-0 bottom-0 p-4">
                  <h2
                    className={`font-oswald text-[1.75rem] font-bold italic uppercase leading-none tracking-[0.04em] transition duration-300 ${
                      isSelected
                        ? "text-[#ff1f87] drop-shadow-[0_0_14px_rgba(255,31,135,0.42)]"
                        : "text-white group-hover:text-[#ff1f87]"
                    }`}
                  >
                    {character.name}
                  </h2>
                </div>
              </button>
            );
          })}
        </div>

        <div className="mt-10 rounded-[1.75rem] border border-white/10 bg-black/28 p-5 shadow-[0_0_40px_rgba(182,80,255,0.1)] backdrop-blur-md sm:p-6 lg:p-8">
          <div className="grid gap-6 lg:grid-cols-[0.7fr_1.3fr] lg:items-start">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#ff1f87]">
                Selected Player
              </p>
              <h3 className="font-oswald mt-3 text-4xl font-bold italic uppercase leading-none text-white sm:text-5xl">
                {selectedCharacter.name}
              </h3>
            </div>

            <div className="lg:pt-1">
              <p className="mt-4 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
                {selectedCharacter.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ControlsSection() {
  const [activeSlide, setActiveSlide] = useState(0);
  const currentSlide = controlSlides[activeSlide];

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % controlSlides.length);
    }, 4000);

    return () => window.clearInterval(intervalId);
  }, []);

  const goToPrevSlide = () => {
    setActiveSlide((current) =>
      current === 0 ? controlSlides.length - 1 : current - 1,
    );
  };

  const goToNextSlide = () => {
    setActiveSlide((current) => (current + 1) % controlSlides.length);
  };

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#050510] lg:h-screen">
      <div className="absolute inset-x-0 -top-12 bottom-0 overflow-hidden lg:-top-16 lg:[clip-path:polygon(0_0,100%_0,100%_100%,0_100%)]">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-100"
          style={{ backgroundImage: "url('/background_video.png')" }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(155,77,255,0.12),transparent_18%),radial-gradient(circle_at_82%_22%,rgba(255,31,135,0.08),transparent_18%),radial-gradient(circle_at_50%_78%,rgba(55,213,255,0.04),transparent_20%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,5,16,0.22)_0%,rgba(5,5,16,0.46)_22%,rgba(5,5,16,0.78)_100%)]" />
      </div>
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,5,16,0.72)_0%,rgba(5,5,16,0.48)_28%,rgba(5,5,16,0.22)_48%,rgba(5,5,16,0.56)_68%,rgba(5,5,16,0.9)_100%)]" />
      <div className="pointer-events-none absolute left-[6%] top-[16%] h-72 w-72 rounded-full bg-[#9b4dff]/14 blur-3xl" />
      <div className="pointer-events-none absolute left-[22%] top-[30%] h-44 w-44 rounded-full bg-[#ff1f87]/10 blur-3xl" />
      <div className="pointer-events-none absolute right-[12%] top-[20%] h-56 w-56 rounded-full bg-[#37d5ff]/8 blur-3xl" />

      <div className="relative mx-auto flex min-h-screen w-full max-w-[1500px] flex-col px-4 py-16 sm:px-6 lg:px-8">
        <div className="max-w-3xl shrink-0">
          <p className="font-oswald text-sm font-bold uppercase tracking-[0.24em] text-[#ff1f87] sm:text-base">
            How To Play
          </p>
          <h2 className="font-oswald mt-2 text-4xl font-bold uppercase leading-[0.92] tracking-[0.08em] text-white drop-shadow-[0_0_18px_rgba(255,31,135,0.16)] sm:text-5xl lg:text-[4rem]">
            Master The Controls
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-white/68 sm:text-base">
            Learn how to move, serve, swing, and time your shot before
            stepping into the arena.
          </p>
        </div>

        <div className="relative mx-auto mt-8 flex w-full max-w-[900px] flex-1 flex-col overflow-hidden rounded-[2rem] border border-[#9b4dff]/24 bg-black/42 p-5 shadow-[0_0_38px_rgba(155,77,255,0.14)] backdrop-blur-md sm:p-6 lg:h-[520px] lg:flex-none lg:p-8">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-28 bg-[linear-gradient(180deg,rgba(255,31,135,0.09),transparent)]" />

          <div className="relative flex min-h-0 flex-1 flex-col">
            <div className="relative min-h-[260px] flex-1 overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#0a0810] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.03)] sm:min-h-[300px] lg:min-h-0">
              <Image
                src={currentSlide.image}
                alt={currentSlide.title}
                fill
                className="object-cover object-[center_68%]"
                sizes="(max-width: 1024px) 100vw, 900px"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,5,16,0.05)_0%,rgba(5,5,16,0.12)_38%,rgba(5,5,16,0.88)_100%)]" />

              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_8%,rgba(182,80,255,0.16),transparent_26%),radial-gradient(circle_at_80%_18%,rgba(255,31,135,0.1),transparent_22%)]" />

              <button
                type="button"
                aria-label="Previous slide"
                onClick={goToPrevSlide}
                className="absolute left-4 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/14 bg-black/45 text-2xl text-white shadow-[0_0_20px_rgba(155,77,255,0.12)] backdrop-blur transition hover:border-[#ff1f87]/45 hover:text-[#ff1f87]"
              >
                ‹
              </button>
              <button
                type="button"
                aria-label="Next slide"
                onClick={goToNextSlide}
                className="absolute right-4 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/14 bg-black/45 text-2xl text-white shadow-[0_0_20px_rgba(155,77,255,0.12)] backdrop-blur transition hover:border-[#ff1f87]/45 hover:text-[#ff1f87]"
              >
                ›
              </button>
            </div>

            <div className="mt-4 flex shrink-0 items-center justify-center gap-2.5">
              {controlSlides.map((slide, index) => {
                const isActive = index === activeSlide;

                return (
                  <button
                    key={slide.title}
                    type="button"
                    aria-label={`Go to ${slide.title} slide`}
                    onClick={() => setActiveSlide(index)}
                    className={`h-2.5 rounded-full transition ${
                      isActive
                        ? "w-8 bg-[#ff1f87] shadow-[0_0_14px_rgba(255,31,135,0.6)]"
                        : "w-2.5 bg-white/28 hover:bg-white/45"
                    }`}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
