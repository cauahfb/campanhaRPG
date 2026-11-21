import type { Documento } from "../documentos";

/**
 * Graz'zt: Sob o Véu Negro de Azzagrat — Elminster Aumar, Candlekeep, 1359 DR.
 *
 * Marcação inline dos textos (veja src/scripts/doc-texto.ts):
 *   **negrito** · *itálico* · {{termo}} · [[trecho em glifos corrompidos]]
 *
 * Os trechos [[ ]] reproduzem, como aparecem no livro, as palavras que se
 * embaralham. Eles NÃO foram decifrados de propósito: a chave está no último
 * capítulo, entregue ao Templo de Oghma.
 */
export const grazzt: Documento = {
  slug: "grazzt-sob-o-veu-negro-de-azzagrat",
  titulo: "Graz'zt",
  subtitulo: "Sob o Véu Negro de Azzagrat",
  tipo: "livro",
  situacao: "encontrado",
  autor: "Elminster Aumar",
  dataNoMundo: "1359 DR",
  idioma: "Comum",
  origem: "Estudo escrito em Candlekeep e interditado pela Igreja de Tyr.",
  capa: "/images/documentos/capa-grazzt.webp",
  resumo:
    "O estudo mais perigoso de Elminster sobre o Príncipe de Ébano: sua aparência, seus aliados e inimigos, as origens contraditórias, o culto, os rituais proibidos e como (não) aprisioná-lo.",
  nota:
    "As palavras em glifos instáveis estão reproduzidas como aparecem no livro e não foram decifradas. Segundo o autor, a chave de decifração foi entregue ao Templo de Oghma e não acompanha este exemplar.",
  locais: ["Candlekeep", "Azzagrat", "Abismo"],
  secoes: [
    {
      titulo: "Ao Leitor",
      subtitulo: "Um aviso, não um manual",
      blocos: [
        { citacao: "Ele não conquista com garras. Ele oferece." },
        "Este volume não é um manual. Não é um guia para invocar, negociar ou entender. É um aviso.",
        "Graz'zt, o Príncipe de Ébano, Senhor de Azzagrat, é mais do que um demônio. Ele é desejo feito carne, manipulação vestida de elegância, corrupção disfarçada de oferta. Suas palavras enlaçam, seus pactos envenenam, e aqueles que ousam pronunciar seu nome com reverência... raramente terminam inteiros.",
        "Elminster Aumar, um dos poucos que estudaram Graz'zt e sobreviveram à experiência sem enlouquecer — embora por pouco — revela neste tomo os registros mais perigosos sobre o Senhor das Seis Camadas: suas origens distorcidas, suas guerras veladas e a rede crescente de adoração sutil que contamina Faerûn.",
        "Advertência final, gravada a fogo nesta capa e na alma do leitor:",
        { destaque: "**JAMAIS** faça um pacto com Graz'zt. Não o invoque. Não o busque. E, pelos deuses, não o escute." },
        { figura: "/images/documentos/escudo-tyr.webp", alt: "Escudo azul com uma balança e um martelo de guerra amarrado por uma fita vermelha, símbolo de Tyr.", legenda: "Símbolo de Tyr, pintado na guarda do volume." },
        { citacao: "Este tomo foi interditado pela vontade da Igreja de Tyr. Sua leitura constitui heresia arcana." },
      ],
    },

    // ---------------------------------------------------------------- Capítulo 1
    {
      titulo: "Capítulo 1: O Príncipe do Prazer",
      nivel: 1,
      blocos: [
        "A aparência de Graz'zt é, por natureza, uma ofensa à lógica e uma provocação à pureza dos céus.",
        "Onde outros demônios se revestem de chifres, garras e sangue coagulado, ele veste a própria perdição com elegância.",
        "Sua forma mais conhecida é a de um homem musculoso, altíssimo, **com cerca de 2,70 metros de altura**. Sua pele brilha como **obsidiana polida**, e seus **olhos brilham com luz verde esmeralda.** Ele tem presas amareladas, orelhas pontudas e seis dedos longos decorando cada mão, perfeitos para segurar cálices, adagas... ou vontades alheias.",
        "Ele às vezes é descrito como tendo seis pequenos chifres negros meio escondidos em meio a seu cabelo preto grosso. **Esses traços diabólicos são aparentes, independentemente de qualquer forma que Graz'zt opte por tomar.**",
        "Seus olhos esmeraldinos ardem com uma luz hipnótica — não furiosa como a de outros lordes abissais, mas persuasiva, perigosa e íntima. Olhar para Graz'zt é como escutar uma mentira que se deseja desesperadamente acreditar.",
        "Suas vestes são sempre impecáveis, em estilo arcaico, mas majestoso: mantos bordados com fios de prata, anéis encantados, capas que flutuam como sombra viva.",
        "Jamais se apresenta com selvageria ou brutalidade, **ele é o próprio requinte do horror.**",
      ],
    },
    {
      titulo: "Presença e Aura",
      nivel: 2,
      blocos: [
        "Estar na presença de Graz'zt é como participar de uma dança onde se esquece quem conduz.",
        "O ar se torna mais denso, o tempo parece mais lento, e as palavras, cuidadosamente escolhidas, saem da boca do interlocutor sem sua total permissão.",
        "Sua **aura mistura desejo e medo**, como o calor de uma vela próxima demais da pele.",
        "Muitos o descrevem como “belo”, mas essa palavra é **insuficiente**. Graz'zt é **irresistível.**",
        "Seu poder reside não só na força, mas na **capacidade de fazer os outros desejarem servir, desejar cair.**",
      ],
    },
    {
      titulo: "O Combate com Graz'zt",
      nivel: 2,
      blocos: [
        "Graz'zt, sendo um dos demônios mais poderosos do abismo, possuía uma extensa lista de habilidades comuns e únicas. Ele possuía um vasto repertório de habilidades mágicas à sua disposição, **tão vasto que muitos presumiam que ele fosse um feiticeiro ou mago.** Muitas das habilidades mágicas que Graz'zt tinha à sua disposição baseavam-se, em grande parte, em controlar o campo de batalha, restringindo, dominando e/ou destruindo seus inimigos com eficiência brutal.",
        "Sua magia lhe permitia dominar as mentes dos mortais; dissipar magias poderosas com facilidade; ferir seus inimigos com um miasma de escuridão fortalecido; ou invocar medo intenso com uma palavra e um sorriso irônico.",
        "**Seu feitiço mais poderoso, no entanto, era a capacidade de aprisionar a alma de qualquer ser que desejasse, selando-a em uma gema de sua escolha.**",
        "No entanto, ele não hesitava em lutar a curta distância, pois era igualmente perigoso. Como um tanar'ri, ele era resistente à maioria das formas de energia, **sendo imune especificamente à [[≡L≡†ρι⊂ιD≡†ΛV≡_:≡_:Ɗ≡∇≡∇Ø‡]]**, **além de resistente a [[ƒØGhaØ_:ƒριØ_:≡_:Λ ⊂ιDØ]]**. Ele também ostentava uma potente resistência à magia, tornando os feitiços muito menos eficazes. Ele também ostentava habilidades de **autocura** surpreendentemente eficazes. Ele possuía uma espada bastarda de explosão ácida chamada **“Angdrelve”**, também chamada de **“Wave of Sorrow”**, que corroía a carne de seus inimigos, e uma grande capa de deslocamento que tornava os golpes ainda mais fortes.",
      ],
    },
    {
      titulo: "O Arquiteto do Desejo",
      nivel: 2,
      blocos: [
        "Graz'zt não é apenas um senhor demoníaco, ele é o reflexo das **ambições disfarçadas, dos desejos ocultos e da soberba refinada**. Sua personalidade é composta de camadas: elegância, carisma avassalador, frieza calculada, orgulho insondável e, sobretudo, **paciência**.",
        "Não há ninguém em todo o Abismo que não tenha sido, de alguma forma, testado por Graz'zt — seja por meio de pactos, ameaças veladas ou elogios perigosos. Ele se vê como **superior não apenas aos outros demônios, mas aos próprios deuses.** Sua vaidade, no entanto, não o torna imprudente: ela o move a arquitetar planos com décadas de antecedência.",
        "Seu **carisma é mágico, quase físico**, como um véu que se impõe aos pensamentos. Às vezes tenho a impressão de que os cultistas não apenas o adoram, **eles se apaixonam.**",
      ],
    },
    {
      titulo: "Os Laços do Príncipe Negro",
      nivel: 2,
      blocos: [
        "Se há algo que aprendi sobre Graz'zt, é que suas relações são tão complexas quanto ele mesmo.",
        "Ele não joga dados; ele joga almas, e cada “aliado” ou “rival” é uma peça em seu tabuleiro de xadrez cósmico. Graz'zt **raramente tem aliados no sentido verdadeiro da palavra.** Ele tem ferramentas, peões, ou talvez, com sorte, parceiros momentâneos em suas intrigas.",
        "{{As Seis Lamias e Mariliths (Unhath e Reluhantis):}} Jamais se enganem com a beleza traiçoeira das lamias. Estas seis criaturas poderosas são a sombra constante de Graz'zt, suas confidentes e executoras mais próximas. E as mariliths, Unhath e Reluhantis, servem não apenas como escoltas, mas como generais de sua intrincada burocracia infernal. Sua lealdade é forjada em aço demoníaco, e sua presença é um lembrete constante do poder que emana do Príncipe Negro.",
        "{{Bodaks e Horrores Similares:}} O Palácio de Argent não é apenas um lugar de luxo; é um lar para a perdição. Os Bodaks e outras aberrações rastejam por seus salões, testemunhas silenciosas de suas orgias e maquinações, mantendo a atmosfera de terror e reverência que Graz'zt tanto aprecia.",
        "{{O Império de Azzagrat:}} Tecnicamente, cada demônio que respira (se é que se pode chamar assim) nos domínios de Graz'zt é considerado seu servo leal. Aqueles que ousam provar o contrário, que questionam sua autoridade ou falham em seu propósito, encontram um destino particularmente desagradável: são simplesmente lançados às plantas carnívoras em seus jardins suspensos perfumados. Uma lição eficaz, devo dizer, sobre o custo da deslealdade.",
        "{{Orwantz, o Goristro:}} Este bruto colossal serve como a patrulha de fronteira pessoal de Graz'zt para Azzagrat. Pensem nele como o porteiro mais formidável do Abismo, garantindo que apenas aqueles com a permissão (ou desgraça) do Príncipe Negro entrem ou saiam de seu reino.",
        "{{Rule-of-Three, o Cambion:}} Ah, este é um indivíduo astuto. Rule-of-Three é um cambion que opera nas sombras, um espião e estrategista que se encontra secretamente com outros lordes vis dos Planos Inferiores. Seu objetivo? Conspirar e planejar ataques contra os celestiais. Uma prova da ambição de Graz'zt em perturbar não apenas o Abismo, mas também as esferas mais elevadas.",
        "{{Verin e Ztefano:}} O mais poderoso entre os servos de Graz'zt é o misterioso Verin. Uma criatura de inteligência sobrenatural, Verin é quase humano em sua aparência, mas sua pele pálida e o “lodo espiritual” que constantemente exuda são lembretes de sua natureza demoníaca. Ele é um mestre da transmutação, capaz de mudar de forma à vontade, e frequentemente conjura uma imagem espelhada de si mesmo com pele negra, conhecida como Ztefano. Verin é o mordomo-mor de Graz'zt e seu embaixador-chefe junto aos outros lordes demônios, um diplomata da perversão.",
        "{{Raxivort, o Deus Ladrão:}} Pelo que encontrei, o tal Raxivort chegou a curvar-se como um servo entre as sombras de Graz'zt. Um mero lacaio, talvez. Mas então, a história se turva. Pelo que parece, em um ato de audácia e esperteza traiçoeira, ele ousou tocar o que era proibido. Artefatos de poder incalculável, arrancados das garras do Príncipe Negro. Raxivort tornou-se patrono divino de roedores e morcegos. Comanda até uma horda de goblinoides, os tais xvarts. Uma lembrança incômoda para Graz'zt, de que a ambição pode levar à divindade, mesmo para os vis.",
      ],
    },
    {
      titulo: "Os Inimigos do Príncipe",
      nivel: 2,
      blocos: [
        "Graz'zt não é apenas um mestre em manipular seus servos; ele é virtuoso na arte da inimizade. Sua teia de rivalidades é tão vasta quanto suas ambições.",
        "{{Waukeen, a Deusa da Riqueza e Mercadoria:}} Esta é uma das histórias mais infames de sua crueldade e astúcia. Através de seus próprios esquemas e travessuras, Graz'zt se tornou o principal inimigo de Waukeen. Durante o **Tempo de Perturbações**, a deusa buscou passagem segura por Zelatar, o lar de Graz'zt, em troca de informações sobre um tesouro secreto. Graz'zt prontamente aceitou a barganha, mas a traiu assim que ela chegou ao Abismo. **Ela foi aprisionada em seu Palácio de Argent**, forçada a testemunhar “celebrações profanas” em sua própria honra. O mais sombrio de tudo é o surgimento da Liga dos Cavalheiros de Seis Dedos (ou Seis Anéis), um grupo sinistro que se infiltrou na hierarquia da igreja de Waukeen.",
        "Eles espalharam a **Heresia da Moeda da Prostituta**, alegando que Waukeen estava vendendo pedaços de sua divindade e virtude a Graz'zt para financiar sua igreja, e que sua prisão foi o preço por não pagar suas dívidas. Esses hereges acreditam que Waukeen só se libertou porque finalmente pagou sua dívida, resultando em Graz'zt possuindo a maior parte da divindade de Waukeen. Para eles, adorar Waukeen agora é, na verdade, adorar Graz'zt. Uma manobra diabólica, que corrompe a fé em sua própria essência.",
        "{{Outros Lordes do Abismo:}} Graz'zt trava uma guerra constante com muitos outros lordes do Abismo. Seus conflitos com **Baphomet** e **Yeenoghu** são lendários, choques de poder e filosofia demoníaca. E, graças aos esforços de seu filho, **Athux**, Graz'zt conseguiu derrubar o príncipe demônio **Adimarchus**, que governava Occipitus, a 507ª camada do Abismo. Uma vitória significativa, que demonstra sua capacidade de manipular mesmo sua própria prole para expandir seu domínio.",
        "{{Malcanthet, a Rainha dos Súcubos:}} Ela é a chama que ele usa para se queimar de prazer, e vice-versa. Ele a vê como um reflexo sombrio de sua própria sedução, uma rival digna de seu leito e de suas maquinações. É um balé perigoso de paixão e traição, onde ambos são amantes e mestres na arte de usar o outro. Ele a considera uma peça valiosa, sim, mas nunca, jamais, insubstituível. E ela, creio eu, sente o mesmo.",
        "{{Iggwilv:}} Esta é uma história que me dá arrepios na espinha. Iggwilv, a Bruxa do Pântano, também conhecida como [[ƒASKA]]... um espírito tão livre e perverso quanto o dele. A relação deles não foi uma simples aliança, mas um ciclo vicioso de obsessão mútua. Ele a subjugou com sua paixão distorcida e promessas de poder, e ela, por sua vez, com sua astúcia e magia sem paralelos, o aprisionou nas profundezas. É um ciclo de amor, ódio, dor e poder que se repete através das eras, cada um tentando superar o outro em crueldade e genialidade. É a dança de dois titãs da escuridão, e o resto do multiverso são apenas as testemunhas.",
        "Além disso, **Iggwilv** criou o **Demonomicon of Iggwilv**, que possui informações sobre diversos demônios, incluindo nomes e fraquezas, se atualizando magicamente quando necessário. **O que causou a ira de Graz'zt.**",
      ],
    },
    {
      titulo: "Origem: Mentiras e Sombras",
      nivel: 2,
      blocos: [
        { citacao: "A verdade sobre Graz'zt é como sua própria carne: bela, perfumada, mas inteiramente artificial.", autoria: "E.A." },
        "Poucos ousam buscar a origem do Príncipe de Ébano, e menos ainda permanecem sãos após encontrá-la ou, pior, após serem encontrados por ela. Mas encontrei registros. Fragmentos. Relíquias de vozes silenciadas.",
        "Há duas versões conhecidas, e uma terceira, que jamais deveria ter nome...",
        { subtitulo: "1 – O Diabo Caído – O Senhor que Trocou o Inferno pelo Abismo" },
        "Poucos assuntos me renderam mais olhares atravessados em Candlekeep do que este: a origem de Graz'zt. Já perdi três acessos às prateleiras interditas por insistir em uma teoria considerada “audaciosa” o que, vindo de arcanistas que guardam ovos de dragão como marcadores de página, é um elogio...",
        "A teoria em questão é simples e perigosa: **Graz'zt não nasceu no Abismo. Ele nasceu em Baator, o domínio dos diabos.**",
        "Dizem que foi o favorito de Asmodeus, o mais belo e hábil entre os arquidiabos. Mas beleza que brilha demais acaba por ofuscar o mestre, e a vaidade de **Asmodeus** não é conhecida por tolerar competição. Seja por ambição desmedida, seja por desejar mais do que lhe era permitido, Graz'zt teria sido traído ou banido, lançado às profundezas do Abismo como punição.",
        "Outros textos sugerem algo ainda mais estratégico: que Graz'zt foi enviado ao Abismo como ponta de lança numa campanha da **Guerra Sangrenta**, uma tentativa de estender o domínio infernal sobre os demônios. Liderando legiões diabólicas, ele conquistou três camadas do caos. Mas então... algo aconteceu. O Abismo não o destruiu — **o seduziu.**",
        "Foi corrompido? Libertado? As versões variam. Alguns dizem que percebeu a verdade terrível de Baator: que todo o poder e glória acumulados só serviam, em última instância, para exaltar **uma única criatura: Asmodeus.** Outros dizem que foi tomado por um orgulho irreversível, incapaz de continuar sob o jugo de outro.",
        "E então, onde tudo deveria consumi-lo, ele **resistiu**.",
        "Ao contrário de tantos senhores demoníacos, Graz'zt moldou o caos ao seu redor. Criou palácios, burocracias, embaixadas. Fez de **Azzagrat** um reino de sombras e elegância, perverso e organizado. Ele trouxe ordem ao Abismo e isso, talvez, seja sua maior blasfêmia.",
        "Não é um demônio como os outros. Não nasceu do caos. **Ele sobrevive ao caos. Ele o doma.**",
        "E por isso suspeito que Asmodeus e ele ainda fomentam algum tipo de ódio entre eles.",
        { subtitulo: "2 – A Mentira Coletiva – O Desejo que Ganhou Forma" },
        "A segunda versão não vem de registros antigos, mas dos cultistas e aqui, admito, há algo mais assustador do que mentira: **convicção**.",
        "Segundo eles, Graz'zt **nunca nasceu. Ele sempre foi.** Ele é o reflexo do primeiro desejo egoísta de um mortal. O primeiro olhar cobiçoso. O primeiro toque proibido.",
        { citacao: "Enquanto houver carne que deseja e olhos que mentem, ele retornará." },
        "Nessa visão, **não importa derrotá-lo.** Porque nós o **recriamos todos os dias, sem saber.** Ele é o eco de nossa fraqueza. Um deus menor da beleza corrompida.",
        { subtitulo: "3 – A Terceira Teoria (que não escrevo)" },
        "E a terceira...",
        "Bom... a terceira não pode ser dita. Nem por mim. Nem por você.",
        "Porque se eu a escrevesse aqui, você saberia.",
        "E se você souber... **ele saberá que você sabe.**",
        "E ele virá.",
      ],
    },

    // ---------------------------------------------------------------- Capítulo 2
    {
      titulo: "Capítulo 2: A Guerra do Sangue",
      nivel: 1,
      blocos: [
        { citacao: "A Guerra do Sangue não tem propósito. Ela é o propósito.", autoria: "Fragmento planar extraído de um yugoloth enlouquecido" },
        "A Guerra do Sangue é a mais antiga cicatriz do multiverso. Um conflito cósmico entre dois extremos da perversão: **os diabos de Baator**, senhores da ordem infernal, e **os demônios do Abismo**, encarnações do caos devorador.",
        "**Ela não começou. Ela sempre existiu.**",
        "Os **diabos** lutam por domínio, estrutura e conquista. Os **demônios**, por destruição, anarquia e ruína total. E entre os bilhões de mortos e os planos manchados de sangue... está **ele.**",
        { subtitulo: "O Papel de Graz'zt – O Príncipe que Vira as Peças" },
        "Diferente da maioria dos demônios, **Graz'zt raramente participa diretamente da Guerra do Sangue**. Ele não vê glória em chacinas inúteis, nem proveito em guerras que não pode manipular com elegância. Ele não lidera legiões... ele negocia com os generais.",
        { citacao: "Que os outros se esfaqueiem. Eu possuirei seus tronos quando eles caírem.", autoria: "Declaração atribuída a Graz'zt, durante o Cerco de Pluton, 537 DR" },
        "Em seus palácios negros em **Azzagrat**, Graz'zt constrói alianças com **mercadores yugoloth, cultistas mortais,** e até **nobres diabólicos renegados.** Ele não se importa em qual lado a espada sangra, desde que ele possa escolher para onde o sangue escorre.",
      ],
    },
    {
      titulo: "Graz'zt e a Guerra: Cínico ou Visionário?",
      nivel: 2,
      blocos: [
        "Alguns estudiosos infernais chamam Graz'zt de “**o traidor do Abismo**”, por se recusar a oferecer suas tropas à carnificina. Outros, mais atentos, o chamam de “**o verdadeiro senhor do futuro**”.",
        { versos: ["Porque quando o último general cair,", "Quando os exércitos estiverem em cinzas,", "Aquele que não lutou será o único que restará para governar."] },
        "**Graz'zt não quer vencer a guerra. Ele quer ser a única alternativa à guerra.**",
        { margem: "Quando Graz'zt gargalha, alguém já perdeu. O truque é descobrir {{quem}} antes que perceba que foi você.", rotulo: "Advertência a leitores sensíveis" },
        { subtitulo: "Relatos Planáricos" },
        { citacao: "Vi um diabo e um demônio sentados à mesma mesa. Entre eles, Graz'zt, sorrindo. Ambos morreram dias depois. A cidade deles pertence a ele agora.", autoria: "Qorrik, ex-diplomata yugoloth (últimas palavras antes de se transformar em sal negro)" },
        { citacao: "Orcus o odeia. Demogorgon o teme. O Abismo o envenena, mas ele não sangra.", autoria: "Anônimo, manuscrito queimado de Sigil" },
        { citacao: "Com Graz'zt, a batalha começa quando você o nota e termina quando percebe que ele já sabe o que você deseja.", autoria: "Elminster" },
      ],
    },
    {
      titulo: "O Reino de Azzagrat",
      subtitulo: "As Três Cidades, seus palácios, salões e horrores cotidianos",
      nivel: 2,
      blocos: [
        "Permita-me desfazer uma ilusão recorrente: a de que o Abismo é apenas um oceano de caos flamejante, onde monstros se devoram sem método, sentido ou estilo. **Uma mentira confortável.** Pois em meio a esse pandemônio cósmico, há ordem. Uma ordem perversa, elegante e profundamente mais perigosa que o caos que a cerca.",
        "Estou falando, claro, de **Azzagrat**, o domínio triplo de Graz'zt, Príncipe das Trevas, Lorde da Luxúria, e dono de mais espelhos mágicos do que um colégio de bruxas vaidosas.",
        { subtitulo: "Três Camadas, Três Cidades" },
        "Azzagrat compreende as camadas 45, 46 e 47 do Abismo, fundidas e reorganizadas por capricho e conquista de seu mestre. Cada uma abriga uma cidade distinta, interligadas por portais arcanos, passagens amaldiçoadas e **pactos que não recomendo ler em voz alta.**",
        { subtitulo: "Zelatar – A Jóia de Sangue" },
        "Zelatar é o centro político e econômico do reino. Um labirinto urbano de **torres negras, becos abafados** e **bazares ocultos**, onde mortais e demônios negociam de tudo: armas, segredos, almas e silêncios.",
        "Lá se encontra o imenso [[PraALA∈ιØ_:D≡_:∈ ρtS†AL_:ØBStDtA∇Ø_:ρ≡StD≡∇∈tA _:D≡_:GhaρA≈≈†‡]]. Dizem que o palácio possui seis salões do trono, cada um com um clima, propósito e armadilha distintos porque, segundo o Príncipe, “autoridade deve ser cenograficamente flexível”.",
        "Zelatar é também o lar de embaixadores infernais, drows renegados, e súditos depravados que tratam espionagem como etiqueta básica. Cuidado: até os vinhos de lá mentem.",
        { subtitulo: "Samora – A Cidade do Prazer Quebrado" },
        "Samora é o coração do culto sensorial de Graz'zt. Um lugar onde o **hedonismo** é **institucionalizado** e onde o sofrimento é parte da estética. Há palácios de cristal, salões de festa que duram décadas, e teatros onde os atores realmente morrem no palco repetidamente, se o espetáculo assim exigir.",
        "Ali, o prazer é uma forma de poder, e o desejo, uma arma. Samora não mata com espadas. Mata com convites, promessas e toques que custam séculos. Os que entram sem saber dançar raramente saem andando.",
        { subtitulo: "Yhdriel – A Fortaleza Subvertida" },
        "Yhdriel era, segundo algumas lendas (e alguns manuscritos arrancados de bibliotecas devoradas), uma cidade celestial caída. Graz'zt a tomou e remodelou, preservando estruturas angelicais como moldura para seu poder. Agora, ela serve como centro militar e ritualístico de seu domínio.",
        "Templos negros, arsenais arcanos e fortalezas torcidas compõem a paisagem. Lá, demônios são treinados, torturados e invocados conforme a demanda. Seus portões brilham com runas de contenção, mas não para manter algo dentro. São para prender a sanidade dos que ousam entrar.",
        { subtitulo: "Azzagrat no Cotidiano" },
        "Diferente de outras partes do Abismo, a rotina em Azzagrat existe. Guardas patrulham, burocratas arquivam, e espiões cochicham em cafés interditos. Mas tudo... tudo... serve a Graz'zt. Seu domínio é sustentado por uma estrutura civil que imita os planos legais... e os subverte.",
        "Aqui, um erro de etiqueta pode ser punido com reencarnação forçada. Um elogio mal calculado pode selar um pacto sem retorno. Até o ar parece conter cláusulas ocultas.",
      ],
    },

    // ---------------------------------------------------------------- Capítulo 3
    {
      titulo: "Capítulo 3: A Heresia de Iggwilv",
      subtitulo: "Amor, manipulação e traição entre dois dos seres mais perigosos dos planos",
      nivel: 1,
      blocos: [
        "Permita-me avisar o leitor menos acostumado com a política planar: o que se segue não é uma fábula romântica. É uma guerra disfarçada de desejo, uma conjuração mútua que quase virou pacto, e um lembrete terrível de que até deuses tremem quando dois predadores se apaixonam.",
        "Falo de **Graz'zt**, o Príncipe Sombrio, e de **Iggwilv**, a Rainha das Bruxas. E do que nasceu quando ambos, em um raro momento de vaidade compartilhada, decidiram não destruir um ao outro ainda.",
      ],
    },
    {
      titulo: "Um Encontro Profano",
      nivel: 2,
      blocos: [
        "As versões divergem quanto à primeira vez em que se encontraram. Alguns dizem que Iggwilv **invocou Graz'zt por desejo de poder**. Outros, que **ele a seduziu deliberadamente**, buscando uma aliada mortal com inteligência arcana suficiente para ser útil e perigosa.",
        "O fato é que houve um pacto. Um relacionamento. Um fascínio mútuo. E, por um tempo, uma união. Não de almas, pois ambos são incapazes disso. Mas de intenções e de corpos.",
        "Juntos, eles reescreveram feitiços, domaram horrores extraplanares e conceberam segredos que nenhum dos dois ousou registrar. **Dizem que Graz'zt revelou a Iggwilv nomes verdadeiros de demônios maiores. E que ela lhe ensinou a manipular o próprio fluxo do desejo alheio, como se fosse um rio encantado.**",
      ],
    },
    {
      titulo: "O Filho Que Não Devia Ser",
      nivel: 2,
      blocos: [
        "Dessa união nasceu uma criatura que não deveria existir: **Iuz, O Velho**, o Meio-Demônio, o Semideus Tirano. Uma aberração de ambição e poder, herdeiro de uma linhagem que une a corrupção arcana de Iggwilv com o puro domínio abissal de Graz'zt.",
        "Iuz é uma praga em forma humanoide. Mas o mais assustador é que nenhum dos pais o controla por completo. Talvez por orgulho. Talvez por medo de espelhar-se nele.",
      ],
    },
    {
      titulo: "Traição, Como Estava Profetizado",
      nivel: 2,
      blocos: [
        "Como todo jogo entre predadores, a relação não durou. Graz'zt tentou prender Iggwilv em Azzagrat, mais um troféu para seus salões. Ela o traiu com feitiços selados em pergaminhos de pele de ínfero. Ele respondeu com legiões.",
        "No fim, **ela o aprisionou... um feito que poucos mortais (ou imortais) podem reivindicar**. Prendendo um fragmento de seu poder dentro de uma moeda de ouro. Mas o custo foi profundo. Ela foi banida de várias realidades, caiu em desgraça, e precisou reconstruir seu poder do zero.",
        "Mas nunca se arrependeu. Nem ele.",
      ],
    },
    {
      titulo: "Uma Heresia Que Persiste",
      nivel: 2,
      blocos: [
        "Os clérigos de Graz'zt raramente falam de Iggwilv. Os cultos que a veneram mantêm sua imagem separada, como se tentar fundir os dois fosse provocar a própria ruína.",
        "E, no entanto, há magos que sussurraram um segredo proibido:",
        { versos: ["“Quando a Rainha das Bruxas quiser, o Príncipe Sombrio voltará a ajoelhar.”", "“E quando ele quiser, ela voltará a sorrir.”"] },
        "É heresia, sim. Mas as heresias, como bem sabemos, são só verdades incômodas... com péssimo senso de humor.",
        { margem: "Se algum aprendiz meu for tolo o bastante para tentar “reencenar” tal relação como experimento arcano, saibam: não terei pena. Apenas anotarei os resultados com interesse clínico. — Elminster", rotulo: "Nota pessoal" },
      ],
    },

    // ---------------------------------------------------------------- Capítulo 4
    {
      titulo: "Capítulo 4: Observações Arcanas",
      subtitulo: "Textos contraditórios e inquietantes, marginais e comentados",
      nivel: 1,
      blocos: [
        { citacao: "Graz'zt não é caos. Ele é controle que finge ser caos para enganar o caos. Seus olhos não brilham por fúria demoníaca, mas por cálculo milenar. Ele sorri como quem já ouviu sua dúvida e a memorizou.", autoria: "Elminster" },
        { citacao: "Romântico, como sempre. O Príncipe é uma anomalia, sim, mas controle? Isso é projeção sua, El. Há apenas ilusão de estrutura onde há apenas desejo de dominação total. Ele não ordena: ele curva a realidade em torno de si.", autoria: "Mordenkainen" },
        { citacao: "Eu li as cartas deles. Desejo e propósito eram a mesma coisa. O verdadeiro experimento foi: ‘Quanto se pode amar algo que se quer dominar?’", autoria: "Escritor Desconhecido" },
        { citacao: "Há um espelho no palácio de Graz'zt que não reflete o corpo, mas o potencial corrompido do observador. Vi a mim mesmo, coroado com brasas, sorrindo como ele. Fechei os olhos. O reflexo continuou sorrindo.", autoria: "Filipi" },
        { citacao: "Talvez ele deseje cair. Desde que todos o assistam fazer isso... ajoelhados.", autoria: "Nota final, sem autor identificado, mas escrita com tinta de memória viva" },
      ],
    },

    // ---------------------------------------------------------------- Capítulo 5
    {
      titulo: "Capítulo 5: O Culto de Graz'zt",
      subtitulo: "Prática, Pacto e Profanação",
      nivel: 1,
      blocos: [
        { citacao: "Quem desejar servir ao Príncipe Sombrio com sinceridade é louco. Quem deseja fazê-lo por poder... também é louco. Mas talvez obtenha o que quer — antes de perder tudo que é.", autoria: "Elminster" },
        { margem: "Alguns dos mais eficazes “sussurrantes” são aventureiros. Cuidado com seus companheiros, especialmente os que têm espelhos portáteis, perfumes caros ou itens raros sem razão.", rotulo: "Nota marginal" },
      ],
    },
    {
      titulo: "O Culto na Prática",
      nivel: 2,
      blocos: [
        "O culto de Graz'zt raramente se apresenta como tal. Ele não exige templos: exige **admiração, desejo e influência**. Ele é adorado em bordéis disfarçados de salões arcanos, em cortes corrompidas, em academias mágicas decadentes e em câmaras de tortura com espelhos encantados.",
        { subtitulo: "Hierarquia do Culto" },
        {
          lista: [
            "{{O Espelho}} – o líder local do culto, muitas vezes um nobre, arcanista ou clérigo de influência. Visto como um reflexo de Graz'zt no mundo. Nunca é nomeado em público.",
            "{{As Três Faces}} – três tenentes que representam os aspectos desejados: Beleza, Vontade e Engano. Suas funções são estéticas e cerimoniais, mas perigosíssimas.",
            "{{Os Enredados}} – membros iniciados, sempre em pares ou trios, jamais sozinhos. Realizam pactos, espiam e seduzem novos recrutas.",
            "{{Os Sussurrantes}} – aspirantes e espiões que ainda não foram plenamente aceitos, mas já tiveram suas vontades comprometidas.",
          ],
        },
      ],
    },
    {
      titulo: "Marcas do Culto",
      nivel: 2,
      blocos: [
        "Nenhum símbolo é oficial. Apenas **marcas sensuais, sempre sutis**: uma beleza incomum, olhos que jamais piscam, pele que nunca parece suar.",
        "Em locais consagrados a Graz'zt, é comum o uso de **espelhos negros**, luz suave, incenso de ópio planar e **murmúrios encantados** que sussurram nomes esquecidos.",
        { subtitulo: "Pactos em Salões Nobres" },
        "Os pactos são feitos com **beijos selados com sangue e ouro dissolvido**.",
        "A alma oferecida não é entregue de imediato, mas “**guardada sob promessa**”, o que faz o cultista se considerar ainda livre. Um truque eficaz.",
      ],
    },
    {
      titulo: "Como Cultuar Graz'zt",
      nivel: 2,
      blocos: [
        "Este é um excerto (censurado) do texto apócrifo “**O Toque do Sexto Senhor**”, também conhecido como o manual a ser evitado. Traduzido aqui com comentários de segurança pessoal.",
        { subtitulo: "Prece de Abertura (nunca recitar em voz alta)" },
        { versos: ["“Que o Belo Véu caia sobre minha mente,", "que meu nome se torne reflexo,", "e que os lábios do Príncipe toquem meu destino.”"] },
        { margem: "Recitei isso uma vez. Um espelho da torre quebrou com a voz. Doze dias ouvindo apenas sussurros. Treze noites sonhando com olhos que não eram meus.", rotulo: "Advertência de Elminster" },
        { subtitulo: "Princípios do Culto, segundo os fiéis" },
        {
          lista: [
            "Tudo que é oculto, floresce.",
            "A beleza é a armadura do engano.",
            "A submissão é a verdadeira escolha quando disfarçada.",
            "Nunca diga que cultua Graz'zt. Faça com que o outro deseje fazer isso primeiro.",
            "O prazer é uma ferramenta. O medo, um perfume. A verdade? Um brinquedo.",
          ],
        },
        "O manual ensina a “recrutar com encantamento emocional”. Isso é feitiçaria perversa e ilegal em dezessete reinos civilizados.",
      ],
    },
    {
      titulo: "Orações Sussurradas ao Príncipe Sombrio",
      nivel: 2,
      blocos: [
        { citacao: "Clérigos de Graz'zt não rezam com súplica, mas com insinuação. Suas orações não pedem, oferecem. Cada palavra é uma dança, cada louvor, uma tentação.", autoria: "Elminster" },
        "**As orações a seguir foram encontradas em anotações danificadas e podem conter erros de tradução.**",
        "**Cada estrofe condiz com uma oração individual.**",
        { versos: ["“Que minha beleza esconda meu veneno,", "como tua sombra esconde tua coroa.”"] },
        { versos: ["“Espelho que reflete o que o mundo nega,", "aceita meu desejo como lâmina e véu.”"] },
        { versos: ["“Onde houver controle, que eu espalhe desejo.", "Onde houver ordem, que eu semeie fome.", "Onde houver fé, que eu insinue dúvida em teu nome, meu Senhor.”"] },
        { versos: ["“Três olhos te contemplam, três mentiras eu contarei,", "e se me amarem por elas... saberei que fui ouvido.”"] },
        { versos: ["“Graz'zt, Príncipe dos Seis, beija minha mente antes que ela desperte", "e que, ao despertar, ela só deseje a ti.”"] },
        { versos: ["“Não me dês poder, dá-me fascínio.", "Com ele, tomarei o resto.”"] },
      ],
    },
    {
      titulo: "Rituais Proibidos",
      nivel: 2,
      blocos: [
        { citacao: "Rituais de Graz'zt não são cerimônias barulhentas. São máscaras, jogos, trocas, onde cada gesto esconde um símbolo, e cada toque sela uma servidão.", autoria: "Um fiel após ser interrogado" },
        { subtitulo: "Ritual: O Véu do Espelho" },
        "**Objetivo:** Criar uma ligação mental com o sussurro de Graz'zt para receber visões de poder ou corrupção (normalmente ambos).",
        { titulo: "Ingredientes", lista: ["Um espelho polido com óleo de Sirens", "Sangue do próprio dedo anelar", "Vela usada em uma igreja pura no dia anterior"] },
        {
          titulo: "Passos",
          passos: [
            "Ungir o espelho com o óleo e sangue.",
            "Recitar, suavemente, o verso com a vela acesa próxima ao reflexo.",
            "Inclinar-se e beijar o espelho (**risco alto de possessão**).",
            "Deixar a vela queimar até a chama se apagar sozinha. Isso pode levar minutos ou dias.",
          ],
        },
        "**Resultado:** Visões profanas, nomes secretos, desejos alheios revelados. Também pode causar compulsão por repetir o ritual.",

        { subtitulo: "Ritual: Banquete dos Três Desejos" },
        "**Objetivo:** Invocar um emissário de Graz'zt para selar um pacto menor ou fazer um pedido profano.",
        { titulo: "Ingredientes", lista: ["Uma mesa com três cadeiras e três pratos vazios", "Uma música tocada por instrumento jamais usado", "Um anel de ouro derretido no vinho", "Um nome verdadeiro murmurado em língua abissal"] },
        {
          titulo: "Passos",
          passos: [
            "Dispor os pratos em forma de triângulo.",
            "Brindar três vezes, em silêncio.",
            "Sussurrar o nome verdadeiro no vinho e beber.",
            "Esperar. Se o emissário vier, ele se sentará no terceiro lugar. **Nunca o encare diretamente.**",
          ],
        },
        "**Resultado: Um favor obscuro, que sempre terá um preço.**",
        { citacao: "Eu quebrei duas cadeiras e ainda assim ele veio.", autoria: "E.A." },

        { subtitulo: "Ritual: O Baile dos Véus Ardentes" },
        "**Objetivo:** Conceder charme sobrenatural ao oficiante.",
        {
          titulo: "Requisitos",
          lista: [
            "Um salão de mármore ou obsidiana, iluminado apenas por velas negras flutuantes em tom azul.",
            "Seis dançarinos encantados trajando **apenas véus ou máscaras**.",
            "Um vinho preparado com lágrimas de um ex-amante e pó de prata dissolvido.",
            "Um espelho de água purificada, onde a imagem do oficiante será vista invertida.",
            "Um poema lascivo escrito à mão em pele (natural ou infernal).",
          ],
        },
        { citacao: "Nunca participei desse ritual, tão pouco sei como deve ser feito, mas vi os efeitos em quem o fez. Um deles ficou tão... encantador, que foi executado por dez nobres apaixonados ao mesmo tempo. Por amor. Claro.", autoria: "Elminster" },
        { titulo: "Desenrolar do ritual", passos: [
          "{{Entrada Cerimonial:}} Os dançarinos entram em silêncio, deixando rastros de perfume no chão. Cada passo ativa runas abissais sob os véus translúcidos.",
          "{{Brinde Triplo:}} O oficiante brinda com o vinho preparado, pronunciando três frases em língua abissal: uma de desejo, uma de mentira, e uma de dominação.",
          "{{Declamação do Poema:}} O poema é lido lentamente, com a voz banhada em magia. A cadência é vital. **Um erro, e os véus se incendeiam.**",
          "{{Momento do Espelho:}} O oficiante ajoelha-se diante do espelho de água. Sua imagem distorcida refletirá não ele, mas o que Graz'zt deseja que ele se torne.",
          "{{Selo Final:}} Uma gota de sangue é oferecida no espelho. A água borbulha, e a imagem pisca... se for aceita. **Se não... bem, o salão se fecha por dentro por nove horas.**",
        ] },
        { citacao: "Cultuar Graz'zt é como se apaixonar por um reflexo seu, que ri de você. E, ainda assim, há quem deseje isso mais do que qualquer deidade benigna. Por isso escrevi estas páginas. Para alertar. Ou, ao menos, dificultar.", autoria: "Elminster" },
      ],
    },

    // ---------------------------------------------------------------- Capítulo 6
    {
      titulo: "Capítulo 6: Conclusões",
      nivel: 1,
      blocos: [
        "Não é com garras nem com fogo que Graz'zt destrói, é com palavras suaves, verdades torcidas, e desejos realizados cedo demais. A exposição prolongada à sua presença, doutrina ou culto produz efeitos devastadores:",
        "{{Corrupção Lenta:}} A mente começa a justificar o injustificável. Convicções morais se dobram em nome de pragmatismos encantadores. O culto não começa com uma adoração, mas com um desejo.",
        "{{Loucura Progressiva:}} Os sonhos são invadidos por espelhos distorcidos e vozes de três tons. Realidade e ilusão se confundem. Aos poucos, o nome de Graz'zt escapa dos lábios mesmo sem intenção.",
        "{{Destruição de Vínculos Mortais:}} Familiares, amigos e laços de alma se desfazem. Graz'zt exige exclusividade. O fiel aprende a manipular, trair e descartar, em nome do domínio absoluto.",
        { destaque: "{{Escravidão Espiritual:}} Ao morrer, o devoto de coração rendido não encontra paz. A alma é acorrentada em Azzagrat, adornando o palácio negro como estátua viva, eternamente bela, eternamente consciente." },
      ],
    },

    // ---------------------------------------------------------------- Capítulo 7
    {
      titulo: "Capítulo 7: Como Aprisionar Graz'zt",
      nivel: 1,
      blocos: [
        "Por consenso entre arcanistas e clérigos proibidos: **não há maneira definitiva de aprisionar o Rei das Sombras**. Ainda assim, alguns ousaram teorizar:",
        { subtitulo: "Teorias de Confinamento" },
        "{{Trindade de Vontades:}} Três arcanistas de poder igual ou superior ao de Graz'zt, agindo em perfeita harmonia, poderiam tecer uma malha planar capaz de conter sua essência fragmentada por um tempo. Um deslize emocional de qualquer um — amor, medo ou orgulho — seria sua falha.",
        "{{Nó Rúnico de Sangue:}} Uma combinação de runas antigas entalhadas na carne viva de um sacrifício voluntário. Requereriam o idioma abissal ancestral e a entoação simultânea de 66 coros profanos.",
        "{{Cárcere Refletido:}} Uma prisão dentro do Espelho de Thal'drir, artefato perdido que aprisiona não o ser, mas seu reflexo, impedindo sua manifestação em qualquer plano.",
        { subtitulo: "Custos Impensáveis" },
        { lista: ["Perda da alma.", "Ruptura planar permanente.", "A atenção de Graz'zt voltada a você... e aos seus descendentes."] },
      ],
    },

    // ---------------------------------------------------------------- Extra
    {
      titulo: "Extra: Poemas Sombrios",
      nivel: 1,
      blocos: [
        { versos: ["“Na sombra que fala, um desejo se faz.", "Na chama que dança, um nome se desfaz.", "Três olhos me fitam, três bocas me guiam.", "Oh Graz'zt, meu suspiro, meu rei, minha ruína.”"], titulo: "Canto da Boca Trina" },
        { versos: ["“Se ao sexto passo a dúvida parar,", "No nono espelho ele irá olhar.", "Aquele que vê o que não devia,", "Tornar-se-á parte da simetria.”"], titulo: "Litania de Azzagrat" },
        { versos: ["“Quando as seis luas de sangue arderem em um,", "E a risada de três reis mortos ecoar,", "O portão abrirá, não com chave,", "Mas com o beijo de um traidor.”"], titulo: "Profecia das Portas Quebradas" },
        "Este capítulo não foi escrito para invocar, mas para advertir.",
        "Se você chegou até aqui e ainda considera fazer um pacto com Graz'zt, lembre-se:",
        { destaque: "“Ele nunca mente. Mas também nunca diz tudo.”" },
        "Os que desejam poder por meio de seu nome, tornam-se eco dele. E não há espelho que mostre o que foi perdido até que já seja tarde demais.",
      ],
    },
    {
      titulo: "Aviso",
      nivel: 1,
      blocos: [
        "Se seus olhos alcançaram estas palavras, a marca já está feita.",
        "O eco do seu nome agora existe em Azzagrat.",
        { destaque: "Não diga que não foi avisado." },
      ],
    },
    {
      titulo: "Leia se as palavras ficaram confusas",
      nivel: 1,
      blocos: [
        "Conforme fui escrevendo o livro, percebi que as letras se movem, quase como se tivessem vida própria.",
        "Aos poucos consegui montar, pelo menos momentaneamente, uma forma de decifrar essas mudanças.",
        "Mas, quanto mais eu reparo no livro, mais conectado com **ele**, eu me sinto...",
        "Então, para evitar que **ele** interfira novamente, irei entregar esse pergaminho com as informações para o Templo de Oghma.",
      ],
    },
  ],
};
