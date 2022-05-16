console.log("TASK 12");

const ADMIN_PASSWORD = "jqueryismyjam";

let message, enteredPassword;

enteredPassword = prompt("Enter password");

// if (enteredPassword == null) {
//     message = 'Canceled by user!';
// }
// if (enteredPassword === ADMIN_PASSWORD){
//     message = 'Welcome!';
// }

switch (enteredPassword){
    case null:
        message = 'Canceled by user!';
        break;
    case ADMIN_PASSWORD:
        message = 'Welcome!';
        break;
    default:
        message = "Access restricted!"
}
alert(message);