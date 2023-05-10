const ordersController = require('../../controllers/orders');

const finishResponses = require('../../responses/finish');

const finishOrderFunction = async (event) => {
    console.table({ function: 'askWhatPizzaDoyouWantFunction' });
    const order_list_formated = await ordersController.getAtualOrderFormated({ event });
    
    const speakOutput = order_list_formated ?
        finishResponses.finishOrderMessage({ order_list_formated }) :
        finishResponses.cantFinishOrderMessage();
    
    await ordersController.cleanOrders({ event });

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
    response.sessionState.sessionAttributes.flow = order_list_formated ? 'finishOrderFlow' : 'doYouWantToSeeTheMenuFlow';
    response.sessionState.sessionAttributes.fallback_speakoutput = speakOutput.fallback;
    return response;
};

module.exports = {
    finishOrderFunction
};