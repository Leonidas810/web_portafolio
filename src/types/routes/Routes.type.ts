import { type IconTypes } from "../Icon.types";

export interface RoutesInterface {
  name: string;
  label?: string;
  icon?: IconTypes;
  href: string;
  className?: string;
}
