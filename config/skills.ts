import { Icons } from "@/components/common/icons";

export interface skillsInterface {
  name: string;
  description: string;
  rating: number;
  icon: any;
}

export const skillsUnsorted: skillsInterface[] = [
  {
    name: "ChatGPT & Codex",
    description:
      "Regularly leverage ChatGPT and Codex to prototype ideas and solve problems.",
    rating: 5,
    icon: Icons.openai,
  },
  {
    name: "GitLab Pipelines",
    description:
      "Use GitLab CI/CD pipelines on a daily basis to automate tests and deployments.",
    rating: 5,
    icon: Icons.gitlab,
  },
  {
    name: "JavaScript/TypeScript, HTML & CSS",
    description:
      "Proficient in building robust web applications with JavaScript/TypeScript, HTML5 and modern CSS.",
    rating: 5,
    icon: Icons.javascript,
  },
  {
    name: "Node.js Development",
    description:
      "Experienced in creating backend services and tooling using Node.js.",
    rating: 5,
    icon: Icons.nodejs,
  },
  {
    name: "React & Next.js",
    description:
      "Familiarity with frontend frameworks such as React and Next.js.",
    rating: 4,
    icon: Icons.react,
  },
  {
    name: "Autonomous Project Management",
    description:
      "Strong ability to work independently and manage projects autonomously.",
    rating: 4,
    icon: Icons.work,
  },
  {
    name: "Web Security",
    description:
      "Knowledge of web security best practices and common vulnerabilities.",
    rating: 4,
    icon: Icons.warning,
  },
  {
    name: "GraphQL",
    description:
      "Fetch data precisely with a powerful query language for APIs and runtime execution.",
    rating: 4,
    icon: Icons.graphql,
  },
  {
    name: "Nest.js",
    description:
      "Create scalable and modular applications with a progressive Node.js framework.",
    rating: 4,
    icon: Icons.nestjs,
  },
  {
    name: "AWS",
    description:
      "Utilize Amazon Web Services to build and deploy scalable and reliable applications.",
    rating: 3,
    icon: Icons.amazonaws,
  },
  {
    name: "Figma",
    description:
      "Experienced in crafting UI mockups and interactive prototypes using Figma.",
    rating: 3,
    icon: Icons.figma,
  },
  {
    name: "MySQL",
    description:
      "Manage and organize relational databases efficiently for data-driven applications.",
    rating: 2,
    icon: Icons.mysql,
  },
];

export const skills = skillsUnsorted
  .slice()
  .sort((a, b) => b.rating - a.rating);

export const featuredSkills = skills.slice(0, 6);
