


$(document).ready(function () {
    $('.menu-burger__header').click(function () {
        $('.menu-burger__header').toggleClass('open-menu');
        $('.menu__body').toggleClass('open-menu');
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

    $('.suggestion__carousel').owlCarousel({
        center: true,
        loop: true,
        margin: 10,
        autoWidth: true,
        responsive: {
            0: {
                items: 1
            },
            750: {
                items: 5
            }
        }
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
            items: 5
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