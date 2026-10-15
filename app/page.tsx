import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <header className="siteHeader">
        <Link className="brand" href="/" aria-label="RosterPal home">
          <Image src="/rosterpal-wordmark.png" alt="RosterPal — Plan your shifts. Own your time." width={500} height={200} priority />
        </Link>
        <nav className="desktopNav" aria-label="Main navigation">
          <Link href="/">What is RosterPal?</Link>
          <Link href="/master-roster">Master Roster</Link>
          <Link href="/week-to-week">Week-to-Week</Link>
          <Link href="/benefits">Benefits</Link>
          <Link href="/plans">Free vs Premium</Link>
          <Link href="/faq">FAQ</Link>
        </nav>
        <a className="headerCta" href="#download">Get RosterPal</a>
      </header>

      <section className="introHero">
        <div className="introCopy">
          <span className="eyebrow">WHAT IS ROSTERPAL?</span>
          <h1>Your work roster, made useful for real life.</h1>
          <p className="introLead">
            RosterPal is a personal roster and shift-planning app built for people whose work does not fit neatly into a Monday-to-Friday, nine-to-five calendar. It turns complex rotating rosters, changing weekly schedules and unusual shift patterns into a clear personal view of when you work, when you are free and what is coming next.
          </p>
          <p>
            Instead of repeatedly checking a PDF, spreadsheet, noticeboard or workforce system, RosterPal brings the parts of the roster that matter to you into one place. Your shifts can sit alongside leave, appointments, birthdays, personal events and other plans, helping you organise life around work rather than constantly reorganising life because of work.
          </p>
          <p>
            RosterPal supports two different ways of working: <strong>Master Roster</strong> for repeating or rotating roster cycles, and <strong>Week-to-Week</strong> for workers whose published shifts change regularly. Each mode is designed around how that roster is actually issued, so users do not have to force their schedule into a system that does not match the way they work.
          </p>
          <div className="heroActions">
            <Link className="button buttonPrimary" href="/master-roster">Explore Master Roster</Link>
            <Link className="button buttonSecondary" href="/week-to-week">Explore Week-to-Week</Link>
          </div>
        </div>
        <div className="brandShowcase">
          <div className="brandOrb brandOrbBlue" />
          <div className="brandOrb brandOrbOrange" />
          <Image src="/rosterpal-mark.png" alt="RosterPal logo" width={560} height={560} className="brandMarkLarge" priority />
          <div className="brandStatement">
            <strong>Plan your shifts.</strong>
            <span>Own your time.</span>
          </div>
        </div>
      </section>

      <section className="definitionSection">
        <div className="sectionHeading leftAligned">
          <span className="eyebrow">ONE APP. TWO ROSTER TYPES.</span>
          <h2>Built around the way your roster is actually published.</h2>
          <p>Choose the workflow that matches your workplace. RosterPal handles the roster differently depending on whether your shifts repeat in a cycle or change from week to week.</p>
        </div>
        <div className="pathGrid">
          <Link href="/master-roster" className="pathCard pathMaster">
            <span className="pathTag">MASTER ROSTER</span>
            <h3>Repeating or rotating roster?</h3>
            <p>Upload the master roster once. RosterPal extracts the roster structure, lines, shifts and repeating cycle, then sets it up for you. There is no need to enter every shift yourself.</p>
            <span className="pathLink">See Master Roster features →</span>
          </Link>
          <Link href="/week-to-week" className="pathCard pathWeek">
            <span className="pathTag">WEEK-TO-WEEK</span>
            <h3>New shifts published regularly?</h3>
            <p>Upload the latest roster and let RosterPal read it, review the shifts it detects, make any corrections and add them to your calendar when you are ready.</p>
            <span className="pathLink">See Week-to-Week features →</span>
          </Link>
        </div>
      </section>

      <section className="benefitTeaser">
        <span className="eyebrow">WHY ROSTERPAL?</span>
        <h2>Less time decoding rosters. More time planning around them.</h2>
        <p>See how RosterPal helps differently depending on the type of roster you work.</p>
        <Link className="button buttonPrimary" href="/benefits">See the benefits</Link>
      </section>

      <section className="visualFeaturesSection">
        <div className="sectionHeading leftAligned">
          <span className="eyebrow">MORE OF ROSTERPAL</span>
          <h2>Designed for the whole rhythm of shift work.</h2>
          <p>Beyond importing a roster, RosterPal helps you see what is coming, understand your work pattern, keep an eye on recovery and make the app feel like your own.</p>
        </div>
        <div className="visualFeatureGrid">
          {[
            ["/promo/upload-ai.webp", "AI roster import"],
            ["/promo/roster-layout.webp", "Roster styles"],
            ["/promo/upcoming-shifts.webp", "Upcoming shifts"],
            ["/promo/shift-reminders.webp", "Shift reminders"],
            ["/promo/insights.webp", "Roster insights"],
            ["/promo/fatigue.webp", "Fatigue and recovery"],
            ["/promo/fatigue-score.webp", "Fatigue score breakdown"],
            ["/promo/appearance.webp", "Appearance themes"],
            ["/promo/work-calendar.webp", "Work Calendar"],
          ].map(([src, alt]) => (
            <figure className="visualFeatureCard" key={src}>
              <Image src={src} alt={alt} width={941} height={1672} />
            </figure>
          ))}
        </div>
      </section>

      <section className="plansTeaser">
        <div className="plansTeaserCopy">
          <span className="eyebrow">FREE OR PREMIUM</span>
          <h2>Start simple. Upgrade when you want RosterPal to do more of the work.</h2>
          <p>RosterPal Free gives you the essential tools to manually manage your shifts. RosterPal Premium unlocks automatic roster importing, Master Roster, Week-to-Week tools, cloud backup and the complete feature set shown across this website.</p>
        </div>
        <div className="plansTeaserActions">
          <Link className="button buttonPrimary" href="/plans">Compare Free &amp; Premium</Link>
        </div>
      </section>

      <section className="faqTeaser">
        <div>
          <span className="eyebrow">FREQUENTLY ASKED QUESTIONS</span>
          <h2>Questions about importing, roster types, shifts or sync?</h2>
          <p>Find clear answers about how RosterPal works, what it supports and what to check before relying on an imported roster.</p>
        </div>
        <Link className="button buttonSecondary" href="/faq">View all FAQs</Link>
      </section>

      <section className="downloadSection" id="download">
        <Image src="/rosterpal-mark.png" alt="" width={88} height={88} className="downloadMark" />
        <h2>Plan your shifts. Own your time.</h2>
        <p>RosterPal is designed for real shift work.</p>
      </section>
    </main>
  );
}
