// завдання 5
// Ініціалізація змінних кошика з використанням локального сховища браузера. 
// Якщо кошик вже існує у локальному сховищі, він завантажується; якщо ні, створюється новий пустий кошик.
let cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];

// Додавання товару в кошик за його ідентифікатором.
function addToCart(id) {
    // Пошук товару за ідентифікатором серед усіх доступних категорій одягу.
    const item = clothesData.hat.concat(clothesData.dresses, clothesData.tops, clothesData.shoes).find((item) => item.id == id);
    // Додавання знайденого товару до кошика.
    cart.push(item);
    // Оновлення кошика у локальному сховищі браузера.
    localStorage.setItem('cart', JSON.stringify(cart));
    // Виведення вмісту кошика у консоль для перевірки.
    console.log(cart);
}

// Видалення товару з кошика за його ідентифікатором.
function removeFromCart(id) {
    // Вибірка товару з кошика, який має бути видалений.
    cart = cart.filter((item) => item.id != id);
    // Оновлення кошика у локальному сховищі браузера.
    localStorage.setItem('cart', JSON.stringify(cart));
    // Виведення вмісту кошика у консоль для перевірки.
    console.log(cart);
}

// Відкриття модального вікна зі списком товарів у кошику.
function openCartModal() {
    // Створення елемента div для модального вікна.
    const modal = document.createElement('div');
    modal.classList.add('modal');
    
    // Створення контенту модального вікна.
    const modalContent = document.createElement('div');
    modalContent.classList.add('modal-content');
    
    // Створення кнопки закриття модального вікна.
    const closeButton = document.createElement('span');
    closeButton.classList.add('close');
    closeButton.innerHTML = '&times;';
    
    // Додавання обробника події для закриття модального вікна.
    closeButton.addEventListener('click', () => {
        modal.style.display = 'none';
    });
    
    // Додавання кнопки закриття до контенту модального вікна.
    modalContent.appendChild(closeButton);
    
    // Створення контейнера для товарів у кошику.
    const cartItems = document.createElement('div');
    cartItems.classList.add('cart-items');
    let basketSum = 0;
    
    // Виведення товарів у кошику та їх кількості.
    cart.forEach((item) => {
        // Створення блоку для одного товару у кошику.
        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');
        
        // Створення елемента для виведення назви товару.
        const itemName = document.createElement('span');
        itemName.innerText = item.name;

        // Створення поля вводу для вибору кількості товару.
        const quantity = document.createElement('input');
        quantity.type = 'number';
        quantity.value = 1;
        quantity.min = 1;
        quantity.max = 10;

        // Додавання обробника події для оновлення загальної суми кошика при зміні кількості товару.
        quantity.addEventListener('input', () => {
            basketSum = 0;
            console.log(quantity.value);
            itemPrice.innerText = (item.price * quantity.value) + ' грн';
            cartItem.sum = item.price * quantity.value;
            
            cartItems.childNodes.forEach((item) => {
                if (item.sum) {
                    basketSum += item.sum;
                }
            })

            total.innerText = 'Сума: ' + basketSum + ' грн';
        })

        // Створення елемента для виведення ціни товару.
        const itemPrice = document.createElement('span');
        itemPrice.innerText = item.price + ' грн';
        cartItem.sum = item.price;
        basketSum += item.price;
        
        // Створення кнопки для видалення товару з кошика.
        const removeButton = document.createElement('button');
        removeButton.innerText = 'Видалити';
        removeButton.addEventListener('click', () => {
            removeFromCart(item.id);
            basketSum -= cartItem.sum;
            total.innerText = 'Сума: ' + basketSum + ' грн';
            cartItems.removeChild(cartItem);
        });
        
        // Додавання елементів товару до блоку товару у кошику.
        cartItem.appendChild(itemName);
        cartItem.appendChild(quantity);
        cartItem.appendChild(itemPrice);
        cartItem.appendChild(removeButton);
        
        // Додавання блоку товару до контейнера кошика.
        cartItems.appendChild(cartItem);
    });

    // Виведення повідомлення про порожній кошик, якщо він порожній.
    if (cartItems.innerHTML === '') {
        cartItems.innerHTML = '<div class="no-results cart">Кошик порожній</div>';
    }

    // Створення елемента для виведення загальної суми кошика.
    const total = document.createElement('div');
    total.classList.add('total');
    total.innerText = 'Сума: ' + basketSum + ' грн';
    // Додавання елемента загальної суми до контейнера кошика.
    cartItems.appendChild(total);
    
    // Додавання контейнера кошика до контенту модального вікна.
    modalContent.appendChild(cartItems);
    
    // Додавання контенту модального вікна до модального вікна.
    modal.appendChild(modalContent);
    
    // Додавання модального вікна до сторінки.
    document.body.appendChild(modal);
    
    // Відображення модального вікна.
    modal.style.display = 'block';

    // Закриття модального вікна при кліку на поза ним.
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    }
}

// Додавання обробника події на кнопку кошика.
cartButton = document.getElementById('cart-button');
cartButton.addEventListener('click', openCartModal);
