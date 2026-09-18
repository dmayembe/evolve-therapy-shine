export type TeamMember = {
  slug: string;
  name: string;
  credentials?: string;
  role: string;
  summary: string;
  intro: string;
  credentialsText: string;
  specialties: string;
  scheduling: string;
  notice: string;
};

const verifyBio =
  "This profile currently uses a role-based description. The clinician-written biography, education history, license numbers, certifications, and photograph must be supplied by the practice before publication.";

export const team: TeamMember[] = [
  {
    slug: "petergay-sterling",
    name: "Petergay Sterling",
    role: "Founder",
    summary: "Founder of Evolve Therapy, leading the practice's direction, culture, and standard of care.",
    intro:
      "Petergay Sterling is the Founder of Evolve Therapy in Jacksonville, Florida. In this role she sets the direction of the practice, oversees its clinical culture, and works to make trauma-informed, affirming mental health care accessible across the Baymeadows community.",
    credentialsText:
      "Professional credentials, licensure, education, certifications, and professional affiliations for the Founder must be verified by the practice before they appear here.",
    specialties:
      "Areas of clinical focus, populations served, and treatment approaches will be listed only where they are supported by verified experience and current practice at Evolve Therapy.",
    scheduling:
      "Current availability for new clients, insurance participation, and telehealth eligibility should be confirmed with the practice at 904-862-6788 before scheduling.",
    notice: verifyBio,
  },
  {
    slug: "jacquelyn-mills",
    name: "Jacquelyn Mills",
    credentials: "LMHC",
    role: "Clinical Director",
    summary: "Licensed Mental Health Counselor serving as Clinical Director of the practice.",
    intro:
      "Jacquelyn Mills, LMHC, serves as Clinical Director at Evolve Therapy. As a fully licensed mental health counselor, she carries responsibility for clinical standards across the team alongside her own work with clients.",
    credentialsText:
      "LMHC indicates licensure as a Licensed Mental Health Counselor in the State of Florida. License number, education, certifications, and additional training require verification before display.",
    specialties:
      "Populations served, presenting concerns, and treatment approaches will be listed once confirmed by the clinician.",
    scheduling:
      "Availability, accepted insurance plans, and whether remote sessions are offered should be confirmed with the practice at 904-862-6788.",
    notice: verifyBio,
  },
  {
    slug: "chantel-smoots",
    name: "Chantel Smoots",
    credentials: "RMHCI",
    role: "Clinical Program Director",
    summary: "Registered Mental Health Counselor Intern and Clinical Program Director.",
    intro:
      "Chantel Smoots, RMHCI, serves as Clinical Program Director at Evolve Therapy, supporting the structure and delivery of the practice's clinical programs while providing counseling under qualified supervision.",
    credentialsText:
      "RMHCI indicates registration as a Registered Mental Health Counselor Intern in Florida, practicing under qualified supervision. Education, registration details, and supervisor information require verification.",
    specialties:
      "Concerns addressed and therapeutic approaches used will be published once confirmed by the clinician and her supervisor.",
    scheduling:
      "RMHCI follow-up sessions are offered at a reduced self-pay rate of $110. Current availability and insurance participation should be confirmed with the practice at 904-862-6788.",
    notice: verifyBio,
  },
  {
    slug: "sabrina-ahmed",
    name: "Sabrina Ahmed",
    credentials: "RMHCI",
    role: "EMDR Therapist",
    summary: "Registered Mental Health Counselor Intern providing EMDR therapy.",
    intro:
      "Sabrina Ahmed, RMHCI, is an EMDR therapist at Evolve Therapy. She works with clients on trauma-related concerns using Eye Movement Desensitization and Reprocessing within a paced, preparation-first framework, practicing under qualified supervision.",
    credentialsText:
      "RMHCI indicates registration as a Registered Mental Health Counselor Intern in Florida. EMDR training level, certification status, education, and supervisor details require verification before display.",
    specialties:
      "EMDR is not appropriate for every person or circumstance. Suitability is determined through assessment, and outcomes cannot be guaranteed. Specific populations and additional approaches will be listed once confirmed.",
    scheduling:
      "Self-pay EMDR sessions are $250 for an initial session and $200 for follow-ups. Availability, insurance participation, and telehealth eligibility should be confirmed at 904-862-6788.",
    notice: verifyBio,
  },
  {
    slug: "hannah-pentecost",
    name: "Hannah Pentecost",
    credentials: "RMHCI",
    role: "Community Program Manager",
    summary: "Registered Mental Health Counselor Intern and Community Program Manager.",
    intro:
      "Hannah Pentecost, RMHCI, serves as Community Program Manager at Evolve Therapy, connecting the practice with the wider Jacksonville community while providing counseling under qualified supervision.",
    credentialsText:
      "RMHCI indicates registration as a Registered Mental Health Counselor Intern in Florida. Education, registration details, and supervisor information require verification.",
    specialties:
      "Community initiatives, populations served, and therapeutic approaches will be described once confirmed by the practice.",
    scheduling:
      "RMHCI follow-up sessions are offered at a reduced self-pay rate of $110. Confirm availability and insurance participation at 904-862-6788.",
    notice: verifyBio,
  },
  {
    slug: "anna-blackwood",
    name: "Anna Blackwood",
    credentials: "RMHCI",
    role: "EMDR Therapist",
    summary: "Registered Mental Health Counselor Intern providing EMDR therapy.",
    intro:
      "Anna Blackwood, RMHCI, is an EMDR therapist at Evolve Therapy. She supports clients working through distressing experiences using EMDR alongside talk therapy, practicing under qualified supervision.",
    credentialsText:
      "RMHCI indicates registration as a Registered Mental Health Counselor Intern in Florida. EMDR training level, certification status, education, and supervisor details require verification.",
    specialties:
      "Readiness and stabilization are assessed before trauma processing begins. Specific populations, concerns, and additional approaches will be listed once confirmed.",
    scheduling:
      "Self-pay EMDR sessions are $250 for an initial session and $200 for follow-ups. Confirm availability and insurance participation at 904-862-6788.",
    notice: verifyBio,
  },
  {
    slug: "wendy-h-jackson",
    name: "Wendy H. Jackson",
    credentials: "DNP",
    role: "Student Nurse Practitioner",
    summary: "Doctor of Nursing Practice serving as a student nurse practitioner with the practice.",
    intro:
      "Wendy H. Jackson, DNP, works with Evolve Therapy as a student nurse practitioner, contributing to psychiatric care under the supervision of qualified clinical staff.",
    credentialsText:
      "DNP indicates a Doctor of Nursing Practice degree. Scope of practice, supervising clinician, prescriptive authority, and any additional licensure must be verified by the practice before display.",
    specialties:
      "Psychiatric services provided in this role, and the conditions evaluated, will be described only after confirmation by the supervising clinician.",
    scheduling:
      "Psychiatric appointment availability, supervision arrangements, and insurance coverage should be confirmed with the practice at 904-862-6788.",
    notice: verifyBio,
  },
  {
    slug: "samantha-boyce",
    name: "Samantha Boyce",
    credentials: "GLC",
    role: "Graduate Level Counselor",
    summary: "Graduate-level counselor providing sessions at a reduced rate under supervision.",
    intro:
      "Samantha Boyce, GLC, is a graduate-level counselor at Evolve Therapy. She provides counseling under the supervision of licensed clinical staff, making care more accessible while maintaining the practice's standards.",
    credentialsText:
      "GLC indicates a graduate-level counselor completing supervised clinical training. Degree program, institution, expected completion, and supervisor details require verification.",
    specialties:
      "Concerns addressed and approaches used will be published once confirmed by the counselor and her supervisor.",
    scheduling:
      "Graduate-level counseling follow-up sessions are offered at a reduced self-pay rate of $60. Confirm availability at 904-862-6788.",
    notice: verifyBio,
  },
  {
    slug: "eyoatam-workneh",
    name: "Eyoatam Workneh",
    credentials: "GLC",
    role: "Graduate Level Counselor",
    summary: "Graduate-level counselor providing sessions at a reduced rate under supervision.",
    intro:
      "Eyoatam Workneh, GLC, is a graduate-level counselor at Evolve Therapy, providing counseling under the supervision of licensed clinical staff.",
    credentialsText:
      "GLC indicates a graduate-level counselor completing supervised clinical training. Degree program, institution, and supervisor details require verification.",
    specialties:
      "Populations served and therapeutic approaches will be listed once confirmed by the counselor and supervisor.",
    scheduling:
      "Graduate-level counseling follow-up sessions are offered at a reduced self-pay rate of $60. Confirm availability at 904-862-6788.",
    notice: verifyBio,
  },
  {
    slug: "diya-gandhi",
    name: "Diya Gandhi",
    credentials: "GLC",
    role: "Graduate Level Counselor",
    summary: "Graduate-level counselor providing sessions at a reduced rate under supervision.",
    intro:
      "Diya Gandhi, GLC, is a graduate-level counselor at Evolve Therapy, providing counseling under the supervision of licensed clinical staff.",
    credentialsText:
      "GLC indicates a graduate-level counselor completing supervised clinical training. Degree program, institution, and supervisor details require verification.",
    specialties:
      "Populations served and therapeutic approaches will be listed once confirmed by the counselor and supervisor.",
    scheduling:
      "Graduate-level counseling follow-up sessions are offered at a reduced self-pay rate of $60. Confirm availability at 904-862-6788.",
    notice: verifyBio,
  },
  {
    slug: "susan-lebron",
    name: "Susan LeBron",
    credentials: "GLC",
    role: "Graduate Level Counselor",
    summary: "Graduate-level counselor providing sessions at a reduced rate under supervision.",
    intro:
      "Susan LeBron, GLC, is a graduate-level counselor at Evolve Therapy, providing counseling under the supervision of licensed clinical staff.",
    credentialsText:
      "GLC indicates a graduate-level counselor completing supervised clinical training. Degree program, institution, and supervisor details require verification.",
    specialties:
      "Populations served and therapeutic approaches will be listed once confirmed by the counselor and supervisor.",
    scheduling:
      "Graduate-level counseling follow-up sessions are offered at a reduced self-pay rate of $60. Confirm availability at 904-862-6788.",
    notice: verifyBio,
  },
  {
    slug: "jennie-lamons",
    name: "Jennie Lamons",
    role: "Administrative Assistant",
    summary: "Administrative support for scheduling, intake questions, and practice communication.",
    intro:
      "Jennie Lamons is an Administrative Assistant at Evolve Therapy. Administrative team members support scheduling, paperwork, and general practice communication; they do not provide clinical care.",
    credentialsText:
      "This is a non-clinical administrative role. No clinical licensure or treatment scope applies.",
    specialties:
      "Administrative responsibilities such as intake paperwork, scheduling, and billing coordination will be described once confirmed by the practice.",
    scheduling:
      "For scheduling or general questions, contact the practice at 904-862-6788 or reception@evolvetherapyjax.com, Monday through Friday, 9:00 am to 4:00 pm.",
    notice:
      "Specific administrative responsibilities and contact routing for this team member require confirmation by the practice.",
  },
  {
    slug: "ashley-quesada",
    name: "Ashley Quesada",
    role: "Administrative Assistant",
    summary: "Administrative support for scheduling, intake questions, and practice communication.",
    intro:
      "Ashley Quesada is an Administrative Assistant at Evolve Therapy. Administrative team members support scheduling, paperwork, and general practice communication; they do not provide clinical care.",
    credentialsText:
      "This is a non-clinical administrative role. No clinical licensure or treatment scope applies.",
    specialties:
      "Administrative responsibilities such as intake paperwork, scheduling, and billing coordination will be described once confirmed by the practice.",
    scheduling:
      "For scheduling or general questions, contact the practice at 904-862-6788 or reception@evolvetherapyjax.com, Monday through Friday, 9:00 am to 4:00 pm.",
    notice:
      "Specific administrative responsibilities and contact routing for this team member require confirmation by the practice.",
  },
  {
    slug: "sushi-and-ramen",
    name: "Sushi & Ramen",
    role: "Our Littlest Therapy Team Members",
    summary: "The practice's smallest team members, welcoming people to the Baymeadows office.",
    intro:
      "Sushi and Ramen are the littlest members of the Evolve Therapy team. They add warmth to the Baymeadows office and are part of what makes the space feel welcoming.",
    credentialsText:
      "This is not a clinical role. Any animal-assisted therapy claims would require verification and are not made here.",
    specialties:
      "Whether Sushi and Ramen are present during appointments, and any allergy or comfort considerations, should be confirmed with the practice.",
    scheduling:
      "If you have questions about animals in the office before your visit, call 904-862-6788.",
    notice:
      "Details about the presence of animals in the office and any related policies require confirmation by the practice.",
  },
];

export const teamBySlug = Object.fromEntries(team.map((m) => [m.slug, m])) as Record<string, TeamMember>;
export const fullName = (m: TeamMember) => (m.credentials ? `${m.name}, ${m.credentials}` : m.name);
