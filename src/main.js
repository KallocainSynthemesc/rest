import { createApp } from "vue";
import App from "./App.vue";

import "./assets/main.css";

createApp(App).mount("#app");

// get elements
let slides = document.querySelectorAll(".slide");
let currentSlide = document.querySelector(".slide.show");

var slideIndex = document.querySelector("#index");
var toLeftBtn = document.querySelector("#left-btn");
var toRightBtn = document.querySelector("#right-btn");

let presentationController = document.querySelector("#presentation-area");
var toFullScreenBtn = document.querySelector("#full-screen");
var toSmallScreenBtn = document.querySelector("#small-screen");

// initailize defualt values
// eslint-disable-next-line no-unused-vars
var screenStatus = 0;
var currentSlideNo = 1;
var totalSides = 0;

// run init script
init();

function init() {
  getCurrentSlideNo();
  totalSides = slides.length;
  setSlideNo();
  hideLeftButton();
  hideRightButton();
}

// handle clicks on left and right icons
toLeftBtn.addEventListener("click", moveToLeftSlide);
toRightBtn.addEventListener("click", moveToRightSlide);
slideIndex.addEventListener("change", changeByIndex);
// handle full screen and small screen modes
toFullScreenBtn.addEventListener("click", fullScreenMode);
toSmallScreenBtn.addEventListener("click", smallScreenMode);

// hide left button at first page
function hideLeftButton() {
  if (currentSlideNo == 1) {
    toLeftBtn.classList.remove("show");
  } else {
    toLeftBtn.classList.add("show");
  }
}

// hide right button at last page
function hideRightButton() {
  if (currentSlideNo === totalSides) {
    toRightBtn.classList.remove("show");
  } else {
    toRightBtn.classList.add("show");
  }
}

// moves to left slide
function moveToLeftSlide() {
  var tempSlide = currentSlide;
  currentSlide = currentSlide.previousElementSibling;
  tempSlide.classList.remove("show");
  currentSlide.classList.add("show");

  init();
  modifyIFrameSrc(currentSlide);
}

// moves to right slide
function moveToRightSlide() {
  var tempSlide = currentSlide;
  currentSlide = currentSlide.nextElementSibling;
  tempSlide.classList.remove("show");
  currentSlide.classList.add("show");

  init();
  modifyIFrameSrc(currentSlide);
}

// get current slide
function getCurrentSlideNo() {
  let counter = 0;

  slides.forEach((slide) => {
    counter++;

    if (slide.classList.contains("show")) {
      currentSlideNo = counter;
    }
  });
}

// go full screen
function fullScreenMode() {
  presentationController.classList.add("full-screen");
  //presentationController.style.fontSize = "1.8em";
  toFullScreenBtn.classList.remove("show");
  toSmallScreenBtn.classList.add("show");

  screenStatus = 1;
}

// switch to small screen
function smallScreenMode() {
  presentationController.classList.remove("full-screen");
  toFullScreenBtn.classList.add("show");
  toSmallScreenBtn.classList.remove("show");
  screenStatus = 0;
}

// update counter
function setSlideNo() {
  slideIndex.value = currentSlideNo
  slideIndex.innerText = ` of ${totalSides}`;
}

function changeByIndex(){
  var tempSlide = currentSlide;
  currentSlide = slides[slideIndex.value -1];
  tempSlide.classList.remove("show");
  currentSlide.classList.add("show");

  init();
  modifyIFrameSrc(currentSlide);
}

function modifyIFrameSrc(slideElement){
  const iFrame = slideElement.getElementsByTagName("iframe")[0];
  if (iFrame != undefined) {
    const parentElement = iFrame.parentElement;
    console.log(iFrame.src);
    if (
      parentElement !== undefined &&
      parentElement.hasAttribute("data-link") &&
      iFrame.src.includes("lightswitch")
    ) {
      iFrame.setAttribute("src", parentElement.dataset.link);
    }
  }
}
