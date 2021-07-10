const container = document.querySelector(".container");


for (let i = 1; i < 21; i++) {
  const box = document.createElement("div");
  box.classList.add("box");
  container.appendChild(box);
}

const btn = document.querySelector(".btn");
const randomColorBoxes = document.querySelectorAll(".box");

btn.addEventListener("click", addColor);

randomColorBoxes[0].style.backgroundColor = "#000";
randomColorBoxes[0].style.borderColor = "#00ff00";

function RandomColorCode() {
  let colorCodes = "0123456789abcdef";
  let colorLength = 6;
  let color = "";

  for (let i = 0; i < colorLength; i++) {
    let randomColor = Math.floor(Math.random() * colorCodes.length);
    console.log(randomColor);
    color += colorCodes.substring(randomColor, randomColor + 1);
    console.log(colorCodes.substring(randomColor,));
  }
  return "#" + color;
}

function addColor() {
  randomColorBoxes.forEach((e) => {
    let newColor = RandomColorCode();
    e.style.backgroundColor = newColor;
    e.innerHTML = newColor;
    randomColorBoxes[0].style.borderColor = "#fff";

    for (let i = 0; i < randomColorBoxes.length; i++) {
      randomColorBoxes[i].addEventListener("click", () => {
        randomColorBoxes[i].style.borderColor = "#00ff00";
        container.style.backgroundColor =
          randomColorBoxes[i].style.backgroundColor;
      });
    }
  });
}
