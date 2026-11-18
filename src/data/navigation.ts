export type NavigationStatus = "available" | "soon";

export interface NavigationItem {
  label: string;
  href: string;
  status: NavigationStatus;
  /** Quando verdadeiro, só fica ativo na rota exata (usado pelo "Início"). */
  exact?: boolean;
}

/**
 * Fonte única da navegação do portal (navbar e rodapé).
 * Para publicar uma nova área, adicione o item aqui com status "available".
 * Itens "soon" não aparecem na navbar.
 */
export const navigation: NavigationItem[] = [
  { label: "Início", href: "/", status: "available", exact: true },
  { label: "Os Corvonescos", href: "/corvonescos/", status: "available" },
  { label: "Regras da Casa", href: "/regras-da-casa/", status: "available" },
  { label: "Tipos de Venenos", href: "/tipos-de-venenos/", status: "available" },
];

export function isCurrentPath(item: NavigationItem, pathname: string): boolean {
  const normalize = (value: string) => (value.endsWith("/") ? value : `${value}/`);
  const current = normalize(pathname);
  if (item.exact) return current === item.href;
  return current === item.href || current.startsWith(item.href);
}
