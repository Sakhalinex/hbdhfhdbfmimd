$(document).ready(function(){
    $('.header__slider').slick({
        arrows:true,
        dots:true
    });   
});

$(document).ready(function() {
    $('.header__burger').click(function(event) {
        $('.header__burger, .header__top-menu').toggleClass('active');
    });
});