import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { guides } from "./guides";

export const metadata: Metadata = {
  title: "Shift Work Guides | Rosters, PDF Imports & Leave Planning",
  description: "Helpful RosterPal guides for organising rotating shifts, importing PDF work rosters, planning annual leave and managing changing weekly schedules.",
  alternates: { canonical: "/guides" },
};

export default function GuidesPage() {
  return <main>
    <header className="siteHeader"><Link className="brand" href="/" aria-label="RosterPal home"><Image src="/rosterpal-wordmark.png" alt="RosterPal" width={500} height={200}/></Link>
      <nav className="desktopNav" aria-label="Main navigation"><Link href="/">Home</Link><Link href="/master-roster">Master Roster</Link><Link href="/week-to-week">Week-to-Week</Link><Link href="/guides">Guides</Link><Link href="/plans">Free vs Premium</Link><Link href="/faq">FAQ</Link></nav>
      <Link className="headerCta" href="/#download">Get RosterPal</Link>
    </header>
    <section className="pageHero"><span className="eyebrow">ROSTERPAL GUIDES</span><h1>Practical guides for shift workers.</h1><p>Understand your work roster, import shifts into your calendar and make more informed plans around your time off.</p></section>
    <section className="featurePageSection"><div className="featureGroupGrid">{guides.map(guide=><article className="featureGroupCard" key={guide.slug}><h2>{guide.title}</h2><p>{guide.description}</p><Link href={`/guides/${guide.slug}`}>Read the guide →</Link></article>)}</div></section>
  </main>;
}
