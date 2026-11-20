/**
 * Crônicas da Campanha — registros do cronista Nemo Dattimare.
 *
 * Para publicar uma nova crônica, basta adicionar um objeto ao array `cronicas`
 * (ou adicionar uma categoria em `categorias`, se for um tipo novo de história).
 * A listagem, os filtros, a página própria de cada crônica e o sitemap
 * são gerados automaticamente a partir deste arquivo.
 */

export interface CronicaCategoria {
  id: string;
  nome: string;
  /** Frase curta que explica que tipo de história pertence a esta categoria. */
  descricao: string;
}

export const categorias: CronicaCategoria[] = [
  { id: "grandes-feitos", nome: "Grandes Feitos", descricao: "Vitórias, resgates e façanhas dignas de canção." },
  { id: "tragedias", nome: "Tragédias e Perdas", descricao: "Quedas, despedidas e o que o mundo perdeu pelo caminho." },
  { id: "intrigas", nome: "Intrigas e Segredos", descricao: "Conspirações, descobertas e perguntas ainda sem resposta." },
  { id: "viagens", nome: "Viagens e Descobertas", descricao: "Estradas, travessias e lugares que ninguém esperava ver." },
  { id: "desventuras", nome: "Desventuras", descricao: "Confusões, tropeços e situações que seria prudente ter evitado." },
  { id: "bastidores", nome: "Notas do Escriba", descricao: "Anotações soltas, rumores e curiosidades de Nemo." },
];

export interface Cronica {
  /** Usado na URL: /universo/cronicas-da-campanha/{slug}/ */
  slug: string;
  titulo: string;
  subtitulo?: string;
  /** id de uma categoria acima */
  categoria: string;
  /** Data no calendário do mundo, ex.: "24 de Tarsakh, 1493" */
  dataNoMundo: string;
  /** Número usado só para ordenar (maior = mais recente). Pode ser o nº da sessão. */
  ordem: number;
  /** Sessão em que aconteceu, se houver (liga com o Diário de Bordo). */
  sessao?: number;
  /** Texto curto exibido no card da listagem. */
  resumo: string;
  /** Texto completo, um item por parágrafo. */
  paragrafos: string[];
  /** slugs de /corvonescos/personagens/ envolvidos (opcional). */
  personagens?: string[];
  locais?: string[];
  /** Marca que os Corvonescos participaram diretamente desta crônica. */
  presencaCorvonescos?: boolean;
}

export const mesesCalendario = [
  "Hammer",
  "Alturiak",
  "Ches",
  "Tarsakh",
  "Mirtul",
  "Kythorn",
  "Flamerule",
  "Eleasis",
  "Eleint",
  "Marpenoth",
  "Uktar",
  "Nightal",
] as const;

export function dataCalendarioParaOrdem(data: string): number {
  const match = data.match(/(\d{1,2})\s+de\s+([A-Za-zÀ-ÿ]+)(?:,?\s+de)?\s+(\d{1,4})/i);
  if (!match) return Number.NEGATIVE_INFINITY;

  const dia = Number(match[1]);
  const mes = mesesCalendario.findIndex((item) => item.toLocaleLowerCase("pt-BR") === match[2].toLocaleLowerCase("pt-BR"));
  const ano = Number(match[3]);
  if (mes < 0) return Number.NEGATIVE_INFINITY;
  return ano * 10000 + (mes + 1) * 100 + dia;
}

export const cronicas: Cronica[] = [
  {
    slug: "asura-o-reino-que-apodreceu-por-dentro",
    titulo: "Asura: O Reino que Apodreceu por Dentro",
    subtitulo: "O relato completo de Nemo Dattimare sobre a queda e a reconstrução de Asura",
    categoria: "intrigas",
    dataNoMundo: "10 de Kythorn de 1491",
    ordem: 1491,
    resumo:
      "Uma maldição, uma Igreja corrompida e seis aventureiros transformaram Asura: o reino que parecia eterno precisou confrontar os próprios pecados para sobreviver.",
    paragrafos: [
      "Lathander que me perdoe, nem toda aurora presta.",
      "Asura parecia um reino de mármore branco e prosperidade. Por trás das muralhas, porém, cresciam corrupção, sacrificios e uma maldição que faria o próprio reino apodrecer.",
    ],
    locais: ["Asura"],
    personagens: ["kiei", "felypo", "leonora-liadon", "apollo", "ophelia-meluzan", "thorgrimm"],
    presencaCorvonescos: true,
  },
  {
    slug: "oakhuster-a-arvore-que-dava-frutos-a-morte",
    titulo: "Oakhuster: a árvore que dava frutos à morte",
    subtitulo: "A aventura pela Gulthias, os Penumbras e a segunda vida de Perseu",
    categoria: "grandes-feitos",
    dataNoMundo: "1 de Flamerule de 1491",
    ordem: 1490,
    resumo:
      "Uma vila marcada por sacerdotes mortos, ruínas antigas e uma árvore corrompida enfrentou seus maiores perigos com a ajuda de um grupo de aventureiros.",
    paragrafos: [
      "Oakhuster era uma vila pequena cercada por pedreiras, ruínas e mistérios.",
      "No centro da região, a Árvore Gulthias transformava sangue em frutos de cura e morte.",
    ],
    locais: ["Oakhuster"],
    personagens: ["felypo", "leonora-liadon", "ophelia-meluzan", "perseu-starlight"],
    presencaCorvonescos: true,
  },
];

export const cronicasOrdenadas = [...cronicas].sort((a, b) =>
  dataCalendarioParaOrdem(b.dataNoMundo) - dataCalendarioParaOrdem(a.dataNoMundo),
);

export function categoriaPorId(id: string): CronicaCategoria | undefined {
  return categorias.find((categoria) => categoria.id === id);
}

/** Texto "Quem é Nemo Dattimare?" — exibido no modal do cabeçalho. */
export const nemo = {
  nome: "Nemo Dattimare",
  titulo: "O Escriba das Profundezas",
  imagem: "/images/cronicas/nemo-dattimare.webp",
  imagemAlt:
    "Nemo Dattimare, um anfíbio roliço de capa vinho, chapéu com pena e monóculo, segurando um livro e uma pena de escrever.",
  perguntaBotao: "Quem é Nemo Dattimare?",
  biografia: [
    "Nemo Dattimare é um cronista de reputação modesta, conhecido por poucos e, aparentemente, não muito bem-sucedido no ofício. Dizem que suas crônicas não despertam grande interesse, que suas publicações raramente encontram compradores e que seu nome dificilmente figuraria entre os grandes escritores de sua época.",
    "Ainda assim, nada disso parece incomodá-lo.",
    "Nemo é profundamente fascinado pelos acontecimentos que testemunha. Onde há uma história a ser contada, lá está ele, com pena e pergaminho em mãos, sempre atento aos detalhes que outros deixariam passar. Seus modestos 1,40 m de altura não parecem representar qualquer obstáculo: de alguma maneira, ele consegue estar presente nos acontecimentos mais improváveis, acompanhando de perto feitos grandiosos, tragédias e, por vezes, situações que talvez fosse mais prudente evitar.",
    "Há, contudo, algo que desperta nele um interesse bastante particular: os Corvonescos. Por alguma razão, Nemo parece especialmente cativado pelas aventuras, desventuras e peculiaridades desse grupo. Se por admiração, curiosidade ou simplesmente por acreditar que ali reside uma boa história, é difícil dizer.",
    "Uma coisa é certa: Nemo Dattimare pode não ser um cronista famoso, mas certamente não pretende deixar que uma boa história passe sem registro.",
  ],
};
