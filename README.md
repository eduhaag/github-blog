<div align="center">
  
  ![](.github/Logo.png)
  
</div>
<div align="center">

![Badge da versão do React](https://img.shields.io/badge/React-v18.2.0-blue?logo=react&color=2ccce4)
![Badge Versão do NPM](https://img.shields.io/badge/NPM-v9.8.1-dark_green)
![Badge de tamanho do repositório](https://img.shields.io/github/repo-size/eduhaag/github-blog)
![Badge de Last Commit](https://img.shields.io/github/last-commit/eduhaag/github-blog?color=orange)
![Badge de Prs](https://img.shields.io/badge/PRs-Welcome-yellow)
![Badge de Licença](https://img.shields.io/badge/licence-MIT-green)

![Badge de status do projeto](https://img.shields.io/badge/PROJETO%20CONCLU%C3%8DDO-darkGreen)

 <a href="#-sobre-o-projeto">Sobre</a> •
  <a href="#-funcionalidades">Funcionalidades</a> •
 <a href="#-layout">Layout</a> • 
 <a href="#-como-executar-o-projeto">Como executar</a> • 
 <a href="#-tecnologias">Tecnologias</a> • 
 <a href="#-como-contribuir-para-o-projeto">Como contribuir</a> • 
 <a href="#-licença">Licença</a>
  
</div>

## 💻 Sobre o projeto
O Github Blog é um blog que utiliza como base de dados o próprio repositório do Github, sendo as *Issues* do repositório apresentadas como posts do blog.

Esto projeto foi desenvolvido como desafio do módulo de comunicação com API, da trilha React, do Bootcamp Ignite oferecido pela [Rocketseat](https://rocketseat.com.br).

## 🧰 Funcionalidades
- [x] Exibir uma lista de posts extraidos das *issues* do repositório, mostrando apenas o título e um o texto parcial;
- [x] Exibir dados do dono do repositório;
- [x] Deve conter uma página para exibir todo o conteúdo do post;
- [X] Deve ser possível realizar uma busca nos posts através de um argumento.

## 🎨 Layout
O layout da aplicação está disponível no figma:<br />
![Badge de acesso ao layout no figma](https://img.shields.io/badge/Acessar%20layout-Figma-green?link=https%3A%2F%2Fwww.figma.com%2Ffile%2FsJ3Nsx1kJHKGdCKX1obo2V%2FGitHub-Blog-(Community)%3Ftype%3Ddesign%26node-id%3D0%253A1%26mode%3Ddesign%26t%3DqUhcIP1GBxMomyTf-1)

![](.github/cover.png)

## 🚀 Como executar o projeto
### Pré-requisitos
Para executar o projeto, você vai precisar ter instalado em sua máquina as seguintes ferramentas: [Git](https://git-scm.com), [Node.js](https://nodejs.org/en/). Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/).

### Clonando o repositório
```bash
# Clone o repositório
$ git clone git@github.com:eduhaag/github-blog.git

# Acesse a página do projeto
$ cd github-blog

# Instale as dependências
$ npm install
# No arquivo src/context/PostsContext.tsx você deve substituir o 'eduhaag/github-blog' na linha 34, pelo nome no usuário e repositório do Github que será utilizado como base de dados da aplicação. 

# Rode o projeto
$ npm run dev

# O servidor front-end será inicializado e será exibido no terminal a porta para acesso.
```

## 🛠️ Tecnologias
- **[React](https://react.dev/)**;
- **[Typescript](https://www.typescriptlang.org/)**;
- **[Vite](https://vitejs.dev/)** - Para agilizar o processo de criação e configuração do projeto;
- **[Axios](https://axios-http.com/)** - Realiza a comunicação com o backend por meio de requisições HTTP;
- **[react-router-dom](https://reactrouter.com/)** - Conduz o roteamento das páginas dentro da SPA;
- **[Stylef Components](https://styled-components.com/)** - Possibilita escrever códigos CSS dentro do JavaScript;
- **[Date-fns](https://date-fns.org/)** - Manipulação de datas;
- **[Fortawesome](https://fortawesome.com/)** - Biblioteca de icones;
- **[parse-numeric-range](https://github.com/euank/node-parse-numeric-range)** - Manipulador de numeros;
- **[react-hook-form](https://react-hook-form.com/get-started/)** - Criação e validação de formulários;
- **[react-markdown](https://remarkjs.github.io/react-markdown/)** - Manipulação de texto em markdown;
- **[react-sintax-highlighter](https://github.com/react-syntax-highlighter/react-syntax-highlighter)** - Biblioteca para formação de código dentro do markdown;
- **[Zod](https://zod.dev/)** - Biblioteca para válidação de esquemas de dados.
> Veja o arquivo [package.json](package.json)


**Utilitários**
- Protótipo: **[Figma](https://www.figma.com/file/sJ3Nsx1kJHKGdCKX1obo2V/GitHub-Blog-(Community)?type=design&node-id=0%3A1&mode=design&t=qUhcIP1GBxMomyTf-1)**;
- Editor:  **[Visual Studio Code](https://code.visualstudio.com/)**;
- Fontes: **[Nunito](https://fonts.google.com/specimen/Nunito)**.

## 💪 Como contribuir para o projeto
1. Faça um **fork** do projeto.
2. Crie uma nova branch com as suas alterações: `git checkout -b my-feature`
3. Salve as alterações e crie uma mensagem de commit contando o que você fez: `git commit -m "feature: My new feature"`
4. Envie as suas alterações: `git push origin my-feature`

## 📝 Licença
Este projeto está sobe a licença MIT.
