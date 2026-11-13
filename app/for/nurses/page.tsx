import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Shift Roster App for Nurses & Healthcare Workers",
  description: "Healthcare rosters can include changing start times, night shifts, rest days and rotating patterns. RosterPal helps you see your duties and personal plans together. Use Master Roster for a repeating rotation, or Week-to-Week when your workplace publishes a different schedule each week.",
  alternates: { canonical: "/for/"+"nurses" },
};

export default function IndustryPage() {
  return (
    <main>
      <header className="siteHeader">
        <Link className="brand" href="/" aria-label="RosterPal home">
          <Image src="/rosterpal-wordmark.png" alt="RosterPal" width={500} height={200} />
        </Link>
        <nav className="desktopNav" aria-label="Main navigation">
          <Link href="/">What is RosterPal?</Link>
          <Link href="/master-roster">Master Roster</Link>
          <Link href="/week-to-week">Week-to-Week</Link>
          <Link href="/benefits">Benefits</Link>
          <Link href="/plans">Free vs Premium</Link>
          <Link href="/faq">FAQ</Link>
        </nav>
        <Link className="headerCta" href="/#download">Get RosterPal</Link>
      </header>
      <section className="pageHero">
        <span className="eyebrow">NURSES & HEALTHCARE WORKERS</span>
        <h1>Plan early, late and overnight duties in one shift work calendar.</h1>
        <p>Healthcare rosters can include changing start times, night shifts, rest days and rotating patterns. RosterPal helps you see your duties and personal plans together.</p>
        <div className="heroKeyMessage">
          <strong>Built for real shift patterns.</strong>
          <span>Use Master Roster for a repeating rotation, or Week-to-Week when your workplace publishes a different schedule each week.</span>
        </div>
        <div className="heroActions">
          <Link className="button buttonPrimary" href="/master-roster">Explore Master Roster</Link>
          <Link className="button buttonSecondary" href="/week-to-week">Explore Week-to-Week</Link>
        </div>
      </section>
      <section className="featurePageSection">
        <div className="sectionHeading leftAligned">
          <span className="eyebrow">SHIFT PLANNING</span>
          <h2>Work shifts and life plans in one calendar.</h2>
          <p>RosterPal supports shift start and finish times, rest days, split and overnight shifts, and a personal view of upcoming duties. Imported shifts should always be checked against your employer&apos;s published roster.</p>
        </div>
        <div className="processGrid">
          <article><span>01</span><h3>Choose your roster type</h3><p>Pick a repeating Master Roster or a newly published Week-to-Week roster.</p></article>
          <article><span>02</span><h3>Import and review</h3><p>Use a supported PDF or image roster and check detected details before saving.</p></article>
          <article><span>03</span><h3>See upcoming shifts</h3><p>Keep roster information in a personal calendar with shift details and rest days.</p></article>
          <article><span>04</span><h3>Plan time off</h3><p>Use available planning tools to organise personal events around your work schedule.</p></article>
        </div>
        <p><Link href="/plans">Compare RosterPal Free and Premium features →</Link></p>
      </section>
    </main>
  );
}
