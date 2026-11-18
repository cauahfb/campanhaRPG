export type HubStatus = "available" | "soon";

export interface CorvonescosHubItem {
  title: string;
  description: string;
  href: string;
  icon: "users" | "network" | "scroll-text";
  count?: number;
  status: HubStatus;
}

export const corvonescosHub: CorvonescosHubItem[] = [
  {
    title: "Personagens",
    description: "Conheça os integrantes do grupo.",
    href: "/corvonescos/personagens/",
    icon: "users",
    status: "available",
  },
  {
    title: "Vínculos",
    description: "Consulte os vínculos entre os membros do grupo.",
    href: "/corvonescos/vinculos/",
    icon: "network",
    status: "available",
  },
  {
    title: "Diário de Bordo",
    description: "Consulte as sessões vividas e os mistérios conhecidos pelo grupo.",
    href: "/corvonescos/diario-de-bordo/",
    icon: "scroll-text",
    status: "available",
  },
];
