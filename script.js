// Page1
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
// Page2
const discountGoods = new Swiper('#discount-goods', {
    loop: true,
    navigation: {
        nextEl: '.stock-good-title-next',
        prevEl: '.stock-good-title-prev'
    },
    slidesPerView: 4,
});
const seeMore = new Swiper('#see-more', {
    loop: true,
    navigation: {
        nextEl: '.see-more-next',
        prevEl: '.see-more-prev'
    },
    slidesPerView: 4,
});
var preivewCard = new Swiper("#preview-card", {
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
  });
const swiperProductCard = new Swiper('#product-card', {
    grabCursor: true,
    effect: "flip",
    loop: true,
    pagination: {
        el: '.slider__pagination',
        clickable: true,
    },
    thumbs: {
        swiper: preivewCard,
      },
});
var counterVal = 0;
function CounterPlus() {
    if(counterVal < 30)
    updateDisplay(++counterVal);
}
function CounterMinus() {
    if(counterVal > 0)
    updateDisplay(--counterVal);
}
function updateDisplay(val) {
    document.getElementById("counter-amount").innerHTML = val;
}
// Page3
let accordion = document.querySelectorAll('.catalog-categories-top__accordion-item');
accordion.forEach(function(item){
    item.addEventListener('click', function(){
        this.classList.toggle('active');
        // this.style.maxHeight = `${this.scrollHeight}px`;
    })
})
