document.addEventListener('DOMContentLoaded', function () {
    // Находим все ссылки категорий
    const categoryLinks = document.querySelectorAll('.category-link');
    // Находим контейнер с карточками
    const cardsContainer = document.getElementById('cards-container');
    // Находим все карточки
    const cards = document.querySelectorAll('#cards-container > div');

    // Добавляем обработчик события для каждой ссылки
    categoryLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault(); // Отменяем стандартное поведение ссылки

            // Получаем выбранную категорию
            const selectedCategory = this.getAttribute('data-category');

            // Фильтруем карточки
            cards.forEach(card => {
                const cardCategory = card.getAttribute('data-category');

                if (selectedCategory === 'all' || cardCategory === selectedCategory) {
                    card.style.display = 'flex'; // Показываем карточку
                } else {
                    card.style.display = 'none'; // Скрываем карточку
                }
            });
        });
    });
});