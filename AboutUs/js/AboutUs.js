var mySwiper = new Swiper ('.swiper-One', {
    direction: 'horizontal', // 垂直切换选项
    loop: true, // 循环模式选项
    // 如果需要分页器
    pagination: {
        el: '.swiper-pagination',
    },
})
var mySwiper = new Swiper ('.swiper-TWO', {
    direction: 'horizontal', // 垂直切换选项
    loop: true, // 循环模式选项
    slidesPerView:4,
    slidesOffsetBefore :0,
    spaceBetween : 30,
    // 如果需要前进后退按钮
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
})
if (!(/msie [6|7|8|9]/i.test(navigator.userAgent))) {
    var wow = new WOW({
        offset: 200
    });
    wow.init();
}