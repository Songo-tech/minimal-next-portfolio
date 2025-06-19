export interface contributionsInterface {
  repo: string;
  contibutionDescription: string;
  repoOwner: string;
  link: string;
}

export const contributionsUnsorted: contributionsInterface[] = [
  {
    repo: "speechify",
    contibutionDescription:
      "Created a text-to-speech tool with a simple command-line interface.",
    repoOwner: "Logan676",
    link: "https://github.com/Logan676/speechify",
  },
  {
    repo: "hexo-theme-next",
    contibutionDescription: "Contributed improvements to the Hexo Next theme.",
    repoOwner: "theme-next",
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
    repo: "NextMercePro",
    contibutionDescription:
      "Contributed to an advanced Next.js e-commerce platform.",
    repoOwner: "Songo-tech",
    link: "https://github.com/Songo-tech/NextMercePro",
  },
];

export const featuredContributions: contributionsInterface[] =
  contributionsUnsorted.slice(0, 3);
