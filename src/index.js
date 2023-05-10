const intents = require('./intents');

exports.handler = async (event) => {
    const { intent, sessionAttributes } = event.sessionState;

    const controllers = {
        orders: []
    };
    
    const intentsController = {
        'WelcomeIntent': intents.welcome,
        'OrderPizzaIntent': intents.orderPizza,
        'AffirmativeIntent': intents.affirmative,
        'NegativeIntent': intents.negative,
        'FlavorIntent': intents.flavor,
        'FinishIntent': intents.finish,
        'ThanksIntent': intents.thanks,
        'FallbackIntent': intents.fallback
    };

    const respostaGenerica = {
        "sessionState": {
            "dialogAction": {
                "type": "ElicitIntent",
            },
            "intent": {
                "name": intent.name,
                "state": intent.state
            },
            "sessionAttributes": {},
        },
        "messages": [{            
            'contentType': 'PlainText',
            'content': `Você chamou a intent ${intent.name}.`
        }]
    };

    sessionAttributes.controllers = sessionAttributes.controllers || JSON.stringify(controllers);
    return await intentsController[intent.name] ? intentsController[intent.name](event) : respostaGenerica;
};