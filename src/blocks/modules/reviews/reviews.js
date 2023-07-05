import Swiper, { Pagination, Breakpoints } from 'swiper';
Swiper.use([Pagination, Breakpoints]);

const swiperReviews = new Swiper('.swiperReviews', {
    // loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    // Опции для разных разрешений
    breakpoints: {
        // Когда ширина экрана больше или равна 1000px
        1000: {
            slidesPerView: 3,
        },
        // Когда ширина экрана больше или равна 768px
        768: {
            slidesPerView: 2,
        },
        // Когда ширина экрана меньше 768px
        0: {
            slidesPerView: 1,
        },
    },
});