/**
 * Utilitários de texto dos documentos.
 *
 * Marcação inline aceita nos textos de `documentos.ts`:
 *   **negrito**      → ênfase do escriba (trechos grifados em tinta mais forte)
 *   *itálico*        → itálico
 *   {{termo}}        → nome próprio ou título de verbete (destacado em latão)
 *   [[cifrado]]      → palavra corrompida, grafada em runas/glifos instáveis
 * Todo o resto é escapado, então é seguro escrever < > & nos textos.
 */
import type { Documento, DocumentoBloco } from "../data/documentos";

const escapar = (valor: string) =>
  valor.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

export function formatarInline(texto: string): string {
  return escapar(texto)
    .replace(/\[\[(.+?)\]\]/g, '<span class="doc-cifra" title="Trecho em glifos instáveis">$1</span>')
    .replace(/\{\{(.+?)\}\}/g, '<span class="doc-termo">$1</span>')
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    .replace(/\*(.+?)\*/g, "<em>$1</em>");
}

/** Remove a marcação inline, deixando apenas o texto (usado na busca). */
export function semMarcacao(texto: string): string {
  return texto.replace(/\[\[(.+?)\]\]/g, "").replace(/\{\{(.+?)\}\}/g, "$1").replace(/\*\*(.+?)\*\*/g, "$1").replace(/\*(.+?)\*/g, "$1");
}

export function textoDoBloco(bloco: DocumentoBloco): string[] {
  if (typeof bloco === "string") return [semMarcacao(bloco)];
  if ("citacao" in bloco) return [semMarcacao(bloco.citacao), bloco.autoria ?? ""];
  if ("subtitulo" in bloco) return [semMarcacao(bloco.subtitulo)];
  if ("lista" in bloco) return [bloco.titulo ?? "", ...bloco.lista.map(semMarcacao)];
  if ("passos" in bloco) return [bloco.titulo ?? "", ...bloco.passos.map(semMarcacao)];
  if ("versos" in bloco) return [bloco.titulo ?? "", ...bloco.versos.map(semMarcacao)];
  if ("margem" in bloco) return [semMarcacao(bloco.margem)];
  if ("destaque" in bloco) return [semMarcacao(bloco.destaque)];
  if ("frases" in bloco) return bloco.frases.flatMap((item) => [item.frase, item.sentido]);
  if ("figura" in bloco) return [bloco.legenda ?? ""];
  if ("runas" in bloco) return bloco.runas.flatMap((runa) => [runa.nome, runa.sentido]);
  return [];
}

/** Todo o texto pesquisável de um documento. */
export function textoPlano(documento: Documento): string[] {
  return [
    ...(documento.texto ?? []).map(semMarcacao),
    ...(documento.secoes ?? []).flatMap((secao) => [secao.titulo, secao.subtitulo ?? "", ...secao.blocos.flatMap(textoDoBloco)]),
  ].filter(Boolean);
}

export function idDaSecao(indice: number): string {
  return `secao-${indice + 1}`;
}
