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
	$(window).scroll(() => {
		let height = $(window).scrollTop();
		$('.scroll-top').text(height)
		if(height > 800) {
			$('.geography__right-item').addClass('animate__animated animate__fadeInUp visible')
			$('.geography__left').addClass('animate__animated animate__fadeInLeft visible')
		}
		if(height > 4000) {
			$('.contacts__right').addClass('animate__animated animate__fadeInUp visible')
		}
	})



});