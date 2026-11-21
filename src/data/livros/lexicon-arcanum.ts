import type { Documento } from "../documentos";

/**
 * Lexicon Arcanum: A Arte das Runas — Arquimago Filipi, 3492 NR.
 *
 * Marcação inline dos textos (veja src/scripts/doc-texto.ts):
 *   **negrito** · *itálico* · {{termo}} · [[trecho em glifos corrompidos]]
 *
 * Complemento das regras da casa: /regras-da-casa/runomancia/
 */
export const lexiconArcanum: Documento = {
  slug: "lexicon-arcanum-a-arte-das-runas",
  titulo: "Lexicon Arcanum",
  subtitulo: "A Arte das Runas",
  tipo: "livro",
  situacao: "encontrado",
  autor: "Arquimago Filipi",
  dataNoMundo: "3492 NR",
  idioma: "Comum (traduzido do netherês)",
  origem: "Tradução selada pelo Círculo de Preservação Rúnica de Netheril.",
  capa: "/images/documentos/capa-lexicon-arcanum.webp",
  resumo:
    "Fragmentos autênticos da Linguagem das Runas da era de Netheril: como montar uma Frase Mágica, o que cada partícula faz, o preço de falar e os experimentos de quatro aprendizes.",
  nota:
    "Não é um grimório de iniciantes. Os autores avisam que ler, pronunciar ou copiar as frases sem preparo pode causar fadiga espiritual, colapsos mentais ou conjurações acidentais.",
  locais: ["Netheril", "Abeir-Toril"],
  regra: { titulo: "RunoMancia — Regras da Casa", href: "/regras-da-casa/runomancia/" },
  secoes: [
    {
      titulo: "Aviso ao Leitor",
      blocos: [
        "Este volume contém fragmentos autênticos do conhecimento arcano preservado da era de Netheril, extraídos e traduzidos com extremo cuidado. Seu conteúdo trata da manipulação direta da realidade por meio da Linguagem das Runas.",
        "Ler, pronunciar ou copiar as frases contidas neste tratado sem o devido preparo mental e proteção rúnica pode ocasionar fadiga espiritual, colapsos mentais ou conjurações acidentais.",
        { destaque: "Não é um grimório de iniciantes." },
        { citacao: "Manuseie com sabedoria. Estude com respeito. Fale apenas se tiver Intenção." },
        { citacao: "Traduzido do original netherese, selado no 3492º ano da Ascensão de Netheril, por mãos que sobreviveram ao silêncio dos enclaves." },
      ],
    },
    {
      titulo: "Introdução",
      nivel: 1,
      blocos: [
        "A **Magia Rúnica** é considerada por muitos estudiosos da Trama como uma das primeiras manifestações conscientes de manipulação arcana surgidas em **Abeir-Toril**, possivelmente anterior até mesmo às primeiras formulações élficas ou dracônicas.",
        "Enquanto as escolas arcanas modernas dividem a magia em categorias como Evocação, Ilusão ou Transmutação, a Arte Rúnica **ignora essas divisões** e **atua de forma mais crua e fundamental.** Ela não utiliza gestos ou componentes, mas palavras, palavras que contêm em si o eco do próprio nascimento do mundo.",
        "Cada runa carrega em si um conceito puro, uma ideia imutável. Ao combinar essas runas em uma Frase Mágica, o **Orador não está pedindo que a magia ocorra, ele está dizendo ao mundo como deve ser**. É uma declaração de intenção tão poderosa que a própria Trama precisa se ajustar para obedecê-la.",
        "Por isso, a Magia Rúnica não “conjura feitiços” no sentido tradicional. **Ela impõe uma mudança**, como quem escreve sobre o tecido do real com uma pena feita de vontade. Essa prática, no entanto, exige mais do que estudo. **Exige disciplina mental, força de espírito, e respeito pelas palavras.**",
      ],
    },
    {
      titulo: "A Estrutura da Frase",
      nivel: 1,
      blocos: [
        "Para moldar a realidade por meio das Runas, é necessário construir uma **Frase Mágica**. Essa frase deve ser **proferida com clareza e convicção**, pois não é a força da voz que comanda, mas a **força da Intenção**. A Frase Mágica é composta por **Partículas**, que são agrupadas em três categorias básicas:",
        {
          lista: [
            "{{Função:}} Determina o que a magia fará.",
            "{{Objeto:}} Determina o que será afetado.",
            "{{Características:}} Refinam o efeito, especificando detalhes como elemento, forma, intensidade, direção ou outros aspectos.",
          ],
        },
        "Na linguagem rúnica, a **Função e o Objeto se unem em uma só palavra**. Por exemplo:",
        { destaque: "ET (Controlar) + IVI (Pessoa) = ETIVI" },
        { subtitulo: "Exemplo simples" },
        { frases: [{ frase: "ETIVI", sentido: "Controlar Pessoa" }] },
        "Uma ordem simples: caminhar, soltar um objeto, revelar um segredo. **Tudo dependerá da Intenção do Orador.**",
        { subtitulo: "Exemplo com Característica" },
        { frases: [{ frase: "EVELI QUAN", sentido: "Invocar Elemento Água" }] },
        "Essa frase pode fazer chover, encher um copo, ou criar uma lâmina de água. **A intenção dá forma às palavras.**",
      ],
    },
    {
      titulo: "Partículas Avançadas",
      nivel: 1,
      blocos: [
        "Para ampliar os efeitos de uma Frase Mágica, o Orador pode incluir **Runas Especiais**:",
        {
          lista: [
            "{{MOR}} — Maior. Amplia grandemente o alcance ou intensidade. *Ex.: chuvas em uma cidade inteira.*",
            "{{MIN}} — Menor. Reduz o efeito para detalhes sutis ou ilusões fracas. *Ex.: apenas um pequeno estalo longe ao vento.*",
            "{{SAN}} — Forma: Círculo. Altera o formato da invocação ou do efeito para uma redoma. *Ex.: cria um círculo ou redoma de Terra.*",
            "{{SAR}} — Forma: Parede. Gera um efeito plano, como uma barreira. *Ex.: cria uma parede ou linha de chamas; ou protege uma parede contra objetos em alta velocidade.*",
            "{{SIN}} — Forma: Objeto. Molda o efeito como um item específico. *Ex.: fazer com que o brilho de uma lâmpada assuma uma forma específica.*",
          ],
        },
        "Assim é possível utilizar várias frases para **criar um só efeito**, como por exemplo:",
        { destaque: "INVOCAR ELEMENTO ÁGUA // CRIAR CORPO MAIOR // CONTROLAR MENTE CRIATURA //" },
        "Usando essa semântica podemos invocar um elemental de água sob o nosso controle, **mas isso é um feito para poucos, visto que uma palavra errada e você pode acabar totalmente destruído.** Ou, em uma frase só, para um **FELINO ELÉTRICO**:",
        { destaque: "Invocar Animal Corpo Eletricidade" },
      ],
    },
    {
      titulo: "Níveis de Complexidade",
      nivel: 1,
      blocos: [
        "Os efeitos gerados por Frases Mágicas variam conforme a Complexidade da Intenção. Classificam-se em:",
        {
          lista: [
            "{{Trivial}} – Pequenos efeitos cotidianos: aquecer um líquido, iluminar levemente um quarto.",
            "{{Regular}} – Ações simples com impacto: deslocar objetos, empurrar uma pessoa, invocar um pouco de vento.",
            "{{Difícil}} – Efeitos potencialmente perigosos: criar chamas, fazer a terra tremer, cegar temporariamente.",
            "{{Complexa}} – Efeitos intensos e amplos: controlar a mente de um guerreiro, manter uma muralha de gelo.",
            "{{Milagre}} – Efeitos cataclísmicos: abrir o mar, transformar dia em noite, invocar um espírito ancestral.",
          ],
        },
      ],
    },
    {
      titulo: "O Custo da Palavra",
      nivel: 1,
      blocos: [
        "**Toda magia cobra um preço, e as runas não são exceção.** O uso excessivo das Runas desgasta corpo e mente. Normalmente, **a cada duas Runas** usadas em um mesmo ciclo de sol, o Orador costuma sentir um cansaço extremo, um peso invisível que embota os sentidos e prejudica o raciocínio. Mas **dependendo do efeito causado, o cansaço pode ser maior ou menor.**",
        "Um Orador exausto pode perder a capacidade de entoar Frases com precisão, ou **até mesmo morrer.**",
      ],
    },
    {
      titulo: "O Conhecimento Rúnico",
      nivel: 1,
      blocos: [
        "A Arte Rúnica **não está** ao alcance apenas dos magos. Qualquer um com conhecimento suficiente pode estudá-la. No entanto, aqueles que se dedicam à Proficiência Rúnica possuem dons especiais:",
        {
          lista: [
            "**Entoam Runas com a voz apenas**, sem a necessidade de gravá-las em superfícies.",
            "**Gravam Runas em objetos**, tornando-os catalisadores que até leigos podem ativar.",
            "**Ignoram os efeitos da Fadiga**, podendo entoar diversas Frases em um único dia sem pagar o preço comum.",
          ],
        },
      ],
    },
    {
      titulo: "Conclusão",
      nivel: 1,
      blocos: [
        "A Magia das Runas é tanto ferramenta quanto arma. Suas palavras moldam o mundo, mas também testam os limites do Orador. Cabe a cada estudioso decidir se deseja trilhar este caminho de sabedoria e poder, com responsabilidade.",
        { citacao: "A palavra dita não se desfaz. Uma vez entoada, a Trama escuta.", autoria: "Arquimago Filipi, Círculo de Preservação Rúnica de Netheril, 3492 NR" },
      ],
    },
    {
      titulo: "As Runas",
      nivel: 1,
      blocos: [
        "Separei essa sessão para ensinar meus alunos sobre as runas: **EVIRO LUM**. Intenção: criar uma aura de luz ao meu redor.",
        {
          runas: [
            { imagem: "/images/documentos/runa-ev.png", nome: "EV", sentido: "Função: Criar / Invocar" },
            { imagem: "/images/documentos/runa-iro.png", nome: "IRO", sentido: "Objeto: Aura" },
            { imagem: "/images/documentos/runa-lum.png", nome: "LUM", sentido: "Característica: Luz" },
          ],
        },
      ],
    },
    {
      titulo: "Tentativas Básicas",
      nivel: 2,
      blocos: [
        "O que cada aluno tentou:",
        { subtitulo: "Morgana" },
        { lista: ["{{Alora}} (Alterar Vegetação): fazer uma macieira dar laranjas ao invés de maçãs.", "{{Evali}} (Invocar Animais): invocar um cavalo."] },
        { subtitulo: "Eclif" },
        { lista: ["{{EMIVI}} (Empoderar Pessoa): fazer uma pessoa forte fisicamente.", "{{AMEXA}} (Proteger Inanimado): endurecer um espelho para que ele não seja facilmente quebrado."] },
        { subtitulo: "Emir" },
        { lista: ["{{Etimu}} (Controlar Mente): forçar uma pessoa a dizer algo.", "{{Itazi}} (Transportar Informação): enviar uma mensagem diretamente para a mente de alguém."] },
        { subtitulo: "Meruem" },
        { lista: ["{{Inani}} (Enfraquecer Alma): tornar a alma da pessoa mais frágil, fazendo-a ficar mais suscetível a efeitos mágicos.", "{{Anivi}} (Restaurar Pessoa): curar os ferimentos de alguém."] },
        { margem: "Hoje descobrimos que algumas runas podem ser ativadas à distância, desde que você possa vê-las e esteja a até 18 m delas.", rotulo: "Descoberta do dia" },
      ],
    },
    {
      titulo: "Tentativas Avançadas",
      nivel: 2,
      blocos: [
        "O que cada aluno tentou:",
        { subtitulo: "Morgana" },
        { lista: ["{{Alora Lum}} (Alterar Vegetação Luz): fazer as folhas de uma árvore começarem a brilhar.", "{{Evali Phys Triz}} (Invocar Animal Corpo Eletricidade): invocar um tigre feito totalmente de eletricidade."] },
        { subtitulo: "Eclif" },
        { lista: ["{{Amexa Impe}} (Proteger Inanimado Armas): fazer um escudo repelir outras armas que batam contra ele.", "{{Emeli Ig Ast}} (Empoderar Elemento Fogo Velocidade): acelerar a velocidade de queima do fogo em um alvo."] },
        { subtitulo: "Emir" },
        { lista: ["{{Etimu Ocul Tum}} (Controlar Mente Visão Movimento): fazer o alvo ver as coisas se movimentando de forma turva.", "{{Itala Bhas}} (Transportar Abstrato Emoção): fazer uma pessoa sentir o que a outra está sentindo."] },
        { subtitulo: "Meruem" },
        { lista: ["{{Inivi Hen}} (Enfraquecer Pessoa Sangue): fazer uma pessoa desmaiar, ao fazer seu sangue correr mais devagar.", "{{Anora Tox}} (Restaurar Vegetação Veneno): remover venenos e toxinas de uma planta venenosa."] },
      ],
    },
  ],
};
