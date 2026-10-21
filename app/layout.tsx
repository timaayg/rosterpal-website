import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "RosterPal — Plan your shifts. Own your time.",
  description:
    "RosterPal turns complex rosters into a clear personal schedule for shift workers.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
