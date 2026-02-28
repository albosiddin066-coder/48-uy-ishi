const leftArrow = document.querySelector(".left-arrow");
const rightArrow = document.querySelector(".right-arrow");
const watchImg = document.querySelector(".right img");
const price = document.querySelector(".price");
const body = document.body;

const watches = [
  {
    img: "https://i.imgur.com/7QF5a6R.png",
    price: "$430.00",
    bg: "linear-gradient(to right, #e7a66a, #f3d6b9)"
  },
  {
    img: "https://i.imgur.com/Z6X6K0P.png",
    price: "$520.00",
    bg: "linear-gradient(to right, #2f2f2f, #bcbcbc)"
  },
  {
    img: "https://i.imgur.com/rP7xJ5L.png",
    price: "$610.00",
    bg: "linear-gradient(to right, #0f2027, #2c5364)"
  }
];

let current = 0;

function updateWatch() {
  watchImg.style.opacity = 0;
  watchImg.style.transform = "scale(0.9)";

  setTimeout(() => {
    watchImg.src = watches[current].img;
    price.textContent = watches[current].price;
    body.style.background = watches[current].bg;

    watchImg.style.opacity = 1;
    watchImg.style.transform = "scale(1)";
  }, 200);
}

rightArrow.addEventListener("click", () => {
  current++;
  if (current >= watches.length) current = 0;
  updateWatch();
});

leftArrow.addEventListener("click", () => {
  current--;
  if (current < 0) current = watches.length - 1;
  updateWatch();
});