// Assignment 2

const billInput = prompt("Enter your bill amount:");
const tipInput = prompt("Enter tip percentage:");

const subtotal = Number(billInput);
const tipPercentage = Number(tipInput);

if (billInput === null || tipInput === null ||
    billInput.trim() === "" || tipInput.trim() === "" ||
    Number.isNaN(subtotal) || Number.isNaN(tipPercentage) ||
    subtotal < 0 || tipPercentage < 0) {
  console.log("Please enter valid non-negative numbers.");
} else {
  const calculatedTip = subtotal * tipPercentage / 100;
  let total = subtotal;
  total =total + calculatedTip; 

  console.log("Subtotal: $" + subtotal);
  console.log("Tip Percentage: " + tipPercentage + "%");
  console.log("Calculated Tip: $" + calculatedTip);
  console.log("Total Amount to Pay: $" + total);
}
