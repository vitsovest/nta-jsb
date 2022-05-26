// экспортируем по дефолту из текущего файла фукнкции для использования в других файлах
export default { createObject };
//export default { createObject, getInputValues, getNames, createTemplateObject };

function createObject(fullName, phoneNumber, address, email, requestedService, dayOfService, notes) {
    const obj = {
        fullName,
        phoneNumber,
        address,
        email,
        requestedService,
        dayOfService,
        notes,
    }
    return obj;
}

const requestedServices = JSON.parse(localStorage.getItem("requestedServices")); // достанем из хранилища созданные формой объекты
console.log("requestedServices", requestedServices);


// переберу свою базу юзеров и вытащу только их номера в отдельный массив. Могу? Могу!
// и почты для спам-рассылки тоже могу собрать

// const phoneDB = [];
// const mailDB = [];
// const namesDB = [];

// for (let user of users) {
// //   //   console.log(user);
// //   //   деструктуризирую свойство phone из каждого объекта, чтобы добавить в базу холодных звонков,
// //   // а свойство email вытащу из каждого объекта и переименую его в просто mail
//   const { phone, email: mail } = user;
//   phoneDB.push(phone);
//   mailDB.push(mail);
// }

// console.log("phoneDB", phoneDB);
// console.log("mailDB", mailDB);

// а теперь соберем все параметры из инпутов через REST

// function getInputValues(...args) {
//     // console.log("НОРМАЛЬНЫЙ ПОЛНОЦЕННЫЙ МАССИВ args: ", args); // ES6
//
// //   //   console.log("НЕДОМАССИВ arguments: ", arguments); // ES5
//
// //   //   псевдомассив (коллекция) arguments надо преобразовать в массив для дальнейшей работы
//
// //   // распыляем через SPREAD псевдомассив arguments и тут же собираем через REST его останки в новый полноценный массив
// //   const normalArrayBySPREAD = [...arguments];
// //   //   console.log("normalArrayBySPREAD", normalArrayBySPREAD);
// //   //   или
// //   const normalArray = Array.from(arguments);
// //   //   console.log("normalArray", normalArray);
//
// //   //   деструктуризирую мои оба нормальных массива, чтобы проанализировать имена пользователей
//   const [name] = args;
//   // console.log("DESTRUCNURING NAME: ", name);
//
//   const [,,email] = args;
//     // console.log("DESTRUCNURING NAME: ", email);
//   namesDB.push(name);
//     // console.log("namesDB by destructuring", namesDB);
// }

// а теперь не все, первый отдельно заведем
// а теперь соберем все параметры из инпутов через REST

// function getNames(name, ...args) {
//   //   console.log("НОРМАЛЬНЫЙ ПОЛНОЦЕННЫЙ МАССИВ args: ", args); // ES6
//   //   console.log(name);
//   namesDB.push(name);
//   //   console.log("namesDB by first param", namesDB);
// }

// == 2.4 вычисляемые свойства (если не знаем при создании объекта, какое должно быть имя ключа)

// function createTemplateObject(keys, values) {
//   const obj = {};
//   for (let i = 0; i < keys.length; i++) {
//     // console.log(i);
//     let key = keys[i];
//     // console.log(key);
//     let value = values[i];
//     // console.log(value);
//     obj[key] = value;
//   }
//   return obj;
// }

// const templateUsers = JSON.parse(localStorage.getItem("templateUsers")); // достанем из хранилища созданные формой объекты
// console.log("templateUsers", templateUsers);

// for (let user of templateUsers) {
//   // console.log("user", user);
//     for (let key in user) {
//         console.log(`${key}: ${user[key]}`);
// }

  // const keys = Object.keys(user);

//   for (let key of keys) {
// // //     console.log("keys", keys);
// // //     console.log("key: value", `${key}: ${user[key]}`);
//   }

  // const values = Object.values(user);

//   for (let value of values) {
// // //     console.log("values", values);
// // //     console.log("value: ", value);
//   }

  // const entries = Object.entries(user);

//   for (let entry of entries) {
// // //     console.log("entries", entries);
// //     console.log(entry);
//     let key = entry[0];
//     let val = entry[1];
//       // console.log(key);
//   }
// }

// 2.5 МЕТОДЫ объекта - функции - свойства, отвечающие на вопрос: Что делать?
// служат для работы со свойствами объекта

// == можно объявить сразу в объекте
// по-старому ES5
const productsList = {
    produtcList: ["greean apples","dark chokolate", "coffee"],
    mapProducts: function () {
        for (let product of this.produtcList) {
            // console.log(product);
        }
    },
}


// console.log(productsList);
// productsList.mapProducts();

// по-нормальному ES6
const moviesList = {
    movieList: ["Interception","Up in the air"],
    showMovies() {
        // console.log("массив ",this.movieList);
        // console.log("не массив ",...this.movieList);
    },
}

moviesList.showMovies(); // вызываем метод объекта!

// == метод можно добавить, как обычное свойство

productsList.showProducts = function () {
    // console.log("массив product:", this.produtcList);
    // console.log("не массив product:", ...this.produtcList);
}
// console.log(productsList);
productsList.showProducts();

moviesList.mapMovies = function () {
    for (let movie of this.movieList) {
        // console.log(movie);
    }
}

// console.log(moviesList);
moviesList.showMovies();


// console.log(productsList);
// productsList.showProducts(); // вызываем метод объекта!


// console.log(moviesList);
// moviesList.mapMovies(); // вызываем метод объекта!

// == метод можно удалить, также, как и обычное свойство, через delete
