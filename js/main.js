const button = document.querySelector(".read-more");
const text = document.querySelector(".preview");

const main = document.querySelector("main");
const btnOpen = document.querySelector("#btnOpen");
const btnClose = document.querySelector("#btnClose");

const navLinks = document.querySelector("#nav-links");
const slider = document.querySelector(".slider-track");
const nextButton = document.querySelector(".next");

const prevButton = document.querySelector(".prev"); 

document.addEventListener("DOMContentLoaded", () => {
    if (button && text) {
        button.textContent = "Läs mer";

        button.addEventListener("click", () => {
            text.classList.toggle("expanded");

            button.textContent = 
                text.classList.contains("expanded") 
                ? "Visa mindre" 
                : "Läs mer";
        });
    }


function openMobileMenu() {
    navLinks.classList.add("open")
    btnOpen.setAttribute('aria-expended', 'true');
} 

function closeMobileMenu() {
    navLinks.classList.remove("open");
    btnOpen.setAttribute('aria-expanded', 'false');
}

btnOpen.addEventListener('click', openMobileMenu);
btnClose.addEventListener('click', closeMobileMenu);

  if (slider && nextButton && prevButton) {
        const cards = slider.querySelectorAll(".info-och-bilder");
        const maxIndex = cards.length - 3;

        if (cards.length === 0) return; 

        let index = 0;
        const cardWidth = cards[0].offsetWidth;

        function updateSlider() {
            slider.style.transform = `translateX(-${index * cardWidth}px)`;
        }

        nextButton.addEventListener("click", () => {
            if (index < maxIndex) {
                index++;
                updateSlider(); 
            }
        });

        prevButton.addEventListener("click", () => {
            if (index > 0) {
                index--;
                updateSlider();
            }
        });
    }

    const questions = document.querySelectorAll("#questions div")
   
    questions.forEach(q => {
        const arrow = q.querySelector(".pil_ner");
        const show = q.querySelector(".popup");

        if(arrow && show) {
            arrow.addEventListener('click', () => {
                show.classList.toggle("popup_show");
            });
        }
    });
});
