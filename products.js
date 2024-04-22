// Завдання 3, 4
// Масив одягу
const clothesData = { // масив елементів, які є object (одягу)
    hat: [
        { id: 0, type: 'hat', name: 'Чудовий капелюх номер 1', image: 'hat1.jpg', description: 'Чудовий капелюх номер 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.', price: 500},
        { id: 1, type: 'hat', name: 'Чудовий капелюх номер 2', image: 'hat2.jpg', description: 'Чудовий капелюх номер 2.Beautiful hat! Lorem ipsum dolor sit amet, consectetur adipiscing elit.', price: 600},
        { id: 18, type: 'hat', name: 'Чудовий капелюх номер 3', image: 'hat3.jpg', description: 'Чудовий капелюх номер 3.Beautiful hat! Lorem ipsum dolor sit amet, consectetur adipiscing elit.', price: 700},
        { id: 19, type: 'hat', name: 'Чудовий капелюх номер 4', image: 'hat4.jpg', description: 'Чудовий капелюх номер 4.Beautiful hat! Lorem ipsum dolor sit amet, consectetur adipiscing elit.', price: 800},
        { id: 20, type: 'hat', name: 'Чудовий капелюх номер 5', image: 'hat5.jpeg', description: 'Чудовий капелюх номер 5.Beautiful hat! Lorem ipsum dolor sit amet, consectetur adipiscing elit.', price: 900},
        { id: 21, type: 'hat', name: 'Чудовий капелюх номер 6', image: 'hat6.webp', description: 'Чудовий капелюх номер 6.Beautiful hat! Lorem ipsum dolor sit amet, consectetur adipiscing elit.', price: 1000},
        { id: 22, type: 'hat', name: 'Чудовий капелюх номер 7', image: 'hat7.png', description: 'Чудовий капелюх номер 7.Beautiful hat! Lorem ipsum dolor sit amet, consectetur adipiscing elit.', price: 1100},
        // тут можна нові капелюхи додати
    ],
    dresses: [
        { id: 2, type: 'dress', name:'Гарна сукня номер 1', image: 'dress1.jpg', description: 'Гарна сукня номер 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.', price: 1000},
        { id: 3, type: 'dress', name:'Гарна сукня номер 2', image: 'dress2.jpg', description: 'Гарна сукня номер 2.Lorem ipsum dolor sit amet, consectetur adipiscing elit.', price: 1100},
        { id: 4, type: 'dress', name:'Гарна сукня номер 3', image: 'dress3.jpg', description: 'Гарна сукня номер 3.Lorem ipsum dolor sit amet, consectetur adipiscing elit.', price: 1200},
        { id: 5, type: 'dress', name:'Гарна сукня номер 4', image: 'dress4.jpg', description: 'Гарна сукня номер 4.Lorem ipsum dolor sit amet, consectetur adipiscing elit.', price: 1300},
        { id: 14, type: 'dress', name:'Гарна сукня номер 5', image: 'dress5.jpg', description: 'Гарна сукня номер 5.Lorem ipsum dolor sit amet, consectetur adipiscing elit.', price: 1400},
        { id: 15, type: 'dress', name:'Гарна сукня номер 6', image: 'dress6.webp', description: 'Гарна сукня номер 6.Lorem ipsum dolor sit amet, consectetur adipiscing elit.', price: 1500},
        { id: 16, type: 'dress', name:'Гарна сукня номер 7', image: 'dress7.jpg', description: 'Гарна сукня номер 7.Lorem ipsum dolor sit amet, consectetur adipiscing elit.', price: 1600},
        { id: 17, type: 'dress', name:'Гарна сукня номер 8', image: 'dress8.jpg', description: 'Гарна сукня номер 8.Lorem ipsum dolor sit amet, consectetur adipiscing elit.', price: 1700},
        // тут сукні
    ],
    tops: [
        { id: 6, type: 'top', name:'Брендова куртка номер 1', image: 'top1.jpg', description: 'Брендова куртка номер 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.', price: 1500},
        { id: 7, type: 'top', name:'Брендова куртка номер 2', image: 'top2.jpg', description: 'Брендова куртка номер 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit.', price: 1600},
        { id: 8, type: 'top', name:'Брендова куртка номер 3', image: 'top3.jpg', description: 'Брендова куртка номер 3. Lorem ipsum dolor sit amet, consectetur adipiscing elit.', price: 1700},
        // всілякий верхній одяг
    ],
    shoes: [
        { id: 9, type: 'shoes', name:'Стильне взуття номер 1', image: 'shoes1.jpg', description: 'Стильне взуття номер 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.', price: 2000},
        { id: 10, type: 'shoes', name:'Стильне взуття номер 2', image: 'shoes2.jpg', description: 'Стильне взуття номер 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit.', price: 2100},
        { id: 11, type: 'shoes', name:'Стильне взуття номер 3', image: 'shoes3.jpg', description: 'Стильне взуття номер 3. Lorem ipsum dolor sit amet, consectetur adipiscing elit.', price: 2200},
        { id: 12, type: 'shoes', name:'Стильне взуття номер 4', image: 'shoes4.jpg', description: 'Стильне взуття номер 4. Lorem ipsum dolor sit amet, consectetur adipiscing elit.', price: 2300},
        { id: 13, type: 'shoes', name:'Стильне взуття номер 5', image: 'shoes5.jpg', description: 'Стильне взуття номер 5. Lorem ipsum dolor sit amet, consectetur adipiscing elit.', price: 2400},
        // взуття
    ],
};

// Отримання посилання на контейнер для відображення карток товарів з DOM
const Cards = document.getElementById('cards');

// Функція для відображення товарів
function renderCards(data) {
    Cards.innerHTML = ''; // Очищення контейнера перед відображенням нових товарів
    data.forEach((item) => { // Перебір кожного елементу у списку товарів
        // Додавання HTML-структури для кожного товару до контейнера
        Cards.innerHTML += `
        <div class="card">
            <div class="img-container">
                <img src="../images/${item.image}" alt="${item.type}">
            </div>
            <h4>${item.name}</h4>
            <p>Ціна: ${item.price} грн</p>
            <button onclick="addToCart('${item.id}')">Додати в кошик</button>
        </div>
        `;
    });
    if (Cards.innerHTML === '') { // Перевірка чи контейнер з картками товарів порожній
        Cards.innerHTML = '<div class="no-results">Нічого не знайдено</div>'; // Відображення повідомлення про відсутність товарів
    }
}

// Отримання посилань на елементи форми фільтрації та сортування з DOM
const filterName = document.getElementById('filter-input');
const filterType = document.getElementById('filter-type');
const priceSort = document.getElementById('sort-price');
const minPriceInput = document.getElementById('price-min');
const maxPriceInput = document.getElementById('price-max');

// Функція для сортування та фільтрації даних товарів
function sortData() {
    const sortBy = priceSort.value; // Отримання значення для сортування
    let sortedData = [];

    // Вибірка даних для сортування відповідно до типу товару
    if (clothesData.hasOwnProperty(filterType.value)) {
        sortedData = [...clothesData[filterType.value]];
    } else {
        for (let key in clothesData) {
            sortedData = [...sortedData, ...clothesData[key]];
        }
    }

    // Сортування даних відповідно до вибраного параметра сортування
    switch (sortBy) {
        case 'name':
            sortedData.sort((a, b) => a.name.localeCompare(b.name));
            break;
        case 'pricedown':
            sortedData.sort((a, b) => b.price - a.price);
            break;
        case 'priceup':
            sortedData.sort((a, b) => a.price - b.price);
            break;
        default:
            sortedData = [...clothesData[filterType.value]];
    }

    // Фільтрація даних за ціновими межами та назвою
    let priceMin = Number(minPriceInput.value);
    let priceMax = Number(maxPriceInput.value);

    if (priceMax === 0) {
        priceMax = 1000000000;
    }

    sortedData = sortedData.filter((item) => item.price >= priceMin && item.price <= priceMax);

    let filter = filterName.value.toLowerCase();
    sortedData = sortedData.filter((item) => item.name.toLowerCase().includes(filter));

    // Виклик функції для відображення відфільтрованих та відсортованих товарів
    renderCards(sortedData);
}

// Додавання обробників подій для елементів форми фільтрації та сортування
filterName.addEventListener('input', sortData);
filterType.addEventListener('change', sortData);
priceSort.addEventListener('change', sortData);
minPriceInput.addEventListener('input', sortData);
maxPriceInput.addEventListener('input', sortData);

// Виклик функції для сортування та фільтрації даних під час завантаження сторінки
sortData();
