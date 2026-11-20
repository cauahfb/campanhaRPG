export interface PersonagemClasse {
  nome: string;
  subclasse?: string;
}

export interface Personagem {
  slug: string;
  nome: string;
  status: "Ativo" | "Ex-Integrante" | "Falecido";
  raca: string;
  altura: string;
  idade: string;
  comidaFavorita: string;
  classes: PersonagemClasse[];
  imagem?: string;
  npcFavoritoSlug?: string;
  temas?: {
    epico?: { titulo: string; arquivo: string }[];
    morte?: { titulo: string; arquivo: string }[];
  };
}

export const personagens: Personagem[] = [
  {
    slug: "kiei",
    nome: "Kiei",
    status: "Ex-Integrante",
    raca: "",
    altura: "",
    idade: "",
    comidaFavorita: "",
    classes: [],
  },
  {
    slug: "othis",
    nome: "Othis",
    status: "Ex-Integrante",
    raca: "",
    altura: "",
    idade: "",
    comidaFavorita: "",
    classes: [],
  },
  {
    slug: "ozimandias",
    nome: "Ozimandias",
    status: "Ex-Integrante",
    raca: "",
    altura: "",
    idade: "",
    comidaFavorita: "",
    classes: [],
  },
  {
    slug: "alric",
    nome: "Alric Drakov",
    status: "Ex-Integrante",
    raca: "",
    altura: "",
    idade: "",
    comidaFavorita: "",
    classes: [],
  },
  {
    slug: "edran",
    nome: "Edran Duskhollow",
    status: "Ex-Integrante",
    raca: "",
    altura: "",
    idade: "",
    comidaFavorita: "",
    classes: [],
  },
  {
    slug: "corvalina",
    nome: "Corvalina Nightveil",
    status: "Ativo",
    raca: "Shadar-kai",
    altura: "1,55 m",
    idade: "190 anos",
    comidaFavorita: "Pão de Chocolate",
    classes: [{ nome: "Clériga", subclasse: "Domínio do Túmulo" }],
    imagem: "/images/personagens/corvalina-nightveil.png",
    npcFavoritoSlug: "yonlero",
    temas: {
      epico: [{ titulo: "Deacons of the Deep - Dark Souls 3", arquivo: "/audio/personagens/corvalina-nightveil/tema-epico.mp3" }],
      morte: [{ titulo: "20# - Aphex Twin", arquivo: "/audio/personagens/corvalina-nightveil/tema-morte.mp3" }],
    },
  },
  {
    slug: "novrik",
    nome: "Novrik Vaelar",
    status: "Ativo",
    raca: "Vedalken",
    altura: "2.10 m",
    idade: "115 anos",
    comidaFavorita: "Pudim",
    classes: [{ nome: "Mago", subclasse: "Ordem dos Escribas" }],
    imagem: "/images/personagens/novrik-vaelar.png",
    npcFavoritoSlug: "uvilda",
    temas: {
      epico: [{ titulo: "A Powerful Mage - Frieren", arquivo: "/audio/personagens/novrik-vaelar/tema-epico.mp3" }],
      morte: [{ titulo: "Violoncello's Lament - Fullmetal Alchemist", arquivo: "/audio/personagens/novrik-vaelar/tema-morte.mp3" }],
    },
  },
  {
    slug: "felypo",
    nome: "Félypo D'Argent",
    status: "Ativo",
    raca: "Elfo da Floresta",
    altura: "1.90 m",
    idade: "136 anos",
    comidaFavorita: "Moqueca",
    classes: [{ nome: "Monge", subclasse: "Caminho do Dragão Ascendente" }],
    imagem: "/images/personagens/felypo-dargent.png",
    npcFavoritoSlug: "lila-moon",
    temas: {
      epico: [{ titulo: "Self-Embodiment of Perfection - Jujutsu Kaisen", arquivo: "/audio/personagens/felypo-dargent/tema-epico.mp3" }],
      morte: [{ titulo: "to those who are thinking of leaving - Yuh Baek", arquivo: "/audio/personagens/felypo-dargent/tema-morte.mp3" }],
    },
  },
  {
    slug: "melvis",
    nome: "Melvis Pulaço",
    status: "Ativo",
    raca: "Grung",
    altura: "1.07 m",
    idade: "35 anos",
    comidaFavorita: "Batata assada em sal grosso, recheada com ragu vegetariano de cogumelos e alho-poró, finalizada com uma crosta gratinada de queijo Gruyère, acompanhada de hidromel Morat com aproximadamente um ano e meio de maturação.",
    classes: [
      { nome: "Blood Hunter", subclasse: "Lycan" },
      { nome: "Guerreiro", subclasse: "Battle Master" },
      { nome: "Monge" },
    ],
    imagem: "/images/personagens/melvis-pulaco.png",
    npcFavoritoSlug: "clovis-velho-corvo",
    temas: {
      epico: [
        { titulo: "Banjo Bloodbath - Appalachian Anarchy", arquivo: "/audio/personagens/melvis-pulaco/tema-epico.mp3" },
        { titulo: "Alex Terrible - Doom Eternal", arquivo: "/audio/personagens/melvis-pulaco/tema-epico-transformado.mp3" },
      ],
      morte: [{ titulo: "Travelers - OuterWilds", arquivo: "/audio/personagens/melvis-pulaco/tema-morte.mp3" }],
    },
  },
  {
    slug: "moralieu",
    nome: "Moralieu",
    status: "Ativo",
    raca: "",
    altura: "",
    idade: "",
    comidaFavorita: "",
    classes: [],
  },
];
