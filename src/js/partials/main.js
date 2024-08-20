document.addEventListener("DOMContentLoaded", () => {
    const chart = document.getElementById("pieDiag");

    if (chart) {
        new Chart(chart, {
            type: 'pie',
            data: {
                datasets: [{
                    data: [
                        {
                            key: "Система электроснабжения",
                            value: 52
                        },
                        {
                            key: "Система   охлаждения",
                            value: 19
                        },
                        {
                            key: "Сторонний провайдер",
                            value: 19
                        },
                        {
                            key: "ИТ-система (аппаратура и ПО)",
                            value: 8
                        },
                        {
                            key: "Сетевая инфраструктура",
                            value: 7
                        },
                        {
                            key: "Прочие",
                            value: 5
                        }
                    ],
                    backgroundColor: [
                        "#30c2c6",
                        "#ac8ab2",
                        "#f0c493",
                        "#9acedc",
                        "#489bd1",
                        "#acb9c9"
                    ],
                    hoverOffset: 4
                }]
            }
        });
    }

    /* Ховер на свг в картинке */
    if (window.matchMedia("(min-width: 768px)").matches) {
        const svgParts = document.querySelectorAll(".scheme__image-hover g[data-part]");

        svgParts.forEach(el => {
            el.addEventListener("click", () => {
                document.querySelector(`div[data-part="${el.dataset.part}"]`).scrollIntoView({
                    behavior: 'smooth'
                });
            });

            el.addEventListener("mouseover", () => {
                const tip = document.querySelector(`.tooltip--${el.dataset.part}`);

                tip.classList.add("tooltip--open");
            });

            el.addEventListener("mouseleave", () => {
                const tip = document.querySelector(`.tooltip--${el.dataset.part}`);

                tip.classList.remove("tooltip--open");
            });

            el.addEventListener('mousemove', (e) => {
                const tip = document.querySelector(`.tooltip--${el.dataset.part}`);
                const stick = tip.querySelector(".tooltip__stick");

                if (e.pageX + tip.offsetWidth < document.body.offsetWidth) {
                    tip.style.top = e.pageY - tip.offsetHeight / 2 + 'px';
                    tip.style.left = e.pageX + 45 + 'px';
                    stick.classList.remove("tooltip__stick--vertical");
                } else {
                    tip.style.top = e.pageY + 60 + 'px';
                    tip.style.left = e.pageX - tip.offsetWidth / 2 + 'px';
                    stick.classList.add("tooltip__stick--vertical");
                }
            });
        });
    }

    /* Якорь к элементу */
    const anchors = document.querySelectorAll('.anchor');

    if (anchors && anchors.length > 0) {
        anchors.forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();

                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });
    }
});
