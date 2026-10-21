import Image from "next/image";
import Link from "next/link";

const freeFeatures = [
  "Access your Master Roster and repeating schedule",
  "View rostered shifts in the calendar",
  "Check today’s shift and upcoming work",
  "Manually add and manage shifts",
  "Record start and finish times",
  "Save roles and work locations",
  "Record rest days and leave",
];

const premiumFeatures = [
  "Everything included in RosterPal Free",
  "Automatic PDF and image roster importing",
  "Full Week-to-Week roster tools",
  "Leave Planner",
  "Leave History",
  "Compare Rosters with up to two additional rosters",
  "Shift Swap tools",
  "Advanced Master Roster planning tools",
  "Split shifts and multiple shift segments",
  "Roles, locations, leave and overnight-shift support",
  "Review and correct detected shifts before saving",
  "Access original roster files",
  "Roster protection against accidental replacement",
  "Cloud backup and synchronisation across devices",
];

export default function PlansPage() {
  return (
    <main>
      <header className="siteHeader">
        <Link className="brand" href="/" aria-label="RosterPal home"><Image src="/rosterpal-wordmark.png" alt="RosterPal" width={500} height={200} /></Link>
        <nav className="desktopNav" aria-label="Main navigation">
          <Link href="/">What is RosterPal?</Link><Link href="/master-roster">Master Roster</Link><Link href="/week-to-week">Week-to-Week</Link><Link href="/benefits">Benefits</Link><Link href="/plans">Free vs Premium</Link><Link href="/faq">FAQ</Link>
        </nav>
        <Link className="headerCta" href="/faq">FAQ</Link>
      </header>

      <section className="pageHero plansHero">
        <span className="eyebrow">ROSTERPAL FREE &amp; PREMIUM</span>
        <h1>Start with your roster. Unlock the complete experience with Premium.</h1>
        <p>RosterPal Free gives you the essentials, including access to your Master Roster. Premium unlocks the advanced planning, importing, Week-to-Week, cloud and roster-management tools.</p>
      </section>

      <section className="plansSection">
        <article className="planCard freePlan">
          <div className="planCardHeader"><span className="planPill">FREE</span><h2>RosterPal Free</h2><p>Get started with the essential tools you need to organise your working life.</p></div>
          <p className="planDescription">With RosterPal Free, you can access your Master Roster, view your repeating shifts, check today’s shift and upcoming work, and see your schedule in the calendar. You can also manually add and manage shifts and record key details such as start and finish times, roles, locations, rest days and leave.</p>
          <p className="planDescription">Advanced planning and roster-management tools are reserved for RosterPal Premium, including Leave Planner, Leave History, Compare Rosters, Shift Swap tools, automatic roster importing, Week-to-Week tools and cloud backup and synchronisation.</p>
          <ul className="planChecklist">{freeFeatures.map((feature) => <li key={feature}><span>✓</span>{feature}</li>)}</ul>
        </article>

        <article className="planCard premiumPlan">
          <div className="premiumGlow" aria-hidden="true" />
          <div className="planCardHeader"><span className="planPill premiumPill">PREMIUM</span><h2>RosterPal Premium</h2><p>Unlock the complete RosterPal experience and take the work out of managing your shifts.</p></div>
          <p className="planDescription">Premium includes everything in Free, plus automatic PDF and image roster importing, Week-to-Week tools, advanced Master Roster features, Leave Planner, Leave History, Compare Rosters, Shift Swap tools, cloud backup, roster protection and the complete feature set.</p>
          <p className="planDescription">Whether your roster repeats or changes every week, RosterPal Premium helps you stay organised and know exactly when and where you’re working.</p>
          <ul className="planChecklist">{premiumFeatures.map((feature) => <li key={feature}><span>✓</span>{feature}</li>)}</ul>
        </article>
      </section>

      <section className="planComparisonCallout">
        <span className="eyebrow">THE SIMPLE DIFFERENCE</span>
        <h2>Free keeps you organised. Premium unlocks the advanced tools.</h2>
        <p><strong>RosterPal Free</strong> includes access to your Master Roster and essential calendar and shift-management tools. <strong>RosterPal Premium</strong> adds automatic importing, Week-to-Week, advanced Master Roster planning, Leave Planner, Leave History, Compare Rosters, Shift Swap tools, cloud backup and the complete RosterPal feature set.</p>
        <div className="differenceActions"><Link className="button buttonPrimary" href="/master-roster">Explore Master Roster</Link><Link className="button buttonSecondary" href="/week-to-week">Explore Week-to-Week</Link></div>
      </section>
    </main>
  );
}
