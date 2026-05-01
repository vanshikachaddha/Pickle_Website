"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const benefits = [
  {
    title: "30-Day Trial",
    copy: "Play. Test. Love it or return it.",
  },
  {
    title: "1 Year Warranty",
    copy: "Covered for performance.",
  },
  {
    title: "24/7 Support",
    copy: "Always here to help.",
  },
  {
    title: "Official Gear",
    copy: "Of the PK Arena.",
  },
];

type PaddlePurchaseSectionProps = {
  id?: string;
};

export default function PaddlePurchaseSection({
  id,
}: PaddlePurchaseSectionProps) {
  return (
    <section
      id={id}
      className="relative min-h-screen overflow-hidden bg-[#050510]"
    >
      <Image
        src="/vertical_3.png"
        alt="PX-1 Paddle hero background"
        fill
        priority
        className="object-cover object-left"
      />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_38%,rgba(182,80,255,0.22),transparent_20%),radial-gradient(circle_at_72%_22%,rgba(255,31,135,0.12),transparent_18%),linear-gradient(90deg,rgba(5,5,16,0.34)_0%,rgba(6,5,18,0.48)_24%,rgba(5,5,16,0.82)_54%,rgba(5,5,16,0.95)_100%)]" />
      <div className="absolute inset-y-0 right-0 w-[58%] bg-[linear-gradient(90deg,rgba(5,5,16,0)_0%,rgba(5,5,16,0.48)_16%,rgba(5,5,16,0.88)_52%,rgba(5,5,16,0.98)_100%)]" />
      <div className="pointer-events-none absolute left-[14%] top-[26%] hidden h-52 w-52 rounded-full bg-[#9b4dff]/16 blur-3xl lg:block" />
      <div className="pointer-events-none absolute bottom-[16%] left-[18%] hidden h-64 w-64 rounded-full bg-[#ff2f9f]/10 blur-3xl lg:block" />

      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-[1700px] flex-col px-4 pb-5 pt-8 sm:px-6 lg:px-10 lg:pb-4 lg:pt-20">
        <div className="grid flex-1 items-center gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
          <div className="hidden lg:block" />

          <div className="grid items-center gap-8 lg:grid-cols-[1fr_0.95fr] lg:gap-10 lg:-ml-28">
            <motion.div
              initial={{ opacity: 0, x: 22 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="font-oswald pl-[0.12em] text-base font-bold uppercase tracking-[0.08em] text-[#ff2f9f] sm:text-lg">
                PK-1 Paddle
              </p>

              <h2 className="font-oswald mt-3 text-[clamp(2.8rem,4.5vw,5.4rem)] font-extrabold uppercase leading-[0.9] tracking-[0.04em] text-white [text-shadow:0_8px_18px_rgba(0,0,0,0.55)]">
                Built To Play.
                <br />
                <span className="text-[#b650ff] drop-shadow-[0_0_20px_rgba(182,80,255,0.45)]">
                  Made To Win.
                </span>
              </h2>

              <p className="font-oswald mt-4 max-w-[560px] text-[1.12rem] leading-8 text-white/72 sm:text-[1.2rem] sm:leading-9">
                Engineered for precision. Tuned for immersion. The PK-1 Paddle
                is your direct connection to the arena. Feel every move. Own
                every match.
              </p>

              <motion.div
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.42, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="mt-6"
              >
                <p className="font-oswald text-sm font-bold uppercase tracking-[0.14em] text-white/84 sm:text-base">
                  Choose Your Color
                </p>
                <div className="mt-4 flex items-center gap-6">
                  <div className="flex items-center gap-3">
                    <span className="h-8 w-8 rounded-full border-2 border-white bg-white shadow-[0_0_16px_rgba(255,255,255,0.22)]" />
                    <span className="font-oswald text-sm font-bold uppercase tracking-[0.08em] text-white sm:text-base">
                      White
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="h-8 w-8 rounded-full border-2 border-purple-300/50 bg-black shadow-[0_0_16px_rgba(182,80,255,0.2)]" />
                    <span className="font-oswald text-sm font-bold uppercase tracking-[0.08em] text-white sm:text-base">
                      Black
                    </span>
                  </div>
                </div>
              </motion.div>

              <div className="mt-6">
                <p className="font-oswald text-4xl font-light tracking-wide text-white sm:text-5xl">
                  $129.99
                </p>

                <motion.a
                  href="mailto:team.pickle.inc@gmail.com"
                  animate={{
                    boxShadow: [
                      "0 0 28px rgba(255,47,159,0.35)",
                      "0 0 40px rgba(255,47,159,0.5)",
                      "0 0 28px rgba(255,47,159,0.35)",
                    ],
                  }}
                  transition={{
                    duration: 2.8,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                  whileHover={{ y: -4 }}
                  className="font-oswald mt-5 flex h-14 w-full max-w-[520px] items-center justify-center rounded-lg bg-[#ff2f9f] text-lg font-bold uppercase tracking-wider text-white shadow-[0_0_28px_rgba(255,47,159,0.35)] transition hover:shadow-[0_0_42px_rgba(255,47,159,0.55)] sm:h-16 sm:text-xl"
                >
                  Add to Cart
                </motion.a>

                <p className="mt-3 text-center font-oswald text-xs uppercase tracking-wide text-white/70 sm:text-sm">
                  Free Shipping &amp; Returns
                </p>
              </div>
            </motion.div>

            <motion.aside
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.6, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="rounded-2xl border border-purple-400/25 bg-black/35 p-5 shadow-[0_0_40px_rgba(155,77,255,0.12)] backdrop-blur-md sm:p-6 lg:translate-x-12"
            >
              <div>
                <h3 className="font-oswald text-lg font-bold uppercase text-white sm:text-xl">
                  Product Info
                </h3>

                <div className="mt-6 flex items-center gap-4">
                  <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-xl">
                    <Image
                      src="/grip.png"
                      alt="Ergonomic grip"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-oswald text-base font-bold uppercase tracking-[0.06em] text-[#b650ff] sm:text-lg">
                      Ergonomic Grip
                    </p>
                    <p className="mt-1 text-sm leading-6 text-white sm:text-base sm:leading-relaxed">
                      Hex-textured handle for maximum comfort and secure control
                    </p>
                  </div>
                </div>

                <div className="mt-6 flex items-center gap-4">
                  <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-xl">
                    <Image
                      src="/immersive_control.png"
                      alt="Immersive control"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-oswald text-base font-bold uppercase tracking-[0.06em] text-[#b650ff] sm:text-lg">
                      Immersive Control
                    </p>
                    <p className="mt-1 text-sm leading-6 text-white sm:text-base sm:leading-relaxed">
                      Precision tracking meets responsive feedback for total immersion
                    </p>
                  </div>
                </div>

                <div className="mt-6 flex items-center gap-4">
                  <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-xl">
                    <Image
                      src="/lightweight.png"
                      alt="Lightweight design"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-oswald text-base font-bold uppercase tracking-[0.06em] text-[#b650ff] sm:text-lg">
                      Lightweight Design
                    </p>
                    <p className="mt-1 text-sm leading-6 text-white sm:text-base sm:leading-relaxed">
                      Balanced for speed and endurance. Play longer without fatigue
                    </p>
                  </div>
                </div>

                <div className="mt-6 flex items-center gap-4">
                  <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-xl">
                    <Image
                      src="/fast.png"
                      alt="Fast setup"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-oswald text-base font-bold uppercase tracking-[0.06em] text-[#b650ff] sm:text-lg">
                      Fast Setup
                    </p>
                    <p className="mt-1 text-sm leading-6 text-white sm:text-base sm:leading-relaxed">
                      Plug in and play. Get into the action in seconds.
                    </p>
                  </div>
                </div>
              </div>

            </motion.aside>
          </div>
        </div>

        <div className="mt-5 grid gap-3 rounded-[24px] border border-white/8 bg-black/22 p-4 backdrop-blur-md sm:grid-cols-2 lg:mt-4 lg:grid-cols-4 lg:gap-4 lg:rounded-full lg:px-6 lg:py-4">
          {benefits.map((benefit) => (
            <div key={benefit.title} className="flex items-start justify-center gap-3 text-left">
              <div className="mt-1 h-2.5 w-2.5 rounded-full bg-[#b650ff] shadow-[0_0_12px_rgba(182,80,255,0.8)]" />
              <div className="max-w-[12rem]">
                <p className="font-oswald text-sm font-bold uppercase tracking-[0.08em] text-white sm:text-base">
                  {benefit.title}
                </p>
                <p
                  className={`mt-1 text-sm leading-5 text-white/90 sm:text-[0.95rem] ${
                    benefit.title === "30-Day Trial" ? "whitespace-nowrap" : ""
                  }`}
                >
                  {benefit.copy}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
