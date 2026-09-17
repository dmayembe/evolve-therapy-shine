import { createFileRoute } from "@tanstack/react-router";
import { ContentPage, routeHead } from "@/components/content-page";
import { serviceContent } from "@/lib/site-content";

export const Route = createFileRoute("/anxiety-therapy-jacksonville")({ head: () => routeHead("Anxiety Therapy in Jacksonville, FL | Evolve Therapy", "Compassionate therapy for anxiety, worry, panic, and stress in Jacksonville.", "/anxiety-therapy-jacksonville"), component: Page });
function Page() { return <ContentPage {...serviceContent.anxiety} />; }
