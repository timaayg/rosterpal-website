import Image from "next/image";
import Link from "next/link";

const masterFeatureGroups = [
  {
    title: "Import & setup",
    intro: "Start with the roster you already receive from work.",
    items: [
      "Import a roster from a PDF or image",
      "Automatically extract shifts from the uploaded roster",
      "Support rotating and repeating roster patterns",
      "Support multi-week roster cycles",
      "Select your name or roster line",
      "Review and correct shifts before saving",
    ],
  },
  {
    title: "Shift detail",
    intro: "Keep the information that makes each duty useful once it reaches your calendar.",
    items: [
      "Record start and finish times",
      "Support split shifts and multiple segments",
      "Save shift codes, roles and work locations",
      "Recognise rest days, RDOs and leave",
      "Support overnight shifts",
    ],
  },
  {
    title: "Today & calendar",
    intro: "Turn a repeating roster into a personal view of what is happening now and what comes next.",
    items: [
      "Display upcoming shifts on the Today screen",
      "Automatically populate the calendar",
      "Highlight the current day and active shift",
      "Show the current roster week",
    ],
  },
  {
    title: "Protection & sync",
    intro: "Keep the source roster available and make changes without losing control of your setup.",
    items: [
      "Protect saved rosters from accidental replacement",
      "View the original uploaded roster",
      "Update or replace the roster when it changes",
      "Cloud backup and synchronisation across devices",
    ],
  },
];

const planningFeatures = [
  {
    title: "Leave Planner",
    badge: "PREMIUM",
    body: "Plan annual leave around your roster with confidence. Select the dates you’re considering and RosterPal shows which scheduled shifts are affected, helping you understand how many rostered workdays and calendar days your break will cover before submitting a leave request.",
  },
  {
    title: "Leave History",
    badge: "PREMIUM",
    body: "Keep a clear record of your previous and upcoming leave. View leave dates, leave types and durations in one place, making it easier to track time away from work and review your leave throughout the year.",
  },
  {
    title: "Compare Rosters",
    badge: "PREMIUM",
    body: "Compare your roster with a workmate’s roster to quickly find the days you both have off. You can add up to two additional rosters alongside your own, making it easier to see when everyone has time off together for holidays, outings and other plans.",
  },
];

const workCalendarFeatures = [
  "View shifts by day, week or month",
  "See start and finish times directly on the calendar",
  "Display roles, locations and shift codes",
  "Support overnight and split shifts",
  "Record rest days, RDOs and leave",
  "View more information by selecting any date",
  "Add and edit personal events",
  "Quickly identify today’s shift",
  "Keep imported and manually entered shifts together",
  "Use colour coding to distinguish different event types",
];

export default function MasterRosterPage() {
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
        <Link className="headerCta" href="/benefits#master">Why RosterPal?</Link>
      </header>

      <section className="pageHero">
        <span className="eyebrow">MASTER ROSTER</span>
        <h1>Built for workers who follow a repeating roster cycle.</h1>
        <p>
          Master Roster is designed for repeating, rotating and multi-week roster patterns. Upload the roster you already receive from work and RosterPal can extract the shifts and roster structure, let you choose the correct name or roster line, and prepare the pattern for your personal calendar.
        </p>
        <div className="heroKeyMessage">
          <strong>No need to enter every shift yourself.</strong>
          <span>Upload the roster, review the result and let RosterPal do the setup work.</span>
        </div>
        <div className="premiumNotice masterAccessNotice">
          <span className="freeBadge">FREE</span>
          <div>
            <strong>Master Roster access is available in RosterPal Free.</strong>
            <p>Premium unlocks the additional planning and roster-management tools shown below, including Leave Planner, Leave History, Compare Rosters and Shift Swap tools.</p>
          </div>
          <Link href="/plans">Compare Free &amp; Premium →</Link>
        </div>
      </section>

      <section className="processSection">
        <div className="sectionHeading leftAligned">
          <span className="eyebrow">HOW MASTER ROSTER WORKS</span>
          <h2>From the workplace roster to a calendar that follows your cycle.</h2>
          <p>RosterPal is built to take the repeated manual entry out of a roster that already has a pattern.</p>
        </div>
        <div className="processGrid">
          <article><span>01</span><h3>Upload the roster</h3><p>Import the master roster from a PDF or image instead of rebuilding it duty by duty.</p></article>
          <article><span>02</span><h3>RosterPal extracts it</h3><p>RosterPal identifies the roster structure and shifts, including repeating patterns and supported multi-week cycles.</p></article>
          <article><span>03</span><h3>Select your place in the roster</h3><p>Choose your name or roster line, then review and correct the detected shifts before saving.</p></article>
          <article><span>04</span><h3>Your calendar is populated</h3><p>The repeating pattern is placed into your RosterPal calendar so upcoming duties can be viewed without entering every shift yourself.</p></article>
        </div>
      </section>

      <section className="featurePageSection">
        <div className="sectionHeading leftAligned">
          <span className="eyebrow">MASTER ROSTER FEATURES</span>
          <h2>Everything Master Roster is designed to handle.</h2>
          <p>Core roster tools keep the repeating pattern useful day to day, while Premium adds deeper planning and comparison features.</p>
        </div>
        <div className="featureGroupGrid">
          {masterFeatureGroups.map((group) => (
            <article className="featureGroupCard" key={group.title}>
              <h3>{group.title}</h3><p>{group.intro}</p>
              <ul className="featureChecklist">{group.items.map((item) => <li key={item}><span aria-hidden="true">✓</span>{item}</li>)}</ul>
            </article>
          ))}
        </div>
      </section>

      <section className="detailFeatureSection">
        <div className="sectionHeading leftAligned">
          <span className="eyebrow">PLANNING &amp; TIME OFF</span>
          <h2>Plan around the roster, not just the next shift.</h2>
          <p>These Premium tools build on your Master Roster to help with leave and shared time off.</p>
        </div>
        <div className="detailFeatureGrid">
          {planningFeatures.map((feature) => (
            <article className="detailFeatureCard" key={feature.title}>
              <span className="premiumMiniBadge">{feature.badge}</span>
              <h3>{feature.title}</h3>
              <p>{feature.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="calendarDetailSection">
        <div className="calendarDetailIntro">
          <span className="eyebrow">WORK CALENDAR &amp; PERSONAL PLANNING</span>
          <h2>Bring your shifts, leave and personal commitments together.</h2>
          <p>The RosterPal Work Calendar displays your rostered shifts alongside important details such as start and finish times, roles, locations, rest days and leave. This makes it easier to understand your complete schedule and plan your time away from work.</p>
        </div>
        <div className="calendarDetailGrid">
          <article className="calendarFeatureCard">
            <h3>Work Calendar features</h3>
            <ul className="featureChecklist">{workCalendarFeatures.map((item) => <li key={item}><span aria-hidden="true">✓</span>{item}</li>)}</ul>
          </article>
          <article className="calendarFeatureCard externalCalendarCard">
            <span className="premiumMiniBadge">PREMIUM</span>
            <h3>Import events from your other calendars</h3>
            <p>RosterPal can access compatible calendars already connected to your phone, including supported Apple, Google, Outlook and device calendars.</p>
            <p>Choose which calendars you want to use and import selected events into your RosterPal Work Calendar. This allows you to see appointments, birthdays, family commitments and other personal events alongside your work roster—making it easier to spot clashes and plan your time.</p>
            <div className="privacyNote"><strong>Your permission comes first.</strong><span>Calendar access is optional. RosterPal only accesses calendars you authorise through your device’s calendar settings.</span></div>
          </article>
        </div>
      </section>

      <section className="differenceCallout">
        <span className="eyebrow">IS MASTER ROSTER RIGHT FOR YOU?</span>
        <h2>Your roster repeats in a pattern.</h2>
        <p>If your workplace uses a rotating or repeating cycle that comes back around, Master Roster is the RosterPal workflow designed for that structure.</p>
        <div className="differenceActions">
          <Link className="button buttonPrimary" href="/benefits#master">See Master Roster benefits</Link>
          <Link className="button buttonSecondary" href="/week-to-week">Compare Week-to-Week</Link>
        </div>
      </section>
    </main>
  );
}
