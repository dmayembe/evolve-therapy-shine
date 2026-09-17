import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CTA, PageIntro } from "./site-shell";

type Section = { title: string; text: string };

export function BasicPage({ eyebrow, title, intro, sections, notice, cta = true }: { eyebrow: string; title: string; intro: string; sections: Section[]; notice?: string; cta?: boolean }) {
  return <main>
    <PageIntro eyebrow={eyebrow} title={title}><p>{intro}</p></PageIntro>
    <section className="bg-card"><div className="mx-auto max-w-[1400px] px-6 py-16 md:px-10 md:py-24">
      {notice && <div className="mb-12 border-l-2 border-accent bg-secondary px-6 py-5 text-sm leading-relaxed"><strong>Owner verification required:</strong> {notice}</div>}
      <div className="grid gap-x-14 gap-y-12 md:grid-cols-2">{sections.map((section, index) => <article key={section.title} className="border-t border-border pt-6"><span className="text-xs font-semibold text-accent">0{index + 1}</span><h2 className="mt-3 text-3xl font-medium">{section.title}</h2><p className="mt-4 leading-relaxed text-muted-foreground">{section.text}</p></article>)}</div>
      <div className="mt-14 flex flex-wrap gap-3"><Button asChild><Link to="/become-a-patient">Become a patient <ArrowRight /></Link></Button><Button variant="outline" asChild><Link to="/contact">Contact the practice</Link></Button></div>
    </div></section>
    {cta && <CTA />}
  </main>;
}