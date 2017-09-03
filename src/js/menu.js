$(document).ready(function() {
    $('.menu-trigger').click(function() {
        $('.nav__items').slideToggle(500);
    });//end slide toggle

    $(window).resize(function() {
        if (  $(window).width() > 500 ) {
            $('.nav__items').removeAttr('style');
        }
    });//end resize
});//end ready