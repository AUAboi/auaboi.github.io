import { isSnakeOnSquare, increaseBody } from "./snake.js";

const sheetSnake = document.getElementById("snake-sheet").sheet;
const sheetSquare = document.getElementById("square-sheet").sheet;

let lastRandomColor = "";

let square = squareRandomizer();

export let score = 0;

export function updateSquare() {
  if (isSnakeOnSquare(square)) {
    increaseBody();

    //Dynamically add square color to stylesheet
    sheetSnake.deleteRule(0);
    let styles = ".snake-color {";
    styles += `background: #${lastRandomColor};}`;
    sheetSnake.insertRule(styles, 0);

    score++;
    square = squareRandomizer();
  }
}

export function renderSquare(canvas) {
  const squareDiv = document.createElement("div");
  squareDiv.style.gridRowStart = square.y;
  squareDiv.style.gridColumnStart = square.x;
  squareDiv.classList.add("square");
  squareDiv.classList.add("square-color");
  canvas.appendChild(squareDiv);
}

function squareRandomizer() {
  let position;
  while (position == null || isSnakeOnSquare(position)) {
    position = randomPosition();
  }

  //Dynamically add random color to stylesheet
  sheetSquare.deleteRule(0);
  let squareStyles = ".square-color {";
  lastRandomColor = randomColor();
  squareStyles += `background: #${lastRandomColor};}`;
  sheetSquare.insertRule(squareStyles, 0);
  return position;
}

function randomPosition() {
  return {
    x: Math.floor(Math.random() * 21) + 1,
    y: Math.floor(Math.random() * 21) + 1,
  };
}

function randomColor() {
  return Math.floor(Math.random() * 16777215).toString(16);
}
