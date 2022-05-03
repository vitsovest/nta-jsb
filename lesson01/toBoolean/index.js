console.log("toBoolean");

//любое строчное значение к Boolean
let value = "Bla Bla Bla";

//1st way
let toBoolean = Boolean(value);
console.log(`${value}, через конструктор Boolean()`, toBoolean);
console.log(`тип данных ${value}, через конструктор Boolean()`, typeof toBoolean);

//2nd way
toBoolean = !!value;
console.log(`${value}, через  !!`, toBoolean);
console.log(`тип данных ${value}, через  !!`, typeof toBoolean);

//строчное число к Boolean
value = "123";

//1st way
toBoolean = Boolean(value);
console.log(`${value}, через конструктор Boolean()`, toBoolean);
console.log(`тип данных ${value}, через конструктор Boolean()`, typeof toBoolean);

//2nd way
toBoolean = !!value;
console.log(`${value}, через  !!`, toBoolean);
console.log(`тип данных ${value}, через  !!`, typeof toBoolean);

//пустая строка к Boolean
value = "";

//1st way
toBoolean = Boolean(value);
console.log(`${value}, через конструктор Boolean()`, toBoolean);
console.log(`тип данных ${value}, через конструктор Boolean()`, typeof toBoolean);

//2nd way
toBoolean = !!value;
console.log(`${value}, через  !!`, toBoolean);
console.log(`тип данных ${value}, через  !!`, typeof toBoolean);

//строка с пробелом (не пустая) к Boolean
value = " ";

//1st way
toBoolean = Boolean(value);
console.log(`${value}, через конструктор Boolean()`, toBoolean);
console.log(`тип данных ${value}, через конструктор Boolean()`, typeof toBoolean);

//2nd way
toBoolean = !!value;
console.log(`${value}, через  !!`, toBoolean);
console.log(`тип данных ${value}, через  !!`, typeof toBoolean);



//число to Boolean
value = 0;

//1st method
toBoolean = Boolean(value);

console.log(`${value}, через конструктор Boolean(): `, toBoolean);
console.log(`Тип данных ${value}, через конструктор Boolean():`, typeof toBoolean);

//2nd way
toBoolean = !!value;
console.log(`${value}, через  !!`, toBoolean);
console.log(`Тип данных ${value}, через  !!`, typeof toBoolean);

value = 1;

//1st method
toBoolean = Boolean(value);

console.log(`${value}, через конструктор Boolean(): `, toBoolean);
console.log(`Тип данных ${value}, через конструктор Boolean():`, typeof toBoolean);

//2nd way
toBoolean = !!value;
console.log(`${value}, через  !!`, toBoolean);
console.log(`Тип данных ${value}, через  !!`, typeof toBoolean);


//Undefined to Boolean
value = undefined;

//1st method
toBoolean = Boolean(value);

console.log(`${value}, через конструктор Boolean(): `, toBoolean);
console.log(`Тип данных ${value}, через конструктор Boolean():`, typeof toBoolean);

//2nd way
toBoolean = !!value;
console.log(`${value}, через кнарный !!`, toBoolean);
console.log(`Тип данных ${value}, кнарный !!`, typeof toBoolean);

//null to Boolean
value = null;

//1st method
toBoolean = Boolean(value);

console.log(`${value}, через конструктор Boolean(): `, toBoolean);
console.log(`Тип данных ${value}, через конструктор Boolean():`, typeof toBoolean);

//2nd way
toBoolean = !!value;
console.log(`${value}, через кнарный !!`, toBoolean);
console.log(`Тип данных ${value}, кнарный !!`, typeof toBoolean);

//NaN to Boolean
value = NaN;

//1st method
toBoolean = Boolean(value);

console.log(`${value}, через конструктор Boolean(): `, toBoolean);
console.log(`Тип данных ${value}, через конструктор Boolean():`, typeof toBoolean);

//2nd way
toBoolean = !!value;
console.log(`${value}, через кнарный !!`, toBoolean);
console.log(`Тип данных ${value}, кнарный !!`, typeof toBoolean);

//Infinity to Boolean
value = Infinity;

//1st method
toBoolean = Boolean(value);

console.log(`${value}, через конструктор Boolean(): `, toBoolean);
console.log(`Тип данных ${value}, через конструктор Boolean():`, typeof toBoolean);

//2nd way
toBoolean = !!value;
console.log(`${value}, через кнарный !!`, toBoolean);
console.log(`Тип данных ${value}, кнарный !!`, typeof toBoolean);

// console.log(Boolean(""));
// console.log(Boolean(0));
// console.log(Boolean(NaN));
// console.log(Boolean(undefined));
// console.log(Boolean(null));
// console.log(Boolean(false));