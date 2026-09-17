import { createFileRoute } from "@tanstack/react-router";
import { ContentPage, routeHead } from "@/components/content-page";
import { serviceContent } from "@/lib/site-content";

export const Route = createFileRoute("/insurance")({ head: () => routeHead("Insurance & Payment | Evolve Therapy Jacksonville", "Plan for mental health care with insurance, self-pay, and benefit verification information.", "/insurance"), component: Page });
function Page() { return <ContentPage {...serviceContent.insurance} />; }
