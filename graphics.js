// Завдання 7,8,9

let cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];

// Отримання посилань на кнопки графіків
chartButton = document.getElementById('chartButton');
pieChartButton = document.getElementById('pieChartButton');
lineChartButton = document.getElementById('lineChartButton');

// Обробник події для кнопки графіка стовпчикової діаграми
chartButton.addEventListener('click', () => {
    // Показати блок графіка стовпчикової діаграми
    chartContainer.style.display = 'block';
    // Приховати блоки графіків кругової діаграми та лінійного графіка
    pieChartContainer.style.display = 'none';
    lineChartContainer.style.display = 'none';
})

// Обробник події для кнопки графіка кругової діаграми
pieChartButton.addEventListener('click', () => {
    // Приховати блок графіка стовпчикової діаграми
    chartContainer.style.display = 'none';
    // Показати блок графіка кругової діаграми
    pieChartContainer.style.display = 'block';
    // Приховати блок лінійного графіка
    lineChartContainer.style.display = 'none';
})

// Обробник події для кнопки графіка лінійного графіка
lineChartButton.addEventListener('click', () => {
    // Приховати блок графіка стовпчикової діаграми
    chartContainer.style.display = 'none';
    // Приховати блок графіка кругової діаграми
    pieChartContainer.style.display = 'none';
    // Показати блок графіка лінійного графіка
    lineChartContainer.style.display = 'block';
})

// Відображення графіка при завантаженні сторінки
window.addEventListener('load', () => {
    // Показати блок графіка стовпчикової діаграми
    chartContainer.style.display = 'block';
    // Приховати блоки графіків кругової діаграми та лінійного графіка
    pieChartContainer.style.display = 'none';
    lineChartContainer.style.display = 'none';
})

// Створення масиву з даними для графіка
let chartData = [];

// Перетворення кошика в масив з даними для графіка
cart.forEach((item) => {
    chartData.push({
        name: item.name,
        price: item.price
    });
});

// Створення стовпчикової діаграми
const chartContainer = document.getElementById('chartContainer');
const chart = new Chart(chartContainer, {
    type: 'bar',
    data: {
        labels: chartData.map((item) => item.name),
        datasets: [{
            label: 'Price',
            data: chartData.map((item) => item.price),
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

// Створення кругової діаграми
const pieChartContainer = document.getElementById('pieChartContainer');
const pieChart = new Chart(pieChartContainer, {
    type: 'pie',
    data: {
        labels: chartData.map((item) => item.name),
        datasets: [{
            label: 'Price',
            data: chartData.map((item) => item.price),
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

// Створення лінійного графіка
const lineChartContainer = document.getElementById('lineChartContainer');
const lineChart = new Chart(lineChartContainer, {
    type: 'line',
    data: {
        labels: chartData.map((item) => item.name),
        datasets: [{
            label: 'Price',
            data: chartData.map((item) => item.price),
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
