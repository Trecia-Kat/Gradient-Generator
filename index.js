let colourOne = document.getElementById("colour-a");
let colourTwo = document.getElementById("colour-b");
let currentDirection = "to bottom";
let outputCode = document.getElementById("code");

// setting the directions
function setDirection(value, _this) {
  let directions = document.querySelectorAll(".btns button");
  for (let i of directions) {
    i.classList.remove("active");
  }
  _this.classList.add("active");
  currentDirection = value;
  console.log(currentDirection);
}

// generates source code for gradient
function generateCode() {
  outputCode.value = `background-image: linear-gradient(${currentDirection}, ${colourOne.value}, ${colourTwo.value});`

  document.getElementsByTagName("BODY")[0].style.backgroundImage= `linear-gradient(${currentDirection}, ${colourOne.value}, ${colourTwo.value})`;
}
generateCode();

// enable the copy button
function copy() {
  outputCode.select();
  document.execCommand("copy");
  alert("Gradient Copied!");
}