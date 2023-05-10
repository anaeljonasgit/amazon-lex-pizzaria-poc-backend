const orderController = {
    async addPizzaToOrder({ flavor, event }) {
        const controllers = JSON.parse(event.sessionState.sessionAttributes.controllers);
        controllers.orders.push(flavor);
        event.sessionState.sessionAttributes.controllers = JSON.stringify(controllers);
    },

    async cleanOrders({ event }) {
        const controllers = JSON.parse(event.sessionState.sessionAttributes.controllers);
        controllers.orders = [];
        event.sessionState.sessionAttributes.controllers = JSON.stringify(controllers);
    },

    async getAtualOrderArray({ event }) {
        const controllers = JSON.parse(event.sessionState.sessionAttributes.controllers);
        return controllers.orders;
    },

    async getAtualOrderFormated({ event }) {
        const orders = await this.getAtualOrderArray({ event });
        return orders.map((item, i) => {
            return ((i == orders.length - 1) && orders.length != 1) ? `e ${item}` : item;
        }).join(', ').replace(', e', ' e');
    }
};

module.exports = orderController;