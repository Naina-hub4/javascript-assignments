//  Interactive Product Inventory & Analytics Dashboard
console.log("Initializing Inventory System");

const inventory = [
  { name: "Laptop", price: 800 },
  { name: "Mouse", price: 25 }
];

const productNameInput = prompt('Enter a product name ');
const productPriceInput = prompt("Enter the product price :");

if (productNameInput === null || productPriceInput === null ||
    productNameInput.trim() === "" || productPriceInput.trim() === "" ||
    Number.isNaN(Number(productPriceInput)) || Number(productPriceInput) <= 0) {
  console.log("Invalid input. Please enter a product name and a price greater than 0.");
} else {
  const newProduct = {
    name: productNameInput.trim(),
    price: Number(productPriceInput)
  };

  inventory.push(newProduct);
  console.log("[Prompt executed: User adds \"" + newProduct.name + "\" at \"$" + newProduct.price + "\"]");

  function getCategory(price) {
    if (price < 100) {
      return "Budget";
    } else if (price < 200) {
      return "Standard";
    } else {
      return "Premium";
    }
  }

  
  function getBadge(category) {
    switch (category) {
      case "Budget": return "[BUDGET]";
      case "Standard": return "[STANDARD]";
      default: return "[PREMIUM]";
    }
  }

  
  inventory.forEach(product => {
    const category = getCategory(product.price);
    console.log("* Item: " + product.name + " ($" + product.price + ") -> Category: " + category + " " + getBadge(category));
  });

  const totalValue = inventory.reduce((sum, product) => sum + product.price, 0);
  const affordableItems = inventory.filter(product => product.price < 200);
  const reportList = inventory.map(product => product.name.toUpperCase() + ": $" + product.price);

  const addTax = (amount, taxRate = 0) => amount + amount * taxRate / 100;
  const totalWithTax = addTax(totalValue, 0); 

  console.log("\nFinancial Analytics");
  console.log("Total Inventory Value: $" + totalValue);
  console.log('Filtered Affordable Items (Under $200): ' + JSON.stringify(affordableItems.map(item => item.name)));
  console.log("Formatted Report List: " + JSON.stringify(reportList));
  console.log("Inventory Value After Tax: $" + totalWithTax);
}
