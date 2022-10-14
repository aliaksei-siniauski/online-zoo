export { toggleMenu };

const burger = document.querySelector(".burger");
const overlayScreen = document.querySelector("#overlay-screen");
const headerNav = document.querySelector(".header__nav");
const navList = document.querySelector(".header__list");
const navItems = document.querySelectorAll(".header__nav .list__item");
const logo = document.querySelector(".header__logo");
const burgerLogo = document.querySelector(".burger__logo");

window.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    e.preventDefault;
    closeBurger();
  }
});

window.addEventListener("resize", () => {
  closeBurger();
});

const toggleMenu = () => {
  openBurger();
  closeBurger();
};

const openBurger = () => {
  document.body.classList.toggle("boody-hidden");
  burger.classList.toggle("open-menu");
  overlayScreen.classList.toggle("show-overlay");
  headerNav.classList.toggle("open-menu");
  navList.classList.toggle("open-menu");
  logo.classList.toggle("header__logo--hide");
  burgerLogo.classList.toggle("burger__logo--show");
};

const closeBurger = () => {
  setTimeout(() => {
    document.body.classList.remove("boody-hidden");
    burger.classList.remove("open-menu");
    overlayScreen.classList.remove("show-overlay");
    headerNav.classList.remove("open-menu");
    navList.classList.remove("open-menu");
    logo.classList.remove("header__logo--hide");
    burgerLogo.classList.remove("burger__logo--show");
  }, 1500);
};

burger.addEventListener("click", openBurger);
overlayScreen.addEventListener("click", openBurger);
overlayScreen.addEventListener("click", closeBurger);
navItems.forEach((el) => el.addEventListener("click", closeBurger));
headerNav.addEventListener("click", closeBurger);
