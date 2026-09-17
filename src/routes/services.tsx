import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { PageIntro, CTA } from "@/components/site-shell";
import { routeHead } from "@/components/content-page";
const items = [
["Psychotherapy","Personalized one-to-one therapy for emotional health, relationships, stress, grief, and life change.","/psychotherapy"],
["EMDR Therapy","A structured psychotherapy approach for distressing memories when clinically appropriate.","/emdr-therapy"],
["Trauma Therapy","Trauma-informed support paced around safety, readiness, and individual needs.","/trauma-therapy-jacksonville-fl"],
["Anxiety Therapy","Support for persistent worry, panic, fear, avoidance, and stress.","/anxiety-therapy-jacksonville"],
["Depression Therapy","Care for low mood, disconnection, reduced motivation, and related concerns.","/depression-therapy-jacksonville"],
["Grief Counseling","A supportive setting for loss, transition, and the many forms grief can take.","/grief-counseling-jacksonville"],
["LGBTQ+ Affirming Therapy","Respectful care that honors identity, relationships, experiences, and goals.","/lgbtq-affirming-therapy-jacksonville"],
["Medication Management","Psychiatric evaluation, monitoring, and follow-up with qualified clinical oversight.","/psychiatric-medication-management-jacksonville"],
["Group Therapy","Current therapeutic groups when verified programs are available.","/group-therapy"],
["Telehealth","Secure remote care for eligible clients when clinically and legally appropriate.","/telehealth"],
] as const;
export const Route = createFileRoute("/services")({ head:()=>routeHead("Mental Health Services in Jacksonville, FL | Evolve Therapy","Explore psychotherapy, EMDR, trauma therapy, medication management, and inclusive mental health care.","/services"), component: Page });
function Page(){return <main><PageIntro eyebrow="For patients" title="Mental Health Services in Jacksonville, FL"><p>Clear pathways to thoughtful, individualized care—without assumptions, exaggerated promises, or one-size-fits-all treatment.</p></PageIntro><section className="bg-card"><div className="mx-auto grid max-w-[1400px] gap-5 px-6 py-16 md:grid-cols-2 md:px-10 md:py-24 lg:grid-cols-3">{items.map(([name,text,to],i)=><article key={name} className="border-t-2 border-primary bg-background p-7"><span className="text-xs font-semibold text-accent">{String(i+1).padStart(2,'0')}</span><h2 className="mt-4 text-2xl font-medium">{name}</h2><p className="mt-3 text-sm leading-relaxed text-muted-foreground">{text}</p><Link to={to} className="mt-6 inline-flex items-center gap-2 font-semibold text-primary hover:text-accent">Explore {name}<ArrowRight className="size-4"/></Link></article>)}</div></section><CTA/></main>}
