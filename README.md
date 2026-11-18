# Campanha RPG

**Um universo além dos dados.**

[![Website](https://img.shields.io/badge/Website-campanharpg.com.br-67247f?style=for-the-badge)](https://campanharpg.com.br)

## Sobre o projeto

A **Campanha RPG** nasceu de uma mesa de RPG entre amigos, construída ao longo de aventuras, histórias, personagens, descobertas e muitas ideias compartilhadas.

Com o passar do tempo, nosso universo cresceu. Surgiram novos personagens, lugares, organizações, criaturas, itens mágicos, sistemas próprios, regras adaptadas e acontecimentos que mereciam ser registrados.

O que começou como uma campanha de RPG passou a se tornar um universo cada vez mais amplo, com uma quantidade crescente de informações que precisavam ser organizadas e preservadas.

Foi assim que surgiu a ideia de criar uma wiki própria.

O **Campanha RPG** é o projeto responsável por reunir tudo isso em um único lugar: um ponto de encontro digital para consultar a história da campanha, conhecer seus personagens, explorar seu universo e compreender as regras que moldam nossas aventuras.

Mais do que um repositório de informações, esta wiki é uma extensão da própria mesa: um espaço para preservar nossa história, facilitar o acesso ao conhecimento e continuar expandindo o mundo que construímos juntos.

## Objetivos

- **Centralização:** reunir documentos, personagens, criaturas, itens, facções, regiões e demais informações da campanha.
- **Organização:** estruturar o conteúdo em páginas independentes, facilitando a consulta e a expansão da wiki.
- **Preservação:** manter registros da história, das decisões e dos acontecimentos importantes da campanha.
- **Documentação:** apresentar regras oficiais, adaptações e sistemas próprios de maneira clara e acessível.
- **Expansão:** permitir que o universo cresça sem perder sua organização ou identidade.

## Tecnologias utilizadas

O projeto utiliza tecnologias modernas voltadas à construção de um site estático, organizado, rápido e de fácil manutenção.

### Aplicação

- [Astro](https://astro.build/) — framework principal para construção e geração das páginas do site.
- [TypeScript](https://www.typescriptlang.org/) — tipagem estática e maior segurança no desenvolvimento.
- [Node.js](https://nodejs.org/) — ambiente de execução utilizado durante o desenvolvimento e os processos de build.
- [Tailwind CSS](https://tailwindcss.com/) — utilitários de estilização e apoio à construção da interface.
- CSS — estilos personalizados, identidade visual e componentes específicos.

### Conteúdo e organização

- **Markdown** — páginas de regras, documentadas em `src/pages/regras-da-casa/`.
- **TypeScript e JSON** — dados estruturados em `src/data/` (personagens, vínculos, sessões, mistérios, venenos, navegação e destaque da home).
- **Zod** — dependência instalada, reservada para validar as futuras Content Collections.
- **Pagefind** — índice de busca gerado no build (`npm run build`).

### Desenvolvimento e qualidade

- **Astro Check** — verificação de tipos (`npm run check`).
- **Planejados (ainda não instalados):** Content Collections, ESLint, Prettier, Vitest e Playwright.

### Infraestrutura e publicação

- [Git](https://git-scm.com/) — controle de versão.
- [GitHub](https://github.com/) — hospedagem do código-fonte e gerenciamento do repositório.
- [Cloudflare Pages](https://pages.cloudflare.com/) — hospedagem e publicação do site.
- [Cloudflare R2](https://www.cloudflare.com/developer-platform/r2/) — armazenamento de arquivos e recursos, quando necessário.

## Arquitetura

A aplicação utiliza Astro com geração de páginas estáticas (SSG — Static Site Generation).

Essa abordagem permite que o conteúdo seja preparado durante o processo de build e publicado como páginas estáticas, reduzindo a necessidade de processamento no servidor durante a navegação.

O conteúdo é mantido diretamente no repositório, utilizando arquivos Markdown, JSON e componentes Astro.

A arquitetura foi pensada para permitir:

- Criação de novas páginas sem necessidade de desenvolver uma estrutura do zero.
- Componentes reutilizáveis para manter consistência visual.
- Separação entre conteúdo, apresentação e lógica.
- Boa performance e carregamento eficiente.
- Facilidade de manutenção e evolução do projeto.


## Estrutura do portal

```
src/
  components/   SiteNav (navbar global), SiteFooter, SectionIntro, SectionHub/HubCard,
                Breadcrumb, FeaturedStory (jornal da home), StatsStrip
  data/         navigation.ts, site.ts, campanha.ts, personagens.ts, vinculos.ts,
                sessoes.ts, misterios.ts, venenos.json
  layouts/      BaseLayout (SEO + navbar + conteúdo), RulesLayout (regras)
  pages/        index, corvonescos/, regras-da-casa/, tipos-de-venenos/, sitemap.xml.ts
  styles/       global.css (tokens) · section.css · site-nav.css · home.css ·
                regras.css · corvonescos.css
```

### Navegação

A navbar é renderizada pelo `BaseLayout`, portanto aparece em **todas** as páginas. Os itens vêm de
`src/data/navigation.ts` (também usado no rodapé). Para publicar uma nova área, adicione o item com
`status: "available"`.

### Página inicial

- **Destaque da campanha** (banner "jornal"): edite `src/data/campanha.ts` (`destaque`). Use `null` para ocultá-lo.
  Inclua apenas o que o grupo já descobriu.
- **Números da campanha**: preencha `estatisticas.sessoesJogadas` e `estatisticas.horasJogadas` em
  `src/data/campanha.ts`. Valores não definidos não aparecem; a faixa só é exibida com pelo menos dois números.

### SEO

- `site` configurado em `astro.config.mjs`; o `BaseLayout` gera título, descrição, URL canônica, Open Graph e Twitter Card.
- Imagem de compartilhamento padrão: `public/images/og/campanha-rpg-og.png` (1200×630).
- `sitemap.xml` gerado por `src/pages/sitemap.xml.ts` e `robots.txt` em `public/`.
- Páginas ainda sem conteúdo (Vínculos e Diário de Bordo vazios) recebem `noindex` e ficam fora do sitemap
  automaticamente; ao cadastrar o primeiro registro elas passam a ser indexadas.
- Breadcrumbs publicam dados estruturados (`BreadcrumbList`) e a home publica `WebSite`.
- Títulos seguem o padrão `Página | Campanha RPG` (o sufixo é adicionado pelo layout).

### Os Corvonescos

Rotas: `/corvonescos/personagens/` (com fichas por slug), `/corvonescos/vinculos/` e
`/corvonescos/diario-de-bordo/` (abas Sessões e Mistérios). Os arrays de vínculos, sessões e mistérios começam
vazios. O filtro reutilizável está em `src/scripts/catalog-filter.ts`.
