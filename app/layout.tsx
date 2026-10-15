import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://rosterpal.net"),
  title: {
    default: "RosterPal | Plan your shifts. Own your time.",
    template: "%s | RosterPal",
  },
  description:
    "RosterPal helps shift workers import, understand and manage rotating master rosters and week-to-week schedules.",
  openGraph: {
    title: "RosterPal",
    description: "Plan your shifts. Own your time.",
    url: "https://rosterpal.net",
    siteName: "RosterPal",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
