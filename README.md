# API Hostel Managment - NodeJs

> API criada para estudar conceitos de back-end, utilizando a linguagem de programação JavaScript e o banco de dados MongoDB. Nessa API eu crio um CRUD completo de quartos e vagas em um hostel.

Para utilizar o projeto faça o dowload do arquivo zip, ou faça o clone em seu computador utilizando o Git. Execute o comando `npm i` dentro da pasta do projeto em seu computador(a pasta que contém o arquivo package.json), para baixar as dependencias do projeto.

## Executando o projeto

*Essa API utiliza o mongodb como banco de dados e o mongoose como ODM, então antes de testar a API certifique se você possui o MongoDb instalado em seu computador(https://www.mongodb.com/try/download/community).*

Além disso, você precisa criar o arquivo .env com a url do seu banco, *utilize o arquivo .env.exemple para criar o seu*. Esse é um exemplo de string de conexão com o banco de dados: mongodb://[username:password@]host1[:port1][,...hostN[:portN]][/[defaultauthdb][?options]]

.

Agora você pode executar o projeto: 
* Para executar o projeto com o nodemon, digite no terminal: 
```bash
npm run dev
```
* Para executar o projeto com o node, digite no terminal: 
```bash
npm start
```
## Testando a API

Você pode utilizar as ferramentas:

* Postman
* Insomnia
* Thunder Client (plugin no vsCode)

Exemplos de URLs: 
* Essa é a URL de teste padrão: http://localhost:3000/rooms
* Para buscar por ID, insira o ID na URL: http://localhost:3000/rooms/5
* Para fazer uma busca com query string, esse é um exemplo de URL: http://localhost:3000/search/filter?category=Shared

*Para Criar, Editar ou Apagar precisa acessar a rota admin nas URL:
    -- Criar http://localhost:3000/admin/rooms/new
    -- Editar http://localhost:3000/admin/rooms/edit
    -- Apagar http://localhost:3000/admin/rooms/delete/:id



Essa é a estrutura JSON para fazer o POST e o PUT:

```json
{
    "_id": "613cebc2c88a5de7ce29ed48",
    "name": "Room 3",
    "category": [
      "Single",
      "Private"
    ],
    "price": 200,
    "vacancy": 1,
    "ammenities": [
      "Air-conditioner",
      "Heater",
      "Private bathroom"
    ],
    "adress": "Test street",
    "private": true
  }
```
