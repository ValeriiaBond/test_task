


$(document).ready(function () {
    $('.menu__header').click(function () {
        $('.menu__list').toggleClass('open-menu');
        $('.menu__title').toggleClass('open-menu');
        $('.menu__btn').toggleClass('open-menu');
        $('.menu__header').toggleClass('open-menu');
        //$('body').toggleClass('fixed-page');
    });
    // var top = $('.menu').offset().top;
    // var menuHeight = $('.header__body').innerHeight()
    // console.log(top);
    // console.log(menuHeight);
    // $('.menu__list').offset({ top: top + menuHeight });


    var left = $('.container').offset().left;
    console.log(left);

    $('.basket').click(function () {
        $('.basket__body').toggleClass('open-basket');
    });

    function checkWidth() {
        var windowWidth = $('body').innerWidth(),
            elem = $("#suggestion__carousel");
        if (windowWidth < 750) {
            elem.removeClass('suggestion__carousel-lg');
            elem.removeClass('suggestion__carousel-md');
            elem.addClass('suggestion__carousel-sm');
        } else if (windowWidth < 1250) {
            elem.removeClass('suggestion__carousel-sm');
            elem.removeClass('suggestion__carousel-lg');
            elem.addClass('suggestion__carousel-md');
        }
        else {
            elem.removeClass('suggestion__carousel-sm');
            elem.removeClass('suggestion__carousel-md');
            elem.addClass('suggestion__carousel-lg');
        }


    }

    checkWidth(); // проверит при загрузке страницы

    $(window).resize(function () {
        checkWidth(); // проверит при изменении размера окна клиента
    });

    $('.benefits__carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        autoplay: true,
        responsive: {
            0: {
                items: 1
            }
        }
    });

    $('.slider__body').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        autoplay: false,
        animateOut: 'fadeOut',
        animateIn: 'flipInX',
        responsive: {
            0: {
                items: 1
            }
        }
    });

    $('.suggestion__carousel-sm').owlCarousel({
        center: true,
        loop: true,
        margin: 10,
        autoWidth: true,
        responsive: {
            0: {
                items: 1
            }
        }
    });
    $('.suggestion__carousel-md').owlCarousel({
        loop: true,
        margin: 13,
        items: 4,
        nav: true,
        navText: [
            '<span class="arrow-owl arrow-left"></span>',
            '<span class="arrow-owl arrow-right"></span>'
        ],
        stagePadding: 50,
    });
    $('.suggestion__carousel-lg').owlCarousel({
        loop: true,
        margin: 15,
        nav: true,
        navText: [
            '<span class="arrow-owl arrow-left"></span>',
            '<span class="arrow-owl arrow-right"></span>'
        ],
        items: 6,
    });

    if ($(window).width() < 750) {
        $('.gallery__carousel').owlCarousel({
            center: true,
            items: 2,
            loop: true,
            margin: 15,
            autoWidth: true,
            startPosition: 2,
        });
    } else {
        $('.gallery__carousel').owlCarousel({
            center: false,
            startPosition: 0,
            items: 5,
        });
    }

    if ($(window).width() < 750) {
        $('.who-use__carousel').owlCarousel({
            center: true,
            items: 2,
            loop: true,
            margin: 20,
            autoWidth: true,
            startPosition: 1,
        });
    } else {
        $('.who-use__carousel').owlCarousel({
            center: false,
            startPosition: 0,
            items: 4,
            margin: 20,
        });
    }
});


// $(window).resize(function () {
//     if ($(window).width() < 750) {
//         $('.gallery__carousel').owlCarousel({
//             center: true,
//             items: 2,
//             loop: true,
//             margin: 15,
//             autoWidth: true,
//             startPosition: 2,
//         });
//     } else {
//         $('.gallery__carousel').owlCarousel({
//             center: false,
//             startPosition: 0,
//             items: 5
//         });
//     }
// })