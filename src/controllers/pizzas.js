const pizzasController = {
    state: {
        pizzas: [
            'Calabresa',
            'Frango',
            'Catupiry',
            'Baiana'
        ]
    },

    getAvaliablePizzasArray() {
        return this.state.pizzas;
    },

    getAvaliablePizzasArrayInLowerCase() {
        return this.state.pizzas.map(item => {
            return item.toLowerCase();
        });
    },

    getAvaliablePizzasFormated() {
        return this.state.pizzas.map((item, i) => {
                return ((i == this.state.pizzas.length - 1) && this.state.pizzas.length != 1) ? `ou ${item}` : item;
            }).join(', ').replace(', ou', ' ou');
    }
};

module.exports = pizzasController;