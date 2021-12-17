"use strict";

const menu = document.querySelector(".hamburgerMenu");
const hamMenu = document.querySelector(".hamMenu");
const hamSticks = document.querySelector(".hamSticks");
const hamCross = document.querySelector(".hamCross");

const backThisProject = document.querySelector(".backThisProject");

const overlay = document.querySelector(".overlay");
const thankyouModal = document.querySelector(".thankyouModal");

const bookmark = document.querySelector(".bookmark");
const bookmarkText = document.querySelector(".bookmarkText");
const bookmarkCircle = document.querySelector(".bookmarkCircle");
const bookmarkPath = document.querySelector(".bookmarkPath");

const selectedModal = document.querySelector(".popModal");
const selectedModalClose = document.querySelector(".selectedModal__close");

const secOne = document.querySelector(".sec__1");
const secOneCnt = document.querySelector(".sec__1__cnt");
const radioInputOne = document.querySelector(".radio__input__1");

const secTwo = document.querySelector(".sec__2");
const secTwoCnt = document.querySelector(".sec__2__cnt");
const radioInputTwo = document.querySelector(".radio__input__2");

const secThree = document.querySelector(".sec__3");
const secThreeCnt = document.querySelector(".sec__3__cnt");
const radioInputThree = document.querySelector(".radio__input__3");

const secFour = document.querySelector(".sec__4");
const secFourCnt = document.querySelector(".sec__4__cnt");
const radioInputFour = document.querySelector(".radio__input__4");

bookmark.addEventListener("click", function () {
  if (bookmark.dataset.active === "0") {
    bookmarkText.textContent = "Bookmarked";
    bookmarkText.classList.add("desk:text-moderateCyan");
    bookmarkText.classList.remove("desk:text-gray-500");
    bookmarkCircle.setAttribute("fill", "hsl(176, 50%, 47%)");
    bookmarkPath.setAttribute("fill", "#fff");
    bookmark.setAttribute("data-active", "1");
  } else {
    bookmarkText.textContent = "Bookmark";
    bookmarkText.classList.remove("desk:text-moderateCyan");
    bookmarkText.classList.add("desk:text-gray-500");
    bookmarkCircle.setAttribute("fill", "#2F2F2F");
    bookmarkPath.setAttribute("fill", "#B1B1B1");
    bookmark.setAttribute("data-active", "0");
  }
});

menu.addEventListener("click", function () {
  console.log("clicked");
  if (menu.dataset.active === "0") {
    hamSticks.classList.add("hidden");
    hamCross.classList.remove("hidden");
    hamMenu.classList.remove("hidden");
    menu.setAttribute("data-active", "1");
  } else {
    hamSticks.classList.remove("hidden");
    hamCross.classList.add("hidden");
    hamMenu.classList.add("hidden");
    menu.setAttribute("data-active", "0");
  }
});

radioInputOne.addEventListener("click", function () {
  console.log("Clicked radion input 1");
  secOneCnt.classList.remove("close__1");
  secOne.classList.add("border-moderateCyan");
});

radioInputTwo.addEventListener("click", function () {
  console.log("Clicked radion input 2");
  secTwoCnt.classList.remove("close__2");
  secTwo.classList.add("border-moderateCyan");
});

radioInputThree.addEventListener("click", function () {
  console.log("Clicked radion input 3");
  secThreeCnt.classList.remove("close__3");
  secThree.classList.add("border-moderateCyan");
});

// radioInputFour.addEventListener("click", function () {
//   console.log("Clicked radion input 4");
//   secFourCnt.classList.remove("close__4");
//   secFour.classList.add("border-moderateCyan");
// });

backThisProject.addEventListener("click", function () {
  selectedModal.classList.remove("hidden");
});

selectedModalClose.addEventListener("click", function () {
  selectedModal.classList.add("hidden");
});
