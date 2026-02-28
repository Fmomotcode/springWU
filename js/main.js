const button = document.querySelector(".read-more");
const text = document.querySelector(".preview");
const img = document.querySelector(".mindre");
const main = document.querySelector("main");

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
