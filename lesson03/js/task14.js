console.log("TASK 14");

let deliveryToCountryPrice = {
    Китай: 100,
    Чили: 250,
    Австралия: 170,
    Индия: 80,
    Ямайка: 120
};

let deliveryCountry = prompt("Which country dou you want to deliver?").toUpperCase().trim();

console.log(deliveryToCountryPrice.Китай);
console.log(Object.keys(deliveryToCountryPrice));
console.log(deliveryToCountryPrice);

for (let value of Object.keys(deliveryToCountryPrice)){
    if (value == deliveryCountry) {
        console.log(value);
        break;
    }
}

// switch (deliveryCountry){
//     case null:
//         message = 'Canceled by user!';
//         break;
//     case ADMIN_PASSWORD:
//         message = 'Welcome!';
//         break;
//     default:
//         message = "Access restricted!"
// }