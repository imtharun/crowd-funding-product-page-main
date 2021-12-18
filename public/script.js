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

bambooSelect.addEventListener("click", function () {
  selectedModal.classList.remove("hidden");
  secTwo.scrollIntoView({ behavior: "smooth" });
  secTwoCnt.classList.remove("close__2");
  secTwo.classList.add("border-moderateCyan");
});

blackSelect.addEventListener("click", function () {
  selectedModal.classList.remove("hidden");
  secThree.scrollIntoView({ behavior: "smooth" });
  secThreeCnt.classList.remove("close__3");
  secThree.classList.add("border-moderateCyan");
});

noRewardPledgeBtn.addEventListener("click", () => {
  backers = Number.parseInt(totalBackers.textContent.replace(",", "")) + 1;
  backed = Number.parseInt(totalBacked.textContent.slice(1).replace(",", ""));
  const current = Number.parseInt(noRewardPledge.value);
  backed += current;
  selectedModal.classList.add("hidden");
  thankyouModal.classList.remove("hidden");
});

bambooStandBtn.addEventListener("click", () => {
  backers = Number.parseInt(totalBackers.textContent.replace(",", "")) + 1;
  backed = Number.parseInt(totalBacked.textContent.slice(1).replace(",", ""));
  if(bambooStand.value === "") return;
  const current = Number.parseInt(bambooStand.value);
  backed += current;

  if (Number.parseInt(totalBamboos[0].textContent) === 1) {
    console.log("inside bamboo container", secsTwo);
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
  if(blackStand.value === "") return;
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
  console.log("outside bmb container");
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
    totalBacked.textContent.slice(1).replace(",", "")
  );
  let percent = (num / 100100) * 100;
  console.log(percent);
  if (percent < 100) {
    console.log("less than 100");
    progressBar.classList.remove("w-[39.9%]");
    progressBar.style.width = `${percent}%`;
  } else {
    console.log("greater than 100");
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
