// Initialize Foundation
jQuery( document ).ready( function( $ ) {
	$( document ).foundation();
});

// Initialize sliders
jQuery( function( $ ) {

	$( '.js-slider' ).slick({
		dots: true,  
		infinite: true,
		autoplay: true,
		autoplaySpeed: 8000,
		slidesToShow: 1,
		adaptiveHeight: true
	});

});