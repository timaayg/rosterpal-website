import Link from "next/link";
import Image from "next/image";

export default function SupportPage() {
  return (
    <main className="supportPage">
      {/* HEADER */}
      <header className="legalHeader">
        <Link href="/" className="legalBrand">
          <Image
            src="/rosterpal-icon.png"
            alt="RosterPal"
            width={42}
            height={42}
          />
          <span>RosterPal</span>
        </Link>

        <Link href="/" className="legalBack">
          ← Back to RosterPal
        </Link>
      </header>

      {/* HERO */}
      <section className="supportHero">
        <div className="supportHeroGlow" />

        <div className="supportHeroInner">
          <span className="eyebrow">ROSTERPAL SUPPORT</span>

          <h1>
            How can we
            <br />
            <span>help?</span>
          </h1>

          <p>
            Find help with your roster, account, workplace access and
            RosterPal features.
          </p>

          <a
            href="mailto:support@rosterpal.net"
            className="supportHeroButton"
          >
            Contact Support
          </a>
        </div>
      </section>

      {/* HELP CATEGORIES */}
      <section className="supportContent">
        <div className="supportHeading">
          <span className="eyebrow">HELP CENTRE</span>
          <h2>What do you need help with?</h2>
          <p>
            Choose a topic below or contact us directly if you can&apos;t find
            what you need.
          </p>
        </div>

        <div className="supportGrid">
          <SupportCard
            icon="→"
            title="Getting Started"
            text="New to RosterPal? Learn how to get your roster into the app and start planning."
            items={[
              "Setting up your account",
              "Adding your first roster",
              "Understanding your calendar",
            ]}
          />

          <SupportCard
            icon="◷"
            title="Roster & Shifts"
            text="Help with your personal roster, shifts, days off and schedule."
            items={[
              "My roster looks incorrect",
              "Roster changes",
              "Shift times and days off",
            ]}
          />

          <SupportCard
            icon="▣"
            title="Roster Uploads"
            text="Having trouble submitting or processing a workplace roster?"
            items={[
              "Uploading a roster",
              "Roster processing",
              "Incorrect roster information",
            ]}
          />

          <SupportCard
            icon="◎"
            title="Company Access"
            text="Help with workplace rosters, access codes and company roster access."
            items={[
              "Joining a workplace roster",
              "Access removed",
              "Wrong roster or company",
            ]}
          />

          <SupportCard
            icon="♙"
            title="Account & Sign-in"
            text="Get help accessing your RosterPal account or managing your information."
            items={[
              "Sign-in problems",
              "Google or Apple sign-in",
              "Account and data deletion",
            ]}
          />

          <SupportCard
            icon="◉"
            title="Notifications"
            text="Troubleshoot roster alerts, messages and push notifications."
            items={[
              "Notifications not arriving",
              "Workplace messages",
              "Notification permissions",
            ]}
          />
        </div>
      </section>

      {/* ACCOUNT DELETION */}
      <section className="supportDeletion">
        <div className="supportDeletionInner">
          <div className="supportDeletionIcon">♙</div>

          <div>
            <span className="eyebrow">YOUR ACCOUNT</span>
            <h2>Account & data deletion</h2>

            <p>
              Want to delete your RosterPal account or request deletion of
              personal information associated with your account?
            </p>

            <p>
              Contact RosterPal Support from the email address associated with
              your account so we can help process your request and verify your
              identity where required.
            </p>

            <a
              href="mailto:support@rosterpal.net?subject=RosterPal%20Account%20Deletion%20Request"
              className="supportOutlineButton"
            >
              Request account deletion
            </a>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="supportContact">
        <div className="supportContactGlow" />

        <div className="supportContactInner">
          <div className="supportContactIcon">
            <Image
              src="/rosterpal-icon.png"
              alt=""
              width={74}
              height={74}
            />
          </div>

          <span className="eyebrow">STILL NEED HELP?</span>

          <h2>We&apos;re here to help.</h2>

          <p>
            Tell us what&apos;s happening and include as much detail as you can.
            If your issue involves a roster, let us know which part doesn&apos;t
            look right.
          </p>

          <a
            href="mailto:support@rosterpal.net"
            className="supportEmailButton"
          >
            <span>✉</span>

            <div>
              <small>EMAIL ROSTERPAL SUPPORT</small>
              <strong>support@rosterpal.net</strong>
            </div>
          </a>

          <span className="supportResponse">
            We&apos;ll get back to you as soon as we can.
          </span>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="legalFooter">
        <Link href="/" className="legalFooterBrand">
          <Image
            src="/rosterpal-icon.png"
            alt=""
            width={30}
            height={30}
          />
          <strong>RosterPal</strong>
        </Link>

        <span>Plan your shifts. Own your time.</span>

        <Link href="/privacy">Privacy</Link>
        <Link href="/terms">Terms</Link>
        <Link href="/">Home</Link>
      </footer>
    </main>
  );
}

function SupportCard({
  icon,
  title,
  text,
  items,
}: {
  icon: string;
  title: string;
  text: string;
  items: string[];
}) {
  return (
    <article className="supportCard">
      <div className="supportCardIcon">{icon}</div>

      <h3>{title}</h3>

      <p>{text}</p>

      <div className="supportCardItems">
        {items.map((item) => (
          <span key={item}>
            <b>›</b>
            {item}
          </span>
        ))}
      </div>
    </article>
  );
}