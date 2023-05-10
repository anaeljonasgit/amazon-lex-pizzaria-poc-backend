const finishResponses = {
    finishOrderMessage({ order_list_formated }) {
        return {
            message: `Pedido concluído com sucesso! Você pediu: ${order_list_formated}.`,
            fallback: `Só repetindo para você: você pediu ${order_list_formated}.`
        };
    },

    cantFinishOrderMessage() {
        return {
            message: 'Não há nada no seu carrinho. Gostaria de ver o nosso cardápio?',
            fallback: 'Desculpe, não entendi. Gostaria de ver o nosso cardápio?'
        }
    }
};

module.exports = finishResponses;