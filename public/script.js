"use strict";

const menu = document.querySelector(".hamburgerMenu");
const hamMenu = document.querySelector(".hamMenu");
const hamSticks = document.querySelector(".hamSticks");
const hamCross = document.querySelector(".hamCross");

const backThisProject = document.querySelector(".backThisProject");

const overlay = document.querySelector(".overlay");

const thankBtn = document.querySelector(".thankBtn");
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

const bambooSelect = document.querySelector(".bambooSelect");
const blackSelect = document.querySelector(".blackSelect");

const noRewardPledge = document.querySelector(".noRewardPledge");
const noRewardPledgeBtn = document.querySelector(".noRewardPledgeBtn");

const blackStand = document.querySelector(".blackStand");
const blackStandBtn = document.querySelector(".blackStandBtn");

const bambooStand = document.querySelector(".bambooStand");
const bambooStandBtn = document.querySelector(".bambooStandBtn");

const totalBacked = document.querySelector(".totalBacked");
const totalBackers = document.querySelector(".totalBackers");
const progressBar = document.querySelector(".progressBar");

const totalBamboos = document.querySelectorAll(".totalBamboos");
const totalBlacks = document.querySelectorAll(".totalBlacks");

const secsOne = document.querySelectorAll(".sec_1");
const secsTwo = document.querySelectorAll(".sec_2");
const secsThree = document.querySelectorAll(".sec_3");

const errorTwo = document.querySelector(".sec__2__error");
const errorOne = document.querySelector(".sec__1__error");
const errorThree = document.querySelector(".sec__3__error");

const labelOne = document.querySelector(".sec__1__label");
const labelTwo = document.querySelector(".sec__2__label");
const labelThree = document.querySelector(".sec__3__label");

let backers, backed;

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
  secOneCnt.classList.remove("close__1");
  secOne.classList.add("border-moderateCyan");
});

radioInputTwo.addEventListener("click", function () {
  secTwoCnt.classList.remove("close__2");
  secTwo.classList.add("border-moderateCyan");
});

radioInputThree.addEventListener("click", function () {
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
  labelOne.querySelector("input").checked = false;
  labelTwo.querySelector("input").checked = false;
  labelThree.querySelector("input").checked = false;
});

selectedModalClose.addEventListener("click", function () {
  selectedModal.classList.add("hidden");
  if (!secOneCnt.classList.contains("close__1")) {
    noRewardPledge.value = "";
    secOneCnt.classList.add("close__1");
    errorOne.classList.add("hidden");
    noRewardPledge.classList.remove("focus:border-red-500");
    noRewardPledge.classList.remove("border-red-500");
    // errorOne.classList.add("hidden");
    secOne.classList.remove("border-moderateCyan");
  }
  if (!secTwoCnt.classList.contains("close__2")) {
    bambooStand.value = "";
    secTwoCnt.classList.add("close__2");
    errorTwo.classList.add("hidden");
    bambooStand.classList.remove("focus:border-red-500");
    bambooStand.classList.remove("border-red-500");
    secTwo.classList.remove("border-moderateCyan");
  }

  if (!secThreeCnt.classList.contains("close__3")) {
    blackStand.value = "";
    errorThree.classList.add("hidden");
    blackStand.classList.remove("focus:border-red-500");
    blackStand.classList.remove("border-red-500");
    secThreeCnt.classList.add("close__3");
    secThree.classList.remove("border-moderateCyan");
  }

  if (!secFourCnt.classList.contains("close__4")) {
    secFourCnt.classList.add("close__4");
    secFour.classList.remove("border-moderateCyan");
  }
});

labelOne.addEventListener("click", () => {
  if (labelTwo.querySelector("input").checked === false) {
    secTwo.classList.remove("border-moderateCyan");
    secTwoCnt.classList.add("close__2");
    errorTwo.classList.add("hidden");
    bambooStand.value = "";
    bambooStand.classList.remove("focus:border-red-500");
    bambooStand.classList.remove("border-red-500");
  }
  if (labelThree.querySelector("input").checked === false) {
    secThree.classList.remove("border-moderateCyan");
    errorThree.classList.add("hidden");
    blackStand.value = "";
    blackStand.classList.remove("focus:border-red-500");
    blackStand.classList.remove("border-red-500");
    secThreeCnt.classList.add("close__3");
  }
});

labelTwo.addEventListener("click", () => {
  if (labelOne.querySelector("input").checked === false) {
    secOne.classList.remove("border-moderateCyan");
    secOneCnt.classList.add("close__1");
    noRewardPledge.value = "";
  }
  if (labelThree.querySelector("input").checked === false) {
    secThree.classList.remove("border-moderateCyan");
    secThreeCnt.classList.add("close__3");
    blackStand.value = "";
    errorThree.classList.add("hidden");
    blackStand.classList.remove("focus:border-red-500");
    blackStand.classList.remove("border-red-500");
  }
});

labelThree.addEventListener("click", () => {
  if (labelOne.querySelector("input").checked === false) {
    secOne.classList.remove("border-moderateCyan");
    secOneCnt.classList.add("close__1");
    noRewardPledge.value = "";
  }
  if (labelTwo.querySelector("input").checked === false) {
    secTwo.classList.remove("border-moderateCyan");
    secTwoCnt.classList.add("close__2");
    errorTwo.classList.add("hidden");
    bambooStand.value = "";
    bambooStand.classList.remove("focus:border-red-500");
    bambooStand.classList.remove("border-red-500");
  }
});

bambooSelect.addEventListener("click", function () {
  selectedModal.classList.remove("hidden");
  bambooStand.classList.remove("focus:border-red-500");
  secTwo.scrollIntoView({ behavior: "smooth" });
  secTwoCnt.classList.remove("close__2");
  radioInputTwo.checked = true;
  secTwo.classList.add("border-moderateCyan");
});

blackSelect.addEventListener("click", function () {
  selectedModal.classList.remove("hidden");
  secThree.scrollIntoView({ behavior: "smooth" });
  secThreeCnt.classList.remove("close__3");
  radioInputThree.checked = true;
  secThree.classList.add("border-moderateCyan");
});

noRewardPledgeBtn.addEventListener("click", () => {
  backers = Number.parseInt(totalBackers.textContent.replace(",", "")) + 1;
  backed = Number.parseInt(totalBacked.textContent.slice(1).replace(",", ""));
  const current = Number.parseInt(noRewardPledge.value);
  backed += current;
  if (
    noRewardPledge.value === "" ||
    !Number.isInteger(Number.parseInt(noRewardPledge.value))
    // noRewardPledge.value.match(/^[a-z0-9]+$/i)
  ) {
    noRewardPledge.classList.add("focus:outline-none");
    errorOne.classList.remove("hidden");
    noRewardPledge.classList.add("focus:border-red-500");
    noRewardPledge.classList.add("border-red-500");
    return;
  } else {
    noRewardPledge.classList.remove("focus:border-red-500");
    noRewardPledge.classList.remove("border-red-500");
    selectedModal.classList.add("hidden");
    errorOne.classList.add("hidden");
    thankyouModal.classList.remove("hidden");
  }
});

bambooStandBtn.addEventListener("click", () => {
  backers = Number.parseInt(totalBackers.textContent.replace(",", "")) + 1;
  backed = Number.parseInt(totalBacked.textContent.slice(1).replace(",", ""));
  if (
    Number.parseInt(bambooStand.value) < 25 ||
    bambooStand.value === "" ||
    !Number.isInteger(Number.parseInt(bambooStand.value))
  ) {
    console.log("inside bamboo stand");
    errorTwo.classList.remove("hidden");
    bambooStand.classList.add("focus:outline-none");
    bambooStand.classList.add("focus:border-red-500");
    bambooStand.classList.add("border-red-500");
    return;
  } else {
    errorTwo.classList.add("hidden");
    bambooStand.classList.remove("border-red-500");
    bambooStand.classList.remove("focus:outline-none");
    bambooStand.classList.remove("focus:border-red-500");
  }
  const current = Number.parseInt(bambooStand.value);
  backed += current;

  if (Number.parseInt(totalBamboos[0].textContent) === 1) {
    secsTwo.forEach((ele, i) => {
      ele.classList.add("opacity-50");
      if (i > 0) {
        ele.querySelector(`.sec_2_btn`).classList.add("bg-DaryGray");
        ele.querySelector(`.sec_2_btn`).classList.remove("bg-moderateCyan");
      }
      ele.querySelector(`.sec_2_btn`).classList.add("cursor-default");
      ele.querySelector(`.sec_2_btn`).classList.add("bg-darkGray");
      ele.querySelector(`.sec_2_btn`).classList.remove("hover:bg-darkCyan");
      ele.querySelector(`.sec_2_btn`).setAttribute("disabled", "1");
    });
    totalBamboos.forEach((ele) => {
      ele.innerHTML =
        0 + `<span class="text-darkGray text-sm pl-2 font-normal">left</span>`;
    });
    selectedModal.classList.add("hidden");
    thankyouModal.classList.remove("hidden");
    return;
  }
  console.log("outside bmb container");
  totalBamboos.forEach((ele) => {
    ele.innerHTML =
      Number.parseInt(ele.textContent) -
      1 +
      `<span class="text-darkGray text-sm pl-2 font-normal">left</span>`;
  });
  selectedModal.classList.add("hidden");
  thankyouModal.classList.remove("hidden");
});

blackStandBtn.addEventListener("click", () => {
  backers = Number.parseInt(totalBackers.textContent.replace(",", "")) + 1;
  backed = Number.parseInt(totalBacked.textContent.slice(1).replace(",", ""));
  if (
    Number.parseInt(blackStand.value) < 75 ||
    blackStand.value === "" ||
    !Number.isInteger(Number.parseInt(blackStand.value))
  ) {
    errorThree.classList.remove("hidden");
    blackStand.classList.add("focus:outline-none");
    blackStand.classList.add("focus:border-red-500");
    blackStand.classList.add("border-red-500");
    return;
  } else {
    blackStand.classList.remove("border-red-500");
    errorThree.classList.add("hidden");
    blackStand.classList.remove("focus:outline-none");
    blackStand.classList.remove("focus:border-red-500");
  }
  const current = Number.parseInt(blackStand.value);
  backed += current;
  if (Number.parseInt(totalBlacks[0].textContent) === 1) {
    secsThree.forEach((ele, i) => {
      ele.classList.add("opacity-50");
      if (i > 0) {
        ele.querySelector(`.sec_3_btn`).classList.add("bg-DaryGray");
        ele.querySelector(`.sec_3_btn`).classList.remove("bg-moderateCyan");
      }
      ele.querySelector(`.sec_3_btn`).classList.add("cursor-default");
      ele.querySelector(`.sec_3_btn`).classList.add("bg-darkGray");
      ele.querySelector(`.sec_3_btn`).classList.remove("hover:bg-darkCyan");
      ele.querySelector(`.sec_3_btn`).setAttribute("disabled", "1");
    });
    totalBlacks.forEach((ele) => {
      ele.innerHTML =
        0 + `<span class="text-darkGray text-sm pl-2 font-normal">left</span>`;
    });
    selectedModal.classList.add("hidden");
    thankyouModal.classList.remove("hidden");
    return;
  }
  totalBlacks.forEach((ele) => {
    ele.innerHTML =
      Number.parseInt(ele.textContent) -
      1 +
      `<span class="text-darkGray text-sm pl-2 font-normal">left</span>`;
  });

  selectedModal.classList.add("hidden");
  thankyouModal.classList.remove("hidden");
});

thankBtn.addEventListener("click", () => {
  totalBackers.textContent = backers
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  thankyouModal.classList.add("remove");
  totalBacked.textContent =
    "$" + backed.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  const num = Number.parseInt(
    totalBacked.textContent.slice(1).replaceAll(",", "")
  );
  let percent = (num * 100) / 100100;
  if (percent < 100) {
    progressBar.classList.remove("w-[39.9%]");
    progressBar.style.width = `${percent}%`;
  } else {
    progressBar.classList.remove("w-[39.9%]");
    progressBar.style.width = `100%`;
  }

  if (!secOneCnt.classList.contains("close__1")) {
    secOneCnt.classList.add("close__1");
    secOne.classList.remove("border-moderateCyan");
  }
  if (!secTwoCnt.classList.contains("close__2")) {
    bambooStand.value = "";
    secTwoCnt.classList.add("close__2");
    secTwo.classList.remove("border-moderateCyan");
  }

  if (!secThreeCnt.classList.contains("close__3")) {
    blackStand.value = "";
    secThreeCnt.classList.add("close__3");
    secThree.classList.remove("border-moderateCyan");
  }

  if (!secFourCnt.classList.contains("close__4")) {
    secFourCnt.classList.add("close__4");
    secFour.classList.remove("border-moderateCyan");
  }

  thankyouModal.classList.add("hidden");
  noRewardPledge.value = "";
});
