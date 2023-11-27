const { WebClient } = require('@slack/web-api');

const web = new WebClient("xoxp-6214323179937-6224675652064-6243482033606-afc9715aa04557316e8c50c325ab7264");

async function sendAlert(message) {
    try {
        // Use the `chat.postMessage` method to send a message from this app
        await web.chat.postMessage({
          channel: '#avisos',
          text: message,
        });
        return "Mensagem Postada com sucesso!";
    } catch (error) {
        return "Erro no slack";
    }
} 

module.exports = {
    sendAlert
}