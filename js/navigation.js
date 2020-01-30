// get css selector for close, open and nav list
const openNav = document.querySelector(".open-nav");
const closeNav = document.querySelector(".close-nav");
const navList = document.querySelector(".nav-list");
const navListItems = document.querySelector(".nav-list-items");
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
// event listener on click to call the functions
openNav.addEventListener("click", showNav);
closeNav.addEventListener("click", hideNav);
