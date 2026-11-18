export type NavigationStatus = "available" | "soon";

export interface NavigationItem {
  label: string;
  href: string;
  status: NavigationStatus;
}

export const navigation: NavigationItem[] = [
  { label: "Início", href: "/", status: "available" },
  { label: "Regras da Casa", href: "/regras-da-casa/", status: "available" },
  { label: "Os Corvonescos", href: "/corvonescos/", status: "available" },
];
