export type NavigationStatus = "available" | "soon";

export interface NavigationItem {
  label: string;
  href: string;
  status: NavigationStatus;
  /** Quando verdadeiro, só fica ativo na rota exata (usado pelo "Início"). */
  exact?: boolean;
  /** Link para fora do portal: abre em nova aba e não participa do estado "ativo". */
  external?: boolean;
}

export interface NavigationGroup {
  type: "group";
  label: string;
  /** "tools" só afeta o rodapé: as ferramentas ganham uma linha própria. */
  variant?: "default" | "tools";
  items: NavigationItem[];
}

export type NavigationEntry = NavigationItem | NavigationGroup;

/**
 * Fonte única da navegação do portal (navbar e rodapé).
 * Para publicar uma nova página, adicione o item aqui com status "available".
 * Itens "soon" não aparecem na navbar nem no rodapé.
 */
export const navigation: NavigationEntry[] = [
  { label: "Início", href: "/", status: "available", exact: true },
  { label: "Os Corvonescos", href: "/corvonescos/", status: "available" },
  { label: "Universo", href: "/universo/", status: "available" },
  {
    type: "group",
    label: "Biblioteca",
    items: [
      { label: "Regras da Casa", href: "/regras-da-casa/", status: "available" },
      { label: "Bestiário do Melvis", href: "/bestiario-do-melvis/", status: "available" },
      { label: "Tipos de Venenos", href: "/tipos-de-venenos/", status: "available" },
    ],
  },
  {
    type: "group",
    label: "Ferramentas",
    variant: "tools",
    items: [
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
  return (entry as NavigationItem).type !== "group";
}

/** Itens disponíveis de um grupo ou link solto. */
export function availableItems(items: NavigationItem[]): NavigationItem[] {
  return items.filter((item) => item.status === "available");
}

/** Entradas visíveis: grupos sem nenhum item disponível são omitidos. */
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
