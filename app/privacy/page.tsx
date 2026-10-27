import Link from "next/link";
import Image from "next/image";

export default function PrivacyPage() {
  return (
    <main className="legalPage">
      {/* HEADER */}
      <header className="legalHeader">
        <Link href="/" className="legalBrand" aria-label="RosterPal home">
          <Image
            src="/rosterpal-wordmark.png"
            alt="RosterPal"
            width={220}
            height={64}
            className="legalBrandLogo"
            priority
          />
        </Link>

        <Link href="/" className="legalBack">
          ← Back to RosterPal
        </Link>
      </header>

      {/* HERO */}
      <section className="legalHero">
        <div className="legalHeroMark">
          <Image
            src="/rosterpal-mark.png"
            alt=""
            width={92}
            height={92}
            aria-hidden="true"
          />
        </div>
        <span className="eyebrow">ROSTERPAL · PRIVACY</span>

        <h1>Privacy Policy</h1>

        <p>
          We believe your roster should make your life easier — and your
          personal information should be treated with care.
        </p>

        <span className="legalUpdated">Last updated: 6 September 2026</span>
      </section>

      {/* POLICY */}
      <section className="legalContent">
        <div className="legalIntro">
          <p>
            This Privacy Policy explains how RosterPal collects, uses, stores
            and handles information when you use the RosterPal application,
            website and related services.
          </p>

          <p>
            By using RosterPal, you acknowledge the practices described in
            this Privacy Policy.
          </p>
        </div>

        <LegalSection title="1. Information we collect">
          <p>
            The information RosterPal collects depends on how you use the
            service. It may include:
          </p>

          <ul>
            <li>
              <strong>Account information</strong> such as your name, email
              address, user identifier and authentication information.
            </li>

            <li>
              <strong>Roster and shift information</strong> including shifts,
              start and finish times, days off, roster lines, roster cycles
              and other scheduling information you add or select.
            </li>

            <li>
              <strong>Uploaded roster information</strong> contained in roster
              documents, images or other files submitted to RosterPal.
            </li>

            <li>
              <strong>Workplace information</strong> such as a company,
              workplace or roster you have been granted access to.
            </li>

            <li>
              <strong>Device and technical information</strong> that may be
              generated when you use the app, such as device type, operating
              system, app version, diagnostic information and technical logs.
            </li>

            <li>
              <strong>Communications</strong> you send to us when requesting
              support, reporting a problem or contacting RosterPal.
            </li>
          </ul>
        </LegalSection>

        <LegalSection title="2. How we use your information">
          <p>We may use information to:</p>

          <ul>
            <li>create and manage your RosterPal account;</li>
            <li>provide and maintain RosterPal features;</li>
            <li>display your roster, shifts and schedule;</li>
            <li>process and organise roster information;</li>
            <li>provide workplace or company roster access;</li>
            <li>sync supported information across devices;</li>
            <li>send service-related notifications and messages;</li>
            <li>respond to support requests;</li>
            <li>diagnose errors and improve reliability and security;</li>
            <li>prevent misuse, fraud or unauthorised access; and</li>
            <li>comply with applicable legal obligations.</li>
          </ul>
        </LegalSection>

        <LegalSection title="3. Roster uploads and AI-assisted processing">
          <p>
            RosterPal may allow roster documents or images to be uploaded so
            that roster information can be interpreted, structured or
            prepared for use within the service.
          </p>

          <p>
            Automated technologies, including artificial intelligence or
            document-processing services, may be used to assist with this
            process.
          </p>

          <p>
            Automated interpretation may not always be accurate. RosterPal
            may provide processes for roster information to be reviewed,
            corrected or approved before it is made available to users.
          </p>

          <div className="legalNotice">
            <strong>Important</strong>
            <p>
              Users and organisations should only upload roster documents
              they are authorised to provide to RosterPal.
            </p>
          </div>
        </LegalSection>

        <LegalSection title="4. Authentication and cloud services">
          <p>
            RosterPal uses third-party technology providers to operate parts
            of the service. These may include cloud hosting, authentication,
            databases, file storage, notifications, diagnostics and related
            infrastructure.
          </p>

          <p>
            RosterPal currently uses Firebase and related Google Cloud
            services for parts of its backend infrastructure.
          </p>

          <p>
            These providers may process information on our behalf in
            accordance with their own data-processing and security
            arrangements.
          </p>
        </LegalSection>

        <LegalSection title="5. Notifications">
          <p>
            If you enable notifications, RosterPal may send service-related
            notifications to your device. These may include roster-related
            information, account messages, workplace access changes or other
            information relevant to the operation of the service.
          </p>

          <p>
            You can control notification permissions through your device
            settings.
          </p>
        </LegalSection>

        <LegalSection title="6. How information may be shared">
          <p>
            RosterPal does not sell your personal information.
          </p>

          <p>
            Information may be disclosed where reasonably necessary to
            operate the service, including to technology providers that
            provide services such as hosting, authentication, storage,
            notifications, diagnostics or automated roster processing.
          </p>

          <p>
            Information may also be disclosed where required by law, to
            protect the rights or security of RosterPal or its users, or in
            connection with a legitimate business transaction subject to
            appropriate safeguards.
          </p>
        </LegalSection>

        <LegalSection title="7. Workplace and company rosters">
          <p>
            Some RosterPal features allow users to access rosters associated
            with a workplace or organisation.
          </p>

          <p>
            Where applicable, authorised workplace administrators may manage
            roster availability or a user's access to workplace roster
            information.
          </p>

          <p>
            Removal of workplace access does not necessarily remove
            information that you have separately created or are otherwise
            entitled to retain within your personal account, subject to the
            way the relevant RosterPal feature operates.
          </p>
        </LegalSection>

        <LegalSection title="8. Data storage and international processing">
          <p>
            RosterPal uses cloud-based services to operate the application.
            As a result, information may be stored or processed using
            infrastructure located outside Australia.
          </p>

          <p>
            The locations in which information is processed may depend on the
            particular service provider and service configuration being used.
          </p>
        </LegalSection>

        <LegalSection title="9. Data retention">
          <p>
            We retain information for as long as reasonably necessary to
            provide RosterPal, maintain legitimate business and security
            records, resolve disputes and comply with legal obligations.
          </p>

          <p>
            Retention periods may vary depending on the type of information
            and the reason it is held.
          </p>
        </LegalSection>

        <LegalSection title="10. Account and data deletion">
          <p>
            You may request deletion of your RosterPal account and associated
            personal information, subject to information we are required or
            permitted to retain for legal, security or legitimate operational
            purposes.
          </p>

          <p>
            For assistance with an account or data deletion request, contact
            us at{" "}
            <a href="mailto:support@rosterpal.net">
              support@rosterpal.net
            </a>
            .
          </p>
        </LegalSection>

        <LegalSection title="11. Access and correction">
          <p>
            You may contact us if you would like to request access to personal
            information we hold about you or ask us to correct information
            that you believe is inaccurate, incomplete or out of date.
          </p>

          <p>
            We may need to verify your identity before processing certain
            requests.
          </p>
        </LegalSection>

        <LegalSection title="12. Security">
          <p>
            We use reasonable technical and organisational measures designed
            to protect information from unauthorised access, misuse, loss,
            alteration or disclosure.
          </p>

          <p>
            No online service or method of electronic storage can guarantee
            absolute security. Users should also protect their account
            credentials and devices from unauthorised access.
          </p>
        </LegalSection>

        <LegalSection title="13. Children">
          <p>
            RosterPal is designed as a roster and shift-planning service and
            is not directed specifically at children.
          </p>

          <p>
            Where laws impose additional requirements relating to the
            collection of personal information from children, we will handle
            that information in accordance with applicable requirements.
          </p>
        </LegalSection>

        <LegalSection title="14. Third-party services">
          <p>
            RosterPal may interact with services provided by third parties,
            including authentication providers, cloud infrastructure and app
            distribution platforms.
          </p>

          <p>
            Those third parties may process information independently under
            their own privacy policies when you interact directly with their
            services.
          </p>
        </LegalSection>

        <LegalSection title="15. Privacy complaints">
          <p>
            If you have a concern about how RosterPal has handled your
            personal information, please contact us first so we can
            investigate and respond.
          </p>

          <p>
            Depending on where you live, you may also have the right to make
            a complaint to an applicable privacy or data-protection
            regulator.
          </p>
        </LegalSection>

        <LegalSection title="16. Changes to this Privacy Policy">
          <p>
            We may update this Privacy Policy as RosterPal develops or when
            legal, technical or operational requirements change.
          </p>

          <p>
            When the policy is updated, the revised version will be published
            on this page and the &quot;Last updated&quot; date will be
            changed.
          </p>
        </LegalSection>

        <LegalSection title="17. Contact us">
          <p>
            If you have questions about this Privacy Policy, your personal
            information or a privacy request, contact:
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
        <Link href="/" className="legalFooterBrand" aria-label="RosterPal home">
          <Image
            src="/rosterpal-wordmark.png"
            alt="RosterPal"
            width={160}
            height={46}
            className="legalFooterLogo"
          />
        </Link>

        <span>Plan your shifts. Own your time.</span>

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