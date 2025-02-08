let swiper = new Swiper(".default-carousel", {
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});


// import forms from '@tailwindcss/forms';
//
// /** @type {import('tailwindcss').Config} */
// export default {
//     content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
//     plugins: [forms],
// };

document.querySelectorAll('.custom-arrows').forEach(arrowContainer => {
    const input = arrowContainer.previousElementSibling;

    arrowContainer.addEventListener('click', event => {
        const rect = arrowContainer.getBoundingClientRect();
        const clickY = event.clientY - rect.top;
        if (clickY < rect.height / 2) {
            input.stepUp(); // Увеличиваем значение
        } else {
            input.stepDown(); // Уменьшаем значение
        }
    });
});


const buttons = document.querySelectorAll('.time-button');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        // Удалить класс 'bg-yellow-500' и 'text-black' у всех кнопок
        buttons.forEach(btn => {
            btn.classList.remove('bg-yellow-500', 'text-black');
            btn.classList.add('hover:bg-yellow-500', 'hover:text-black'); // вернуть hover-эффекты
        });

        // Добавить выделение к нажатой кнопке
        button.classList.add('bg-yellow-500', 'text-black');
    });
});
