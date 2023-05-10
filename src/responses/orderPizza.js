const orderPizzaResponses = {
    askWhatPizzaDoyouWantMessage({ pizzas_list_formated }) {
        return {
            message: `Certo, qual pizza você gostaria de pedir: ${pizzas_list_formated}?`,
            fallback: `Desculpe, não consegui entender. Qual pizza você gostaria de pedir: ${pizzas_list_formated}?`
        };
    },

    doYouWantConfirmTheSelectPizzaFlavorMessage({ selected_flavor }) {
        return {
            message: `Você selecionou: ${selected_flavor}. Gostaria de confirmar esse sabor?`,
            fallback: `Vamos tentar novamente. Você selecionou: ${selected_flavor}. Gostaria de confirmar esse sabor?`
        };
    },

    successSelectPizzaFlavorMessage({ selected_flavor }) {
        return {
            message: `Perfeito! Você adicionou ${selected_flavor} ao seu pedido. Quer adicionar mais algum sabor ou finalizar o pedido?`,
            fallback: `Hmmm, não entendi. Você adicionou ${selected_flavor} ao seu pedido. Deseja adicionar mais algum sabor ou finalizar o pedido?`
        };
    }
};

module.exports = orderPizzaResponses;