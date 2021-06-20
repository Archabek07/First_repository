const menuToggler = document.querySelector(".header__button");

const menu = document.querySelector(".header__list");

menuToggler.addEventListener("click", function () {
  menu.classList.toggle("js-menu-show");
});

const menuButton = document.querySelector(".header__button");

const button = document.querySelector(".header__button");

menuButton.addEventListener("click", function () {
  button.classList.toggle("js-menu-button");
});
