window.addEventListener("DOMContentLoaded", () => {
    const menu = document.querySelector(".header__list"),
        menuItem = document.querySelectorAll(".header__link"),
        hamburger = document.querySelector(".header__burger");

    function closeMenu() {
        hamburger.classList.remove("burger_active");
        menu.classList.remove("menu_active");
    }

    hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("burger_active");
        menu.classList.toggle("menu_active");
    });

    menuItem.forEach((item) => {
        item.addEventListener("click", () => {
            closeMenu();
        });
    });

    //Hidden header
    let headerTag = document.querySelector(".header");
    let scrollPrev = 0;

    window.addEventListener("scroll", function () {
        let scrolled = window.scrollY;

        if (scrolled > 100 && scrolled > scrollPrev) {
            headerTag.classList.add("out");
            closeMenu(); // Закрыть меню при скролле
        } else {
            headerTag.classList.remove("out");
        }
        scrollPrev = scrolled;
    });

    function setMainPaddingTop() {
        let headerHeight = document.querySelector('.header').offsetHeight;
        document.querySelector('.main').style.paddingTop = headerHeight + 'px';
        document.querySelector('.header__list').style.top = headerHeight + 'px';
    }
    setMainPaddingTop();
    addEventListener('resize', setMainPaddingTop);
});
