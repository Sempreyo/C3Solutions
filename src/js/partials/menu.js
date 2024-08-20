document.addEventListener("DOMContentLoaded", () => {
	const menu = document.querySelector(".menu");
	const menuOffset = menu.offsetTop;
	const buttonUp = document.querySelector(".button-up");
	let menuHeight = menu.offsetHeight;
	let scroll = window.pageYOffset;
	let isScroll = false;
	let scrollPrev = 0;

	const initMenu = () => {
		window.addEventListener("scroll", scrollMenuHandler);
		window.addEventListener("scroll", buttonUpHandler);
	}

	const buttonUpHandler = () => {
		scroll = window.pageYOffset;

		if (scroll > 300) {
			buttonUp.classList.add("button-up--visible");
		} else {
			buttonUp.classList.remove("button-up--visible");
		}
	}

	buttonUp.addEventListener("click", () => {
		document.querySelector("body").scrollIntoView({
			behavior: 'smooth'
		});
	});

	const scrollMenuHandler = () => {
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

	const menuResizeObserver = new ResizeObserver((entries) => {
		const [entry] = entries;

		if (entry.contentRect.width > 991) {
			initMenu();
		}
	});

	menuResizeObserver.observe(menu);

	initMenu();
});