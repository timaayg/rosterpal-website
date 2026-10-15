import Link from "next/link";
export const metadata = { title: "Support" };
export default function SupportPage() {
  return <main><header className="nav shell"><Link className="brand" href="/"><span className="mark">R</span><span>Roster<span className="accent">Pal</span></span></Link></header><section className="pageHero shell"><div className="eyebrow">SUPPORT</div><h1>Need help with RosterPal?</h1><p className="lead">For account, roster-import, subscription or general support, contact us at <a href="mailto:support@rosterpal.net">support@rosterpal.net</a>.</p></section><section className="shell legal"><h2>Before contacting support</h2><p>If a roster import looks incorrect, review and correct the detected shifts before saving where possible. For Week-to-Week imports, you can also use the in-app reporting option to report an inconsistent read.</p><h2>Privacy and legal</h2><p><Link href="/privacy">Privacy Policy</Link> · <Link href="/terms">Terms of Use</Link></p></section></main>;
}
