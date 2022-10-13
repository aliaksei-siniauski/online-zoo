export { addTestimonialHandler };

const testimonials = document.querySelectorAll(".testimonial");
const modalOverlay = document.querySelector(".modal__overlay");
const modals = document.querySelectorAll(".modal");
const iconClose = document.querySelectorAll(".icon--close");

const addTestimonialHandler = () => {
  if (window.matchMedia("(max-width: 970px)").matches) {
    testimonials.forEach((el) => {
      el.addEventListener("click", (e) => {
        let testimonialUser = e.currentTarget.getAttribute("data-user");
        document
          .querySelector(`[data-target="${testimonialUser}"]`)
          .classList.add("modal--show");
        modalOverlay.classList.add("modal__overlay--show");
      });
    });
    closeModalByButton();
    removeModalOverlay();
    closeModalByKey();
  }
};

const closeModalByButton = () => {
  iconClose.forEach((el) => {
    el.addEventListener("click", () => {
      modalOverlay.classList.remove("modal__overlay--show");
      modals.forEach((el) => {
        el.classList.remove("modal--show");
      });
    });
  });
};

const removeModalOverlay = () => {
  modalOverlay.addEventListener("click", (el) => {
    if (el.target.classList.contains("modal__overlay")) {
      modalOverlay.classList.remove("modal__overlay--show");
      modals.forEach((el) => {
        el.classList.remove("modal--show");
      });
    }
  });
};

const closeModalByKey = () => {
  document.addEventListener("keydown", (el) => {
    if (el.key === "Escape") {
      modals.forEach((el) => {
        el.classList.remove("modal--show");
        modalOverlay.classList.remove("modal__overlay--show");
      });
    }
  });
};
addTestimonialHandler();
