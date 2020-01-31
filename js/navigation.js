// get css selector for close, open, nav list and nav links
const openNav = document.querySelector(".open-nav");
const closeNav = document.querySelector(".close-nav");
const navList = document.querySelector(".nav-list");
const navListItems = document.querySelector(".nav-list-items");
const navLinks = document.querySelectorAll(".nav-list-items li a");
// function for showing the nav
const showNav = () => {
  navList.classList.add("show-nav-list");
  openNav.style.display = "none";
  navListItems.classList.add("nav-list-items-origin");
};
// function for hiding the nav
const hideNav = () => {
  navList.classList.remove("show-nav-list");
  openNav.style.display = "block";
  navListItems.classList.remove("nav-list-items-origin");
};
// add active for current link function
function addLinkActive() {
  removeLinkActive();
  this.classList.add("active-link");
  navList.classList.remove("show-nav-list");
  openNav.style.display = "block";
}
// remove active class for the links function
const removeLinkActive = () => {
  navLinks.forEach(link => link.classList.remove("active-link"));
};
// when click a link remove the show nav class
navLinks.forEach(link => link.addEventListener("click", addLinkActive));
// event listener on click to call the functions
openNav.addEventListener("click", showNav);
closeNav.addEventListener("click", hideNav);
