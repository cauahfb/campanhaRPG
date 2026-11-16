# Campanha RPG

Portal de referência e memória da campanha. Projeto migrado de uma landing page HTML/CSS para Astro + TypeScript.

## Stack inicial

- Astro: páginas, layouts, rotas e geração estática.
- TypeScript: tipagem e organização.
- Node.js + npm: ambiente de desenvolvimento.
- Tailwind CSS v4: utilitários de estilo, integrado pelo plugin oficial do Vite.
- CSS: identidade visual personalizada preservada da landing page original.
- Zod: validação de dados e metadados.
- Lucide Astro: ícones.
- Pagefind: indexação e pesquisa estática (a integrar nas páginas de conteúdo).
- Cloudflare Pages: hospedagem prevista.
- GitHub: versionamento.

## Requisitos do ambiente

- Node.js LTS compatível com a versão atual do Astro.
- npm (instalado junto com Node.js).
- VS Code recomendado.
- Git recomendado.

Verifique as instalações:

```bash
node --version
npm --version
git --version
```

## Instalação

Na pasta do projeto:

```bash
npm install
```

## Executar localmente

```bash
npm run dev
```

Abra o endereço local exibido no terminal (normalmente http://localhost:4321).

## Verificar e gerar build

```bash
npm run check
npm run build
npm run preview
```

A pasta `dist/` contém o site estático gerado para publicação.

## Estrutura

```text
public/                 Arquivos servidos diretamente
  images/logo/          Emblema oficial
src/
  components/            Componentes reutilizáveis
  layouts/               Estruturas compartilhadas
  pages/                 Rotas do portal
  content/               Conteúdo editorial por área
  scripts/               Scripts auxiliares
  styles/                CSS global e identidade visual
  types/                 Tipos TypeScript compartilhados
tests/                   Testes automatizados (a configurar)
```

## Observações

- A landing page original foi convertida para `src/pages/index.astro`.
- O emblema foi preservado em `public/images/logo/`.
- O CSS original foi separado em `src/styles/global.css`; a aparência inicial foi preservada.
- Ainda não há banco de dados, API ou autenticação no portal principal.
- As coleções de conteúdo, pesquisa Pagefind e testes serão configurados nas próximas etapas.
