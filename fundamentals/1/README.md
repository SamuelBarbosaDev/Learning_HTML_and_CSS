# Estrutura do HTML

Este README.md fornece uma visão geral da estrutura básica do HTML (Hypertext Markup Language). O HTML é a linguagem de marcação padrão usada para criar páginas da web. Ele define a estrutura e o conteúdo de uma página, permitindo que os navegadores da web interpretem e exibam informações de maneira consistente.

## Conteúdo

- [Estrutura do HTML](#estrutura-do-html)
  - [Conteúdo](#conteúdo)
  - [Introdução:](#introdução)
  - [Elementos HTML:](#elementos-html)
    - [Elemento HTML básico:](#elemento-html-básico)
    - [Elementos HTML aninhados:](#elementos-html-aninhados)
    - [Atributos HTML:](#atributos-html)
  - [Exemplo de Estrutura HTML:](#exemplo-de-estrutura-html)
  - [Conclusão:](#conclusão)

## Introdução:

O HTML é composto por elementos, que são marcadores ou tags que envolvem o conteúdo da página da web. Cada elemento HTML desempenha um papel específico na estrutura e na apresentação da página. Os navegadores interpretam esses elementos e os exibem de acordo com as regras definidas pela especificação do HTML.

## Elementos HTML:

### Elemento HTML básico:
O elemento HTML mais simples é o `<html>`, que envolve todo o conteúdo da página. Dentro do `<html>`, existem dois elementos principais: `<head>` e `<body>`. O `<head>` contém metadados, como o título da página, enquanto o `<body>` contém o conteúdo visível da página.

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Título da Página</title>
  </head>
  <body>
    <h1>Meu Primeiro Título</h1>
    <p>Este é um parágrafo de exemplo.</p>
  </body>
</html>
```

### Elementos HTML aninhados:
Os elementos HTML podem ser aninhados uns dentro dos outros para criar uma estrutura hierárquica. Por exemplo, você pode usar a tag `<div>` para criar divisões em uma página e aninhar outros elementos dentro dela.

```html
<div>
  <h2>Subtítulo</h2>
  <p>Um parágrafo dentro da divisão.</p>
</div>
```

### Atributos HTML:
Os elementos HTML podem ter atributos que fornecem informações adicionais sobre o elemento. Por exemplo, o atributo `href` é usado com a tag `<a>` para definir o destino de um link.

```html
<a href="https://www.exemplo.com">Visite o Exemplo</a>
```

## Exemplo de Estrutura HTML:
Aqui está um exemplo mais completo de uma estrutura HTML que combina vários elementos:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Minha Página Inicial</title>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="estilo.css">
  </head>
  <body>
    <header>
      <h1>Bem-vindo à Minha Página</h1>
    </header>
    <nav>
      <ul>
        <li><a href="#">Início</a></li>
        <li><a href="#">Sobre</a></li>
        <li><a href="#">Contato</a></li>
      </ul>
    </nav>
    <main>
      <h2>Sobre Mim</h2>
      <p>Eu sou um entusiasta da tecnologia que adora aprender sobre desenvolvimento web.</p>
    </main>
    <footer>
      <p>&copy; 2023 Meu Site</p>
    </footer>
  </body>
</html>
```

## Conclusão:
Este README forneceu uma visão geral da estrutura básica do HTML, incluindo elementos HTML, aninhamento e atributos. O HTML é a base de qualquer página da web, e compreender sua estrutura é essencial para criar conteúdo web eficaz.

Este README explica de maneira simples a estrutura básica do HTML, elementos HTML