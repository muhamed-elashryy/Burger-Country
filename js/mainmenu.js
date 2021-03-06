/*$(function() {
    $("menu-item").click(function() {
        $(".menuu").toggleClass("menu-open");
        $(this).toggleClass("open-btn");

    });
});

*/
/*
$('ul#father>li').hover(function() {
    $(this).find('ul#son').show(500);
}, function() {
    $(this).find('ul#son').hide(500);
});

*/

/*$(function() {
    $(".close-btn").click(function() {
        $(".menu").toggleClass("menu-open");
        $(this).toggleClass("open-btn");
    });
});
*/
/*
$(function() {
    $(".menu-item").click(function() {
        $(".menu-item").toggleClass("menu-open");
        $(this).toggleClass(".menu-open");


    });
});
*/
$('.menu-all>li').hover(function() {
    $(this).find('ul#son').show(500);
}, function() {
    $(this).find('ul#son').hide(300);

});