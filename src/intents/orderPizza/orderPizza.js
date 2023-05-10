const orderPizzaResponses = require('../../responses/orderPizza');

const pizzasController = require('../../controllers/pizzas');

const askWhatPizzaDoyouWantFunction = async (event) => {
    console.table({ function: 'askWhatPizzaDoyouWantFunction' });
    const pizzas_list_formated = pizzasController.getAvaliablePizzasFormated();
    
    const speakOutput = orderPizzaResponses.askWhatPizzaDoyouWantMessage({ pizzas_list_formated });

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
    response.sessionState.sessionAttributes.flow = 'selectThePizzaFlavorFlow';
    response.sessionState.sessionAttributes.fallback_speakoutput = speakOutput.fallback;
    return response;
};

module.exports = {
    askWhatPizzaDoyouWantFunction
};