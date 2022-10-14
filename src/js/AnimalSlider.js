export { btnPrev, btnNext, petCarousel };

const btnPrev = document.querySelector(".arrow-prev");
const btnNext = document.querySelector(".arrow-next");
const petCarousel = document.querySelector(".animals-cards__carousel");
const petItemsCardsLeft = document.querySelector("#animal-item--left");
const petItemsCardsRight = document.querySelector("#animal-item--right");

const sortPetCardItemLeft = () => {
  petItemsCardsLeft;
  [...petItemsCardsLeft.children]
    .sort((a, b) => 0.5 - Math.random())
    .forEach((node) => petItemsCardsLeft.appendChild(node));
};

const sortPetCardItemRight = () => {
  petItemsCardsRight;
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

petCarousel.addEventListener("animationend", (animationEvent) => {
  if (animationEvent.animationName === "move-left") {
    petCarousel.classList.remove("transition-left");
    document.querySelector("#animal-item--active").innerHTML =
      petItemsCardsRight.innerHTML;
  } else {
    petCarousel.classList.remove("transition-right");
    document.querySelector("#animal-item--active").innerHTML =
      petItemsCardsLeft.innerHTML;
  }
  petCarousel.classList.remove("transition-left");
  petCarousel.classList.remove("transition-right");
  btnPrev.addEventListener("click", moveRight);
  btnNext.addEventListener("click", moveLeft);
});
