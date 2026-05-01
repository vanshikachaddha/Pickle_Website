import type { Metadata } from "next";
import MainCarousel from "@/app/components/MainCarousel";
import PaddlePurchaseSection from "@/app/components/PaddlePurchaseSection";
import SiteFooter from "@/app/components/SiteFooter";
import SiteHeader from "@/app/components/SiteHeader";

export const metadata: Metadata = {
  title: "Main",
};

export default function Home() {
  return (
    <div className="page-shell">
      <SiteHeader />
      <main className="page-main">
        <MainCarousel />

        <section id="feature-section" className="relative min-h-[100svh] overflow-hidden">
          <div
            aria-hidden
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('/background_video.png')" }}
          />
          <div
            aria-hidden
            className="absolute inset-0 bg-[linear-gradient(90deg,rgba(2,6,23,0.82)_0%,rgba(2,6,23,0.55)_42%,rgba(2,6,23,0.18)_100%)]"
          />
          <div className="relative mx-auto grid min-h-[100svh] w-full max-w-7xl items-center gap-8 px-4 py-16 sm:px-6 lg:grid-cols-[minmax(0,1.25fr)_minmax(280px,0.75fr)] lg:px-8">
            <div className="mr-auto w-full max-w-5xl overflow-hidden border-2 border-white/85 bg-black shadow-[0_0_12px_rgba(255,255,255,0.22),0_0_24px_rgba(255,255,255,0.14),0_24px_80px_rgba(2,6,23,0.45)] lg:-ml-16">
              <video
                className="block h-auto w-full"
                src="/PK-trailer.mov"
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
              />
            </div>

            <div className="font-oswald mr-auto flex w-full max-w-[420px] flex-col items-start text-left lg:mr-0 lg:-ml-12 lg:justify-self-start">
              <div className="mb-6 flex items-center gap-3 sm:gap-4">
                <span className="font-oswald text-sm font-bold uppercase tracking-[0.22em] text-[rgba(255,31,107,0.9)]">
                  Feature
                </span>
                <span
                  aria-hidden
                  className="h-[2px] w-36 bg-[rgba(255,31,107,0.9)] sm:w-64"
                />
              </div>
              <h2 className="font-oswald uppercase leading-[0.88] text-white">
                <span className="block whitespace-nowrap text-6xl font-extrabold tracking-[0.04em] sm:text-7xl lg:text-[5.6rem]">
                  Build Your
                </span>
                <span className="mt-1 block text-7xl font-extrabold tracking-[0.02em] text-[#ff1f6b] drop-shadow-[0_0_14px_rgba(255,31,107,0.35)] sm:text-8xl lg:text-[7rem]">
                  Match
                </span>
              </h2>
              <div className="mt-5 h-1 w-[54px] bg-[rgba(255,31,107,0.9)]" />
              <p className="font-oswald mt-6 max-w-md text-xl leading-8 text-slate-200 sm:text-2xl sm:leading-9">
                Fast-paced combat. Fluid movement. Crowd-pumping intensity.
                Every match is designed to keep players and fans on the edge.
              </p>
            </div>
          </div>
        </section>

        <PaddlePurchaseSection id="section-three" />

      </main>
      <SiteFooter />
    </div>
  );
}
