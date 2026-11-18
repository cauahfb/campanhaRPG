export interface DestaqueCampanha {

  periodico: string;
  edicao: string;

  dataNoMundo: string;
  manchete: string;
  subtitulo: string;
  paragrafos: string[];

  link?: { label: string; href: string };

  imagem?: { src: string; alt: string };
}

export const destaque: DestaqueCampanha | null = {
  periodico: "Destaque da Campanha",
  edicao: "Edição extraordinária",
  dataNoMundo: "24 de Tarsakh, 1493",
  manchete: "A Queda da Cidade das Velas",
  subtitulo: "Luskan sucumbe depois que as divindades locais desaparecem sem deixar rastro",
  paragrafos: [
    "Com o misterioso sumiço das divindades locais, Luskan mergulhou em degradação. A fome e a miséria, que pareciam coisa do passado, voltaram às ruas, e uma população sem amparo e sem respostas não soube lidar com a crise.",
    "E os capitães? Já não havia marinheiros para defendê-los.",
  ],
};

/**
 * Números da campanha exibidos na home.
 * Preencha manualmente; valores não definidos não aparecem (nada é inventado).
 * Exemplo: { sessoesJogadas: 42, horasJogadas: 168 }
 */
export const estatisticas: { sessoesJogadas?: number; horasJogadas?: number } = {
  sessoesJogadas: 64,
  horasJogadas: 336,
};