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
];

export const featuredContributions: contributionsInterface[] =
  contributionsUnsorted.slice(0, 3);
