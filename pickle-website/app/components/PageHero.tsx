import Link from "next/link";

type HeroAction = {
  href: string;
  label: string;
  variant?: "primary" | "secondary";
};

type HeroStat = {
  label: string;
  value: string;
};

type PageHeroProps = {
  eyebrow: string;
  title: string;
  subtitle: string;
  panelTitle: string;
  panelCopy: string;
  panelItems: string[];
  actions: HeroAction[];
  stats: HeroStat[];
};

export default function PageHero({
  eyebrow,
  title,
  subtitle,
  panelTitle,
  panelCopy,
  panelItems,
  actions,
  stats,
}: PageHeroProps) {
  return (
    <section className="hero-frame">
      <div className="hero-aura hero-aura-orange" aria-hidden />
      <div className="hero-aura hero-aura-cyan" aria-hidden />

      <div className="mx-auto grid w-full max-w-7xl gap-12 px-4 py-18 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:px-8 lg:py-24">
        <div className="relative z-10">
          <p className="section-kicker">{eyebrow}</p>
          <h1 className="display-title mt-4 max-w-4xl text-6xl leading-[0.9] text-white sm:text-7xl lg:text-8xl">
            {title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200 sm:text-xl">
            {subtitle}
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            {actions.map((action) => (
              <Link
                key={`${action.href}-${action.label}`}
                href={action.href}
                className={
                  action.variant === "secondary"
                    ? "site-secondary-button"
                    : "site-cta-button"
                }
              >
                {action.label}
              </Link>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            {stats.map((stat) => (
              <div key={stat.label} className="stat-chip">
                <span className="display-title text-3xl text-white">
                  {stat.value}
                </span>
                <span className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-300">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        <aside className="panel-slashed relative z-10">
          <p className="section-kicker">Broadcast Feed</p>
          <h2 className="display-title mt-4 text-4xl leading-none text-white sm:text-5xl">
            {panelTitle}
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-200">
            {panelCopy}
          </p>
          <div className="accent-rule mt-6" />
          <ul className="mt-6 space-y-3">
            {panelItems.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 text-sm font-semibold uppercase tracking-[0.18em] text-slate-100"
              >
                <span className="mt-1 block h-2.5 w-2.5 shrink-0 bg-orange-400 shadow-[0_0_18px_rgba(251,146,60,0.9)]" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </section>
  );
}
