console.log("TASK 03");
console.log("Arrow Function");
console.log("----== a ==----");

const getSum  = (param1 = 0, param2 = 0) => {

 return parseFloat(param1) + parseFloat(param2);
};

let result = getSum(2, 1);
console.log("Result is:", result);

/*----------------------------------------------------------------------------------*/
console.log("----== b ==----");

const message = (userName, userAge) => {
 let msg;
 let age = parseInt(userAge);

 if (age < 18) {
  msg = `${userName}, вы еще очень молоды!`
 }
 else if (age >= 18 && age<50) {
  msg = `${userName}, добро пожаловать в личный кабинет!`
 }
 else if (age >= 50) {
  msg = `${userName}, моё почтение!`
 }
 else{
  msg = "Укажите корректные данные!";
 }

 return msg;
}

let msg = message("Name", 17);
console.log(msg);

/*-----------------------------------------------------------------------------------*/
console.log("----== c ==----");

const task_01с = () => "unexpected token";

console.log(task_01с());

/*-----------------------------------------------------------------------------------*/
console.log("----== d ==----");

const task_01d = param1 => typeof param1;


console.log(task_01d(true));

/*-----------------------------------------------------------------------------------*/
console.log("----== e ==----");

const getMax = (...rest) => Math.max(...rest);


console.log(getMax(0,1,2));