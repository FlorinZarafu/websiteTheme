// getting the css selectors for slides and controls
const slides = document.querySelector(".slider").children;
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
// initialize a counter to 0
let index = 0;
// function for iterate slide backwards
const prevSlide = () => {
  index === 0 ? (index = slides.length - 1) : index--;
  changeSlide();
};
// function for iterate slide forwards
const nextSlide = () => {
  index === slides.length - 1 ? (index = 0) : index++;
  changeSlide();
};
// remove active class and add it to current slide function
const changeSlide = () => {
  removeActive();
  slides[index].classList.add("active");
};
// remove active class function
const removeActive = () => {
  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.remove("active");
  }
};
// when click a button stop the autoplay function
const resetTimer = () => {
  clearInterval(timer);
  timer = setInterval(autoPlay, 6000);
};
// auto play function for autmoated slides
const autoPlay = () => {
  nextSlide();
};
// set interval
let timer = setInterval(autoPlay, 6000);
// when click on left button change to previous slide
prev.addEventListener("click", () => {
  prevSlide();
  resetTimer();
});
// when click on right button change to next slide
next.addEventListener("click", () => {
  nextSlide();
  resetTimer();
});
