export interface Personagem {
  slug: string;
  nome: string;
  classe?: string;
  raca?: string;
  jogador?: string;
  imagem?: string;
  resumo?: string;
  status: "available";
}

/** Cadastro inicial: somente os nomes foram definidos; os demais campos serão preenchidos depois. */
export const personagens: Personagem[] = [
  { slug: "corvalina", nome: "Corvalina", status: "available" },
  { slug: "novrik", nome: "Novrik", status: "available" },
  { slug: "felypo", nome: "Felypo", status: "available" },
  { slug: "melvis", nome: "Melvis", status: "available" },
  { slug: "moralieu", nome: "Moralieu", status: "available" },
];
