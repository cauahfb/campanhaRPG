export type MisterioAberto = {
  id: string;
  pergunta: string;
  status: "aberta";
  pistas?: string[];
  sessaoSurgiu?: number;
  personagens?: string[];
  vinculos?: string[];
};

export type MisterioRespondido = {
  id: string;
  pergunta: string;
  status: "respondida";
  pistas?: string[];
  resposta: string;
  sessaoSurgiu?: number;
  sessaoResposta?: number;
  personagens?: string[];
  vinculos?: string[];
};

export type Misterio = MisterioAberto | MisterioRespondido;


export const misterios: Misterio[] = [];
