console.log("TASK 01");
console.log("Function Expression");
console.log("----== a ==----");

const getSum  = function (param1 = 0, param2 = 0) {
    if (!parseFloat(param1)) {param1 = 0};
    if (!parseFloat(param2)) {param2 = 0};
    return parseFloat(param1) + parseFloat(param2);
};

let result = getSum("fsd", true);
console.log("Result is:", result);
result = getSum();
console.log("Result is:", result);
result = getSum(5,6);
console.log("Result is:", result);
result = getSum(5, false);
console.log("Result is:", result);
result = getSum("5.125", true);
console.log("Result is:", result);

/*----------------------------------------------------------------------------------*/
console.log("----== b ==----");

const message = function (userName, userAge) {
    let msg;
    if (!parseInt(userAge)) {userAge = "XZ"};
    let age = parseInt(userAge);

    msg = "Укажите корректные данные!";
    (age < 18) && (msg = `${userName}, вы еще очень молоды!`);
    (age >= 18) && (age<50) && (msg = `${userName}, добро пожаловать в личный кабинет!`);
    (age >= 50) && (msg = `${userName}, моё почтение!`);
    // if (age < 18) {
    //     msg = `${userName}, вы еще очень молоды!`
    // }
    // else if (age >= 18 && age<50) {
    //     msg = `${userName}, добро пожаловать в личный кабинет!`
    // }
    // else if (age >= 50) {
    //     msg = `${userName}, моё почтение!`
    // }
    // else{
    //     msg = "Укажите корректные данные!";
    // }

    return msg;
}

let msg = message("Name", 17);
console.log(msg);
msg = message("Name", true);
console.log(msg);
msg = message();
console.log(msg);
msg = message("Name", "19");
console.log(msg);
msg = message("Name", "50sd");
console.log(msg);

/*-----------------------------------------------------------------------------------*/
console.log("----== c ==----");

const task_01с = function () {
    return "unexpected token";
}

console.log(task_01с());

/*-----------------------------------------------------------------------------------*/
console.log("----== d ==----");

const task_01d = function (param1) {
    let dataType = typeof param1;
    return dataType
}

console.log(task_01d(true));
console.log(task_01d("true"));
console.log(task_01d(123));
console.log(task_01d(123n));

/*-----------------------------------------------------------------------------------*/
console.log("----== e ==----");

const getMax = function (...rest) {
    let maxValue = Math.max(...rest);
    return maxValue;
}

console.log(getMax(0,1,2));
console.log(getMax(0,5,2));
console.log(getMax("8",1,2));
console.log(getMax(0,true,false));