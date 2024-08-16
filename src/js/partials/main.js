document.addEventListener("DOMContentLoaded", () => {
    const chart = document.getElementById("pieDiag");

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
                        value: 14
                    },
                    {
                        key: "Сторонний провайдер",
                        value: 14
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
});
