// index.js

// Import the function from math.js
import { checkPrime } from './math.js';

// Test the function with different values
console.log("Is 2 prime? ->", checkPrime(2));   // true
console.log("Is 4 prime? ->", checkPrime(4));   // false
console.log("Is 17 prime? ->", checkPrime(17)); // true
console.log("Is 20 prime? ->", checkPrime(20)); // false
console.log("Is 23 prime? ->", checkPrime(23)); // true