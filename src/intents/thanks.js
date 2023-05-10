const thanks = require('./thanks/thanks');

const thanksController = async (event) => {
    console.table({ controller: 'thanksController' });
    return await thanks.thanksMessageFunction(event);
};

module.exports = thanksController;