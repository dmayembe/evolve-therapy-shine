import { createFileRoute } from "@tanstack/react-router";
import { ContentPage, routeHead } from "@/components/content-page";
import { serviceContent } from "@/lib/site-content";

export const Route = createFileRoute("/insurance")({ head: () => routeHead("Insurance & Payment | Evolve Therapy Jacksonville", "In-network carriers, self-pay fees, and benefit verification for mental health care at Evolve Therapy in Jacksonville, FL.", "/insurance"), component: Page });

const fees: [string, string][] = [
  ["EMDR — initial session", "$250"],
  ["EMDR — follow-up", "$200"],
  ["General counseling — initial session", "$200"],
  ["General counseling — follow-up", "$150"],
  ["RMHCI — initial session", "$125"],
  ["RMHCI — follow-up", "$110"],
  ["Graduate-level counseling — follow-up", "$60"],
  ["Initial psychiatric evaluation (60 min)", "$360"],
  ["Medication management follow-up (20–30 min)", "$160"],
  ["Extended medication follow-up (40–45 min)", "$175 – $200"],
  ["Psychiatric evaluation + psychotherapy (90 min)", "$350 – $400"],
  ["Brief check-in, stabilized patients (15 min)", "$100"],
  ["Individual supervision", "$125"],
  ["Group supervision", "$75"],
];

function Page() {
  return (
    <>
      <ContentPage {...serviceContent.insurance} />
      <section className="bg-background">
        <div className="mx-auto max-w-[1400px] px-6 py-16 md:px-10 md:py-24">
          <p className="text-sm font-semibold uppercase text-accent">Self-pay</p>
          <h2 className="mt-3 text-4xl font-medium">Out-of-pocket fees</h2>
          <p className="mt-4 max-w-[62ch] leading-relaxed text-muted-foreground">
            Graduate-level clinicians offer sessions at $60 and Registered Mental Health Counselor Interns at $110 per follow-up, making care more accessible while their work is guided by a licensed supervisor.
          </p>
          <dl className="mt-10 grid gap-x-12 sm:grid-cols-2">
            {fees.map(([label, price]) => (
              <div key={label} className="flex items-baseline justify-between gap-6 border-t border-border py-4">
                <dt className="leading-snug">{label}</dt>
                <dd className="font-display text-lg text-primary">{price}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-8 text-sm text-muted-foreground">
            Fees are subject to change. Call 904-862-6788 to confirm current rates for the service and clinician you are considering.
          </p>
        </div>
      </section>
    </>
  );
}
