import type { Metadata } from "next";
import PageHero from "@/app/components/PageHero";
import SectionTitle from "@/app/components/SectionTitle";
import SiteFooter from "@/app/components/SiteFooter";
import SiteHeader from "@/app/components/SiteHeader";

export const metadata: Metadata = {
  title: "Support",
};

const supportLanes = [
  {
    title: "Technical Help",
    copy: "Point players to install issues, controller setup, crashes, and account recovery.",
  },
  {
    title: "Bug Reports",
    copy: "Give QA-focused players a route for clips, reproduction steps, and platform details.",
  },
  {
    title: "Community",
    copy: "Keep one lane for Discord, patch notes, event timing, or moderation questions.",
  },
];

const faqs = [
  "Where do I report a bug or broken match flow?",
  "How do I get account or save data help?",
  "Where can I find the latest patch notes?",
  "What hardware or controller setups are supported?",
];

export default function SupportPage() {
  return (
    <div className="page-shell">
      <SiteHeader />
      <main className="page-main">
        <PageHero
          eyebrow="Support Desk"
          title="Keep Players Moving."
          subtitle="A support page should feel as intentional as the rest of the site. This one carries the same visual language while giving visitors obvious routes for help."
          panelTitle="Player Assistance"
          panelCopy="Right now the contact details are placeholders, but the page structure is ready for your real support email, Discord, FAQ, and issue reporting flow."
          panelItems={[
            "Dedicated support route in the main navigation",
            "Large cards for issue categories and inboxes",
            "FAQ section for fast self-service answers",
          ]}
          actions={[
            { href: "mailto:support@picklegame.gg", label: "Email Support" },
            { href: "/", label: "Back To Main", variant: "secondary" },
          ]}
          stats={[
            { value: "03", label: "Support Lanes" },
            { value: "04", label: "Quick FAQs" },
            { value: "1st", label: "Response Goal" },
          ]}
        />

        <section className="content-section">
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionTitle
              kicker="Contact Paths"
              title="Route The Right Problem To The Right Desk."
              copy="Splitting support into a few clear categories reduces friction and makes the site feel more professional immediately."
            />

            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {supportLanes.map((lane) => (
                <article key={lane.title} className="panel-slashed">
                  <p className="section-kicker">Lane</p>
                  <h2 className="display-title mt-4 text-4xl text-white">
                    {lane.title}
                  </h2>
                  <p className="mt-4 text-base leading-7 text-slate-300">
                    {lane.copy}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="content-section pt-4">
          <div className="mx-auto grid w-full max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
            <SectionTitle
              kicker="FAQ"
              title="Fast Answers Before The Ticket."
              copy="These are placeholder prompts you can replace with your real support knowledge base once you have live issues and community questions to track."
            />

            <div className="grid gap-4">
              {faqs.map((faq, index) => (
                <div key={faq} className="info-card">
                  <p className="display-title text-3xl text-orange-300">
                    0{index + 1}
                  </p>
                  <p className="mt-3 text-lg leading-8 text-slate-200">{faq}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
