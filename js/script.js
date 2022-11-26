const navToggle = document.querySelector(".toggle");
const container = document.querySelector(".menu");

navToggle.addEventListener("click", () => {
    container.classList.toggle("menu_visible");
});