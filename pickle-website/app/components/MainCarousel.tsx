"use client";

import Image from "next/image";
import { useEffect, useState, useSyncExternalStore } from "react";
import { AnimatePresence, motion } from "framer-motion";

const slides = [
  {
    src: "/carousel/slide1.png",
    alt: "Picklemania key art with the main cast",
    eyebrow: "Featured Artwork",
    title: "PICKLEMANIA",
    subtitle: "The main page now opens with a cinematic carousel that sits behind the transparent header and pushes the art first.",
  },
  {
    src: "/carousel/slide02.png",
    alt: "Picklemania key art with the main cast",
    eyebrow: "Slide 02",
    title: "ROSTER ENERGY",
    subtitle: "Replace this duplicate with your second screenshot or poster once you have it ready.",
  },
  {
    src: "/carousel/slide3.png",
    alt: "Picklemania key art with the main cast",
    eyebrow: "Slide 03",
    title: "MATCH NIGHT",
    subtitle: "Use this slot for gameplay action, a versus screen, or a dramatic environment shot.",
  },
  {
    src: "/carousel/slide4.png",
    alt: "Picklemania key art with the main cast",
    eyebrow: "Slide 04",
    title: "WORLD BUILDING",
    subtitle: "This slot can carry lore art, a boss reveal, or any key promo image you want to spotlight.",
  },
];

const emberSpecs = Array.from({ length: 78 }, (_, index) => {
  const seed = index + 1;
  const rand = (offset: number) => {
    const value = Math.sin(seed * 97.13 + offset * 31.7) * 43758.5453;
    return value - Math.floor(value);
  };

  return {
    left: `${4 + rand(1) * 92}%`,
    top: `${8 + rand(2) * 76}%`,
    size: 3 + Math.round(rand(3) * 6),
    x1: (rand(4) - 0.5) * 42,
    x2: (rand(5) - 0.5) * 96,
    x3: (rand(6) - 0.5) * 140,
    y1: -10 - rand(7) * 24,
    y2: -26 - rand(8) * 44,
    y3: -42 - rand(9) * 72,
    delay: rand(6) * 3.4,
    duration: 3.6 + rand(10) * 3.8,
    glow: 0.7 + rand(11) * 0.45,
    rotate: (rand(12) - 0.5) * 110,
  };
});

export default function MainCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const autoRotateEnabled = true;
  const isMounted = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  );

  useEffect(() => {
    if (!autoRotateEnabled) {
      return;
    }

    const interval = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % slides.length);
    }, 5500);

    return () => window.clearInterval(interval);
  }, [autoRotateEnabled]);

  const scrollToFeatureSection = () => {
    document.getElementById("section-three")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <section className="relative -mt-[88px] h-[100svh] overflow-hidden pt-[88px]">
      <div className="absolute inset-0 bg-slate-950" />

      <AnimatePresence mode="wait">
        <motion.div
          key={activeIndex}
          className="absolute inset-0"
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <Image
            src={slides[activeIndex].src}
            alt={slides[activeIndex].alt}
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
        </motion.div>
      </AnimatePresence>

      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(2,6,23,0.04)_0%,rgba(2,6,23,0.08)_24%,rgba(2,6,23,0.38)_100%)]" />

      {activeIndex === 0 ? (
      <>
        {isMounted ? (
          <div className="pointer-events-none absolute inset-0 z-10 overflow-hidden">
            {emberSpecs.map((spark, index) => (
              <motion.span
                key={`ember-${spark.left}-${spark.top}-${index}`}
                className="absolute rounded-full bg-orange-300"
                style={{
                  left: spark.left,
                  top: spark.top,
                  width: spark.size,
                  height: spark.size,
                  boxShadow:
                    `0 0 14px rgba(253, 186, 116, ${spark.glow}), 0 0 34px rgba(249, 115, 22, ${spark.glow}), 0 0 54px rgba(251, 146, 60, ${spark.glow * 0.9})`,
                }}
                animate={{
                  x: [0, spark.x1, spark.x2, spark.x3],
                  y: [0, spark.y1, spark.y2, spark.y3],
                  opacity: [0, 0.95, 0.65, 0],
                  scale: [0.45, 1.15, 0.9, 0.65],
                  rotate: [0, spark.rotate * 0.4, spark.rotate],
                }}
                transition={{
                  duration: spark.duration,
                  delay: spark.delay,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              />
            ))}
          </div>
        ) : null}

        <div className="pointer-events-none absolute right-[2%] top-[25%] z-10 w-[38vw] max-w-[680px] min-w-[320px]">
          <Image
            src="/carousel/PK - Library Logo.png"
            alt="Picklemania: The Ultimate Showdown"
            width={900}
            height={420}
            className="h-auto w-full drop-shadow-[0_12px_18px_rgba(0,0,0,0.55)]"
            priority
          />
        </div>

      <div className="absolute right-[2%] top-[59%] z-20 w-[38vw] max-w-[680px] min-w-[320px] flex justify-center">
          <div className="flex flex-col items-center gap-5">
            <div className="flex gap-5">
            <a
              href="https://store.steampowered.com/app/4632110/Picklemania_The_Ultimate_Showdown/?beta=0"
              target="_blank"
              rel="noreferrer"
              className="cta-button cta-primary cta-rect cta-primary-soft"
            >
              Play
            </a>

            <a
              href="https://www.youtube.com/watch?v=Tve60BS5B2k"
              target="_blank"
              rel="noreferrer"
              className="cta-button cta-outline cta-rect"
            >
              Trailer
            </a>
          </div>

          <div className="steam-badge -mt-9" aria-label="Steam">
            <Image
              src="/carousel/slide_logo_steam.png"
              alt="Steam"
              width={640}
              height={200}
              className="steam-badge-image"
            />
          </div>
        </div>
      </div>
      </>
    ) : null}

      {activeIndex === 1 ? (
      <>
        <div className="pointer-events-none absolute inset-0 z-10 overflow-hidden">
          <motion.div
            className="absolute right-[-8%] top-[-12%] h-[46rem] w-[28rem] rotate-[30deg] rounded-full bg-[linear-gradient(180deg,rgba(244,232,255,0.8),rgba(192,132,252,0.42),rgba(168,85,247,0.1),rgba(168,85,247,0))] blur-3xl mix-blend-screen"
            animate={{
              x: [60, -180, -420],
              y: [-30, 90, 220],
              opacity: [0, 0.9, 0.18, 0],
            }}
            transition={{
              duration: 5.2,
              repeat: Number.POSITIVE_INFINITY,
              repeatDelay: 1.2,
              ease: "easeInOut",
            }}
          />
        </div>

        <div className="pointer-events-none absolute right-[2%] top-[25%] z-20 w-[38vw] max-w-[680px] min-w-[320px]">
          <Image
            src="/carousel/PK - Library Logo.png"
            alt="Picklemania: The Ultimate Showdown"
            width={900}
            height={420}
            className="h-auto w-full drop-shadow-[0_12px_18px_rgba(0,0,0,0.55)]"
            priority
          />
        </div>

        <div className="absolute right-[2%] top-[59%] z-20 w-[38vw] max-w-[680px] min-w-[320px] flex justify-center">
          <div className="flex flex-col items-center gap-5">
            <div className="flex gap-5">
              <button
                type="button"
                onClick={scrollToFeatureSection}
                className="cta-button cta-primary cta-rect buy-now"
              >
                BUY NOW
              </button>
            </div>


          </div>
        </div>
      </>
    ) : null}

      {activeIndex === 2 ? (
      <>
        <div className="pointer-events-none absolute left-1/2 top-1/2 z-10 h-[24rem] w-[58vw] max-w-[760px] min-w-[340px] -translate-x-1/2 -translate-y-1/2 rounded-[3rem] bg-black/42 blur-[28px]" />
        <div className="pointer-events-none absolute left-1/2 top-1/2 z-20 w-[62vw] max-w-[820px] min-w-[360px] -translate-x-1/2 -translate-y-1/2">
          <Image
            src="/carousel/slide3logo.png"
            alt="Picklemania: The Ultimate Showdown"
            width={900}
            height={420}
            className="h-auto w-full drop-shadow-[0_12px_18px_rgba(0,0,0,0.55)]"
            priority
          />
        </div>
      </>
    ) : null}

      {activeIndex === 3 ? (
      <>
        <div className="pointer-events-none absolute left-1/2 top-1/2 z-20 w-[48vw] max-w-[660px] min-w-[240px] -translate-x-1/2 -translate-y-1/2">
          <Image
            src="/carousel/slide4_comingsoon.png"
            alt="Coming soon"
            width={900}
            height={420}
            className="h-auto w-full drop-shadow-[0_12px_18px_rgba(0,0,0,0.55)]"
            priority
          />
        </div>
      </>
    ) : null}

      <div className="relative z-10 mx-auto flex h-full w-full max-w-7xl items-end justify-center px-4 pb-8 sm:px-6 sm:pb-10 lg:px-8">
        <div className="flex flex-wrap justify-center gap-3">
          {slides.map((slide, index) => {
            const isActive = index === activeIndex;

            return (
              <button
                key={`${slide.title}-${index}`}
                type="button"
                onClick={() => setActiveIndex(index)}
                className={`h-3 rounded-full transition-all ${
                  isActive
                    ? "w-14 bg-violet-200 shadow-[0_0_18px_rgba(221,214,254,0.95)]"
                    : "w-8 bg-white/35 hover:bg-white/55"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
