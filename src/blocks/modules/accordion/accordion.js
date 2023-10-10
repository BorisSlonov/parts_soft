document.addEventListener("DOMContentLoaded", function () {
    const checkAccordion = document.querySelector(".accordion");
    if (checkAccordion) {
        const btns = document.querySelectorAll(".accordion__h4");
        btns.forEach(function (btn) {
            console.log('click')
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
    const tableAccordion = document.querySelector('.accordion_table')
    if (tableAccordion && innerWidth <= 999) {
        const btns = document.querySelectorAll(".accordion__h4");
        btns.forEach(function (btn) {
            console.log('click')
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
});
