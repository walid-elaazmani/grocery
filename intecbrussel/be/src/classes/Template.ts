import {Formatter} from "../interfaces/Formatter.js";
import { GroceryList } from "./GroceryList.js";

export class Template {

    constructor(public container: HTMLUListElement) {}

    render(item: Formatter, heading: string, pos: 'start' | 'end') {

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
        } else {
            this.container.append(li);
        }

        deleteButton.addEventListener('click', () => {
            li.remove(); // Remove the clicked item when the "delete" button is clicked
          });


        updateButton.addEventListener('click', () =>  {
            // Check if 'item' is an instance of 'GroceryList'
            if (item instanceof GroceryList) {
              // Prompt the user to enter updated information
              const updatedItem = prompt('Enter updated item name:');
              const updatedQuantity = prompt('Enter updated quantity:');
              const updatedStore = prompt('Enter updated store name:')
             
      
              // Update the 'GroceryList' object with the new values
              if (updatedItem && updatedQuantity && updatedStore) {
                // Cast 'item' to 'GroceryList'
                const groceryItem = item as GroceryList;

                groceryItem.item = updatedItem;
                groceryItem.quantity = parseInt(updatedQuantity);
                groceryItem.store = updatedStore;

                // Update the displayed information in the list item
                h4.innerText = heading;
                p.innerText = groceryItem.format();
              }
            }
          });


    }
}