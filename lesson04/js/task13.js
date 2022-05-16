console.log("TASK 13");

let credits = 23580;
let pricePerDroid = 3000;
let totalPrice, itemsNumber;

itemsNumber = prompt("How many droids do you need?");

if (itemsNumber == null){
    console.log("Canceled by user!");
} else {
    totalPrice = pricePerDroid * parseInt(itemsNumber);
    if (totalPrice > credits) {
        console.log("Not enough credits to purchase");
    } else {
        credits = credits - totalPrice;
        console.log(`You have purchased ${itemsNumber} droids, ${credits} credits left`);

    }
}