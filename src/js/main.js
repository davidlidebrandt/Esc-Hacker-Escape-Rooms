const mobileMenuButton = document.querySelector(".hamburger-icon");
const mobileNavMenu = document.querySelector(".mobile-nav");
const opacityLayer = document.querySelector(".opacity-layer");
const closeMobileNavMenuButton = document.querySelector(".close-button");

mobileMenuButton.addEventListener("click", ()=> {
    mobileNavMenu.classList.add("active");
    opacityLayer.classList.add("active");
});

closeMobileNavMenuButton.addEventListener("click", ()=> {
    mobileNavMenu.classList.remove("active");
    opacityLayer.classList.remove("active");
});