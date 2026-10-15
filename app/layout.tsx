import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://rosterpal.net"),
  title: {
    default: "RosterPal — Plan your shifts. Own your time.",
    template: "%s | RosterPal",
  },
  description:
    "RosterPal turns complex rosters into a clear personal schedule for shift workers.",
  openGraph: {
    title: "RosterPal — Plan your shifts. Own your time.",
    description: "RosterPal turns complex rosters into a clear personal schedule for shift workers.",
    url: "https://rosterpal.net",
    siteName: "RosterPal",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
