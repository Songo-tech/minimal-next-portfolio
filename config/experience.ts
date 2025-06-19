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
    companyLogoImg: "/experience/enterprise-android-framework/logo.png",
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
  {
    id: "nextmerce-template",
    companyName: "NextMerce eCommerce Template",
    type: "Personal Project",
    category: ["Web Dev", "Full Stack", "UI/UX"],
    shortDescription:
      "Enhanced a professional eCommerce template with refined UI/UX and robust analytics.",
    websiteLink: "https://github.com/NextMerce/nextjs-ecommerce-template",
    techStack: [
      "Next.js",
      "React",
      "Typescript",
      "Tailwind CSS",
      "Figma",
      "AWS",
    ],
    startDate: new Date("2023-04-01"),
    endDate: new Date("2023-09-01"),
    companyLogoImg: "/experience/nextmerce/logo.png",
    pagesInfoArr: [
      {
        title: "Storefront",
        description: "Modern landing page showcasing featured products",
        imgArr: ["/experience/nextmerce/home.png"],
      },
      {
        title: "Admin Dashboard",
        description: "Product and order management interface",
        imgArr: ["/experience/nextmerce/admin.png"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "Led UI/UX improvements using Figma prototypes to craft a polished shopping experience.",
        "Integrated Google Analytics and Adsense to monitor traffic and monetize content.",
        "Deployed scalable infrastructure on AWS leveraging ECS, RDS, S3, CloudWatch, and Secrets Manager.",
        "Ran optimization experiments to boost conversion rates and user engagement.",
      ],
      bullets: [
        "Designed high-fidelity mockups in Figma for a responsive storefront.",
        "Configured Google Analytics and Adsense for actionable insights.",
        "Implemented AWS infrastructure with ECS and RDS for reliability.",
        "Executed traffic optimization tests improving engagement metrics.",
      ],
    },
  },
  {
    id: "discourse-forum",
    companyName: "Discourse Forum Platform",
    type: "Personal Project",
    category: ["Web Dev", "Full Stack"],
    shortDescription:
      "Contributed enhancements to the Discourse open-source forum with scalable deployment and analytics integration.",
    websiteLink: "https://github.com/discourse/discourse",
    techStack: ["Docker", "PostgreSQL", "Redis", "AWS"],
    startDate: new Date("2023-06-01"),
    endDate: new Date("2023-12-01"),
    companyLogoImg: "/experience/discourse/logo.png",
    pagesInfoArr: [
      {
        title: "Community Forum",
        description: "Feature-rich discussion board with custom themes",
        imgArr: ["/experience/discourse/forum.png"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "Implemented theme customizations and plugin development to tailor the platform to diverse communities.",
        "Added Google Analytics tracking to measure user engagement and growth.",
        "Managed production deployments using AWS services and Docker containers for scalability.",
        "Experimented with traffic strategies to foster active discussions and retention.",
      ],
      bullets: [
        "Developed custom Discourse plugins and themes.",
        "Integrated analytics via Google Analytics for insights.",
        "Deployed using Docker with AWS S3 and CloudWatch.",
        "Optimized engagement through targeted experiments.",
      ],
    },
  },
  {
    id: "hexo-theme-next",
    companyName: "Hexo Theme Next",
    type: "Personal Project",
    category: ["Web Dev", "UI/UX"],
    shortDescription:
      "Upgraded the Hexo Next theme with modern design patterns and ad integration.",
    websiteLink: "https://github.com/next-theme/hexo-theme-next",
    techStack: ["HTML 5", "CSS 3", "Javascript", "Figma"],
    startDate: new Date("2022-10-01"),
    endDate: new Date("2023-01-01"),
    companyLogoImg: "/experience/hexo-theme-next/logo.png",
    pagesInfoArr: [
      {
        title: "Blog Layout",
        description: "Clean and optimized blog interface",
        imgArr: ["/experience/hexo-theme-next/blog.png"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "Redesigned core templates in Figma to provide an elegant reading experience.",
        "Integrated Google Adsense slots and analytics tracking for revenue insights.",
        "Focused on performance tuning and SEO improvements to increase traffic.",
      ],
      bullets: [
        "Crafted UI mockups with Figma for theme upgrades.",
        "Added Adsense and Analytics for monetization.",
        "Improved loading speed and SEO for higher reach.",
      ],
    },
  },
];

export const featuredExperiences = Experiences.slice(0, 3);
