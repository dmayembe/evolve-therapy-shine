import { createFileRoute } from "@tanstack/react-router";
import { ContentPage, routeHead } from "@/components/content-page";
import { serviceContent } from "@/lib/site-content";

export const Route = createFileRoute("/telehealth")({ head: () => routeHead("Telehealth Mental Health Care | Evolve Therapy", "Learn how remote mental health visits may work for eligible Florida clients.", "/telehealth"), component: Page });
function Page() { return <ContentPage {...serviceContent.telehealth} />; }
