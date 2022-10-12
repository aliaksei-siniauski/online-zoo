import { toggleMenu } from "./js/BurgerMenu.js";
import { startTestimonialsSlider } from "./js/TestimonialSlider.js";
import { addTestimonialHandler } from "./js/TestimonialModal.js";

/* Create random petCardItem */

const leftSlide = document.querySelector(".pet-cards__left");
const rightSlide = document.querySelector(".pet-cards__right");
const petCatrds = document.querySelector(".pet-cards");
const buttonPrev = document.querySelector(".arrow-prev");
const buttonNext = document.querySelector(".arrow-next");

const animals = [
  {
    animal: "GIANT PANDA",
    location: "Native to Southwest China",
    img: "./images/animal/desktop/animal-1.jpg",
    alt: "panda",
    food: "./images/svg/banana-bamboo_icon.svg",
    foodalt: "banana",
    foodclass: "banana",
  },
  {
    animal: "EAGLES",
    location: "Native to South America",
    img: "./images/jph/eagle.jpg",
    alt: "eagle",
    food: "./images/svg/meet-fish_icon.svg",
    foodalt: "meat",
    foodclass: "meat",
  },
  {
    animal: "GORILLAS",
    location: "Native to Congo",
    img: "./images/jph/gorilla.jpg",
    alt: "gorilla",
    food: "./images/svg/banana-bamboo_icon.svg",
    foodalt: "banana",
    foodclass: "banana",
  },
  {
    animal: "TWO-TOED SLOTH",
    location: "Mesoamerica, South America",
    img: "./images/jph/sloth.jpg",
    alt: "sloth",
    food: "./images/svg/banana-bamboo_icon.svg",
    foodalt: "banana",
    foodclass: "banana",
  },
  {
    animal: "CHEETAHS",
    location: "Native to Africa",
    img: "./images/jph/cheetahs.jpg",
    alt: "cheetahs",
    food: "./images/svg/meet-fish_icon.svg",
    foodalt: "meat",
    foodclass: "meat",
  },
  {
    animal: "PENGUINS",
    location: "Native to Antarctica",
    img: "./images/jph/penguin.jpg",
    alt: "penguin",
    food: "./images/svg/meet-fish_icon.svg",
    foodalt: "meat",
    foodclass: "meat",
  },
  {
    animal: "ALLIGATORS",
    location: "Native to Southeastern U.S.",
    img: "./images/jph/alligator.jpg",
    alt: "alligator",
    food: "./images/svg/meet-fish_icon.svg",
    foodalt: "meat",
    foodclass: "meat",
  },
];

function createCard() {
  const card = document.createElement("div");
  card.classList.add("pet-card");
  let i = Math.floor(Math.random() * 7);
  card.id = animals[i].animal;
  card.innerHTML = `<div>
    <img src="${animals[i].img}" alt="${animals[i].alt}" class="pets_img">
  </div>
  <div>
    <h4 class="pets__card-title">
      ${animals[i].animal}
    </h4>
    <p class="pets__card-native">${animals[i].location}</p>
  </div>
  <img src="${animals[i].food}" alt="${animals[i].foodalt}" class="${animals[i].foodclass}">`;

  return card;
}

function createSlide() {
  let arr = [];
  leftSlide.innerHTML = "";
  rightSlide.innerHTML = "";
  let j = 0;
  while (j < 6) {
    const card = createCard();
    if (!arr.includes(card.id)) {
      /* leftSlide.appendChild(card); */
      rightSlide.appendChild(card);
      arr.push(card.id);
      j++;
    }
  }
}
createSlide();
