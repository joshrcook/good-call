$(document).ready(function(){

  $(document).foundation();

  $('#login-modal').foundation('reveal', 'open');

	$(".slider2").slick({
		slidesToShow: 1,
	  	slidesToScroll: 1,
	  	autoplay: true,
	  	autoplaySpeed: 4000,
		arrows: false,
		dots: true,
	});

})