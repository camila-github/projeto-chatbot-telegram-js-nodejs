## Criar chatbot no Telegram com JavaScript e NodeJS

O projeto publicado é referente ao treinamento do Curso BootCamp Desenvolvedor NodeJS da Digital Innovation One (https://digitalinnovation.one).

O intuito do projeto é criar um Chatbot no Telegram utilizando JavaScript e NodeJS.

## Requisitos

#### NODEJS
```
https://nodejs.org/en/
```

#### TELEGRAM
```
https://web.telegram.org/
```

#### CRIAR O BOT

- Se inscreva no Telegram (Você pode usar o cliente web, desktop ou mobile)
- Abra o aplicativo ou acesse o website
- Pesquise por @BotFather e inicie a conversa
- Envie o comanndo /newbot e execute as instruções
- Armazene o token enviado pelo @BotFather. Será usado no código.


#### BIBLIOTECAS UTILIZADAS

youtube-node - Sua finalidade é fazer buscas no youtube.
```
https://www.npmjs.com/package/youtube-node 
```

dialogflow - Comunicação com o dialogflow
```
https://www.npmjs.com/package/dialogflow
```

node-telegram-bot-api - Comunicação com o Telegram
```
https://www.npmjs.com/package/node-telegram-bot-api
```

#### GERAR CREDENCIAIS 

Youtube
```
https://console.developers.google.com/start/api?id=youtube
```

Dialogflow. 
Detalhe:  Lembrar de ir na conta de serviço criada pelo Dialogflow e gerar seu arquivo json com as credenciais
```
https://console.cloud.google.com/iam-admin/serviceaccounts 
```

#### EXECUTAR O PROJETO

- Efetuar o clone do repositório em uma pasta do sistema operacional
- Executar o comando `npm install` dentro da pasta raiz do projeto para baixar as dependências
- Substituir os arquivos de credenciais do agent e do youtube
- Executar o comando `npm start` dentro da pasta raiz do projeto para executar o código


