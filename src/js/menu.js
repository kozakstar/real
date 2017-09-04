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
$('.real__photo').slick({
    autoplay: true,
    fade: true

});



$(function () {
    $('.left-side__category').on('click', function () {
        $('.left-side__item').slideToggle(300, function () {
            if($(this).css('display') === 'none'){
                $(this).remove('style');
            }

        });

    });

});

