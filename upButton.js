// Скролл вверх 10 завдання

// Отримуємо посилання на кнопку "Прокрутка вгору"
mybutton = document.getElementById("upButton");

// Коли користувач прокручує сторінку вниз на 2/3 від загальної висоти документа, показуємо кнопку "Прокрутка вгору"
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > (document.body.scrollHeight/3) || document.documentElement.scrollTop > (document.body.scrollHeight/3)) {
    mybutton.style.display = "block"; // Показуємо кнопку
  } else {
    mybutton.style.display = "none"; // Приховуємо кнопку
  }
}

// Коли користувач клікає на кнопку, прокручуємо сторінку вгору
function topFunction() {
    document.body.scrollTop = 0; // Для Safari
    document.documentElement.scrollTop = 0; // Для інших браузерів
}

// Додаємо обробник події на кнопку "Прокрутка вгору"
mybutton.addEventListener("click", topFunction);
