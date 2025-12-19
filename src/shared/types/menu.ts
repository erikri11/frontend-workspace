import { ReactNode } from "react";

export interface MenuItem {
  textKey: string;
  url: string;
  icon?: ReactNode;
}
