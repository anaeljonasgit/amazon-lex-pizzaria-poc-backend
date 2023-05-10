const ordersController = require('../../controllers/orders');

const orderPizzaResponses = require('../../responses/orderPizza');

const confirmTheSelectPizzaFlavorFunction = async (event) => {
    console.table({ function: 'confirmTheSelectPizzaFlavorFunction' });
    await ordersController.addPizzaToOrder({ flavor: event.sessionState.sessionAttributes.selected_flavor, event });

    const speakOutput = orderPizzaResponses.successSelectPizzaFlavorMessage({
        selected_flavor: event.sessionState.sessionAttributes.selected_flavor
    });

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
    response.sessionState.sessionAttributes.flow = 'doYouWantAddMoreOrFinishFlow';
    response.sessionState.sessionAttributes.fallback_speakoutput = speakOutput.fallback;
    return response;
};

module.exports = {
    confirmTheSelectPizzaFlavorFunction
};