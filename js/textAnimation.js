// animated scroll text appear from left
const scrollAppearLeft = () => {
  // getting class refernce for the text
  const aboutTopH2 = document.querySelector(".about-left-content h2");
  const aboutTopH3 = document.querySelector(".about-left-content h3");
  const aboutBottomH3 = document.querySelector(".text-anim h3");
  const aboutBottomA = document.querySelector(".text-anim a");
  // creating an array with all the text elements
  const array = [aboutTopH2, aboutTopH3, aboutBottomH3, aboutBottomA];
  // for each element inside the array when the scroll is at his top add the animated class
  for (let i = 0; i < array.length; i++) {
    const positionAboutBig = array[i].getBoundingClientRect().top;
    const screenPosition = window.innerHeight;
    // ternary operator for checking the condition if the scroll position is at top of the element
    positionAboutBig < screenPosition
      ? array[i].classList.add("text-appear-left")
      : "";
  }
};
// animated scroll text appear from right
const scrollAppearRight = () => {
  // getting class refernce for the text
  const aboutTopRightH3 = document.querySelector(".about-right-content h3");
  const aboutTopRightA = document.querySelector(".about-right-content a");
  const offerA = document.querySelector(".special-offer a");
  const offer2A = document.querySelector(".special-offer-2 a");
  // creating an array with all the text elements
  const array = [aboutTopRightH3, aboutTopRightA, offerA, offer2A];
  // for each element inside the array when the scroll is at his top add the animated class
  for (let i = 0; i < array.length; i++) {
    const positionAboutBig = array[i].getBoundingClientRect().top;
    const screenPosition = window.innerHeight;
    // ternary operator for checking the condition if the scroll position is at top of the element
    positionAboutBig < screenPosition
      ? array[i].classList.add("text-appear-right")
      : "";
  }
};
// animated scroll text fade in
const scrollFadeIn = () => {
  // getting class refernce for the text
  const offerH2 = document.querySelector(".special-offer h2");
  const offerH4 = document.querySelector(".special-offer h4");
  const ofer2H2 = document.querySelector(".special-offer-2 h2");
  const ofer2H4 = document.querySelector(".special-offer-2 h4");
  const ofer2P = document.querySelector(".special-offer-2 p");
  const trainingI = document.querySelectorAll(".classes-content");
  const programsI = document.querySelectorAll(".type-inner i");
  // creating an array with all the text elements
  const array = [
    offerH2,
    offerH4,
    trainingI[0],
    trainingI[1],
    trainingI[2],
    programsI[0],
    programsI[1],
    programsI[2],
    ofer2H2,
    ofer2H4,
    ofer2P
  ];
  // for each element inside the array when the scroll is at his top add the animated class
  for (let i = 0; i < array.length; i++) {
    const positionAboutBig = array[i].getBoundingClientRect().top;
    const screenPosition = window.innerHeight;
    // ternary operator for checking the condition if the scroll position is at top of the element
    positionAboutBig < screenPosition
      ? array[i].classList.add("text-fade-in")
      : "";
  }
};
// call the functions when the scroll event occurs
window.addEventListener("scroll", scrollAppearLeft);
window.addEventListener("scroll", scrollAppearRight);
window.addEventListener("scroll", scrollFadeIn);
