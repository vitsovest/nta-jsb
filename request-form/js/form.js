// затягиваем доступ к форме
import refs from "./refs.js";
// деструктуризируем доступ к форме из файла доступов
const { form } = refs;

// затягиваем функции для обработки данных формы
import x from "../index.js";
// деструктуризируем нужные функции из файла, который затянули
const { createObject } = x;
//const { createObject, getInputValues, getNames, createTemplateObject } = x;

// объявляем массивы для хранения объектов из данных заполнения формы
const requestedServices = [];
// const templateUsers = [];

// "слушаем" событие отправки формы для получения данных из нее
 form.addEventListener("submit", (e) => {
   e.preventDefault();
   // console.log(e); //- объект события
  //   ПОЛУЧАЕМ ЗНАЧЕНИЯ ИЗ ИНПУТОВ
  let fullName = e.target.elements.fullName.value;
     // console.log(fullName);
  let phoneNumber = e.target.elements.phoneNumber.value;
     // console.log(phoneNumber);
  let address = e.target.elements.address.value;
    // console.log(address);
  let email = e.target.elements.email.value;
     // console.log(email);
  let requestedService = e.target.elements.requestedService.value;
     // console.log(requestedService);
  let dayOfService = e.target.elements.dayOfService.value;
     // console.log(dayOfService);
  let notes = e.target.elements.notes.value;
    // console.log(notes);
  //   ========================================
    const oneRequestedService = createObject(fullName, phoneNumber, address, email, requestedService, dayOfService, notes); // передаем отдельные аргументы
  console.log(oneRequestedService);
  // console.log(JSON.stringify(oneRequestedService));
  //   или создадим массив аргументов для передачи в вызов функции
  const values = [fullName, phoneNumber, address, email, requestedService, dayOfService, notes];
 // console.log(values);
  // снова вызываем эту же функцию
  //   const user = createObject(...values); // распыляем через SPREAD массив аргументов values
  requestedServices.push(oneRequestedService);
  localStorage.setItem("requestedServices", JSON.stringify(requestedServices));

  return requestedServices /*, templateUser*/;
});
