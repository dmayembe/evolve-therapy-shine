import { createFileRoute } from "@tanstack/react-router";
import { ContentPage, routeHead } from "@/components/content-page";
import { serviceContent } from "@/lib/site-content";

export const Route = createFileRoute("/emdr-therapy")({ head: () => routeHead("EMDR Therapy in Jacksonville, FL | Evolve Therapy", "Learn about careful, evidence-based EMDR assessment and therapy in Jacksonville, Florida.", "/emdr-therapy"), component: Page });
function Page() { return <ContentPage {...serviceContent.emdr} />; }
