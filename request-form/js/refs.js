// получаем доступ к форме в HTML через JavaScript, чтобы получать значения ввода в инпуты
// и экспортируем по дефолту для использования в других файлах
export default {
  registerSection: document.querySelector(".form"),
  form: document.getElementById("formRequestedService"),
};
