console.log("TASK 15");

let prmt;
let input = 0;
let total = 0;

do {
    prmt = prompt("Enter number");
    if (!isNaN(prmt)) {
        total = total + Number(prmt);
    } else {
        alert("You entered not number, try again!");
    }
}
 while (prmt !== null);

alert(`Total amount is ${total}`);