// Получаем все кастомные селекты
const customSelects = document.querySelectorAll('.custom-select');

// Проходимся по каждому кастомному селекту
customSelects.forEach(function (select) {
  // Получаем нужные элементы внутри каждого кастомного селекта
  const selectedOption = select.querySelector('.select-selected');
  const dropdown = select.querySelector('.select-dropdown');
  const options = select.querySelectorAll('.select-option');

  // Обработчик клика для открытия/закрытия выпадающего списка и выбора опции
  selectedOption.addEventListener('click', function (event) {
    event.stopPropagation(); // Останавливаем всплытие события
    selectedOption.classList.toggle('show');
    dropdown.classList.toggle('show');
  });

  // Обработчик клика для выбора опции
  options.forEach(function (option) {
    option.addEventListener('click', function (event) {
      event.stopPropagation(); // Останавливаем всплытие события
      const value = option.getAttribute('data-value');
      const text = option.innerText;
      if (document.querySelector('.linkWithIcon')) {
        const iconClass = option.querySelector('span').classList[1]; // Получаем второй класс у span
        selectedOption.innerHTML = `<span class="linkWithIcon ${iconClass}">${text}</span>`;
      } else {
        selectedOption.innerHTML = `${text}`;
      }

      // Закрываем выпадающий список
      dropdown.classList.remove('show');
      selectedOption.classList.remove('show');
    });
  });

  // Закрываем выпадающий список при клике вне его области
  window.addEventListener('click', function () {
    dropdown.classList.remove('show');
    selectedOption.classList.remove('show');
  });
});
