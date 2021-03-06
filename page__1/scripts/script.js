const swiper = new Swiper('#swiper-image', {
    loop: true,
    navigation: {
        nextEl: '.olives-slider-button-prev',
        prevEl: '.olives-slider-button-next'
    },
    pagination: {
        el: '.slider-pagination',
        clickable: true,
    },
});

const swiperDiscount = new Swiper('#swiper__discount', {
    loop: true,
    navigation: {
        nextEl: '.stock-title-next',
        prevEl: '.stock-title-prev'
    },
    slidesPerView: 4,
    spaceBetween: -1,
});

const swiperNews = new Swiper('#swiper__news', {
    loop: true,
    navigation: {
        nextEl: '.olives-news-slider__next',
        prevEl: '.olives-news-slider__prev'
    },
    slidesPerView: 3,
    spaceBetween: 30,
});

const swiperOurPartners = new Swiper('#our__partners__slider', {
    loop: true,
    navigation: {
        nextEl: '.our-partners-slider__next',
        prevEl: '.our-partners-slider__prev'
    },
    slidesPerView: 5,
});
let questionsAndAnswersItems = document.querySelectorAll('.questions-answers-content__item');
questionsAndAnswersItems.forEach(function(item){
    item.addEventListener('click', function(){
        this.classList.toggle('active');
        // this.style.maxHeight = `${this.scrollHeight}px`;
    })
})