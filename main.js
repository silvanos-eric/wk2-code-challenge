// Application state
let shoppingList = [];

/**
 * Adds an item to the shopping list.
 *
 * @param {string} item - The item to be added to the list.
 */
function addItem(item) {
  // Push the item to the shopping list.
  shoppingList.push(item);
}

/**
 * Removes all items from the shopping list.
 *
 * @return {void} This function does not return anything.
 */
function removeAllItems() {
  shoppingList = [];
}

/**
 * Toggles the 'purchased' class on the provided item element.
 *
 * @param {Object} item - The item element to toggle the class on.
 * @return {void} No return value.
 */
function purchaseItem(item) {
  item.classList.toggle("purchased");
}

/**
 * Validates the given data by trimming it and checking if it is not empty.
 *
 * @param {string} data - The data to be validated.
 * @return {string|null} The trimmed data if it is not empty, otherwise null.
 */
function validateData(data) {
  const dataTrimmed = data.trim();
  if (dataTrimmed.length > 0) {
    return dataTrimmed;
  }
  return null;
}

// DOM Elements of interest
const shoppingListEl = document.querySelector(".shopping-list");
const inputEl = document.querySelector(".input");
const inputFormEl = document.querySelector(".input-form");
const addBtnEl = document.querySelector(".add-btn");
const clearListBtn = document.querySelector(".clear-list-btn");

// Functionality to clear the shopping list
clearListBtn.addEventListener("click", (event) => {
  removeAllItems();
  // Update the DOM to reflect the new changes
  createElementsFromArray(shoppingList);
});

// Functionality to add an item to the shopping list javascript array
inputFormEl.addEventListener("submit", (event) => {
  event.preventDefault();

  const itemName = inputEl.value;
  inputEl.value = "";
  const validatedItemName = validateData(itemName);
  if (validatedItemName) {
    shoppingList.push(validatedItemName);
  }

  // Update the DOM
  createElementsFromArray(shoppingList);
});

// Functionality to create a DOM <li> element,
// for each item in the shoppingList array
/**
 * Creates and appends a DOM element for each item in the given array.
 * @param {Array} items - The array of items to create elements for.
 * @param {string} containerId - The id of the container element to append the items to.
 * */
function createElementsFromArray(items, container = shoppingListEl) {
  // Get a reference to the container - use default parameter value
  // Create a document fragment to minimize reflows and repaints
  const fragment = document.createDocumentFragment();

  // Before updating the DOM with the new array,
  // remove the existing shopping list
  container.innerHTML = "";
  // Check if array is empty
  if (items.length === 0) {
    // do nothing
    return;
  } else {
    // Loop through the array of items
    items.forEach((item) => {
      // Create a new DOM element for the item
      const shoppingListItemEl = document.createElement("li");
      shoppingListItemEl.classList.add("shopping-list-item");

      // Set the content of the element
      shoppingListItemEl.textContent = item;

      // Append the element to the document fragment
      fragment.appendChild(shoppingListItemEl);

      // Create two button elements, 'Mark Purchased' and 'Mark Unpurchased'
      const markPurchasedBtn = document.createElement("button");
      markPurchasedBtn.textContent = "Mark Purchased";
      markPurchasedBtn.classList.add("mark-purchased");
      shoppingListItemEl.appendChild(markPurchasedBtn);

      const markUnpurchasedBtn = document.createElement("button");
      markUnpurchasedBtn.textContent = "Mark Unpurchased";
      markUnpurchasedBtn.classList.add("hidden", "mark-unpurchased");
      shoppingListItemEl.appendChild(markUnpurchasedBtn);
    });

    // Append the fragment to the container
    container.append(fragment);
  }
}

// Add 'purchase' functionality for each shopping list item
shoppingListEl.addEventListener("click", (event) => {
  // Check if the clicked item is the button
  // with a class of 'mark-purchased'
  if (event.target.matches(".mark-purchased")) {
    // Handle the click event for the child element.
    // Get a reference to the shopping list item element.
    const shoppingListItemEl = event.target.parentElement;
    // Set the dataset property purchased to true.
    shoppingListItemEl.dataset.purchased = true;
    // Hide the button with a class of 'mark-purchased'.
    event.target.classList.add("hidden");
    // Show the button with a class of 'mark-unpurchased'.
    // Get a reference to the button.
    // Constrain the search,
    // to the current shopping list item element.
    const markUnpurchased =
      shoppingListItemEl.querySelector(".mark-unpurchased");
    markUnpurchased.classList.remove("hidden");
  }
});

// Add 'unpurchase' functionality for each shopping list item
shoppingListEl.addEventListener("click", (event) => {
  // Check if the clicked item is the button,
  // with a class of 'mark-unpurchased'
  if (event.target.matches(".mark-unpurchased")) {
    // Handle the click event for the child element.
    // Get a reference to the shopping list item element.
    const shoppingListItemEl = event.target.parentElement;
    // Set the dataset property purchased to false.
    shoppingListItemEl.dataset.purchased = false;
    // Hide the button with a class 'mark-unpurchased'
    event.target.classList.add("hidden");
    // Show the button with a class of 'mark-purchased'
    // Get a reference to the button.
    // Constrain the search,
    // to the current shopping list item element.
    const markPurchased = shoppingListItemEl.querySelector(".mark-purchased");
    markPurchased.classList.remove("hidden");
  }
});
