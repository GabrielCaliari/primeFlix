# Prime Flix

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![Axios](https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white)
![TMDB](https://img.shields.io/badge/TMDB-01B4E4?style=for-the-badge&logo=themoviedatabase&logoColor=white)

Plataforma de filmes para explorar catálogo, ver detalhes e salvar favoritos. Desenvolvida com React (Create React App) e dados da API do The Movie Database (TMDB).

## Demonstração

Adicione uma captura de tela do projeto em `./assets/primeflix.png` para exibir aqui.

## Funcionalidades

### Página inicial (Home)

- **Melhor avaliação**: filmes com melhor nota no TMDB
- **Em cartaz**: filmes em exibição nos cinemas
- **Populares**: filmes mais populares no momento
- **Em breve**: próximos lançamentos
- Carrossel com setas de navegação e cards com poster e título

### Detalhes do filme

- Poster/backdrop, título, sinopse e avaliação (nota /10)
- **Salvar**: adiciona o filme à lista “Meus filmes” (armazenada no navegador)
- **Trailer**: link para busca do trailer no YouTube
- Feedback com notificações (toast) ao salvar

### Meus filmes (Favoritos)

- Lista de filmes salvos pelo usuário
- **Ver detalhes**: abre a página do filme
- **Excluir**: remove o filme da lista
- Dados persistidos em `localStorage`

### Outros

- **Header** fixo com logo “Prime Flix” e botão “Meus filmes”
- **Página 404** estilizada com link para voltar à home
- Design responsivo e tema escuro
- Notificações (react-toastify) para sucesso e avisos

## Como usar

1. Clone o repositório:

   ```bash
   git clone https://github.com/SEU_USUARIO/primeFlix.git
   ```

2. Entre na pasta do projeto:

   ```bash
   cd primeFlix
   ```

3. Instale as dependências:

   ```bash
   npm install
   ```

4. Inicie o projeto:

   ```bash
   npm start
   ```

5. Acesse no navegador:

   ```
   http://localhost:3000
   ```

### Build para produção

```bash
npm run build
```

A pasta `build` conterá os arquivos otimizados para deploy.

## Tecnologias

- **React** 18 – interface e componentes
- **Create React App** (react-scripts) – build e dev server
- **React Router DOM** – rotas (Home, Filme, Favoritos, 404)
- **Axios** – requisições à API do TMDB
- **react-slick** + **slick-carousel** – carrossel das listas de filmes
- **react-toastify** – notificações na interface
- **JavaScript** – lógica da aplicação
- **CSS3** – estilos, variáveis, responsividade
- **HTML5** – estrutura
- **API TMDB** – dados de filmes (posters, sinopse, avaliação, etc.)

## Estrutura do projeto

```
src/
├── components/
│   └── Header/          # Cabeçalho com logo e link "Meus filmes"
├── pages/
│   ├── Home/            # Página inicial com listas de filmes
│   ├── ListFilmes/      # Componente de lista em carrossel
│   ├── MovieCard/       # Card de filme (poster + título)
│   ├── Filme/           # Página de detalhes do filme
│   ├── Favoritos/       # Lista de filmes salvos
│   └── Erro/            # Página 404
├── services/
│   └── api.js           # Cliente Axios configurado para TMDB
├── App.js
├── App.css
├── index.js
├── index.css             # Variáveis de tema e estilos globais
└── routes.js             # Configuração das rotas
```

## Configuração da API

O projeto usa a [API do The Movie Database (TMDB)](https://www.themoviedb.org/documentation/api). A chave de API está configurada nas requisições em `src/pages/ListFilmes/index.js` e `src/pages/Filme/index.js`. Para uso em produção, considere mover a chave para variáveis de ambiente (ex.: `REACT_APP_TMDB_API_KEY`).

## Funcionalidades principais

- Interface em tema escuro com destaque em teal
- Navegação entre Home, detalhes do filme e Meus filmes
- Listas de filmes em carrossel responsivo
- Salvamento de favoritos no navegador (localStorage)
- Layout responsivo para desktop e mobile
- Feedback visual com toasts

## Roadmap

- [ ] Usar variável de ambiente para a chave da API TMDB
- [ ] Página de busca de filmes
- [ ] Filtros por gênero ou ano
- [ ] Suporte a séries (TMDB)
- [ ] Modo claro/escuro configurável
- [ ] Testes automatizados (Jest/React Testing Library já no projeto)

## Status do projeto

![GitHub stars](https://img.shields.io/github/stars/SEU_USUARIO/primeFlix?style=for-the-badge&logo=github&logoColor=white)
![GitHub forks](https://img.shields.io/github/forks/SEU_USUARIO/primeFlix?style=for-the-badge&logo=github&logoColor=white)
![GitHub issues](https://img.shields.io/github/issues/SEU_USUARIO/primeFlix?style=for-the-badge&logo=github&logoColor=white)
![GitHub pull requests](https://img.shields.io/github/issues-pr/SEU_USUARIO/primeFlix?style=for-the-badge&logo=github&logoColor=white)

Substitua `SEU_USUARIO` pelo seu usuário do GitHub nos badges e no link de clone.

## Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.
