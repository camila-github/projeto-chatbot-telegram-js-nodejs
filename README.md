## Projeto: Criação de chatbot no Telegram com JavaScript + NodeJS

- O intuito do projeto é criar um Chatbot no Telegram utilizando JavaScript e NodeJS. O desenvolvimento de um Chatbot, será criar um programa, simulando uma conversa humana em um chat. Dessa forma, é possível automatizar tarefas repetitivas e burocráticas, como dúvidas frequentes, na forma de diálogo pré-definido entre o usuário e um 'robô'.

- O projeto publicado é referente ao treinamento do Curso BootCamp Desenvolvedor NodeJS da Digital Innovation One [https://digitalinnovation.one](https://digitalinnovation.one).

## Ferramentas Utilizadas

##### NODEJS

- [https://nodejs.org/en/](https://nodejs.org/en/)

##### TELEGRAM + CRIAR O BOT

- Se inscreva no Telegram. Você pode usar o cliente web, desktop ou mobile.[https://web.telegram.org/](https://web.telegram.org/)
- Abra o aplicativo ou acesse o website
- Pesquise por @BotFather e inicie a conversa
- Envie o comanndo /newbot e execute as instruções
- Armazene o token enviado pelo @BotFather. Será usado no código.

##### BIBLIOTECAS UTILIZADAS

- youtube-node :
  Sua finalidade é fazer buscas no youtube.
  [https://www.npmjs.com/package/youtube-node](https://www.npmjs.com/package/youtube-node)

- dialogflow :
  Comunicação com o dialogflow
  [https://www.npmjs.com/package/dialogflow](https://www.npmjs.com/package/dialogflow)

- node-telegram-bot-api :
  utilizado para comunicação com o Telegram
  [https://www.npmjs.com/package/node-telegram-bot-api](https://www.npmjs.com/package/node-telegram-bot-api)

##### GERAR CREDENCIAIS 

- Youtube :
  [https://console.developers.google.com/start/api?id=youtube](https://console.developers.google.com/start/api?id=youtube)


- Dialogflow :
  O Dialogflow é uma plataforma que ajuda na construção de chatbots. A plataforma é um dos serviços de Cloud da Google.
  Detalhe:  Lembrar de ir na conta de serviço criada pelo Dialogflow e gerar seu arquivo json com as credenciais.
  [https://console.cloud.google.com/iam-admin/serviceaccounts](https://console.cloud.google.com/iam-admin/serviceaccounts)

##### EXECUTAR O PROJETO

- Efetuar o clone do repositório em uma pasta do sistema operacional
- Executar o comando `npm install` dentro da pasta raiz do projeto para baixar as dependências
- Substituir os arquivos de credenciais do agent e do youtube
- Executar o comando `npm start` dentro da pasta raiz do projeto para executar o código
