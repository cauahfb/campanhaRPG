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

- **Astro Content Collections** — organização e estruturação dos conteúdos.
- **Markdown** — documentação das regras, personagens e demais registros.
- **JSON** — armazenamento de informações estruturadas, como catálogos e dados de entidades.
- **Zod** — validação de estruturas e metadados.

### Desenvolvimento e qualidade

- **ESLint** — análise estática e padronização do código.
- **Prettier** — formatação automática.
- **Vitest** — testes unitários.
- **Playwright** — testes automatizados de navegação e interface.

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


## Fase 2 — Os Corvonescos

Foram adicionadas as rotas:
- `/corvonescos/personagens/` e fichas estáticas por slug;
- `/corvonescos/vinculos/`;
- `/corvonescos/diario-de-bordo/` com abas Sessões e Mistérios.

Os dados ficam em `src/data/personagens.ts`, `vinculos.ts`, `sessoes.ts` e `misterios.ts`.
Os arrays de vínculos, sessões e mistérios começam vazios. O filtro reutilizável está em
`src/scripts/catalog-filter.ts` e aceita grupos independentes de filtros.
