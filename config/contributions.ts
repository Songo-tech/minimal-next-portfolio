export interface contributionsInterface {
  repo: string;
  contibutionDescription: string;
  repoOwner: string;
  link: string;
}

export const contributionsUnsorted: contributionsInterface[] = [
  {
    repo: "NextMercePro",
    contibutionDescription:
      "Contributed to an advanced Next.js e-commerce platform.",
    repoOwner: "Logan676",
    link: "https://github.com/Songo-tech/NextMercePro",
  }, 
  {
    repo: "discourse",
    contibutionDescription:
      "Contributed to Songo-tech's Discourse project.",
    repoOwner: "Logan676",
    link: "https://github.com/Songo-tech/discourse",
 }, 
  {
    repo: "material-kit-react",
    contibutionDescription:
      "Developed additional components and fixed bugs in the Material Kit React template.",
    repoOwner: "Logan676",
    link: "https://github.com/Logan676/material-kit-react",
  },
  {
    repo: "hexo-theme-next",
    contibutionDescription: "Contributed improvements to the Hexo Next theme.",
    repoOwner: "Logan676",
    link: "https://github.com/theme-next/hexo-theme-next",
  },
  {
    repo: "seadroid",
    contibutionDescription:
      "Maintainer of the SeaDroid open-source project.",
    repoOwner: "Logan676",
    link: "https://github.com/Logan676/seadroid",
  },
  {
    repo: "speechify",
    contibutionDescription:
      "Created a text-to-speech tool with a simple command-line interface.",
    repoOwner: "Logan676",
    link: "https://github.com/Logan676/speechify",
  },
];

export const featuredContributions: contributionsInterface[] =
  contributionsUnsorted.slice(0, 3);
