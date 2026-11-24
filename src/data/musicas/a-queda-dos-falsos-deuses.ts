import type { Documento } from "../documentos";

/** A Queda dos Falsos Deuses — canção de Yonlero. */
export const aQuedaDosFalsosDeuses: Documento = {
  slug: "a-queda-dos-falsos-deuses",
  titulo: "A Queda dos Falsos Deuses",
  tipo: "musica",
  situacao: "encontrado",
  autor: "Yonlero",
  idioma: "Comum",
  origem: "Canção criada por Yonlero após a queda do Tempo de Ouro de Luskan, com o intuito de glorificar os aventureiros. Ninguém sabe ao certo como ele sabe desses acontecimentos.",
  resumo: "Yonlero canta sobre os quatro aventureiros que derrubaram os falsos deuses durante o Tempo de Ouro de Luskan.",
  locais: ["Luskan"],
  vinculos: ["yonlero"],
  faixas: [
    { titulo: "A Queda dos Falsos Deuses", rotulo: "Gravação", subtitulo: "Voz de Yonlero", arquivo: "/audio/musicas/a-queda-dos-falsos-deuses/yonlero.mp3" },
  ],
  secoes: [
    {
      titulo: "Sobre a canção",
      nivel: 1,
      blocos: [
        "Criada por {{Yonlero}} após a queda do Tempo de Ouro de {{Luskan}}, a canção glorifica os aventureiros que derrubaram os falsos deuses. Ninguém sabe ao certo como o bardo conhece esses acontecimentos.",
      ],
    },
    {
      titulo: "Letra",
      nivel: 1,
      blocos: [
        {
          versos: [
            "Eu sou Yonlero, o bardo,",
            "Venham ouvir, marinheiros.",
            "Vou contar sem pressa,",
            "De quatro que derrubaram os falsos deuses.",
            "",
            "Luskan sorria sob um céu dourado,",
            "Mas todo paraíso tem preço cobrado.",
            "Ergueram tronos acima dos homens,",
            "Vestiram-se em glória, tomaram seus nomes.",
            "",
            "Corvonescos, Corvonescos,",
            "Quatro contra deuses, sem medo da fome.",
            "Corvonescos, Corvonescos,",
            "Não há trono eterno acima dos réus.",
            "",
            "O aço encontrou a divina armadura,",
            "O sangue escreveu uma história tão dura.",
            "Winter avançou, e a Espada tombou,",
            "O falso deus caiu, seu reinado acabou.",
            "",
            "Corvonescos, Corvonescos,",
            "Quatro contra deuses, sem medo da fome.",
            "Corvonescos, Corvonescos,",
            "Não há trono eterno acima dos réus.",
            "",
            "Os portos silenciaram,",
            "Felicidade comprada com correntes",
            "Não é liberdade, é cicatriz.",
            "",
            "Quatro mortais desafiaram os deuses,",
            "E os deuses entraram para a história.",
            "Eu sou Yonlero, o bardo.",
          ],
        },
      ],
    },
  ],
};
