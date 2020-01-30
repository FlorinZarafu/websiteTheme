const slides = document.querySelector(".slider").children;
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
console.log(slides, prev, next);
let index = 0;
prev.addEventListener("click", function() {
  prevSlide();
  resetTimer();
});
next.addEventListener("click", function() {
  nextSlide();
  resetTimer();
});

function prevSlide() {
  if (index === 0) {
    index = slides.length - 1;
  } else {
    index--;
  }
  changeSlide();
}

function nextSlide() {
  if (index === slides.length - 1) {
    index = 0;
  } else {
    index++;
  }
  changeSlide();
}
function changeSlide() {
  removeActive();
  slides[index].classList.add("active");
}

function removeActive() {
  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.remove("active");
  }
}

function resetTimer() {
  clearInterval(timer);
  timer = setInterval(autoPlay, 6000);
}

function autoPlay() {
  nextSlide();
}

let timer = setInterval(autoPlay, 6000);
