import { IconTypes } from "./Icon.types";

export type ButtonTypes = "aboutMe" | "myWork" | "myResume" | "download";

type ButtonConfig = { href?: string; icon: IconTypes };

export const DefaultButtonConfig: Record<ButtonTypes, ButtonConfig> = {
  myResume: { href: "resume", icon: "paper" },
  myWork: { href: "projects", icon: "folder" },
  aboutMe: { icon: "user" },
  download: { icon: "download" },
};
