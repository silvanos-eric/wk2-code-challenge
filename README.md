# Shopping List Application

This is a simple web-based shopping list application that allows users to add items to a shopping list, mark them as purchased, and clear the list.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

## Installation

To run this project locally, you don't need any special tools or dependencies. Just clone the repository and open the `index.html` file in your web browser.

```bash
git clone https://github.com/silvanos-eric/wk2-code-challenge.git
cd wk2-code-challenge
```

Then, open `index.html` in your browser.

## Usage

1. Open `index.html` in your web browser.
2. Enter the name of the item you want to add to the shopping list in the input field.
3. Click the "Add" button to add the item to the list.
4. Click the "Mark Purchased" button next to an item to mark it as purchased.
5. Click the "Mark Unpurchased" button to revert the purchased status.
6. Click the "Clear List" button to remove all items from the list.

## Project Structure

```
shopping-list/
│
├── index.html
├── main.js
└── style.css
```

### index.html

The HTML file that sets up the structure of the application. It includes the following key elements:

- An input form to add new items.
- A list container to display the shopping list items.
- Buttons to mark items as purchased, unpurchased, and clear the entire list.

### main.js

This JavaScript file contains the functionality for the application, including:

- Adding items to the shopping list.
- Clearing all items from the list.
- Marking items as purchased or unpurchased.
- Updating the DOM to reflect changes in the list.

### style.css

This CSS file contains the styles for the application, ensuring a visually appealing interface. It includes:

- Basic styles for the main layout.
- Styles for purchased items (e.g., opacity and text decoration).

## Contributing

Contributions are welcome! Please open an issue or submit a pull request if you have any improvements or bug fixes.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
