// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";


const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".menu__link");

window.addEventListener("scroll", () => {
    let currentSection = "";


    if (sections.length && navLinks.length) {
        sections.forEach((section) => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;

            if (scrollY >= sectionTop - sectionHeight / 3) {
                currentSection = section.getAttribute("id");
            }
        });

        navLinks.forEach((link) => {
            link.classList.remove("menu__item_active");
            if (link.getAttribute("href") === `#${currentSection}`) {
                link.classList.add("menu__item_active");
            }
        });
    }
});
