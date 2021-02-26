


$(document).ready(function() {
    $('.menu-burger__header').click(function() {
        $('.menu-burger__header').toggleClass('open-menu');
        $('.menu__body').toggleClass('open-menu');
    });

    $('.benefits__carousel').owlCarousel({
    	loop:true,
    	margin:10,
    	nav:true,
    	autoplay:true,
    	responsive:{
        0:{
            items:1
        }
    	}
	});

		$('.slider__body').owlCarousel({
    	loop:true,
    	margin:10,
    	nav:true,
    	autoplay:false,
    	animateOut: 'fadeOut',
    	animateIn: 'flipInX',
    	responsive:{
        0:{
            items:1
        }
    	}
	});

	$('.suggestion__carousel').owlCarousel({
		center: true,
    items:2,
    loop:true,
    margin:10,
    responsive:{
        600:{
            items:4
        }
    }
});

});