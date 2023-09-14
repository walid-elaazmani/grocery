export class GroceryList {
    constructor(item, quantity, store) {
        this.item = item;
        this.quantity = quantity;
        this.store = store;
    }
    format() {
        return `${this.quantity} X ${this.item} from: ${this.store}`;
    }
}
