import { Link } from "@tanstack/react-router";
import { ArrowRight, Menu, X } from "lucide-react";
import { useState, type ReactNode } from "react";
import { Button } from "@/components/ui/button";

const patientLinks = [
  ["Psychotherapy", "/psychotherapy"], ["EMDR Therapy", "/emdr-therapy"],
  ["Trauma Therapy", "/trauma-therapy-jacksonville-fl"], ["Medication Management", "/psychiatric-medication-management-jacksonville"],
  ["LGBTQ+ Affirming Therapy", "/lgbtq-affirming-therapy-jacksonville"], ["Insurance & Payment", "/insurance"],
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return <header className="sticky top-0 z-50 border-b border-foreground/10 bg-background/95 backdrop-blur-md">
    <div className="mx-auto flex h-18 max-w-[1400px] items-center justify-between px-5 md:px-10">
      <Link to="/" className="flex items-center gap-3" aria-label="Evolve Therapy home">
        <span className="grid size-8 place-items-center rounded-full bg-primary font-display font-semibold text-primary-foreground">E</span>
        <span className="font-display text-xl font-semibold">Evolve Therapy</span>
      </Link>
      <nav className="hidden items-center gap-7 text-sm font-medium lg:flex" aria-label="Primary navigation">
        <Link to="/our-practice" className="transition-colors hover:text-accent">Our Practice</Link>
        <div className="group relative py-6">
          <Link to="/services" className="transition-colors hover:text-accent">For Patients</Link>
          <div className="invisible absolute left-1/2 top-[4.3rem] grid w-[34rem] -translate-x-1/2 grid-cols-2 gap-1 border border-border bg-card p-3 opacity-0 shadow-xl transition-all group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
            {patientLinks.map(([label, to]) => <Link key={to} to={to} className="px-3 py-2.5 hover:bg-secondary hover:text-primary">{label}</Link>)}
          </div>
        </div>
        <Link to="/our-team" className="transition-colors hover:text-accent">Our Team</Link>
        <Link to="/for-professionals" className="transition-colors hover:text-accent">For Professionals</Link>
        <Link to="/resources" className="transition-colors hover:text-accent">Resources</Link>
        <Link to="/contact" className="transition-colors hover:text-accent">Contact</Link>
      </nav>
      <div className="flex items-center gap-2">
        <Button asChild className="hidden sm:inline-flex"><Link to="/become-a-patient">Schedule an Appointment</Link></Button>
        <Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setOpen(!open)} aria-expanded={open} aria-label={open ? "Close menu" : "Open menu"}>{open ? <X /> : <Menu />}</Button>
      </div>
    </div>
    {open && <nav className="grid border-t border-border bg-background px-5 py-4 lg:hidden" aria-label="Mobile navigation">
      {([['Our Practice','/our-practice'],['Patient Services','/services'],['Our Team','/our-team'],['For Professionals','/for-professionals'],['Resources','/resources'],['Contact','/contact']] as const).map(([label,to]) => <Link key={to} to={to} onClick={() => setOpen(false)} className="border-b border-border py-3 font-medium last:border-0">{label}</Link>)}
      <Button asChild className="mt-4 sm:hidden"><Link to="/become-a-patient" onClick={() => setOpen(false)}>Schedule an Appointment</Link></Button>
    </nav>}
  </header>;
}

export function SiteFooter() {
  return <footer className="bg-foreground text-background/75">
    <div className="mx-auto grid max-w-[1400px] gap-10 px-6 py-14 md:grid-cols-12 md:px-10">
      <div className="md:col-span-5"><div className="flex items-center gap-3"><span className="grid size-8 place-items-center rounded-full bg-background font-display font-semibold text-foreground">E</span><span className="font-display text-xl font-semibold text-background">Evolve Therapy INC</span></div><p className="mt-5 max-w-[38ch] text-sm leading-relaxed">Compassionate, trauma-informed mental health care in Jacksonville, Florida.</p></div>
      <div className="md:col-span-3"><p className="mb-4 text-xs font-semibold uppercase text-background/50">Explore</p><ul className="space-y-2.5 text-sm"><li><Link to="/services">Patient Services</Link></li><li><Link to="/our-team">Our Team</Link></li><li><Link to="/insurance">Insurance</Link></li><li><Link to="/for-professionals">For Professionals</Link></li><li><Link to="/resources">Resources</Link></li></ul></div>
      <div className="md:col-span-4"><p className="mb-4 text-xs font-semibold uppercase text-background/50">Practice</p><address className="not-italic text-sm leading-relaxed">9428 Baymeadows Rd #420<br />Jacksonville, FL 32256</address><p className="mt-4 text-xs text-background/50">Phone, email, and hours require owner verification.</p></div>
    </div>
    <div className="border-t border-background/10"><div className="mx-auto flex max-w-[1400px] flex-col gap-3 px-6 py-6 text-xs text-background/50 sm:flex-row sm:justify-between md:px-10"><p>© 2026 Evolve Therapy INC. All rights reserved.</p><div className="flex flex-wrap gap-4"><Link to="/privacy">Privacy</Link><Link to="/terms">Terms</Link><Link to="/accessibility">Accessibility</Link></div><p>In a crisis, call or text 988. For emergencies, call 911.</p></div></div>
  </footer>;
}

export function PageIntro({ eyebrow, title, children }: { eyebrow: string; title: string; children: ReactNode }) {
  return <section className="bg-primary text-primary-foreground"><div className="mx-auto max-w-[1400px] px-6 py-16 md:px-10 md:py-24"><p className="mb-5 text-sm font-semibold uppercase text-accent">{eyebrow}</p><h1 className="max-w-[17ch] text-5xl font-medium leading-[1.04] md:text-6xl">{title}</h1><div className="mt-6 max-w-[62ch] text-lg leading-relaxed text-primary-foreground/80">{children}</div></div></section>;
}

export function CTA({ title = "Ready to take the next step?", text = "Start with a conversation about your needs and the care that may fit." }: { title?: string; text?: string }) {
  return <section className="bg-background px-6 py-16 md:px-10 md:py-24"><div className="mx-auto max-w-[1320px] bg-primary px-7 py-14 text-center text-primary-foreground md:px-14 md:py-18"><h2 className="text-4xl font-medium md:text-5xl">{title}</h2><p className="mx-auto mt-5 max-w-[50ch] text-lg text-primary-foreground/75">{text}</p><div className="mt-8 flex flex-wrap justify-center gap-3"><Button variant="clay" size="lg" asChild><Link to="/become-a-patient">Schedule an Appointment <ArrowRight /></Link></Button><Button variant="outline" size="lg" asChild className="border-primary-foreground/30 text-primary-foreground hover:border-primary-foreground hover:text-primary-foreground"><Link to="/contact">Contact Evolve Therapy</Link></Button></div></div></section>;
}