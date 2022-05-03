const swiper = new Swiper('.lesson-card-slider', {
	observer: true,
	observeParents: true,
	speed: 800,
	slidesPerView: 3,
	spaceBetween: 55,

	navigation: {
	  nextEl: ".lesson-card-next",
	  prevEl: ".lesson-card-prev",
	},

	pagination: {
		el: '.lesson-card-pagination',
		type: 'bullets',
		clickable: true,
	},


	scrollbar: {
		el: '.swiper-scrollbar',
		draggable: true,
	},
});