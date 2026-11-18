export interface PersonagemClasse {
  nome: string;
  subclasse?: string;
}

export interface Personagem {
  slug: string;
  nome: string;
  status: "Ativo" | "Ex-Integrante" | "Falecido";
  classes: PersonagemClasse[];
  imagem?: string;
  temas?: {
    epico?: { titulo: string; arquivo: string }[];
    morte?: { titulo: string; arquivo: string }[];
  };
}

export const personagens: Personagem[] = [
  {
    slug: "corvalina",
    nome: "Corvalina Nightveil",
    status: "Ativo",
    classes: [{ nome: "Clériga", subclasse: "Domínio do Túmulo" }],
    imagem: "/images/personagens/corvalina-nightveil.png",
    temas: {
      epico: [{ titulo: "Tema Épico", arquivo: "/audio/personagens/corvalina-nightveil/tema-epico.mp3" }],
      morte: [{ titulo: "Tema de Morte", arquivo: "/audio/personagens/corvalina-nightveil/tema-morte.mp3" }],
    },
  },
  {
    slug: "novrik",
    nome: "Novrik Vaelar",
    status: "Ativo",
    classes: [{ nome: "Mago", subclasse: "Ordem dos Escribas" }],
    imagem: "/images/personagens/novrik-vaelar.png",
    temas: {
      epico: [{ titulo: "Tema Épico", arquivo: "/audio/personagens/novrik-vaelar/tema-epico.mp3" }],
      morte: [{ titulo: "Tema de Morte", arquivo: "/audio/personagens/novrik-vaelar/tema-morte.mp3" }],
    },
  },
  {
    slug: "felypo",
    nome: "Félypo D'Argent",
    status: "Ativo",
    classes: [{ nome: "Monge", subclasse: "Caminho do Dragão Ascendente" }],
    imagem: "/images/personagens/felypo-dargent.png",
    temas: {
      epico: [{ titulo: "Tema Épico", arquivo: "/audio/personagens/felypo-dargent/tema-epico.mp3" }],
      morte: [{ titulo: "Tema de Morte", arquivo: "/audio/personagens/felypo-dargent/tema-morte.mp3" }],
    },
  },
  {
    slug: "melvis",
    nome: "Melvis Pulaço",
    status: "Ativo",
    classes: [
      { nome: "Blood Hunter", subclasse: "Lycan" },
      { nome: "Guerreiro", subclasse: "Battle Master" },
      { nome: "Monge" },
    ],
    imagem: "/images/personagens/melvis-pulaco.png",
    temas: {
      epico: [
        { titulo: "Tema Épico", arquivo: "/audio/personagens/melvis-pulaco/tema-epico.mp3" },
        { titulo: "Tema Épico — Transformado", arquivo: "/audio/personagens/melvis-pulaco/tema-epico-transformado.mp3" },
      ],
      morte: [{ titulo: "Tema de Morte", arquivo: "/audio/personagens/melvis-pulaco/tema-morte.mp3" }],
    },
  },
  {
    slug: "moralieu",
    nome: "Moralieu",
    status: "Ativo",
    classes: [],
  },
];
