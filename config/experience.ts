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
        imgArr: ["/experience/oh-my-zsh-workflow/logo.png"],
      },
      {
        title: "Android Builds",
        description: "Compiled Android System UI and managed device debugging with ADB",
        imgArr: ["/experience/oh-my-zsh-workflow/logo.png"],
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
          "/experience/enterprise-android-framework/b.webp",
          "/experience/enterprise-android-framework/c.jpg",
        ],
      },
      {
        title: "Performance Suite",
        description: "Tools for profiling, memory analysis, and automated testing",
        imgArr: [
          "/experience/enterprise-android-framework/b.webp",
          "/experience/enterprise-android-framework/c.jpg",
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
        imgArr: ["/experience/react-native-finance-tracker/logo.png"],
      },
      {
        title: "Cloud Sync",
        description: "Seamless data synchronization across devices",
        imgArr: ["/experience/react-native-finance-tracker/logo.png"],
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
        imgArr: ["/experience/ios-health-companion/logo.png"],
      },
      {
        title: "Workout Planner",
        description:
          "Created customizable workout routines with local reminders",
        imgArr: ["/experience/ios-health-companion/logo.png"],
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
