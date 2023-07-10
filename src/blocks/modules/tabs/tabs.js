const tabs = (headerSelector, tabSelector, contentSelector, activeClass) => {
    const header = document.querySelector(headerSelector),
        tab = document.querySelectorAll(tabSelector),
        content = document.querySelectorAll(contentSelector);

    function hideTabContent() {
        content.forEach((item) => {
            item.style.display = "none";
        });

        tab.forEach((item) => {
            item.classList.remove(activeClass);
        });
    }

    function showTabContent(i = 0) {
        content[i].style.display = "block";
        tab[i].classList.add(activeClass);
    }

    hideTabContent();
    showTabContent();

    header.addEventListener("click", (e) => {
        const target = e.target;
        if (
            target &&
            (target.classList.contains(tabSelector.replace(/\./, "")) ||
                target.parentNode.classList.contains(tabSelector.replace(/\./, "")))
        ) {
            tab.forEach((item, i) => {
                if (target == item || target.parentNode == item) {
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }
    });

    // Получаем все кастомные селекты
    const selects = document.querySelectorAll(".custom-select_qa, .custom-select_help, .custom-select_prices");

    // Обработчик клика для выбора опции в каждом селекте
    selects.forEach((select) => {
        const selectDropdown = select.querySelector(".select-dropdown");
        const selectOptions = select.querySelectorAll(".select-option");

        selectOptions.forEach((option) => {
            option.addEventListener("click", () => {
                const selectedValue = option.getAttribute("data-value");
                const tabContent = document.querySelector(`#${selectedValue}`);

                function hideTabContent() {
                    content.forEach((item) => {
                        item.style.display = "none";
                    });

                    tab.forEach((item) => {
                        item.classList.remove(activeClass);
                    });
                }

                hideTabContent();
                tabContent.style.display = "block";
            });
        });
    });

    // Закрываем выпадающий список при клике вне его области
    document.addEventListener("click", (event) => {
        if (!event.target.matches(".select-selected")) {
            selects.forEach((select) => {
                const selectDropdown = select.querySelector(".select-dropdown");
                selectDropdown.classList.remove("show");
            });
        }
    });

};


const qaTabs = document.querySelector(".qaTabs");
if (qaTabs) {
    tabs(
        ".qaTabs__titles",
        ".qaTabs__title",
        ".qaTabs__item",
        "qaTabs__title_active"
    );
}
const helpTabs = document.querySelector(".helpTabs");
if (helpTabs) {
    tabs(
        ".helpTabs__titles",
        ".helpTabs__title",
        ".helpTabs__item",
        "helpTabs__title_active"
    );
}
const pricesTabs = document.querySelector(".pricesTabs");
if (pricesTabs) {
    tabs(
        ".pricesTabs__titles",
        ".pricesTabs__title",
        ".pricesTabs__item",
        "pricesTabs__title_active"
    );
}

const supplierTabs = document.querySelector(".supplierTabs");
if (supplierTabs) {
    tabs(
        ".supplierTabs__titles",
        ".supplierTabs__title",
        ".supplierTabs__item",
        "supplierTabs__title_active"
    );
}
