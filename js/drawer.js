const burgerButton = document.getElementById("open-button");
const closeButton = document.getElementById("close-button")
const drawer = document.querySelector(".page-header__drawer");

burgerButton.addEventListener("click", function () {
    drawer.classList.add("show-drawer");
});

closeButton.addEventListener("click", function () {
    drawer.classList.remove("show-drawer");
});