// Initialize Foundation
jQuery( document ).ready( function( $ ) {
	$( document ).foundation();
});

jQuery( function( $ ) {
	$( document ).foundation();
});



// Initialize sliders
jQuery( function( $ ) {

	$( '.js-hero-slider' ).slick({
		dots: true,
		autoplay: true
	});

});


// Check if email is valid 

jQuery( function( $ ) {
	$('.js-log-in__input--email').focusout(function() {
		if ($('.js-log-in__input--email').is(':invalid') && $('.js-log-in__input--email').val() != '') {
			$('.reveal-modal__error').css('display', 'block'),
			$('.js-log-in__label').addClass('js-error__label'),
			$('.js-log-in__input--email').addClass('js-error__input');
		} else {
			$('.reveal-modal__error').css('display', 'none'),
			$('.js-log-in__label').removeClass('js-error__label'),
			$('.js-log-in__input--email').removeClass('js-error__input');
		} 
	});
});










