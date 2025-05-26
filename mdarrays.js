// This script creates a multidimensional array of [name, age] pairs

// Get user inputs and parse to arrays
let names = prompt("Enter names separated by commas:").split(',');
let ages = prompt("Enter corresponding ages separated by commas:").split(',').map(Number);

// Combine each name with corresponding age
let multiDimensionalArray = [];

for (let i = 0; i < names.length; i++) {
    multiDimensionalArray.push([names[i].trim(), ages[i]]);
}

// Log each pair line by line
console.log("Restructured Array [name, age]:");
multiDimensionalArray.forEach(pair => {
    console.log(pair);
});
