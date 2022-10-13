export { btnPrev, btnNext, petCarousel };

const btnPrev = document.querySelector(".arrow-prev");
const btnNext = document.querySelector(".arrow-next");
const petCarousel = document.querySelector(".animals-cards__carousel");

const sortPetCardItemLeft = () => {
  let petItemsCardsLeft = document.querySelector("#animal-item--left");
  [...petItemsCardsLeft.children]
    .sort((a, b) => 0.5 - Math.random())
    .forEach((node) => petItemsCardsLeft.appendChild(node));
};

const sortPetCardItemRight = () => {
  let petItemsCardsRight = document.querySelector("#animal-item--right");
  [...petItemsCardsRight.children]
    .sort((a, b) => 0.5 - Math.random())
    .forEach((node) => petItemsCardsRight.appendChild(node));
};

const moveLeft = () => {
  sortPetCardItemRight();
  petCarousel.classList.add("transition-left");
  btnPrev.removeEventListener("click", moveRight);
  btnNext.removeEventListener("click", moveLeft);
  moveLeft;
};

const moveRight = () => {
  sortPetCardItemLeft();
  petCarousel.classList.add("transition-right");
  btnPrev.removeEventListener("click", moveRight);
  btnNext.removeEventListener("click", moveLeft);
};

btnPrev.addEventListener("click", moveRight);
btnNext.addEventListener("click", moveLeft);

petCarousel.addEventListener("animationend", () => {
  petCarousel.classList.remove("transition-left");
  petCarousel.classList.remove("transition-right");
  btnPrev.addEventListener("click", moveRight);
  btnNext.addEventListener("click", moveLeft);
});
