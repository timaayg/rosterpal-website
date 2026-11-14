import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { guides } from "../guides";
import { notFound } from "next/navigation";

export function generateStaticParams() { return guides.map(({slug}) => ({slug})); }

export async function generateMetadata({params}: {params: Promise<{slug: string}>}): Promise<Metadata> {
  const {slug}=await params;
  const guide=guides.find(g=>g.slug===slug);
  if (!guide) return {};
  return {title:guide.title,description:guide.description,alternates:{canonical:`/guides/${slug}`}};
}

export default async function GuidePage({params}: {params: Promise<{slug: string}>}) {
  const {slug}=await params;
  const guide=guides.find(g=>g.slug===slug);
  if(!guide) notFound();
  return <main>
    <header className="siteHeader"><Link className="brand" href="/" aria-label="RosterPal home"><Image src="/rosterpal-wordmark.png" alt="RosterPal" width={500} height={200}/></Link>
      <nav className="desktopNav" aria-label="Main navigation"><Link href="/">Home</Link><Link href="/master-roster">Master Roster</Link><Link href="/week-to-week">Week-to-Week</Link><Link href="/guides">Guides</Link><Link href="/plans">Free vs Premium</Link><Link href="/faq">FAQ</Link></nav>
      <Link className="headerCta" href="/#download">Get RosterPal</Link>
    </header>
    <section className="pageHero"><Link href="/guides">← All guides</Link><span className="eyebrow">SHIFT WORK GUIDE</span><h1>{guide.title}</h1><p>{guide.intro}</p></section>
    <section className="featurePageSection"><div className="sectionHeading leftAligned"><span className="eyebrow">STEP BY STEP</span><h2>Make your roster easier to manage.</h2></div>
      <div className="processGrid">{guide.steps.map(([heading,body],i)=><article key={heading}><span>{String(i+1).padStart(2,"0")}</span><h3>{heading}</h3><p>{body}</p></article>)}</div>
    </section>
    <section className="differenceCallout"><span className="eyebrow">ROSTERPAL</span><h2>Plan your shifts. Own your time.</h2><p>Use RosterPal to keep your shifts organised. Always verify imported shifts against your employer&apos;s current roster.</p><div className="differenceActions"><Link className="button buttonPrimary" href={guide.feature}>{guide.featureName}</Link><Link className="button buttonSecondary" href="/#download">Get RosterPal</Link></div></section>
    <section className="featurePageSection"><div className="sectionHeading leftAligned"><h2>More shift work guides</h2></div><div className="featureGroupGrid">{guides.filter(g=>g.slug!==slug).map(g=><article className="featureGroupCard" key={g.slug}><h3>{g.title}</h3><Link href={`/guides/${g.slug}`}>Read guide →</Link></article>)}</div></section>
  </main>;
}
