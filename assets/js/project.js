$(document).ready(function(){

  //initialize foundation.js
  $(document).foundation();

	$(".slides").slick({
		slidesToShow: 1,
  	slidesToScroll: 1,
  	autoplay: true,
  	autoplaySpeed: 4000,
		arrows: false,
		dots: true,
	});

})
