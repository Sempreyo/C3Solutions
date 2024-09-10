document.addEventListener("DOMContentLoaded", () => {
    const chart = document.getElementById("pieDiag");

    if (chart) {
        new Chart(chart, {
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





    /* Ховер на свг в картинке */
    const svgParts = document.querySelectorAll(".scheme__image-hover g[data-part]");
    const tooltips = document.querySelectorAll('.tooltip');
    const hint = document.querySelector(".tooltip__hint");
    
    svgParts.forEach(el => {
        el.addEventListener("click", () => {
            svgParts.forEach(el => el.classList.remove('-active'));
            el.classList.add('-active');
            tooltips.forEach(el => el.classList.remove('-open'));
            document.querySelector(".tooltip--" + el.dataset.part).classList.add("-open");
        });

        el.addEventListener("mouseover", () => {
            hint.classList.add("-open")
        });

        el.addEventListener("mouseleave", () => {
            hint.classList.remove("-open")
        });

        el.addEventListener('mousemove', (e) => {
            hint.style.top = e.pageY - hint.offsetHeight / 2 + 'px';
            hint.style.left = e.pageX + 45 + 'px';
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

    const clostBtn = document.querySelectorAll('.tooltip__close');

    clostBtn.forEach(t => {
        t.addEventListener("click", () => {
            const tooltips = document.querySelectorAll('.tooltip');
            tooltips.forEach(el => el.classList.remove('-open'));
            const gsvg = document.querySelectorAll('.scheme__image-hover g[data-part]');
            gsvg.forEach(el => el.classList.remove('-active'));
        });
    })
});
