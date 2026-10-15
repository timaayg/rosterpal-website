import Link from "next/link";

export const metadata = { title: "Plans" };

export default function PlansPage() {
  return (
    <main>
      <header className="nav shell"><Link className="brand" href="/"><span className="mark">R</span><span>Roster<span className="accent">Pal</span></span></Link><nav><Link href="/">Home</Link><Link href="/support">Support</Link></nav></header>
      <section className="pageHero shell"><div className="eyebrow">FREE VS PREMIUM</div><h1>Choose the RosterPal that fits your roster.</h1><p className="lead">Start with the essentials, then unlock automatic roster tools and the full calendar when you need more.</p></section>
      <section className="shell plans">
        <article className="plan">
          <div><span className="pill">FREE</span><h2>Roster basics</h2></div>
          <ul className="featureList">
            <li>✓ Add and manage shifts manually</li>
            <li>✓ Today screen</li>
            <li>✓ Record start/finish times</li>
            <li>✓ Roles and locations</li>
            <li>✓ Rest days and leave</li>
            <li>✓ Partial calendar access — current month plus the next two months</li>
            <li>✓ Access your saved Master Roster</li>
          </ul>
          <p className="muted">Additional tools such as Leave Planner, Leave History, Compare Rosters and advanced roster features require Premium.</p>
        </article>
        <article className="plan featured">
          <div><span className="pill">PREMIUM</span><h2>The complete RosterPal experience</h2></div>
          <ul className="featureList">
            <li>✓ Everything in Free</li>
            <li>✓ Automatic PDF and image roster import</li>
            <li>✓ Master Roster tools</li>
            <li>✓ Week-to-Week roster tools</li>
            <li>✓ Repeating and multi-week cycles</li>
            <li>✓ Split and overnight shifts</li>
            <li>✓ Review and correct before saving</li>
            <li>✓ Original roster-file access</li>
            <li>✓ Roster change protection</li>
            <li>✓ Leave Planner, Leave History and Compare Rosters</li>
            <li>✓ Full calendar access</li>
            <li>✓ Cloud backup and sync</li>
          </ul>
        </article>
      </section>
      <footer className="footer shell"><Link href="/">← Back to RosterPal</Link><p>Questions? support@rosterpal.net</p></footer>
    </main>
  );
}
