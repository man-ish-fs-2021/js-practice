// const button = document.querySelector("button");
// button.addEventListener("click", moveRight);
// function moveRight() {
//   // debugger
//   debugger;
//   const circle = document.getElementById("circle");
//   const { left } = getComputedStyle(circle);
//   circle.style.left = left + 10;
// }
// breakpoints
// select click under mouse
const button = document.querySelector("button");
button.addEventListener("click", moveRight);
function moveRight() {
  const circle = document.getElementById("circle");
  const { left } = getComputedStyle(circle);
  circle.style.left = left + 10;
}
