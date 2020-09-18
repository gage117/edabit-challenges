/**
 * Create a function that takes a string and returns a string in which each character is repeated once.
 */

const doubleChar = str => str.split('').map(char => `${char}${char}`).join('');

console.log(doubleChar("String")); // "SSttrriinngg"
console.log(doubleChar("Hello World!")); // "HHeelllloo  WWoorrlldd!!"
console.log(doubleChar("1234!_ ")); // "11223344!!__  "