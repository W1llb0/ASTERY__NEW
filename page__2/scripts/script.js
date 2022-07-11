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

