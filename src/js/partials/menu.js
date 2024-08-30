document.addEventListener("DOMContentLoaded", () => {
	const menu = document.querySelector(".menu");
	const buttonUp = document.querySelector(".button-up");

	const initMenu = () => {
		if (menu) {
			let currentScroll = 0;

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
		let top = window.pageYOffset;
		let isScroll = false;

		if (scroll > top) {
			menuHeight = isScroll ? menu.offsetHeight : null;
			menu.classList.remove("menu--opened");
		} else if (scroll < top) {
			isScroll = false;
			menu.classList.add("menu--opened");
		}
		scroll = top;
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