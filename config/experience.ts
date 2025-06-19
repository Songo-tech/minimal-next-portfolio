import { ValidCategory, ValidExpType, ValidSkills } from "./constants";

interface PagesInfoInterface {
  title: string;
  imgArr: string[];
  description?: string;
}

interface DescriptionDetailsInterface {
  paragraphs: string[];
  bullets: string[];
}

export interface ExperienceInterface {
  id: string;
  type: ValidExpType;
  companyName: string;
  category: ValidCategory[];
  shortDescription: string;
  websiteLink?: string;
  githubLink?: string;
  techStack: ValidSkills[];
  startDate: Date;
  endDate: Date;
  companyLogoImg: any;
  descriptionDetails: DescriptionDetailsInterface;
  pagesInfoArr: PagesInfoInterface[];
}

export const Experiences: ExperienceInterface[] = [
  {
    id: "ai-tools-experience",
    companyName: "AI Tooling Skills",
    type: "Personal Project",
    category: ["Full Stack"],
    shortDescription:
      "Explored AI-powered coding assistants to accelerate development workflows.",
    techStack: ["ChatGPT", "Codex", "Copilit", "VSCode"],
    startDate: new Date("2024-01-01"),
    endDate: new Date("2024-06-01"),
    companyLogoImg: "/experience/ai/logo.png",
    pagesInfoArr: [
      {
        title: "AI Pair Programming",
        description:
          "Leveraged ChatGPT, Codex and Copilit inside VSCode for rapid prototyping",
        imgArr: ["/experience/ai/a.png"],
      },
      {
        title: "VSCode Workflow",
        description: "Configured extensions and shortcuts for an AI-enhanced IDE",
        imgArr: ["/experience/ai/b.png"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "Experimented with the latest AI assistants to streamline everyday coding tasks.",
        "Integrated multiple models directly in the editor for contextual suggestions.",
      ],
      bullets: [
        "Used ChatGPT for brainstorming and code reviews.",
        "Applied Codex and Copilit for code generation.",
        "Optimized productivity with VSCode extensions and custom settings.",
      ],
    },
  },
   {
    id: "cross-border-payment-platform",
    companyName: "FinTech – Global Cross-Border Payment Platform",
    type: "Professional",
    category: ["Web Dev", "Full Stack"],
    shortDescription:
      "Built enterprise dashboards and secure workflows for global payments.",
    techStack: [
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
    startDate: new Date("2022-07-01"),
    endDate: new Date("2025-05-01"),
    companyLogoImg: "/experience/cross-border-payment-platform/logo.png",
    pagesInfoArr: [
      {
        title: "Multi-Currency Dashboard",
        description:
          "Real-time FX rates and high-frequency transaction visualization",
        imgArr: [
          "/experience/cross-border-payment-platform/a.webp",
        ],
      },
      {
        title: "Secure Account Management",
        description: "2FA and OAuth2 flows across payment modules",
        imgArr: [
          "/experience/cross-border-payment-platform/b.png",
        ],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "Led the development of enterprise-level dashboards for real-time multi-currency exchange tracking and high-frequency transaction visualization.",
        "Partnered with designers and backend engineers to optimize performance, reducing average load time from 4.5s to under 2s.",
      ],
      bullets: [
        "Built modular components for payment, invoicing, and account management modules.",
        "Integrated secure authentication flows including 2FA and OAuth2, ensuring PCI-DSS compliance.",
        "Implemented automated testing pipelines with Jest and Cypress achieving 85% coverage and reducing QA cycles by 30%.",
      ],
    },
  },
   {
    id: "automotive-ecommerce",
    companyName: "Automotive E-Commerce",
    type: "Professional",
    category: ["Web Dev", "Frontend"],
    shortDescription:
      "Implemented responsive features for an online car marketplace.",
    techStack: [
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
    startDate: new Date("2021-02-01"),
    endDate: new Date("2022-06-01"),
    companyLogoImg: "/experience/automotive-ecommerce/logo.png",
    pagesInfoArr: [
      {
        title: "Vehicle Listings",
        description:
          "Searchable inventory, comparison tools and booking forms",
        imgArr: ["/experience/automotive-ecommerce/a.webp"],
      },
      {
        title: "Responsive UI",
        description:
          "Optimized pages with SASS styling, lazy loading and code splitting",
        imgArr: ["/experience/automotive-ecommerce/b.webp"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "Translated UI/UX mockups into cross-browser pages with ES6 JavaScript.",
        "Collaborated with remote teams using Agile standups and sprint reviews.",
      ],
      bullets: [
        "Developed car listings, comparison tools and user dashboards with React.js.",
        "Introduced lazy loading and code splitting to boost performance.",
        "Enforced code quality and WCAG 2.1 accessibility via reviews and automated tests.",
      ],
    },
  },
  {
    id: "linux-skills",
    companyName: "Linux Skills",
    type: "Personal Project",
    category: ["Backend", "Full Stack"],
    shortDescription:
      "Showcased professional Linux expertise from shell scripting to remote server management.",
    websiteLink: "https://ohmyz.sh/",
    techStack: ["Git", "Bash", "Python", "Docker", "SSH"],
    startDate: new Date("2019-01-01"),
    endDate: new Date("2019-06-01"),
    companyLogoImg: "/experience/oh-my-zsh-workflow/logo.png",
    pagesInfoArr: [
      {
        title: "Command-Line Mastery",
        description: "Advanced shell configuration and custom aliases for efficient workflows",
        imgArr: ["/experience/oh-my-zsh-workflow/a.png"],
      },
      {
        title: "Android Builds",
        description: "Compiled Android System UI and managed device debugging with ADB",
        imgArr: ["/experience/oh-my-zsh-workflow/b.png"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "This personal initiative highlights my expertise with Linux environments across a range of projects.",
        "Leveraging tools like Oh My Zsh, Docker and SSH, I streamlined development and server management tasks.",
      ],
      bullets: [
        "Automated tasks with Bash scripts for rapid setup and deployment.",
        "Navigated the command line with advanced utilities and shortcuts.",
        "Managed devices via Android ADB for testing and debugging.",
        "Customized Oh My Zsh for productivity with tailored plugins and themes.",
        "Created Python helpers for build automation on Ubuntu systems.",
        "Compiled Android System UI from source for feature customization.",
        "Administered remote servers over SSH with secure procedures.",
        "Containerized applications using Docker for consistent environments.",
      ],
    },
  },
  {
    id: "enterprise-android-framework",
    companyName: "Enterprise Android Framework",
    type: "Professional",
    category: ["Mobile Dev", "Full Stack"],
    shortDescription:
      "Architected a modular framework powering high-performance Android apps used by millions.",
    techStack: ["Android", "Java", "CI/CD", "Jenkins", "AWS"],
    startDate: new Date("2015-01-01"),
    endDate: new Date("2017-12-31"),
    companyLogoImg: "/experience/enterprise-android-framework/logo.jpg",
    pagesInfoArr: [
      {
        title: "Core Modules",
        description: "Reusable libraries enabling scalable app development",
        imgArr: [
          "/experience/enterprise-android-framework/a.jpg",
        ],
      },
      {
        title: "Performance Suite",
        description: "Tools for profiling, memory analysis, and automated testing",
        imgArr: [
          "/experience/enterprise-android-framework/b.webp",
        ],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "Leading the Android framework team, I designed an architecture that enhanced stability and code reuse.",
        "The framework was adopted across multiple business units, supporting millions of users.",
      ],
      bullets: [
        "Implemented modular components to accelerate new feature delivery.",
        "Optimized memory usage and startup performance across flagship apps.",
        "Automated CI/CD pipelines for streamlined release cycles.",
      ],
    },
  },
  {
    id: "ebook-reader-development",
    companyName: "E-Book Reader Development",
    type: "Professional",
    category: ["Mobile Dev"],
    shortDescription:
      "Led design and implementation of feature modules and core framework for the iReader app.",
    techStack: [
      "Jetpack Compose",
      "Kotlin",
      "Java",
      "React Native",
      "Flutter",
      "Android SDK & Framework",
      "C++",
      "JNI",
      "Android Studio",
      "SVN/Git",
      "Android Profiler",
      "Systrace",
      "LeakCanary",
      "SQLite",
      "Multithreading",
      "Gradle",
    ],
    startDate: new Date("2018-01-01"),
    endDate: new Date("2020-06-01"),
    companyLogoImg: "/experience/ebook-reader-development/logo.png",
    pagesInfoArr: [
      {
        title: "Pagination Rendering",
        description: "Accurate text layout and smooth page transitions",
        imgArr: ["/experience/ebook-reader-development/a.jpg"],
      },
      {
        title: "Night Mode",
        description: "Comfortable reading with dark theme support",
        imgArr: ["/experience/ebook-reader-development/b.webp"],
      },
      {
        title: "Custom Font Engine",
        description: "Enhanced reading experience with specialized fonts",
        imgArr: ["/experience/ebook-reader-development/c.jpg"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "Led design and implementation of core modules while continuously optimizing launch performance, rendering, and memory usage.",
        "Tackled pagination, night mode, and a custom font engine to deliver on time and improve stability through user feedback and profiling.",
      ],
      bullets: [
        "Refactored and modularized existing codebase to meet evolving business needs.",
      ],
    },
  },
  {
    id: "react-native-finance-tracker",
    companyName: "Cross-Platform Finance Tracker",
    type: "Professional",
    category: ["Mobile Dev", "Full Stack"],
    shortDescription:
      "Created a finance tracking app with React Native delivering feature parity on Android and iOS.",
    techStack: ["React Native", "Typescript", "Redux", "Firebase"],
    startDate: new Date("2022-01-01"),
    endDate: new Date("2023-07-01"),
    companyLogoImg: "/experience/react-native-finance-tracker/logo.png",
    pagesInfoArr: [
      {
        title: "Expense Overview",
        description: "Charts and reports powered by real-time data",
        imgArr: ["/experience/react-native-finance-tracker/a.webp"],
      },
      {
        title: "Cloud Sync",
        description: "Seamless data synchronization across devices",
        imgArr: ["/experience/react-native-finance-tracker/b.png"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "This project demonstrated my ability to deliver consistent user experiences across platforms.",
        "Leveraging React Native and Firebase, I implemented real-time data sync and state management with Redux.",
      ],
      bullets: [
        "Implemented complex navigation patterns for both Android and iOS.",
        "Utilized TypeScript to enforce reliability across the codebase.",
        "Deployed features to production through automated Firebase pipelines.",
      ],
    },
  },
  {
    id: "ios-health-companion",
    companyName: "iOS Health Companion",
    type: "Professional",
    category: ["Mobile Dev"],
    shortDescription:
      "Built a wellness companion app leveraging HealthKit and on-device sensors.",
    techStack: ["Swift", "HealthKit", "CoreData", "SwiftUI"],
    startDate: new Date("2023-01-01"),
    endDate: new Date("2024-01-01"),
    companyLogoImg: "/experience/ios-health-companion/logo.png",
    pagesInfoArr: [
      {
        title: "Health Dashboard",
        description:
          "Visualized metrics like steps and heart rate with interactive charts",
        imgArr: ["/experience/ios-health-companion/a.webp"],
      },
      {
        title: "Workout Planner",
        description:
          "Created customizable workout routines with local reminders",
        imgArr: ["/experience/ios-health-companion/b.png"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "Showcased proficiency in Swift and modern iOS frameworks to deliver a polished health companion.",
        "Persisted user data via CoreData while adhering to privacy best practices.",
      ],
      bullets: [
        "Integrated HealthKit for secure access to health metrics.",
        "Implemented dynamic SwiftUI layouts for an engaging user experience.",
      ],
    },
  },
];

export const featuredExperiences = Experiences.slice(0, 3);
