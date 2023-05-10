const orderPizzaController = require('./orderPizza');
const fallbackController = require('./fallback');

const affirmative = require('./affirmative/affirmative');

const affirmativeController = async (event) => {
    console.table({ controller: 'affirmativeController' });
    const { flow } = event.sessionState.sessionAttributes;

    const router = {
        'doYouWantToSeeTheMenuFlow': orderPizzaController,
        'doYouWantConfirmTheSelectPizzaFlavorFlow': affirmative.confirmTheSelectPizzaFlavorFunction
    };

    return await router[flow] ? router[flow](event) : fallbackController(event);
};

module.exports = affirmativeController;