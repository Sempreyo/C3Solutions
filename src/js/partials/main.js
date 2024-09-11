document.addEventListener("DOMContentLoaded", () => {
    const chart1 = document.getElementById("diag1");
    const chart2 = document.getElementById("diag2");

    if (chart1) {
        new Chart(chart1, {
            plugins: [ChartDataLabels],
            type: "doughnut",
            options: {
                cutout: 60,
                plugins: {
                    datalabels: {
                        color: "black",
                        font: {
                            size: "8",
                        },
                        textAlign: "center",
                        formatter: function (value, context) {
                            return context.chart.data.labels[context.dataIndex] + "\n" + value + "%";
                        }
                    },
                    legend: {
                        display: false,
                    },
                    tooltip: {
                        enabled: false
                    }
                }
            },
            data: {
                labels: [
                    "Система \n электроснабжения",
                    "Система \n охлаждения",
                    "Сторонний \n провайдер",
                    "ИТ-система \n (аппаратура \n и ПО)",
                    "Сетевая \n инфраст \n руктура",
                    "Прочие"
                ],
                datasets: [{
                    data: [52, 19, 9, 8, 7, 5],
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

    if (chart2) {
        new Chart(chart2, {
            plugins: [ChartDataLabels],
            type: "doughnut",
            options: {
                rotation: 41,
                cutout: 60,
                plugins: {
                    datalabels: {
                        color: "black",
                        font: {
                            size: "13",
                        },
                        textAlign: "center",
                        formatter: function (value, context) {
                            return value + "%" + "\n" + context.chart.data.labels[context.dataIndex];
                        }
                    },
                    legend: {
                        display: false,
                    },
                    tooltip: {
                        enabled: false
                    }
                }
            },
            data: {
                labels: [
                    "Да",
                    "Не \n знаю",
                    "Нет"
                ],
                datasets: [{
                    data: [29, 7, 65],
                    backgroundColor: [
                        "#95d5de",
                        "#b094c4",
                        "#f9d098"
                    ],
                    hoverOffset: 4
                }]
            }
        });
    }





    /* Ховер на свг в картинке */
    const svgParts = document.querySelectorAll(".scheme__image-hover g[data-part]");
    const tooltips = document.querySelectorAll('.tooltip');
    const hint = document.querySelector(".tooltip__hint");
    const clostBg = document.querySelector('.tooltip__closebackground');
    const clostBtn = document.querySelectorAll('.tooltip__close');

    svgParts.forEach(el => {
        el.addEventListener("click", () => {
            svgParts.forEach(el => el.classList.remove('-active', '-animate'));
            el.classList.add('-active');
            clostBg.classList.add('-open');
            tooltips.forEach(el => el.classList.remove('-open'));
            document.querySelector(".tooltip--" + el.dataset.part).classList.add("-open");
        });

        el.addEventListener("mouseover", (e) => {
            let domBlock = document.querySelector(`.tooltip--${el.dataset.part}`);
            let currentTitle = domBlock.querySelector('.tooltip__title').innerHTML;
            hint.classList.add("-open");
            hint.innerHTML = currentTitle;
        });

        el.addEventListener("mouseleave", () => {
            hint.classList.remove("-open");

        });

        el.addEventListener('mousemove', (e) => {
            hint.style.top = e.pageY - hint.offsetHeight - 30 +'px';
            hint.style.left = e.pageX - hint.offsetWidth/2 + 'px';
        });
    });

    /* Якорь к элементу */
    /*
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
    */

    /*Закрытие окна*/
    clostBtn.forEach(t => {
        t.addEventListener("click", () => {
            tooltips.forEach(el => el.classList.remove('-open'));
            svgParts.forEach(el => el.classList.remove('-active'));
            clostBg.classList.remove('-open');
        });
    })

    clostBg.addEventListener("click", () => {
        tooltips.forEach(el => el.classList.remove('-open'));
        svgParts.forEach(el => el.classList.remove('-active'));
        clostBg.classList.remove('-open');
    });

});
