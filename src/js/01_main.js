$(document).ready(function () {

	$('.burger-menu').click(function (event) {
		$(this).toggleClass('open-menu');
		$('.topnav__mobile-menu').toggleClass('open');
	});

	$('.main-feedback__slider').slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: true,
		fade: true,
		speed: 4500,
		autoplay: true
	})


});