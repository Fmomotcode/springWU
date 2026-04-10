const button = document.querySelector(".read-more");
const text = document.querySelector(".preview");
const img = document.querySelector(".mindre");
const main = document.querySelector("main");
const btnOpen = document.querySelector("#btnOpen");
const btnClose = document.querySelector("#btnClose");
const navLinks = document.querySelector("#nav-links");
const slider = document.querySelector(".slider-track");
const nextButton = document.querySelector(".next");
const prewButton = document.querySelector(".prev")

button.addEventListener("click", () => {
    text.classList.toggle("expanded");
    button.textContent = 
        text.classList.contains("expanded") 
        ? "Visa mindre" 
        : "Läs mer";
});

img.addEventListener("mouseenter", () => {
    img.classList.add("mer");
});

img.addEventListener("mouseleave", () => {
    img.classList.remove("mer");
}); 

function openMobileMenu() {
    navLinks.classList.add("open")
    btnOpen.setAttribute('aria-exppended', 'true');
} 

function closeMobileMenu() {
    navLinks.classList.remove("open");
    btnOpen.setAttribute('aria-expanded', 'false');
}

btnOpen.addEventListener('click', openMobileMenu);
btnClose.addEventListener('click', closeMobileMenu);

if (slider && nextButton && prewButton) {
    let index = 0;
    const cards = slider.querySelectorAll(".info-och-bilder");

    function updateSlider() {
        slider.style.transform = `translateX(-${index * 280}px)`;
    }

    nextButton.addEventListener("click", () => {
        index++;
        if (index > cards.length - 1) 
            index = 0;
        updateSlider();
    });

    prewButton.addEventListener("click", () => {
        index--;
        if (index < 0) index = cards.length - 1;
        updateSlider();
    });
}
