# Juntos Somos Mais - Desafio Front-End

Aplicação criada como teste para o processo seletivo da Juntos Somos Mais. A aplicação é desenvolvida com React, utilizando o NextJS como framework.

## Ferramentas de desenvolvimento

As ferramentas de desenvolvimento iniciais instaladas são os linters, git flow e styled components, e como design system, vou usar o Material UI. Para ícones, Font Awesome.

### Linters

- ESLint + Prettier: para ajudar no desenvolvimento, destacando erros de sintaxe, concordância ou pequenos erros, o ESLint é um grande aliado. Também é usado o Prettier que ajuda na identação do código e geralmente relacionamos as duas ferramentas, pois são muito poderosas juntas, é o caso aqui. Apesar de ter algumas regras já estabelecidas pelos pacotes que instalamos junto, eu gosto de colocar algumas regras próprias também.

- Commitlint + Commitzen: o Commitlint é uma excelente ferramenta que avalia a mensagem de commit definida pelo dev, mas nem sempre lembramos todas as regras e convenções definidas, por isso usamos o Commitzen, que serve como um "wizard", no qual só precisamos ir escolhendo as opções que ele fornece e no final gera uma mensagem coesa e padronizada (que obviamente é aprovada pelo Commitlint).

### Styled Components

O Styled Components é uma ferramenta muito boa para utilização de CSS-in-JS. Eu optei por usar o SC, pois acho mais fácil de usar do que a ferramenta built-in do Next e porque não preciso instalar mais nada pra funcionar, como eu teria que fazer para usar arquivos sass no projeto. Além disso, a síntaxe que usamos com Styled Components é a do Sass e pra trabalhar com SSR, a configuração também é muito simples (a Vercel tem um exemplo pronto no repo deles).

### Git Flow

Assim como o Commitzen, o Git Flow serve como uma forma de facilitar o trabalho de seguir padrões quando se trabalha com Git. É perfeitamente possível trabalhar da forma padrão e com o Git Flow ao mesmo tempo. Ele é especialmente útil para desenvolvedores iniciantes ou como uma forma de agilizar o trabalho, e é por isso que está sendo usado nesse projeto.

### Material UI

O Material UI foi escolhido por ser bem conhecido e por ser bem completo. Além disso, ele é fácil de usar e integrar no projeto e possui um próprio sistema de estilização de componentes, que é muito útil em determinados momentos.

### Font Awesome

O Font Awesome foi escolhido por ser bem completo, ter forte presença no mercado e por ter integração fácil com o Material UI.
