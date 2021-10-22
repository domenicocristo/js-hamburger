const  hamburger = document.querySelector(".hamburger-menu");
const close = document.querySelector(".close");
const icon = document.querySelector(".fa-bars");
// hamburger.addEventListener(`click`,

function toggleMenu() {
    if (hamburger.classList.contains("showMenu")) {
        hamburger.classList.remove("showMenu");
        close.style.display = "none"; 
        icon.style.display = "block";
    } else {
        hamburger.classList.remove("showMenu");
        close.style.display = "block"; 
        icon.style.display = "none";
    }
}
// );

hamburger.addEventListener("click", toggleMenu);