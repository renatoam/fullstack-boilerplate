# Just Digital - Desafio Front-End

Aplicação criada como teste para o processo seletivo da Just Digital. A aplicação é desenvolvida com React, utilizando o NextJS como framework.

## Executando a aplicação

- Instalar as dependências com **yarn** ou **npm install**
- Iniciar o ambiente de desenvolvimento com **yarn dev** ou **npm run dev**

Para commitar, executar **git commit** e seguir o wizard

## Principais ferramentas de desenvolvimento

As ferramentas de desenvolvimento iniciais instaladas são os linters, git flow e styled components, e como design system, vou usar o Material UI. Para extensão da quantidade de ícones, caso necessário, será usado o Font Awesome.

### Linters

- ESLint + Prettier: para ajudar no desenvolvimento, destacando erros de sintaxe, concordância ou pequenos erros, o ESLint é um grande aliado. Também é usado o Prettier que ajuda na identação do código e geralmente relacionamos as duas ferramentas, pois são muito poderosas juntas, é o caso aqui. Apesar de ter algumas regras já estabelecidas pelos pacotes que instalamos junto, eu gosto de colocar algumas regras próprias também.

- Commitlint + Commitzen: o Commitlint é uma excelente ferramenta que avalia a mensagem de commit definida pelo dev, mas nem sempre lembramos todas as regras e convenções\* definidas, por isso usamos o Commitzen, que serve como um "wizard", no qual só precisamos ir escolhendo as opções que ele fornece e no final gera uma mensagem coesa e padronizada (que obviamente é aprovada pelo Commitlint).

\*: as mensagens de commit são baseadas no [Conventional Changelog](https://github.com/conventional-changelog)

### Styled Components

O Styled Components é uma ferramenta muito boa para utilização de CSS-in-JS. Eu optei por usar o SC, pois acho mais fácil de usar do que a ferramenta built-in do Next e porque não preciso instalar mais nada pra funcionar, como eu teria que fazer para usar arquivos sass no projeto. Além disso, a síntaxe que usamos com Styled Components é a do Sass e pra trabalhar com SSR, a configuração também é muito simples (a Vercel tem um exemplo pronto no repo deles).

### Git Flow

Assim como o Commitzen, o Git Flow serve como uma forma de facilitar o trabalho de seguir padrões quando se trabalha com Git. É perfeitamente possível trabalhar da forma padrão e com o Git Flow ao mesmo tempo. Ele é especialmente útil para desenvolvedores iniciantes ou como uma forma de agilizar o trabalho, e é por isso que está sendo usado nesse projeto.

### Material UI

O Material UI foi escolhido por ser bem conhecido e por ser bem completo. Além disso, ele é fácil de usar e integrar no projeto e possui um próprio sistema de estilização de componentes, que é muito útil em determinados momentos.

### Font Awesome _(se necessário)_

A princípio, será usado o próprio pacote de ícones do Material UI, porém, se for necessário a adição de mais ícones, será usado o Font Awesome, que foi escolhido por ser bem completo, ter forte presença no mercado e por ter integração fácil com o Material UI.

## Outras ferramentas

### Editor Config

Para todos os colaboradores ficarem na mesma página no que tange a indentação, configurações do editor, etc., o projeto possui um arquivo (.editorconfig) com um padrão para as configurações do editor, que padroniza as opções independente do editor escolhido.

Há também um arquivo de configuração específico para o VS Code (.vscode/settings.json) e um pacote de snippets\*\* para facilitar no desenvolvimento em arquivos JS e JSX.

\*: Se você usa o Code, o arquivo .editorconfig pode ser gerado pela extensão "EditorConfig for VS Code".
\*\*: pequenas palavras que usamos no código que o Code transforma em um trecho de código completo.

### Next Image + Inline React SVG

Com o next-image, podemos importar e utilizar imagens dentro do nosso código, independente de onde salvamos as imagens. Sem ele, só é possível usar imagens que venham da pasta /public, que não permite muitas otimizações.

Quanto ao Inline React SVG (babel-plugin-inline-react-svg), ele transforma nossa referência a um arquivo com extensão .svg em um código svg (html-like) propriamente dito.

## Change Logs

Os change logs (CHANGELOG.md) serão baseados nos padrões do projeto [Keep a Changelog](https://github.com/olivierlacan/keep-a-changelog/blob/master/CHANGELOG.md), que assim como o versionamento do projeto é baseado no [Semantic Versioning - SemVer](https://semver.org/lang/pt-BR/).

## Estrutura de pastas

Apesar do design system escolhido ser o Material UI, a organização de componentes será baseada no design system do Pinterest, a Gestalt. Eu acredito que a forma como são organizados os componentes nesse sistema atende bem a maioria dos projetos com React, porque é flexível e em relativo em algum nível, o que permite liberdade no que tange a ter que decorar um padrão.

---

[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
