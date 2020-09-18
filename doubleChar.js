/**
 * Create a function that takes a string and returns a string in which each character is repeated once.
 */

const doubleChar = str => str.split('').map(char => `${char}${char}`).join('');