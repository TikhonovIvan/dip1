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