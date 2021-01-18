/* Importa a biblioteca do dialogflow*/
const dialogflow = require('dialogflow');

/* Importa o arquivo contendo as configs do dialogflow */
const configs = require('./configs/agent.json');

/* Cria uma sessão para a aplicação de acordo com as credenciais */
const sessionClient = new dialogflow.SessionsClient({
    projectId: configs.project_id,
    credentials: { private_key: configs.private_key, client_email: configs.client_email }
});

/* Funcao para encapsular o envio de mensagens do telegram para o dialogflow */
async function sendMessage(chatId, message) {
    /* Cria ou recupera a sessão do usuário */
    const sessionPath = sessionClient.sessionPath(configs.project_id, chatId);

    /* Objeto para montar a request para o dialogflow */
    const request = {
        session: sessionPath,
        queryInput: {}
    };

    /* Request para tipo texto */
    const textQueryInput = { text: { text: message, languageCode: 'pt-BR' } };

    /* Request para tipo evento */
    const eventQueryInput = { event: { name: 'start', languageCode: 'pt-BR' } };

    /* Verifica se a mensagem enviada foi um start caso seja monta um evento chamando a action 'start' */
    /* lembrem-se que essa action precisa estar cadastrada no dialogflow para conseguir chamá-la */
    request.queryInput = message === '/start' ? eventQueryInput : textQueryInput;

    /* Respostas da requisição para o dialogflow */
    const responses = await sessionClient.detectIntent(request);

    /* Resultado da resposta do dialogflow */
    const result = responses[0].queryResult;

    /* Retorna objeto para ser utilizado no arquivo index.js */
    return { text: result.fulfillmentText, intent: result.intent.displayName, fields: result.parameters.fields };
}

/* Exporta a função sendMessage */
module.exports.sendMessage = sendMessage;