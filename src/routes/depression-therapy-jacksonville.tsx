import { createFileRoute } from "@tanstack/react-router";
import { ContentPage, routeHead } from "@/components/content-page";
import { serviceContent } from "@/lib/site-content";

export const Route = createFileRoute("/depression-therapy-jacksonville")({ head: () => routeHead("Depression Therapy in Jacksonville, FL | Evolve Therapy", "Individualized therapy for depression and low mood in Jacksonville, Florida.", "/depression-therapy-jacksonville"), component: Page });
function Page() { return <ContentPage {...serviceContent.depression} />; }
