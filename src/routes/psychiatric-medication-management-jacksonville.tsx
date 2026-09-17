import { createFileRoute } from "@tanstack/react-router";
import { ContentPage, routeHead } from "@/components/content-page";
import { serviceContent } from "@/lib/site-content";

export const Route = createFileRoute("/psychiatric-medication-management-jacksonville")({ head: () => routeHead("Psychiatric Medication Management in Jacksonville, FL | Evolve Therapy", "Psychiatric evaluation, follow-up care, and medication monitoring in Jacksonville.", "/psychiatric-medication-management-jacksonville"), component: Page });
function Page() { return <ContentPage {...serviceContent.medication} />; }
