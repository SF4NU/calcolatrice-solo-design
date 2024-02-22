const buttonBlackWhite = document.querySelector(".black-white");
const calculatorColors = document.querySelector(".tasti-colors");

let isTrue = false;
buttonBlackWhite.addEventListener("click", () => {
  if (!isTrue) {
    isTrue = true;
    calculatorColors.classList.add("black-white-colors");
    console.log("hello")
  }
})
