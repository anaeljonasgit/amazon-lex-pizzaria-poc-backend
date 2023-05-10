const welcomeController = require('./welcome');

const fallback = require('./fallback/fallback');

const fallbackController = async (event) => {
    console.table({ controller: 'fallbackController' });
    const { flow } = event.sessionState.sessionAttributes;

    const router = {
        'finishOrderFlow': welcomeController
    };

    return router[flow] ? router[flow](event) : fallback.fallbackFlowMessageFunction(event);
};

module.exports = fallbackController;