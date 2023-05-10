const welcome = require('./welcome/welcome');

const welcomeController = async (event) => {
    console.table({ controller: 'welcomeController' });
    return await welcome.welcomeMessageFunction(event);
};

module.exports = welcomeController;