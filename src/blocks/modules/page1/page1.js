import Swiper, { Pagination } from 'swiper';
Swiper.use([Pagination]);


const swiperPage1 = new Swiper('.swiperPage1', {
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});
