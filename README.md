# NLW5_CHAT_WEBSOCKET

Projeto realizado em nodeJS com Typescript e websocket com o intuito de criar um um chat virtual entre cliente e atendente em tempo real. Os ensinamentos foram trazidos pela [Rocketseat](https://rocketseat.com.br/)

## Introdução

É apresentado neste projeto a criação, listagem e conexão entre cliente e atendente, salvando mensagens no banco de danos e conectando ambos via websocket.
Foi utilizado o TypeORM para realizar as migrtions e o SQLite como banco de dados.

## Preparação

Ao baixar o projeto, é necessário rodar:

```
npm run
ou
yarn
```

Instalado as dependências, é necessário criar o banco de dados. O utlizado neste projeto foi o SQLite e a integração com o TypeORM pode ser encontrado no ormconfig.json na raiz da pasta backend.
Para criar o banco de dados e rodar as migrations já criadas, é necessário rodar:

```
npm run typeorm migratuon:run
ou
yarn typeorm migration:run
```

Isso vai fazer com que o banco seja criado e as tabelas também.
Para rodar o projeto no backend é só necessário rodar:

```
npm run dev
ou
yarn dev
```

Que ele irá rodar na porta 3333.

Por possuir templates estáticos de html, é possível visualizar o chat e interagir nas rotas localhost:3333/pages/client e localhost:3333/pages/admin.
