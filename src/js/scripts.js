$(document).ready(function () {
    $("[data-fancybox]").fancybox({
        image: {
            protect: true
        }
    });

    $('.personal-carousel').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        infinite: true,
        dots: true
    });

    $('.about-center-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        asNavFor: '.about-center-nav'
    });
    $('.about-center-nav').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        asNavFor: '.about-center-for',
        arrows: false,
        centerMode: true,
        focusOnSelect: true
    });

    $('input[name="phone"]').inputmask('+7 999 999 9999');

    $(function () {
        $("a[href^='#consultation']").click(function () {
            var _href = $(this).attr("href");
            $("html, body").animate({scrollTop: $(_href).offset().top + "px"});
            return false;
        });
    });
});
