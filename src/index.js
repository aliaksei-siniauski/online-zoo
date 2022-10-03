window.onload = function () {
  alertMessage();
  /*   addPriceClickHandler();
   */ addProgressRollerHandler();
};
const alertMessage = () => {
  alert(
    "Вітаю, калі ласка, не маглі бы вы праверыць маю працу у сераду. Дзякуй Вялікі!"
  );
};
const addPriceClickHandler = () => {
  document.querySelector(".prices").addEventListener("click", (e) => {
    if (e.target.classList.contains("price")) {
      let clickedPriceTag = e.target;
      removeSelectedPriceTag();
      selectClictedPriceTag(clickedPriceTag);
    }
  });
};

const removeSelectedPriceTag = () => {
  let prices = document.querySelectorAll(".prices .price");
  prices.forEach((price) => {
    price.classList.remove("price--active");
  });
};

const selectClictedPriceTag = (clickedPriceTag) => {
  clickedPriceTag.classList.add("price--active");
};

/* Roller */

const addProgressRollerHandler = () => {
  document.querySelector(".progress-rollers").addEventListener("click", (e) => {
    if (e.target.classList.contains("progress-roller")) {
      let clickedRollerTag = e.target;
      removeSelectedProgressRolerTag();
      selectProgressRolerTag(clickedRollerTag);
    }
  });
};

const removeSelectedProgressRolerTag = () => {
  let rollers = document.querySelectorAll(".progress-rollers .progress-roller");
  rollers.forEach((roller) => {
    roller.classList.remove("progress-roller--active");
  });
};

const selectProgressRolerTag = (clickedRollerTag) => {
  clickedRollerTag.classList.add("progress-roller--active");
};
