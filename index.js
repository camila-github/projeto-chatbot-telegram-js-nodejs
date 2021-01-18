/* Importa a biblioteca de api do telegram */
const TelegramBot = require('node-telegram-bot-api');

/* Importa o arquivo que faz a chamada para o dialogflow */
const dialogflow = require('./dialogflow');

/* Importa o módulo que faz a busca no youtube */
const youtube = require('./youtube');

/* Token recebido pelo bot father */
const token = 'COLOQUE O SEU TOKEN AQUI';

/* Nova instância do telegram */
const bot = new TelegramBot(token, { polling: true });

/* Escuta mensagens enviadas pelos usuários */
bot.on('message', async(msg) => {

    /* Id do chat do usuário */
    const chatId = msg.chat.id;

    /* Resposta do dialogflow */
    const dfResponse = await dialogflow.sendMessage(chatId.toString(), msg.text);

    /* Texto a partir da resposta do dialogflow */
    let textResponse = dfResponse.text;

    /* Verifica a intenção a partir da resposta do dialogflow */
    if (dfResponse.intent === 'Treino específico') {
        /* Modifica o texto para os dados retornados a partir da busca realizada no youtube */
        /* Lembre-se que para acessar o campo corpo dentro de fields ele teve que ser definido como uma entidade no dialogflow */
        textResponse = await youtube.searchVideoURL(textResponse, dfResponse.fields.corpo.stringValue);
    }

    /* Envio da mensagem para o usuário do telegram */
    bot.sendMessage(chatId, textResponse);
});