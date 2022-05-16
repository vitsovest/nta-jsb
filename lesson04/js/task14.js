console.log("TASK 14");

let deliveryToCountry = ["КИТАЙ", "ЧИЛИ", "АВСТРАЛИЯ", "ИНДИЯ", "ЯМАЙКА"];
let deliveryPrice = [100, 250, 170, 80, 120];

let deliveryCountry = prompt("Which country dou you want to deliver?").toUpperCase().trim();

let indx = deliveryToCountry.indexOf(deliveryCountry.toUpperCase());

console.log(deliveryCountry);
console.log(indx);
console.log(`Доставка в ${deliveryCountry} будет стоить ${deliveryPrice[indx]} кредитов`);
// console.log(deliveryToCountry.length);


// switch (indx){
//     case 0:
//         message = 'Canceled by user!';
//         break;
//     case ADMIN_PASSWORD:
//         message = 'Welcome!';
//         break;
//     default:
//         message = "Access restricted!"
// }