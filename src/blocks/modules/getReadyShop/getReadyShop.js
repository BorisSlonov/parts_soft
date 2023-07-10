import Swiper, { Pagination } from 'swiper';
Swiper.use([Pagination]);


const swiperGetReadyShop = new Swiper('.swiperGetReadyShop', {
    loop: true,
    autoplay: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});

