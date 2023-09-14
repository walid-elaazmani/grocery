import { Template } from "./classes/Template.js";
import { GroceryList } from "./classes/GroceryList.js";
const form = document.querySelector('.new-item');
const itemInput = document.querySelector('#item');
const quantityInput = document.querySelector('#quantity');
const storeInput = document.querySelector('#store');
const ul = document.querySelector('ul');
const list = new Template(ul);
form.addEventListener('submit', (event) => {
    event.preventDefault();
    const item = itemInput.value;
    const quantity = parseInt(quantityInput.value);
    const store = storeInput.value;
    const newItem = new GroceryList(item, quantity, store);
    list.render(newItem, 'Grocery item', 'start');
    itemInput.value = '';
    quantityInput.value = '';
    storeInput.value = '';
});
