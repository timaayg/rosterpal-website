import Image from "next/image";
import Link from "next/link";

const APP_STORE_URL = "https://apps.apple.com/us/app/rosterpal-roster-calendar/id6821256161";
const GOOGLE_PLAY_URL = "https://play.google.com/store/apps/details?id=com.ravenholdigital.rosterpal";

function StoreDownloadLinks({ top = false }: { top?: boolean }) {
  return (
    <div className={top ? "storeDownloadActions storeDownloadActionsTop" : "storeDownloadActions"}>
      <a className="storeDownloadButton storeDownloadApple" href={APP_STORE_URL} target="_blank" rel="noopener noreferrer" aria-label="Download RosterPal on the Apple App Store">
        <svg className="storeLogo storeAppleLogo" width="34" height="34" viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
          <path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04c-2.04.027-3.91 1.183-4.961 3.014c-2.117 3.675-.546 9.103 1.519 12.09c1.013 1.454 2.208 3.09 3.792 3.039c1.52-.065 2.09-.987 3.935-.987c1.831 0 2.35.987 3.96.948c1.637-.026 2.676-1.48 3.676-2.948c1.156-1.688 1.636-3.325 1.662-3.415c-.039-.013-3.182-1.221-3.22-4.857c-.026-3.04 2.48-4.494 2.597-4.559c-1.429-2.09-3.623-2.324-4.39-2.376c-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83c-1.207.052-2.662.805-3.532 1.818c-.78.896-1.454 2.338-1.273 3.714c1.338.104 2.715-.688 3.559-1.701"/>
        </svg>
        <span><small>Download on the</small><strong>App Store</strong></span>
      </a>
      <a className="storeDownloadButton storeDownloadGoogle" href={GOOGLE_PLAY_URL} target="_blank" rel="noopener noreferrer" aria-label="Get RosterPal on Google Play">
        <svg className="storeLogo storeGoogleLogo" width="34" height="34" viewBox="0 0 24 24" aria-hidden="true">
          <path fill="#00D0FF" d="M2.5 1.5C2.2 1.9 2 2.4 2 3v18c0 .6.2 1.1.5 1.5L13.2 12 2.5 1.5Z"/>
          <path fill="#00E08A" d="m2.5 1.5 13.1 7.7-2.4 2.8L2.5 1.5Z"/>
          <path fill="#FFD13B" d="m13.2 12 2.4-2.8 5.5 3.1c.8.5.8 1 .1 1.5l-5.6 3.2-2.4-5Z"/>
          <path fill="#FF525A" d="m2.5 22.5 10.7-10.5 2.4 5-13.1 5.5Z"/>
        </svg>
        <span><small>GET IT ON</small><strong>Google Play</strong></span>
      </a>
    </div>
  );
}

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
          <Link href="/guides">Guides</Link>
          <Link href="/faq">FAQ</Link>
        </nav>
        <a className="headerCta" href="#download">Get RosterPal</a>
      </header>

      <section className="introHero">
        <div className="introCopy">
          <span className="eyebrow">WHAT IS ROSTERPAL?</span>
          <span className="iosLaunchNotice">
            <span className="iosLaunchDot" aria-hidden="true" />
            Now available on iOS and Android
          </span>
          <StoreDownloadLinks top />
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

      <section className="featurePageSection">
        <div className="sectionHeading leftAligned">
          <span className="eyebrow">WHO ROSTERPAL IS FOR</span>
          <h2>Shift planning for different industries.</h2>
          <p>Explore how RosterPal helps workers with rotating and changing schedules.</p>
        </div>
        <div className="featureGroupGrid">
          <article className="featureGroupCard"><h3>Nurses &amp; healthcare</h3><p>Organise early, late and overnight duties.</p><Link href="/for/nurses">Roster planning for nurses →</Link></article>
          <article className="featureGroupCard"><h3>Transport drivers</h3><p>Keep changing duties, split shifts and rest days visible.</p><Link href="/for/transport-workers">Roster planning for drivers →</Link></article>
          <article className="featureGroupCard"><h3>Mining &amp; FIFO</h3><p>Plan around repeating work blocks and time off.</p><Link href="/for/mining-workers">Roster planning for mining →</Link></article>
          <article className="featureGroupCard"><h3>Hospitality</h3><p>Keep up with newly published weekly shifts.</p><Link href="/for/hospitality-workers">Roster planning for hospitality →</Link></article>
        </div>
      </section>

      <section className="benefitTeaser">
        <span className="eyebrow">WHY ROSTERPAL?</span>
        <h2>Less time decoding rosters. More time planning around them.</h2>
        <p>See how RosterPal helps differently depending on the type of roster you work.</p>
        <Link className="button buttonPrimary" href="/benefits">See the benefits</Link>
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

      <section className="benefitTeaser">
        <span className="eyebrow">ROSTERPAL GUIDES</span>
        <h2>Practical tips for organising shift work.</h2>
        <p>Learn how to manage rotating rosters, import PDF shifts, plan leave and keep up with weekly changes.</p>
        <Link className="button buttonPrimary" href="/guides">Read shift work guides</Link>
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
        <p>RosterPal is now available on iOS and Android. Download it today.</p>
        <StoreDownloadLinks />
      </section>
    </main>
  );
}
