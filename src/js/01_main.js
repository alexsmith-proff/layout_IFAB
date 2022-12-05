$(document).ready(function () {

	$('.menu-burger').click(function (event) {
		$(this).toggleClass('open-menu');
		$('.topnav').toggleClass('responsive');
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