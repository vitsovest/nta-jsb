console.log("TASK 11");

let total = 10;     //items quantity at stock
let ordered;        //for ordered items

ordered = parseInt(prompt("How many items doy you need"));

if (ordered > total) {
    console.log("There are not enough items at stock");
} else if (ordered <= total) {
    console.log("The order is processed. Manager will contact you");
} else {
    console.log("Please, enter quantity");
}