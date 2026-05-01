type SectionTitleProps = {
  kicker: string;
  title: string;
  copy: string;
};

export default function SectionTitle({
  kicker,
  title,
  copy,
}: SectionTitleProps) {
  return (
    <div className="max-w-3xl">
      <p className="section-kicker">{kicker}</p>
      <h2 className="display-title mt-4 text-5xl leading-[0.92] text-white sm:text-6xl">
        {title}
      </h2>
      <p className="mt-5 text-lg leading-8 text-slate-300">{copy}</p>
    </div>
  );
}
