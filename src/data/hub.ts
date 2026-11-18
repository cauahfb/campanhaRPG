export type HubStatus = "available" | "soon";
export type HubIcon = "users" | "network" | "scroll-text" | "book-open" | "flask-conical";

/** Item de um HUB (página de seção com poucos destinos grandes). */
export interface HubItem {
  title: string;
  description: string;
  href: string;
  icon: HubIcon;
  /** Texto pequeno acima do título (ex.: nome da seção). */
  eyebrow: string;
  /** Só é exibido quando existir dado real. */
  count?: number;
  countLabel?: string;
  status: HubStatus;
}
