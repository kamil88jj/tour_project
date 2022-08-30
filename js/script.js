$(document).ready(function() {
    $('.main_btn, .main_btna, a[href="#sheldure"]').click(function() {
        $('.overlay').fadeIn(500);
        $('.modal').slideDown(500);
    });

    $('.close').click(function() {
        $('.modal').slideUp(500);
        $('.overlay').fadeOut(500);
    });
});