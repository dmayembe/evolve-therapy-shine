import { createFileRoute } from "@tanstack/react-router";
import { ContentPage, routeHead } from "@/components/content-page";
import { serviceContent } from "@/lib/site-content";

export const Route = createFileRoute("/trauma-therapy-jacksonville-fl")({ head: () => routeHead("Trauma Therapy in Jacksonville, FL | Evolve Therapy", "Trauma-informed psychotherapy and EMDR assessment in Jacksonville, Florida.", "/trauma-therapy-jacksonville-fl"), component: Page });
function Page() { return <ContentPage {...serviceContent.trauma} />; }
