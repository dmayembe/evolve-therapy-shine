import { createFileRoute } from "@tanstack/react-router";
import { ContentPage, routeHead } from "@/components/content-page";
import { serviceContent } from "@/lib/site-content";

export const Route = createFileRoute("/grief-counseling-jacksonville")({ head: () => routeHead("Grief Counseling in Jacksonville, FL | Evolve Therapy", "Supportive grief counseling for loss and major life change in Jacksonville.", "/grief-counseling-jacksonville"), component: Page });
function Page() { return <ContentPage {...serviceContent.grief} />; }
