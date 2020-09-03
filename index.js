let colors = ["green", "brown", "black", "yellow", "blue"];

let body = document.querySelector("body");

let button = document.querySelector("button");

button.addEventListener("click", changeColor);
function changeColor() {
  let randomColor = Math.floor(Math.random() * colors.length);

  body.style.background = colors[randomColor];
}
