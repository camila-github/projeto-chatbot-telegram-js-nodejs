/* Importa a biblioteca de api do youtube */
const YouTube = require('youtube-node');

/* Importa as configurações para serem usadas pela biblioteca do youtube*/
const config = require('./configs/youtube.json');

/* Criando uma instância do youtube */
const youtube = new YouTube();

/* Seta a 'key' na instância do youtube para que seja possivel fazer as pesquisas */
youtube.setKey(config.key);

/* Função para busca de vídeos */
function searchVideoURL(message, queryText) {

    /* Encapsula função de search em uma promise para conseguirmos retornar os resultados do callback */
    return new Promise((resolve, _) => {
        /* Realiza a busca baseada na concatenação da string e do queryText */
        youtube.search(`Exercício em casa para ${queryText}`, 2, function(error, result) {
            if (error) {
                /* Caso ocorra algum erro essa mensagem será retornada */
                resolve('Não foi possível encontrar um vídeo no momento, por favor tente mais tarde');
            } else {
                /* Gera um array de videoIds */
                const videoIds = result.items.map((item) => item.id.videoId).filter(item => item);

                /* Gera um array de links do youtube */
                const youtubeLinks = videoIds.map(videoId => `https://www.youtube.com/watch?v=${videoId}`).join(', ');

                /* Retorna a mensagem inicial concatenadas com os links do youtube para o arquivo index.js */
                resolve(`${message} ${youtubeLinks}`);
            }
        });
    });
}

/* Exporta a função de busca de vídeos */
module.exports.searchVideoURL = searchVideoURL;