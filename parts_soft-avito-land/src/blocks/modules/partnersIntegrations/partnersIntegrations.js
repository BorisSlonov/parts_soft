import Swiper, { Navigation, Breakpoints, Autoplay } from 'swiper';
Swiper.use([Navigation, Breakpoints, Autoplay]);

const swiperPartnersIntegrations = new Swiper('.swiperPartnersIntegrations', {
    autoplay: true,
    delay: 2000,
    loop: true,
    // https://swiperjs.com/swiper-api#param-loop
    //     loop: true,
    //     Set to true to enable continuous loop mode
    // Because of nature of how the loop mode works(it will rearrange slides), total number of slides must be >= slidesPerView * 2
    navigation: {
        nextEl: '.swiper-button-next-part-int',
        prevEl: '.swiper-button-prev-part-int',
    },
    // Опции для разных разрешений
    breakpoints: {
        // Когда ширина экрана больше или равна 1000px
        1000: {
            slidesPerView: 4,
            loop: true,
            loopAdditionalSlides: 2,
        },
        // Когда ширина экрана больше или равна 768px
        768: {
            slidesPerView: 4,
            loop: true,
            loopAdditionalSlides: 2,
        },
        // Когда ширина экрана меньше 768px
        0: {
            slidesPerView: 1,
            loop: true,
            loopAdditionalSlides: 2,
        },
    },
});

const breakpoint = window.matchMedia('(max-width: 767px)');
const arrowsWrapper = document.querySelector('.partnersIntegrations__arrowsWrapper');
if (arrowsWrapper) {
    const moveArrowsWrapper = function () {
        const itemContainerFirst = document.querySelector('.partnersIntegrations__item_arrows');
        const itemContainerLast = document.querySelector('.partnersIntegrations__item:last-child');

        if (breakpoint.matches) {
            // Переместить в partnersIntegrations__item:last-child
            itemContainerLast.appendChild(arrowsWrapper);
        } else {
            // Переместить в partnersIntegrations__item:first-child
            itemContainerFirst.appendChild(arrowsWrapper);
        }
    };

    moveArrowsWrapper(); // Выполнить в начале, чтобы инициализировать положение

    breakpoint.addEventListener('change', moveArrowsWrapper);
}