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



