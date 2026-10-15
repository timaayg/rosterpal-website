import Image from "next/image";
import Link from "next/link";

export default function BenefitsPage() {
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
        <Link className="headerCta" href="/">Home</Link>
      </header>

      <section className="pageHero benefitsHero">
        <span className="eyebrow">HOW ROSTERPAL BENEFITS YOU</span>
        <h1>Two roster types. Two different workflows. One goal: make your roster easier to live with.</h1>
        <p>Master Roster and Week-to-Week solve different problems. The benefit comes from using the workflow that matches how your workplace actually publishes your shifts.</p>
        <div className="premiumNotice">
          <span className="premiumBadge">PREMIUM</span>
          <div>
            <strong>Premium unlocks the full set of advanced tools described below.</strong>
            <p>RosterPal Free includes essential manual shift tools plus Master Roster access and partial calendar access. Premium adds automatic importing, Week-to-Week, full calendar access, advanced planning and cloud features.</p>
          </div>
          <Link href="/plans">See Free vs Premium →</Link>
        </div>
      </section>

      <section className="benefitTypeSection" id="master">
        <div className="benefitTypeHeader">
          <span className="pathTag">MASTER ROSTER</span>
          <h2>Your roster repeats. RosterPal keeps the pattern working for you.</h2>
          <p>Master Roster is designed to remove the repeated setup work from rotating and repeating cycles.</p>
        </div>
        <div className="benefitCards">
          <article><h3>Enter less</h3><p>Import the PDF or image and let RosterPal extract the shifts and repeating structure instead of entering every duty yourself.</p></article>
          <article><h3>Keep the cycle aligned</h3><p>Select your name or roster line, see the current roster week and keep a multi-week pattern organised over time.</p></article>
          <article><h3>See work automatically</h3><p>Populate the calendar, surface upcoming shifts on Today and highlight the current day and active shift.</p></article>
          <article><h3>Keep useful shift detail</h3><p>Carry start and finish times, split segments, shift codes, roles, locations, rest days, RDOs and leave into the roster experience.</p></article>
          <article><h3>Change the roster safely</h3><p>Protect saved rosters from accidental replacement, view the original upload and update or replace the roster when it changes.</p></article>
          <article><h3>Keep it with you</h3><p>Cloud backup and synchronisation help keep the roster available across your devices.</p></article>
        </div>
      </section>

      <section className="benefitTypeSection altBenefit" id="week">
        <div className="benefitTypeHeader">
          <span className="pathTag">WEEK-TO-WEEK</span>
          <h2>Your roster changes. RosterPal helps turn each new issue into an updated calendar.</h2>
          <p>Week-to-Week is designed to reduce the repeated reading, copying and checking involved every time a new roster is published.</p>
        </div>
        <div className="benefitCards">
          <article><h3>Import instead of retyping</h3><p>Bring in each PDF or image and let RosterPal identify the employee, dates and shift times from the newly issued roster.</p></article>
          <article><h3>Handle real shift patterns</h3><p>Support different duties each day, split shifts, multiple segments, shift codes, roles and work locations.</p></article>
          <article><h3>Review before saving</h3><p>Edit detected shifts and identify duplicate or overlapping times before the week is committed to your calendar.</p></article>
          <article><h3>Keep the current week current</h3><p>Add the imported week directly, replace an existing week when it changes and refresh the latest roster information.</p></article>
          <article><h3>Keep the source and history</h3><p>View the original roster and keep a history of previously imported weekly rosters.</p></article>
          <article><h3>See what is next</h3><p>Once imported, today’s shift and upcoming shifts become part of a personal calendar rather than staying buried in the source document.</p></article>
        </div>
      </section>

      <section className="comparisonSection">
        <span className="eyebrow">THE DIFFERENCE IS SIMPLE</span>
        <h2>Choose the RosterPal workflow that matches your roster.</h2>
        <div className="rosterDifferenceGrid">
          <article><span>MASTER ROSTER</span><strong>A repeating roster pattern</strong><p>Best suited to a roster that rotates or repeats through a cycle.</p><Link href="/master-roster">View Master Roster features →</Link></article>
          <article><span>WEEK-TO-WEEK</span><strong>A newly issued roster that changes each week</strong><p>Best suited to schedules that are republished with different duties or times.</p><Link href="/week-to-week">View Week-to-Week features →</Link></article>
        </div>
      </section>
    </main>
  );
}
