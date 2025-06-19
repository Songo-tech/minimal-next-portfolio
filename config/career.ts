import { ValidSkills } from "./constants";

export interface CareerExperienceInterface {
  id: string;
  position: string;
  company: string;
  location: string;
  startDate: Date;
  endDate: Date | "Present";
  description: string[];
  achievements: string[];
  skills: ValidSkills[];
  companyUrl?: string;
  logo?: string;
}

export const careerExperiences: CareerExperienceInterface[] = [
  {
    id: "fintech-payments",
    position: "Frontend Engineer",
    company: "Global Cross-Border Payment Platform",
    location: "Remote",
    startDate: new Date("2022-07-01"),
    endDate: new Date("2025-05-01"),
    description: [
      "Led the development of enterprise-level dashboards for real-time multi-currency exchange tracking and high-frequency transaction visualization.",
      "Built modular and reusable components using React, TypeScript, Recoil, and SWR to power payment, invoicing, and account management modules.",
      "Integrated secure authentication flows including 2FA and OAuth2, ensuring PCI-DSS compliance across customer interfaces.",
    ],
    achievements: [
      "Implemented automated testing pipelines with Jest and Cypress, achieving 85% test coverage and reducing QA cycles by 30%.",
      "Partnered with designers and backend engineers to reduce average load time from 4.5s to under 2s.",
    ],
    skills: [
      "React",
      "Typescript",
      "Recoil",
      "SWR",
      "Jest",
      "Cypress",
      "OAuth 2.0",
      "REST API",
      "Figma",
      "Agile/Scrum",
    ],
  },
  {
    id: "auto-ecommerce",
    position: "Frontend Developer",
    company: "Automotive E-Commerce Platform",
    location: "Remote",
    startDate: new Date("2021-02-01"),
    endDate: new Date("2022-06-01"),
    description: [
      "Translated UI/UX mockups into responsive web pages using HTML5, CSS3 (Sass), and JavaScript (ES6) with full cross-browser support.",
      "Developed and maintained customer-facing features such as car listings, comparison tools, booking forms, and user dashboards using React.js.",
      "Contributed to frontend architecture design and performance optimization strategies including lazy loading and code splitting.",
    ],
    achievements: [
      "Conducted peer code reviews and implemented automated tests to maintain code quality and accessibility (WCAG 2.1).",
      "Worked closely with remote product and engineering teams using Agile practices (daily standups, sprint reviews).",
    ],
    skills: [
      "React",
      "Javascript",
      "HTML 5",
      "CSS 3",
      "Sass",
      "Git",
      "Webpack",
      "Chrome DevTools",
      "Figma",
      "Jira",
      "Agile/Scrum",
    ],
  },
  {
    id: "fashion-ecommerce",
    position: "Web Developer",
    company: "Fashion & Lifestyle Online Retail",
    location: "Remote",
    startDate: new Date("2019-07-01"),
    endDate: new Date("2021-01-01"),
    description: [
      "Led the rebuild of the checkout and PDP/PLP flows using Next.js and Tailwind CSS, significantly improving mobile UX and increasing Lighthouse scores to 95+.",
      "Implemented A/B testing on search and listing features integrated with Google Analytics, boosting conversion rate by 12%.",
      "Created and documented a scalable design system using Storybook, reducing UI development time across teams by 40%.",
      "Collaborated with backend teams to implement GraphQL queries and optimize API interactions for better rendering performance.",
      "Optimized static and dynamic content delivery via lazy loading and CDN, reducing page load time by over 35%.",
    ],
    achievements: [],
    skills: [
      "Next.js",
      "React",
      "Typescript",
      "Tailwind CSS",
      "Storybook",
      "GraphQL",
      "Cypress",
      "Google Analytics",
      "Webpack",
    ],
  },
];
