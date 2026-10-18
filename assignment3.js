// Assignment 3

const score = 85;
let grade;

if (score >= 90) {
  grade = "A";
} else if (score >= 80) {
  grade = "B";
} else if (score >= 70) {
  grade = "C";
} else if (score >= 60) {
  grade = "D";
}

switch (grade) {
  case "A":
    console.log("Grade: A");
    break;
  case "B":
    console.log("Grade: B");
    break;
  case "C":
    console.log("Grade: C");
    break;
  
  default:
    console.log("Grade: D");
}

const status = score >= 40 ? "Passed" : "Failed";

console.log("Score:", score);
console.log("Status:", status);
