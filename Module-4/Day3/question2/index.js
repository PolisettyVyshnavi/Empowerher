// index.js
import boxen from 'boxen';

// Define message and title
const message = "I am using my first external module!";
const title = "Hurray!!!";

// Classic (default style)
const classicBox = boxen(message, { title, padding: 1, margin: 1 });
console.log(classicBox);

// SingleDouble style
const singleDoubleBox = boxen(message, { 
  title, 
  borderStyle: 'singleDouble', 
  padding: 1, 
  margin: 1 
});
console.log(singleDoubleBox);

// Round style
const roundBox = boxen(message, { 
  title, 
  borderStyle: 'round', 
  padding: 1, 
  margin: 1 
});
console.log(roundBox);

// Bonus: Background color customization
const coloredBox = boxen(message, { 
  title, 
  borderStyle: 'double', 
  padding: 1, 
  margin: 1, 
  backgroundColor: 'blue', 
  titleAlignment: 'center' 
});
console.log(coloredBox);