!function ($) {

	"use strict";

	/**
	* Swiper slider - Timeline
	*/

	new Swiper('.history-content', {
		centeredSlides: true,
		slidesPerView: 'auto',
		initialSlide: 0,
		spaceBetween: 1,
		touchRatio: 0.2,
		slideToClickedSlide: true,
		navigation: {
			nextEl: '.timeline-button-next-custom',
			prevEl: '.timeline-button-prev-custom',
		}
	});

	let timelineDates = new Swiper('.timeline-dates', {
		centeredSlides: true,
		slidesPerView: 'auto',
		initialSlide: 2,
		spaceBetween: 5,
		simulateTouch: $(window).width() > 600 ? false : true,
		touchRatio: 0.2,
		loop: false,
		slideToClickedSlide: true,
		navigation: {
			nextEl: '.timeline-button-next',
			prevEl: '.timeline-button-prev',
		},
		on: {
			init: function () {
				if ($('.timeline-dates .swiper-slide').hasClass('even')) {
					$('.timeline-dates .swiper-slide.even').addClass('animtateEven');
				}

				if ($('.timeline-dates .swiper-slide').hasClass('odd')) {
					$('.timeline-dates .swiper-slide.odd').addClass('animtateOdd');
				}
			},
			slideNextTransitionStart: function () {
				$('.timeline-dates .swiper-slide').removeClass('animtateEven');
				$('.timeline-dates .swiper-slide').removeClass('animtateOdd');
			},
			slideNextTransitionEnd: function () {
				let indexForAnimation;
				if ($(window).width() > 600) {
					indexForAnimation = this.realIndex + 2;
				} else {
					indexForAnimation = this.realIndex;
				}

				if ($('.timeline-dates .swiper-slide').eq(indexForAnimation).hasClass('even')) {
					$('.timeline-dates .swiper-slide').eq(indexForAnimation).addClass('animtateEven');
				}
				if ($('.timeline-dates .swiper-slide').eq(indexForAnimation).hasClass('odd')) {
					$('.timeline-dates .swiper-slide').eq(indexForAnimation).addClass('animtateOdd');
				}
			},
			slidePrevTransitionStart: function () {
				$('.timeline-dates .swiper-slide').removeClass('animtateEven');
				$('.timeline-dates .swiper-slide').removeClass('animtateOdd');
			},
			slidePrevTransitionEnd: function () {

				let indexForAnimation;
				if ($(window).width() > 600) {
					indexForAnimation = this.realIndex - 2;
					if ($('.timeline-dates .swiper-slide').eq(indexForAnimation).hasClass('even')) {
						$('.timeline-dates .swiper-slide').eq(indexForAnimation).addClass('animtateEven');
					}
					if ($('.timeline-dates .swiper-slide').eq(indexForAnimation).hasClass('odd')) {
						$('.timeline-dates .swiper-slide').eq(indexForAnimation).addClass('animtateOdd');
					}
				} else {
					indexForAnimation = this.realIndex;
					if ($('.timeline-dates .swiper-slide').eq(indexForAnimation).hasClass('even')) {
						$('.timeline-dates .swiper-slide').eq(indexForAnimation).addClass('animtateEven');
					}
					if ($('.timeline-dates .swiper-slide').eq(indexForAnimation).hasClass('odd')) {
						$('.timeline-dates .swiper-slide').eq(indexForAnimation).addClass('animtateOdd');
					}
				}
			}
		},
		// Responsive breakpoints
		breakpoints: {
			// when window width is >= 320px
			300: {
				slidesPerView: 1,
				initialSlide: 0,
				spaceBetween: 1,
				allowSlidePrev: true,
				allowSlideNext: true
			},
			320: {
				slidesPerView: 1,
				initialSlide: 0,
				spaceBetween: 1,
				allowSlidePrev: true,
				allowSlideNext: true
			},
			// when window width is >= 480px
			480: {
				slidesPerView: 1,
				spaceBetween: 1,
				initialSlide: 0,
				allowSlidePrev: true,
				allowSlideNext: true
			},
			// when window width is >= 640px
			640: {
				slidesPerView: 1,
				spaceBetween: 1,
				initialSlide: 0,
				allowSlidePrev: true,
				allowSlideNext: true
			}
		}

	});

	timelineDates.on('slideChange', function () {
		if ($(window).width() > 600) {
			if ($('.timeline-dates .swiper-slide:last-child').index() - 2 == timelineDates.realIndex) {
				$('.timeline .timeline-button-next').css("pointer-events", 'none');
				$('.timeline .timeline-button-next').addClass("swiper-button-disabled");
			} else {
				$('.timeline .timeline-button-next').css("pointer-events", 'auto');
				$('.timeline .timeline-button-next').removeClass("swiper-button-disabled");
			}
			if ($('.timeline-dates .swiper-slide:first-child').index() + 2 == timelineDates.realIndex) {
				$('.timeline .timeline-button-prev').css("pointer-events", 'none');
				$('.timeline .timeline-button-prev').css("opacity", '0.4');
				$('.timeline .timeline-button-prev').addClass("swiper-button-disabled");
			} else {
				$('.timeline .timeline-button-prev').css("pointer-events", 'auto');
				$('.timeline .timeline-button-prev').css("opacity", '1');
				$('.timeline .timeline-button-prev').removeClass("swiper-button-disabled");
			}
		} else {

			if ($('.timeline-dates .swiper-slide:first-child').index() == timelineDates.realIndex) {
				$('.timeline .timeline-button-prev').css("opacity", '0.4');
				$('.timeline .timeline-button-prev').addClass("swiper-button-disabled");
			} else {
				$('.timeline .timeline-button-prev').css("opacity", '1');
				$('.timeline .timeline-button-prev').removeClass("swiper-button-disabled");
			}
		}
	});

	if ($(window).width() > 600) {
		$(".js-range-slider").ionRangeSlider({
			type: "double",
			prettify_enabled: false,
			min: $('.timeline-dates .swiper-slide:first-child').data('history'),
			max: $('.timeline-dates .swiper-slide:last-child').data('history'),
			from: $('.timeline-dates .swiper-slide:first-child').data('history'),
			to: $('.timeline-dates .swiper-slide:first-child').data('history') + 5,
			drag_interval: true,
			min_interval: null,
			max_interval: null,
			onChange: function (data) {
				let yearIndex = $('.timeline-dates [data-history="' + data.from + '"]').index();
				$('.timeline-dates .swiper-slide').removeClass('animtateEven');
				$('.timeline-dates .swiper-slide').removeClass('animtateOdd');
				if (yearIndex >= 0) {
					timelineDates.slideTo(yearIndex + 2);
				}
				if ($('.timeline-dates .swiper-slide').hasClass('even')) {
					$('.timeline-dates .swiper-slide').addClass('animtateEven');
				}
				if ($('.timeline-dates .swiper-slide').hasClass('odd')) {
					$('.timeline-dates .swiper-slide').addClass('animtateOdd');
				}
			}
		});
	}

	if ($(window).width() <= 600) {
		$(".js-range-slider").ionRangeSlider({
			type: "single",
			prettify_enabled: false,
			min: $('.timeline-dates .swiper-slide:first-child').data('history'),
			max: $('.timeline-dates .swiper-slide:last-child').data('history'),
			from: $('.timeline-dates .swiper-slide:first-child').data('history'),
			to: $('.timeline-dates .swiper-slide:first-child').data('history'),
			drag_interval: true,
			min_interval: null,
			max_interval: null,
			onFinish: function (data) {

				let yearIndex = $('.timeline-dates [data-history="' + data.from + '"]').index();
				$('.timeline-dates .swiper-slide').removeClass('animtateEven');
				$('.timeline-dates .swiper-slide').removeClass('animtateOdd');

				if (yearIndex >= 0) {
					timelineDates.slideTo(yearIndex);
					let indexForAnimation;
					indexForAnimation = this.realIndex;
					if ($('.timeline-dates .swiper-slide').hasClass('even')) {
						$('.timeline-dates .swiper-slide').addClass('animtateEven');
					}
					if ($('.timeline-dates .swiper-slide').hasClass('odd')) {
						$('.timeline-dates .swiper-slide').addClass('animtateOdd');
					}
				} else {
					alert('Data not exists!');
				}


			}
		});
	}

}(jQuery);

