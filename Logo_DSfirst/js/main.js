const menuToggler = document.querySelector(".header__button");

const menu = document.querySelector(".header__nav");

menuToggler.addEventListener("click", function () {
  menu.classList.toggle("js-menu-show");
});
