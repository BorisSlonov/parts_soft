import Swiper, { Navigation, Breakpoints } from 'swiper';
Swiper.use([Navigation, Breakpoints]);

const swiperPartnersIntegrations = new Swiper('.swiperPartnersIntegrations', {
    navigation: {
        nextEl: '.swiper-button-next-part-int',
        prevEl: '.swiper-button-prev-part-int',
    },
    // Опции для разных разрешений
    breakpoints: {
        // Когда ширина экрана больше или равна 1000px
        1000: {
            slidesPerView: 5,
        },
        // Когда ширина экрана больше или равна 768px
        768: {
            slidesPerView: 4,
        },
        // Когда ширина экрана меньше 768px
        0: {
            slidesPerView: 1,
        },
    },
});