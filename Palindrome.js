// This program checks if the given strings are palindromes

// Prompt user to enter two words
let word1 = prompt("Enter first word (e.g., RACECAR):");
let word2 = prompt("Enter second word (e.g., RECORDER):");

// Function to reverse a string
function reverseString(str) {
    return str.split('').reverse().join('');
}

// Function to check if a word is a palindrome
function isPalindrome(str) {
    return str.toLowerCase() === reverseString(str).toLowerCase();
}

// Output the results in console
console.log(`Original: ${word1}, Reversed: ${reverseString(word1)}, Is Palindrome: ${isPalindrome(word1)}`);
console.log(`Original: ${word2}, Reversed: ${reverseString(word2)}, Is Palindrome: ${isPalindrome(word2)}`);
