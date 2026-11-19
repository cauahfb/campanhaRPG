export type VinculoTipo = "aliado" | "inimigo" | "especial";

export interface Vinculo {
  slug: string;
  nome: string;
  imagem?: string;
  tipo: VinculoTipo;
  papel: string;
  descricao?: string;
  ligadoA: string[];
  npcSlug?: string;
  spoiler?: boolean;
}


export const vinculos: Vinculo[] = [];
