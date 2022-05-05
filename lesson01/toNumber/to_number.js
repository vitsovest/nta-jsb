console.log("toNumber");

//любое строчное значение к числу
let value = "Bla Bla Bla";

//1st way
let toNumber = Number(value);
console.log(`${value}, через конструктор Number()`, toNumber);
console.log(`тип данных ${value}, через конструктор Number()`, typeof toNumber);

//2nd way
toNumber = +value;
console.log(`${value}, через унарный +`, toNumber);
console.log(`тип данных ${value}, через унарный +`, typeof toNumber);

//строчное число к числу
value = "123";

//1st way
toNumber = Number(value);
console.log(`${value}, через конструктор Number()`, toNumber);
console.log(`тип данных ${value}, через конструктор Number()`, typeof toNumber);

//2nd way
toNumber = +value;
console.log(`${value}, через унарный +`, toNumber);
console.log(`тип данных ${value}, через унарный +`, typeof toNumber);

//пустая строка к числу
value = "";

//1st way
toNumber = Number(value);
console.log(`${value}, через конструктор Number()`, toNumber);
console.log(`тип данных ${value}, через конструктор Number()`, typeof toNumber);

//2nd way
toNumber = +value;
console.log(`${value}, через унарный +`, toNumber);
console.log(`тип данных ${value}, через унарный +`, typeof toNumber);

//строка с пробелом (не пустая) к числу
value = " ";

//1st way
toNumber = Number(value);
console.log(`${value}, через конструктор Number()`, toNumber);
console.log(`тип данных ${value}, через конструктор Number()`, typeof toNumber);

//2nd way
toNumber = +value;
console.log(`${value}, через унарный +`, toNumber);
console.log(`тип данных ${value}, через унарный +`, typeof toNumber);



//Boolean to Number
value = true;

//1st method
toNumber = Number(value);

console.log(`${value}, через конструктор Number(): `, toNumber);
console.log(`Тип данных ${value}, через конструктор Number():`, typeof toNumber);

//2nd way
toNumber = +value;
console.log(`${value}, через унарный +`, toNumber);
console.log(`Тип данных ${value}, через унарный +`, typeof toNumber);

value = false;

//1st method
toNumber = Number(value);

console.log(`${value}, через конструктор Number(): `, toNumber);
console.log(`Тип данных ${value}, через конструктор Number():`, typeof toNumber);

//2nd way
toNumber = +value;
console.log(`${value}, через унарный +`, toNumber);
console.log(`Тип данных ${value}, через унарный +`, typeof toNumber);


//Undefined to Number
value = undefined;

//1st method
toNumber = Number(value);

console.log(`${value}, через конструктор Number(): `, toNumber);
console.log(`Тип данных ${value}, через конструктор Number():`, typeof toNumber);

//2nd way
toNumber = +value;
console.log(`${value}, через кнарный +`, toNumber);
console.log(`Тип данных ${value}, кнарный +`, typeof toNumber);

//null to Number
value = null;

//1st method
toNumber = Number(value);

console.log(`${value}, через конструктор Number(): `, toNumber);
console.log(`Тип данных ${value}, через конструктор Number():`, typeof toNumber);

//2nd way
toNumber = +value;
console.log(`${value}, через кнарный +`, toNumber);
console.log(`Тип данных ${value}, кнарный +`, typeof toNumber);