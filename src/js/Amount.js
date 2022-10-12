export {
  addPricesClickHandler,
  addProgressRollersClickHandler,
  checkValueAmountNumber,
  addRollerValuetoAnotherAmount,
  adddSumAmount,
};

///

const addPricesClickHandler = () => {
  document.querySelector(".progress__prices").addEventListener("click", (e) => {
    if (e.target.classList.contains("price")) {
      let clickedPrice = e.target;
      removeActivePrice();
      addActivePrice(clickedPrice);
    }
  });
};

const removeActivePrice = () => {
  let prices = document.querySelectorAll(".progress__prices .price");
  prices.forEach((price) => {
    price.classList.remove("price--active");
  });
};

const addActivePrice = (clickedPrice) => {
  clickedPrice.classList.add("price--active");
};
addPricesClickHandler();

const addProgressRollersClickHandler = () => {
  document.querySelector(".rollers").addEventListener("click", (e) => {
    if (e.target.classList.contains("roller")) {
      const price = document.querySelector(`[for="${e.target.id}"]`);
      removeActivePrice();
      price.classList.add("price--active");
    }
  });
};

addProgressRollersClickHandler();

///

const addRollerValuetoAnotherAmount = () => {
  const anotherAmountSum = document.querySelector(".another-amount");
  let rollers = document.querySelectorAll(".roller");
  rollers.forEach((roller) => {
    roller.addEventListener("change", (el) => {
      anotherAmountSum.value = el.target.value;
    });
  });
};
addRollerValuetoAnotherAmount();

///

const checkValueAmountNumber = () => {
  document.querySelector(".another-amount").addEventListener("input", (e) => {
    let valueInput = e.target.value;
    if (valueInput.length > 4) {
      e.target.value = e.target.value.slice(0, 4);
    }
  });
};
checkValueAmountNumber();

///

const adddSumAmount = () => {
  document.querySelector(".another-amount").addEventListener("input", (e) => {
    removeActivePrice();
    let rollers = document.querySelectorAll(".rollers .roller");
    rollers.forEach((roller) => {
      roller.removeAttribute("checked");
    });
    if (e.target.value === "5000") {
      let price = document.querySelector(`[for="${e.target.value}"]`);
      let roller = document.querySelector(`[value="${e.target.value}"]`);
      roller.setAttribute("checked", "checked");
      price.classList.add("price--active");
    } else if (e.target.value === "2000") {
      let price = document.querySelector(`[for="${e.target.value}"]`);
      let roller = document.querySelector(`[value="${e.target.value}"]`);
      roller.setAttribute("checked", "checked");
      price.classList.add("price--active");
    }
    if (e.target.value === "1000") {
      let price = document.querySelector(`[for="${e.target.value}"]`);
      let roller = document.querySelector(`[value="${e.target.value}"]`);
      roller.setAttribute("checked", "checked");
      price.classList.add("price--active");
    } else if (e.target.value === "500") {
      let price = document.querySelector(`[for="${e.target.value}"]`);
      let roller = document.querySelector(`[value="${e.target.value}"]`);
      roller.setAttribute("checked", "checked");
      price.classList.add("price--active");
    }
    if (e.target.value === "250") {
      let price = document.querySelector(`[for="${e.target.value}"]`);
      let roller = document.querySelector(`[value="${e.target.value}"]`);
      roller.setAttribute("checked", "checked");
      price.classList.add("price--active");
    } else if (e.target.value === "100") {
      let price = document.querySelector(`[for="${e.target.value}"]`);
      let roller = document.querySelector(`[value="${e.target.value}"]`);
      roller.setAttribute("checked", "checked");
      price.classList.add("price--active");
    }
    if (e.target.value === "50") {
      let price = document.querySelector(`[for="${e.target.value}"]`);
      let roller = document.querySelector(`[value="${e.target.value}"]`);
      roller.setAttribute("checked", "checked");
      price.classList.add("price--active");
    } else if (e.target.value === "25") {
      let price = document.querySelector(`[for="${e.target.value}"]`);
      let roller = document.querySelector(`[value="${e.target.value}"]`);
      roller.setAttribute("checked", "checked");
      price.classList.add("price--active");
    }
  });
};

adddSumAmount();
