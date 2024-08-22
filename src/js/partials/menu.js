document.addEventListener("DOMContentLoaded", () => {
	const menu = document.querySelector(".menu");
	const buttonUp = document.querySelector(".button-up");

	const initMenu = () => {
		if (menu) {
			window.addEventListener("scroll", scrollMenuHandler);
		}
	}

	const initButtonUp = () => {
		if (buttonUp) {
			window.addEventListener("scroll", buttonUpHandler);

			buttonUp.addEventListener("click", () => {
				document.querySelector("body").scrollIntoView({
					behavior: 'smooth'
				});
			});
		}
	}

	const buttonUpHandler = () => {
		scroll = window.pageYOffset;

		if (scroll > 300) {
			buttonUp.classList.add("button-up--visible");
		} else {
			buttonUp.classList.remove("button-up--visible");
		}
	}

	const scrollMenuHandler = () => {
		const menuOffset = menu.offsetTop;
		let menuHeight = menu.offsetHeight;
		let scroll = window.pageYOffset;
		let isScroll = false;
		let scrollPrev = 0;

		scroll = window.pageYOffset;

		if (scroll >= menuOffset + menuHeight / 2) {
			if (scroll < scrollPrev) {
				isScroll = true;

				menuHeight = isScroll ? menu.offsetHeight : null;
				menu.classList.remove("menu--opened");
			} else {
				isScroll = false;
				menu.classList.add("menu--opened");
			}
		}

		scrollPrev = scroll;
	}

	if (menu) {
		const menuResizeObserver = new ResizeObserver((entries) => {
			const [entry] = entries;
	
			if (entry.contentRect.width > 991) {
				initMenu();
			}
		});
	
		menuResizeObserver.observe(menu);
	}

	initMenu();
	initButtonUp();
});