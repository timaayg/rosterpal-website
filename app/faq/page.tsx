import Image from "next/image";
import Link from "next/link";

const faqs = [
  {
    question: "What is RosterPal?",
    answer: <>RosterPal is a roster management app designed for shift workers. It helps you import, organise and view your shifts without manually entering every day into a calendar.</>,
  },
  {
    question: "Who is RosterPal designed for?",
    answer: <>RosterPal is designed for anyone who works changing, rotating or repeating shifts, including transport workers, healthcare staff, hospitality teams, emergency services, security staff and other roster-based employees.</>,
  },
  {
    question: "What is the difference between Master Roster and Week-to-Week?",
    answer: <>Master Roster is designed for workers who follow a repeating roster cycle over several weeks.<br /><br />Week-to-Week is designed for workers who receive a new roster regularly and may have different shifts each week.</>,
  },
  {
    question: "How does Master Roster work?",
    answer: <>Upload your repeating roster and select your name or roster line. RosterPal extracts the shifts, allows you to review them and then applies the repeating cycle to your calendar.</>,
  },
  {
    question: "How does Week-to-Week work?",
    answer: <>Upload your latest weekly roster and select your name. RosterPal identifies your shifts and presents them for review before adding them to your calendar.</>,
  },
  {
    question: "What file types can I upload?",
    answer: <>RosterPal supports commonly used roster formats, including PDF files and images. Import results can vary depending on the quality and layout of the original roster.</>,
  },
  {
    question: "Can RosterPal read every roster format?",
    answer: <>RosterPal is designed to work with many different roster layouts, but employers use a wide variety of formats. You will always have an opportunity to review and correct the detected information before saving it.</>,
  },
  {
    question: "Can I edit a shift after importing it?",
    answer: <>Yes. You can review and edit start times, finish times, roles, shift codes, locations and other details before or after saving your roster.</>,
  },
  {
    question: "Does RosterPal support overnight shifts?",
    answer: <>Yes. RosterPal can recognise shifts that begin on one day and finish the following day.</>,
  },
  {
    question: "Does it support split shifts?",
    answer: <>Yes. Multiple shift segments can be recorded on the same day, making RosterPal suitable for split shifts and other non-standard work patterns.</>,
  },
  {
    question: "Can it recognise days off and leave?",
    answer: <>Yes. RosterPal can record rest days, rostered days off and different types of leave. You can review and adjust these details before saving.</>,
  },
  {
    question: "What information appears on the Today screen?",
    answer: <>The Today screen provides a quick view of your current or next shift, including the date, start and finish times, role and location when available. It can also display local weather information when location access is enabled.</>,
  },
  {
    question: "Can I see all my shifts in a calendar?",
    answer: <>Yes. Imported and manually entered shifts appear in the RosterPal calendar, allowing you to view your upcoming work schedule by day, week or month.</>,
  },
  {
    question: "Can I view the original roster after importing it?",
    answer: <>Yes. RosterPal keeps access to the original roster source where supported, making it easier to compare imported shifts with the document provided by your employer.</>,
  },
  {
    question: "What happens when my roster changes?",
    answer: <>You can edit individual shifts, update an existing week or replace your roster. Roster protection features help prevent an existing roster from being overwritten accidentally.</>,
  },
  {
    question: "Can I use RosterPal on more than one device?",
    answer: <>Cloud synchronisation allows supported roster information to be backed up and made available across compatible devices when you are signed in to your account.</>,
  },
  {
    question: "Does RosterPal require an internet connection?",
    answer: <>Some features, including uploads, cloud synchronisation, weather information and account services, require an internet connection. Previously saved roster information may remain available offline.</>,
  },
  {
    question: "Is my roster automatically shared with my employer?",
    answer: <>No. RosterPal is a personal roster-management tool and does not automatically send your roster or changes back to your employer.</>,
  },
  {
    question: "Is RosterPal a replacement for my employer’s official roster?",
    answer: <>No. RosterPal helps you organise and view your schedule, but your employer’s official roster remains the authoritative source. Always check imported details before relying on them.</>,
  },
  {
    question: "What is included with RosterPal Free?",
    answer: <>RosterPal Free includes the essential tools for manually adding and managing shifts, viewing your schedule in the calendar, checking today’s shift and upcoming work, and recording details such as start and finish times, roles, locations, rest days and leave.</>,
  },
  {
    question: "What is included with RosterPal Premium?",
    answer: <>RosterPal Premium unlocks the complete RosterPal feature set shown on this website, including automatic PDF and image roster importing, Master Roster and Week-to-Week tools, repeating roster cycles, split shifts, roles, locations, leave and overnight-shift support, original roster access, roster protection and cloud synchronisation.</>,
  },
  {
    question: "How do I report an incorrect import or get help?",
    answer: <>If RosterPal cannot correctly read your roster, review and correct the shifts before saving. For further assistance, contact us at <a href="mailto:support@rosterpal.net">support@rosterpal.net</a> and include a description of the issue. Avoid sending sensitive personal information unless requested through an approved support channel.</>,
  },
];

export default function FAQPage() {
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

      <section className="pageHero faqHero">
        <span className="eyebrow">FREQUENTLY ASKED QUESTIONS</span>
        <h1>Everything you need to know about using RosterPal.</h1>
        <p>
          Find answers about Master Roster, Week-to-Week imports, supported shift types, calendar behaviour, cloud sync and what happens when a roster changes.
        </p>
      </section>

      <section className="faqSection">
        <div className="faqIntro">
          <span className="eyebrow">ROSTERPAL FAQ</span>
          <h2>Common questions, answered clearly.</h2>
          <p>Open any question below to see the answer.</p>
        </div>

        <div className="faqList">
          {faqs.map((faq, index) => (
            <details className="faqItem" key={faq.question} open={index === 0}>
              <summary>
                <span>{faq.question}</span>
                <span className="faqPlus" aria-hidden="true">+</span>
              </summary>
              <div className="faqAnswer">{faq.answer}</div>
            </details>
          ))}
        </div>
      </section>

      <section className="faqSupport">
        <div>
          <span className="eyebrow">STILL NEED HELP?</span>
          <h2>We’re here if your roster needs a closer look.</h2>
          <p>For support with an import or another RosterPal issue, contact support and include a clear description of what happened.</p>
        </div>
        <a className="button buttonPrimary" href="mailto:support@rosterpal.net">Email support</a>
      </section>
    </main>
  );
}
