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
  edicao: "Nova crônica",
  dataNoMundo: "1 de Flamerule de 1491",
  manchete: "Kiei: A Moeda e os Dois Mortos de Neverwinter",
  subtitulo: "A Moeda de Graz'zt, a morte de Taric WolfGuard e os segredos sob o Carne e Sangue",
  paragrafos: [
    "Em busca de Aiki, Kiei segue uma pista até um bordel de Neverwinter, onde encontra prisioneiros, uma moeda demoníaca e dois homens que não sairão vivos daquela noite.",
    "Uma história de desaparecimento, libertação e consequências que agora passa a integrar os registros de Nemo Dattimare.",
  ],
  link: { label: "Ler a crônica", href: "/universo/cronicas-da-campanha/kiei-a-moeda-e-os-dois-mortos-de-neverwinter/" },
};




export const estatisticas: { sessoesJogadas?: number; horasJogadas?: number } = {
  sessoesJogadas: 64,
  horasJogadas: 336,
};