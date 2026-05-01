import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="font-oswald border-t border-white/10 bg-slate-950/90">
      <div className="mx-auto grid w-full max-w-7xl gap-8 px-4 py-10 sm:px-6 lg:grid-cols-[1.3fr_1fr_1fr] lg:px-8">
        <div className="space-y-3">
          <p className="font-oswald text-4xl font-bold uppercase tracking-[0.08em] text-white">
            Pickle
          </p>
          <p className="max-w-md text-base leading-7 text-slate-300">
            Pickleball, reimagined through interactive gameplay where every
            swing directly shapes the game.
          </p>
        </div>

        <div className="space-y-3">
          <p className="font-oswald text-lg font-bold uppercase tracking-[0.12em] text-[#ff1f87]">
            Navigation
          </p>
          <div className="flex flex-col gap-2 text-base font-bold uppercase tracking-[0.08em] text-slate-200">
            <Link href="/">Main</Link>
            <Link href="/features">Features</Link>
            <Link href="/about">About</Link>
          </div>
        </div>

        <div className="space-y-3">
          <p className="font-oswald text-lg font-bold uppercase tracking-[0.12em] text-[#ff1f87]">
            Player Support
          </p>
          <div className="flex flex-col gap-2 text-slate-200">
            <a href="mailto:team.pickle.inc@gmail.com">
              team.pickle.inc@gmail.com
            </a>
            <p className="text-sm leading-6 text-slate-400">
              Reach out for questions, updates, and anything else Picklemania.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
