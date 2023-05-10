const { response } = require('express');
const fallbackController = require('./fallback');
const orderPizza = require('./orderPizza/orderPizza');

const orderPizzaController = async (event) => {
    console.table({ controller: 'orderPizzaController' });
    return await orderPizza.askWhatPizzaDoyouWantFunction(event);
};

module.exports = orderPizzaController;