import Link from "next/link";

const featureCards = [
  ["Import", "Bring in eligible PDF or image rosters instead of entering every shift manually."],
  ["Review", "Check dates, shift times, roles and locations before anything is saved."],
  ["Plan", "See work, leave, rest days and personal commitments together in one calendar."],
];

const tools = [
  ["Leave Planner", "See which rostered shifts fall inside planned leave and compare rostered days with calendar days."],
  ["Leave History", "Keep previous and upcoming leave together with dates, type and duration."],
  ["Compare Rosters", "Compare rosters with workmates to find common days off and easier times to make plans."],
  ["Calendar Import", "Bring selected events from supported device calendars into the RosterPal Work Calendar."],
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
          <a href="#styles">Roster styles</a>
          <a href="#ai">AI import</a>
          <a href="#calendar">Calendar</a>
          <a href="#insights">Insights</a>
          <Link href="/plans">Plans</Link>
          <a href="#faq">FAQ</a>
        </nav>
      </header>

      <section className="hero shell">
        <div className="heroCopy">
          <div className="eyebrow">YOUR ROSTER. YOUR TIME.</div>
          <h1>Plan your shifts.<br /><span>Own your time.</span></h1>
          <p className="lead">
            RosterPal helps shift workers import, manage and understand their roster —
            whether it repeats on a fixed cycle or changes every week.
          </p>
          <div className="heroActions">
            <a className="button primary" href="#styles">Explore features</a>
            <Link className="button ghost" href="/plans">View plans</Link>
          </div>
        </div>
        <div className="heroVisual">
          <div className="orb blueOrb" />
          <div className="orb orangeOrb" />
          <div className="phoneShell">
            <div className="phoneBar"><span>9:41</span><span>●●●</span></div>
            <div className="phoneContent">
              <span className="miniEyebrow">UPLOAD ROSTER WITH AI</span>
              <h3>Let RosterPal read your roster</h3>
              <div className="phoneCard">PDF or image roster</div>
              <div className="phoneCard">Review before saving</div>
              <div className="phoneCard strongCard">AI reads available</div>
              <div className="phoneButton">Let’s begin</div>
            </div>
          </div>
        </div>
      </section>

      <section className="section shell" id="what">
        <div className="sectionHead">
          <div className="eyebrow">WHAT IS ROSTERPAL?</div>
          <h2>Your roster, made easier to understand.</h2>
          <p>RosterPal brings your shifts, leave, rest days and personal plans together in one place.</p>
        </div>
        <div className="three">
          {featureCards.map(([title, text]) => (
            <article className="card" key={title}><b>{title}</b><p>{text}</p></article>
          ))}
        </div>
      </section>

      <section className="featureBand alt" id="styles">
        <div className="shell featureRow">
          <div className="featureCopy">
            <div className="eyebrow">MASTER + WEEK-TO-WEEK</div>
            <h2>One app. <span>Two ways to roster.</span></h2>
            <p>Move between Master Roster and Week-to-Week whenever your work pattern changes.</p>
            <div className="choiceCards">
              <div className="choiceCard"><b>Master Roster</b><span>For repeating cycles, roster lines and rotating schedules.</span></div>
              <div className="choiceCard activeChoice"><b>Week-to-Week</b><span>For weekly, fortnightly or irregular rosters that change each time.</span></div>
            </div>
          </div>
          <div className="promoFrame">
            <div className="promoTitle">Switch between <span>roster styles</span></div>
            <div className="promoPhone">Change how you use RosterPal</div>
          </div>
        </div>
      </section>

      <section className="featureBand shell" id="ai">
        <div className="featureRow reverse">
          <div className="promoFrame tall">
            <div className="promoTitle">Upload your <span>roster with AI</span></div>
            <div className="promoPhone">Import → Review → Calendar</div>
          </div>
          <div className="featureCopy">
            <div className="eyebrow">AI ROSTER IMPORT</div>
            <h2>Upload your <span>roster with AI.</span></h2>
            <p>Import an eligible roster image or PDF, let RosterPal interpret the shifts, then review everything before it reaches your calendar.</p>
            <ul className="featureList compact">
              <li>✓ PDF and image imports</li>
              <li>✓ Dates and shift times detected</li>
              <li>✓ Roles and locations</li>
              <li>✓ Split and overnight shifts</li>
              <li>✓ Review before saving</li>
              <li>✓ Previous AI reads</li>
              <li>✓ Report inconsistent reads</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="featureBand alt" id="upcoming">
        <div className="shell featureRow">
          <div className="featureCopy">
            <div className="eyebrow">UPCOMING SHIFTS</div>
            <h2>Know what’s <span>coming next.</span></h2>
            <p>See your upcoming working week at a glance, including shift times, roles and days off.</p>
          </div>
          <div className="promoFrame">
            <div className="promoTitle">Upcoming <span>Shifts</span></div>
            <div className="promoPhone">Next week at a glance</div>
          </div>
        </div>
      </section>

      <section className="featureBand shell" id="reminders">
        <div className="featureRow reverse">
          <div className="promoFrame">
            <div className="promoTitle">Shift <span>Reminders</span></div>
            <div className="promoPhone">Stay ahead of changing shifts</div>
          </div>
          <div className="featureCopy">
            <div className="eyebrow">REMINDERS</div>
            <h2>Stay ahead of <span>changing shifts.</span></h2>
            <p>RosterPal can remind you before upcoming shifts and prompt you when your Week-to-Week roster still needs updating.</p>
            <ul className="featureList compact">
              <li>✓ Upcoming shift reminders</li>
              <li>✓ Configurable reminder time</li>
              <li>✓ Incomplete-roster reminders</li>
              <li>✓ Automatically refreshed when shifts change</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="featureBand alt" id="insights">
        <div className="shell featureRow">
          <div className="featureCopy">
            <div className="eyebrow">ROSTER INSIGHTS</div>
            <h2>Understand your <span>work pattern.</span></h2>
            <p>See monthly outlooks and broader roster trends instead of just individual shifts.</p>
            <ul className="featureList compact">
              <li>✓ Hours and shifts per month</li>
              <li>✓ Early starts, mornings and nights</li>
              <li>✓ Long shifts and days off</li>
              <li>✓ Work-run patterns and recovery trends</li>
            </ul>
          </div>
          <div className="promoFrame">
            <div className="promoTitle">See your <span>roster insights</span></div>
            <div className="promoPhone">Monthly outlook + pattern & recovery</div>
          </div>
        </div>
      </section>

      <section className="featureBand shell" id="fatigue">
        <div className="featureRow reverse">
          <div className="dualVisual">
            <div className="promoFrame compactFrame"><div className="promoTitle">Track fatigue <span>& recovery</span></div><div className="promoPhone">40% Moderate Pressure</div></div>
            <div className="promoFrame compactFrame"><div className="promoTitle">See the reason <span>for your score</span></div><div className="promoPhone">Why this score?</div></div>
          </div>
          <div className="featureCopy">
            <div className="eyebrow">FATIGUE & RECOVERY</div>
            <h2>Track fatigue <span>& recovery.</span></h2>
            <p>Understand how shift timing, consecutive duties and recovery periods affect your roster, with clear factor breakdowns and projections.</p>
            <p className="finePrint">RosterPal provides planning information only and is not a medical assessment or a fitness-for-duty determination.</p>
          </div>
        </div>
      </section>

      <section className="featureBand alt" id="appearance">
        <div className="shell featureRow">
          <div className="featureCopy">
            <div className="eyebrow">APPEARANCE</div>
            <h2>Make RosterPal <span>feel like yours.</span></h2>
            <p>Choose between RosterPal Original, Rose and Light. Your selected appearance is saved automatically.</p>
            <div className="themeChips"><span>Original</span><span>Rose</span><span>Light</span></div>
          </div>
          <div className="promoFrame">
            <div className="promoTitle">Choose <span>your look</span></div>
            <div className="promoPhone">Original · Rose · Light</div>
          </div>
        </div>
      </section>

      <section className="featureBand shell" id="calendar">
        <div className="featureRow reverse">
          <div className="promoFrame tall">
            <div className="promoTitle">Work <span>Calendar</span></div>
            <div className="promoPhone">Shifts, rest days and fatigue indicators</div>
          </div>
          <div className="featureCopy">
            <div className="eyebrow">WORK CALENDAR</div>
            <h2>Your work and life <span>in one calendar.</span></h2>
            <p>See your rostered shifts alongside the details that matter and tap any day to view, add or edit what is happening.</p>
            <ul className="featureList compact">
              <li>✓ Day, week and month views</li>
              <li>✓ Start and finish times</li>
              <li>✓ Roles, locations and shift codes</li>
              <li>✓ Split and overnight shifts</li>
              <li>✓ Rest days, RDOs and leave</li>
              <li>✓ Personal events and calendar import</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="shell">
          <div className="sectionHead">
            <div className="eyebrow">MORE TOOLS</div>
            <h2>Built around life outside the roster too.</h2>
          </div>
          <div className="four">
            {tools.map(([title, text]) => (
              <article className="card" key={title}><b>{title}</b><p>{text}</p></article>
            ))}
          </div>
        </div>
      </section>

      <section className="section shell plansTeaser">
        <div className="sectionHead">
          <div className="eyebrow">FREE VS PREMIUM</div>
          <h2>Start simple. Unlock more when you need it.</h2>
        </div>
        <div className="plansGrid">
          <article className="miniPlan">
            <span className="pill soft">FREE</span>
            <h3>Roster basics</h3>
            <p>Manual shifts, Today, roles, locations, leave and partial calendar access.</p>
          </article>
          <article className="miniPlan featuredPlan">
            <span className="pill">PREMIUM</span>
            <h3>The complete RosterPal experience</h3>
            <p>AI imports, Master Roster, Week-to-Week, full calendar, advanced tools and cloud sync.</p>
          </article>
        </div>
        <Link className="button primary" href="/plans">Compare plans</Link>
      </section>

      <section className="section alt" id="faq">
        <div className="shell">
          <div className="sectionHead">
            <div className="eyebrow">FAQ</div>
            <h2>Common questions.</h2>
          </div>
          <div className="faq">
            <details open><summary>What is RosterPal?</summary><p>RosterPal is a roster-management app for shift workers that helps organise changing or repeating work schedules in one clear place.</p></details>
            <details><summary>Who is it for?</summary><p>Shift workers including transport, healthcare, hospitality, emergency services, security and other roster-based employees.</p></details>
            <details><summary>Master Roster vs Week-to-Week?</summary><p>Master Roster is designed for repeating roster cycles. Week-to-Week is for schedules that change from one week to the next.</p></details>
            <details><summary>How does AI roster import work?</summary><p>Upload a compatible roster image or PDF, review the interpreted dates and shifts, then confirm what should be added to your calendar.</p></details>
            <details><summary>What files can I import?</summary><p>RosterPal supports compatible PDF and image roster files.</p></details>
            <details><summary>Can I use RosterPal without Premium?</summary><p>Yes. Free users can manage shifts manually and access core roster features with partial calendar access.</p></details>
            <details><summary>Does RosterPal replace my employer’s official roster?</summary><p>No. Always check your employer’s official roster and workplace instructions for final shift details.</p></details>
          </div>
        </div>
      </section>

      <section className="finalCta">
        <div className="shell finalCtaInner">
          <div>
            <div className="eyebrow">YOUR ROSTER. YOUR TIME.</div>
            <h2>Plan your shifts.<br /><span>Own your time.</span></h2>
          </div>
          <div className="heroActions">
            <a className="button primary" href="#what">Explore RosterPal</a>
            <Link className="button ghost" href="/plans">View plans</Link>
          </div>
        </div>
      </section>

      <footer className="footer shell">
        <div className="brand"><span className="mark">R</span><span>Roster<span className="accent">Pal</span></span></div>
        <div className="footerLinks">
          <Link href="/support">Support</Link><Link href="/privacy">Privacy</Link><Link href="/terms">Terms</Link>
        </div>
        <p>© 2026 RosterPal. Plan your shifts. Own your time.</p>
      </footer>
    </main>
  );
}
