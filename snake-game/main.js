import {
  SPEED,
  updateSnake,
  renderSnake,
  snakeHead,
  snakeCollision,
} from "./snake.js";
import { renderSquare, updateSquare, score } from "./square.js";
const canvas = document.querySelector("#canvas");

let renderTime = 0;

let isDead = false;

function gameLoop(currentTime) {
  if (isDead) {
    if (confirm(`Your score is ${score}. Press ok to restart`)) {
      window.location.reload();
    }
    return;
  }
  const secDiff = (currentTime - renderTime) / 100;
  window.requestAnimationFrame(gameLoop);

  if (secDiff < 1 / SPEED) {
    return;
  }
  renderTime = currentTime;

  updateLoop();
  renderBoard();
}

function updateLoop() {
  updateSnake();
  updateSquare();
  checkCollision();
}

function renderBoard() {
  canvas.innerHTML = "";
  renderSnake(canvas);
  renderSquare(canvas);
}

function checkCollision() {
  isDead = gridCollision(snakeHead()) || snakeCollision();
}

function gridCollision(position) {
  return position.x < 1 || position.x > 21 || position.y < 1 || position.y > 21;
}

window.requestAnimationFrame(gameLoop);
