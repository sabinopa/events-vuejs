# Cadê Buffet 🎂

![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Vue.js](https://img.shields.io/badge/vuejs-%2335495e.svg?style=for-the-badge&logo=vuedotjs&logoColor=%234FC08D)
![Bootstrap](https://img.shields.io/badge/bootstrap-%238511FA.svg?style=for-the-badge&logo=bootstrap&logoColor=white)
![Static Badge](https://img.shields.io/badge/Ruby_3.3.0-CC342D?style=for-the-badge&logo=ruby&logoColor=white)
![Static Badge](https://img.shields.io/badge/Ruby_on_Rails_7.1.3-CC0000?style=for-the-badge&logo=ruby-on-rails&logoColor=white)


Este é um projeto VueJS que consome APIs criadas em Ruby on Rails ([nesse projeto](https://github.com/sabinopa/rails-events)). Ele lista empresas especializadas em buffets para eventos, mostra os detalhes de cada empresa e permite verificar a disponibilidade de tipos de eventos específicos.

## Funcionalidades ⚙️

- Tela inicial com listagem de buffets
- Tela de detalhes de um buffet com detalhes dos tipos de eventos
- Busca de buffets a partir da tela inicial
- Consulta de disponibilidade para realização de um evento

## Requisitos

✅ [Ruby v3.3.0](https://www.ruby-lang.org/pt/)</br>
✅ [Node.js](https://nodejs.org/)</br>
✅ [npm (Node Package Manager)](https://www.npmjs.com/)</br>
✅ [Ruby on Rails 7.0.6](https://rubyonrails.org/)

## Instalação

### Backend (Rails API)

1. Clone o repositório da API:
 ```
git clone https://github.com/sabinopa/rails-events.git
cd rails-events
```

2. Instale as dependências
```
bundle instal
```

3. Configure o banco de dados:
```
rails db:create
rails db:migrate
rails db:seed
```

4. Inicie o servidor Rails:
```
rails server
```

### Frontend (VueJS)

1. Clone o repositório VueJS:
```
git clone https://github.com/sabinopa/events-vuejs.git
cd events-vuejs
```

2. Instale o http-server globalmente:
```
npm install -g http-server
```

3. Inicie o servidor http-server:
```
http-server
```

4. Acesse o projeto no navegador:
```
http://localhost:8080
```
