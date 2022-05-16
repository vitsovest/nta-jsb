console.log("TASK 01");
console.log("Function Expression");
console.log("----== a ==----");

const getSum  = function (param1 = 0, param2 = 0) {

    return parseFloat(param1) + parseFloat(param2);
};

let result = getSum(2, 1);
console.log("Result is:", result);

/*----------------------------------------------------------------------------------*/
console.log("----== b ==----");

const message = function (userName, userAge) {
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

/*-----------------------------------------------------------------------------------*/
console.log("----== e ==----");

const getMax = function (...rest) {
    let maxValue = Math.max(...rest);
    return maxValue;
}

console.log(getMax(0,1,2));