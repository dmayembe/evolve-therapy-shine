import { createFileRoute } from "@tanstack/react-router";
import { ContentPage, routeHead } from "@/components/content-page";
import { serviceContent } from "@/lib/site-content";

export const Route = createFileRoute("/psychotherapy")({ head: () => routeHead("Psychotherapy in Jacksonville, FL | Evolve Therapy", "Individualized psychotherapy for anxiety, depression, trauma, grief, stress, and life transitions in Jacksonville.", "/psychotherapy"), component: Page });
function Page() { return <ContentPage {...serviceContent.psychotherapy} />; }
