import {Formatter} from "../interfaces/Formatter.js";

export class GroceryList implements Formatter{

    constructor(
        public item: string,
        public quantity: number,
        public store: string) {}

    format(): string {
        return `${this.quantity} X ${this.item} from: ${this.store}`;
    }

}