const welcomeResponses = {
    welcomeDoYouWantToSeeTheMenuMessage() {
        return {
            message: 'Olá, seja bem-vindo(a) a nossa pizzaria! Gostaria de ver nosso cardápio?',
            fallback: 'Desculpe, não consegui entender. Gostaria de ver o nosso cardápio?'
        };
    }
};

module.exports = welcomeResponses;