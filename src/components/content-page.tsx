import { Link } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CTA, PageIntro } from "./site-shell";

export type ContentPageProps = {
  eyebrow: string; title: string; intro: string; heading: string; body: string;
  bullets: string[]; expectTitle?: string; expect: string[]; note?: string;
};

export function ContentPage({ eyebrow, title, intro, heading, body, bullets, expectTitle = "What to expect", expect, note }: ContentPageProps) {
  return <main>
    <PageIntro eyebrow={eyebrow} title={title}><p>{intro}</p></PageIntro>
    <section className="bg-card"><div className="mx-auto grid max-w-[1400px] gap-12 px-6 py-16 md:px-10 md:py-24 lg:grid-cols-12">
      <div className="lg:col-span-7"><p className="mb-4 text-sm font-semibold uppercase text-accent">Care with clarity</p><h2 className="text-4xl font-medium leading-tight md:text-5xl">{heading}</h2><p className="mt-6 max-w-[64ch] text-lg leading-relaxed text-muted-foreground">{body}</p><ul className="mt-8 grid gap-4 sm:grid-cols-2">{bullets.map(item => <li key={item} className="flex gap-3 border-t border-border pt-4"><Check className="mt-0.5 size-5 shrink-0 text-accent" /><span>{item}</span></li>)}</ul></div>
      <aside className="bg-secondary p-7 lg:col-span-5 lg:p-9"><p className="text-sm font-semibold uppercase text-accent">Your next step</p><h2 className="mt-3 text-3xl font-medium">{expectTitle}</h2><ol className="mt-6 space-y-5">{expect.map((item,i) => <li key={item} className="flex gap-4"><span className="font-display text-2xl text-accent">{i+1}</span><span className="pt-1 text-sm leading-relaxed">{item}</span></li>)}</ol>{note && <p className="mt-7 border-t border-border pt-5 text-sm text-muted-foreground">{note}</p>}<Button asChild className="mt-7"><Link to="/become-a-patient">How to become a patient <ArrowRight /></Link></Button></aside>
    </div></section>
    <section className="bg-background"><div className="mx-auto grid max-w-[1400px] gap-8 px-6 py-14 md:grid-cols-3 md:px-10"><div><h2 className="text-2xl font-medium">Care team</h2><p className="mt-3 text-sm leading-relaxed text-muted-foreground">Clinician names, credentials, licenses, specialties, and availability require owner verification before publication.</p><Link to="/our-team" className="mt-4 inline-block font-semibold text-primary hover:text-accent">Meet the team →</Link></div><div><h2 className="text-2xl font-medium">Insurance & payment</h2><p className="mt-3 text-sm leading-relaxed text-muted-foreground">Coverage, fees, and current network participation must be confirmed directly with the practice and your insurer.</p><Link to="/insurance" className="mt-4 inline-block font-semibold text-primary hover:text-accent">Payment information →</Link></div><div><h2 className="text-2xl font-medium">Jacksonville location</h2><p className="mt-3 text-sm leading-relaxed text-muted-foreground">9428 Baymeadows Rd #420, Jacksonville, FL 32256. Remote-care eligibility depends on location and clinical circumstances.</p><Link to="/contact" className="mt-4 inline-block font-semibold text-primary hover:text-accent">Contact and location →</Link></div></div></section>
    <CTA />
  </main>;
}

export function routeHead(title: string, description: string, path: string) {
  return { meta: [{ title }, { name: "description", content: description }, { property: "og:title", content: title }, { property: "og:description", content: description }, { property: "og:type", content: "website" }, { property: "og:url", content: path }, { name: "twitter:card", content: "summary_large_image" }], links: [{ rel: "canonical", href: path }] };
}