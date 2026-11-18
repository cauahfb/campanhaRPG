export interface Sessao {
  id: string;
  numero: number;
  titulo: string;
  dataSessao: string;
  dataNoMundo?: string;
  resumo: string;
  destaques?: string[];
  locais?: string[];
  personagens?: string[];
  vinculos?: string[];
  misterios?: string[];
  autor?: string;
  marco?: boolean;
}

/**
 * Sem sessões cadastradas inicialmente.
 * Sessões marcadas com marco:true poderão alimentar a futura Crônica da Campanha,
 * sem transformar este diário interno em um registro dos grandes marcos do mundo.
 */
export const sessoes: Sessao[] = [];
