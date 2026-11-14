import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://rosterpal.net"),
  title: {
    default: "RosterPal | Shift Work Calendar & Roster App",
    template: "%s | RosterPal",
  },
  description: "RosterPal helps shift workers organise rotating and changing rosters. Import PDF schedules, view upcoming shifts and plan time off on iOS and Android.",
  openGraph: {
    type: "website",
    siteName: "RosterPal",
    title: "RosterPal | Shift Work Calendar & Roster App",
    description: "Plan your shifts. Own your time. Organise rotating and weekly work rosters with RosterPal.",
    url: "https://rosterpal.net",
    images: ["/rosterpal-brand-square.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "RosterPal | Shift Work Calendar & Roster App",
    description: "Plan your shifts. Own your time. Organise rotating and weekly rosters.",
    images: ["/rosterpal-brand-square.png"],
  },
};

const softwareApplication = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "RosterPal",
  applicationCategory: "BusinessApplication",
  operatingSystem: "iOS, Android",
  description: "A shift work calendar and roster planning app for rotating and changing work schedules.",
  url: "https://rosterpal.net",
  image: "https://rosterpal.net/rosterpal-brand-square.png",
  downloadUrl: [
    "https://apps.apple.com/us/app/rosterpal-roster-calendar/id6821256161",
    "https://play.google.com/store/apps/details?id=com.ravenholdigital.rosterpal",
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplication).replace(/</g, "\\u003c") }} />
        {children}
      </body>
    </html>
  );
}
