$(document).ready(function() {

    // ********************** Header Slider **********************
    $('.header-slider').slick({
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear'
    });

    // ********************** Navbar Dropdown **********************
    $(".dropdown").hover(function() {
        var isHovered = $(this).is(":hover");
        if (isHovered) {
            $(this).children(".dropdown-menu").stop().slideDown(300);
        } else {
            $(this).children(".dropdown-menu").stop().slideUp(300);
        }
    });

    // ********************** Navbar Scrolling **********************
    $(window).scroll(function() {
        let windowScrolling = $(window).scrollTop();
        if (windowScrolling >= 100) {
            $('nav').addClass('bgNavScroll');
        } else {
            $('nav').removeClass('bgNavScroll');
        }
    });

    // ********************** Search Icon **********************
    $("#search").click(function() {
        $(".navbar .form-group").slideToggle(400);
    });

    $(".close-icon").click(function() {
        $(".navbar .form-group").slideUp(400);
    });

    // ********************** Sale Count Down **********************
    $('.countdown').dsCountDown({
        endDate: new Date("December 31, 2022 23:59:00")
    });

    // ********************** Button Up **********************
    $(window).scroll(function() {
        let windowScrolling = $(window).scrollTop();
        if (windowScrolling >= 700) {
            $('.btn-up').fadeIn(400);
        } else {
            $('.btn-up').fadeOut(400);
        }
    });

    $(".btn-up").click(function() {
        $("html , body").animate({ scrollTop: 0 }, '2000');
    });

    // ********************** Loading **********************
    $(".loading").fadeOut(3000, function() {
        $("body").css({ overflow: 'auto' });
    });

    // ********************** Scrolling Navbar Links **********************
    $('.navbar .nav-link,.navbar .dropdown-item').click(function() {
        let aHref = $(this).attr("href");
        $("html , body").animate({ scrollTop: $(aHref).offset().top - 120 }, '2000');
    });

});