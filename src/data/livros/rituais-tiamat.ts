import type { Documento } from "../documentos";

export const ritualDosCincoSacramentos: Documento = {
  slug: "ritual-dos-cinco-sacramentos-cromaticos",
  titulo: "O Ritual dos Cinco Sacramentos Cromáticos",
  tipo: "manuscrito",
  situacao: "destruido",
  autor: "Desconhecida",
  dataNoMundo: "Desconhecida",
  idioma: "Dracônico",
  origem: "Foram encontrados ao longo da campanha em contato com Thialetra Valencrest e Aurelio Malrec.",
  resumo:
    "Um ritual proibido que permite aos servos de Tiamat invocar uma fração de seu poder no Plano Material, ao custo de cinco vidas.",
  secoes: [
    {
      titulo: "Um Poder além de Avernus",
      blocos: [
        "Quando os servos de Tiamat necessitam de seu poder, mas não possuem os meios necessários para libertá-la de Avernus, podem recorrer a um ritual proibido, capaz de trazer uma fração de sua essência ao Plano Material.",
        "Para realizá-lo, são necessários cinco indivíduos e os **Cinco Sacramentos Cromáticos**, relíquias ritualísticas consagradas a cada uma das cabeças da Rainha Dragão.",
      ],
    },
    {
      titulo: "Os Cinco Sacramentos Cromáticos",
      nivel: 1,
      blocos: [
        "Cada sacramento funciona como um receptáculo capaz de absorver e armazenar energia vital, convertendo-a em uma parcela da essência dracônica correspondente.",
        {
          lista: [
            "**Sacramento Negro:** representa a essência corrosiva da cabeça negra.",
            "**Sacramento Azul:** representa a essência elétrica da cabeça azul.",
            "**Sacramento Verde:** representa a essência venenosa da cabeça verde.",
            "**Sacramento Branco:** representa a essência gélida da cabeça branca.",
            "**Sacramento Vermelho:** representa a essência ígnea da cabeça vermelha.",
          ],
        },
      ],
    },
    {
      titulo: "A Cerimônia",
      nivel: 1,
      blocos: [
        "Os cinco escolhidos devem se reunir em um mesmo local, cada qual portando um dos sacramentos, e posicionar-se ao redor de um círculo ritualístico. Ao iniciarem a cerimônia, oferecem voluntariamente suas próprias vidas à Rainha Dragão, permitindo que os receptáculos consumam suas essências vitais.",
        { destaque: "O sacrifício das cinco vidas é o combustível e o preço do ritual." },
        "Quando o último indivíduo é consumido, os cinco sacramentos liberam simultaneamente a energia acumulada, estabelecendo uma conexão temporária com Tiamat em Avernus.",
      ],
    },
    {
      titulo: "A Manifestação",
      nivel: 1,
      blocos: [
        "A Rainha Dragão pode então projetar uma fração de seu poder no Plano Material, manifestando sua influência por meio de uma de suas cabeças, de uma descarga de energia dracônica ou de uma intervenção direta sobre os acontecimentos.",
        "A natureza e a intensidade dessa manifestação ficam a critério da própria Tiamat.",
        "O ritual não rompe o Selo de Baator e não permite sua libertação. Apenas oferece à Rainha Dragão uma oportunidade de estender parte de seu poder para além de seu confinamento.",
      ],
    },
    {
      titulo: "O Preço Final",
      nivel: 1,
      blocos: [
        { destaque: "Ao final, os cinco indivíduos estão mortos, suas essências foram consumidas e os Cinco Sacramentos Cromáticos perdem sua capacidade de canalização até serem restaurados." },
        { destaque: "**A LUA SE TORNA VERMELHA CARMESIN.**" },
      ],
    },
  ],
};

export const libertacaoDaRainhaDragao: Documento = {
  slug: "a-libertacao-da-rainha-dragao",
  titulo: "A Libertação da Rainha Dragão",
  tipo: "manuscrito",
  situacao: "destruido",
  autor: "Desconhecida",
  dataNoMundo: "Desconhecida",
  idioma: "Dracônico",
  origem: "Foram encontrados ao longo da campanha em contato com Thialetra Valencrest e Aurelio Malrec.",
  resumo:
    "Instruções para romper o confinamento de Tiamat em Avernus e permitir sua travessia integral até o Plano Material.",
  secoes: [
    {
      titulo: "Os Três Elementos",
      blocos: [
        "Libertar Tiamat de seu confinamento em Avernus exige um ritual de proporções extraordinárias, capaz de romper as restrições planares que impedem sua manifestação no Plano Material.",
        "O processo depende de três elementos fundamentais:",
        {
          lista: [
            "**A Ruptura do Selo de Baator:** remover as restrições que mantêm Tiamat confinada aos Nove Infernos.",
            "**A Máscara da Rainha Dragão:** reunir as cinco essências cromáticas e estabelecer uma conexão entre Tiamat e o Plano Material.",
            "**Uma Fonte Colossal de Energia:** fornecer a força necessária para romper o selo e sustentar a manifestação da Rainha Dragão.",
          ],
        },
        "Sem a combinação desses três elementos, a libertação integral não pode acontecer.",
      ],
    },
    {
      titulo: "I. A Preparação do Ritual",
      nivel: 1,
      blocos: [
        "A execução exige uma estrutura ritualística de grande escala, conduzida por conjuradores e servos de Tiamat.",
        "Os participantes possuem funções distintas:",
        {
          lista: [
            "**Conjuradores arcanos:** responsáveis pela construção e manutenção da estrutura mágica.",
            "**Clérigos e sacerdotes corrompidos:** responsáveis pela canalização de energia divina e profana.",
            "**Servos dracônicos:** responsáveis por fornecer essência dracônica e proteger o local.",
            "**Oficiantes:** responsáveis pela execução dos procedimentos necessários à ativação da Máscara da Rainha Dragão.",
          ],
        },
        "A energia necessária pode ser obtida por meio de sacrifícios e catalisadores mágicos. Entre as fontes mais poderosas estão dragões, campeões divinos, criaturas de grande poder e relíquias antigas.",
        {
          figura: "/images/documentos/ritual-libertacao-tiamat.png",
          alt: "Servos de Tiamat conduzem um ritual ao redor de uma criatura acorrentada com a Máscara da Rainha Dragão.",
          legenda: "Uma criatura forte o suficiente também pode ser utilizada como energia",
        },
        "Tesouros acumulados por eras, sangue de dragões ancestrais e artefatos dracônicos também podem ser utilizados para amplificar a energia reunida.",
        "Quanto maior a fonte de energia, maiores serão as possibilidades de sucesso do ritual.",
      ],
    },
    {
      titulo: "II. A Reunião das Cinco Máscaras",
      nivel: 1,
      blocos: [
        "As cinco Máscaras dos Dragões: Negra, Azul, Verde, Branca e Vermelha devem ser reunidas.",
        "Quando aproximadas, suas essências convergem, restaurando sua forma original: a **Máscara da Rainha Dragão**.",
        "A máscara completa desempenha duas funções indispensáveis:",
        {
          lista: [
            "Reúne as cinco essências cromáticas de Tiamat em um único receptáculo.",
            "Estabelece uma conexão entre o Plano Material e a essência da Rainha Dragão em Avernus.",
          ],
        },
        "Ela funciona como o principal instrumento de canalização do ritual, permitindo que a energia acumulada alcance Tiamat e que sua essência atravesse a barreira planar.",
      ],
    },
    {
      titulo: "III. A Ruptura do Selo de Baator",
      nivel: 1,
      blocos: [
        "Tiamat permanece confinada em Avernus por um aprisionamento metafísico conhecido como **Selo de Baator**.",
        "O selo representa as restrições planares que impedem sua manifestação livre fora dos Nove Infernos.",
        "Sua estrutura está fundamentada em três componentes:",
        {
          lista: [
            "**Vínculo Infernal:** mantém Tiamat vinculada a Avernus.",
            "**Restrição Divina:** impede sua expansão e manifestação irrestrita no Plano Material.",
            "**Âncora de Aprisionamento:** sustenta magicamente as condições de seu confinamento.",
          ],
        },
        "A Máscara da Rainha Dragão deve ser posicionada no centro da estrutura ritualística, enquanto toda a energia acumulada é direcionada contra o selo.",
        "A força canalizada precisa superar as restrições que mantêm Tiamat aprisionada.",
        "Quando o selo finalmente se rompe, as barreiras que impediam sua travessia deixam de existir.",
        "Entretanto, isso não significa que Tiamat já esteja livre: sua essência ainda precisa atravessar a conexão estabelecida pelo ritual.",
      ],
    },
    {
      titulo: "IV. A Travessia de Avernus",
      nivel: 1,
      blocos: [
        "Com o selo rompido, a Máscara da Rainha Dragão estabelece uma passagem entre o Plano Material e Avernus.",
        "Toda a energia restante é direcionada para sustentar essa conexão, permitindo que Tiamat atravesse os planos.",
        "A travessia exige que a estrutura ritualística permaneça íntegra até que sua manifestação seja concluída.",
        "Se a conexão for interrompida antes da conclusão, a passagem poderá colapsar, impedindo a chegada integral da Rainha Dragão.",
      ],
    },
    {
      titulo: "V. A Manifestação da Rainha Dragão",
      nivel: 1,
      blocos: [
        "Quando Tiamat atravessa integralmente a passagem, sua forma física se manifesta no Plano Material.",
        "Sua chegada provoca fenômenos de proporções catastróficas:",
        {
          lista: [
            "Tempestades e alterações climáticas devastadoras.",
            "Terremotos, incêndios e distorções mágicas.",
            "Corrupção da região pela presença dracônica.",
            "Despertar e fortalecimento de criaturas vinculadas aos dragões cromáticos.",
          ],
        },
        "A manifestação integral representa o retorno da Rainha Dragão ao mundo mortal, permitindo que exerça diretamente seu poder e sua influência.",
        "A partir desse momento, sua presença deixa de ser uma ameaça distante e passa a constituir uma realidade para o Plano Material, ou destruir a realidade existente...",
      ],
    },
  ],
};
