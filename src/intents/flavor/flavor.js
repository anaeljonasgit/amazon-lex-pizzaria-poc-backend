const pizzasController = require('../../controllers/pizzas');

const orderPizzaResponses = require('../../responses/orderPizza');

const selectPizzaFlavorFunction = async (event) => {
    console.table({ function: 'selectPizzaFlavorFunction' });
    const { inputTranscript: input } = event;

    const avaliable_pizzas = pizzasController.getAvaliablePizzasArrayInLowerCase();

    const selected_flavor = input.split(' ').filter(word => {
        return avaliable_pizzas.includes(word) ? word : false;
    }).join('');

    const speakOutput = orderPizzaResponses.doYouWantConfirmTheSelectPizzaFlavorMessage({ selected_flavor });

    const response = {
        "sessionState": {
            "dialogAction": {
                "type": 'ElicitIntent',
            },
            "intent": {
                "name": event.sessionState.intent.name,
                "state": event.sessionState.intent.state
            },
            "sessionAttributes": event.sessionState.sessionAttributes,
        },
        "messages": [{            
            'contentType': 'PlainText',
            'content': speakOutput.message
        }]
    };
    response.sessionState.sessionAttributes.flow = 'doYouWantConfirmTheSelectPizzaFlavorFlow';
    response.sessionState.sessionAttributes.fallback_speakoutput = speakOutput.fallback;
    response.sessionState.sessionAttributes.selected_flavor = selected_flavor;
    return response;
};

module.exports = {
    selectPizzaFlavorFunction
};