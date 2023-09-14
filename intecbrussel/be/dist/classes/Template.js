import { GroceryList } from "./GroceryList.js";
export class Template {
    constructor(container) {
        this.container = container;
    }
    render(item, heading, pos) {
        const li = document.createElement('li');
        const h4 = document.createElement('h4');
        h4.innerText = heading;
        li.append(h4);
        const p = document.createElement('p');
        p.innerText = item.format();
        li.append(p);
        const deleteButton = document.createElement('button');
        deleteButton.innerText = 'delete';
        li.append(deleteButton);
        const updateButton = document.createElement('button');
        updateButton.innerText = 'Update';
        li.append(updateButton);
        if (pos === 'start') {
            this.container.prepend(li);
        }
        else {
            this.container.append(li);
        }
        deleteButton.addEventListener('click', () => {
            li.remove();
        });
        updateButton.addEventListener('click', () => {
            if (item instanceof GroceryList) {
                const updatedItem = prompt('Enter updated item name:');
                const updatedQuantity = prompt('Enter updated quantity:');
                const updatedStore = prompt('Enter updated store name:');
                if (updatedItem && updatedQuantity && updatedStore) {
                    const groceryItem = item;
                    groceryItem.item = updatedItem;
                    groceryItem.quantity = parseInt(updatedQuantity, 10);
                    groceryItem.store = updatedStore;
                    h4.innerText = heading;
                    p.innerText = groceryItem.format();
                }
            }
        });
    }
}
