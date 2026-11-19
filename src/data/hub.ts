export type HubStatus = "available" | "soon";
export type HubIcon =
  | "users"
  | "network"
  | "scroll-text"
  | "book-open"
  | "flask-conical"
  | "map"
  | "file-text"
  | "hammer";


export interface HubItem {
  title: string;
  description: string;
  href: string;
  icon: HubIcon;
  eyebrow: string;
  count?: number;
  countLabel?: string;
  status: HubStatus;
}
