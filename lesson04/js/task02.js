console.log("TASK 02");
console.log("Function Declaration");
console.log("----== a ==----");

function task_02a (param1 = 0, param2 = 0) {

    return parseFloat(param1) + parseFloat(param2);
};

let result = task_02a(2, 1);
console.log("Result is:", result);

/*----------------------------------------------------------------------------------*/
console.log("----== b ==----");

function task_02b(userName, userAge) {
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

let msg = task_02b("Name", 17);
console.log(msg);

/*-----------------------------------------------------------------------------------*/
console.log("----== c ==----");

function task_02c() {
    return "unexpected token";
}

console.log(task_02c());

/*-----------------------------------------------------------------------------------*/
console.log("----== d ==----");

function task_02d(param1) {
    let dataType = typeof param1;
    return dataType
}

console.log(task_02d(true));

/*-----------------------------------------------------------------------------------*/
console.log("----== e ==----");

function task_02e(...rest) {
    let maxValue = Math.max(...rest);
    return maxValue;
}

console.log(task_02e(0,1,2));