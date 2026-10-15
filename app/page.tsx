import Link from "next/link";

const masterFeatures = [
  "Import a master roster from PDF or image",
  "Rotating and multi-week roster cycles",
  "Choose your name or roster line",
  "Review and correct shifts before saving",
  "Start and finish times, split shifts and overnight work",
  "Shift codes, roles and work locations",
  "Rest days, RDOs and leave",
  "Today screen and Work Calendar",
  "Current day, active shift and roster-week highlighting",
  "Roster change protection and original-file access",
  "Cloud backup and sync across devices",
];

const weeklyFeatures = [
  "Import a new weekly roster from PDF or image",
  "Automatically identify the employee and roster dates",
  "Extract start and finish times",
  "Different shifts every day",
  "Split and overnight shifts",
  "Shift codes, roles and locations",
  "Review and edit before saving",
  "Today screen and Work Calendar",
  "Roster protection and source-file access",
  "Cloud backup and sync",
  "Report an inconsistent or incorrect read",
];

const calendarFeatures = [
  "Day, week and month views",
  "Start and finish times shown on the calendar",
  "Roles, locations and shift codes",
  "Overnight and split shifts",
  "Rest days, RDOs and leave",
  "Personal events alongside work shifts",
  "Import selected events from Apple, Google, Outlook or device calendars",
];

export default function Home() {
  return (
    <main>
      <header className="nav shell">
        <Link className="brand" href="/" aria-label="RosterPal home">
          <span className="mark">R</span>
          <span>Roster<span className="accent">Pal</span></span>
        </Link>
        <nav>
          <a href="#master">Master Roster</a>
          <a href="#weekly">Week-to-Week</a>
          <a href="#calendar">Calendar</a>
          <Link href="/plans">Plans</Link>
          <a href="#faq">FAQ</a>
        </nav>
      </header>

      <section className="hero shell">
        <div className="eyebrow">YOUR ROSTER. YOUR TIME.</div>
        <h1>Plan your shifts.<br /><span>Own your time.</span></h1>
        <p className="lead">
          Built for shift workers who need their real roster in one clear place —
          whether it repeats on a master cycle or changes every week.
        </p>
        <div className="ticks">
          <span>✓ Rotating rosters</span>
          <span>✓ Week-to-week</span>
          <span>✓ Shift workers</span>
        </div>
        <div className="heroActions">
          <a className="button primary" href="#master">Explore features</a>
          <Link className="button ghost" href="/plans">View plans</Link>
        </div>

        <div className="preview">
          <div className="previewTop">
            <span>Today</span><span className="liveDot">● On shift</span>
          </div>
          <div className="shiftCard">
            <div><small>START</small><strong>14:24</strong></div>
            <div className="line" />
            <div><small>FINISH</small><strong>22:36</strong></div>
          </div>
          <div className="miniGrid">
            {["MON","TUE","WED","THU","FRI","SAT","SUN"].map((d, i) => (
              <div className={i === 3 ? "day active" : "day"} key={d}>
                <small>{d}</small><b>{12 + i}</b><span>{i === 1 || i === 5 ? "OFF" : "14:24"}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section shell" id="what">
        <div className="sectionHead">
          <div className="eyebrow">WHAT IS ROSTERPAL?</div>
          <h2>Your roster, made easier to understand.</h2>
          <p>
            RosterPal turns complicated work rosters into a practical day-to-day
            calendar so you can see when you work, when you are free and what is coming next.
          </p>
        </div>
        <div className="three">
          <article className="card"><b>Import</b><p>Bring in eligible PDF or image rosters instead of entering every shift manually.</p></article>
          <article className="card"><b>Review</b><p>Check start and finish times, roles, locations, leave and rest days before saving.</p></article>
          <article className="card"><b>Plan</b><p>Use Today and the Work Calendar to see your work and personal commitments together.</p></article>
        </div>
      </section>

      <section className="section alt" id="master">
        <div className="shell split">
          <div>
            <div className="eyebrow">MASTER ROSTER</div>
            <h2>No need to enter every shift. We do the heavy lifting.</h2>
            <p className="muted">
              Designed for repeating, rotating and multi-week master rosters.
              Import your roster, select your line, review it and let RosterPal build the cycle.
            </p>
          </div>
          <ul className="featureList">{masterFeatures.map(x => <li key={x}>✓ {x}</li>)}</ul>
        </div>
      </section>

      <section className="section shell" id="weekly">
        <div className="split">
          <div>
            <div className="eyebrow">WEEK-TO-WEEK</div>
            <h2>A fresh roster every week? RosterPal handles that too.</h2>
            <p className="muted">
              Import a changing weekly roster and turn it into usable shifts without
              forcing it into a repeating pattern.
            </p>
          </div>
          <ul className="featureList">{weeklyFeatures.map(x => <li key={x}>✓ {x}</li>)}</ul>
        </div>
      </section>

      <section className="section alt" id="calendar">
        <div className="shell split">
          <div>
            <div className="eyebrow">WORK CALENDAR</div>
            <h2>Work, leave and personal commitments in one place.</h2>
            <p className="muted">
              See your rostered shifts alongside the details that matter, select any
              date for more information, and add personal events around your working life.
            </p>
          </div>
          <ul className="featureList">{calendarFeatures.map(x => <li key={x}>✓ {x}</li>)}</ul>
        </div>
      </section>

      <section className="section shell">
        <div className="sectionHead">
          <div className="eyebrow">MORE TOOLS</div>
          <h2>Built around life outside the roster too.</h2>
        </div>
        <div className="four">
          <article className="card"><b>Leave Planner</b><p>Select dates and see the shifts affected, including rostered days versus calendar days.</p></article>
          <article className="card"><b>Leave History</b><p>Keep a clear record of previous and upcoming leave, including type and duration.</p></article>
          <article className="card"><b>Compare Rosters</b><p>Compare your roster with workmates to find common days off and easier times to make plans.</p></article>
          <article className="card"><b>Calendar Import</b><p>Optionally bring selected events from other calendars into the RosterPal Work Calendar.</p></article>
        </div>
      </section>

      <section className="section alt" id="faq">
        <div className="shell">
          <div className="sectionHead">
            <div className="eyebrow">FAQ</div>
            <h2>Common questions.</h2>
          </div>
          <div className="faq">
            <details open><summary>Who is RosterPal for?</summary><p>Shift workers including transport, healthcare, hospitality, emergency services, security and other roster-based employees.</p></details>
            <details><summary>What is the difference between Master Roster and Week-to-Week?</summary><p>Master Roster is designed for repeating roster cycles. Week-to-Week is for schedules that change from one week to the next.</p></details>
            <details><summary>What files can I import?</summary><p>RosterPal supports compatible PDF and image roster files. You can review the interpreted shifts before saving them.</p></details>
            <details><summary>Can I still add shifts manually?</summary><p>Yes. Manual shift entry remains available, including for Free users.</p></details>
            <details><summary>Can I keep my work and personal calendar together?</summary><p>Yes. The Work Calendar can display rostered shifts and personal events together, with optional import from supported device calendars.</p></details>
          </div>
        </div>
      </section>

      <section className="cta shell">
        <div><div className="eyebrow">ROSTERPAL</div><h2>Plan your shifts. Own your time.</h2></div>
        <Link className="button primary" href="/plans">Compare Free & Premium</Link>
      </section>

      <footer className="footer shell">
        <div className="brand"><span className="mark">R</span><span>Roster<span className="accent">Pal</span></span></div>
        <div className="footerLinks">
          <Link href="/plans">Plans</Link><Link href="/support">Support</Link><Link href="/privacy">Privacy</Link><Link href="/terms">Terms</Link>
        </div>
        <p>© 2026 RosterPal. Plan your shifts. Own your time.</p>
      </footer>
    </main>
  );
}
