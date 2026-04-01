// stocks.js

// Gérer les stocks d'un utilisateur connecté

class Stocks {
    constructor() {
        this.items = {};
    }

    addItem(item, quantity) {
        if (this.items[item]) {
            this.items[item] += quantity;
        } else {
            this.items[item] = quantity;
        }
    }

    removeItem(item, quantity) {
        if (this.items[item]) {
            this.items[item] -= quantity;
            if (this.items[item] <= 0) {
                delete this.items[item];
            }
        }
    }

    getStock() {
        return this.items;
    }
}

// Exemple d'utilisation
const userStocks = new Stocks();
userStocks.addItem('Produit A', 10);
userStocks.removeItem('Produit A', 5);
console.log(userStocks.getStock()); // Affiche l'état des stocks