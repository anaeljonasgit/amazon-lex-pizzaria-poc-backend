const fallbackFlowMessageFunction = async (event) => {
    console.table({ function: 'fallbackFlowMessageFunction' });
    const speakOutput = { message: event.sessionState.sessionAttributes.fallback_speakoutput };

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
    return response;
};

module.exports = {
    fallbackFlowMessageFunction
};