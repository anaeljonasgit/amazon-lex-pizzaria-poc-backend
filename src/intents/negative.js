// const negative = require('./negative/negative');
const orderPizzaController = require('./orderPizza');
const fallbackController = require('./fallback');

const negativeController = async (event) => {
    console.table({ controller: 'negativeController' });
    const { flow } = event.sessionState.sessionAttributes;

    const router = {
        'doYouWantConfirmTheSelectPizzaFlavorFlow': orderPizzaController
    };

    return await router[flow] ? router[flow](event) : fallbackController(event);
};

module.exports = negativeController;