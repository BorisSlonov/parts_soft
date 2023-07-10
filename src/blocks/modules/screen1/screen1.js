import Swiper, { Pagination, Breakpoints, Autoplay } from 'swiper';
Swiper.use([Pagination, Breakpoints, Autoplay]);


const swiperscreen1 = new Swiper('.swiperscreen1', {
    loop: true,
    autoplay: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});
