# Calculadora

## Índice

- [Calculadora](#calculadora)
  - [Índice](#índice)
  - [Observações sobre o projeto](#observações-sobre-o-projeto)
  - [Funcionalidades](#funcionalidades)
    - [Novas funcionalidades eu colocarei aqui, com a data que foram inseridas.](#novas-funcionalidades-eu-colocarei-aqui-com-a-data-que-foram-inseridas)
  - [Bugs encontrados até agora](#bugs-encontrados-até-agora)
  - [Bugs resolvidos até agora](#bugs-resolvidos-até-agora)
  - [Acesse o projeto](#acesse-o-projeto)
  - [Dicas para uma boa visualização do projeto](#dicas-para-uma-boa-visualização-do-projeto)

## Observações sobre o projeto

Esse projetinho foi proposto pela DIO no bootcamp **Formação React Developer** e eu decidir aprimorar e aproveitar para treinar e melhorar minha logica e meu React, além de utilizar o styled-components que negligenciei durante muito tempo.

A Calculadora está bem simples, apenas com as operações básicas como _soma, subtração, multiplicação e divisão_.

Não me preocupei com estilização e responsividade agora, pois como me considero muito bom na questão da estilização, decidi focar em relembrar como fazer um bom código em React, como estruturar e componentizar tudo.

Estarei melhorando a calculadora com o tempo e a ideia é fazer uma calculadora cientifica completa, mas isso só o tempo poderá mostrar se vai realmente acontecer haha.

---

## Funcionalidades

- Soma, subtração, divisão e multiplicação.
- Operações com números inteiros e números decimais.
- Histórico de todas as operações feitas.
- Botão para limpar a calculadora e botão para limpar tudo, incluindo o histórico.
- Botão para apagar número por número digitado (backspace).

### Novas funcionalidades eu colocarei aqui, com a data que foram inseridas.

---

## Bugs encontrados até agora

- A virgula não aparece assim que é colocada, apenas após a seleção de um número.
- Caso o número posto após a virgula seja 0 (zero), também não aparece, mas ao colocar um número diferente de 0 (zero) tudo aparece como magica.
- ~~Se o botão da operação for apertado após o botão de = (igual), buga o retorno, ele soma o resultado com o próprio resultado e trava a calculadora.~~

## Bugs resolvidos até agora

- Bug do botão de operação travar a calculadora se apertado após o resultado, foi resolvido apenas travando o botão caso nenhum número tenha sido digitado ainda.

---

## Acesse o projeto

Para acessar a aplicação por favor use esse [link](https://calculadora-alpha-six.vercel.app/) e você será redirecionado para a versão mais recente da aplicação.

---

## Dicas para uma boa visualização do projeto

- ~~Utilize uma tela de no mínimo 750px de altura, caso esteja testando pelo inspecionar do seu navegador, pois ainda não ajustei 100% os elementos para ficarem responsivos e telas menores acabam cortando o conteúdo de baixo e precisa rolar pra ver, em 750px já fica tudo na tela certinho.~~
- ~~No celular esquece, você até consegue usar, mas ta horrível, vou ajeitar provavelmente so proxima semana porque preciso dar seguimento ao bootcamp haha.~~
- Já dei uma melhorada legal na responsividade, creio que estará bem visível em qualquer tela agora.
