document.addEventListener("DOMContentLoaded", () => {
	const heroCarousel = document.querySelectorAll(".hero__slider");
	const casesCarousel = document.querySelectorAll(".case-slider__wrapper");
	const webinarCarousel = document.querySelectorAll(".webinar-slider__wrapper");

	if (heroCarousel.length > 0) {
		heroCarousel.forEach(elem => {
			const heroCarouselNext = elem.nextElementSibling.querySelector(".swiper-btn-next");
			const heroCarouselPrev = elem.nextElementSibling.querySelector(".swiper-btn-prev");

			const slider = new Swiper(elem, {
				slidesPerView: 1,
				spaceBetween: 10,
				loop: true,
				navigation: {
					nextEl: heroCarouselNext,
					prevEl: heroCarouselPrev,
				},
				autoplay: {
					delay: 5000,
					pauseOnMouseEnter: true
				}
			});
		});
	}

	if (webinarCarousel.length > 0) {
		webinarCarousel.forEach(elem => {
			const webinarCarouselNext = elem.nextElementSibling.querySelector(".swiper-btn-next");
			const webinarCarouselPrev = elem.nextElementSibling.querySelector(".swiper-btn-prev");

			const slider = new Swiper(elem, {
				slidesPerView: 1,
				spaceBetween: 10,
				loop: true,
				autoHeight: true,
				pagination: {
					el: ".webinar-slider__pagination",
					clickable: true
				},
				navigation: {
					nextEl: webinarCarouselNext,
					prevEl: webinarCarouselPrev,
				}
			});
		});
	}

	if (casesCarousel.length > 0) {
		casesCarousel.forEach(elem => {
			const casesCarouselNext = elem.nextElementSibling.querySelector(".swiper-btn-next");
			const casesCarouselPrev = elem.nextElementSibling.querySelector(".swiper-btn-prev");

			const slider = new Swiper(elem, {
				slidesPerView: 1,
				spaceBetween: 10,
				loop: true,
				autoHeight: true,
				pagination: {
					el: ".case-slider__pagination",
					clickable: true
				},
				navigation: {
					nextEl: casesCarouselNext,
					prevEl: casesCarouselPrev,
				}
			});
		});
	}
});
