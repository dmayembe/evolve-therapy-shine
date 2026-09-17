import { createFileRoute } from "@tanstack/react-router";
import { ContentPage, routeHead } from "@/components/content-page";
import { serviceContent } from "@/lib/site-content";

export const Route = createFileRoute("/lgbtq-affirming-therapy-jacksonville")({ head: () => routeHead("LGBTQ+ Affirming Therapy in Jacksonville, FL | Evolve Therapy", "Respectful, identity-affirming mental health care in Jacksonville, Florida.", "/lgbtq-affirming-therapy-jacksonville"), component: Page });
function Page() { return <ContentPage {...serviceContent.lgbtq} />; }
