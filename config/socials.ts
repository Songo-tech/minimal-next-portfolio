import { Icons } from "@/components/common/icons";

interface SocialInterface {
  name: string;
  username: string;
  icon: any;
  link: string;
}

export const SocialLinks: SocialInterface[] = [
  {
    name: "Github",
    username: "@JackSong",
    icon: Icons.gitHub,
    link: "https://github.com/Songo-tech",
  },
  {
    name: "LinkedIn",
    username: "JackSong",
    icon: Icons.linkedin,
    link: "https://www.linkedin.com/in/namanbarkiya",
  },
  {
    name: "Twitter",
    username: "@namanbarkiya",
    icon: Icons.twitter,
    link: "",
  },
];
