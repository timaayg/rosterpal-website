import Link from "next/link";
import Image from "next/image";

export default function TermsPage() {
  return (
    <main className="legalPage">
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
      <section className="legalHero">
        <span className="eyebrow">ROSTERPAL</span>

        <h1>Terms of Use</h1>

        <p>
          The terms that apply when you access or use RosterPal and its
          related services.
        </p>

        <span className="legalUpdated">
          Last updated: 6 September 2026
        </span>
      </section>

      {/* TERMS */}
      <section className="legalContent">
        <div className="legalIntro">
          <p>
            These Terms of Use govern your access to and use of the RosterPal
            application, website and related services.
          </p>

          <p>
            By creating an account or using RosterPal, you agree to these
            Terms. If you do not agree with them, you should not use
            RosterPal.
          </p>
        </div>

        <LegalSection title="1. About RosterPal">
          <p>
            RosterPal is a roster and shift-planning service designed to help
            users view, organise and plan around their work schedules.
          </p>

          <p>
            RosterPal may provide features including roster uploads, roster
            interpretation, personal shift calendars, workplace roster
            access, notifications and other roster-management tools.
          </p>
        </LegalSection>

        <LegalSection title="2. Your account">
          <p>
            Some RosterPal features require an account. You are responsible
            for providing accurate account information and for keeping your
            account and sign-in credentials secure.
          </p>

          <p>
            You are responsible for activity carried out through your account
            unless the activity results from circumstances for which you are
            not reasonably responsible.
          </p>

          <p>
            If you believe your account has been accessed without
            authorisation, contact us at{" "}
            <a href="mailto:support@rosterpal.net">
              support@rosterpal.net
            </a>
            .
          </p>
        </LegalSection>

        <LegalSection title="3. Roster information">
          <p>
            RosterPal helps present and organise roster information, but your
            employer or other roster provider remains the authoritative source
            for your official work schedule.
          </p>

          <div className="legalNotice">
            <strong>Important</strong>
            <p>
              Always check important shift information against your official
              workplace roster or instructions from your employer,
              particularly where a missed or incorrect shift could have
              significant consequences.
            </p>
          </div>
        </LegalSection>

        <LegalSection title="4. Automated and AI-assisted roster processing">
          <p>
            RosterPal may use automated technologies, including artificial
            intelligence and document-processing systems, to help interpret
            roster documents and convert roster information into a structured
            format.
          </p>

          <p>
            Automated processing can make mistakes. Information extracted
            from a roster may be incomplete, incorrectly interpreted or
            affected by the quality or format of the original document.
          </p>

          <p>
            Where RosterPal provides review or approval processes, these are
            intended to help identify errors before roster information is
            relied upon.
          </p>
        </LegalSection>

        <LegalSection title="5. Uploading roster documents">
          <p>
            You must only upload documents, images or information that you
            have the right or authority to provide to RosterPal.
          </p>

          <p>
            You must not knowingly upload unlawful material or use RosterPal
            to obtain unauthorised access to confidential workplace
            information.
          </p>

          <p>
            You retain any rights you hold in content you upload. You give
            RosterPal permission to process that content as reasonably
            necessary to provide the features you request.
          </p>
        </LegalSection>

        <LegalSection title="6. Workplace access">
          <p>
            Some RosterPal features may provide access to rosters associated
            with a workplace, company or organisation.
          </p>

          <p>
            Access may depend on authorisation provided through that workplace
            or through RosterPal's roster-management system.
          </p>

          <p>
            Workplace roster access may be changed or removed when you are no
            longer authorised to access that roster.
          </p>
        </LegalSection>

        <LegalSection title="7. Acceptable use">
          <p>You must not use RosterPal to:</p>

          <ul>
            <li>break applicable laws or regulations;</li>
            <li>access information you are not authorised to access;</li>
            <li>impersonate another person or misrepresent your identity;</li>
            <li>interfere with the security or operation of RosterPal;</li>
            <li>
              attempt to bypass access controls or other security measures;
            </li>
            <li>
              introduce malicious software, harmful code or automated attacks;
            </li>
            <li>
              misuse another person's personal or workplace information; or
            </li>
            <li>
              use the service in a way that materially harms RosterPal or
              other users.
            </li>
          </ul>
        </LegalSection>

        <LegalSection title="8. Notifications">
          <p>
            RosterPal may provide notifications relating to shifts, roster
            information, account activity, workplace access or operation of
            the service.
          </p>

          <p>
            Notifications are provided as a convenience and should not be
            treated as the sole source of important workplace instructions.
          </p>

          <p>
            Delivery may be affected by your device settings, network
            connection, operating system or third-party notification
            services.
          </p>
        </LegalSection>

        <LegalSection title="9. Availability of the service">
          <p>
            We aim to keep RosterPal reliable and available, but uninterrupted
            access cannot be guaranteed.
          </p>

          <p>
            Features may occasionally be unavailable because of maintenance,
            updates, technical problems, third-party services or circumstances
            outside our reasonable control.
          </p>

          <p>
            We may change, improve, add or remove features as RosterPal
            develops.
          </p>
        </LegalSection>

        <LegalSection title="10. Subscriptions and paid features">
          <p>
            RosterPal may offer free features, paid features, subscriptions or
            other purchases.
          </p>

          <p>
            Where a purchase is made through an app store or another payment
            provider, payment, renewal and cancellation may also be governed
            by that provider's terms.
          </p>

          <p>
            Any applicable pricing and billing terms will be displayed before
            a purchase is completed.
          </p>
        </LegalSection>

        <LegalSection title="11. Intellectual property">
          <p>
            RosterPal, including its software, branding, design and original
            content, is protected by applicable intellectual-property laws.
          </p>

          <p>
            These Terms give you a limited, personal, non-exclusive,
            non-transferable right to use RosterPal for its intended purpose.
            They do not transfer ownership of RosterPal or its intellectual
            property to you.
          </p>
        </LegalSection>

        <LegalSection title="12. Privacy">
          <p>
            Personal information associated with your use of RosterPal is
            handled in accordance with our{" "}
            <Link href="/privacy">Privacy Policy</Link>.
          </p>
        </LegalSection>

        <LegalSection title="13. Accuracy and reliance">
          <p>
            RosterPal is intended to assist with roster organisation and
            personal planning. It does not replace official instructions from
            your employer or workplace.
          </p>

          <p>
            You should verify information where accuracy is important,
            particularly after roster changes, shift swaps, workplace
            instructions or automated roster processing.
          </p>
        </LegalSection>

        <LegalSection title="14. Liability">
          <p>
            To the extent permitted by law, RosterPal is not responsible for
            loss arising solely from inaccurate roster information supplied by
            another person or organisation, unauthorised changes, third-party
            service failures, or a user's failure to verify important roster
            information.
          </p>

          <p>
            Nothing in these Terms excludes, restricts or modifies any
            consumer guarantee, right or remedy that cannot lawfully be
            excluded under applicable law, including the Australian Consumer
            Law where it applies.
          </p>
        </LegalSection>

        <LegalSection title="15. Suspension or termination">
          <p>
            We may restrict or suspend access to RosterPal where reasonably
            necessary to protect the service, users or other parties, respond
            to unlawful activity, address serious misuse or comply with legal
            obligations.
          </p>

          <p>
            You may stop using RosterPal at any time and may request account
            deletion where that option is available.
          </p>
        </LegalSection>

        <LegalSection title="16. Changes to these Terms">
          <p>
            We may update these Terms as RosterPal develops or when legal,
            technical or operational requirements change.
          </p>

          <p>
            The latest version will be published on this page with an updated
            revision date. Where appropriate, we may also notify users of
            significant changes.
          </p>
        </LegalSection>

        <LegalSection title="17. Governing law">
          <p>
            These Terms are governed by the laws applicable in New South
            Wales, Australia, subject to any rights you may have under laws
            that apply to you and cannot lawfully be excluded.
          </p>
        </LegalSection>

        <LegalSection title="18. Contact us">
          <p>
            If you have questions about these Terms or RosterPal, contact:
          </p>

          <div className="legalContact">
            <strong>RosterPal</strong>

            <a href="mailto:support@rosterpal.net">
              support@rosterpal.net
            </a>

            <span>Australia</span>
          </div>
        </LegalSection>
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

        <Link href="/">Home</Link>
      </footer>
    </main>
  );
}

function LegalSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="legalSection">
      <h2>{title}</h2>
      {children}
    </div>
  );
}