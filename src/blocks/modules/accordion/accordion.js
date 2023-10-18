document.addEventListener("DOMContentLoaded", function () {
  const checkAccordion = document.querySelector(".accordion");
  if (checkAccordion) {
    const btns = document.querySelectorAll(".accordion__h4");
    btns.forEach(function (btn) {
      console.log("click");
      btn.addEventListener("click", function () {
        if (!this.classList.contains("acc-active")) {
          btns.forEach((btn) => {
            btn.classList.remove("acc-active");
          });
          this.classList.add("acc-active");
        } else {
          this.classList.remove("acc-active");
        }
      });
    });
  }
  const tableAccordion = document.querySelector(".accordion_table");
  const btns = document.querySelectorAll(".accordion__h4");

  function toggleAccordion() {
    if (innerWidth <= 999) {
      btns.forEach(function (btn) {
        console.log("click");
        btn.addEventListener("click", function () {
          if (!this.classList.contains("acc-active")) {
            btns.forEach((btn) => {
              btn.classList.remove("acc-active");
            });
            this.classList.add("acc-active");
          } else {
            this.classList.remove("acc-active");
          }
        });
      });
    } else {
      // Если экран становится шире 999 пикселей, убираем обработчики
      btns.forEach(function (btn) {
        btn.removeEventListener("click", toggleAccordion);
        btn.classList.remove("acc-active");
      });
    }
  }

  // Исполнить при загрузке страницы
  toggleAccordion();

  // Добавить обработчик события изменения размера экрана
  window.addEventListener("resize", toggleAccordion);
});
