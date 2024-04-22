// Завдання 11

document.addEventListener("DOMContentLoaded", () => { // Очікування завершення завантаження DOM

    let dialog = document.getElementById("dialog"); // Отримання посилання на діалогове вікно
    let modal = document.getElementById("modal"); // Отримання посилання на модальне вікно
    let isSubscritionAccepted; // Змінна для відстеження прийняття підписки

    // Перевірка, чи вже було прийнято підписку та збереження цього статусу у localStorage
    if (localStorage.getItem('subscriptionAccepted') == null) {
        isSubscriptionAccepted = localStorage.setItem('subscriptionAccepted', 'false');
    }

    let submitBtn = document.getElementById("submit"); // Отримання посилання на кнопку підтвердження
    function nonModal() {
        dialog.show(); // Відображення немодального діалогового вікна

        dialog.onclose = () => {
            console.log("closed: ", dialog.returnValue); // Обробка закриття діалогового вікна
        };

        submitBtn.onclick = (e) => {
            localStorage.setItem('subscriptionAccepted', 'true'); // Збереження статусу підписки в localStorage

        };
    }

    // Перевірка та показ немодального діалогового вікна через 10 секунд, якщо підписка не прийнята
    if (localStorage.getItem('subscriptionAccepted') == null || localStorage.getItem('subscriptionAccepted') == 'false') {
        isSubscriptionAccepted = localStorage.setItem('subscriptionAccepted', 'false')
        window.setTimeout(nonModal, 10000);
    } else {
        isSubscriptionAccepted = localStorage.getItem('subscriptionAccepted');
    }

    function showButton() {
        var button = document.querySelector(".hidden"); // Отримання посилання на приховану кнопку
        var text = document.querySelector("#fivesec"); // Отримання посилання на елемент з текстом
        text.classList.replace("shown", "hidden"); // Зміна класів для приховання тексту
        button.classList.replace("hidden", "shown"); // Зміна класів для показу кнопки
    }

    function showModal() {
        modal.show(); // Показ модального вікна
    }

    // Виклик функцій показу модального вікна та зміни класів через певний проміжок часу
    for (let i = 0; i < 1; i++) {
        window.setTimeout(showModal, 30000);
        window.setTimeout(showButton, 35000);
    }
});

