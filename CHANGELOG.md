# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added

- Error Boundary global

### Changed

- Added unreleased section on Changelog
- Added ToDo section on Readme

## [0.0.1] - 2021-03-01

### Added

- Creating project using Create Next App
- Installing and configuring linters
- Installing and configuring styled components
- Creating folder structure
- Creating searching, filtering and cart modules
- Applying responsiveness
- Configuring branches using Git Flow pattern
- Configuring prettier and commitzen

---

## To do

Tarefas a implementar para melhorar o código, a UX e a performance geral da aplicação.

### Geral

- Corrigir os bugs na versão atual
- Mudar o layout para um tema genérico (cores e imagens)
- Gerar uma tag
- Fazer deploy na Vercel

### Documentação

- Traduzir seção To Do para o inglês
- Atualizar Readme com as informações mais novas e remover referências a alguma empresa

### Patterns

- Aplicar classes para chamadas api (que faltam) e filtragens
- Verificar onde dá pra usar HOC
- Aplicar Typescript
- Aplicar a estrutura de Axios do CRED
- Verificar os padrões do CRED
- Verificar os padrões do [Landy React Template](https://github.com/Adrinlol/landy-react-template)
- Aplicar Code Splitting*
  - Usar Dynamic Imports (se fosse só client-side, usaria React.lazy com Suspense)
  - Verificar a necessidade de Error Boundaries mais específicos
- Implementar Storybook

### User Experience

- **Performance**:
  - Aplicar uso do React Query (cachear requisições e melhorar a busca de dados)

- **Feeback**:
  - Adicionar Nprogress
  - Aplicar a estrutura de notificações do CRED (usar alguma snackbar)
  - Implementar Skeleton/Shimmer Loading [Link de Shimmer com css puro se for preciso](https://rishi-raj-jain.github.io/snippet/Adding%20shimmer%20css%20(loading%20css)%20into%20your%20Next.js%20project)

- **Acessibilidade**:
  - Aplicar padrões de acessibilidade
  - Adicionar modais e popups usando Portal (ler sobre a acessibilidade envolvida)

- **Responsividade**:
  - Verificar se vale a pena transformar em PWA (service worker, manifest.json)
