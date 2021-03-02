!function ($) {

	"use strict";

	/**
	* Swiper slider - Timeline
	*/
	var container = $('.timeline');

	// var timelineContents = new Swiper('.timeline-contents', {
	// 	navigation: {
	// 		nextEl: '.timeline-button-next',
	// 		prevEl: '.timeline-button-prev',
	// 	},
	// 	grabCursor: true,
	//     spaceBetween: 10,
	//     autoHeight: true,
	// 	// autoplay: {
	// 	// 	delay: (container.data('autoplay'))?parseInt(container.data('autoplay'), 10):7000,
	// 	// },
	// 	speed: (container.data('speed'))?parseInt(container.data('speed'), 10):700,
	// });
	var timelineDates = new Swiper('.timeline-dates', {
	    centeredSlides: true,
	    slidesPerView: 'auto',
		initialSlide: 2,
		spaceBetween : 5,
	    touchRatio: 0.2,
	    slideToClickedSlide: true,
		navigation: {
			nextEl: '.timeline-button-next',
			prevEl: '.timeline-button-prev',
		}
	});
	// timelineContents.controller.control = timelineDates;
	// timelineDates.controller.control = timelineContents;

}(jQuery);


