<h1 align="center">
    <img alt="Ignite Shop" title="" src=".github/logo-ignite-shop.svg" />
</h1>

<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/ViniciusPrataKloh/ignite-shop">

  <img alt="GitHub Top Language" src="https://img.shields.io/github/languages/top/ViniciusPrataKloh/ignite-shop" />

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/ViniciusPrataKloh/ignite-shop">
  
  <a href="https://github.com/pabloxt14/Github-Blog/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/ViniciusPrataKloh/ignite-shop">
  </a>
    
   <img alt="License" src="https://img.shields.io/badge/license-MIT-blue">
</p>

<p>
  <img src="./public/cover.png" alt="cover ignite-shop" />
</p>

<p align="center">
 <a href="#-about">About</a> |
 <a href="#-layout">Layout</a> | 
 <a href="#-deploy">Deploy</a> | 
 <a href="#-how-it-works">How It Works</a> | 
 <a href="#-technologies">Technologies</a> | 
 <a href="#-author">Author</a> | 
 <a href="#-license">License</a>
</p>


## 💻 About

O Ignite Shop é um aplicação web de vendas de camisetas com temas do mundo dev, mostrando com detalhes a parte visual e informacional das camisetas, além de apresentar um carrinho onde o cliente pode adicionar as suas compras.  

O principal conceito treinado nesta aplicação foi a utilização do framework Next.js, explorando conceitos como o de SSR(Server Side Rendering) e SSG(Static Site Generation), além da utilização da biblioteca Stitches.js para a estilização.

O projeto foi desenvolvido como conclusão de um desafio do curso **Ignite** oferecida pela [Rocketseat](https://www.rocketseat.com.br/). O Ignite é um curso de especialização em stacks específicas amplamente utilizadas e valorizadas no mercado como React, React Native, Node.js e Elixir.

---

## 🎨 Layout

Você pode visualizar o layout do projeto através [desse link](https://www.figma.com/file/FxlDRKOmznBbTH8DsTgnZU/Ignite-Shop-2.0/duplicate). É necessário ter conta no [Figma](https://www.figma.com/) para acessá-lo.

### 📹 Preview

<!-- <p align="center">
  <img alt="Animated Web Demonstration" title="#Web" src=".github/ignite_shop-demonstration_01.gif" width="100%">
</p>
<p align="center">
  <img alt="Animated Web Demonstration" title="#Web" src=".github/ignite_shop-demonstration_02.gif" width="100%">
</p> -->

---

## 🔗 Deploy

Para acessar o deploy do Website da aplicação basta clicar no link a seguir: [Link](https://ignite-shop-viniciuspratakloh.vercel.app/)

---

## 🚀 How it works

Este projeto contem somente a parte Frontend Web, precisando somente executar a aplicação em seu Browser(navegador).

### ✅ Pré-requisitos

Antes de baixar o projeto você vai precisar ter instalado na sua máquina as seguintes ferramentas:

* [Git](https://git-scm.com)
* [NodeJS](https://nodejs.org/en/)
* [Yarn](https://yarnpkg.com/) ou [NPM](https://www.npmjs.com/)


Configurações adicionais:
* Criar uma conta e projeto no [Stripe](https://stripe.com/br)
* Criar na raiz do projeto o arquivo `.env.local`
* Criar no arquivo `.env.local` as variáveis de ambiente, conforme o exemplo do arquivo `.env.example`

Todos cartões de crédito disponíveis para teste (ex: 4242 4242 4242 4242) estão especificados na seguinte [documentação](https://stripe.com/docs/testing#cards) do Stripe

#### 🧭 Rodando a aplicação web

```bash
# Clone este repositório
$ git clone https://github.com/ViniciusPrataKloh/ignite-shop.git

# Vá para a pasta da aplicação Front End
$ cd ignite-shop

# Instale as dependências
$ npm install

# Configure as variáveis de ambiente (conforme já explicado anteriormente)

# Execute a aplicação em modo de desenvolvimento
$ npm run dev

# A aplicação será aberta na porta:3000 - acesse http://localhost:3000

# Para build da aplicação, execute
$ npm run build
$ npm run start
```

---

## 🛠 Technologies

As seguintes ferramentas foram usadas na construção do projeto:

#### **Website**  ([Next.js](https://nextjs.org/)  +  [TypeScript](https://www.typescriptlang.org/))

-   **[Next.js](https://nextjs.org//)**
-   **[Stitches](https://stitches.dev/)**
-   **[Axios](https://github.com/axios/axios)**
-   **[Stripe](https://stripe.com/br)**
-   **[RadixUI](https://www.radix-ui.com/)**
-   **[Phosphor-Icons](https://phosphoricons.com/)**

> Para mais detalhes das dependências gerais da aplicação veja o arquivo  [package.json](https://github.com/ViniciusPrataKloh/ignite-shop/blob/main/package.json)

---

## ✍ Author

<img alt="Perfil Github" title="Perfil Github" src="https://github.com/ViniciusPrataKloh.png" width="100px" />

[![Linkedin Badge](https://img.shields.io/badge/-Vinícius_Prata_Klôh-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/vinicius-prata-kloh-8bb6581a8/)](https://www.linkedin.com/in/vinicius-prata-kloh-8bb6581a8/) 

[![Gmail Badge](https://img.shields.io/badge/-vinicius.prata.kloh@gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:vinicius.prata.kloh@gmail.com)](mailto:vinicius.prata.kloh@gmail.com)

---

## 📝 License

Este projeto esta sobe a licença [MIT](./LICENSE).

Feito com 💜 por Vinícius Prata klôh