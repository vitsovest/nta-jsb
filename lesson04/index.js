// import "./js/task01.js";
// import "./js/task02.js";
// import "./js/task03.js";

const emojis = ['a','b','c'];
console.log(emojis);
console.log(emojis.map(x => x + 'a'));
console.log(emojis.filter(x => x !== 'b'));
console.log(emojis.reduce((acc, cur) => acc + 'c'));