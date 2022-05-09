console.log("TASK 06");

var1 = 1;
var2 = 0;
var3 = true;

console.log("var1 > var2:", var1 > var2);                   //true, т.к. 1>0
console.log("var1 == var3:", var1 == var3);                 //true, т.к. приведенная к булю 1 = true и нестрогое равенство с true
console.log("var1 === var3:", var1 === var3);               //false, т.к. приведенная к булю 1 = true но строгое равенство с true, а типы данных разные
console.log("var1 != var3:", var1 != var3);                 //false, т.к. приведенная к булю 1 = true и нестрогое неравенство с true
console.log("var2 != var3:", var2 != var3);                 //true, т.к. приведенный к булю 0 = false и нестрогое неравенство с true
console.log("var1 > var2 == var3:", var1 > var2 == var3);   //true, этап 1 - 1 > 0 дает true; этап 2 - true == true дает true
console.log("var1 > var2 > var3:", var1 > var2 > var3);     //false, этап 1 - 1 > 0 дает true; этап 2 - true > true дает false