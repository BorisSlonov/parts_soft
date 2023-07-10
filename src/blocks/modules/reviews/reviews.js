import Swiper, { Pagination, Breakpoints } from 'swiper';
Swiper.use([Pagination, Breakpoints]);


if (document.querySelector('.swiperReviews')) {
    const breakpoint = window.matchMedia('(max-width: 999px)');

    let swiperReviews = null;

    const breakpointChecker = function () {
        if (breakpoint.matches) {
            if (swiperReviews === null) {
                swiperReviews = new Swiper('.swiperReviews', {
                    autoHeight: true,
                    slidesPerView: 1,
                    pagination: {
                        el: '.swiper-pagination',
                        clickable: true,
                    },
                    breakpoints: {
                        768: {
                            slidesPerView: 2,
                        },
                    },
                });
            }
        } else {
            if (swiperReviews !== null) {
                swiperReviews.destroy();
                swiperReviews = null;
            }
        }
    };

    breakpointChecker();
    breakpoint.addEventListener('change', breakpointChecker);
}

