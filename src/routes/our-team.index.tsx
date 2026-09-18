import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { routeHead } from "@/components/content-page";
import { CTA, PageIntro } from "@/components/site-shell";
import { fullName, team } from "@/lib/team";

export const Route = createFileRoute("/our-team/")({
  head: () => routeHead("Our Team | Evolve Therapy Jacksonville", "Meet the clinicians and staff of Evolve Therapy in Jacksonville, Florida, and view individual profiles.", "/our-team"),
  component: Page,
});

function Page() {
  return (
    <main>
      <PageIntro eyebrow="Our team" title="Meet the people behind the care">
        <p>Choosing a clinician is personal. Each profile explains the person's role at Evolve Therapy and what still needs to be confirmed by the practice before publication.</p>
      </PageIntro>
      <section className="bg-card">
        <div className="mx-auto max-w-[1400px] px-6 py-16 md:px-10 md:py-24">
          <div className="grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((m) => (
              <Link
                key={m.slug}
                to="/our-team/$slug"
                params={{ slug: m.slug }}
                className="group border-t border-border pt-6 transition-colors hover:border-accent"
              >
                <p className="text-xs font-semibold uppercase text-accent">{m.role}</p>
                <h2 className="mt-3 text-2xl font-medium">{fullName(m)}</h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{m.summary}</p>
                <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary group-hover:text-accent">
                  View profile <ArrowRight className="size-4" />
                </span>
              </Link>
            ))}
          </div>
          <p className="mt-14 border-l-2 border-accent bg-secondary px-6 py-5 text-sm leading-relaxed">
            <strong>Owner verification required:</strong> Photographs, clinician-written biographies, education, license numbers, certifications, and current availability must be supplied by the practice before these profiles are published.
          </p>
        </div>
      </section>
      <CTA />
    </main>
  );
}
