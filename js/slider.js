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
