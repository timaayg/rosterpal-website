import Image from "next/image";
import Link from "next/link";

const weekFeatureGroups = [
  {
    title: "Weekly roster import",
    intro: "Bring each newly issued roster into RosterPal instead of copying it across manually.",
    items: [
      "Import each new weekly roster from a PDF or image",
      "Automatically identify the correct employee",
      "Extract dates, start times and finish times",
      "Support different shifts each day",
    ],
  },
  {
    title: "Shift detail & checking",
    intro: "Keep the detail from the published roster and review it before it becomes part of your calendar.",
    items: [
      "Support split shifts and multiple segments",
      "Import shift codes, roles and work locations",
      "Review and edit detected shifts before saving",
      "Detect duplicate shifts and overlapping times",
    ],
  },
  {
    title: "Calendar updates",
    intro: "Turn the latest published week into an up-to-date personal view of your work.",
    items: [
      "Add the imported week directly to the calendar",
      "Replace or update an existing week",
      "Display today’s shift and upcoming shifts",
      "Pull down to refresh the latest roster information",
    ],
  },
  {
    title: "Source history & sync",
    intro: "Keep access to where the week came from and preserve the imported history across devices.",
    items: [
      "View the original source roster",
      "Keep a history of imported weekly rosters",
      "Cloud backup and synchronisation across devices",
    ],
  },
];

export default function WeekToWeekPage() {
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
        <Link className="headerCta" href="/benefits#week">Why RosterPal?</Link>
      </header>

      <section className="pageHero">
        <span className="eyebrow">WEEK-TO-WEEK</span>
        <h1>Built for workers whose roster changes every week.</h1>
        <p>
          Week-to-Week is designed for newly issued rosters where the dates, duties or times may be different every time. Import each new roster from a PDF or image, let RosterPal identify the employee and shifts, then review and edit the detected result before saving it to your calendar.
        </p>
        <div className="heroKeyMessage">
          <strong>A new roster does not mean retyping a whole week.</strong>
          <span>Import it, check what RosterPal detected and update your calendar when you are ready.</span>
        </div>
        <div className="premiumNotice">
          <span className="premiumBadge">PREMIUM</span>
          <div>
            <strong>Week-to-Week is a RosterPal Premium feature.</strong>
            <p>All features shown on this page are available in the paid RosterPal Premium version.</p>
          </div>
          <Link href="/plans">Compare Free &amp; Premium →</Link>
        </div>
      </section>

      <section className="processSection">
        <div className="sectionHeading leftAligned">
          <span className="eyebrow">HOW WEEK-TO-WEEK WORKS</span>
          <h2>Each new roster becomes a reviewed calendar update.</h2>
          <p>The workflow is built around changing schedules rather than a repeating cycle.</p>
        </div>
        <div className="processGrid">
          <article><span>01</span><h3>Import the latest roster</h3><p>Choose the new PDF or image issued for the week instead of manually entering every day.</p></article>
          <article><span>02</span><h3>RosterPal finds your shifts</h3><p>RosterPal identifies the correct employee and extracts dates, start times, finish times and supported roster detail.</p></article>
          <article><span>03</span><h3>Review and edit</h3><p>Check detected shifts, correct anything that needs attention and catch duplicate or overlapping times before saving.</p></article>
          <article><span>04</span><h3>Update your calendar</h3><p>Add the imported week directly to the calendar or replace an existing week when a new version is issued.</p></article>
        </div>
      </section>

      <section className="featurePageSection">
        <div className="sectionHeading leftAligned">
          <span className="eyebrow">WEEK-TO-WEEK FEATURES</span>
          <h2>Everything Week-to-Week is designed to handle.</h2>
          <p>These are the core Week-to-Week capabilities currently represented on the site.</p>
        </div>
        <div className="featureGroupGrid">
          {weekFeatureGroups.map((group) => (
            <article className="featureGroupCard" key={group.title}>
              <h3>{group.title}</h3>
              <p>{group.intro}</p>
              <ul className="featureChecklist">
                {group.items.map((item) => <li key={item}><span aria-hidden="true">✓</span>{item}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="differenceCallout">
        <span className="eyebrow">IS WEEK-TO-WEEK RIGHT FOR YOU?</span>
        <h2>Your workplace issues a new roster that changes each week.</h2>
        <p>If your shifts are newly published rather than repeating through a fixed cycle, Week-to-Week is the RosterPal workflow designed for that pattern.</p>
        <div className="differenceActions">
          <Link className="button buttonPrimary" href="/benefits#week">See Week-to-Week benefits</Link>
          <Link className="button buttonSecondary" href="/master-roster">Compare Master Roster</Link>
        </div>
      </section>
    </main>
  );
}
