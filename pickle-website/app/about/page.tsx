import type { Metadata } from "next";
import AboutHero from "@/app/about/AboutHero";
import SiteFooter from "@/app/components/SiteFooter";
import SiteHeader from "@/app/components/SiteHeader";

export const metadata: Metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <div className="page-shell">
      <SiteHeader />
      <main className="page-main">
        <AboutHero />
      </main>
      <SiteFooter />
    </div>
  );
}
