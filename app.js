let words = document.querySelectorAll(".word");
words.forEach((word) => {
  let letters = word.textContent.split("");
  word.textContent = "";
  letters.forEach((letter) => {
    let span = document.createElement("span");
    span.textContent = letter;
    span.className = "letter";
    word.append(span);
  });
});

let currentWordIndex = 0;
let maxWordIndex = words.length - 1;
words[currentWordIndex].style.opacity = "1";

let changeText = () => {
  let currentWord = words[currentWordIndex];
  let nextWord =
    currentWordIndex === maxWordIndex ? words[0] : words[currentWordIndex + 1];

  Array.from(currentWord.children).forEach((letter, i) => {
    setTimeout(() => {
      letter.className = "letter out";
    }, i * 80);
  });
  nextWord.style.opacity = "1";
  Array.from(nextWord.children).forEach((letter, i) => {
    letter.className = "letter behind";
    setTimeout(() => {
      letter.className = "letter in";
    }, 340 + i * 80);
  });
  currentWordIndex =
    currentWordIndex === maxWordIndex ? 0 : currentWordIndex + 1;
};

changeText();
setInterval(changeText, 3000);

// active menu ////////////////////////////////////////////
let menuLi = document.querySelectorAll("header ul li a");
let sections = document.querySelectorAll("section");

function activeMenu() {
  let len = sections.length;
  while (--len && window.scrollY + 97 < sections[len].offsetTop) {}
  Array.from(menuLi).forEach((sec) => sec.classList.remove("active"));
  menuLi[len].classList.add("active");
}

activeMenu();
window.addEventListener("scroll", activeMenu);

// sticky menu ////////////////////////////////////////////

const header = document.querySelector("header");
window.addEventListener("scroll", function () {
  header.classList.toggle("sticky", window.scrollY > 50);
});

//toggle icon navbar///////////////////////////////////////
const menuIcon = document.querySelector("#menu-icon");
const navList = document.querySelector(".navlist");
const navItems = document.querySelectorAll(".navlist li");

menuIcon.addEventListener("click", function () {
  navList.classList.toggle("open");
});

navItems.forEach(function (item) {
  item.addEventListener("click", function () {
    navList.classList.remove("open");
  });
});

//GitHub Button/////////////////////////////////////////////

const openInNewTab = (event) => {
  event.preventDefault(); // Zapobiegamy domyślnej akcji przeglądarki
  const url = event.target.getAttribute("href");
  window.open(url, "_blank");
};

const downloadCvButton = document.getElementById("downloadCv");
const githubButton = document.getElementById("btnGithub");

downloadCvButton.addEventListener("click", openInNewTab);
githubButton.addEventListener("click", openInNewTab);

//mix it up porfolio section

let mixer = mixitup(".portfolio-gallery");
