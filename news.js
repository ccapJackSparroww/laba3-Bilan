// Завдання 6

// Збереження ключа API для отримання новин
const keyAPI = '0ae3cb5cac03409b9aa78237be53ccce';

// Виконання запиту на отримання новин з API
fetch(`https://newsapi.org/v2/top-headlines?country=ua&apiKey=0ae3cb5cac03409b9aa78237be53ccce`)
  .then(response => response.json()) // Перетворення відповіді на JSON формат
  .then(data => renderNews(data.articles)) // Виклик функції для відображення новин з отриманими даними
  .catch(error => console.error('Error:', error)); // Обробка помилок в разі виникнення

// Отримання посилання на список новин з DOM
const newsList = document.getElementById('news-list');

// Функція для відображення новин
function renderNews(data) {
    newsList.innerHTML = ''; // Очищення списку новин перед відображенням нових
    data.forEach((item) => { // Перебір кожного елементу у списку новин
        publishedAt = new Date(item.publishedAt); // Отримання дати публікації у форматі дати JavaScript
        if (item.urlToImage === null) { // Перевірка чи є зображення новини
            item.urlToImage = "../images/no-image.png"; // Заміна на стандартне зображення у випадку його відсутності
        }
        if (item.description === null) { // Перевірка чи є опис новини
            item.description = "Опис відсутній"; // Заміна на стандартний текст у випадку відсутності опису
        }

        // Додавання HTML-структури для кожної новини до списку
        newsList.innerHTML += `
        <div class="news-item">
            <h4>${item.title}</h4>
            <img src="${item.urlToImage}" alt="${item.title}">
            <p class="news-description">${item.description}</p>
            <div class="button-container"><button class="news-button">Детальніше</button></div>
            <p>${publishedAt}</p>
        </div>
        `;
    });
    if (newsList.innerHTML === '') { // Перевірка чи список новин пустий
        newsList.innerHTML = '<div class="no-results">Нічого не знайдено</div>'; // Відображення повідомлення про відсутність новин
    }

    // Отримання посилань на кожну новину та кнопки "Детальніше"
    const newsItems = document.querySelectorAll('.news-item');
    const newsButtons = document.querySelectorAll('.news-button');

    // Додавання обробника події для кнопок "Детальніше"
    newsButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
            const description = newsItems[index].querySelector('.news-description'); // Отримання опису новини
            description.classList.toggle('hidden'); // Перемикач для приховування/показу опису новини
            if (description.classList.contains('hidden')) { // Перевірка чи опис прихований
                button.textContent = 'Детальніше'; // Зміна тексту кнопки на "Детальніше"
            } else {
                button.textContent = 'Приховати опис'; // Зміна тексту кнопки на "Приховати опис"
            }
        });
    });
}
