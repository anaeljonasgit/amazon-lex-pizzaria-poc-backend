const fallbackController = require('./fallback');
const finish = require('./finish/finish');

const finishController = async (event) => {
    console.table({ controller: 'finishController' });
    return await finish.finishOrderFunction(event);
};

module.exports = finishController;