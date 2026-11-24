/**
 * Documentos — a biblioteca da campanha.
 *
 * Livros encontrados (ou destruídos)
 * ao longo da jornada. Para publicar um novo documento, basta adicionar um
 * objeto ao array `documentos`. A listagem, os filtros, a página de leitura
 * de cada item, a contagem no hub do Universo e o sitemap são gerados
 * automaticamente a partir deste arquivo.
 *
 * ATENÇÃO: os registros marcados com `exemplo: true` são apenas demonstrações
 * do formato. Substitua-os (ou apague-os) pelos documentos reais da mesa.
 * Não publique documentos que os personagens ainda não encontraram quando
 * houver risco de spoiler.
 *
 * Livros longos (com capítulos, capa, listas, rituais...) ficam em arquivos
 * próprios dentro de `src/data/livros/` e são importados no array abaixo.
 * Use `secoes` para dividir o texto em capítulos; a marcação inline aceita
 * **negrito**, *itálico*, {{termo}} e [[trecho cifrado]].
 *
 * Músicas (tipo "musica") ficam em `src/data/musicas/`. Elas usam `faixas`
 * (um player por gravação/versão) e a letra vai em `secoes` com um bloco
 * `{ versos: [...] }`. Os arquivos de áudio ficam em `public/audio/musicas/`.
 */

import { grazzt } from "./livros/grazzt";
import { lexiconArcanum } from "./livros/lexicon-arcanum";
import { ergaAlto } from "./musicas/erga-alto";
import { oCorvoAmaldicoado } from "./musicas/o-corvo-amaldicoado";
import { aGrandeJornada } from "./musicas/a-grande-jornada";
import { cantigaDoHerdeiro } from "./musicas/cantiga-do-herdeiro";
import { rezeParaMim } from "./musicas/reze-para-mim";
import { oMimico } from "./musicas/o-mimico";
import { aQuedaDosFalsosDeuses } from "./musicas/a-queda-dos-falsos-deuses";

/** Cada tipo de documento é uma "estante" da biblioteca. */
export type DocumentoTipoId = "livro" | "manuscrito" | "carta" | "musica" | "registro";
export type DocumentoSituacao = "encontrado" | "destruido";
export type DocumentoIcone = "book-open" | "scroll-text" | "mail" | "music" | "stamp";

export interface DocumentoTipo {
  id: DocumentoTipoId;
  /** Nome da estante (plural). */
  nome: string;
  /** Nome do item (singular), usado nos cartões. */
  singular: string;
  descricao: string;
  icone: DocumentoIcone;
}

export const tipos: DocumentoTipo[] = [
  { id: "livro", nome: "Livros", singular: "Livro", descricao: "Tomos, tratados e obras completas.", icone: "book-open" },
  { id: "manuscrito", nome: "Manuscritos", singular: "Manuscrito", descricao: "Diários, anotações e páginas soltas.", icone: "scroll-text" },
  { id: "carta", nome: "Cartas", singular: "Carta", descricao: "Mensagens enviadas, interceptadas ou nunca entregues.", icone: "mail" },
  { id: "registro", nome: "Registros e Decretos", singular: "Registro", descricao: "Éditos, contratos, mapas e papéis oficiais.", icone: "stamp" },
  { id: "musica", nome: "Músicas", singular: "Música", descricao: "Baladas, hinos e cantigas ouvidas pelo caminho.", icone: "music" },
];

export const situacoes: { id: DocumentoSituacao; nome: string; descricao: string }[] = [
  { id: "encontrado", nome: "Encontrado", descricao: "O grupo tem ou teve acesso ao documento." },
  { id: "destruido", nome: "Destruído", descricao: "Destruído, perdido ou deixado para trás." },
];

/**
 * Um bloco de conteúdo dentro de uma seção. Uma string simples é um parágrafo.
 */
export type DocumentoBloco =
  | string
  /** Citação ou epígrafe, com autoria opcional. */
  | { citacao: string; autoria?: string }
  /** Título menor dentro da seção. */
  | { subtitulo: string }
  /** Lista com marcadores. */
  | { lista: string[]; titulo?: string }
  /** Lista numerada (receitas, rituais, procedimentos). */
  | { passos: string[]; titulo?: string }
  /** Versos de orações e poemas, uma linha por item. */
  | { versos: string[]; titulo?: string }
  /** Anotação à margem, feita por outra mão. */
  | { margem: string; rotulo?: string }
  /** Trecho grifado ou de grande peso. */
  | { destaque: string }
  /** Frases de uma língua (ex.: runas) com a tradução. */
  | { frases: { frase: string; sentido: string }[] }
  /** Ilustração (caminho da imagem em /public). */
  | { figura: string; alt: string; legenda?: string }
  /** Glifos de runas com nome e significado. */
  | { runas: { imagem: string; nome: string; sentido: string }[] };

export interface DocumentoSecao {
  titulo: string;
  subtitulo?: string;
  /** 1 = capítulo, 2 = subseção. Sem valor, é uma seção avulsa (prefácio, aviso). */
  nivel?: 1 | 2;
  blocos: DocumentoBloco[];
}

export interface DocumentoFaixa {
  titulo: string;
  /** Caminho em /public, ex.: /audio/musicas/erga-alto/bianca.mp3 */
  arquivo: string;
  /** Linha pequena acima do título do player. */
  rotulo?: string;
  /** Linha abaixo do título, ex.: "Voz de Bianca ShadowBane". */
  subtitulo?: string;
}

export interface Documento {
  /** Usado na URL: /universo/documentos/{slug}/ */
  slug: string;
  titulo: string;
  subtitulo?: string;
  /** id de um tipo acima */
  tipo: DocumentoTipoId;
  situacao: DocumentoSituacao;
  /** Quem escreveu, compôs ou assinou. */
  autor?: string;
  /** Data no calendário do mundo, ex.: "24 de Tarsakh, 1493" */
  dataNoMundo?: string;
  idioma?: string;
  /** Onde e como o grupo encontrou (ou perdeu) o documento. */
  origem?: string;
  /** Sessão em que apareceu, se houver (liga com o Diário de Bordo). */
  sessao?: number;
  /** Texto curto exibido no cartão da listagem. */
  resumo: string;
  /** Texto do documento, um item por parágrafo. */
  texto?: string[];
  /** Capa do livro (imagem em /public). */
  capa?: string;
  /** Documento dividido em capítulos e seções (livros longos). */
  secoes?: DocumentoSecao[];
  /** Ligação opcional com uma página de regras ou outra parte do site. */
  regra?: { titulo: string; href: string };
  /** Gravações da música (tipo "musica"): um player por faixa/versão. */
  faixas?: DocumentoFaixa[];
  /** slugs de /corvonescos/vinculos/ (aliados, especiais...) ligados ao documento. */
  vinculos?: string[];
  /** Conteúdo gerado como rascunho, a ser revisado pela mesa. */
  rascunho?: boolean;
  /** Marca que só se tem um trecho, e não o documento inteiro. */
  fragmento?: boolean;
  /** Observação do escriba sobre o estado do documento. */
  nota?: string;
  locais?: string[];
  /** slugs de /corvonescos/personagens/ relacionados (opcional). */
  personagens?: string[];
  /** Registro de demonstração — remover quando o conteúdo real chegar. */
  exemplo?: boolean;
}

export const documentos: Documento[] = [
  grazzt,
  lexiconArcanum,
  ergaAlto,
  oCorvoAmaldicoado,
  aGrandeJornada,
  cantigaDoHerdeiro,
  rezeParaMim,
  oMimico,
  aQuedaDosFalsosDeuses,
];

export const documentosOrdenados = [...documentos].sort((a, b) => a.titulo.localeCompare(b.titulo, "pt-BR"));

export function tipoPorId(id: DocumentoTipoId): DocumentoTipo {
  return tipos.find((tipo) => tipo.id === id) ?? tipos[0];
}

export function situacaoPorId(id: DocumentoSituacao) {
  return situacoes.find((situacao) => situacao.id === id) ?? situacoes[0];
}

export function documentosDoTipo(id: DocumentoTipoId): Documento[] {
  return documentos.filter((documento) => documento.tipo === id);
}
