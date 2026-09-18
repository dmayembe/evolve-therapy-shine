import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { routeHead } from "@/components/content-page";
import { CTA, PageIntro } from "@/components/site-shell";
import { fullName, teamBySlug } from "@/lib/team";

export const Route = createFileRoute("/our-team/$slug")({
  loader: ({ params }) => {
    const member = teamBySlug[params.slug];
    if (!member) throw notFound();
    return { member };
  },
  head: ({ loaderData }) => {
    if (!loaderData) return { meta: [{ title: "Profile unavailable | Evolve Therapy" }, { name: "robots", content: "noindex" }] };
    const m = loaderData.member;
    return routeHead(`${fullName(m)} — ${m.role} | Evolve Therapy Jacksonville`, m.summary, `/our-team/${m.slug}`);
  },
  notFoundComponent: () => (
    <main className="mx-auto max-w-[1400px] px-6 py-24 md:px-10">
      <h1 className="text-4xl font-medium">Profile not found</h1>
      <p className="mt-4 text-muted-foreground">This team profile is not available.</p>
      <Link to="/our-team" className="mt-6 inline-block font-semibold text-primary hover:text-accent">Back to our team →</Link>
    </main>
  ),
  component: Page,
});

function Page() {
  const { member } = Route.useLoaderData();
  const sections = [
    { title: "Professional introduction", text: member.intro },
    { title: "Credentials and licenses", text: member.credentialsText },
    { title: "Specialties and approaches", text: member.specialties },
    { title: "Scheduling and fit", text: member.scheduling },
  ];
  return (
    <main>
      <PageIntro eyebrow={member.role} title={fullName(member)}>
        <p>{member.summary}</p>
      </PageIntro>
      <section className="bg-card">
        <div className="mx-auto max-w-[1400px] px-6 py-16 md:px-10 md:py-24">
          <div className="mb-12 border-l-2 border-accent bg-secondary px-6 py-5 text-sm leading-relaxed">
            <strong>Owner verification required:</strong> {member.notice}
          </div>
          <div className="grid gap-x-14 gap-y-12 md:grid-cols-2">
            {sections.map((section, index) => (
              <article key={section.title} className="border-t border-border pt-6">
                <span className="text-xs font-semibold text-accent">0{index + 1}</span>
                <h2 className="mt-3 text-3xl font-medium">{section.title}</h2>
                <p className="mt-4 leading-relaxed text-muted-foreground">{section.text}</p>
              </article>
            ))}
          </div>
          <div className="mt-14 flex flex-wrap gap-3">
            <Button asChild><Link to="/become-a-patient">Become a patient <ArrowRight /></Link></Button>
            <Button variant="outline" asChild><Link to="/our-team">Back to our team</Link></Button>
          </div>
        </div>
      </section>
      <CTA />
    </main>
  );
}
