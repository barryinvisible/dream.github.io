jQuery(function() {
    //sliders
    $('.places-block').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        prevArrow: false,
        nextArrow: false,
        dots: true,
        responsive: [{
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: false,
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerMode: true,
                    slidesToShow: 1
                }
            }
        ]
    });

    $('.variant').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 2,
        prevArrow: false,
        nextArrow: false,
        dots: true
    });

    $('button[role="tab"]').empty();

    //burger-menu
    $('.close').hide();
    $('.open').hide();

    if ($(window).width() < 990) {
        $('.open').show();
        $('.menu').addClass('hideMenu');
        $('.subHeader').removeClass('align-items-center');
    }


    $('.open').on('click', function() {
        $('.menu').removeClass('hideMenu');
        $('.open').hide();
        $('.close').show();
    });

    $('.close').on('click', function() {
        $('.menu').addClass('hideMenu');
        $('.close').hide();
        $('.open').show();
    });

});