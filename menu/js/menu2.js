$(document).ready(() => {
    $(function() {


        $('.multiple-items2').slick({
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 3000,
            dots: true,
            centerMode: true,
            centerPadding: '0',

        });
    });
});