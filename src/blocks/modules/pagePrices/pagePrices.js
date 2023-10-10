
import Swiper, { Pagination, Breakpoints, Autoplay } from 'swiper';
Swiper.use([Pagination, Breakpoints, Autoplay]);


const swiperTariffs = new Swiper('.swiperTariffs_1', {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 20,
    autoHeight: true,
    observer: true,
    observerUpdate: true,
    breakpoints: {
        // when window width is >= 640px
        640: {
            slidesPerView: 2,
        },
        999: {
            slidesPerView: 4,
        }
    }
});


if (document.querySelector('.tariffsToggle__btn_parts')) {
    // Получите ссылки на элементы кнопок и блоков
    const btnParts = document.querySelector('.tariffsToggle__btn_parts');
    const btnOwn = document.querySelector('.tariffsToggle__btn_own');
    const tariffParts = document.querySelector('.pricesTable_tariffParts');
    const tariffOwn = document.querySelector('.pricesTable_tariffOwn');

    // Добавьте обработчик события клика на кнопку btnParts
    btnParts.addEventListener('click', () => {
        tariffParts.classList.remove('hide'); // Уберите класс hide с pricesTable_tariffParts
        tariffOwn.classList.add('hide'); // Добавьте класс hide к pricesTable_tariffOwn

        btnParts.classList.add('active'); // Добавьте класс active к btnParts
        btnOwn.classList.remove('active'); // Уберите класс active с btnOwn

    });

    // Добавьте обработчик события клика на кнопку btnOwn
    btnOwn.addEventListener('click', () => {
        tariffParts.classList.add('hide'); // Добавьте класс hide к pricesTable_tariffParts
        tariffOwn.classList.remove('hide'); // Уберите класс hide с pricesTable_tariffOwn

        btnParts.classList.remove('active'); // Уберите класс active с btnParts
        btnOwn.classList.add('active'); // Добавьте класс active к btnOwn
    });
}
