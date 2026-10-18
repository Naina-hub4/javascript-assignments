// Assignment 5

function rectangleArea(length = 5, width = 4) {
  return length * width;
}

const arrowRectangleArea = (length = 5, width = 4) => length * width;

console.log("Standard Function Area :", rectangleArea());
console.log("Arrow Function Area :", arrowRectangleArea(10, 3));

{
  let blockVar = "I only exist inside this block";
  console.log("Inside block:", blockVar);
}

try {
  console.log(blockVar); 
} catch (error) {
  console.log("Scope Test Error: ReferenceError: blockVar is not defined");
}
