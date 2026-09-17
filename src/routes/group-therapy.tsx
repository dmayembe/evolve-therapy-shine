import { createFileRoute } from "@tanstack/react-router";
import { ContentPage, routeHead } from "@/components/content-page";
import { serviceContent } from "@/lib/site-content";

export const Route = createFileRoute("/group-therapy")({ head: () => routeHead("Group Therapy in Jacksonville, FL | Evolve Therapy", "Learn about current therapeutic groups at Evolve Therapy in Jacksonville.", "/group-therapy"), component: Page });
function Page() { return <ContentPage {...serviceContent.groups} />; }
