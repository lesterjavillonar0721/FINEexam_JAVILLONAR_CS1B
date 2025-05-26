// This script merges, sorts, and displays arrays

// Prompt user for input and convert to arrays
let numbers = prompt("Enter numbers separated by commas:").split(',').map(Number);
let names = prompt("Enter names separated by commas:").split(',');

// Log the original input
console.log("Original Numbers:", numbers);
console.log("Original Names:", names);

// Merge number and name arrays
let mergedArray = [...numbers, ...names];
console.log("Merged Array:", mergedArray);

// Sort numbers in descending order
let sortedNumbers = [...numbers].sort((a, b) => b - a);
console.log("Sorted Numbers (Descending):", sortedNumbers);

// Sort names in ascending (alphabetical) order
let sortedNames = [...names].sort();
console.log("Sorted Names (Alphabetically):", sortedNames);
