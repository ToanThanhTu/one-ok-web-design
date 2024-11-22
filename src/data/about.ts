import type { ProcessStep, TeamMember } from "../types";
import trevor from "../assets/trevor.png";

export const processSteps: ProcessStep[] = [
  {
    id: "1",
    header: "Complete Questionnaire",
    description:
      "We send you an email with less than 10 questions about you business, services, what sets you apart, etc and we do all the rest.",
  },
  {
    id: "2",
    header: "Design Approval",
    description:
      "We then do a video screen share showing you the first draft and make any changes you want to make sure you’re 100% satisfied.",
  },
  {
    id: "3",
    header: "Complete Questionnaire",
    description:
      "Once approved, we can start coding the site out and setting everything up. We will send a demo link to view before we launch and go live.",
  },
];

export const teamMembers: TeamMember[] = [
  {
    name: "Trevor Tu",
    role: "Owner, Lead Developer",
    image: trevor,
    url: "https://www.linkedin.com/in/trevor-tu/",
  },
  {
    name: "Freddrick Widjaya",
    role: "Lead Developer",
    image: trevor,
    url: "https://www.linkedin.com/in/trevor-tu/",
  },
  {
    name: "Enzo",
    role: "UI/UX Designer",
    image: trevor,
    url: "https://www.linkedin.com/in/trevor-tu/",
  },
]
 