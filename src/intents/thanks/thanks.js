const thanksResponses = require('../../responses/thanks');

const thanksMessageFunction = async (event) => {
    console.table({ function: 'thanksMessageFunction' });
    const speakOutput = thanksResponses.thanksMessage(event);

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
    response.sessionState.sessionAttributes.flow = 'doYouWantToSeeTheMenuFlow';
    response.sessionState.sessionAttributes.fallback_speakoutput = speakOutput.fallback;
    return response;
};

module.exports = {
    thanksMessageFunction
};