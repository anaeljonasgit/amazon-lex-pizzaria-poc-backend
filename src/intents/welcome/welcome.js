const welcomeResponses = require('../../responses/welcome');

const welcomeMessageFunction = async (event) => {
    console.table({ function: 'welcomeMessageFunction' });
    const speakOutput = welcomeResponses.welcomeDoYouWantToSeeTheMenuMessage(event);

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
    welcomeMessageFunction
};