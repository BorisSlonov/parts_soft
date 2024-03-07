import Swiper, { Pagination, Breakpoints, Autoplay } from "swiper";
Swiper.use([Pagination, Breakpoints, Autoplay]);

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

  const rentTab = document.querySelector(".pricesTabs__title_rent");
  const titleService = document.querySelector(".pricesTabs__titleService");

  const titleServiceBtn = document.querySelector(".pricesTabs__title_service");
  const pricesTabstitleWrapper = document.querySelector(
    ".pricesTabs__titleWrapper"
  );

  // Функция для проверки и добавления класса

  function checkAndAddClass() {
    if (rentTab.classList.contains("pricesTabs__title_active")) {
      titleService.classList.add("pricesTabs__titleService_hidden");
    } else {
      titleService.classList.remove("pricesTabs__titleService_hidden");
    }

    if (titleServiceBtn.classList.contains("pricesTabs__title_active")) {
      pricesTabstitleWrapper.classList.add("pricesTabs__titleService_hidden");
      titleService.classList.add("pricesTabs__titleService_hidden");
    } else {
      pricesTabstitleWrapper.classList.remove(
        "pricesTabs__titleService_hidden"
      );
    }

    // Объявите флаг для отслеживания инициализации свайпера
    let isSwiperInitialized = false;

    // Проверьте, инициализирован ли свайпер
    if (!isSwiperInitialized) {
      const swiperTariffs2 = new Swiper(".swiperTariffs_2", {
        slidesPerView: 1,
        spaceBetween: 20,
        autoHeight: true,
        observer: true,
        observerUpdate: true,
        breakpoints: {
          640: {
            slidesPerView: 2,
          },
        },
        // If we need pagination
        pagination: {
          el: ".swiper-pagination",
        },
      });
      isSwiperInitialized = true;
    }
  }

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

    if (rentTab) {
      checkAndAddClass();
    }
  });

  const pricesTabsBackBtn = document.querySelector(".pricesTabs__backBtn");
  if (pricesTabsBackBtn) {
    pricesTabsBackBtn.addEventListener("click", (e) => {
      hideTabContent();
      showTabContent(1);
      document
        .querySelector(".pricesTabs__titleWrapper")
        .classList.remove("pricesTabs__titleService_hidden");
      document
        .querySelector(".pricesTabs__titleService")
        .classList.remove("pricesTabs__titleService_hidden");
    });
  }

  if (window.location.href.endsWith("#sobstvennost")) {
    // Вызовите функцию showTabContent(1)
    hideTabContent();
    showTabContent(1);
    checkAndAddClass();
    console.log("go");
    console.log(window.location.href);
  }

  if (window.location.href.endsWith("#tariffs")) {
    // Вызовите функцию showTabContent(1)
    hideTabContent();
    showTabContent(2);
    checkAndAddClass();
    console.log("go");
    console.log(window.location.href);
  }

  // Получаем все кастомные селекты
  const selects = document.querySelectorAll(
    ".custom-select_qa, .custom-select_help, .custom-select_prices"
  );

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

const searchTabs = document.querySelector(".searchTabs");
if (searchTabs && window.innerWidth <= 1023) {
  tabs(
    ".searchTabs__titles",
    ".searchTabs__title",
    ".searchTabs__item",
    "searchTabs__title_active"
  );
}

// Получаем элементы
const titles = document.querySelectorAll('.searchTabs__title');
const items = document.querySelectorAll('.searchTabs__item');

if (titles && window.innerWidth <= 1023) {
  titles.forEach((title, index) => {
    if (items[index]) {
      title.parentNode.insertBefore(items[index], title.nextSibling);
    }
  });
}


if (titles && window.innerWidth > 1023) {
  titles.forEach((clickedTitle, index) => {
    clickedTitle.addEventListener('click', () => {
      items.forEach((item, itemIndex) => {
        item.style.display = itemIndex === index ? 'block' : 'none';
      });

      // Дополнение: отмена изменений при клике на searchTabs__title_fixedActive
      if (clickedTitle.classList.contains('searchTabs__title_fixedActive')) {
        titles.forEach((title) => {
          title.classList.remove('searchTabs__title_fixed');
          title.classList.remove('searchTabs__title_fixedActive');
          document.querySelector('.searchTabs').style.width = "100%";
        });

        items.forEach((item) => {
          item.style.display = 'block'; // Показываем все элементы
          item.style.removeProperty('--before-display'); // Восстанавливаем стиль ::before
        });

        titlesContainer.style.width = ''; // Сбрасываем ширину контейнера
        document.querySelector('.searchTabs').removeProperty('--before-display');
        // Может потребоваться дополнительная логика восстановления других изменений
      }

      titles.forEach((title) => {
        title.classList.add('searchTabs__title_fixed');
        title.classList.remove('searchTabs__title_fixedActive');
        clickedTitle.classList.add('searchTabs__title_fixedActive');
      });
      clickedTitle.classList.remove('searchTabs__title_fixed');

      // Получаем элементы
      const titlesFixed = document.querySelectorAll('.searchTabs__title_fixed');
      if (titlesFixed.length > 0) {
        titlesFixed[0].classList.remove('last');
        titlesFixed[1].classList.add('last');

        // Получаем элементы
        const titlesContainer = document.querySelector('.searchTabs');
        const hasFixedTitle = titlesContainer.querySelector('.searchTabs__title_fixed');

        if (hasFixedTitle) {
          // Если есть элемент с классом searchTabs__title_fixed
          titlesContainer.style.width = `calc(100% - 200px)`;
          // Скрываем псевдоэлемент ::before у всех элементов .searchTabs__item
          items.forEach(item => {
            item.style.setProperty('--before-display', 'none');
          });
        }

      }
    });
  });
}
