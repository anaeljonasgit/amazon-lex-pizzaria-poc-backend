const welcomeResponses = {
    thanksMessage() {
        return {
            message: 'Disponha, é um prazer ajudar. Se precisar de mais algo, é só me chamar.',
            fallback: 'Desculpe, não consegui entender. Gostaria de ver o nosso cardápio?'
        };
    }
};

module.exports = welcomeResponses;