import { IconTypes } from "./Icon.types";

export type DefaultButtons = "aboutMe" | "myWork" | "myResume" | "download";

type ButtonConfig = { href?: string; icon: IconTypes };

export const DefaultButtonConfig: Record<DefaultButtons, ButtonConfig> = {
  myResume: { href: "resume", icon: "paper" },
  myWork: { href: "projects", icon: "folder" },
  aboutMe: { icon: "user" },
  download: { icon: "download" },
};
