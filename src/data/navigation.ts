export type NavigationStatus = "available" | "soon";

export interface NavigationItem {
  label: string;
  href: string;
  status: NavigationStatus;
  exact?: boolean;
  external?: boolean;
}

export interface NavigationGroup {
  type: "group";
  label: string;
  variant?: "default" | "tools";
  items: NavigationItem[];
}

export type NavigationEntry = NavigationItem | NavigationGroup;






export const navigation: NavigationEntry[] = [
  { label: "Início", href: "/", status: "available", exact: true },
  { label: "Os Corvonescos", href: "/corvonescos/", status: "available" },
  { label: "Universo", href: "/universo/", status: "available" },
  { label: "Sobre nós", href: "/sobre-nos/", status: "available" },
  {
    type: "group",
    label: "Biblioteca",
    items: [
      { label: "Regras da Casa", href: "/regras-da-casa/", status: "available" },
      { label: "Atividades de Downtimes", href: "/atividades-de-downtimes/", status: "available" },
      { label: "Bestiário do Melvis", href: "/bestiario-do-melvis/", status: "available" },
      { label: "Tipos de Venenos", href: "/tipos-de-venenos/", status: "available" },
    ],
  },
  {
    type: "group",
    label: "Ferramentas",
    variant: "tools",
    items: [
      { label: "Calculadora de Distâncias", href: "/calculador-de-distancia-toril/", status: "available" },
      { label: "Raziel", href: "https://raziel.campanharpg.com.br/", status: "available", external: true },
      { label: "Maleficonomicon", href: "https://maleficonomicon.campanharpg.com.br/", status: "available", external: true },
      { label: "Tradutor Grung", href: "https://grung.campanharpg.com.br/", status: "available", external: true },
      { label: "Tradutor de Dracônico", href: "https://altovaliriano.campanharpg.com.br/", status: "available", external: true },
    ],
  },
];

export function isGroup(entry: NavigationEntry): entry is NavigationGroup {
  return (entry as NavigationGroup).type === "group";
}

export function isNavigationItem(entry: NavigationEntry): entry is NavigationItem {
  return !isGroup(entry);
}


export function availableItems(items: NavigationItem[]): NavigationItem[] {
  return items.filter((item) => item.status === "available");
}


export function visibleNavigation(): NavigationEntry[] {
  return navigation
    .map((entry) => (isGroup(entry) ? { ...entry, items: availableItems(entry.items) } : entry))
    .filter((entry) => (isGroup(entry) ? entry.items.length > 0 : entry.status === "available"));
}

export function isCurrentPath(item: NavigationItem, pathname: string): boolean {
  if (item.external) return false;
  const normalize = (value: string) => (value.endsWith("/") ? value : `${value}/`);
  const current = normalize(pathname);
  if (item.exact) return current === item.href;
  return current === item.href || current.startsWith(item.href);
}
