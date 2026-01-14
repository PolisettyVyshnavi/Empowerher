import boxen from 'boxen';

const message = "I am using my first external module!";
const title = "Hurray!!!";
const classicBox = boxen(message, { title, padding: 1, margin: 1 });
console.log(classicBox);
const singleDoubleBox = boxen(message, { 
  title, 
  borderStyle: 'singleDouble', 
  padding: 1, 
  margin: 1 
});
console.log(singleDoubleBox);
const roundBox = boxen(message, { 
  title, 
  borderStyle: 'round', 
  padding: 1, 
  margin: 1 
});
console.log(roundBox);
const coloredBox = boxen(message, { 
  title, 
  borderStyle: 'double', 
  padding: 1, 
  margin: 1, 
  backgroundColor: 'blue', 
  titleAlignment: 'center' 
});
console.log(coloredBox);