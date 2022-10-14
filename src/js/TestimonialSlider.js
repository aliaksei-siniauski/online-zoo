export { startTestimonialsSlider };

const startTestimonialsSlider = () => {
  const testimonialWrapper = document.querySelector(".testimonial__wrapper");
  const testimonialsInputScrollLiner =
    document.querySelector("input[type=range]");

  testimonialsInputScrollLiner.addEventListener("input", () => {
    let offset = testimonialsInputScrollLiner.value;
    testimonialWrapper.style.transition = "ease-in-out 1000ms transform";
    testimonialWrapper.style.transform = `translateX(${-offset * 300}px)`;
  });
};
startTestimonialsSlider();
