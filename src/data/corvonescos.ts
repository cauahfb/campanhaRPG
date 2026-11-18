import type { HubItem, HubStatus } from "./hub";

export type { HubStatus };
export type CorvonescosHubItem = HubItem;

export const corvonescosHub: CorvonescosHubItem[] = [
  {
    title: "Personagens",
    description: "Conheça os integrantes do grupo.",
    href: "/corvonescos/personagens/",
    icon: "users",
    eyebrow: "Os Corvonescos",
    countLabel: "personagens",
    status: "available",
  },
  {
    title: "Vínculos",
    description: "Aliados, inimigos e figuras especiais ligados ao grupo.",
    href: "/corvonescos/vinculos/",
    icon: "network",
    eyebrow: "Os Corvonescos",
    countLabel: "vínculos",
    status: "available",
  },
  {
    title: "Diário de Bordo",
    description: "Consulte as sessões vividas e os mistérios conhecidos pelo grupo.",
    href: "/corvonescos/diario-de-bordo/",
    icon: "scroll-text",
    eyebrow: "Os Corvonescos",
    countLabel: "sessões",
    status: "available",
  },
];
