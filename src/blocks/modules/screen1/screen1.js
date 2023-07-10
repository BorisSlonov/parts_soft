import Swiper, { Breakpoints, Autoplay } from 'swiper';
Swiper.use([Breakpoints, Autoplay]);


const swiperscreen1 = new Swiper('.swiperscreen1', {
    loop: true,
    autoplay: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});
