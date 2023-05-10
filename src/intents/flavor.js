const fallbackController = require('./fallback');
const flavor = require('./flavor/flavor');

const flavorController = async (event) => {
    console.table({ controller: 'flavorController' });
    return await flavor.selectPizzaFlavorFunction(event);
};

module.exports = flavorController;