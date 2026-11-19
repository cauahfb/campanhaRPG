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






export const sessoes: Sessao[] = [];
