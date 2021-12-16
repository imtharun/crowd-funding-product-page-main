"use strict";

const menu = document.querySelector(".hamburgerMenu");
const overlay = document.querySelector(".overlay");
const thankyouModal = document.querySelector(".thankyouModal");
const bookmark = document.querySelector(".bookmark");
const bookmarkText = document.querySelector(".bookmarkText");
const bookmarkCircle = document.querySelector(".bookmarkCircle");
const bookmarkPath = document.querySelector(".bookmarkPath");

menu.addEventListener("click", function () {});

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
