import { createFileRoute } from "@tanstack/react-router";
import { BasicPage } from "@/components/basic-page";
import { routeHead } from "@/components/content-page";

export const Route = createFileRoute("/contact")({
  head: () => routeHead("Contact Evolve Therapy in Jacksonville, FL", "Call 904-862-6788 or email reception@evolvetherapyjax.com. Evolve Therapy is at 9428 Baymeadows Rd #420, Jacksonville, FL 32256.", "/contact"),
  component: Page,
});

function Page() {
  return (
    <BasicPage
      eyebrow="Contact and location"
      title="Contact Evolve Therapy in Jacksonville, FL"
      intro="Call 904-862-6788 or email reception@evolvetherapyjax.com, Monday through Friday, 9:00 am to 4:00 pm."
      notice="A verified online appointment link, parking details, and the official map listing still need to be confirmed by the practice."
      sections={[
        { title: "Phone and email", text: "Phone: 904-862-6788. Email: reception@evolvetherapyjax.com. Office hours are Monday through Friday, 9:00 am to 4:00 pm." },
        { title: "Practice address", text: "9428 Baymeadows Rd #420, Jacksonville, FL 32256." },
        { title: "New patients", text: "Review services and insurance information, then call or email the practice to ask about fit and current availability." },
        { title: "Urgent support", text: "This website and inbox are not monitored for emergencies. In a crisis, call or text 988 in the United States. For an immediate emergency, call 911." },
      ]}
    />
  );
}
