// function for change nav on scroll
const navScrolled = () => {
  const nav = document.querySelector(".nav");
  const navHeight = nav.offsetHeight;
  let scrollpos = window.scrollY;
  scrollpos > navHeight
    ? nav.classList.add("scrolled")
    : nav.classList.remove("scrolled");
};
window.addEventListener("scroll", navScrolled);
