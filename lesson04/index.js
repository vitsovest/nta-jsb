// import "./js/task01.js";
// import "./js/task02.js";
// import "./js/task03.js";

const emojis = ['a','b','c'];
console.log(emojis);
console.log(emojis.map(x => x + 'a'));
console.log(emojis.filter(x => x !== 'b'));
console.log(emojis.reduce((acc, cur) => acc + 'c'));

const client = {
    name: "Mr. Smith",
    age: 21,
}

console.log(client);

const increaseAge = (x = {...client}) => x.age += 1
const changeAgeAmdName = (x = {...client}) => {
    x.age +=1
    x.name = "Ivan"
}

increaseAge(client)
changeAgeAmdName()

console.log(client)