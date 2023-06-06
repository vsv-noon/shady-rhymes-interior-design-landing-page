const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    slidesPerView: 1,
    spaceBeetween: 10,
    loop: true,

pagination: {
    el: '.swiper-pagination',
    clickable: true,
},

autoHeight: true,
})

const swiperCustomers = new Swiper('.swiper-customers', {
    direction: 'horizontal',
    slidesPerView: 3,
    // spaceBeetween: 10,
    loop: true,

pagination: {
    el: '.swiper-pagination',
    clickable: true,
},

autoHeight: true,
})
